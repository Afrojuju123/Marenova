import { PortableText } from '@portabletext/react'
import type { EditorialArticle } from '@/lib/editorial'

export function EditorialBody({ body }: Pick<EditorialArticle, 'body'>) {
  return <div className="body-copy flex flex-col gap-5 [&_h2]:mt-8 [&_h2]:border-t [&_h2]:pt-7 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-primary [&_h3]:font-serif [&_h3]:text-2xl [&_ol]:list-decimal [&_ul]:list-disc [&_li]:my-2 [&_ol]:pl-6 [&_ul]:pl-6 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:bg-muted [&_blockquote]:p-5"><PortableText value={body} components={{ marks: { link: ({ value, children }) => { const href = value?.href; return typeof href === 'string' && /^https?:\/\//i.test(href) ? <a href={href} className="text-primary underline underline-offset-4">{children}</a> : <>{children}</> } } }} /></div>
}
