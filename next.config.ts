import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" } : {}),
  ...(basePath ? { basePath } : {}),
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
