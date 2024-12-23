import { Metadata } from 'next'

import { Provider } from '@/app/utils/provider'
import { font_heading, font_text } from '@/app/utils/fonts'

import './globals.css'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' suppressHydrationWarning>
			<head>
				<meta name='apple-mobile-web-app-title' content='Anna Zientara' />
			</head>
			<body className={`${font_heading} ${font_text}`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
