/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  images:{
    domains:['ipfs.thirdwebcdn.com','i.imgur.com','via.placeholder.com'],
  },
};

module.exports = nextConfig;
