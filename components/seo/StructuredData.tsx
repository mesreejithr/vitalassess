export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VitalAssess',
    url: 'https://vitalassess.com',
    logo: 'https://vitalassess.com/logo.png',
    description: 'AI-powered hiring intelligence platform for candidate assessment and evaluation',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9744824525',
      contactType: 'Customer Service',
      email: 'mail@vitalassess.com',
      areaServed: 'IN',
      availableLanguage: ['en'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '67/A, Residents Ln, Edappally',
      addressLocality: 'Ernakulam, Kochi',
      addressRegion: 'Kerala',
      postalCode: '682024',
      addressCountry: 'IN',
    },
    sameAs: [
      // Add social media links when available
    ],
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VitalAssess',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '299',
      priceCurrency: 'INR',
    },
    description: 'AI-powered hiring intelligence platform that provides AI-generated assessments, secure proctoring, instant ranking, and role-fit insights for efficient candidate evaluation.',
    featureList: [
      'AI-Powered Question Generation',
      'Advanced AI Proctoring',
      'Role-Based Assessments',
      'Auto-Scored Results & Ranking',
      'Video Interview Integration',
      'Real-Time Analytics & Shortlisting',
      'Enterprise Dashboard & Branding',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
    </>
  )
}

