import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
  async rewrites() {
		return [
			{
				source: '/proces-projektowy',
				destination: '/process',
			},
			{
				source: '/polityka-prywatnosci',
				destination: '/privacy-policy',
			},
		
		]
	},
	async redirects() {
		return [
			{
				source: '/process',
				destination: '/proces-projektowy',
				permanent: true,
			},
			{
				source: '/privacy-policy',
				destination: '/polityka-prywatnosci',
				permanent: true,
			},
		
		]
	},
};

export default nextConfig;
