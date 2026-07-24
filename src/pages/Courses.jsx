import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './PageStyles.css';

export default function Courses({ category }) {
  const categoryMapping = {
    'frontend': 'Frontend Dev',
    'backend': 'Backend Dev',
    'fullstack': 'Web Development',
    'ui-ux': 'UI/UX Design',
    'devops': 'DevOps',
    'cybersecurity': 'Security'
  };

  const courses = [
    // Web Development (fullstack)
    { id: 1, title: 'Fullstack Masterclass', category: 'Web Development', duration: '6 Months', img: 'MERN' },
    { id: 9, title: 'Fullstack JavaScript Developer', category: 'Web Development', duration: '6 Months', img: 'MERN' },
    { id: 13, title: 'Django & React Fullstack Application', category: 'Web Development', duration: '5 Months', img: 'Django+React' },
    { id: 14, title: 'ASP.NET Core & Angular Enterprise App', category: 'Web Development', duration: '6 Months', img: '.NET+Angular' },

    // Backend Dev (backend)
    { id: 2, title: 'Advanced Python & Django', category: 'Backend Dev', duration: '3 Months', img: 'Python' },
    { id: 15, title: 'Node.js & Express REST APIs', category: 'Backend Dev', duration: '3 Months', img: 'Node.js' },
    { id: 16, title: 'Java Spring Boot Microservices', category: 'Backend Dev', duration: '4 Months', img: 'Spring Boot' },
    { id: 17, title: 'Go (Golang) Web Development', category: 'Backend Dev', duration: '3 Months', img: 'Golang' },

    // UI/UX Design (ui-ux)
    { id: 3, title: 'UI/UX Design Bootcamp', category: 'UI/UX Design', duration: '2 Months', img: 'UI/UX' },
    { id: 18, title: 'Figma Prototype & Interaction Design', category: 'UI/UX Design', duration: '2 Months', img: 'Figma' },
    { id: 19, title: 'Mobile App UX Research & Strategy', category: 'UI/UX Design', duration: '3 Months', img: 'Mobile UX' },
    { id: 20, title: 'Web Layout Design & Wireframing', category: 'UI/UX Design', duration: '2 Months', img: 'Figma' },

    // Frontend Dev (frontend)
    { id: 4, title: 'Frontend Web Development', category: 'Frontend Dev', duration: '3 Months', img: 'HTML/CSS/JS' },
    { id: 21, title: 'React.js & Next.js Advanced', category: 'Frontend Dev', duration: '3 Months', img: 'React/Next' },
    { id: 22, title: 'Vue.js & Pinia State Management', category: 'Frontend Dev', duration: '2 Months', img: 'Vue/Pinia' },
    { id: 23, title: 'Angular Professional Architect', category: 'Frontend Dev', duration: '4 Months', img: 'Angular' },

    // Security (cybersecurity)
    { id: 5, title: 'Cyber Security Essentials', category: 'Security', duration: '3 Months', img: 'Security' },
    { id: 11, title: 'Ethical Hacking & Pentesting', category: 'Security', duration: '4 Months', img: 'Pentest' },
    { id: 24, title: 'Network Security & Cryptography', category: 'Security', duration: '3 Months', img: 'Cryptography' },
    { id: 25, title: 'Cloud Security & Compliance Audit', category: 'Security', duration: '3 Months', img: 'Cloud Security' },

    // DevOps (devops)
    { id: 6, title: 'AWS Cloud Architect', category: 'DevOps', duration: '5 Months', img: 'AWS' },
    { id: 10, title: 'DevOps & CI/CD Pipeline Architect', category: 'DevOps', duration: '3 Months', img: 'Docker/K8s' },
    { id: 26, title: 'Kubernetes & Docker Administration', category: 'DevOps', duration: '3 Months', img: 'Kubernetes' },
    { id: 27, title: 'Terraform Infrastructure as Code (IaC)', category: 'DevOps', duration: '2 Months', img: 'Terraform' }
  ];

  const targetCategoryName = category ? categoryMapping[category.toLowerCase()] : null;
  const filteredCourses = targetCategoryName 
    ? courses.filter(c => c.category === targetCategoryName)
    : courses;

  const pageTitle = targetCategoryName ? `${targetCategoryName} Courses` : 'Professional Courses';
  const pageDesc = targetCategoryName
    ? `Enroll in our ${targetCategoryName} course at Hemsethu Technologies, Hyderabad. Industry-relevant curriculum, expert mentors, and hands-on projects.`
    : 'Explore professional IT courses at Hemsethu Technologies — Frontend, Backend, Fullstack, DevOps, UI/UX, and Cybersecurity. Learn from industry experts with real-world projects.';

  return (
    <main className="page-wrapper">
      <SEO
        title={pageTitle}
        description={pageDesc}
        canonical={category ? `/courses/${category}` : '/courses'}
        keywords={['IT courses Hyderabad', 'programming courses', 'software development training', pageTitle]}
      />
      <div className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-orange) 100%)'}}>  
        <h1>
          {targetCategoryName ? `${targetCategoryName} Courses` : 'Professional Courses'}
        </h1>
        <p>Accelerate your career with our intensive, project-based courses taught by industry veterans.</p>
      </div>

      <div className="page-content-wrap">
        {filteredCourses.length > 0 ? (
          <div className="items-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="item-card">
                <div className="item-image" style={{backgroundColor: '#f1f5f9'}}>
                  <h3>{course.img}</h3>
                </div>
                <div className="item-details">
                  <span style={{color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase'}}>{course.category}</span>
                  <h3 className="item-title">{course.title}</h3>
                  <p className="item-desc">Master {course.category} with real-world applications and dedicated mentorship throughout the journey.</p>
                  <div className="item-footer">
                    <span className="item-price" style={{color: 'var(--text-gray)'}}>Duration: {course.duration}</span>
                    <Link to={`/courses/${course.id}`} className="item-btn" style={{backgroundColor: 'var(--accent-green)', borderColor: 'var(--accent-green)', color: '#fff', textDecoration: 'none'}}>View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-found">
            <h3>No courses found for this category.</h3>
          </div>
        )}
      </div>
    </main>
  );
}
