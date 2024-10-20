/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'headshots-inc.com',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'static.thenounproject.com',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**', // Allows all paths
      },
    ],
  },
};

module.exports = nextConfig;
