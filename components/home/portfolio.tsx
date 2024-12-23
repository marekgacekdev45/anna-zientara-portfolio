import ProjectCard from '@/components/project-card'
import BaseLink from '@/components/base-link'
import { sanityFetch } from '@/sanity/lib/live'
import { GET_PROJECTS_WITH_LIMIT } from '@/sanity/lib/queries'

import { Project } from '@/sanity/lib/interface'



const Portfolio = async () => {
	const { data: projects } = await sanityFetch({
		query: GET_PROJECTS_WITH_LIMIT,
		params: { limit: 4 },
	})
	return (
		<section className='section pt-12 pb-12'>
			<div className='wrapper'>
				<div className='space-y-5'>
					<span className='preheading'>Moje</span>
					<h2 className='heading'>Projekty</h2>
				</div>

				<div className='flex gap-y-16 gap-x-10 justify-center items-center flex-wrap py-12'>
					{projects.map((project: Project) => (
						<ProjectCard key={project.title} project={project} />
          
					))}
					
				</div>
        <div className='flex justify-center items-center'>

        <BaseLink href='/portfolio' className='after:bg-black dark:after:bg-white'>
						Zobacz wszystkie projekty
					</BaseLink>
        </div>
			</div>
		</section>
	)
}

export default Portfolio
