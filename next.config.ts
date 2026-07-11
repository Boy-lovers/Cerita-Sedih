import type { NextConfig } from "next";

// ==============================================
// KONFIGURASI NEXT.JS
// Kalau nanti mau nambah domain gambar lain (misalnya CDN foto project),
// tinggal tambahin di array `remotePatterns` di bawah.
// ==============================================
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" }, // thumbnail YouTube
      { protocol: "https", hostname: "yt3.googleusercontent.com" }, // avatar channel YouTube
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
