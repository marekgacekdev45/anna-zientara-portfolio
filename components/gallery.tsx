'use client'

import { useState, useRef } from 'react'

import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/counter.css'

const Gallery = ({ images, alt }: { images: string[]; alt: string }) => {
	const [open, setOpen] = useState(false)
	const [index, setIndex] = useState(0)

	const fullscreenRef = useRef(null)
	return (
		<>
			{images.map((img, i) => (
				<div className='overflow-hidden'>
					<Image
						key={i}
						src={img}
						alt={`Projekt ${alt} w wykonaniu Anna Zientara`}
						width={500}
						height={500}
						quality={80}
						onClick={() => {
							setIndex(i)
							setOpen(true)
						}}
						className='w-full aspect-[5/4] object-cover shadow-md hover:scale-105 duration-200 cursor-pointer'
					/>
				</div>
			))}

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={images.map(src => ({ src }))}
				plugins={[Thumbnails, Counter, Fullscreen, Slideshow, Zoom]}
			/>
		</>
	)
}

export default Gallery
