import { Metadata } from 'next'

export const generateMetadata = ({
	title = 'Anna Zientara - Architekt Wnętrz',
	description = 'Tworzę wyjątkowe, spersonalizowane wnętrza inspirowane stylem życia moich klientów. Anna Zientara – architekt wnętrz, który łączy harmonię z funkcjonalnością',
	url = 'https://anna-zientara-portfolio.netlify.app/',
}: {
	title?: string
	description?: string
	url?: string
} = {}): Metadata => {
	return {
		title: {
			default: title,
			template: `%s | Anna Zientara - Architekt Wnętrz`,
		},
		description: description,
		openGraph: {
			title: title,
			description: description,
			type: 'website',
			locale: 'pl_PL',
			url: url,
			siteName: 'Anna Zientara - Architekt Wnętrz',
		},
	}
}
