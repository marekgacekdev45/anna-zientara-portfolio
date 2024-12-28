import Image from 'next/image'
import WorkImage from '@/public/proces.webp'

import BaseLink from '@/components/base-link'

const processList = [
	{
		title: 'Koncepcja',
		desc: 'Tworzę unikalną wizję wnętrza, dostosowaną do Twoich potrzeb i stylu życia.',
	},
	{
		title: 'Projekt',
		desc: 'Opracowuję szczegółowy plan przestrzeni, uwzględniając estetykę i funkcjonalność.',
	},
	{
		title: 'Dokumentacja',
		desc: 'Przygotowuję pełen zestaw rysunków technicznych i specyfikacji materiałów.',
	},
	{
		title: 'Nadzór autorski',
		desc: 'Czuwam nad realizacją projektu, aby zapewnić jego zgodność z wizją.',
	},
]

const Process = () => {
	return (
		<section className='section py-6  sm:py-12'>
			{/* CONTAINER */}
			<div className='wrapper grid xl:grid-cols-2 gap-12 2xl:gap-20 '>
				{/* image */}
				<div className='flex justify-center lg:justify-start items-center order-1 xl:order-none w-full md:w-[80%] xl:w-full mx-auto'>
					<Image
						src={WorkImage}
						alt='wizualizacja wystroju wnętrza wykonana przez Anna Zientara'
						
						placeholder='blur'
						className=' aspect-square w-full object-cover'
						
						width={600}
						height={600}
						quality={70}
					/>
					
				</div>
				{/* text */}
				<div className='flex flex-col justify-between items-center gap-12 lg:gap-0 '>
					<div className='xl:w-[85%] flex flex-col space-y-5 '>
                        <div className='space-y-1'>
						<p className='preheading'>Proces</p>
						<h2 className='heading'>Projektowy</h2>
                        </div>
						<ul className='pt-12 space-y-16 lg:space-y-12 '>
							{processList.map((item, index) => (
								<li key={index}>
									<div className=' pb-4 space-y-2 border-b border-gray-400'>
										<h3 className='text-3xl'>{item.title}</h3>
										<p className='text'>{item.desc}</p>
									</div>
								</li>
							))}
						</ul>
						<BaseLink href='/proces-projektowy' className='pt-12 xl:self-end after:bg-black dark:after:bg-white'>
							Dowiedz się więcej
						</BaseLink>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Process