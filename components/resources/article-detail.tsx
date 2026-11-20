import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Clock3 } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { PracticeAction } from '@/components/practice-action'
import { Separator } from '@/components/ui/separator'
import { articleReadingMinutes, formatArticleDate, type PublishedMentalHealthArticle } from '@/lib/articles'
import { provider } from '@/lib/practice'

export function ArticleDetail({ article }: { article: PublishedMentalHealthArticle }) {
  return (
    <article>
      <PageIntro eyebrow={article.category} title={article.title} description={article.excerpt} currentPage="Mental Health Article" parent={{ label: 'Resources', href: '/resources' }}>
        <div className="flex flex-col gap-5">
          <Link href="/about#meet-your-provider" className="flex w-fit items-center gap-4 rounded-lg">
            <Image src={provider.portrait} alt="" width={52} height={52} className="size-13 rounded-full object-cover object-top" />
            <div><p className="font-semibold text-primary">By {provider.name}</p><p className="text-base text-muted-foreground">{provider.credentials}</p></div>
          </Link>
          <dl className="flex flex-wrap gap-x-7 gap-y-3 text-base text-muted-foreground">
            <div className="flex gap-2"><dt>Published</dt><dd><time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time></dd></div>
            <div className="flex gap-2"><dt>Clinical review</dt><dd><time dateTime={article.reviewedAt}>{formatArticleDate(article.reviewedAt)}</time></dd></div>
            <div className="flex items-center gap-2"><Clock3 className="size-4" aria-hidden="true" /><dt className="sr-only">Reading time</dt><dd>{articleReadingMinutes(article)} min read</dd></div>
          </dl>
        </div>
      </PageIntro>
      <div className="site-container py-10 sm:py-14">
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted sm:aspect-[2.4/1]">
            <Image src={article.image.src} alt={article.image.alt} fill priority sizes="(max-width: 1359px) 90vw, 1248px" className="object-cover" style={{ objectPosition: article.image.position }} />
          </div>
          <figcaption className="mt-3 text-base text-muted-foreground">Illustrative lifestyle photograph; not a patient, diagnosis, or treatment outcome.</figcaption>
        </figure>
        <div className="grid items-start gap-10 pt-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          <aside className="flex flex-col gap-7 lg:sticky lg:top-32">
            <nav aria-label="In this article" className="flex flex-col gap-4">
              <p className="eyebrow">In this article</p>
              <ol className="flex flex-col gap-1">
                {article.sections.map((section, index) => (
                  <li key={section.id}><a href={`#${section.id}`} className="flex min-h-11 items-start gap-3 py-2 text-base leading-relaxed text-muted-foreground hover:text-primary hover:underline underline-offset-4"><span className="text-secondary-foreground" aria-hidden="true">0{index + 1}</span>{section.heading}</a></li>
                ))}
                <li><a href="#article-sources" className="text-link">Sources &amp; further reading</a></li>
              </ol>
            </nav>
            <Separator />
            <p className="text-base text-muted-foreground">General education only. Not a diagnosis, personalized advice, or a substitute for professional care.</p>
            <Link href="/resources" className="text-link"><ArrowLeft className="size-4" aria-hidden="true" />All mental health articles</Link>
          </aside>
          <div className="flex min-w-0 max-w-[790px] flex-col gap-10">
            <div className="border-l-2 border-secondary py-1 pl-6">
              <p className="eyebrow mb-3">A thought to take with you</p>
              <p className="font-serif text-2xl leading-relaxed text-primary">{article.takeaway}</p>
            </div>
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="flex scroll-mt-32 flex-col gap-5">
                <h2 id={`${section.id}-heading`} className="font-serif text-3xl leading-snug tracking-tight text-primary">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-lg leading-loose text-foreground">{paragraph}</p>)}
                {section.points && <ul className="flex list-disc flex-col gap-3 pl-6 text-lg leading-loose text-foreground marker:text-secondary-foreground">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}
            <Separator />
            <section id="article-sources" aria-labelledby="sources-heading" className="flex scroll-mt-32 flex-col gap-5">
              <h2 id="sources-heading" className="flex items-center gap-3 font-serif text-2xl text-primary"><BookOpen className="size-6 shrink-0" strokeWidth={1.5} aria-hidden="true" />Sources &amp; further reading</h2>
              <ul className="flex flex-col gap-3">
                {article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-link items-start">{source.label}<ArrowUpRight className="mt-1 size-4 shrink-0" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></li>)}
              </ul>
              <p className="text-base text-muted-foreground">Sources inform this educational overview and are not endorsements of the practice. Medical information may change; discuss personal questions with a qualified healthcare professional.</p>
            </section>
            <Separator />
            <section aria-labelledby="article-author-heading" className="flex flex-col gap-5 sm:flex-row">
              <Image src={provider.portrait} alt={provider.name} width={88} height={88} className="size-22 shrink-0 rounded-full object-cover object-top" />
              <div className="flex flex-col gap-2">
                <p className="eyebrow">About the provider</p>
                <h2 id="article-author-heading" className="font-serif text-2xl text-primary">{provider.name}</h2>
                <p className="text-base text-muted-foreground">{provider.credentials}</p>
                <p className="body-copy">Marenova Wellness is a solo psychiatric practice focused on thoughtful, individualized care for adults and older adults.</p>
                <Link href="/about#meet-your-provider" className="text-link">Meet your provider <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section aria-labelledby="article-cta-heading" className="border-t bg-muted/60 py-14 sm:py-20">
        <div className="site-container flex flex-col items-center gap-5 text-center">
          <p className="eyebrow">A next step, when you are ready</p>
          <h2 id="article-cta-heading" className="section-heading">Your experience deserves<br />a personal conversation.</h2>
          <p className="body-copy max-w-[620px]">An article can offer a starting point. An individual assessment can help you understand what support may be right for you.</p>
          <PracticeAction label="Start your first conversation" size="lg" />
          <Link href="/patient-info" className="text-link">What to expect as a new patient <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </article>
  )
}
