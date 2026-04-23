import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/instagram-search-query-optimization',
        destination: '/instagram-search-queries-optimization',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
