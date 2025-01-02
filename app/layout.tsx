import { Metadata } from 'next'
import Script from 'next/script'

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
				<Script src={`https://cdn-cookieyes.com/client_data/f259d3248cdd48d43efe1cac/script.js`} strategy="beforeInteractive"></Script>
				<meta name='apple-mobile-web-app-title' content='Anna Zientara' />
			</head>
			<body className={`${font_heading} ${font_text}`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}

{
	/* <script id="cookieyes" type="text/javascript" src=""></script>  */
}
