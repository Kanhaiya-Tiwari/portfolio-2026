/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-2026-knhapndt',  // GitHub Pages repo path
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: [],
    remotePatterns: [],
  },
}

module.exports = nextConfig

