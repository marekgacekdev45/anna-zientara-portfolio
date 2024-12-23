import HeroImage from '@/public/portfolio-hero.webp'
import { sanityFetch } from '@/sanity/lib/live'
import { GET_PROJECT_BY_SLUG } from '@/sanity/lib/queries'
import Image from 'next/image'


const Page = async ({ params }: { params: { slug: string } }) => {
	const { data: project } = await sanityFetch({
		query: GET_PROJECT_BY_SLUG,
		params: { slug: params?.slug },
	})

	const { title, shortDescription, slug, thumbnail } = project

	return (
		<>
			<section className={`w-full h-[50vh] flex justify-center items-center text-center relative`}>
				<div className='z-10'>
					<h1 className='text-5xl xs:text-7xl sm:text-8xl font-light z-10 text-gray-300'>{title}</h1>
					<p className='italic text-lg font-light text-gray-300'>
						{shortDescription}
					</p>
				</div>
				<Image
					src={HeroImage}
					alt='Projekt w wykonaniu Anna Zientara'
					fill
					quality={70}
					priority
					className='object-cover absolute inset-0 -z-10'
				/>
				<div className='absolute inset-0 bg-black opacity-50'></div>
			</section>

			<section className='section py-6 sm:py-12'>
				<div className='wrapper !max-w-screen-xl'>
					<div className='prose max-w-full text-gray-900 dark:text-gray-300 '>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint vitae laborum aliquam, quaerat quibusdam
							corrupti animi ullam voluptatibus consectetur numquam repellendus necessitatibus libero? Unde illum id
							reprehenderit autem ducimus vitae deserunt eveniet ipsa aliquam similique omnis repellendus tenetur porro,
							ratione aperiam exercitationem, a voluptatem, cupiditate molestias blanditiis sint quasi quos. Fugiat
							ipsum reiciendis ea? Vero consequatur nihil placeat suscipit, in minima ipsam obcaecati at laudantium id.
							Quam voluptatum, dolore ad officiis perferendis autem aut quae porro, odio hic ex molestiae obcaecati,
							fugit quisquam. Animi inventore quasi itaque esse voluptates vitae accusamus, commodi eligendi nostrum,
							quas libero? Ducimus, itaque officiis!
						</p>
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
				<div className='wrapper grid md:grid-cols-2 xl:grid-cols-3 gap-y-12 !max-w-screen-max'>
					{/* <Gallery gallery={project.imagesGallery} title={project.title} /> */}
				</div>
			</section>
		</>
	)
}

export default Page
