import { Project } from '@/sanity/lib/interface'
import { GET_ALL_PROJECTS } from '@/sanity/lib/queries'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const projects: Project[] = await GET_ALL_PROJECTS()

	const projectsUrls = projects.map((project: Project) => ({
		url: `https://anna-zientara-portfolio.netlify.app/portfolio/${project.slug.current}`,
		lastModified: new Date(),
		priority: 0.8,
	}))

	return [
		{
			url: 'https://anna-zientara-portfolio.netlify.app/',
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: 'https://anna-zientara-portfolio.netlify.app/portfolio',
			lastModified: new Date(),
			priority: 0.9,
		},

		...projectsUrls,

		{
			url: 'https://anna-zientara-portfolio.netlify.app/polityka-prywatnosci',
			lastModified: new Date(),
			priority: 0.7,
		},
	]
}
