/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: []
  },
  async redirects() {
    return [
      {
        source: "/privacybeleid",
        destination: "/privacyverklaring",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

