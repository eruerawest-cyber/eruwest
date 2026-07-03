// Static export hosted on GitHub Pages behind the custom domain
// eruwest.com, which serves from the domain root — so no basePath.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
