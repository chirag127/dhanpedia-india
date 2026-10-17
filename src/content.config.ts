import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    categoryId: z.string(),
    categoryName: z.string(),
    canonicalConceptIds: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Chirag Singhal'),
    creationDate: z.string(),
    lastUpdated: z.string(),
    lastVerifiedDate: z.string(),
    contentStatus: z.enum(['planned', 'researching', 'drafting', 'validating', 'approved', 'published', 'outdated']),
    publicationStatus: z.enum(['published', 'draft', 'archived']).default('published'),
    timeSensitivity: z.string(),
    readingTimeMinutes: z.number(),
    wordCount: z.number(),
    sourceIds: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
    relatedCalculators: z.array(z.string()).default([])
  })
});

export const collections = {
  articles
};
