import { generateMetadata } from '@/lib/generateMetadata'
import { Metadata } from 'next'

import HeroImage from '@/public/portfolio-hero.webp'

import Hero from '@/components/hero'
import ProjectCard from '@/components/project-card'

interface Project {
	id: string
	title: string
	description: string
	slug?: string
}

const projects: Project[] = [
	{
		id: '1',
		title: 'Projekt nr 1',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione blanditiis quo?',
		slug: 'projekt-nr-1',
	},
	{
		id: '2',
		title: 'Projekt nr 2',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione blanditiis quo?',
		slug: 'projekt-nr-2',
	},
	{
		id: '3',
		title: 'Projekt nr 3',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione blanditiis quo?',
		slug: 'projekt-nr-3',
	},
	{
		id: '4',
		title: 'Projekt nr 4',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione blanditiis quo?',
		slug: 'projekt-nr-4',
	},
]

export const metadata: Metadata = generateMetadata({
	title: 'Portfolio',
	description: 'Portfolio desc',
	path: '/portfolio',
})

const Page = () => {
	return (
		<>
			<Hero image={HeroImage} title='Portfolio' />

			<section className='section pt-12 pb-12'>
				<div className='wrapper'>
					<div className='flex gap-y-16 gap-x-10 justify-center items-center flex-wrap py-12'>
						{projects.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
						
					</div>
				</div>
			</section>
		</>
	)
}

export default Page
