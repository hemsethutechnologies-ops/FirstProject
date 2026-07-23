import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

export default function DataScienceProjects() {
  const projects = [
    { id: 1, title: 'Customer Churn & Behavior Analysis', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 2, title: 'Covid-19 Global Data Dashboard', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 3, title: 'Superstore Sales Forecasting pipeline', category: 'Data Science', price: 'Premium', img: 'Data' },
    { id: 4, title: 'Sentiment Analysis on Product Reviews', category: 'Data Science', price: 'Premium', img: 'Data' },
    { id: 5, title: 'E-Commerce Customer Segmentation Analysis', category: 'Data Science', price: 'Premium', img: 'Data' },
    { id: 6, title: 'HR Employee Attrition & Performance Analysis', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 7, title: 'Global Climate Change Temperature Visualization', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 8, title: 'Social Media Network Text Mining Tool', category: 'Data Science', price: 'Premium', img: 'Data' }
  ];

  return (
    <ProjectTemplate 
      title="Data Science Projects"
      description="Exploratory data analysis, statistical plotting, and data visualizers utilizing Python Pandas and R."
      projects={projects}
      backgroundGradient="linear-gradient(135deg, var(--primary-dark) 0%, #0891b2 100%)"
    />
  );
}
