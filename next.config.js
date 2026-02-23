/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/dbcraft-local',
  assetPrefix: '/dbcraft-local',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
