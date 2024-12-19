import type { Metadata } from 'next'
import { font_heading, font_text } from '@/app/utils/fonts'

import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl'>
			<body className={`${font_heading} ${font_text} antialiased`}>{children}</body>
		</html>
	)
}
