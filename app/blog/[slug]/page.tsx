import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageIntro } from '@/components/page-intro'
import { AuthorByline } from '@/components/resources/author-byline'
import { provider } from '@/lib/practice'
import { EditorialBody } from '@/components/resources/editorial-body'
import { articleDate, findArticle } from '@/lib/editorial'

type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await findArticle((await params).slug)
  if (!article) notFound()
  return { title: article.title, description: article.excerpt, authors: [{ name: provider.name }], openGraph: { type: 'article', publishedTime: article.publishedAt } }
}
export default async function ArticlePage({ params }: Props) {
  const article = await findArticle((await params).slug)
  if (!article) notFound()
  return <article><PageIntro eyebrow={article.category} title={article.title} description={article.excerpt ?? ''} currentPage="Article" parent={{ label: 'Reading room', href: '/blog' }}><AuthorByline /><p className="mt-2 text-sm text-muted-foreground">Published {articleDate(article.publishedAt)} · Clinically reviewed {articleDate(article.reviewedAt)}</p></PageIntro><div className="site-container py-12"><div className="mx-auto max-w-3xl">{article.image?.url?.startsWith('https://cdn.sanity.io/images/jrgh6ezb/production/') && <figure className="mb-10"><img src={`${article.image.url}?w=1280&auto=format`} alt={article.image.alt || ''} className="h-auto w-full rounded-lg" />{article.image.caption && <figcaption className="mt-2 text-sm text-muted-foreground">{article.image.caption}</figcaption>}</figure>}<EditorialBody body={article.body} /><Link href="/blog" className="text-link mt-10">Back to all articles</Link></div></div></article>
}
