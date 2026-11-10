import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Copyright year is stamped at build time so pages stay fully static.
  env: { BUILD_YEAR: String(new Date().getFullYear()) },
};

export default nextConfig;
