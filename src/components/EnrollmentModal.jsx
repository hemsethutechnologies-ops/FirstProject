import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import './EnrollmentModal.css';

export default function EnrollmentModal({ course, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
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
            
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required placeholder="Enter your full name" />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="you@example.com" />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" required placeholder="+91 XXXXX XXXXX" />
              </div>
              
              <div className="form-group">
                <label>Preferred Batch</label>
                <select required>
                  <option value="">Select a timing...</option>
                  <option value="morning">Morning (8 AM - 10 AM)</option>
                  <option value="evening">Evening (6 PM - 8 PM)</option>
                  <option value="weekend">Weekend Intensive</option>
                </select>
              </div>
              
              <div className="modal-footer">
                <div className="modal-price">Total: <span>{course.price}</span></div>
                <button type="submit" className="btn-modal-primary">Confirm Enrollment</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
