import { defineCollection, z } from 'astro:content';

// Define the schema for the articles collection
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string().optional(),
    externalLink: z.string().url().optional(),
    downloadFile: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Export the collections
export const collections = {
  'articles': articlesCollection,
};
