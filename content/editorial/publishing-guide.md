# Editing the Marenova reading room

Open [Marenova Wellness Editorial](https://marenova-wellness-editorial.sanity.studio/) and sign in. If your client does not have access, a project administrator must invite them to **Marenova Wellness** with an editorial role in Sanity project management. Do not share the administrator login.

1. Choose **Article** and open a draft, or create a new Article. The two PDF-based articles are saved as drafts.
2. Enter a title, unique lowercase hyphenated slug, author, category and short description. Use headings, paragraphs, lists and source links in the body. Keep the slug stable after publication so shared links continue to work.
3. When using a featured image, supply descriptive alternative text and a visible caption. Keep the TMS illustration disclosure and developing-program status. Do not upload patient records or identifiable patient material to this public editorial dataset.
4. After clinical sign-off, enter the actual clinical review date and the intended publication date and time. Select **Publish** only when the article is cleared for public disclosure. The dates filter the website, not the public Sanity API: keep embargoed material in draft rather than publishing early.
5. Check `/blog` and `/blog/your-slug` on the website. Published updates refresh on subsequent requests after the 60-second cache interval. To withdraw an article, unpublish it in Studio.

## Developer handoff

The managed Studio and Article schema are deployed to project `jrgh6ezb`, dataset `production`, workspace `default`. The site needs no Sanity write or read token for this public dataset. Studio handles authenticated writes separately. Do not put credentials in browser code. Maintain this workspace schema through its Sanity-managed schema deployment and redeploy the managed Studio after changes.

`lib/editorial.ts` holds the pinned API version, fixed endpoint, parameterized slug lookup and shared publication predicate. The App Router pages in `app/blog/` read published Portable Text server-side. `/resources` and legacy resource URL paths redirect to the blog equivalents. The four earlier unreviewed entries remain in `lib/articles.ts`; they were not part of the two-PDF import and are not published. The Markdown files here are handoff copies, not live data sources.
