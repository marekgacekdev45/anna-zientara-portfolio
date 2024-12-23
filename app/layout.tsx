import { generateMetadata } from '@/lib/metadata'
import { Provider } from '@/app/utils/provider'
import { font_heading, font_text } from '@/app/utils/fonts'

import './globals.css'

export const metadata = generateMetadata()

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
