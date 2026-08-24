import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, MessageCircle, Share2, Video, Send, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Thank you! You have successfully subscribed to the Hemsethu Technologies newsletter with ${email}.`);
    setEmail('');
  };

  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="logo-area">
            <img src={logoImg} alt="Hemsethu Logo" className="logo-image-footer" />
          </div>
          <p className="brand-desc">
            A project innovation hub where a better future starts. Search any project title, learn, build, innovate, and succeed.
          </p>
          <div className="contact-info-list">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Hyderabad, Telangana, India</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span>+91 93919 25913</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span>info@hemsethu.in</span>
            </div>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><NavLink to="/"><ChevronRight size={14}/> Home</NavLink></li>
              <li><NavLink to="/about"><ChevronRight size={14}/> About Us</NavLink></li>
              <li><NavLink to="/courses"><ChevronRight size={14}/> Courses</NavLink></li>
              <li><NavLink to="/projects"><ChevronRight size={14}/> Projects</NavLink></li>
              <li><NavLink to="/internships"><ChevronRight size={14}/> Internships</NavLink></li>
              <li><NavLink to="/contact"><ChevronRight size={14}/> Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><NavLink to="/projects/ieee"><ChevronRight size={14}/> IEEE Projects</NavLink></li>
              <li><NavLink to="/projects/python"><ChevronRight size={14}/> Python Projects</NavLink></li>
              <li><NavLink to="/courses/fullstack"><ChevronRight size={14}/> Full Stack Training</NavLink></li>
              <li><NavLink to="/services"><ChevronRight size={14}/> Software Services</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates, courses, and project ideas.</p>
          <form className="newsletter-input" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              required
              placeholder="Email address..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe"><Send size={18} /></button>
          </form>
          <div className="social-links">
            <a href="#" aria-label="Website"><Globe size={18} /></a>
            <a href="#" aria-label="Whatsapp"><MessageCircle size={18} /></a>
            <a href="#" aria-label="Social Media"><Share2 size={18} /></a>
            <a href="#" aria-label="YouTube"><Video size={18} /></a>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Hemsethu Technologies. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
