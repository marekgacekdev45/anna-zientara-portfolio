// import Image from 'next/image'
// import WorkImage from '@/public/assets/proces.webp'

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
		<section className='section pt-12 sm:pt-24 pb-12'>
			{/* CONTAINER */}
			<div className='wrapper grid xl:grid-cols-2 gap-20 '>
				{/* image */}
				<div className='flex justify-center lg:justify-start items-center '>
					{/* <Image
						src={WorkImage}
						alt='Sofa z kominkiem'
						className='aspect-square max-h-[600px] shadow-2xl shadow-gray-700 '
						placeholder='blur'
					/> */}
					
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
						<BaseLink href='/proces-projektowy' className='pt-12 xl:self-end'>
							Dowiedz się więcej
						</BaseLink>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Process