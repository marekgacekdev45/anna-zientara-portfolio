import { generateMetadata } from '@/lib/metadata'

import Hero from '@/components/hero'
import TimelineItem from '@/components/timeline-item'
import Timeline from '@/components/timeline'

import HeroImage from '@/public/proces-hero.webp'

const conceptionList = [
	{
		title: 'Ankieta',
	},
	{
		title: 'Spotkanie z inwestorem',
		text: 'Omówienie ankiety i dalszych działań.',
	},
	{
		title: 'Inwentaryzacja',
		text: 'Wizyta na budowie w celu dokonania pomiarów.',
	},
	{
		title: 'Moodboard i inspiracje',
	},
	{
		title: 'Wstępny układ funkcjonalny',
		text: 'Pierwsza propozycja układu na podstawie ankiety i wcześniejszych ustaleń.',
	},
	{
		title: 'Spotkanie podsumowujące',
	},
]

const projectList = [
	{ title: 'Zatwierdzenie układu funkcjonalnego', text: 'Prezentacja od dwóch do trzech propozycji' },
	{ title: 'Elementy wyposażenia', text: 'Przedstawienie różnych propozycji i omówienie.' },
	{ title: 'Materiały wykończeniowe', text: 'Przedstawienie różnych propozycji i omówienie.' },
	{
		title: 'Wizualizacje',
		text: 'Prezentacja wizualizacji wykonanych na podstawie wybranego układu, elementów wyposażenia oraz materiałów.',
	},
]

const documentationList = [
	{ title: 'Szczegółowy układ funkcjonalnt', text: 'Wytyczne wykonawcze na zatwierdzony układ funkcjonalny.' },
	{ title: 'Dokumentacja przyłączy', text: 'Wytyczne wykonawcze przyłączy elektrycznych.' },
	{ title: 'Kłady ścian', text: 'Wytyczne wykonawcze.' },
	{
		title: 'Lista produktowa',
		text: 'Przekazanie pełnej listy wyposażenia wnętrza - lista elektroniczna do wglądy i edycji inwestora..',
	},
]

export const metadata = generateMetadata({
	title: 'Proces projektowy',
	description:
		'Poznaj mój proces projektowy – od koncepcji po nadzór autorski. Oferuję kompleksowe usługi, które łączą estetykę z funkcjonalnością, aby stworzyć wnętrza dopasowane do Twoich potrzeb.',
	url: 'https://https://anna-zientara-portfolio.netlify.app/proces-projektowy',
})

export default function Process() {
	return (
		<>
			<Hero image={HeroImage} title='Proces projektowy' />

			<main>
				<section className='section py-12 sm:py-24'>
					<div className='wrapper flex flex-col  gap-16 justify-center items-start !max-w-screen-md'>
						<div className='space-y-12'>
							<h2 className='font-heading text-3xl xs:text-5xl ml-6 uppercase '>Koncepcja</h2>
							<Timeline>
								{conceptionList.map((item, index) => (
									<TimelineItem key={index} title={item.title} text={item.text} />
								))}
							</Timeline>
						</div>

						<div className='space-y-12'>
							<h2 className='font-heading text-3xl xs:text-5xl ml-6 uppercase '>Projekty</h2>
							<Timeline>
								{projectList.map((item, index) => (
									<TimelineItem key={index} title={item.title} text={item.text} />
								))}
							</Timeline>
						</div>

						<div className='space-y-12'>
							<h2 className='font-heading text-3xl xs:text-5xl ml-6 uppercase '>Dokumentacja</h2>
							<Timeline>
								{documentationList.map((item, index) => (
									<TimelineItem key={index} title={item.title} text={item.text} />
								))}
							</Timeline>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
