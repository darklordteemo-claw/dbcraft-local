/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/dbcraft-local',
  assetPrefix: '/dbcraft-local',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
