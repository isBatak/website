import { DOMParser } from 'xmldom';
// import * as canvas from 'canvas'; // cant install find a replacement
import fetch from 'node-fetch';
import { Canvg, presets } from 'canvg';
import { NextApiRequest, NextApiResponse } from 'next';

interface IWordsToLinesReducerOptions {
  rowCharacterCountLimit?: number;
  fontSize?: number;
  lineSpacing?: number;
}

const wordsToLinesReducer =
  ({ rowCharacterCountLimit = 20, fontSize = 0, lineSpacing = 0 }: IWordsToLinesReducerOptions) =>
  (previousValue: Array<any>, currentValue: string) => {
    // get the current line
    const currentLine = previousValue[previousValue.length - 1];

    if (currentLine) {
      // extract current text
      const { text } = currentLine;

      const newText = `${text} ${currentValue}`;

      if (newText.length > rowCharacterCountLimit) {
        previousValue.push({
          text: currentValue,
          x: 50,
          y: currentLine.y + fontSize + lineSpacing,
        });
      } else {
        // append do current line
        currentLine.text = `${currentLine.text} ${currentValue}`;
      }
    } else {
      // create a first line
      previousValue.push({
        text: currentValue,
        x: 50,
        y: 100,
      });
    }

    return previousValue;
  };

const generateSVG = (title: string) => {
  const rowCharacterCountLimit = 19;
  const fontSize = 70;
  const lineSpacing = 10;
  const words = title.split(' ');
  const lines = words.reduce(wordsToLinesReducer({ rowCharacterCountLimit, fontSize, lineSpacing }), []);

  return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <style>
        .title {
          font: bold ${fontSize}px sans-serif;
          fill: black;
        }
      </style>
      <rect width="1200" height="630" fill="white"/>
      <path d="M838.5 0H1200V630H621L838.5 0Z" fill="#C4C4C4"/>
      <circle cx="98" cy="542" r="50" fill="#C4C4C4"/>
      ${lines.map((line) => `<text x="${line.x}" y="${line.y}" class="title">${line.text}</text>`)}
    </svg>
  `;
};

// const preset = presets.node({
//   DOMParser,
//   canvas,
//   fetch,
// });

// const generateImage = async (svg: string) => {
//   const canvas = preset.createCanvas(800, 600);
//   const ctx = canvas.getContext('2d');
//   const v = Canvg.fromString(ctx, svg, preset);

//   // Render only first frame, ignoring animations.
//   await v.render();

//   return canvas.toBuffer();
// };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, type } = req.query;
  const svg = generateSVG(title as string);
  // const image = await generateImage(svg);

  // if (type === 'svg') {
  //   res.writeHead(200, {
  //     'Cache-Control': 'public, s-maxage=31536000, stale-while-revalidate',
  //     'Content-Type': 'image/svg+xml',
  //   });

  //   res.end(svg);
  // } else {
  //   res.writeHead(200, {
  //     'Cache-Control': 'public, s-maxage=31536000, stale-while-revalidate',
  //     'Content-Type': 'image/png',
  //     'Content-Length': Buffer.byteLength(image),
  //   });

  //   res.end(image);
  // }
};

export default handler;
