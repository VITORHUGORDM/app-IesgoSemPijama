import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Otimizações de imagens
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Otimizações de build
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Otimizações de performance
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
