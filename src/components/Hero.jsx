import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Award,
  CheckCircle,
  Calendar,
  Clock,
  Code,
  Rocket,
  BookOpen,
  Building2,
  Trophy,
  Users,
  Laptop,
  Cloud,
  Activity,
  Terminal,
  Shield,
  Layers,
  Settings,
  Database,
  Flame
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ban1 from '../assets/ban-1.png';
import ban2 from '../assets/ban-2.png';
import ban3 from '../assets/ban-3.png';
import ban4 from '../assets/ban-4.png';
import ban5 from '../assets/ban-5.png';
import './Hero.css';

export default function Hero() {
  const [virtualIndex, setVirtualIndex] = useState(4); // Start copy index
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Courses');
  const autoplayTimerRef = useRef(null);

  const slides = [
    {
      id: 5,
      isFullImage: true,
      fullImage: ban1,
      titleNormal: 'Banner 1'
    },
    {
      id: 6,
      isFullImage: true,
      fullImage: ban2,
      titleNormal: 'Banner 2'
    },
    {
      id: 7,
      isFullImage: true,
      fullImage: ban3,
      titleNormal: 'Banner 3'
    },
    {
      id: 8,
      isFullImage: true,
      fullImage: ban4,
      titleNormal: 'Banner 4'
    },
    {
      id: 9,
      isFullImage: true,
      fullImage: ban5,
      titleNormal: 'Banner 5'
    }
  ];

  const categoriesList = [
    'All Courses',
    'AWS Cloud',
    'DevOps',
    'Cloud Computing',
    'Backend Development',
    'Frontend Development',
    'Data Science',
    'Cyber Security'
  ];

  const coursesData = [
    {
      id: 1,
      category: 'AWS Cloud',
      title: 'AWS Cloud Practitioner',
      coursesCount: 12,
      tag: 'Popular',
      colorClass: 'course-blue',
      icon: 'Cloud'
    },
    {
      id: 2,
      category: 'DevOps',
      title: 'DevOps Engineering',
      coursesCount: 18,
      tag: 'Popular',
      colorClass: 'course-green',
      icon: 'Infinity'
    },
    {
      id: 3,
      category: 'DevOps',
      title: 'Docker & Kubernetes',
      coursesCount: 10,
      tag: 'Popular',
      colorClass: 'course-purple',
      icon: 'Box'
    },
    {
      id: 4,
      category: 'DevOps',
      title: 'Jenkins CI/CD',
      coursesCount: 8,
      tag: 'Popular',
      colorClass: 'course-orange',
      icon: 'Settings'
    },
    {
      id: 5,
      category: 'DevOps',
      title: 'Terraform Automation',
      coursesCount: 7,
      tag: 'Popular',
      colorClass: 'course-pink',
      icon: 'Layers'
    },
    {
      id: 6,
      category: 'DevOps',
      title: 'Monitoring with Prometheus',
      coursesCount: 6,
      tag: 'Popular',
      colorClass: 'course-teal',
      icon: 'Activity'
    },
    {
      id: 7,
      category: 'Cloud Computing',
      title: 'Google Cloud Architect',
      coursesCount: 15,
      tag: 'Hot',
      colorClass: 'course-blue',
      icon: 'Cloud'
    },
    {
      id: 8,
      category: 'Backend Development',
      title: 'Python Django Backend',
      coursesCount: 22,
      tag: 'Popular',
      colorClass: 'course-purple',
      icon: 'Terminal'
    },
    {
      id: 9,
      category: 'Frontend Development',
      title: 'ReactJS Frontend Mastery',
      coursesCount: 16,
      tag: 'Popular',
      colorClass: 'course-teal',
      icon: 'Code'
    },
    {
      id: 10,
      category: 'Data Science',
      title: 'Machine Learning & AI',
      coursesCount: 25,
      tag: 'Hot',
      colorClass: 'course-orange',
      icon: 'Brain'
    },
    {
      id: 11,
      category: 'Cyber Security',
      title: 'Ethical Hacking Bootcamps',
      coursesCount: 11,
      tag: 'Popular',
      colorClass: 'course-pink',
      icon: 'Shield'
    }
  ];

  const resetAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setInterval(() => {
      setVirtualIndex((prev) => prev + 1);
    }, 6000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);

  // Infinite Slider Guard
  useEffect(() => {
    if (virtualIndex >= slides.length * 2) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setVirtualIndex(slides.length);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (virtualIndex < slides.length) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setVirtualIndex(virtualIndex + slides.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [virtualIndex, slides.length]);

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!transitionEnabled) return;
    setVirtualIndex((prev) => prev - 1);
    resetAutoplay();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (!transitionEnabled) return;
    setVirtualIndex((prev) => prev + 1);
    resetAutoplay();
  };

  const handleThumbClick = (index) => {
    if (!transitionEnabled) return;
    setVirtualIndex(index);
    resetAutoplay();
  };

  const renderBulletIcon = (iconName) => {
    switch (iconName) {
      case 'Calendar': return <Calendar size={14} />;
      case 'Clock': return <Clock size={14} />;
      case 'Code': return <Code size={14} />;
      case 'Award': return <Award size={14} />;
      case 'CheckCircle': return <CheckCircle size={14} />;
      case 'Users': return <Users size={14} />;
      case 'Building2': return <Building2 size={14} />;
      case 'Rocket': return <Rocket size={14} />;
      case 'Laptop': return <Laptop size={14} />;
      default: return <CheckCircle size={14} />;
    }
  };

  const renderCourseIcon = (iconName) => {
    switch (iconName) {
      case 'Cloud': return <Cloud size={32} />;
      case 'Infinity': return <Activity size={32} />;
      case 'Box': return <Layers size={32} />;
      case 'Settings': return <Settings size={32} />;
      case 'Layers': return <Layers size={32} />;
      case 'Activity': return <Activity size={32} />;
      case 'Terminal': return <Terminal size={32} />;
      case 'Code': return <Code size={32} />;
      case 'Brain': return <Laptop size={32} />;
      case 'Shield': return <Shield size={32} />;
      default: return <Cloud size={32} />;
    }
  };

  const activeSlide = slides[virtualIndex % slides.length];

  const filteredCourses = activeCategory === 'All Courses'
    ? coursesData.slice(0, 6)
    : coursesData.filter(course => course.category === activeCategory);

  return (
    <section className="hero-page-section">
      <div className="hero-slider-container">



        {/* Slide Frame */}
        <div className="slider-viewport">
          <div className="slider-track" style={{ transform: `translateX(-${(virtualIndex % slides.length) * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={slide.id} className={`slide-item ${slide.isFullImage ? 'full-image-slide' : ''}`}>
                {slide.isFullImage ? (
                  <div className="slide-full-image-container">
                    <img src={slide.fullImage} alt={slide.titleNormal} className="slide-full-banner-img" />
                  </div>
                ) : (
                  <div className="slide-content-grid">

                    {/* Left Text details */}
                    <div className="slide-info-pane">
                      <span className="slide-tag-badge">
                        <Award size={14} style={{ marginRight: '6px' }} />
                        {slide.tag}
                      </span>

                      <h1 className="slide-title">
                        {slide.titleNormal}
                        <span className="title-highlight">{slide.titleHighlight}</span>
                      </h1>

                      <p className="slide-desc">{slide.desc}</p>

                      <div className="slide-bullets">
                        {slide.bullets.map((bullet, bIdx) => (
                          <span key={bIdx} className="bullet-pill">
                            {renderBulletIcon(bullet.icon)}
                            {bullet.text}
                          </span>
                        ))}
                      </div>

                      <div className="slide-buttons">
                        <Link to={slide.btnPrimary.link} className="btn-primary">
                          <Rocket size={16} style={{ marginRight: '8px' }} />
                          {slide.btnPrimary.text}
                        </Link>
                        <Link to={slide.btnSecondary.link} className="btn-secondary">
                          <BookOpen size={16} style={{ marginRight: '8px' }} />
                          {slide.btnSecondary.text}
                        </Link>
                      </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="slide-graphics-pane">
                      {slide.illustration}
                    </div>

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicators */}
        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot-indicator ${idx === (virtualIndex % slides.length) ? 'active' : ''}`}
              onClick={() => handleThumbClick(idx + slides.length)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Marquee Section */}
      <div className="hero-marquee-container">
        <div className="marquee-track">
          <div className="marquee-content">
            Empowering Students & Professionals &bull; 100+ Corporate Partners &bull; 10K+ Students Trained &bull; Expert Led Courses &bull; Enroll Now! &bull; Welcome to Hemsethu Technologies - Leading IT Training Institute
          </div>
          <div className="marquee-content" aria-hidden="true">
            Empowering Students & Professionals &bull; 100+ Corporate Partners &bull; 10K+ Students Trained &bull; Expert Led Courses &bull; Enroll Now! &bull; Welcome to Hemsethu Technologies - Leading IT Training Institute
          </div>
        </div>
      </div>

      {/* Overlapping White Category Navigation Card */}
      <div className="overlapping-courses-card">
        {/* Courses Cards Grid */}
        <div className="courses-grid-display">
          {filteredCourses.map(course => (
            <div key={course.id} className={`course-card ${course.colorClass}`}>
              <div className="course-card-top">
                <span className="course-badge" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Flame size={14} /> {course.tag}
                </span>
                <div className="course-icon-bg">
                  {renderCourseIcon(course.icon)}
                </div>
              </div>
              <h3 className="course-card-title">{course.title}</h3>
              <span className="course-card-count">{course.coursesCount} Courses</span>
            </div>
          ))}
        </div>

        <div className="category-tabs-nav">
          {categoriesList.map((cat, idx) => (
            <button
              key={idx}
              className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom 4 Colored Stats Blocks */}
      <div className="bottom-stats-grid">
        <div className="new-stat-card theme-blue">
          <div className="stat-icon-wrapper">
            <Trophy size={28} />
          </div>
          <div className="stat-details">
            <h3>500+</h3>
            <p>Verified Project Titles</p>
          </div>
        </div>

        <div className="new-stat-card theme-green">
          <div className="stat-icon-wrapper">
            <Users size={28} />
          </div>
          <div className="stat-details">
            <h3>10K+</h3>
            <p>Students Trained & Placed</p>
          </div>
        </div>

        <div className="new-stat-card theme-purple">
          <div className="stat-icon-wrapper">
            <Building2 size={28} />
          </div>
          <div className="stat-details">
            <h3>100+</h3>
            <p>Corporate Partners</p>
          </div>
        </div>

        <div className="new-stat-card theme-orange">
          <div className="stat-icon-wrapper">
            <Award size={28} />
          </div>
          <div className="stat-details">
            <h3>5+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
