import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { articleReadingMinutes, formatArticleDate, type PublishedMentalHealthArticle } from '@/lib/articles'
import { provider } from '@/lib/practice'

export function ArticleGrid({ articles }: { articles: PublishedMentalHealthArticle[] }) {
  return (
    <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
      {articles.map((article, index) => (
        <Link key={article.slug} href={`/resources/${article.slug}`} aria-labelledby={`title-${article.slug}`} className="group block h-full rounded-lg">
          <article className="h-full">
            <Card className="h-full gap-6 pt-0 group-hover:shadow-md group-focus-visible:shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image src={article.image.src} alt={article.image.alt} fill priority={index === 0} sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 767px) calc(100vw - 80px), (max-width: 1023px) calc((100vw - 112px) / 2), (max-width: 1359px) calc((100vw - 144px) / 2), 608px" className="object-cover transition-transform duration-300 ease-in-out motion-safe:group-hover:scale-[1.015]" style={{ objectPosition: article.image.position }} />
              </div>
              <CardHeader className="gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="flex items-center gap-2 text-base text-muted-foreground"><Clock3 className="size-4" aria-hidden="true" />{articleReadingMinutes(article)} min read</span>
                </div>
                <CardTitle><h3 id={`title-${article.slug}`} className="group-hover:underline decoration-primary/30 underline-offset-4">{article.title}</h3></CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="body-copy">{article.excerpt}</p>
                <p className="text-base text-muted-foreground">{provider.name}<span aria-hidden="true"> · </span><time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time></p>
              </CardContent>
              <CardFooter className="justify-between gap-3"><span className="text-link">Read article</span><ArrowRight className="size-5 text-primary transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></CardFooter>
            </Card>
          </article>
        </Link>
      ))}
    </div>
  )
}
