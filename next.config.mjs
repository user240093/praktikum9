/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Menghasilkan folder 'out'
  basePath: "/praktikum9", // Sesuaikan dengan nama repo: praktikum9
  assetPrefix: "/praktikum9", // Sesuaikan dengan nama repo: praktikum9
  images: {
    unoptimized: true,
  },
};

export default nextConfig;