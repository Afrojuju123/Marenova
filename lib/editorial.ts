import 'server-only'
import { cache } from 'react'
import type { PortableTextProps } from '@portabletext/react'

export type ArticleSummary = { _id: string; title: string; slug: string; author: string; category: string; excerpt: string | null; publishedAt: string; reviewedAt: string; image: { url: string; alt: string; caption: string } | null }
export type EditorialArticle = ArticleSummary & { body: NonNullable<PortableTextProps['value']> }

const endpoint = 'https://jrgh6ezb.api.sanity.io/v2025-02-19/data/query/production'
const eligible = `_type == 'article' && defined(slug.current) && defined(reviewedAt) && reviewedAt <= string::split(now(), 'T')[0] && dateTime(publishedAt) <= dateTime(now()) && count(body) > 0`
const fields = `_id,title,'slug':slug.current,author,category,excerpt,publishedAt,reviewedAt,'image':featuredImage{'url':asset->url,alt,caption}`
async function query<T>(groq: string, slug?: string): Promise<T> {
  const url = new URL(endpoint)
  url.searchParams.set('perspective', 'published')
  url.searchParams.set('query', groq)
  if (slug) url.searchParams.set('$slug', JSON.stringify(slug))
  const response = await fetch(url, { next: { revalidate: 60 }, signal: AbortSignal.timeout(10000) })
  if (!response.ok) throw new Error('The reading room is temporarily unavailable.')
  return (await response.json()).result as T
}
export const listArticles = cache(() => query<ArticleSummary[]>(`*[${eligible}] | order(publishedAt desc, _id asc){${fields}}`))
export const findArticle = cache((slug: string) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length <= 200 ? query<EditorialArticle | null>(`*[${eligible} && slug.current == $slug][0]{${fields},body}`, slug) : Promise.resolve(null))
export function articleDate(date: string) { return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date)) }
