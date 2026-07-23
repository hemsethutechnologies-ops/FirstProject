import React from 'react';
import { Phone, Mail, MapPin, ShoppingCart, LogIn, Code } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    navigate('/contact');
  };

  const handleLoginClick = () => {
    alert("Sign-in Portal: Under maintenance. Registration & login functionality will be available soon.");
  };

  return (
    <header className="header-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <div className="info-item">
              <Phone size={16} />
              <div className="info-text">
                <span className="label">Contact support</span>
                <span className="value">+91 8555 8879 86</span>
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
            <img src={logoImg} alt="Hemsethu Logo" className="logo-image" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li className="dropdown">
              <NavLink to="/about">About <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/about/story">Our Story</NavLink></li>
                <li><NavLink to="/about/mission">Mission & Vision</NavLink></li>
                <li><NavLink to="/about/team">Our Team</NavLink></li>
                <li><NavLink to="/about/partners">Partners & Affiliates</NavLink></li>
                <li><NavLink to="/about/careers">Careers</NavLink></li>
                <li><NavLink to="/about/faq">FAQ</NavLink></li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/projects">Projects <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/projects/ieee">IEEE Projects</NavLink></li>
                <li><NavLink to="/projects/python">Python Projects</NavLink></li>
                <li><NavLink to="/projects/django">Python Django Web Projects</NavLink></li>
                <li><NavLink to="/projects/ml">Machine Learning Projects</NavLink></li>
                <li><NavLink to="/projects/data-science">Data Science Projects</NavLink></li>
                <li><NavLink to="/projects/ai">Artificial Intelligence Projects</NavLink></li>
                <li><NavLink to="/projects/android">Android Projects</NavLink></li>
                <li><NavLink to="/projects/java">Java Projects</NavLink></li>
                <li><NavLink to="/projects/dotnet">.NET Projects</NavLink></li>
                <li><NavLink to="/projects/all">All Domains</NavLink></li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/courses">Courses <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/courses/frontend">Frontend Development</NavLink></li>
                <li><NavLink to="/courses/backend">Backend Development</NavLink></li>
                <li><NavLink to="/courses/fullstack">Fullstack Masterclass</NavLink></li>
                <li><NavLink to="/courses/ui-ux">UI/UX Design</NavLink></li>
                <li><NavLink to="/courses/devops">DevOps & Cloud</NavLink></li>
                <li><NavLink to="/courses/cybersecurity">Cyber Security</NavLink></li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/services">Services <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <NavLink to="/services/academic-projects" className="submenu-toggle">Academic Projects <span className="caret-right">›</span></NavLink>
                  <ul className="sub-menu">
                    <li><NavLink to="/services/academic-projects/be-btech">B.E/B.Tech Projects</NavLink></li>
                    <li><NavLink to="/services/academic-projects/me-mtech">M.E/M.Tech Projects</NavLink></li>
                    <li><NavLink to="/services/academic-projects/mca-msc">MCA/MSc Projects</NavLink></li>
                    <li><NavLink to="/services/academic-projects/diploma">Diploma Projects</NavLink></li>
                    <li><NavLink to="/services/academic-projects/degree">Degree Projects</NavLink></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <NavLink to="/services/software-services" className="submenu-toggle">Software Services <span className="caret-right">›</span></NavLink>
                  <ul className="sub-menu">
                    <li><NavLink to="/services/software-services/web">Web Application Development</NavLink></li>
                    <li><NavLink to="/services/software-services/mobile">Mobile App Development</NavLink></li>
                    <li><NavLink to="/services/software-services/digital-marketing">Digital Marketing</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/services/workshops">Workshops</NavLink></li>
                <li><NavLink to="/services/paper-publication">Paper Publication</NavLink></li>
                <li><NavLink to="/services/plagiarism-check">Plagiarism Check</NavLink></li>
                <li><NavLink to="/services/paper-writing">Paper Writing</NavLink></li>
                <li><NavLink to="/services/corporate-training">Corporate Training</NavLink></li>
                <li><NavLink to="/services/online-training">Online Training</NavLink></li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/internships">Internships <span className="caret">▾</span></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/internships/summer">Summer Internship Program</NavLink></li>
                <li><NavLink to="/internships/winter">Winter Internship Program</NavLink></li>
                <li><NavLink to="/internships/remote">Remote Internships</NavLink></li>
                <li><NavLink to="/internships/pre-placement">Pre-Placement Offers</NavLink></li>
                <li><NavLink to="/internships/bootcamps">Intensive Bootcamps</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="cart-icon">
            <ShoppingCart size={24} />
            <span className="cart-badge">0</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
