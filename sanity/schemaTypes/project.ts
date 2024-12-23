import { defineField, defineType } from 'sanity'

export const projects = defineType({
	name: 'project',
	title: 'Projekt',
	type: 'document',

	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
		defineField({
			name: 'shortDescription',
			title: 'Krótki opis',
			type: 'string',
            validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'thumbnail',
			title: 'Miniaturka',
			type: 'image',
            validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Opis',
			type: 'text',
		}),
		defineField({
			name: 'images',
			title: 'Zdjęcia',
			type: 'array',
			of: [{ type: 'image' }],
			validation: Rule => Rule.required(),
		}),
	],
})
