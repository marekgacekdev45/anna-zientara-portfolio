
import { Playfair_Display,IBM_Plex_Sans,Montserrat} from 'next/font/google'

export const font_heading_init = Playfair_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
	weight: ['400','500','600','700','800','900'],
})

export const font_text_init = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-text',
	weight: ['100','200','300','400','500','600','700',],
})


export const font_heading = font_heading_init.variable
export const font_text = font_text_init.variable