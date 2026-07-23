import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

export default function PythonProjects() {
  const projects = [
    { id: 1, title: 'Multi-threaded Web Scraper & Parser', category: 'Python', price: 'Free', img: 'Python' },
    { id: 2, title: 'Desktop Task Automation Assistant', category: 'Python', price: 'Free', img: 'Python' },
    { id: 3, title: 'GUI PDF Editor & Splitter Tool', category: 'Python', price: 'Premium', img: 'Python' },
    { id: 4, title: 'Bulk Email Sending Application', category: 'Python', price: 'Free', img: 'Python' },
    { id: 5, title: 'Secure Password Manager (PyQt5)', category: 'Python', price: 'Premium', img: 'Python' },
    { id: 6, title: 'Automated Trading Bot Dashboard', category: 'Python', price: 'Free', img: 'Python' },
    { id: 7, title: 'Local Image Processor & Filter Tool', category: 'Python', price: 'Free', img: 'Python' },
    { id: 8, title: 'Network Packets Sniffer & Analyzer', category: 'Python', price: 'Premium', img: 'Python' }
  ];

  return (
    <ProjectTemplate 
      title="Python Development Projects"
      description="Scripting utility applications, data tools, and desktop widgets built using Python."
      projects={projects}
      backgroundGradient="linear-gradient(135deg, var(--primary-dark) 0%, #0369a1 100%)"
    />
  );
}
