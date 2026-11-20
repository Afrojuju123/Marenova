import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { AuthorByline } from '@/components/resources/author-byline'
import { articleDate, type ArticleSummary } from '@/lib/editorial'

export function BlogList({ articles }: { articles: ArticleSummary[] }) {
  if (!articles.length) return <div className="max-w-2xl border-l-2 border-primary/40 pl-6"><BookOpen className="mb-4 text-heading-accent" aria-hidden="true" /><h3 className="font-serif text-2xl text-primary">Our first articles are in clinical review.</h3><p className="body-copy mt-3">In the meantime, our patient guide answers common questions about appointments and care.</p><Link href="/patient-info" className="text-link mt-4">Read the patient guide <ArrowRight aria-hidden="true" className="size-4" /></Link></div>
  return <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{articles.map(article => <li key={article._id} className="rounded-lg border bg-card p-6"><p className="eyebrow">{article.category}</p><h3 className="mt-4 font-serif text-3xl text-primary"><Link className="hover:underline" href={`/blog/${encodeURIComponent(article.slug)}`}>{article.title}</Link></h3><p className="body-copy mt-4">{article.excerpt}</p><div className="mt-5"><AuthorByline /></div><p className="mt-3 text-sm text-muted-foreground"><time dateTime={article.publishedAt}>{articleDate(article.publishedAt)}</time></p></li>)}</ul>
}
