import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { AuthorByline } from '@/components/resources/author-byline'
import { BlogList } from '@/components/resources/blog-list'
import { listArticles } from '@/lib/editorial'

export const metadata: Metadata = { title: 'The Marenova Reading Room', description: 'Patient education and clinical commentary from Marenova Psychiatry & Wellness.' }
export default async function BlogPage() {
  const articles = await listArticles()
  return <><PageIntro eyebrow="The Marenova reading room" currentPage="Articles" title={<>Mental health, <span className="text-heading-accent">in perspective.</span></>} description="Patient education and clinical commentary on diagnosis, treatment choices, and the questions worth bringing to your next visit."><AuthorByline /></PageIntro><section aria-labelledby="articles-heading" className="section-space site-container"><p className="eyebrow mb-3">From the practice</p><h2 id="articles-heading" className="section-heading mb-8">Articles & perspectives</h2><BlogList articles={articles} /></section></>
}
