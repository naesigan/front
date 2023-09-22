/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/servertimer/:path*",
  //       destination: "http://localhost:8080/servertimer/:path*"
  //     }
  //   ]
  // }
}

module.exports = nextConfig
