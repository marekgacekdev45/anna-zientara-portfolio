import { Metadata } from 'next'

import { Provider } from '@/app/utils/provider'
import { font_heading, font_text } from '@/app/utils/fonts'

import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL('https:anna-zientara-portfolio.netlify.app/'), // Dodaj metadataBase
	title: {
		default: 'Anna Zientara - Architekt Wnętrz',
		template: '%s | Anna Zientara - Architekt Wnętrz',
	},
	description:
		'Tworzę wyjątkowe, spersonalizowane wnętrza inspirowane stylem życia moich klientów. Anna Zientara – architekt wnętrz, który łączy harmonię z funkcjonalnością.',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'Anna Zientara - Architekt Wnętrz',
		description:
			'Tworzę wyjątkowe, spersonalizowane wnętrza inspirowane stylem życia moich klientów. Anna Zientara – architekt wnętrz, który łączy harmonię z funkcjonalnością.',
		type: 'website',
		locale: 'pl_PL',
		url: '',
		siteName: 'Anna Zientara - Architekt Wnętrz',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' suppressHydrationWarning>
			<body className={`${font_heading} ${font_text}`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
