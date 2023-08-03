/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thejobtalk.com',
      },
      {
        protocol: 'https',
        hostname: 'media.rss.com',
      },
    ],
  },
}

module.exports = nextConfig
