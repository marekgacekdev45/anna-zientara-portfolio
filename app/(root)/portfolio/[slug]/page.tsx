import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { GET_PROJECT_BY_SLUG } from '@/sanity/lib/queries'

import Hero from '@/components/hero'
import Gallery from '@/components/gallery'

const Page = async ({ params }: { params: { slug: string } }) => {
	const { data: project } = await sanityFetch({
		query: GET_PROJECT_BY_SLUG,
		params: { slug: params?.slug },
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
						<h2 className='font-heading text-3xl xs:text-5xl ml-6 uppercase'>Wizualizacje</h2>
						<p className='italic font-light '>wizualizacje koncepcyjne dla projektu wnętrz strefy apartamentowej</p>
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
