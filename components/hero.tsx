import Image, { StaticImageData } from 'next/image'

const Hero = ({
	title,
	image,
	description,
}: {
	title: string
	image: StaticImageData | string
	description?: string
}) => {
	return (
		<section className={`w-full h-[50vh] flex justify-center items-center text-center relative`}>
			
			{description ? (
				<div className='z-10 space-y-4'>
					<h1 className='text-5xl xs:text-7xl sm:text-8xl font-light z-10 text-gray-300'>{title}</h1>
					<p className='italic text-lg font-light text-gray-300'>{description}</p>
				</div>
			) : (
				<h1 className='text-5xl xs:text-7xl sm:text-8xl font-light z-10 text-gray-300'>{title}</h1>
			)}

			<Image
				src={image}
				alt='Projekt w wykonaniu Anna Zientara'
				fill
				quality={70}
				priority
				className='object-cover absolute inset-0 -z-10'
			/>

			<div className='absolute inset-0 bg-black opacity-50'></div>
		</section>
	)
}

export default Hero
