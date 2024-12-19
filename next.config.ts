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
				source: '/o-mnie',
				destination: '/about',
			},
			{
				source: '/proces-projektowy',
				destination: '/process',
			},
			{
				source: '/kontakt',
				destination: '/contact',
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
				source: '/about',
				destination: '/o-mnie',
				permanent: true,
			},
			{
				source: '/process',
				destination: '/proces-projektowy',
				permanent: true,
			},
			{
				source: '/contact',
				destination: '/kontakt',
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
