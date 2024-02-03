/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'via.placeholder.com',
        protocol: 'https',
      },
      {
        hostname: 'i.scdn.co',
        protocol: 'https',
      },
      {
        hostname: 'media.giphy.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
