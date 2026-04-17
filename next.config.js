/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/how-we-work',
        destination: '/work-with-us',
        permanent: true,
      },
      {
        source: '/how-we-work/adobe-practice',
        destination: '/work-with-us/adobe-practice',
        permanent: true,
      },
      {
        source: '/services/workfront',
        destination: '/work-with-us',
        permanent: true,
      },
      {
        source: '/services/ai-automation',
        destination: '/work-with-us',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
