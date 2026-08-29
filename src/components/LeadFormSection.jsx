import React, { useState, useEffect } from 'react';
import {
  Compass,
  Award,
  Layout,
  Tv,
  PlaySquare,
  BookMarked,
  FileText,
  Hammer,
  Briefcase,
  TrendingUp,
  CheckCircle,
  X
} from 'lucide-react';
import './LeadFormSection.css';
import studentImg from '../assets/indian_student_standing.png';
import { submitToExcel } from '../utils/submitToExcel';

export default function LeadFormSection() {
  const [processedImg, setProcessedImg] = useState(studentImg);

  useEffect(() => {
    const img = new Image();
    img.src = studentImg;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const width = canvas.width;
      const height = canvas.height;
      
      const stack = [];
      const visited = new Uint8Array(width * height);
      
      // Push boundary pixels to stack (Top, Left, Right ONLY. Exclude bottom border to protect shoes/legs)
      for (let x = 0; x < width; x++) {
        stack.push(x, 0);
      }
      for (let y = 0; y < height; y++) {
        stack.push(0, y);
        stack.push(width - 1, y);
      }
      
      while (stack.length > 0) {
        const cy = stack.pop();
        const cx = stack.pop();
        if (cx === undefined || cy === undefined) continue;
        
        const idx = cy * width + cx;
        if (visited[idx]) continue;
        visited[idx] = 1;
        
        const p = idx * 4;
        const r = data[p];
        const g = data[p + 1];
        const b = data[p + 2];
        
        // Match near-white background and light grey shadow pixels
        const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
        const isBg = (r > 218 && g > 218 && b > 218) || (r > 185 && g > 185 && b > 185 && maxDiff < 10);
        
        if (isBg) {
          data[p + 3] = 0; // Make transparent
          
          if (cx > 0) stack.push(cx - 1, cy);
          if (cx < width - 1) stack.push(cx + 1, cy);
          if (cy > 0) stack.push(cx, cy - 1);
          if (cy < height - 1) stack.push(cx, cy + 1);
        }
      }
      
      ctx.putImageData(imgData, 0, 0);
      setProcessedImg(canvas.toDataURL('image/png'));
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    branch: '',
    otp: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validateForm = () => {
    if (formData.name.trim().length < 2) return "Name must be at least 2 characters long.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address.";
    if (formData.phone.length !== 10) return "Mobile number must be exactly 10 digits.";
    if (!formData.course) return "Please select a course.";
    if (!formData.branch) return "Please select a branch.";
    return "";
  };

  // Course Options list
  const coursesList = [
    'Fullstack Masterclass',
    'Advanced Python & Django',
    'UI/UX Design Bootcamp',
    'Frontend Web Development',
    'Cyber Security Essentials',
    'AWS Cloud Architect',
    'React Native for Mobile',
    'Data Science with Python'
  ];

  // Branch Options list
  const branchesList = [
    'B.Tech - CSE',
    'B.Tech - CSE (AI & ML)',
    'B.Tech - CSE (Data Science)',
    'B.Tech - IT',
    'B.Tech - ECE / EEE',
    'Degree - B.Sc (Computers)',
    'Degree - BCA',
    'Degree - B.Com (Computers)',
    'MCA / M.Tech',
    'Other'
  ];

  // Features list matching the image
  const features = [
    {
      title: 'Free',
      subtitle: 'Career Guidance',
      icon: <Compass size={24} />,
      color: '#ef4444' // Red
    },
    {
      title: 'IIT',
      subtitle: 'Approved Curriculum',
      icon: <Award size={24} />,
      color: '#06b6d4' // Teal
    },
    {
      title: 'Dedicated',
      subtitle: 'Student Dashboard',
      icon: <Layout size={24} />,
      color: '#f97316' // Orange
    },
    {
      title: 'Classroom',
      subtitle: '& Online Trainings',
      icon: <Tv size={24} />,
      color: '#ef4444' // Red
    },
    {
      title: 'Class',
      subtitle: 'Recordings',
      icon: <PlaySquare size={24} />,
      color: '#ef4444' // Red
    },
    {
      title: 'Course',
      subtitle: 'Materials',
      icon: <BookMarked size={24} />,
      color: '#3b82f6' // Blue
    },
    {
      title: 'Module',
      subtitle: 'Based Assessments',
      icon: <FileText size={24} />,
      color: '#3b82f6' // Blue
    },
    {
      title: 'Hands',
      subtitle: 'On Projects',
      icon: <Hammer size={24} />,
      color: '#3b82f6' // Blue
    },
    {
      title: 'Internship',
      subtitle: 'Opportunity',
      icon: <Briefcase size={24} />,
      color: '#3b82f6' // Blue
    },
    {
      title: '100%',
      subtitle: 'Job Assistance',
      icon: <TrendingUp size={24} />,
      color: '#0ea5e9' // Sky Blue
    },
    {
      title: 'Industry',
      subtitle: 'Expert Mentors',
      icon: <Compass size={24} />,
      color: '#06b6d4' // Teal
    },
    {
      title: 'Lifetime',
      subtitle: 'Alumni Support',
      icon: <CheckCircle size={24} />,
      color: '#10b981' // Green
    }
  ];

  // OTP Countdown timer
  useEffect(() => {
    let interval = null;
    if (otpSent && timer > 0 && !otpVerified) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer, otpVerified]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number first.');
      return;
    }
    setErrorMsg('');
    setOtpSent(true);
    setTimer(30);
    alert('SMS Demo: OTP code "1234" sent to ' + formData.phone);
  };

  const handleVerifyOtp = () => {
    if (formData.otp === '1234') {
      setOtpVerified(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid OTP. Please enter "1234" for the demo.');
    }
  };

  const handleResendOtp = () => {
    setTimer(30);
    alert('SMS Demo: New OTP code "1234" sent to ' + formData.phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setErrorMsg(error);
      return;
    }
    
    if (!otpVerified) {
      setErrorMsg('Please verify your mobile number with OTP first.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const success = await submitToExcel(formData, 'Lead Form');

    setIsSubmitting(false);
    
    if (success) {
      setIsSubmitted(true);
    } else {
      setErrorMsg('Failed to submit request. Please try again later.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      branch: '',
      otp: ''
    });
    setOtpSent(false);
    setOtpVerified(false);
    setIsSubmitted(false);
  };

  return (
    <section className="callback-section">
      <div className="callback-title-container">
        <h2 className="callback-title">
          Excel with <span className="highlight-brand">
            Hemsethu Technologies
            <svg className="orange-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12 C 100 18, 200 18, 295 10" stroke="var(--accent-orange)" strokeWidth="3" fill="transparent" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
      </div>

      <div className="callback-content-grid">
        {/* Left Side: Logo/Illustration */}
        <div className="logo-illustration-panel">
          <div className="graduation-logo-container">
            <img src={processedImg} alt="Indian student standing with laptop" className="graduation-logo-img" />
          </div>
        </div>

        {/* Center: 2-Column Features */}
        <div className="features-panel-column">
          <div className="features-two-columns">
            {/* Column 1 (Left 6 items) */}
            <div className="features-col">
              {features.slice(0, 6).map((item, index) => (
                <div key={index} className="feature-row-item">
                  <div className="feature-icon-box" style={{ color: 'var(--primary-dark)' }}>
                    {item.icon}
                  </div>
                  <div className="feature-teal-bar"></div>
                  <div className="feature-text-block">
                    <span className="feature-lbl-title" style={{ color: item.color }}>{item.title}</span>
                    <span className="feature-lbl-sub">{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 (Right 6 items) */}
            <div className="features-col">
              {features.slice(6, 12).map((item, index) => (
                <div key={index} className="feature-row-item">
                  <div className="feature-icon-box" style={{ color: 'var(--primary-dark)' }}>
                    {item.icon}
                  </div>
                  <div className="feature-teal-bar"></div>
                  <div className="feature-text-block">
                    <span className="feature-lbl-title" style={{ color: item.color }}>{item.title}</span>
                    <span className="feature-lbl-sub">{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Separator Line */}
        <div className="vertical-line-divider">
          <div className="divider-line">
            <div className="dot top"></div>
            <div className="dot bottom"></div>
          </div>
        </div>

        {/* Right Side: Request Call Back Form */}
        <div className="form-panel-container">
          <div className="form-outer-card">
            {isSubmitted ? (
              <div className="callback-success-message">
                <CheckCircle size={64} className="success-icon animate-scale" />
                <h3>Callback Requested!</h3>
                <p>Thank you, <strong>{formData.name}</strong>. Your request has been successfully submitted.</p>
                <p>One of our career consultants will call you back shortly on <strong>{formData.phone}</strong>.</p>
                <button className="btn-reset-form" onClick={resetForm}>
                  Request Another Callback
                </button>
              </div>
            ) : (
              <form className="callback-form-inner" onSubmit={handleSubmit}>
                <h3 className="form-header-title">Request Callback</h3>

                {errorMsg && <div className="form-error-banner" style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#ef4444', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '0.9rem' }}>{errorMsg}</div>}

                {/* Name Field */}
                <div className="form-input-group">
                  <label>Name <span className="req">*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email Field */}
                <div className="form-input-group">
                  <label>Email <span className="req">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Mobile Number & OTP */}
                <div className="form-input-group">
                  <label>Mobile Number <span className="req">*</span></label>
                  <div className="phone-otp-row">
                    <div className="phone-prefix-input">
                      <span className="prefix">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        disabled={otpVerified}
                        maxLength="10"
                        placeholder="Enter 10-digit mobile"
                        value={formData.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setFormData(prev => ({ ...prev, phone: val }));
                        }}
                      />
                    </div>
                    {!otpVerified && (
                      <button
                        type="button"
                        className={`btn-send-otp ${otpSent ? 'sent' : ''}`}
                        onClick={handleSendOtp}
                        disabled={formData.phone.length !== 10}
                      >
                        {otpSent ? 'Resend' : 'Send OTP'}
                      </button>
                    )}
                  </div>
                  {otpVerified && (
                    <div className="phone-verified-status">
                      <CheckCircle size={16} color="#10b981" /> Verified successfully
                    </div>
                  )}
                </div>

                {/* OTP Input Block */}
                {otpSent && !otpVerified && (
                  <div className="otp-verification-block animate-slide-down">
                    <label>Enter 4-Digit OTP <span className="req">*</span></label>
                    <div className="otp-input-row">
                      <input
                        type="text"
                        name="otp"
                        maxLength="4"
                        placeholder="Enter code (1234)"
                        value={formData.otp}
                        onChange={handleInputChange}
                      />
                      <button
                        type="button"
                        className="btn-verify-otp"
                        onClick={handleVerifyOtp}
                        disabled={formData.otp.length !== 4}
                      >
                        Verify
                      </button>
                    </div>
                    <div className="otp-timer-row">
                      {timer > 0 ? (
                        <span>Resend OTP in <strong>{timer}s</strong></span>
                      ) : (
                        <button type="button" className="btn-text-resend" onClick={handleResendOtp}>
                          Resend OTP
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Course Selection */}
                <div className="form-input-group">
                  <label>Course <span className="req">*</span></label>
                  <select
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a course</option>
                    {coursesList.map((course, idx) => (
                      <option key={idx} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                {/* Branch Selection */}
                <div className="form-input-group">
                  <label>Branch <span className="req">*</span></label>
                  <select
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Branch</option>
                    {branchesList.map((branch, idx) => (
                      <option key={idx} value={branch}>{branch}</option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-submit-callback"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Requesting...' : 'Request Call Back'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
