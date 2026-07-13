import type { NextConfig } from "next";

const isGH = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGH ? "/tamish-portfolio" : "",
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
      {
        protocol: "https",
        hostname: "hits.sh",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
