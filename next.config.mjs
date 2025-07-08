// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  // No basePath or assetPrefix for this test.
  // The action will handle the root deployment.
};

export default nextConfig;
