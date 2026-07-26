import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { X, Check } from 'lucide-react';
import SEO from '../components/SEO';
import './PageStyles.css';
import './Internships.css';

import img1 from '../assets/intern_frontend.png';
import img2 from '../assets/intern_uiux.png';
import img3 from '../assets/intern_marketing.png';
import img4 from '../assets/intern_writer.png';
import img5 from '../assets/intern_data.png';
import img6 from '../assets/intern_cloud.png';
import img7 from '../assets/intern_fullstack.png';
import img8 from '../assets/intern_security.png';
import img9 from '../assets/intern_ml.png';
import img10 from '../assets/intern_backend.png';
import img11 from '../assets/intern_android.png';
import img12 from '../assets/intern_iot.png';

export default function Internships() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [activeIntern, setActiveIntern] = useState(null);

  // 12 Internship Programs (4 remote, 4 hybrid, 4 on-site)
  const internships = [
    // Remote
    { id: 1, title: 'Frontend Developer Intern', tech: 'React.js, Next.js, CSS3', type: 'Remote', duration: '3 Months', stipend: 'Performance-based', img: img1, desc: 'Develop modern, highly interactive, and responsive web user interfaces using React.js and Next.js. Collaborate with UI designers to build features.' },
    { id: 2, title: 'UI/UX Design Intern', tech: 'Figma, Adobe XD, Wireframing', type: 'Remote', duration: '2 Months', stipend: 'Performance-based', img: img2, desc: 'Design user interfaces, wireframes, and high-fidelity prototypes. Conduct user research and map out custom system workflows.' },
    { id: 3, title: 'Social Media Marketing Intern', tech: 'SEO, Content Strategy, Analytics', type: 'Remote', duration: '3 Months', stipend: 'Performance-based', img: img3, desc: 'Manage organic marketing channels, outline content strategies, and run analytics reporting to optimize page reach.' },
    { id: 4, title: 'Technical Content Writer', tech: 'Technical Writing, Blogging, SEO', type: 'Remote', duration: '3 Months', stipend: 'Performance-based', img: img4, desc: 'Write software installation guides, developer blogs, and system documentation. Practice SEO best practices.' },

    // Hybrid
    { id: 5, title: 'Data Analyst Intern', tech: 'Python, SQL, Power BI', type: 'Hybrid', duration: '3 Months', stipend: 'Performance-based', img: img5, desc: 'Analyze structured databases, construct custom query pipelines, and build interactive Power BI charts for system metrics reporting.' },
    { id: 6, title: 'Cloud Architect Intern', tech: 'AWS, Docker, CI/CD Pipeline', type: 'Hybrid', duration: '4 Months', stipend: 'Performance-based', img: img6, desc: 'Configure cloud architecture on AWS, maintain containerized services using Docker, and assist in deploying CI/CD build scripts.' },
    { id: 7, title: 'Fullstack Developer Intern', tech: 'Node.js, Express, React, MongoDB', type: 'Hybrid', duration: '6 Months', stipend: 'Performance-based', img: img7, desc: 'Build end-to-end fullstack applications using the MERN stack. Implement user authentication, database models, and RESTful APIs.' },
    { id: 8, title: 'Cyber Security Analyst', tech: 'OWASP Top 10, Penetration Testing', type: 'Hybrid', duration: '4 Months', stipend: 'Performance-based', img: img8, desc: 'Audit system code bases for security flaws, write security patches, and run threat vectors checks on endpoints.' },

    // On-site
    { id: 9, title: 'Machine Learning Engineer', tech: 'TensorFlow, PyTorch, Scikit-Learn', type: 'On-site', duration: '6 Months', stipend: 'Performance-based', img: img9, desc: 'Train predictive and classification algorithms, impute raw datasets, and deploy machine learning models inside API endpoints.' },
    { id: 10, title: 'Backend Developer Intern', tech: 'Java, Spring Boot, MySQL', type: 'On-site', duration: '3 Months', stipend: 'Performance-based', img: img10, desc: 'Design backend database schemas in MySQL, build REST controllers using Spring Boot, and integrate microservices routing.' },
    { id: 11, title: 'Android Developer Intern', tech: 'Kotlin, Jetpack Compose, XML', type: 'On-site', duration: '3 Months', stipend: 'Performance-based', img: img11, desc: 'Develop native mobile applications for Android using Kotlin and Jetpack Compose. Implement Room DB offline caches.' },
    { id: 12, title: 'Embedded Systems & IoT Intern', tech: 'Arduino, Raspberry Pi, C++', type: 'On-site', duration: '3 Months', stipend: 'Performance-based', img: img12, desc: 'Write low-level controller scripts, configure wireless sensor nodes, and construct IoT hardware prototypes.' }
  ];

  // Helper to normalize and match route parameters
  const getNormalizedType = (typeParam) => {
    if (!typeParam) return 'all';
    const norm = typeParam.toLowerCase().replace('-', '');
    if (norm === 'remote') return 'remote';
    if (norm === 'hybrid') return 'hybrid';
    if (norm === 'onsite') return 'onsite';
    return 'all';
  };

  const activeNormalized = getNormalizedType(type);

  // Filter list based on parameterized route
  const filteredInternships = activeNormalized === 'all'
    ? internships
    : internships.filter(i => i.type.toLowerCase().replace('-', '') === activeNormalized);

  const handleOpenDetails = (intern) => {
    setActiveIntern(intern);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const handleCloseDetails = () => {
    setActiveIntern(null);
    document.body.style.overflow = 'unset'; // Unlock background scroll
  };

  const handleApplyWhatsApp = (internId, internTitle) => {
    const phoneNumber = '918555887986';
    const text = `Hello Hemsethu Technologies, I would like to apply for the Internship position: "${internTitle}" (Internship ID: ${internId}). Please provide the registration details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="page-wrapper">
      <SEO
        title="Internship Programs"
        description="Kickstart your career with Hemsethu Technologies' internship programs in Hyderabad. Summer, winter, remote & bootcamp internships with real project experience, mentorship, and certifications."
        canonical="/internships"
        keywords={['IT internships Hyderabad', 'summer internship program', 'software internship', 'remote internship India', 'pre-placement offer']}
      />
      <div className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-purple) 100%)'}}>
        <h1>Internship Programs</h1>
        <p>Kickstart your career with our hands-on internship programs. Gain real-world experience building products that matter.</p>
      </div>

      <div className="page-content-wrap">
        {/* Category-param filter bar */}
        <div className="internships-filter-bar">
          <Link 
            to="/internships" 
            className={`intern-filter-tab ${activeNormalized === 'all' ? 'active' : ''}`}
          >
            All Internships
          </Link>
          <Link 
            to="/internships/remote" 
            className={`intern-filter-tab ${activeNormalized === 'remote' ? 'active' : ''}`}
          >
            Remote
          </Link>
          <Link 
            to="/internships/hybrid" 
            className={`intern-filter-tab ${activeNormalized === 'hybrid' ? 'active' : ''}`}
          >
            Hybrid
          </Link>
          <Link 
            to="/internships/on-site" 
            className={`intern-filter-tab ${activeNormalized === 'onsite' ? 'active' : ''}`}
          >
            On-site
          </Link>
        </div>

        {filteredInternships.length > 0 ? (
          <div className="items-grid">
            {filteredInternships.map(intern => (
              <div 
                key={intern.id} 
                className="item-card"
                onClick={() => handleOpenDetails(intern)}
                style={{ cursor: 'pointer' }}
              >
                <div className="item-image" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={intern.img} alt={intern.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="item-details">
                  <span style={{color: 'var(--accent-purple)', fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase'}}>{intern.type}</span>
                  <h3 className="item-title">{intern.title}</h3>
                  <p className="item-desc">Join our team as a {intern.title} and work with technologies like {intern.tech}. Mentorship provided.</p>
                  <div className="item-footer">
                    <span className="item-price" style={{color: 'var(--primary-dark)', fontSize: '0.85rem'}}>{intern.tech}</span>
                    <button 
                      className="item-btn" 
                      style={{backgroundColor: 'var(--primary-dark)', borderColor: 'var(--primary-dark)', color: '#fff'}}
                      onClick={(e) => {
                        e.stopPropagation(); // Avoid modal popup on click
                        handleOpenDetails(intern);
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-found">
            <h3>No internships found for this category.</h3>
          </div>
        )}
      </div>

      {/* ==========================================================================
         Internship Details Modal
         ========================================================================== */}
      {activeIntern && (
        <div className="intern-details-overlay" onClick={handleCloseDetails}>
          <div className="intern-details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-intern-modal" onClick={handleCloseDetails}>
              <X size={20} />
            </button>

            <span className="intern-modal-category">{activeIntern.type} Internship</span>
            <h2 className="intern-modal-title">{activeIntern.title}</h2>

            <div className="intern-spec-grid">
              <div className="intern-spec-item">
                <span className="intern-spec-lbl">Duration:</span>
                <span className="intern-spec-val">{activeIntern.duration}</span>
              </div>
              <div className="intern-spec-item">
                <span className="intern-spec-lbl">Location:</span>
                <span className="intern-spec-val">{activeIntern.type}</span>
              </div>
              <div className="intern-spec-item">
                <span className="intern-spec-lbl">Stipend:</span>
                <span className="intern-spec-val">{activeIntern.stipend}</span>
              </div>
              <div className="intern-spec-item">
                <span className="intern-spec-lbl">Mentorship:</span>
                <span className="intern-spec-val">Assigned</span>
              </div>
            </div>

            <div>
              <h3 className="intern-modal-section-title">Program Description</h3>
              <p className="intern-desc-text">{activeIntern.desc}</p>
            </div>

            <div>
              <h3 className="intern-modal-section-title">Internship Perks</h3>
              <div className="intern-perks-list">
                <div className="intern-perk-item">
                  <Check size={16} className="intern-perk-icon" />
                  <span>ISO 9001:2015 Verified Certificate of Completion</span>
                </div>
                <div className="intern-perk-item">
                  <Check size={16} className="intern-perk-icon" />
                  <span>Official Letter of Recommendation (LOR)</span>
                </div>
                <div className="intern-perk-item">
                  <Check size={16} className="intern-perk-icon" />
                  <span>Performance-based Financial Incentives</span>
                </div>
                <div className="intern-perk-item">
                  <Check size={16} className="intern-perk-icon" />
                  <span>Pre-Placement Offer (PPO) Opportunity</span>
                </div>
              </div>
            </div>

            <div className="intern-modal-footer">
              <button 
                className="btn-intern-action apply"
                onClick={() => handleApplyWhatsApp(activeIntern.id, activeIntern.title)}
              >
                Submit Application via WhatsApp
              </button>
              <button 
                className="btn-intern-action close"
                onClick={handleCloseDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
