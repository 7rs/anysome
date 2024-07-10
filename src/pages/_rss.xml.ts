import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
  const blog = await getCollection('stack');

  return rss({
    title: 'Anysome',
    description: 'Reports, Feature requests and Questions: https://github/com/7rs/anysome',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.name,
      link: `${post.slug}`,
    })),
  });
}
