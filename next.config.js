/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
  swcMinify: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
});
