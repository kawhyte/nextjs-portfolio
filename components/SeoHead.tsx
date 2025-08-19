import Head from 'next/head';

interface SeoHeadProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

const SeoHead = ({
  title,
  description,
  imageUrl,
  url,
  type = 'website',
  noIndex = false,
}: SeoHeadProps) => {
  const siteName = "Kenny Whyte's Portfolio";
  const defaultDescription = "The portfolio of Kenny Whyte, a full-stack engineer specializing in C#, .NET, and React/Next.js. View projects, read blog posts, and get in touch.";
  // NOTE: You should replace this with your actual domain and a real image URL.
  const siteUrl = "https://www.yourdomain.com";
  const defaultImageUrl = `${siteUrl}/assets/images/cover.webp`;

  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || defaultDescription;
  const pageImageUrl = imageUrl || defaultImageUrl;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Head>
      {/* Standard SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImageUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImageUrl} />
    </Head>
  );
};

export default SeoHead;
