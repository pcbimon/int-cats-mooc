import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://เว็บปลายทางของคุณ/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;