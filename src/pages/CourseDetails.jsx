import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '../data/courseData';
import { Clock, BarChart, User, CheckCircle, ChevronDown, ChevronUp, ArrowLeft, Target, Briefcase, Check, FolderGit2 } from 'lucide-react';
import EnrollmentModal from '../components/EnrollmentModal';
import './CourseDetails.css';

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
        </div>

        {/* Sticky Sidebar */}
        <div className="course-sidebar-wrapper">
          <div className="course-sidebar">
            <div className="sidebar-image" style={{ backgroundImage: `url(${course.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <div className="sidebar-content">
              <div className="price-tag">{course.price}</div>
              <button className="btn-enroll-massive" onClick={() => setIsModalOpen(true)}>Enroll Now</button>
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
