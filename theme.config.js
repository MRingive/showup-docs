export default {
  github: 'https://github.com/MRingive/showup-docs',
  docsRepositoryBase: 'https://github.com/MRingive/showup-docs/blob/main',
  titleSuffix: ' – For procrastinators. By procrastinators.',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">the showup</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        club
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="The Show Up Club: for procrastinators. By procrastinators." />
      <meta name="og:description" content="The Show Up Club: for procrastinators. By procrastinators." />
      <meta name="twitter:site:domain" content="docs.theshowup.club" />
      <meta name="twitter:url" content="https://docs.theshowup.club/" />
      <meta name="og:title" content="The Show Up Club: for procrastinators. By procrastinators." />
      <meta name="apple-mobile-web-app-title" content="The Show Up Club" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © The Show Up Club.</>,
  unstable_faviconGlyph: '👋',
}
