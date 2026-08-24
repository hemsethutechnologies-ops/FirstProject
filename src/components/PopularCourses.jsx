import React from 'react';
import { Clock, Users, BookOpen, IndianRupee, ArrowRight, PlayCircle } from 'lucide-react';
import './PopularCourses.css';

import img1 from '../assets/course-1.png';
import img2 from '../assets/course-2.png';
import img3 from '../assets/course-3.png';
import img4 from '../assets/course-4.png';
import img5 from '../assets/course-5.png';
import img6 from '../assets/course-6.png';

const courses = [
  {
    id: 1,
    banner: img1,
    duration: '6 Months',
    title: 'Python Full Stack Development Program',
    sessions: 90,
    students: '420+',
    price: '₹10,000',
    originalPrice: '35,000',
    description: 'Master Python, Django, and frontend technologies to build scalable web applications from scratch.',
  },
  {
    id: 2,
    banner: img2,
    duration: '6 Months',
    title: 'Java Full Stack Development Program',
    sessions: 85,
    students: '350+',
    price: '₹10,000',
    originalPrice: '35,000',
    description: 'Learn core and advanced Java, Spring Boot, and Microservices architecture for enterprise apps.',
  },
  {
    id: 3,
    banner: img3,
    duration: '6 Months',
    title: 'MERN Stack Web Development Program',
    sessions: 100,
    students: '279+',
    price: '₹10,000',
    originalPrice: '35,000',
    description: 'Become a full-stack Javascript expert using MongoDB, Express, React, and Node.js.',
  },
  {
    id: 4,
    banner: img4,
    duration: '2 Months',
    title: 'Data Science & Machine Learning Program',
    sessions: 35,
    students: '310+',
    price: '₹2,500',
    originalPrice: '15,000',
    description: 'Dive into data analysis, AI models, and predictive analytics using modern Python libraries.',
  },
  {
    id: 5,
    banner: img5,
    duration: '2 Months',
    title: 'AWS & DevOps Engineering Program',
    sessions: 30,
    students: '200+',
    price: '₹2,500',
    originalPrice: '15,000',
    description: 'Master cloud infrastructure, CI/CD pipelines, Docker, and Kubernetes for modern deployments.',
  },
  {
    id: 6,
    banner: img6,
    duration: '1 Month',
    title: 'Android Application Development Program',
    sessions: 20,
    students: '290+',
    price: '₹1,500',
    originalPrice: '10,000',
    description: 'Build native Android apps using Kotlin and Java with real-world project experience.',
  }
];

export default function PopularCourses() {
  return (
    <section className="courses-grid-section">
      <div className="courses-grid-container">
        
        <div className="courses-grid-header">
          <span className="courses-tag">POPULAR COURSES</span>
          <h2 className="courses-title">Upgrade Your Skills</h2>
          <p className="courses-subtitle">Choose from our industry-aligned programs designed to get you hired.</p>
        </div>

        <div className="courses-grid-layout">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-card-image-wrapper">
                <img src={course.banner} alt={course.title} className="course-card-image" />
                <div className="course-card-overlay">
                  <PlayCircle size={48} className="play-icon" />
                </div>
                <div className="course-card-price">
                  <span className="price-struck">₹{course.originalPrice}</span>
                  <span className="price-new"><IndianRupee size={14} /> {course.price.replace('₹', '')}</span>
                </div>
              </div>
              <div className="course-card-content">
                <div className="course-card-meta">
                  <span><Clock size={14}/> {course.duration}</span>
                  <span><BookOpen size={14}/> {course.sessions} Sessions</span>
                </div>
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-desc">{course.description}</p>
                <div className="course-card-stats">
                  <Users size={16} /> <span>{course.students} Students Enrolled</span>
                </div>
                <button className="course-card-btn">
                  Enroll Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
