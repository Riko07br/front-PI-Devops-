/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
