/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  basePath: "/praktikum9", // Pastikan huruf kecil sesuai repo
  assetPrefix: "/praktikum9", // Pastikan huruf kecil sesuai repo
  images: {
    unoptimized: true,
  },
};

export default nextConfig;