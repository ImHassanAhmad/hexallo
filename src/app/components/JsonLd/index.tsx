const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hexallo.com';

const organizationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Hexallo',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  sameAs: [
    'https://twitter.com/hexallo',
    'https://www.facebook.com/hexallo',
    'https://www.instagram.com/hexallo',
    'https://www.linkedin.com/company/hexallo',
  ],
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Hexallo',
  description:
    'Explore top travel destinations, exclusive hotel deals, and curated experiences worldwide.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, websiteSchema],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
