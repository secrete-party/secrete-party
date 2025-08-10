/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // required for GitHub Pages (static)
  images: { unoptimized: true }, // next/image in static export
  // If you are NOT using a custom domain and will serve at:
  // https://<user>.github.io/<repo>/
  // then uncomment these:
  // basePath: '/secrete-party',
  // assetPrefix: '/secrete-party/',
};
export default nextConfig;
