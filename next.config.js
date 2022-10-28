/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'deviconapi.vercel.app'
    ],
    dangerouslyAllowSVG: true
  }
}

module.exports = nextConfig;
