/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep development chunks separate from production build output. Running
  // `next build` must not invalidate chunks used by a live dev server.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};

module.exports = nextConfig;
