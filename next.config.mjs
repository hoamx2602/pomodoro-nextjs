/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vqnloefnaxobj.vcdn.cloud',
        port: '',
      },
    ],
  },
};

export default nextConfig;
