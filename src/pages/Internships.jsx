import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { X, Check, MapPin, Clock, Search, Briefcase, Award } from 'lucide-react';
import SEO from '../components/SEO';
import './PageStyles.css';
import './Internships.css';
import internshipsHeroImg from '../assets/internships_photo_hero.jpg';

// No images needed for list view

export default function Internships() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [activeIntern, setActiveIntern] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 12 Internship Programs
  const internships = [
    { id: 1, title: 'Frontend Developer Intern', tech: 'React.js, Next.js, CSS3', type: 'Remote', duration: '3 Months', stipend: 'Performance-based', desc: 'Develop modern, highly interactive, and responsive web user interfaces using React.js and Next.js. Collaborate with UI designers to build features.' },
    { id: 2, title: 'Backend Developer Intern', tech: 'Node.js, Java, SQL', type: 'Remote', duration: '3 Months', stipend: 'Performance-based', desc: 'Design backend database schemas, build REST controllers, and integrate microservices routing.' },
    { id: 3, title: 'Data Analytics Intern', tech: 'Python, SQL, Power BI', type: 'Remote', duration: '3 Months', stipend: 'Performance-based', desc: 'Analyze structured databases, construct custom query pipelines, and build interactive Power BI charts for system metrics reporting.' },
    { id: 4, title: 'DevOps Intern', tech: 'Docker, Kubernetes, CI/CD', type: 'Remote', duration: '3 Months', stipend: 'Performance-based', desc: 'Automate build processes, manage containerized deployments, and ensure continuous integration and delivery.' },
    { id: 5, title: 'Full Stack Java Intern', tech: 'Java, Spring Boot, React', type: 'Hybrid', duration: '6 Months', stipend: 'Performance-based', desc: 'Build scalable fullstack enterprise applications using Java and Spring Boot. Implement robust backend APIs.' },
    { id: 6, title: 'Full Stack Python Intern', tech: 'Python, Django, React', type: 'Hybrid', duration: '6 Months', stipend: 'Performance-based', desc: 'Develop end-to-end fullstack applications using Python. Implement user authentication, database models, and RESTful APIs.' },
    { id: 7, title: 'MERN Stack Intern', tech: 'MongoDB, Express, React, Node.js', type: 'Hybrid', duration: '6 Months', stipend: 'Performance-based', desc: 'Build modern end-to-end fullstack web applications using the MERN stack. Implement user authentication and real-time features.' },
    { id: 8, title: 'AWS Cloud Computing Intern', tech: 'AWS EC2, S3, Docker', type: 'Hybrid', duration: '4 Months', stipend: 'Performance-based', desc: 'Configure cloud architecture on AWS, maintain scalable services, and deploy serverless applications.' },
    { id: 9, title: 'MEAN Stack Intern', tech: 'MongoDB, Express, Angular, Node.js', type: 'On-site', duration: '6 Months', stipend: 'Performance-based', desc: 'Develop comprehensive fullstack web solutions using the MEAN stack. Build robust Angular interfaces.' },
    { id: 10, title: 'AI and ML Intern', tech: 'TensorFlow, PyTorch, Python', type: 'On-site', duration: '6 Months', stipend: 'Performance-based', desc: 'Train predictive and classification algorithms, impute raw datasets, and deploy machine learning models inside API endpoints.' },
    { id: 11, title: 'Generative AI Intern', tech: 'LLMs, Prompt Engineering, Python', type: 'On-site', duration: '4 Months', stipend: 'Performance-based', desc: 'Build cutting-edge generative AI applications using large language models and prompt engineering frameworks.' },
    { id: 12, title: 'Mobile Developer Intern', tech: 'React Native, Flutter, Swift', type: 'On-site', duration: '4 Months', stipend: 'Performance-based', desc: 'Develop high-performance mobile applications for Android and iOS using modern cross-platform or native technologies.' }
  ];

  const getNormalizedType = (typeParam) => {
    if (!typeParam) return 'all';
    const norm = typeParam.toLowerCase().replace('-', '');
    if (norm === 'remote') return 'remote';
    if (norm === 'hybrid') return 'hybrid';
    if (norm === 'onsite') return 'onsite';
    return 'all';
  };

  const activeNormalized = getNormalizedType(type);

  // Filter list based on route and search query
  const filteredInternships = internships.filter(intern => {
    const matchesType = activeNormalized === 'all' || intern.type.toLowerCase().replace('-', '') === activeNormalized;
    const matchesSearch = intern.title.toLowerCase().includes(searchQuery.toLowerCase()) || intern.tech.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleOpenDetails = (intern) => {
    setActiveIntern(intern);
    document.body.style.overflow = 'hidden'; 
  };

  const handleCloseDetails = () => {
    setActiveIntern(null);
    document.body.style.overflow = 'unset'; 
  };

  const handleApplyWhatsApp = (internId, internTitle) => {
    const phoneNumber = '919391925913';
    const text = `Hello Hemsethu Technologies, I would like to apply for the Internship position: "${internTitle}" (Internship ID: ${internId}). Please provide the registration details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="corp-internships-wrapper">
      <SEO
        title="Internship Programs"
        description="Kickstart your career with Hemsethu Technologies' internship programs. Gain real project experience, mentorship, and certifications."
        canonical="/internships"
      />

      {/* Full-Bleed Photographic Hero Section */}
      <section className="photo-hero-section">
        <div className="photo-hero-bg">
          <img src={internshipsHeroImg} alt="Internships Team Collaboration" />
          <div className="photo-hero-overlay"></div>
        </div>
        <div className="photo-hero-content">
          <h1>Internship Programs</h1>
          <p>Kickstart your career with our hands-on internship programs. Gain real-world experience building production-grade software.</p>
          <a href="#roles" className="btn-hero-primary">View Open Roles</a>
        </div>
      </section>

      {/* Main Content Area */}
      <section id="roles" className="corp-content-section">
        <div className="corp-container">
          
          {/* Controls Bar: Search & Filters */}
          <div className="corp-controls-bar">
            <div className="corp-search-box">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search by role or tech stack..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="corp-filter-nav">
              <Link to="/internships" className={activeNormalized === 'all' ? 'active' : ''}>All</Link>
              <Link to="/internships/remote" className={activeNormalized === 'remote' ? 'active' : ''}>Remote</Link>
              <Link to="/internships/hybrid" className={activeNormalized === 'hybrid' ? 'active' : ''}>Hybrid</Link>
              <Link to="/internships/on-site" className={activeNormalized === 'onsite' ? 'active' : ''}>On-site</Link>
            </div>
          </div>

          {/* Job Board List View */}
          <div className="corp-job-board">
            <div className="corp-job-board-header">
              <h3>{filteredInternships.length} Open Positions</h3>
            </div>

            {filteredInternships.length > 0 ? (
              <div className="corp-job-list">
                {filteredInternships.map(intern => (
                  <div key={intern.id} className="corp-job-row" onClick={() => handleOpenDetails(intern)}>
                    <div className="corp-job-main">
                      <div className="corp-job-icon">
                        <Briefcase size={24} />
                      </div>
                      <div className="corp-job-info">
                        <h4>{intern.title}</h4>
                        <div className="corp-job-meta">
                          <span className="meta-item"><MapPin size={14} /> {intern.type}</span>
                          <span className="meta-item"><Clock size={14} /> {intern.duration}</span>
                          <span className="meta-item tech">{intern.tech}</span>
                        </div>
                      </div>
                    </div>
                    <div className="corp-job-action">
                      <button className="corp-btn-apply" onClick={(e) => { e.stopPropagation(); handleOpenDetails(intern); }}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="corp-no-results">
                <p>No internships found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Clean Corporate Modal */}
      {activeIntern && (
        <div className="corp-modal-overlay" onClick={handleCloseDetails}>
          <div className="corp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="corp-modal-close" onClick={handleCloseDetails}>
              <X size={24} />
            </button>
            
            <div className="corp-modal-header">
              <h2>{activeIntern.title}</h2>
              <div className="corp-modal-meta-badges">
                <span><MapPin size={16} /> {activeIntern.type}</span>
                <span><Clock size={16} /> {activeIntern.duration}</span>
                <span><Award size={16} /> {activeIntern.stipend}</span>
              </div>
            </div>

            <div className="corp-modal-body">
              <div className="corp-modal-section">
                <h3>Program Overview</h3>
                <p>{activeIntern.desc}</p>
              </div>
              
              <div className="corp-modal-section">
                <h3>Technologies & Stack</h3>
                <p className="corp-tech-text">{activeIntern.tech}</p>
              </div>
              
              <div className="corp-modal-section">
                <h3>Internship Perks</h3>
                <ul className="corp-perks-list">
                  <li><Check size={18} /> Official Letter of Recommendation (LOR)</li>
                  <li><Check size={18} /> ISO 9001:2015 Verified Certificate of Completion</li>
                  <li><Check size={18} /> Pre-Placement Offer (PPO) Opportunity</li>
                  <li><Check size={18} /> Performance-based Financial Incentives</li>
                </ul>
              </div>
            </div>

            <div className="corp-modal-footer">
              <button 
                className="corp-btn-whatsapp"
                onClick={() => handleApplyWhatsApp(activeIntern.id, activeIntern.title)}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="20" />
                Apply via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
