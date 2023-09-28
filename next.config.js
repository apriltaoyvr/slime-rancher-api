/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
      },
    ],
  },
};

module.exports = nextConfig
