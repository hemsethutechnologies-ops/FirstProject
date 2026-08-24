import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import './PageStyles.css';

import { 
  Terminal, 
  Layout, 
  Server, 
  PenTool, 
  ShieldCheck, 
  CloudCog,
  MonitorPlay,
  ArrowRight,
  Clock,
  BarChart,
  Brain
} from 'lucide-react';

import course1Img from '../assets/course-1.png';
import course2Img from '../assets/course-2.png';
import course3Img from '../assets/course-3.png';
import course4Img from '../assets/course-4.png';
import course5Img from '../assets/course-5.png';
import course6Img from '../assets/course-6.png';
import coursesHeroImg from '../assets/courses_hero.jpg';

export default function Courses({ category }) {
  const navigate = useNavigate();

  const categoryMapping = {
    'frontend': 'Frontend Dev',
    'backend': 'Backend Dev',
    'fullstack': 'Web Development',
    'data-science-ai': 'Data Science & AI',
    'devops': 'DevOps',
    'cybersecurity': 'Security'
  };

  const reverseCategoryMapping = Object.fromEntries(
    Object.entries(categoryMapping).map(([k, v]) => [v, k])
  );

  const [activeCategory, setActiveCategory] = useState('All');

  // Sync state with prop (which is passed from router)
  useEffect(() => {
    if (category && categoryMapping[category.toLowerCase()]) {
      setActiveCategory(categoryMapping[category.toLowerCase()]);
    } else {
      setActiveCategory('All');
    }
  }, [category]);

  const handleTabClick = (catName) => {
    if (catName === 'All') {
      navigate('/courses');
    } else {
      const routeParam = reverseCategoryMapping[catName];
      if (routeParam) {
        navigate(`/courses/${routeParam}`);
      }
    }
  };

  const courses = [
    // Web Development (fullstack)
    { id: 1, title: 'Fullstack Masterclass', category: 'Web Development', duration: '6 Months', img: course1Img, level: 'Advanced' },
    { id: 9, title: 'Fullstack JavaScript Developer', category: 'Web Development', duration: '6 Months', img: course2Img, level: 'Intermediate' },
    { id: 13, title: 'Django & React Fullstack Application', category: 'Web Development', duration: '5 Months', img: course3Img, level: 'Advanced' },
    { id: 14, title: 'ASP.NET Core & Angular Enterprise App', category: 'Web Development', duration: '6 Months', img: course4Img, level: 'Advanced' },

    // Backend Dev (backend)
    { id: 2, title: 'Advanced Python & Django', category: 'Backend Dev', duration: '3 Months', img: course5Img, level: 'Intermediate' },
    { id: 15, title: 'Node.js & Express REST APIs', category: 'Backend Dev', duration: '3 Months', img: course6Img, level: 'Beginner' },
    { id: 16, title: 'Java Spring Boot Microservices', category: 'Backend Dev', duration: '4 Months', img: course1Img, level: 'Advanced' },
    { id: 17, title: 'Go (Golang) Web Development', category: 'Backend Dev', duration: '3 Months', img: course2Img, level: 'Intermediate' },

    // Data Science & AI (data-science-ai)
    { id: 3, title: 'Machine Learning & AI Bootcamp', category: 'Data Science & AI', duration: '6 Months', img: course3Img, level: 'Beginner' },
    { id: 18, title: 'Deep Learning with PyTorch', category: 'Data Science & AI', duration: '4 Months', img: course4Img, level: 'Advanced' },
    { id: 19, title: 'Data Science & Big Analytics', category: 'Data Science & AI', duration: '5 Months', img: course5Img, level: 'Intermediate' },
    { id: 20, title: 'Natural Language Processing (LLMs)', category: 'Data Science & AI', duration: '3 Months', img: course6Img, level: 'Advanced' },

    // Frontend Dev (frontend)
    { id: 4, title: 'Frontend Web Development', category: 'Frontend Dev', duration: '3 Months', img: course1Img, level: 'Beginner' },
    { id: 21, title: 'React.js & Next.js Advanced', category: 'Frontend Dev', duration: '3 Months', img: course2Img, level: 'Advanced' },
    { id: 22, title: 'Vue.js & Pinia State Management', category: 'Frontend Dev', duration: '2 Months', img: course3Img, level: 'Intermediate' },
    { id: 23, title: 'Angular Professional Architect', category: 'Frontend Dev', duration: '4 Months', img: course4Img, level: 'Advanced' },

    // Security (cybersecurity)
    { id: 5, title: 'Cyber Security Essentials', category: 'Security', duration: '3 Months', img: course5Img, level: 'Beginner' },
    { id: 11, title: 'Ethical Hacking & Pentesting', category: 'Security', duration: '4 Months', img: course6Img, level: 'Intermediate' },
    { id: 24, title: 'Network Security & Cryptography', category: 'Security', duration: '3 Months', img: course1Img, level: 'Advanced' },
    { id: 25, title: 'Cloud Security & Compliance Audit', category: 'Security', duration: '3 Months', img: course2Img, level: 'Advanced' },

    // DevOps (devops)
    { id: 6, title: 'AWS Cloud Architect', category: 'DevOps', duration: '5 Months', img: course3Img, level: 'Advanced' },
    { id: 10, title: 'DevOps & CI/CD Pipeline Architect', category: 'DevOps', duration: '3 Months', img: course4Img, level: 'Advanced' },
    { id: 26, title: 'Kubernetes & Docker Administration', category: 'DevOps', duration: '3 Months', img: course5Img, level: 'Intermediate' },
    { id: 27, title: 'Terraform Infrastructure as Code (IaC)', category: 'DevOps', duration: '2 Months', img: course6Img, level: 'Beginner' }
  ];

  const categories = ['All', 'Web Development', 'Frontend Dev', 'Backend Dev', 'Data Science & AI', 'Security', 'DevOps'];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  const pageTitle = activeCategory !== 'All' ? `${activeCategory} Courses` : 'Professional Tech Courses';
  const pageDesc = activeCategory !== 'All'
    ? `Enroll in our ${activeCategory} course at Hemsethu Technologies. Industry-relevant curriculum, expert mentors, and hands-on projects.`
    : 'Explore professional IT courses at Hemsethu Technologies — Frontend, Backend, Fullstack, DevOps, UI/UX, and Cybersecurity. Learn from industry experts.';

  // Helper to get category icon
  const getCategoryIcon = (catName) => {
    switch(catName) {
      case 'Web Development': return <MonitorPlay size={18} />;
      case 'Frontend Dev': return <Layout size={18} />;
      case 'Backend Dev': return <Server size={18} />;
      case 'Data Science & AI': return <Brain size={18} />;
      case 'Security': return <ShieldCheck size={18} />;
      case 'DevOps': return <CloudCog size={18} />;
      default: return <Terminal size={18} />;
    }
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return { bg: '#10b981', text: '#ffffff' };
      case 'Intermediate': return { bg: '#f59e0b', text: '#ffffff' };
      case 'Advanced': return { bg: '#e11d48', text: '#ffffff' };
      default: return { bg: '#64748b', text: '#ffffff' };
    }
  };

  return (
    <main className="page-wrapper projects-page" style={{ padding: 0, minHeight: 'auto' }}>
      <SEO
        title={pageTitle}
        description={pageDesc}
        canonical={category ? `/courses/${category}` : '/courses'}
        keywords={['IT courses Hyderabad', 'programming courses', 'software development training', pageTitle]}
      />
      
      {/* Premium Hero Section matching Projects Page */}
      <div className="page-header" style={{
        background: '#f8fafc',
        padding: '50px 5% 20px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        position: 'relative',
        overflow: 'hidden',
        flexWrap: 'wrap'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.4, pointerEvents: 'none' }}></div>
        
        <div style={{ flex: '1 1 500px', zIndex: 1, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
             <div style={{ height: '3px', width: '40px', backgroundColor: '#0369a1' }}></div>
             <span style={{ color: '#0369a1', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Professional Training</span>
          </div>
          <h1 className="page-title" style={{ color: '#0f172a', fontSize: '3.5rem', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px', lineHeight: '1.15', textAlign: 'left' }}>
            Master Tech Skills <br/>With <span style={{ color: '#e11d48' }}>Expert</span> Mentorship
          </h1>
          <p className="page-subtitle" style={{ color: '#475569', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: '400', maxWidth: '550px', textAlign: 'left', opacity: 1, marginBottom: '10px' }}>
            Accelerate your career with our intensive, project-based courses taught by industry veterans. From frontend design to cloud security, we've got you covered.
          </p>
        </div>

        <div style={{ flex: '1 1 400px', zIndex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
           <img 
             src={coursesHeroImg} 
             alt="Courses Hero Illustration" 
             style={{ 
               width: '100%', 
               maxWidth: '550px',
               height: '350px',
               objectFit: 'cover',
               objectPosition: 'center',
               WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 75%)',
               maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 75%)'
             }} 
           />
        </div>
      </div>

      <div className="page-content-wrap" style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 5%' }}>
        
        {/* Interactive Category Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '50px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleTabClick(cat)}
              style={{
                padding: '12px 24px',
                borderRadius: '50px',
                border: 'none',
                background: activeCategory === cat ? '#0369a1' : '#f1f5f9',
                color: activeCategory === cat ? '#fff' : '#475569',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: activeCategory === cat ? '0 8px 20px rgba(3,105,161,0.25)' : 'none'
              }}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="items-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
            {filteredCourses.map(course => {
              const levelStyle = getLevelColor(course.level);
              
              return (
                <div key={course.id} className="item-card" style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: 'none', boxShadow: '0 15px 35px -5px rgba(0,0,0,0.05), 0 5px 15px rgba(0,0,0,0.03)', transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease', display: 'flex', flexDirection: 'column' }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-10px)';
                       e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.05)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)';
                       e.currentTarget.style.boxShadow = '0 15px 35px -5px rgba(0,0,0,0.05), 0 5px 15px rgba(0,0,0,0.03)';
                     }}>
                  
                  <div className="item-image" style={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', background: '#fff' }}>
                    <div style={{ position: 'absolute', top: '16px', right: '16px', background: levelStyle.bg, color: levelStyle.text, padding: '6px 14px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px', zIndex: 2, boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>
                      <BarChart size={14} />
                      {course.level}
                    </div>
                    <img src={course.img} alt={course.title} style={{ width: '100%', height: 'auto', objectFit: 'contain', transition: 'transform 0.5s ease', display: 'block' }} 
                         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                  </div>
                  
                  <div className="item-details" style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ color: '#0369a1', background: '#f0f9ff', padding: '8px', borderRadius: '10px' }}>
                        {getCategoryIcon(course.category)}
                      </div>
                      <span style={{ color: '#0369a1', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {course.category}
                      </span>
                    </div>
                    
                    <h3 className="item-title" style={{ fontSize: '1.35rem', fontWeight: '850', color: '#0f172a', marginBottom: '16px', lineHeight: '1.3' }}>
                      {course.title}
                    </h3>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.95rem', marginBottom: '30px', fontWeight: '600' }}>
                      <Clock size={18} color="#94a3b8" />
                      Duration: {course.duration}
                    </div>
                    
                    <div style={{ marginTop: 'auto' }}>
                      <Link to={`/courses/${course.id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', padding: '14px', background: '#0369a1', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '1rem', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(3,105,161,0.2)' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#e11d48';
                              e.currentTarget.style.boxShadow = '0 6px 16px rgba(225,29,72,0.3)';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#0369a1';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(3,105,161,0.2)';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}>
                        View Course Details
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-projects-found" style={{ textAlign: 'center', padding: '80px 20px', background: '#fff', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
            <MonitorPlay size={48} color="#cbd5e1" style={{ marginBottom: '16px' }} />
            <h3 style={{ color: '#475569', fontSize: '1.2rem' }}>No courses found for this category.</h3>
          </div>
        )}
      </div>
    </main>
  );
}
