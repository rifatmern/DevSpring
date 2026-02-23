/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**", // allow all paths from this host
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**", // allow all paths from this host
      },
    ],
  },
};

module.exports = nextConfig;