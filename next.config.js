/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["d31ycvomo5jvoe.cloudfront.net"],
  },
};

module.exports = nextConfig;
