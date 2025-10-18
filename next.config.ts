import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export so the site can run on GitHub Pages.
  output: "export",
  images: {
    // Required for next/image when using static exports.
    unoptimized: true,
  },
};

export default nextConfig;
