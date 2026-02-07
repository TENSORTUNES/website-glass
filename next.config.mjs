/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // A2A v0.2 legacy support - serve agent-card.json at agent.json path
      {
        source: '/.well-known/agent.json',
        destination: '/.well-known/agent-card.json',
      },
    ];
  },
}

export default nextConfig
