import React, { useState, useEffect } from 'react';
import { submitToExcel } from '../utils/submitToExcel';
import { 
  CheckCircle, ArrowRight, User, Mail, Phone, 
  MapPin, Building2, GraduationCap, Code, ShieldCheck, Star, Briefcase
} from 'lucide-react';
import logoImg from '../assets/logo.png';
import './ApplicationForm.css';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    city: '',
    type: 'internship',
    year: '1st-3rd',
    duration: '',
    domain: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setFormData(prev => ({ ...prev, duration: '' }));
  }, [formData.type, formData.year]);

  const durationOptions = {
    internship: {
      'final': [
        { value: '1_month', title: '1 Month', price: 'Free', desc: 'No training, purely internship' },
        { value: '45_days', title: '45 Days', price: '₹700', desc: 'Project + training' },
        { value: '2_months', title: '2 Months', price: '₹1500', desc: 'Training + Real-time project + Stipend for best intern' },
        { value: '4_months', title: '4 Months', price: '₹2500', desc: 'Project, training, stipend-based' },
        { value: '6_months', title: '6 Months', price: '₹3500', desc: 'Project, training, stipend-based' }
      ],
      '1st-3rd': [
        { value: '1_month', title: '1 Month', price: '₹300', desc: 'Training + mini project' },
        { value: '2_months', title: '2 Months', price: '₹500', desc: 'Training + project' },
        { value: '45_days', title: '45 Days', price: '₹800', desc: 'Project + training' },
        { value: '4_months', title: '4 Months', price: '₹2000', desc: 'Project, training, stipend-based' },
        { value: '6_months', title: '6 Months', price: '₹3000', desc: 'Project, training, stipend-based' }
      ]
    },
    training: [
      { value: '1_month', title: '1 Month Courses', price: '₹1500', desc: 'Intensive course training' },
      { value: '2_months', title: '2 Months Courses', price: '₹2500', desc: 'Advanced course training' },
      { value: '6_months', title: '6 Months Courses', price: '₹4000', desc: 'Training with hands-on & real-time project. Best trainee gets job opp or stipend.' }
    ]
  };

  const domainsList = [
    'MEAN Stack',
    'MERN Stack',
    'Java Full Stack',
    'Python Full Stack',
    'AI and ML',
    'Python with Data Science',
    'Mobile Application Development (Flutter)'
  ];

  const currentDurationOptions = formData.type === 'internship' 
    ? durationOptions.internship[formData.year] 
    : durationOptions.training;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (formData.name.trim().length < 2) return "Name must be at least 2 characters long.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address.";
    
    const phone = formData.phone.replace(/\D/g, '');
    if (phone.length !== 10) return "Mobile number must be exactly 10 digits.";
    
    if (formData.college.trim().length < 2) return "Please enter your college name.";
    if (formData.degree.trim().length < 2) return "Please enter your degree or branch.";
    if (formData.city.trim().length < 2) return "Please enter your city.";

    if (!formData.duration) return "Please select a duration/program type.";
    if (!formData.domain) return "Please select a technology domain.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setErrorMsg(error);
      return;
    }
    
    setErrorMsg('');
    setIsSubmitting(true);
    
    const selectedDurationObj = currentDurationOptions.find(opt => opt.value === formData.duration);
    
    const dataToSubmit = {
      ...formData,
      programName: selectedDurationObj?.title || '',
      price: selectedDurationObj?.price || ''
    };

    const success = await submitToExcel(dataToSubmit, 'Application Form');
    
    setIsSubmitting(false);
    
    if (success) {
      setIsSubmitted(true);
    } else {
      setErrorMsg('Failed to submit application. Please try again later.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '', email: '', phone: '', college: '', degree: '', city: '',
      type: 'internship', year: '1st-3rd', duration: '', domain: ''
    });
    setIsSubmitted(false);
  };

  return (
    <main className="application-page">
      
      {/* LEFT PANEL: BRANDING */}
      <div className="app-left-panel">
        <img src={logoImg} alt="Hemsethu Logo" className="app-brand-logo" />
        
        <div className="app-brand-content">
          <h1>Accelerate Your Tech Career</h1>
          <p>Join Hemsethu's industry-leading Training and Internship tracks. Build real-world expertise, work on live projects, and unlock exclusive career opportunities.</p>
        </div>

        <div className="app-brand-features">
          <div className="brand-feature">
            <div className="brand-feature-icon"><Briefcase size={20} /></div>
            <span>Live Project Implementation</span>
          </div>
          <div className="brand-feature">
            <div className="brand-feature-icon"><Star size={20} /></div>
            <span>Performance-Based Stipends</span>
          </div>
          <div className="brand-feature">
            <div className="brand-feature-icon"><ShieldCheck size={20} /></div>
            <span>Industry-Recognized Certification</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: FORM */}
      <div className="app-right-panel">
        {isSubmitted ? (
          <div className="success-container fade-in">
            <CheckCircle size={80} color="#0ea5e9" />
            <h2>Application Submitted Successfully!</h2>
            <p>Thank you, <strong>{formData.name}</strong>. We have officially received your application for the <strong>{formData.domain}</strong> {formData.type}.</p>
            <p>Our academic coordinators at Hemsethu Technologies will review your profile and contact you shortly.</p>
            <button className="btn-apply-submit" style={{ maxWidth: '300px', marginTop: '30px' }} onClick={resetForm}>
              Submit Another Application
            </button>
          </div>
        ) : (
          <div className="fade-in">
            <div className="app-form-header">
              <h2>Application Portal</h2>
              <p>Please provide your details below to secure your spot.</p>
            </div>

            {errorMsg && (
              <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#ef4444', padding: '15px', borderRadius: '8px', marginBottom: '30px', fontSize: '0.95rem' }}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              
              {/* SECTION: PERSONAL DETAILS */}
              <div className="form-section">
                <h3>Applicant Information</h3>
                
                <div className="form-row">
                  <div className="form-col">
                    <label className="app-label">Full Name *</label>
                    <div className="input-with-icon">
                      <User size={18} className="input-icon" />
                      <input type="text" name="name" className="app-input" required minLength="2" placeholder="Enter your official full name" value={formData.name} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="form-col">
                    <label className="app-label">Email Address *</label>
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon" />
                      <input type="email" name="email" className="app-input" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" title="Please enter a valid email address" placeholder="e.g., you@example.com" value={formData.email} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col">
                    <label className="app-label">Mobile Number *</label>
                    <div className="input-with-icon">
                      <Phone size={18} className="input-icon" />
                      <input type="tel" name="phone" className="app-input" required maxLength="10" minLength="10" pattern="\d{10}" title="Please enter exactly 10 digits" placeholder="Primary contact number" value={formData.phone} 
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setFormData(prev => ({ ...prev, phone: val }));
                        }} 
                      />
                    </div>
                  </div>
                  <div className="form-col">
                    <label className="app-label">City / Location *</label>
                    <div className="input-with-icon">
                      <MapPin size={18} className="input-icon" />
                      <input type="text" name="city" className="app-input" required minLength="2" placeholder="Current city of residence" value={formData.city} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col">
                    <label className="app-label">Institution Name *</label>
                    <div className="input-with-icon">
                      <Building2 size={18} className="input-icon" />
                      <input type="text" name="college" className="app-input" required minLength="2" placeholder="Your college or university name" value={formData.college} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="form-col">
                    <label className="app-label">Academic Degree & Branch *</label>
                    <div className="input-with-icon">
                      <GraduationCap size={18} className="input-icon" />
                      <input type="text" name="degree" className="app-input" required minLength="2" placeholder="e.g., B.Tech in Computer Science" value={formData.degree} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: PROGRAM TYPE */}
              <div className="form-section">
                <h3>Program Selection</h3>
                <div className="radio-group">
                  <label className={`radio-card ${formData.type === 'internship' ? 'selected' : ''}`} onClick={() => handleRadioChange('type', 'internship')}>
                    <input type="radio" name="type" value="internship" checked={formData.type === 'internship'} readOnly />
                    <div className="radio-circle"></div>
                    <div className="radio-card-content">
                      <span className="radio-card-title">Professional Internship</span>
                      <span className="radio-card-desc">Industry-focused project experience</span>
                    </div>
                  </label>

                  <label className={`radio-card ${formData.type === 'training' ? 'selected' : ''}`} onClick={() => handleRadioChange('type', 'training')}>
                    <input type="radio" name="type" value="training" checked={formData.type === 'training'} readOnly />
                    <div className="radio-circle"></div>
                    <div className="radio-card-content">
                      <span className="radio-card-title">Specialized Training</span>
                      <span className="radio-card-desc">Comprehensive skill development tracks</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* SECTION: ACADEMIC YEAR (IF INTERNSHIP) */}
              {formData.type === 'internship' && (
                <div className="form-section fade-in">
                  <h3>Current Academic Standing</h3>
                  <div className="radio-group">
                    <label className={`radio-card ${formData.year === '1st-3rd' ? 'selected' : ''}`} onClick={() => handleRadioChange('year', '1st-3rd')}>
                      <input type="radio" name="year" value="1st-3rd" checked={formData.year === '1st-3rd'} readOnly />
                      <div className="radio-circle"></div>
                      <div className="radio-card-content">
                        <span className="radio-card-title">Pre-Final Year</span>
                        <span className="radio-card-desc">1st, 2nd, or 3rd Year Students</span>
                      </div>
                    </label>

                    <label className={`radio-card ${formData.year === 'final' ? 'selected' : ''}`} onClick={() => handleRadioChange('year', 'final')}>
                      <input type="radio" name="year" value="final" checked={formData.year === 'final'} readOnly />
                      <div className="radio-circle"></div>
                      <div className="radio-card-content">
                        <span className="radio-card-title">Final Year / Graduate</span>
                        <span className="radio-card-desc">4th Year or Degree Completed</span>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* SECTION: DURATION & PRICING */}
              <div className="form-section fade-in" key={formData.type + formData.year}>
                <h3>Choose Your Track</h3>
                <div className="radio-group">
                  {currentDurationOptions.map((opt) => (
                    <label key={opt.value} className={`radio-card ${formData.duration === opt.value ? 'selected' : ''}`} onClick={() => handleRadioChange('duration', opt.value)}>
                      <input type="radio" name="duration" value={opt.value} checked={formData.duration === opt.value} readOnly />
                      <div className="radio-circle"></div>
                      <div className="radio-card-content">
                        <span className="radio-card-title">{opt.title}</span>
                        <span className="radio-card-price">{opt.price}</span>
                        <span className="radio-card-desc">{opt.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* SECTION: DOMAIN */}
              <div className="form-section">
                <h3>Area of Specialization</h3>
                <div className="input-with-icon">
                  <Code size={18} className="input-icon" />
                  <select name="domain" className="app-select" value={formData.domain} onChange={handleInputChange} required>
                    <option value="">-- Select your preferred technology stack --</option>
                    {domainsList.map((domain, idx) => (
                      <option key={idx} value={domain}>{domain}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-apply-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processing Application...' : <>Complete Application <ArrowRight size={20} /></>}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
