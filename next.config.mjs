// next.config.mjs
/** @type {import('next').NextConfig} */
const repo = 'secrete-party'; // GitHub repo name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required on static hosts
  // Only set these when building for GitHub Pages (project site subpath)
  ...(process.env.NEXT_PUBLIC_BASE_PATH
    ? {
        basePath: process.env.NEXT_PUBLIC_BASE_PATH,     // e.g. /secrete-party
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH + '/', // e.g. /secrete-party/
      }
    : {}),
  // Optional but helpful on static hosts so /foo/ maps to /foo/index.html:
  // trailingSlash: true,
};

export default nextConfig;
