import { defineCollection } from "astro:content";
import { Stack } from "@scripts/stack-meta.ts";

const StackCollection = defineCollection({
  type: "content",
  schema: Stack,
});

export const collections = {
  stack: StackCollection,
};
