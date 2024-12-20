// import Image from 'next/image'
// import HeroImg from '@/public/hero.webp'
import Link from 'next/link'
import { CircleArrowDown } from 'lucide-react'
import BaseLink from '../base-link'

const Hero = () => {
	return (
		<section className='relative flex justify-center items-center  w-full h-screen  text-gray-300 '>
			<div className=' flex flex-col md:flex-row justify-between gap-12 sm:gap-0 sm:h-[70%] 2xl:h-[60%] w-[90%] z-10'>
				<div className='xl:w-1/3'>
					<h1 className='text-5xl smtext-8xl lg:text-9xl font-heading '>Architektura pełna harmonii</h1>
				</div>
				<div className='flex flex-col gap-6 justify-end items-end pl-20 sm:pl-0  xl:w-1/3 2xl:w-1/4  text-end'>
					<p className='text-xl sm:text-2xl font-light' >
						Przekonaj się, jak tworzone przeze mnie wnętrza łączą styl życia z nowoczesnym designem.
					</p>
					<BaseLink href='/portfolio' className='after:bg-white '>
						Zobacz portfolio
					</BaseLink>
				</div>
			</div>

			<Link href='/#o-mnie' aria-label='Przejdź do sekcji o mnie'>
				<CircleArrowDown
					className='absolute bottom-4 sm:bottom-12 left-1/2 -translate-x-1/2 sm:left-[4.6rem] w-12 h-12 animate-pulse'
					strokeWidth={0.5}
				/>
			</Link>

			{/* <Image
				src={HeroImg}
				alt='Projekt w wykonaniu Anna Zientara'
				sizes='(max-width: 640px) 640px, 100vw'
				quality={75}
				priority
				fill
				placeholder='blur'
				className='object-cover absolute inset-0 -z-10'
			/> */}

			<div className='absolute inset-0 bg-black opacity-40'></div>
		</section>
	)
}

export default Hero
