export interface Project {
	id: string
	title: string
	slug:{
        current: string
    }
    shortDescription: string
    thumbnail: string
	description?: string
    images: Array<string>
}