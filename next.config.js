/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3.eu-central-1.amazonaws.com",
      "res.cloudinary.com",
      "flagcdn.com",
    ],
  },
};

module.exports = nextConfig;
