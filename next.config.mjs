/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "cdn.shopify.com",
      "burst.shopifycdn.com",
      "plus.unsplash.com",
    ],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
