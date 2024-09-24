import { PostsQueryResult } from '@/sanity.types';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postsQuery } from '@/sanity/lib/queries';
import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts] = await Promise.all([
    sanityFetch<PostsQueryResult>({
      query: postsQuery
    }),
  ]);

  // const parsed = posts.map((p) => {
  //   return {
  //     url: "https://daiointernational.com/blog/post"+p.slug,
  //     lastModified: Date.parse(p.date).toString(),
  //     changeFrequency:'yearly' as 'yearly',
  //     priority: 0.8
  //   }
  // })

  return [
    {
      url: 'https://daiointernational.com',
      lastModified: new Date("09/24/2024"),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://daiointernational.com/about',
      lastModified: new Date("09/24/2024"),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://daiointernational.com/mybio/biotoilet',
      lastModified: new Date("09/24/2024"),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://daiointernational.com/mybotany/pongamia',
      lastModified: new Date("09/24/2024"),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    // ...parsed
  ]
}