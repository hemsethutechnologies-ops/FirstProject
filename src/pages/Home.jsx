import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AlumniCompanies from '../components/AlumniCompanies';
import WhyChooseUs from '../components/WhyChooseUs';
import PopularCourses from '../components/PopularCourses';
import SuccessModel from '../components/SuccessModel';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedList from '../components/FeaturedList';
import LeadFormSection from '../components/LeadFormSection';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hemsethu Technologies',
  url: 'https://hemsethutechnologies.com',
  logo: 'https://hemsethutechnologies.com/logo.png',
  description: 'Leading IT training and project development company in Hyderabad offering academic projects, courses, internships, and software services.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9391925913',
    contactType: 'customer service',
    availableLanguage: ['English', 'Telugu', 'Hindi'],
  },
  sameAs: [
    'https://www.facebook.com/hemsethutechnologies',
    'https://www.linkedin.com/company/hemsethutechnologies',
    'https://www.instagram.com/hemsethutechnologies',
  ],
};

export default function Home() {
  return (
    <main>
      <SEO
        title="IT Training & Projects in Hyderabad"
        description="Hemsethu Technologies is a leading IT training and project development company in Hyderabad offering academic projects, professional courses, internships, and software services for B.Tech/M.Tech students."
        canonical="/"
        keywords={['IEEE projects Hyderabad', 'B.Tech projects', 'IT training institute', 'software internships']}
        jsonLd={organizationSchema}
      />
      <Hero />
      <WhyChooseUs />
      <PopularCourses />
      <CategoryGrid />
      <FeaturedList />
      <LeadFormSection />
      <SuccessModel />
      <Features />
      <HowItWorks />
      <AlumniCompanies />
      <Testimonials />
      <CTA />
    </main>
  );
}

