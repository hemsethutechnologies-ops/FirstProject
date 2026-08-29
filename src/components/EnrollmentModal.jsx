import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { submitToExcel } from '../utils/submitToExcel';
import './EnrollmentModal.css';

export default function EnrollmentModal({ course, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validateData = (data) => {
    if (!data.name || data.name.trim().length < 2) return "Name must be at least 2 characters long.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Please enter a valid email address.";
    const phone = data.phone.replace(/\D/g, '');
    if (phone.length !== 10) return "Mobile number must be exactly 10 digits.";
    if (!data.batch) return "Please select a preferred batch.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.courseTitle = course.title;

    const error = validateData(data);
    if (error) {
      setErrorMsg(error);
      return;
    }
    
    setErrorMsg('');
    setIsSubmitting(true);

    const success = await submitToExcel(data, 'Enrollment Form');
    
    setIsSubmitting(false);
    
    if (success) {
      setSubmitted(true);
    } else {
      alert('Failed to submit enrollment. Please try again later.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        
        {submitted ? (
          <div className="modal-success">
            <CheckCircle size={64} color="var(--accent-green)" />
            <h2>Enrollment Successful!</h2>
            <p>Thank you for enrolling in <strong>{course.title}</strong>.</p>
            <p>Our team will contact you shortly with the next steps and payment details.</p>
            <button className="btn-modal-primary mt-20" onClick={onClose}>Close Window</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Enroll in Course</h2>
              <p>{course.title}</p>
            </div>
            
            {errorMsg && <div style={{ color: '#ef4444', background: '#fef2f2', padding: '10px', borderRadius: '6px', marginBottom: '15px', border: '1px solid #fca5a5', fontSize: '0.9rem' }}>{errorMsg}</div>}
            
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" required placeholder="Enter your full name" />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" required placeholder="you@example.com" />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" />
              </div>
              
              <div className="form-group">
                <label>Preferred Batch</label>
                <select name="batch" required>
                  <option value="">Select a timing...</option>
                  <option value="morning">Morning (8 AM - 10 AM)</option>
                  <option value="evening">Evening (6 PM - 8 PM)</option>
                  <option value="weekend">Weekend Intensive</option>
                </select>
              </div>
              
              <div className="modal-footer">
                <div className="modal-price">Total: <span>{course.price}</span></div>
                <button type="submit" className="btn-modal-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Enrolling...' : 'Confirm Enrollment'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
