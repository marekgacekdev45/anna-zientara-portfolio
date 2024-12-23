import { defineQuery } from 'next-sanity'

export const GET_PROJECTS_WITH_LIMIT = defineQuery(
	`*[_type == "project"] | order(_createdAt desc) [0...$limit] {
    title, 
    shortDescription, 
    slug,
    thumbnail
    }
`
)

export const GET_ALL_PROJECTS = defineQuery(
	`*[_type == "project"] | order(_createdAt desc)  {
    title, 
    shortDescription, 
    slug,
    thumbnail
    }
`

)
export const GET_PROJECT_BY_SLUG = defineQuery(
    `*[_type == "project" && slug.current == $slug][0] {
       ... 
    }`
 )
 