/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'a0.muscache.com',
            port: '',
            pathname: '/im/pictures/**',
          },
        ],
      },
}

module.exports = nextConfig
