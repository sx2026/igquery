import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
