import React, { useRef } from 'react';
import { Clock, Users, BookOpen, IndianRupee, ChevronLeft, ChevronRight } from 'lucide-react';
import './PopularCourses.css';

// Training banner images from assets
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
    duration: '3 Months',
    title: 'Python Full Stack Development Program',
    sessions: 45,
    students: '420+',
    price: '₹20,000',
  },
  {
    id: 2,
    banner: img2,
    duration: '3 Months',
    title: 'Java Application Development Program',
    sessions: 40,
    students: '350+',
    price: '₹18,000',
  },
  {
    id: 3,
    banner: img3,
    duration: '4 Months',
    title: 'MERN Stack Web Development Program',
    sessions: 50,
    students: '279+',
    price: '₹25,000',
  },
  {
    id: 4,
    banner: img4,
    duration: '2 Months',
    title: 'Data Science & Machine Learning Program',
    sessions: 35,
    students: '310+',
    price: '₹22,000',
  },
  {
    id: 5,
    banner: img5,
    duration: '2 Months',
    title: 'AWS & DevOps Engineering Program',
    sessions: 30,
    students: '200+',
    price: '₹20,000',
  },
  {
    id: 6,
    banner: img6,
    duration: '3 Months',
    title: 'Android Application Development Program',
    sessions: 38,
    students: '290+',
    price: '₹18,000',
  },
];

export default function PopularCourses() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector('.pc-card').offsetWidth + 20;
      trackRef.current.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
    }
  };

  return (
    <section className="pc-section">
      <div className="pc-container">

        {/* Label */}
        <p className="pc-label">POPULAR COURSES</p>

        {/* Title */}
        <div className="pc-title-wrap">
          <h2 className="pc-title">Upgrade Your Skills with Our Training Programs!</h2>
          <div className="pc-underline" aria-hidden="true">
            <svg viewBox="0 0 220 12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M2 9 C 40 2, 80 12, 120 5 C 160 -2, 200 10, 218 6"
                stroke="#22c55e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Slider row */}
        <div className="pc-slider-wrap">
          {/* Left arrow */}
          <button className="pc-arrow pc-arrow--left" onClick={() => scroll(-1)} aria-label="Previous">
            <ChevronLeft size={22} />
          </button>

          {/* Cards track */}
          <div className="pc-track" ref={trackRef}>
            {courses.map((c) => (
              <div key={c.id} className="pc-card">
                {/* Banner */}
                <div className="pc-banner">
                  <img src={c.banner} alt={c.title} className="pc-banner-img" />
                  {/* orange duration badge */}
                  <span className="pc-badge">
                    <Clock size={13} /> {c.duration}
                  </span>
                  {/* JOIN button on banner */}
                  <button className="pc-join-btn">JOIN OUR CLASS</button>
                </div>

                {/* Card body */}
                <div className="pc-body">
                  <h3 className="pc-course-title">{c.title}</h3>
                  <div className="pc-meta">
                    <span className="pc-meta-item">
                      <BookOpen size={13} /> {c.sessions} Sessions
                    </span>
                    <span className="pc-meta-item">
                      <Users size={13} /> {c.students} Students
                    </span>
                    <span className="pc-meta-item">
                      <IndianRupee size={13} /> {c.price.replace('₹', '')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button className="pc-arrow pc-arrow--right" onClick={() => scroll(1)} aria-label="Next">
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}
