import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, LogIn, Code, Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down (past 100px), show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestClick = () => {
    navigate('/contact');
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <header className={`header-container ${isVisible ? '' : 'header-hidden'}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <div className="info-item">
              <Phone size={16} />
              <div className="info-text">
                <span className="label">Contact support</span>
                <span className="value">+91 9391925913</span>
              </div>
            </div>
            <div className="info-item">
              <Mail size={16} />
              <div className="info-text">
                <span className="label">Contact email</span>
                <span className="value">hemsethutechnologies@gmail.com</span>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={16} />
              <div className="info-text">
                <span className="label">Our location</span>
                <span className="value">Hyderabad & Secunderabad</span>
              </div>
            </div>
          </div>
          <div className="top-actions">
            <button className="btn-request" onClick={handleRequestClick}>
              <Code size={16} />
              Request Project
            </button>
            <button className="btn-login" onClick={handleLoginClick}>
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-content">
          <div className="logo-area">
            <NavLink to="/">
              <img src={logoImg} alt="Hemsethu Logo" className="logo-image" />
            </NavLink>
          </div>

          <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
            <li className="dropdown">
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/about/story" onClick={() => setIsMobileMenuOpen(false)}>Our Story</NavLink></li>
                <li><NavLink to="/about/mission" onClick={() => setIsMobileMenuOpen(false)}>Mission & Vision</NavLink></li>
                <li><NavLink to="/about/team" onClick={() => setIsMobileMenuOpen(false)}>Our Team</NavLink></li>
                <li><NavLink to="/about/partners" onClick={() => setIsMobileMenuOpen(false)}>Partners & Affiliates</NavLink></li>
                <li><NavLink to="/about/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</NavLink></li>
                <li><NavLink to="/about/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</NavLink></li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/projects/ieee" onClick={() => setIsMobileMenuOpen(false)}>IEEE Projects</NavLink></li>
                <li><NavLink to="/projects/python" onClick={() => setIsMobileMenuOpen(false)}>Python Projects</NavLink></li>
                <li><NavLink to="/projects/django" onClick={() => setIsMobileMenuOpen(false)}>Python Django Web Projects</NavLink></li>
                <li><NavLink to="/projects/ml" onClick={() => setIsMobileMenuOpen(false)}>Machine Learning Projects</NavLink></li>
                <li><NavLink to="/projects/data-science" onClick={() => setIsMobileMenuOpen(false)}>Data Science Projects</NavLink></li>
                <li><NavLink to="/projects/ai" onClick={() => setIsMobileMenuOpen(false)}>Artificial Intelligence Projects</NavLink></li>
                <li><NavLink to="/projects/android" onClick={() => setIsMobileMenuOpen(false)}>Android Projects</NavLink></li>
                <li><NavLink to="/projects/java" onClick={() => setIsMobileMenuOpen(false)}>Java Projects</NavLink></li>
                <li><NavLink to="/projects/dotnet" onClick={() => setIsMobileMenuOpen(false)}>.NET Projects</NavLink></li>
                <li><NavLink to="/projects/all" onClick={() => setIsMobileMenuOpen(false)}>All Domains</NavLink></li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/courses/frontend" onClick={() => setIsMobileMenuOpen(false)}>Frontend Development</NavLink></li>
                <li><NavLink to="/courses/backend" onClick={() => setIsMobileMenuOpen(false)}>Backend Development</NavLink></li>
                <li><NavLink to="/courses/fullstack" onClick={() => setIsMobileMenuOpen(false)}>Fullstack Masterclass</NavLink></li>
                <li><NavLink to="/courses/data-science-ai" onClick={() => setIsMobileMenuOpen(false)}>Data Science & AI</NavLink></li>
                <li><NavLink to="/courses/devops" onClick={() => setIsMobileMenuOpen(false)}>DevOps & Cloud</NavLink></li>
                <li><NavLink to="/courses/cybersecurity" onClick={() => setIsMobileMenuOpen(false)}>Cyber Security</NavLink></li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <NavLink to="/services/academic-projects" className="submenu-toggle" onClick={() => setIsMobileMenuOpen(false)}>Academic Projects <span className="caret-right">›</span></NavLink>
                  <ul className="sub-menu">
                    <li><NavLink to="/services/academic-projects/be-btech" onClick={() => setIsMobileMenuOpen(false)}>B.E/B.Tech Projects</NavLink></li>
                    <li><NavLink to="/services/academic-projects/me-mtech" onClick={() => setIsMobileMenuOpen(false)}>M.E/M.Tech Projects</NavLink></li>
                    <li><NavLink to="/services/academic-projects/mca-msc" onClick={() => setIsMobileMenuOpen(false)}>MCA/MSc Projects</NavLink></li>
                    <li><NavLink to="/services/academic-projects/diploma" onClick={() => setIsMobileMenuOpen(false)}>Diploma Projects</NavLink></li>
                    <li><NavLink to="/services/academic-projects/degree" onClick={() => setIsMobileMenuOpen(false)}>Degree Projects</NavLink></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <NavLink to="/services/software-services" className="submenu-toggle" onClick={() => setIsMobileMenuOpen(false)}>Software Services <span className="caret-right">›</span></NavLink>
                  <ul className="sub-menu">
                    <li><NavLink to="/services/software-services/web" onClick={() => setIsMobileMenuOpen(false)}>Web Application Development</NavLink></li>
                    <li><NavLink to="/services/software-services/mobile" onClick={() => setIsMobileMenuOpen(false)}>Mobile App Development</NavLink></li>
                    <li><NavLink to="/services/software-services/digital-marketing" onClick={() => setIsMobileMenuOpen(false)}>Digital Marketing</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/services/workshops" onClick={() => setIsMobileMenuOpen(false)}>Workshops</NavLink></li>
                <li><NavLink to="/services/paper-publication" onClick={() => setIsMobileMenuOpen(false)}>Paper Publication</NavLink></li>
                <li><NavLink to="/services/plagiarism-check" onClick={() => setIsMobileMenuOpen(false)}>Plagiarism Check</NavLink></li>
                <li><NavLink to="/services/paper-writing" onClick={() => setIsMobileMenuOpen(false)}>Paper Writing</NavLink></li>
                <li><NavLink to="/services/corporate-training" onClick={() => setIsMobileMenuOpen(false)}>Corporate Training</NavLink></li>
                <li><NavLink to="/services/online-training" onClick={() => setIsMobileMenuOpen(false)}>Online Training</NavLink></li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/internships" onClick={() => setIsMobileMenuOpen(false)}>Internships <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/internships/summer" onClick={() => setIsMobileMenuOpen(false)}>Summer Internship Program</NavLink></li>
                <li><NavLink to="/internships/winter" onClick={() => setIsMobileMenuOpen(false)}>Winter Internship Program</NavLink></li>
                <li><NavLink to="/internships/remote" onClick={() => setIsMobileMenuOpen(false)}>Remote Internships</NavLink></li>
                <li><NavLink to="/internships/pre-placement" onClick={() => setIsMobileMenuOpen(false)}>Pre-Placement Offers</NavLink></li>
                <li><NavLink to="/internships/bootcamps" onClick={() => setIsMobileMenuOpen(false)}>Intensive Bootcamps</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQs</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
      {/* Login Maintenance Modal */}
      {isLoginModalOpen && (
        <div className="login-modal-overlay">
          <div className="login-modal-content">
            <div className="login-modal-header">
              <h3>Notice</h3>
              <button className="close-modal-btn" onClick={() => setIsLoginModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="login-modal-body">
              <p>Sign-in Portal: Under maintenance. Registration & login functionality will be available soon.</p>
            </div>
            <div className="login-modal-footer">
              <button className="modal-ok-btn" onClick={() => setIsLoginModalOpen(false)}>OK</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
