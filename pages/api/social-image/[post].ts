export default async (req, res) => {
  const postSlug = req.query.post;
  const post = searchPostBySlug(postSlug);

  const postThumbnail = generateThumbnail(post);

  res.writeHead(200, {
    "Cache-Control", "s-maxage=31536000, stale-while-revalidate",
    'Content-Type': 'image/png',
    'Content-Length': Buffer.byteLength(screenShotBuffer),
  });
};
