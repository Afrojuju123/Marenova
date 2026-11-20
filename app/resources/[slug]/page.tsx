export const runtime = 'edge';

import { permanentRedirect } from 'next/navigation'
export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) { permanentRedirect(`/blog/${encodeURIComponent((await params).slug)}`) }
