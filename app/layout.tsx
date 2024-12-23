import { Metadata } from 'next'

import { Provider } from '@/app/utils/provider'
import { font_heading, font_text } from '@/app/utils/fonts'

import './globals.css'
import { generateMetadata } from '@/lib/metadata'




// export const metadata: Metadata = {
// 	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://anna-zientara-portfolio.netlify.app/'),
// 	title: {
// 		default: 'Anna Zientara - Architekt Wnętrz',
// 		template: '%s | Anna Zientara - Architekt Wnętrz',
// 	},
// 	description:
// 		'Tworzę wyjątkowe, spersonalizowane wnętrza inspirowane stylem życia moich klientów. Anna Zientara – architekt wnętrz, który łączy harmonię z funkcjonalnością.',
// 	generator: 'Next.js',
// 	applicationName: 'Anna Zientara - Architekt Wnętrz',
// 	referrer: 'origin-when-cross-origin',
// 	keywords: ['architekt wnętrz', 'projektowanie wnętrz', 'wnętrza', 'design',],
// 	authors: { name: 'Marek Gacek', url: 'https://marekgacekdev.pl' },
// 	creator: 'Marek Gacek',
// 	publisher: 'Marek Gacek',
// 	alternates: {
// 		canonical: '/',
// 	},
// 	openGraph: {
// 		title: 'Anna Zientara - Architekt Wnętrz',
// 		description:
// 			'Tworzę wyjątkowe, spersonalizowane wnętrza inspirowane stylem życia moich klientów. Anna Zientara – architekt wnętrz, który łączy harmonię z funkcjonalnością.',
// 		type: 'website',
// 		locale: 'pl_PL',
// 		url: '/',
// 		siteName: 'Anna Zientara - Architekt Wnętrz',
// 	},
// }

export const metadata: Metadata = generateMetadata({})

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
