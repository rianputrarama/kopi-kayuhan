
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const stories = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/stories",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    cover: z.string(),
    gallery: z.array(z.string()).max(5).default([]),
    location: z.string().optional(),
  }),
});

export const collections = { stories };
