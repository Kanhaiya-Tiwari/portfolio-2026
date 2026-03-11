/** @type {import('next').NextConfig} */

// GitHub Pages serves at https://<user>.github.io/<repo>/
// basePath and assetPrefix must match your repo name exactly
const repoName = process.env.GITHUB_REPOSITORY?.replace(/^[^/]+\//, '') || 'portfolio-2026-knhapndt';
const basePath = `/${repoName}`;
const assetPrefix = `${basePath}/`; // trailing slash required for CSS/JS assets

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: [],
    remotePatterns: [],
  },
}

module.exports = nextConfig

