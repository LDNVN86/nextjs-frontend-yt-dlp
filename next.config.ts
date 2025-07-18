import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: [
  //     "img.youtube.com",
  //     "i.ytimg.com",
  //     "p16-sign-sg.tiktokcdn.com",
  //     "scontent.fsgn5-8.fna.fbcdn.net",
  //     "instagram.fsgn2-1.fna.fbcdn.net",
  //     "p9-sign-sg.tiktokcdn.com",
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
