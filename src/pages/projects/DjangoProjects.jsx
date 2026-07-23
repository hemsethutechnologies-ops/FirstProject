import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

export default function DjangoProjects() {
  const projects = [
    { id: 1, title: 'E-Commerce Marketplace Platform', category: 'Python Django', price: 'Premium', img: 'Web' },
    { id: 2, title: 'Blog Content Management System (CMS)', category: 'Python Django', price: 'Free', img: 'Web' },
    { id: 3, title: 'RESTful API User Auth Service', category: 'Python Django', price: 'Free', img: 'Web' },
    { id: 4, title: 'Student Management Portal', category: 'Python Django', price: 'Premium', img: 'Web' },
    { id: 5, title: 'Task Management Kanban Board', category: 'Python Django', price: 'Premium', img: 'Web' },
    { id: 6, title: 'Real Estate Property Listing Portal', category: 'Python Django', price: 'Free', img: 'Web' },
    { id: 7, title: 'Online Examination & Quiz System', category: 'Python Django', price: 'Free', img: 'Web' },
    { id: 8, title: 'Hospital Appointment Booking App', category: 'Python Django', price: 'Premium', img: 'Web' }
  ];

  return (
    <ProjectTemplate 
      title="Django Web Development"
      description="Scalable web apps, administration dashboards, and secure backend APIs built on the Python Django Framework."
      projects={projects}
      backgroundGradient="linear-gradient(135deg, var(--primary-dark) 0%, #15803d 100%)"
    />
  );
}
