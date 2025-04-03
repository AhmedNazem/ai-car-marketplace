/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self'  https://ai-car-marketplace.created.app;",
            // https://roadsidecoder.created.app
          },
        ],
      },
    ];
  },
};

export default nextConfig;
