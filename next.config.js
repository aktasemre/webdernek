/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.arslandedekoyu.org.tr',
      },
      {
        protocol: 'https',
        hostname: 'arslandedekoyu.org.tr',
      },
    ],
  },
  i18n: {
    locales: ['tr'],
    defaultLocale: 'tr',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/anasayfa',
        destination: '/',
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
