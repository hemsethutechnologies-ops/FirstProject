import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, MessageCircle, Share2, Video, Send } from 'lucide-react';
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
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="logo-area">
            <img src={logoImg} alt="Hemsethu Logo" className="logo-image-footer" />
          </div>
          <p className="brand-desc">
            A project innovation hub where a better future starts. Search any project title, learn, build, innovate, and succeed.
          </p>
          <div className="social-links">
            <a href="#"><Globe size={20} /></a>
            <a href="#"><MessageCircle size={20} /></a>
            <a href="#"><Share2 size={20} /></a>
            <a href="#"><Video size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/internships">Internships</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="newsletter-input" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              required
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit"><Send size={18} /></button>
          </form>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hemsethu Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
