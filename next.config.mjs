/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "https://www.saskatoonadultsoccer.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname:
          "https://www.saskatoonyouthsoccer.ca/cloud/saskatoonyouthsoccer",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
