/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.replace(/^[^/]+\//, '') || 'portfolio-2026';

// Don't use basePath in local development to prevent 404s at root
const basePath = isDev ? '' : (useCustomDomain ? '' : `/${repoName}`);
const assetPrefix = isDev ? '' : (useCustomDomain ? '' : `${basePath}/`);

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
