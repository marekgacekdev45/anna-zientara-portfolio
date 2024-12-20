import Image from 'next/image'
import AnnaZientara from '@/public//anna-zientara.webp'

const About = () => {
	return (
		<section id='o-mnie' className='pt-12 sm:pt-24 pb-6 sm:pb-12'>
			{/* CONTAINER */}
			<div className='wrapper grid grid-cols-1 xl:grid-cols-2 gap-12 2xl:gap-20 '>
				{/* text */}
				<div className='flex flex-col justify-between items-start gap-12 lg:gap-0 '>
					<div className='space-y-5 w-[95%]'>
						<div className='space-y-1'>
							<span className='preheading'>Poznaj</span>
							<h2 className='heading'>Mnie</h2>
						</div>
						<p className='text'>
							Projektowanie wnętrz jest moją pasją od lat. Sprawia mi ogromną radość i satysfakcję, którymi uwielbiam
							się dzielić z moimi klientami. Najbardziej podstawowym i organicznym czynnikiem, który pobudza moją
							kreatywność są ludzie. Finalnie to dla nich jest każdy projekt. Lubię obserwować konkretne style życia,
							czerpać z nich, dostosowywać rozwiązania oraz wizję stricte pod odbiorcę. Moim zdaniem dobre wnętrze to
							takie, które jest spersonalizowane oraz takie, które starzeje się z klasą.
						</p>
						<p className='text'>
							Na co dzień bardzo ważny jest dla mnie mindset, pozytywne nastawienie do życia, harmonia oraz spokój.
							Właśnie w takim klimacie staram się zapewnić odbiór wnętrz, które tworzę.{' '}
						</p>
						<p className='text'>
							Moja architektura maksymalnie otwiera się na potrzeby klienta, a filozofia mojej marki stawia przede
							wszystkim na to, żeby wnętrze było azylem samym w sobie, przestrzenią, do której chce się wracać. Wierzę w
							to, że każde wnętrze powinno odzwierciedlać jego użytkowników oraz ułatwiać im codzienne funkcjonowanie.
							Tworzę projekty, które bazują na osobistym i przemyślanym podejściu.
						</p>
					</div>
				</div>
				{/* image */}
				<div className=' flex justify-center items-center xl:p-8 w-full md:w-[80%] xl:w-full mx-auto'>
					<Image
						src={AnnaZientara}
						alt='Anna Zientara'
						className=' aspect-square w-full object-cover'
						placeholder='blur'
						width={800}
						height={800}
						quality={90}
					/>
				</div>
			</div>
		</section>
	)
}

export default About
