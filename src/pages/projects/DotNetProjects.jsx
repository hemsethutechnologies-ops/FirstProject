import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

export default function DotNetProjects() {
  const projects = [
    { id: 1, title: 'Enterprise Resource ERP Portal', category: '.NET', price: 'Premium', img: 'DotNet' },
    { id: 2, title: 'C# MVC Online Billing Application', category: '.NET', price: 'Premium', img: 'DotNet' },
    { id: 3, title: 'Corporate Inventory Tracking Utility', category: '.NET', price: 'Free', img: 'DotNet' },
    { id: 4, title: 'HR Payroll Management System', category: '.NET', price: 'Free', img: 'DotNet' },
    { id: 5, title: 'Real-Time Stock Market Dashboard', category: '.NET', price: 'Premium', img: 'DotNet' },
    { id: 6, title: 'E-Commerce API Service Gateway', category: '.NET', price: 'Free', img: 'DotNet' },
    { id: 7, title: 'Warehouse Logistics Management Suite', category: '.NET', price: 'Free', img: 'DotNet' },
    { id: 8, title: 'Multi-Tenant SaaS CRM Platform', category: '.NET', price: 'Premium', img: 'DotNet' }
  ];

  return (
    <ProjectTemplate 
      title=".NET C# Framework"
      description="Corporate web systems, MVC databases, and desktop utilities designed using C# .NET Core."
      projects={projects}
      backgroundGradient="linear-gradient(135deg, var(--primary-dark) 0%, #6d28d9 100%)"
    />
  );
}
