import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Hemsethu Technologies';
const BASE_URL = 'https://hemsethutechnologies.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const TWITTER_HANDLE = '@HemsethuTech';

/**
 * Reusable SEO component — drop into any page to set dynamic <head> tags.
 *
 * @param {string}  title       - Page title (appended with " | Hemsethu Technologies")
 * @param {string}  description - Meta description (max ~160 chars)
 * @param {string}  canonical   - Canonical URL path e.g. "/courses"
 * @param {string}  ogImage     - Absolute URL for OG image (falls back to default)
 * @param {string}  ogType      - OG type ("website" | "article") — default "website"
 * @param {object}  jsonLd      - JSON-LD structured data object
 * @param {string[]} keywords   - Additional keywords array
 */
export default function SEO({
  title,
  description,
  canonical = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd = null,
  keywords = [],
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — IT Training & Projects in Hyderabad`;

  const canonicalUrl = `${BASE_URL}${canonical}`;

  const defaultKeywords = [
    'Hemsethu Technologies',
    'IT training Hyderabad',
    'academic projects Hyderabad',
    'software training',
    'internships Hyderabad',
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
