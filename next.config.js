/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // using swc(rust based compiler)
  swcMinify: true,
};

module.exports = nextConfig;
