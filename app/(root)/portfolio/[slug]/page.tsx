// pages/projects/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next'
import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { GET_PROJECT_BY_SLUG } from '@/sanity/lib/queries'
import Hero from '@/components/hero'
import Gallery from '@/components/gallery'

interface Project {
  title: string
  shortDescription: string
  images: { _key: string; asset: { _ref: string } }[]
  thumbnail: { asset: { _ref: string } }
  description: string
}

interface ProjectPageProps {
  project: Project
}

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== 'string') {
    return {
      notFound: true,
    }
  }

  const { data: project } = await sanityFetch({
    query: GET_PROJECT_BY_SLUG,
    params: { slug: params.slug },
  })

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project, 
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: slugs } = await sanityFetch({
    query: `*[_type == "project"]{ "slug": slug.current }`,
  })

  const paths = slugs.map(({ slug }: { slug: string }) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: 'blocking', 
  }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  const { title, shortDescription, images, thumbnail, description } = project


  const imageUrls = images.map((image) => urlFor(image).url())

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
            <p className='italic font-light'>
              Wizualizacje koncepcyjne dla projektu wnętrz strefy apartamentowej
            </p>
          </div>
        </div>
        <div className='wrapper grid md:grid-cols-2 xl:grid-cols-3 gap-10 !max-w-screen-max mx-auto pt-12'>
          <Gallery images={imageUrls} alt={title} />
        </div>
      </section>
    </>
  )
}

export default ProjectPage
