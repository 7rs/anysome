import { z } from 'astro:content';

export const Stack = z.object({
  name: z.string(),
  description: z.string(),
  icon: z.ostring(),
  tags: z.optional(z.array(z.string())).default([]),
  website: z.ostring(),
  repository: z.ostring(),
  file: z.ostring(),
  url: z.ostring(),
});
export type Stack = z.infer<typeof Stack>;

// For dexie
export interface Stacks {
  id: string;
  description: string;
  icon: string;
  url: string;
}
