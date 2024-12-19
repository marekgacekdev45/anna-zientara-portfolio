import { Open_Sans,Inter} from 'next/font/google'

export const font_heading_init = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
	weight: ['400'],
})

export const font_text_init = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-text',
	weight: ['400'],
})


export const font_heading = font_heading_init.variable
export const font_text = font_text_init.variable