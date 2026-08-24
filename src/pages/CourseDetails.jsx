import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '../data/courseData';
import { Clock, BarChart, User, CheckCircle, ChevronDown, ChevronUp, ArrowLeft, Target, Briefcase, Check, FolderGit2, TrendingUp, Wallet, Terminal } from 'lucide-react';
import EnrollmentModal from '../components/EnrollmentModal';
import './CourseDetails.css';
import SEO from '../components/SEO';

export default function CourseDetails() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);
  const [activeModule, setActiveModule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!course) {
    return <div className="page-wrapper"><div className="page-content-wrap"><h2>Course not found.</h2></div></div>;
  }

  const toggleModule = (index) => {
    if (activeModule === index) {
      setActiveModule(null);
    } else {
      setActiveModule(index);
    }
  };

  return (
    <main className="page-wrapper course-details-page">
      <SEO title="Course Details" description="Detailed curriculum and information for our technical training courses." />
      {/* Hero Section */}
      <div className="course-hero">
        <div className="course-hero-content">
          <Link to="/courses" className="back-link"><ArrowLeft size={16}/> Back to Courses</Link>
          <span className="course-badge">{course.category}</span>
          <h1>{course.title}</h1>
          <p className="course-hero-desc">{course.overview.substring(0, 150)}...</p>
          
          <div className="course-meta-row">
            <div className="meta-item"><Clock size={18} /> {course.duration}</div>
            <div className="meta-item"><BarChart size={18} /> {course.level}</div>
            <div className="meta-item"><User size={18} /> {course.instructor}</div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="course-layout">
        <div className="course-main-content">
          
          <section className="detail-section">
            <h2>Course Description</h2>
            <p className="overview-text">{course.overview}</p>
            {course.descriptionExtra && (
              <p className="overview-text" style={{marginTop: '15px', fontWeight: '500', color: 'var(--primary-dark)'}}>
                {course.descriptionExtra}
              </p>
            )}
          </section>

          {course.requirements && (
            <section className="detail-section">
              <h2>Requirements</h2>
              <ul className="simple-list">
                {course.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </section>
          )}

          {course.whoIsFor && (
            <section className="detail-section">
              <h2>Who this course is for:</h2>
              <ul className="simple-list">
                {course.whoIsFor.map((who, idx) => (
                  <li key={idx}>{who}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="detail-section">
            <h2>What You'll Learn</h2>
            <div className="learn-grid">
              {course.whatYouWillLearn.map((item, idx) => (
                <div key={idx} className="learn-item">
                  <CheckCircle size={20} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>Course Syllabus</h2>
            <div className="syllabus-accordion">
              {course.syllabus.map((mod, idx) => (
                <div key={idx} className={`accordion-item ${activeModule === idx ? 'active' : ''}`}>
                  <button className="accordion-header" onClick={() => toggleModule(idx)}>
                    <span className="module-title">{mod.module}</span>
                    {activeModule === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <div className="accordion-content">
                    <ul className="topic-list">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {course.projects && course.projects.length > 0 && (
            <section className="detail-section">
              <h2>Projects You Will Build</h2>
              <div className="projects-grid">
                {course.projects.map((proj, idx) => (
                  <div key={idx} className="project-highlight-card">
                    <div className="project-highlight-icon">
                      <FolderGit2 size={24} color="var(--primary-dark)" />
                    </div>
                    <div>
                      <h3>{proj.name}</h3>
                      <p>{proj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {course.careerOpportunities && course.careerOpportunities.length > 0 && (
            <section className="detail-section">
              <h2>Career Opportunities & Insights</h2>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '25px' }}>
                <div style={{ flex: 1, minWidth: '250px', background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', marginBottom: '15px', fontSize: '1.1rem' }}><Briefcase size={20} color="#0369a1"/> Job Roles</h3>
                  <ul className="simple-list" style={{ marginTop: 0 }}>
                    {course.careerOpportunities.map((role, idx) => (
                      <li key={idx} style={{ paddingLeft: '24px' }}>{role}</li>
                    ))}
                  </ul>
                </div>
                {course.salaryInsights && (
                  <div style={{ flex: 1, minWidth: '250px', background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', marginBottom: '15px', fontSize: '1.1rem' }}><Wallet size={20} color="#10b981"/> Expected Salary</h3>
                    <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a' }}>{course.salaryInsights}</div>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '5px' }}>Based on current industry standards.</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {course.toolsCovered && course.toolsCovered.length > 0 && (
            <section className="detail-section">
              <h2>Tools & Technologies Covered</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {course.toolsCovered.map((tool, idx) => (
                  <span key={idx} style={{ background: '#f0f9ff', color: '#0369a1', padding: '8px 16px', borderRadius: '30px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Terminal size={16} />
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          )}

          {course.trainingDetails && course.trainingDetails.length > 0 && (
            <section className="detail-section">
              <h2>Training Methodology</h2>
              <ul className="training-list">
                {course.trainingDetails.map((detail, idx) => (
                  <li key={idx}>
                    <Target size={20} color="var(--accent-orange)" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {course.faqs && course.faqs.length > 0 && (
            <section className="detail-section">
              <h2>Frequently Asked Questions</h2>
              <div className="syllabus-accordion">
                {course.faqs.map((faq, idx) => (
                  <div key={idx} className="accordion-item" style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#f8fafc' }}>
                    <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '10px' }}>Q: {faq.q}</h3>
                    <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sticky Sidebar */}
        <div className="course-sidebar-wrapper">
          <div className="course-sidebar">
            <div className="sidebar-image" style={{ backgroundImage: `url(${course.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="sidebar-image-overlay">
                <span className="sidebar-badge">Bestseller</span>
              </div>
            </div>
            <div className="sidebar-content">
              <div className="sidebar-price-container" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                  <h2 className="sidebar-price" style={{ margin: 0, fontSize: '2.5rem', color: '#0f172a' }}>{course.price}</h2>
                  {course.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '1.2rem', fontWeight: '500' }}>{course.originalPrice}</span>
                  )}
                </div>
                {course.originalPrice && (
                  <div style={{ color: '#10b981', fontWeight: '700', fontSize: '0.95rem', marginTop: '4px' }}>🔥 Limited time discount!</div>
                )}
              </div>
              
              <button className="btn-enroll-massive" onClick={() => setIsModalOpen(true)}>
                Enroll Now
              </button>
              <p className="guarantee-text">30-Day Money-Back Guarantee</p>
              
              <ul className="sidebar-features">
                <li><Check size={18} className="sidebar-icon" /> Full lifetime access</li>
                <li><Check size={18} className="sidebar-icon" /> Access on mobile and TV</li>
                <li><Check size={18} className="sidebar-icon" /> Certificate of completion</li>
                <li><Check size={18} className="sidebar-icon" /> 1-on-1 Mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <EnrollmentModal course={course} onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}
