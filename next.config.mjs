// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // generate static files in ./out
  images: { unoptimized: true },    // required for static export
  basePath: isProd ? '/secrete-party' : '',
  // Optional but often helpful on static hosts:
  trailingSlash: true,
}

export default nextConfig
