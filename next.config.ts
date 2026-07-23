import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  output: isVercel ? undefined : "export",
  ...(isVercel ? {} : { basePath: "/tamish-portfolio" }),
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
