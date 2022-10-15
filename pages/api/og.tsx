/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(new URL('../../assets/fonts/Inter-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer());

const profileImage = `data:image/png;base64,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`;

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title';

    // ?author=<author>
    const hasAuthor = searchParams.has('author');
    const author = hasAuthor ? searchParams.get('author')?.slice(0, 100) : 'My default author';

    // ?createdAt=<createdAt>
    const hasCreatedAt = searchParams.has('createdAt');
    const createdAt = hasCreatedAt ? searchParams.get('createdAt')?.slice(0, 100) : 'My default createdAt';

    const fontData = await font;

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'radial-gradient(circle at 600px 500px, #F7B733 0%, #FC4A1A 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Inter"',
            fontStyle: 'normal',
            fontWeight: '700',
            color: 'white',
          }}
        >
          <p
            style={{
              position: 'absolute',
              width: '1002px',
              height: '240px',
              left: '100px',
              top: '100px',
              fontSize: '64px',
              lineHeight: '77px',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            {title}
          </p>
          <img
            width="256"
            height="256"
            src={profileImage}
            alt="profile image"
            style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              left: '100px',
              top: '435px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '50px',
            }}
          />
          <p
            style={{
              position: 'absolute',
              width: '902px',
              height: '43px',
              left: '198px',
              top: '438px',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '36px',
              lineHeight: '44px',

              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            {author}, {createdAt}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
