import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

export default function JavaProjects() {
  const projects = [
    { id: 1, title: 'Library Management Enterprise System', category: 'Java', price: 'Free', img: 'Java' },
    { id: 2, title: 'Hospital Patient Management Portal', category: 'Java', price: 'Premium', img: 'Java' },
    { id: 3, title: 'ATM Simulator Desktop Software', category: 'Java', price: 'Free', img: 'Java' },
    { id: 4, title: 'Secure Cryptographic File Storage Tool', category: 'Java', price: 'Premium', img: 'Java' },
    { id: 5, title: 'Online Hotel Booking Microservice', category: 'Java', price: 'Premium', img: 'Java' },
    { id: 6, title: 'Employee Payroll Management System', category: 'Java', price: 'Free', img: 'Java' },
    { id: 7, title: 'Student Grading & Analytics System', category: 'Java', price: 'Free', img: 'Java' },
    { id: 8, title: 'Secure E-Voting & Verification Portal', category: 'Java', price: 'Premium', img: 'Java' }
  ];

  return (
    <ProjectTemplate 
      title="Java Enterprise Projects"
      description="Backend database architectures, GUI desktop software, and network services built on Java/J2EE."
      projects={projects}
      backgroundGradient="linear-gradient(135deg, var(--primary-dark) 0%, #dc2626 100%)"
    />
  );
}
