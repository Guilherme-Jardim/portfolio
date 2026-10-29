import type { NextConfig } from "next";

// No GitHub Pages o site fica em /portfolio. Localmente (dev) não há prefixo.
const repo = "portfolio";
const emProducao = process.env.NODE_ENV === "production";
const basePath = emProducao ? `/${repo}` : "";

const config: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default config;
