import { Metadata } from 'next'

export const generateMetadata = ({
	title = 'Anna Zientara - Architekt Wnętrz',
	description = 'Tworzę wyjątkowe, spersonalizowane wnętrza inspirowane stylem życia moich klientów. Anna Zientara – architekt wnętrz, który łączy harmonię z funkcjonalnością',
	path = '/',
}: {
	title?: string
	description?: string
	path?: string
}): Metadata => {
	const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://anna-zientara-portfolio.netlify.app/')
	const fullPath = path === '/' ? metadataBase.href : new URL(path, metadataBase).href

	return {
		metadataBase,
		title: {
			default: title,
			template: `%s | Anna Zientara - Architekt Wnętrz`,
		},
		description,
		generator: 'Next.js',
		applicationName: 'Anna Zientara - Architekt Wnętrz',
		referrer: 'origin-when-cross-origin',
		keywords: ['architekt wnętrz', 'projektowanie wnętrz', 'wnętrza', 'design'],
		authors: { name: 'Marek Gacek', url: 'https://marekgacekdev.pl' },
		creator: 'Marek Gacek',
		publisher: 'Marek Gacek',
		alternates: {
			canonical: fullPath,
		},
		openGraph: {
			title,
			description,
			type: 'website',
			locale: 'pl_PL',
			url: fullPath,
			siteName: 'Anna Zientara - Architekt Wnętrz',
		},
	}
}
