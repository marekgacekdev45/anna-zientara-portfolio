import ProjectCard from '@/components/project-card'
import BaseLink from '@/components/base-link'

const projects = [
	{
		id: '1',
		title: 'Projekt nr 1',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione blanditiis quo?',
	},
	{
		id: '2',
		title: 'Projekt nr 2',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione blanditiis quo?',
	},
	{
		id: '3',
		title: 'Projekt nr 3',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione blanditiis quo?',
	},
	{
		id: '4',
		title: 'Projekt nr 4',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione blanditiis quo?',
	},
]

// const Projects = (props:{projects:Project[]}) => {
const Projects = () => {
	return (
		<section className='section pt-12 pb-12'>
			<div className='wrapper '>
				<div className='space-y-5 '>
					<span className='preheading'>Moje</span>
					<h2 className='heading'>Projekty</h2>
				</div>

				<div className='flex gap-y-16 gap-x-10 justify-center items-center flex-wrap py-12'>
					{projects.map(project => (
						<ProjectCard key={project.title} project={project} />
					))}
					<BaseLink href='/portfolio' className='after:bg-black dark:after:bg-white'>Zobacz wszystkie projekty</BaseLink>
				</div>
			</div>
		</section>
	)
}

export default Projects
