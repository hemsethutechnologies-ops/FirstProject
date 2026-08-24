import React, { useState } from 'react';
import SEO from '../components/SEO';
import './PageStyles.css';
import './Contact.css';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import contactHeroImg from '../assets/contact_hero.jpg';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been sent successfully. A representative from Hemsethu Technologies will contact you at ${email} within 24 hours.`);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <main className="page-wrapper">
      <SEO
        title="Contact Us"
        description="Get in touch with Hemsethu Technologies in Hyderabad. Reach us by phone, email, or visit our office in Hyderabad or Secunderabad for project enquiries, course enrolments, or internships."
        canonical="/contact"
        keywords={['contact Hemsethu Technologies', 'IT training enquiry Hyderabad', 'academic project enquiry']}
      />
      <div className="page-header contact-hero-header" style={{
        background: '#f8fafc',
        padding: '50px 5% 20px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        position: 'relative',
        overflow: 'hidden',
        flexWrap: 'wrap',
        textAlign: 'left'
      }}>
        {/* Subtle Grid Background */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.5,
          zIndex: 0
        }} />

        <div style={{ flex: '1 1 500px', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <div style={{ width: '30px', height: '2px', background: '#e11d48' }}></div>
            <span style={{ color: '#e11d48', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
              We're Here For You
            </span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '850', color: '#0f172a', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
            <span style={{ color: '#0369a1' }}>Contact</span> Us
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: '1.6', maxWidth: '600px', marginBottom: '0' }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Right Image/Illustration */}
        <div style={{ flex: '1 1 400px', zIndex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <img 
            src={contactHeroImg} 
            alt="Contact Hero Illustration" 
            style={{ 
              width: '100%', 
              maxWidth: '550px',
              height: '350px',
              objectFit: 'cover',
              objectPosition: 'center',
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 75%)',
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 75%)'
            }} 
          />
        </div>
      </div>


      <div className="page-content-wrap contact-container">
        <div className="contact-info-panel">
          <h2>Get in Touch</h2>
          <p className="contact-desc">Fill out the form or reach out directly via phone or email.</p>
          
          <div className="info-blocks">
            <div className="info-block">
              <div className="info-icon"><Phone color="#e11d48" /></div>
              <div>
                <h3>Phone</h3>
                <p>+91 9391925913</p>
              </div>
            </div>
            
            <div className="info-block">
              <div className="info-icon"><Mail color="#0369a1" /></div>
              <div>
                <h3>Email</h3>
                <p>hemsethutechnologies@gmail.com</p>
              </div>
            </div>
            
            <div className="info-block">
              <div className="info-icon"><MapPin color="#e11d48" /></div>
              <div>
                <h3>Location</h3>
                <p>Hyderabad & Secunderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                required
                placeholder="How can we help?" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows="5" 
                required
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
