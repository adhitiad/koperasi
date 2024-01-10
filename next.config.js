/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "flowbite.com",
      "daisyui.com",
      "unsplash.com",
      "images.unsplash.com",
      "loremflickr.com",
    ],
  },
};

module.exports = nextConfig;
