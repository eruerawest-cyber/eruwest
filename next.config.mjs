// Static export so the site can be hosted on GitHub Pages.
// basePath is only applied in CI, where the site is served from
// https://eruerawest-cyber.github.io/eruwest/ — local dev stays at /.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubActions ? "/eruwest" : "",
};

export default nextConfig;
