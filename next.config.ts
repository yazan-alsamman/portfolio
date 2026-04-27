import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Build output folder (default is `.next`). Use `dist` if your host expects that path. */
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
