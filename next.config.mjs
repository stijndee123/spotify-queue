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
      {
        hostname: 'image-cdn-ak.spotifycdn.com',
        protocol: 'https',
      },
      {
        hostname: 'i2o.scdn.co',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
