// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "https://namratabhaumik.github.io/", // Explicit absolute URL for your domain
};

export default nextConfig;
