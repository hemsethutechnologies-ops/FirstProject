import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

export default function AndroidProjects() {
  const projects = [
    { id: 1, title: 'Personal Expense Tracker Application', category: 'Android', price: 'Premium', img: 'Android' },
    { id: 2, title: 'On-Demand Food Delivery Client App', category: 'Android', price: 'Premium', img: 'Android' },
    { id: 3, title: 'GPS Location Tracker & Map Widget', category: 'Android', price: 'Free', img: 'Android' },
    { id: 4, title: 'Daily Fitness Tracker & Step Counter', category: 'Android', price: 'Free', img: 'Android' },
    { id: 5, title: 'Real-Time Messaging Chat Application', category: 'Android', price: 'Premium', img: 'Android' },
    { id: 6, title: 'Offline Notes & PDF Reader Utility', category: 'Android', price: 'Free', img: 'Android' },
    { id: 7, title: 'Weather Forecast & API Dashboard', category: 'Android', price: 'Free', img: 'Android' },
    { id: 8, title: 'QR Code Scanner & Inventory Manager', category: 'Android', price: 'Premium', img: 'Android' }
  ];

  return (
    <ProjectTemplate 
      title="Android Mobile Apps"
      description="Native and hybrid mobile applications built on Android Studio using Kotlin, Java, and Flutter."
      projects={projects}
      backgroundGradient="linear-gradient(135deg, var(--primary-dark) 0%, #ea580c 100%)"
    />
  );
}
