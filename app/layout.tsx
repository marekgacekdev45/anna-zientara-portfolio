
import { font_heading, font_text } from '@/app/utils/fonts'

import './globals.css'
import { Provider } from '@/app/utils/provider'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' suppressHydrationWarning>
			<body className={`${font_heading} ${font_text} antialiased`}>
				<Provider>

				{children}
				</Provider>
				</body>
		</html>
	)
}
