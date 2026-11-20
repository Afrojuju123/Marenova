import Image from 'next/image'
import Link from 'next/link'
import { provider } from '@/lib/practice'

export function AuthorByline() {
  return (
    <Link href="/about#meet-your-provider" rel="author" className="inline-flex items-center gap-3 text-left text-primary hover:underline underline-offset-4">
      <Image src={provider.portrait} alt="" width={56} height={56} sizes="56px" className="size-14 shrink-0 rounded-full border border-border object-cover object-top" />
      <span><span className="block font-semibold">By {provider.name}</span><span className="block text-sm text-muted-foreground">{provider.credentials}</span></span>
    </Link>
  )
}
