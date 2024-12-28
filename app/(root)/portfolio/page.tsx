import { generateMetadata } from '@/lib/generateMetadata'
import { Metadata } from 'next'

import { Project } from '@/sanity/lib/interface'
import { GET_ALL_PROJECTS } from '@/sanity/lib/queries'

import Hero from '@/components/hero'
import ProjectCard from '@/components/project-card'

import HeroImage from '@/public/portfolio-hero.webp'

export const revalidate = 60

export const metadata: Metadata = generateMetadata({
	title: 'Portfolio',
	description: 'Przeglądaj portfolio Anny Zientary – zbiór projektów, które łączą kreatywność, funkcjonalność i estetykę w przestrzeniach pełnych charakteru.',
	path: '/portfolio',
})

const Page = async () => {
	const projects: Project[] = await GET_ALL_PROJECTS()
	return (
		<>
			<Hero image={HeroImage} title='Portfolio' />

			<section className='section pt-12 pb-12'>
				<div className='wrapper'>
					<div className='flex gap-y-16 gap-x-10 justify-center items-center flex-wrap py-12'>
						{projects.map((project: Project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Page
