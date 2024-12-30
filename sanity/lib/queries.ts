// import { client, sanityFetch } from './client'
import { sanityFetch } from './client'

export const GET_PROJECTS_WITH_LIMIT = async () => {
	const query = `*[_type == "project"] | order(_createdAt desc) [0...4] {
    title, 
    shortDescription, 
    slug,
    thumbnail
    }`
	// const data = await client.fetch(query)
	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})

	return data
}

export const GET_ALL_PROJECTS = async () => {
	const query = `*[_type == "project"] | order(_createdAt desc)  {
    title, 
    shortDescription, 
    slug,
    thumbnail
    }`

	// const data = await client.fetch(query)
    const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}

export const GET_PROJECT_BY_SLUG = async (slug: string) => {
	const query = `
    *[_type == "project" && slug.current == "${slug}"][0]{
    slug,
    title,
    shortDescription,
    images,
    thumbnail,
    description
    }`
	// const data = await client.fetch(query)
    const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}
