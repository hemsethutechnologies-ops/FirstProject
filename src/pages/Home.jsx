import React from 'react';
import Hero from '../components/Hero';
import AlumniCompanies from '../components/AlumniCompanies';
import AchievementsBanner from '../components/AchievementsBanner';
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

export default function Home() {
  return (
    <main>
      <Hero />
      <AlumniCompanies />
      <AchievementsBanner />
      <WhyChooseUs />
      <PopularCourses />
      <SuccessModel />
      <Features />
      <HowItWorks />
      <CategoryGrid />
      <FeaturedList />
      <LeadFormSection />
      <Testimonials />
      <CTA />
    </main>
  );
}

