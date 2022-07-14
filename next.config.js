/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongodburl: "mongodb://localhost/todos",
}
}

module.exports = nextConfig
