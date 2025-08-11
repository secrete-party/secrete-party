// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',                 // generate static files in ./out
  basePath: isProd ? '/secrete-party' : '',
  // Optional but often helpful on static hosts:
  trailingSlash: true,
}

export default nextConfig
