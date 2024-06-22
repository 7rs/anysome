import { z, defineCollection } from "astro:content";

const StackCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  stack: StackCollection,
};
