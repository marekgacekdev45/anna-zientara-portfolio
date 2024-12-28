import { defineQuery } from 'next-sanity'
import { client } from './client'

// export const GET_PROJECTS_WITH_LIMIT = defineQuery(
// 	`*[_type == "project"] | order(_createdAt desc) [0...$limit] {
//     title,
//     shortDescription,
//     slug,
//     thumbnail
//     }
// `
// )

export const GET_PROJECTS_WITH_LIMIT = async (limit: number) => {
	const query = `*[_type == "project"] | order(_createdAt desc) [0...${limit}] {
    title, 
    shortDescription, 
    slug,
    thumbnail
    }
`

	const data = await client.fetch(query)
	return data
}

// export const GET_ALL_PROJECTS = defineQuery(
// 	`*[_type == "project"] | order(_createdAt desc)  {
//     title,
//     shortDescription,
//     slug,
//     thumbnail
//     }
// `
// )

export const GET_ALL_PROJECTS = async () => {
	const query = `*[_type == "project"] | order(_createdAt desc)  {
   title, 
    shortDescription, 
    slug,
    thumbnail
    }
 `

	const data = await client.fetch(query)
	return data
}



export const GET_PROJECT_BY_SLUG = defineQuery(
	`*[_type == "project" && slug.current == $slug][0] {
    slug,
       title,
       shortDescription,
       images,
       thumbnail,
       description
    }`
)
