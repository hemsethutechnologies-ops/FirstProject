import React, { useState } from 'react';
import './PageStyles.css';
import './Contact.css';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

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
      <div className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-orange) 100%)'}}>
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="page-content-wrap contact-container">
        <div className="contact-info-panel">
          <h2>Get in Touch</h2>
          <p className="contact-desc">Fill out the form or reach out directly via phone or email.</p>
          
          <div className="info-blocks">
            <div className="info-block">
              <div className="info-icon"><Phone color="var(--accent-orange)" /></div>
              <div>
                <h3>Phone</h3>
                <p>+91 8555 8879 86</p>
              </div>
            </div>
            
            <div className="info-block">
              <div className="info-icon"><Mail color="var(--accent-teal)" /></div>
              <div>
                <h3>Email</h3>
                <p>hemsethutechnologies@gmail.com</p>
              </div>
            </div>
            
            <div className="info-block">
              <div className="info-icon"><MapPin color="var(--accent-green)" /></div>
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
