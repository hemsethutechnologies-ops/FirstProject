import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EnrollmentModal from '../components/EnrollmentModal';
import SEO from '../components/SEO';
import { 
  GraduationCap, 
  Code2, 
  MonitorPlay, 
  FileText, 
  SearchCheck, 
  PenTool, 
  Briefcase, 
  Globe, 
  ArrowLeft, 
  CheckCircle, 
  Cpu, 
  Send 
} from 'lucide-react';
import './PageStyles.css';
import './Services.css';

export default function Services() {
  const { serviceType, subServiceType } = useParams();
  const navigate = useNavigate();

  // State for Workshop Registration
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Quote Form State
  const [quoteName, setQuoteName] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteDesc, setQuoteDesc] = useState('');

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${quoteName}! We have received your project quote request. A solutions architect from Hemsethu Technologies will email you at ${quoteEmail} within 24 hours.`);
    setQuoteName('');
    setQuoteEmail('');
    setQuoteDesc('');
  };

  const services = [
    {
      id: "academic-projects",
      title: "Academic Projects",
      desc: "Comprehensive project guidance and development for B.E/B.Tech, M.E/M.Tech, MCA/MSc, and Diploma students.",
      icon: <GraduationCap size={40} color="#fff" />,
      color: "var(--accent-orange)"
    },
    {
      id: "software-services",
      title: "Software Services",
      desc: "End-to-end custom software development, web applications, and mobile app solutions tailored to your needs.",
      icon: <Code2 size={40} color="#fff" />,
      color: "var(--primary-dark)"
    },
    {
      id: "workshops",
      title: "Workshops",
      desc: "Hands-on, intensive workshops on the latest technologies and industry best practices.",
      icon: <MonitorPlay size={40} color="#fff" />,
      color: "var(--accent-teal)"
    },
    {
      id: "paper-publication",
      title: "Paper Publication",
      desc: "Expert assistance with formatting, reviewing, and publishing academic papers in reputed journals.",
      icon: <FileText size={40} color="#fff" />,
      color: "var(--accent-purple)"
    },
    {
      id: "plagiarism-check",
      title: "Plagiarism Check",
      desc: "Thorough plagiarism checking services to ensure the originality and integrity of your academic documents.",
      icon: <SearchCheck size={40} color="#fff" />,
      color: "var(--accent-green)"
    },
    {
      id: "paper-writing",
      title: "Paper Writing",
      desc: "Professional guidance and support for structuring and writing high-quality academic and research papers.",
      icon: <PenTool size={40} color="#fff" />,
      color: "#e11d48"
    },
    {
      id: "corporate-training",
      title: "Corporate Training",
      desc: "Customized training programs designed to upskill your corporate workforce in modern technologies.",
      icon: <Briefcase size={40} color="#fff" />,
      color: "#0ea5e9"
    },
    {
      id: "online-training",
      title: "Online Training",
      desc: "Flexible, high-quality online training courses accessible from anywhere in the world.",
      icon: <Globe size={40} color="#fff" />,
      color: "#f59e0b"
    }
  ];

  const handleRegisterWorkshop = (title, price) => {
    setSelectedWorkshop({ title, price });
    setIsModalOpen(true);
  };

  // If no serviceType is selected, render the main overview grid
  if (!serviceType) {
    return (
      <main className="page-wrapper services-page">
        <SEO
          title="Our Services"
          description="Hemsethu Technologies offers academic projects, software development, workshops, paper publication, plagiarism checks, paper writing, corporate training, and online training in Hyderabad."
          canonical="/services"
          keywords={['IT services Hyderabad', 'academic project services', 'paper publication', 'corporate training Hyderabad', 'software development services']}
        />
        <div className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-orange) 100%)'}}>
          <h1>Our Services</h1>
          <p>Comprehensive technical and academic solutions designed to empower students and professionals.</p>
        </div>

        <div className="page-content-wrap">
          <div className="services-grid">
            {services.map((svc) => (
              <div key={svc.id} className="service-card-premium" onClick={() => navigate(`/services/${svc.id}`)}>
                <div 
                  className="service-icon-box" 
                  style={{backgroundColor: svc.color, boxShadow: `0 10px 20px ${svc.color}40`}}
                >
                  {svc.icon}
                </div>
                <h2>{svc.title}</h2>
                <p>{svc.desc}</p>
                <span className="service-link" style={{color: svc.color}}>
                  Learn More <span>➔</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Normalize string for safety
  const currentServiceKey = serviceType.toLowerCase();

  return (
    <main className="page-wrapper service-detail-page">
      <div className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-orange) 100%)'}}>
        <div className="back-link-box">
          <button className="back-to-services" onClick={() => navigate('/services')}>
            <ArrowLeft size={16} /> Back to Services
          </button>
        </div>
        
        {currentServiceKey === 'academic-projects' && <h1>Academic Project Guidance</h1>}
        {currentServiceKey === 'software-services' && <h1>Software Services</h1>}
        {currentServiceKey === 'workshops' && <h1>Technical Workshops</h1>}
        {currentServiceKey === 'paper-publication' && <h1>Paper Publication Support</h1>}
        {currentServiceKey === 'plagiarism-check' && <h1>Plagiarism Check Services</h1>}
        {currentServiceKey === 'paper-writing' && <h1>Paper Writing Guidance</h1>}
        {currentServiceKey === 'corporate-training' && <h1>Corporate Upskilling</h1>}
        {currentServiceKey === 'online-training' && <h1>Online Interactive Training</h1>}
        
        <p>Explore custom technical packages, modules, deliverables, and registration steps.</p>
      </div>

      <div className="page-content-wrap">
        
        {/* Dynamic Detail Panes depending on currentServiceKey */}

        {/* 1. ACADEMIC PROJECTS */}
        {currentServiceKey === 'academic-projects' && (
          <div className="detail-pane-content fade-in">
            {/* Qualification sub tabs */}
            <div className="sub-qualifications-nav">
              {[
                { key: 'be-btech', name: 'B.E/B.Tech' },
                { key: 'me-mtech', name: 'M.E/M.Tech' },
                { key: 'mca-msc', name: 'MCA/MSc' },
                { key: 'diploma', name: 'Diploma' },
                { key: 'degree', name: 'Degree' }
              ].map(qual => (
                <button 
                  key={qual.key} 
                  className={`qual-btn ${subServiceType?.toLowerCase() === qual.key ? 'active' : ''}`}
                  onClick={() => navigate(`/services/academic-projects/${qual.key}`)}
                >
                  {qual.name}
                </button>
              ))}
            </div>

            <div className="service-detail-columns">
              <div className="detail-main-info">
                <h2>Project Packages for {subServiceType ? subServiceType.toUpperCase().replace('-', ' ') : 'All Degrees'}</h2>
                <p className="pane-intro">
                  We specialize in developing customized academic projects with comprehensive code documentation and execution training. Our packages are designed to satisfy college regulations and provide deep technical insights to help you clear interviews.
                </p>

                <h3 className="section-subtitle">Project Deliverables:</h3>
                <ul className="deliverables-bullets">
                  <li><CheckCircle size={18} color="var(--accent-orange)" /> <strong>Complete Source Code:</strong> Clean, modular, well-commented code.</li>
                  <li><CheckCircle size={18} color="var(--accent-orange)" /> <strong>Project Documentation:</strong> Standard reports (Synopsis, Literature survey, Design, UML diagrams).</li>
                  <li><CheckCircle size={18} color="var(--accent-orange)" /> <strong>Local System Setup:</strong> Detailed configuration on your personal computer.</li>
                  <li><CheckCircle size={18} color="var(--accent-orange)" /> <strong>PPT Presentation:</strong> Ready-made PPT slides for mid-term reviews.</li>
                  <li><CheckCircle size={18} color="var(--accent-orange)" /> <strong>Viva Q&A Prep:</strong> Guides answering standard examiner questions.</li>
                </ul>

                <button className="item-btn mt-30" onClick={() => navigate('/contact')}>Request Project Callback</button>
              </div>

              <div className="detail-sidebar-info">
                <div className="sidebar-card">
                  <h4>Popular Domains</h4>
                  <div className="domain-labels">
                    <span>Python & Django</span>
                    <span>Machine Learning</span>
                    <span>Data Science</span>
                    <span>Android Applications</span>
                    <span>Internet of Things (IoT)</span>
                    <span>Java / .NET Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. SOFTWARE SERVICES */}
        {currentServiceKey === 'software-services' && (
          <div className="detail-pane-content fade-in">
            <div className="sub-qualifications-nav">
              {[
                { key: 'web', name: 'Web Applications' },
                { key: 'mobile', name: 'Mobile App Dev' },
                { key: 'digital-marketing', name: 'Digital Marketing' }
              ].map(tech => (
                <button 
                  key={tech.key} 
                  className={`qual-btn ${subServiceType?.toLowerCase() === tech.key ? 'active' : ''}`}
                  onClick={() => navigate(`/services/software-services/${tech.key}`)}
                >
                  {tech.name}
                </button>
              ))}
            </div>

            <div className="service-detail-columns">
              <div className="detail-main-info">
                <h2>Custom Software Solutions {subServiceType ? `(${subServiceType.toUpperCase()})` : ''}</h2>
                <p className="pane-intro">
                  Hemsethu Technologies designs robust, modern software systems, web platforms, and mobile apps. We work with clients to scale platforms and optimize online visibility.
                </p>

                <div className="features-grid-small">
                  <div className="mini-card">
                    <Cpu size={24} color="var(--accent-orange)" />
                    <h4>Tech Stacks</h4>
                    <p>React.js, Node.js, Python Django, Flutter, Android, iOS.</p>
                  </div>
                  <div className="mini-card">
                    <Globe size={24} color="var(--accent-orange)" />
                    <h4>Scale Support</h4>
                    <p>Cloud deployment, hosting configuration, SEO alignment.</p>
                  </div>
                </div>
              </div>

              <div className="detail-sidebar-info">
                <div className="sidebar-card">
                  <h4>Get a Project Quote</h4>
                  <form className="sidebar-quote-form" onSubmit={handleQuoteSubmit}>
                    <input 
                      type="text" 
                      required 
                      placeholder="Your Name" 
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                    />
                    <input 
                      type="email" 
                      required 
                      placeholder="Your Email Address" 
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                    />
                    <textarea 
                      rows="4" 
                      required 
                      placeholder="Brief project details..."
                      value={quoteDesc}
                      onChange={(e) => setQuoteDesc(e.target.value)}
                    ></textarea>
                    <button type="submit" className="btn-modal-primary mt-10">
                      Request Quote <Send size={14} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. WORKSHOPS */}
        {currentServiceKey === 'workshops' && (
          <div className="detail-pane-content fade-in">
            <h2>Our Coding Workshops</h2>
            <p className="pane-desc">
              Get hands-on training directly from developers. Our short-term workshops offer intensive practical learning models designed to clear setup bottlenecks.
            </p>

            <div className="workshops-list-cards">
              {[
                { title: 'React & Frontend Web Dev', duration: '3 Days Intensive', fee: '₹1,500' },
                { title: 'Python Backend & Django API', duration: '2 Days Bootcamp', fee: '₹1,200' },
                { title: 'Machine Learning Models & Data Science', duration: '5 Days Intensive', fee: '₹2,500' },
                { title: 'DevOps Essentials & AWS Cloud', duration: '2 Days Bootcamp', fee: '₹1,800' }
              ].map((ws, index) => (
                <div key={index} className="workshop-item-row">
                  <div className="ws-meta">
                    <h4>{ws.title}</h4>
                    <span>{ws.duration}</span>
                  </div>
                  <div className="ws-action">
                    <span className="ws-fee">{ws.fee}</span>
                    <button 
                      className="item-btn" 
                      onClick={() => handleRegisterWorkshop(ws.title, ws.fee)}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PAPER PUBLICATION */}
        {currentServiceKey === 'paper-publication' && (
          <div className="detail-pane-content fade-in text-section-detail">
            <h2>Journal Publication Support</h2>
            <div className="title-underline"></div>
            <p className="pane-desc mt-20">
              Publishing research articles in recognized scientific repositories requires standard formatting, strict plagiarism compliance, and rigorous conceptual reviews. Hemsethu Technologies provides end-to-end guidance to researchers and postgraduates looking to publish in:
            </p>
            <ul className="publication-list">
              <li><strong>IEEE Conferences & Transactions</strong></li>
              <li><strong>Scopus Indexed Scientific Journals</strong></li>
              <li><strong>Springer & Elsevier Publications</strong></li>
              <li><strong>UGC Care Listed Journals</strong></li>
            </ul>
            <button className="item-btn mt-30" onClick={() => navigate('/contact')}>Get Publication Consultation</button>
          </div>
        )}

        {/* 5. PLAGIARISM CHECK */}
        {currentServiceKey === 'plagiarism-check' && (
          <div className="detail-pane-content fade-in text-section-detail">
            <h2>Plagiarism Checking & Report Verification</h2>
            <div className="title-underline"></div>
            <p className="pane-desc mt-20">
              Ensure the integrity of your academic manuscripts, thesis drafts, and technical documentations. We use authorized scanning engines to verify and generate complete plagiarism reports.
            </p>
            <div className="plagiarism-steps">
              <div className="step-point">
                <span>1</span>
                <div>
                  <h4>Document Scan</h4>
                  <p>Send your document in standard format (PDF/DOCX).</p>
                </div>
              </div>
              <div className="step-point">
                <span>2</span>
                <div>
                  <h4>Percentage Verification</h4>
                  <p>Detailed verification highlighting duplicate text areas.</p>
                </div>
              </div>
              <div className="step-point">
                <span>3</span>
                <div>
                  <h4>Official Report</h4>
                  <p>Turnitin dashboard reports delivered to your email.</p>
                </div>
              </div>
            </div>
            <button className="item-btn mt-30" onClick={() => navigate('/contact')}>Upload Document</button>
          </div>
        )}

        {/* 6. PAPER WRITING */}
        {currentServiceKey === 'paper-writing' && (
          <div className="detail-pane-content fade-in text-section-detail">
            <h2>Research & Paper Writing Guidance</h2>
            <div className="title-underline"></div>
            <p className="pane-desc mt-20">
              Drafting a technical paper can be daunting. We guide postgraduates (M.Tech/MCA/M.Sc) through structuring scientific reports, compiling references, mapping literature, and formatting graphs.
            </p>
            <p className="pane-desc">
              All guides adhere strictly to ethical writing principles and international standards.
            </p>
            <button className="item-btn mt-20" onClick={() => navigate('/contact')}>Schedule Writing Review</button>
          </div>
        )}

        {/* 7. CORPORATE TRAINING */}
        {currentServiceKey === 'corporate-training' && (
          <div className="detail-pane-content fade-in text-section-detail">
            <h2>Corporate Training & Upskilling Bootcamp</h2>
            <div className="title-underline"></div>
            <p className="pane-desc mt-20">
              Transition your engineering workforce to modern technical stacks. We provide customized, project-based on-site and remote training seminars covering:
            </p>
            <ul className="publication-list">
              <li>Full Stack Web Architectures (MERN / React & Django API)</li>
              <li>DevOps & Automated Deployment Pipelines (Docker, Jenkins, AWS)</li>
              <li>Data-driven decision modeling and Machine Learning pipelines</li>
            </ul>
            <button className="item-btn mt-30" onClick={() => navigate('/contact')}>Enquire Corporate Pricing</button>
          </div>
        )}

        {/* 8. ONLINE TRAINING */}
        {currentServiceKey === 'online-training' && (
          <div className="detail-pane-content fade-in text-section-detail">
            <h2>Online Interactive Training Portals</h2>
            <div className="title-underline"></div>
            <p className="pane-desc mt-20">
              Access technical bootcamps from anywhere. Our interactive virtual training modules feature real-time screen-sharing coding sessions, personal system setup checks, and lifetime access to documentation folders.
            </p>
            <button className="item-btn mt-20" onClick={() => navigate('/contact')}>Browse Online Batches</button>
          </div>
        )}

      </div>

      {isModalOpen && selectedWorkshop && (
        <EnrollmentModal 
          course={selectedWorkshop} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </main>
  );
}
