import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const publications = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
    schema: z.object({
        title: z.string(),
        lang: z.enum(["en", "zh"]).default("en"),
        slug: z.string().optional(),
        translationKey: z.string().optional(),
        selected: z.boolean().default(false),
        author: z.string().optional(),
        date: z.string().optional(),
        journal: z.string().optional(),
        external_url: z.string().optional(),
        image: z.string().optional(),
        description: z.string().optional(),
        description_zh: z.string().optional(),
        abstract: z.string().optional(),
        abstract_zh: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const bio = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/bio" }),
    schema: z.object({
        name: z.string(),
        lang: z.enum(["en", "zh"]).default("en"),
        avatar: z.string(),
        shortBio: z.string().optional(),
        institution: z.string().optional(),
        email: z.string().optional(),
        altEmail: z.string().optional(),
        wechat: z.string().optional(),
    }),
});

const misc = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/misc" }),
    schema: z.object({
        title: z.string(),
        lang: z.enum(["en", "zh"]).default("en"),
    }),
});

export const collections = {
    'publications': publications,
    'bio': bio,
    'misc': misc,
};
