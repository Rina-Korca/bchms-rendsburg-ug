/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds (for CI/CD)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Reduce memory usage
  swcMinify: true,
}

export default nextConfig
