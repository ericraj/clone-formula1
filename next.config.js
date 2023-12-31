/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.formula1.com" },
      { protocol: "https", hostname: "media.formula1.com" }
    ]
  }
};

module.exports = nextConfig;
