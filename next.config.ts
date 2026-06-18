import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: export plain HTML/CSS/JS to `out/`, deployable on any
  // static host (GitHub Pages, Netlify, Cloudflare Pages, S3, …).
  output: "export",
  images: {
    // next/image optimization needs a server, which a static export doesn't
    // have — serve images as-is.
    unoptimized: true,
  },
  // Emit `/path/index.html` so dynamic routes resolve correctly on static hosts.
  trailingSlash: true,
};

export default nextConfig;
