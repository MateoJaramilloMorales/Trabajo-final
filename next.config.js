/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //api imagenes
    domains: ["res.cloudinary.com", "i.ytimg.com"],
  },
};

module.exports = nextConfig;
