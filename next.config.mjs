/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Firebase Hosting (outputs to `out/`)
  output: "export",

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Required for static export
    unoptimized: true,
  },
}

export default nextConfig
