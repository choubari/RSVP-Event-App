/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gcdn.imgix.net', 'images.unsplash.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'gcdn.imgix.net',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
