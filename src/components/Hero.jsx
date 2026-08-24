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
  Flame,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ban1 from '../assets/ban-1.png';
import ban2 from '../assets/ban-2.png';
import ban3 from '../assets/ban-3.png';
import ban4 from '../assets/ban-4.png';
import ban5 from '../assets/ban-5.png';
import studentLeft from '../assets/new_hero_student_left.png';
import studentRight from '../assets/new_hero_student_right.png';
import './Hero.css';

export default function Hero() {
  const [virtualIndex, setVirtualIndex] = useState(4); // Start copy index
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Web Development');
  const autoplayTimerRef = useRef(null);

  const slides = [
    { id: 5, isFullImage: true, fullImage: ban1, titleNormal: 'Banner 1' },
    { id: 6, isFullImage: true, fullImage: ban2, titleNormal: 'Banner 2' },
    { id: 7, isFullImage: true, fullImage: ban3, titleNormal: 'Banner 3' },
    { id: 8, isFullImage: true, fullImage: ban4, titleNormal: 'Banner 4' },
    { id: 9, isFullImage: true, fullImage: ban5, titleNormal: 'Banner 5' }
  ];

  const categoriesList = [
    'All Courses',
    'Web Development',
    'AWS & DevOps',
    'Data Science',
    'Artificial Intelligence',
    'Cyber Security'
  ];

  const coursesData = [
    {
      id: 1,
      category: 'Web Development',
      title: 'Full Stack MERN Developer',
      coursesCount: 24,
      tag: 'Popular',
      colorClass: 'course-blue',
      icon: 'Code'
    },
    {
      id: 2,
      category: 'Web Development',
      title: 'Frontend ReactJS Mastery',
      coursesCount: 16,
      tag: 'Hot',
      colorClass: 'course-teal',
      icon: 'Layers'
    },
    {
      id: 3,
      category: 'Web Development',
      title: 'Backend Node.js & Express',
      coursesCount: 12,
      tag: 'Popular',
      colorClass: 'course-purple',
      icon: 'Terminal'
    },
    {
      id: 4,
      category: 'AWS & DevOps',
      title: 'DevOps with AWS',
      coursesCount: 18,
      tag: 'Popular',
      colorClass: 'course-orange',
      icon: 'Cloud'
    },
    {
      id: 5,
      category: 'Cyber Security',
      title: 'Level 1 Ethical Hacking',
      coursesCount: 8,
      tag: 'Hot',
      colorClass: 'course-pink',
      icon: 'Shield'
    },
    {
      id: 6,
      category: 'Data Science',
      title: 'Python with Data Science',
      coursesCount: 20,
      tag: 'Popular',
      colorClass: 'course-green',
      icon: 'Activity'
    },
    {
      id: 7,
      category: 'Artificial Intelligence',
      title: 'AI & Machine Learning',
      coursesCount: 15,
      tag: 'New',
      colorClass: 'course-purple',
      icon: 'Brain'
    },
    {
      id: 8,
      category: 'Artificial Intelligence',
      title: 'Deep Learning with PyTorch',
      coursesCount: 10,
      tag: 'Advanced',
      colorClass: 'course-blue',
      icon: 'Settings'
    },
    {
      id: 9,
      category: 'Web Development',
      title: 'Next.js Enterprise Apps',
      coursesCount: 15,
      tag: 'Hot',
      colorClass: 'course-purple',
      icon: 'Cloud'
    },
    {
      id: 10,
      category: 'Web Development',
      title: 'MongoDB Data Architecture',
      coursesCount: 11,
      tag: 'Popular',
      colorClass: 'course-green',
      icon: 'Database'
    },
    {
      id: 11,
      category: 'Web Development',
      title: 'SQL & Relational Databases',
      coursesCount: 18,
      tag: 'Popular',
      colorClass: 'course-blue',
      icon: 'Database'
    },
    {
      id: 12,
      category: 'Web Development',
      title: 'Django Python Backend',
      coursesCount: 22,
      tag: 'Hot',
      colorClass: 'course-orange',
      icon: 'Terminal'
    },
    {
      id: 13,
      category: 'Web Development',
      title: 'Java Full Stack Developer',
      coursesCount: 25,
      tag: 'Popular',
      colorClass: 'course-pink',
      icon: 'Box'
    },
    {
      id: 14,
      category: 'Web Development',
      title: 'Angular Frontend Mastery',
      coursesCount: 14,
      tag: 'Popular',
      colorClass: 'course-teal',
      icon: 'Layers'
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
      case 'Database': return <Database size={32} />;
      default: return <Cloud size={32} />;
    }
  };

  const activeSlide = slides[virtualIndex % slides.length];

  const filteredCourses = activeCategory === 'All Courses'
    ? coursesData.slice(0, 8)
    : coursesData.filter(course => course.category === activeCategory);

  return (
    <section className="corp-hero-wrapper">
      {/* 1. The Corporate Search Header */}
      <div className="corp-hero-header">
        {/* Decorative Students */}
        <img src={studentLeft} alt="Student learning" className="hero-decor-student hero-decor-left" />
        <img src={studentRight} alt="Student standing" className="hero-decor-student hero-decor-right" />

        <div className="corp-hero-header-content">
          <h1 className="corp-hero-title">
            Transform Your <span className="title-highlight">Future in Tech</span>
          </h1>
          <p className="corp-hero-subtitle">
            Join HemSethu Technologies to master highly demanded skills, build real-world projects, and guarantee your career success.
          </p>

          <div className="corp-hero-search">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="What do you want to learn today? (e.g. AWS, React, Python)" />
            <button className="search-btn">Explore</button>
          </div>
        </div>
      </div>

      {/* 2. The Promotional Peek-a-boo Slider */}
      <div className="corp-hero-showcase">
        <div className="showcase-slider-viewport">
          <div className="showcase-slider-track" style={{ transform: `translateX(-${(virtualIndex % slides.length) * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="showcase-slide-item">
                <img src={slide.fullImage} alt={slide.titleNormal} className="showcase-banner-img" />
              </div>
            ))}
          </div>
        </div>

        <button className="showcase-arrow arrow-left" onClick={handlePrev} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button className="showcase-arrow arrow-right" onClick={handleNext} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>

        <div className="showcase-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`showcase-dot ${idx === (virtualIndex % slides.length) ? 'active' : ''}`}
              onClick={() => handleThumbClick(idx + slides.length)}
            />
          ))}
        </div>
      </div>

      {/* 3. The Courses Hub Grid */}
      <div className="corp-hero-courses">
        <div className="category-tabs-modern">
          {categoriesList.map((cat, idx) => (
            <button
              key={idx}
              className={`modern-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="modern-courses-grid">
          {filteredCourses.map(course => (
            <Link to="/courses" key={course.id} className={`modern-course-card ${course.colorClass}`}>
              <div className="modern-card-icon">
                {renderCourseIcon(course.icon)}
              </div>
              <div className="modern-card-info">
                <span className="modern-card-tag"><Flame size={12} style={{ marginRight: '4px' }} /> {course.tag}</span>
                <h3>{course.title}</h3>
                <p>{course.coursesCount} Programs</p>
              </div>
              <div className="modern-card-arrow">
                <ChevronRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
