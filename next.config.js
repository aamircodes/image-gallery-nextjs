/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
