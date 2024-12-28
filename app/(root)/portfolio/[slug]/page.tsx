import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { GET_PROJECT_BY_SLUG } from '@/sanity/lib/queries'

import Hero from '@/components/hero'
import Gallery from '@/components/gallery'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const { slug } = await params

	if (!slug) {
		return
	}

	const { data: project } = await sanityFetch({
		query: GET_PROJECT_BY_SLUG,
		params: { slug: slug },
	})

	if (!project) {
		return
	}

	return {
		title: `${project.title} | Anna Zientara - Architekt Wnętrz`,
		description:
			`${project.shortDescription}` || `Projekt ${project.title} w wykonaniu Anna Zientara - Architekt Wnętrz`,
		openGraph: {
			title: `${project.title} | Anna Zientara - Architekt Wnętrz`,
			description:
				`${project.shortDescription}` || `Projekt ${project.title} w wykonaniu Anna Zientara - Architekt Wnętrz`,
			type: 'article',
			locale: 'pl_PL',
			url: `https://annazientara.pl/${project.slug.current}`,
			siteName: 'Anna Zientara - Architekt Wnętrz',
			images: [
				{
					url: urlFor(project.thumbnail).url(),
					width: 1200,
					height: 630,
					alt: `miniaturka projektu ${project.title} w wykonaniu Anna Zientara - Architekt Wnętrz`,
				},
			],
		},
	}
}

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params
	const { data: project } = await sanityFetch({
		query: GET_PROJECT_BY_SLUG,
		params: { slug: slug },
	})

	const { title, shortDescription, images, thumbnail, description } = project

	const imageUrls = images.map((image: any) => urlFor(image).url())
	return (
		<>
			<Hero image={urlFor(thumbnail).url()} title={title} description={shortDescription} />

			<section className='section py-6 sm:pb-6 sm:pt-16'>
				<div className='wrapper !max-w-screen-xl'>
					<div className='prose max-w-full text-gray-900 dark:text-gray-300 '>
						<p className='text-center'>{description}</p>
					</div>
				</div>
			</section>

			<section className='section pb-12 sm:pt-12 sm:pb-24'>
				<div className='wrapper text-center'>
					<div className='space-y-3'>
						<h2 className='font-heading text-3xl xs:text-5xl ml-6 uppercase'>Galeria</h2>
						<p className='italic font-light '>wizualizacje koncepcyjne dla projektu </p>
					</div>
				</div>
				<div className='wrapper grid md:grid-cols-2 xl:grid-cols-3 gap-10 !max-w-screen-max mx-auto pt-12'>
					<Gallery images={imageUrls} alt={title} />
				</div>
			</section>
		</>
	)
}

export default Page
