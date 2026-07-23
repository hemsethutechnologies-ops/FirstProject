import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Users, 
  Handshake, 
  Briefcase, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  TrendingUp, 
  BookOpen, 
  CheckCircle,
  FileText
} from 'lucide-react';
import './PageStyles.css';
import './About.css';

export default function About() {
  const { tab } = useParams();
  const navigate = useNavigate();
  const activeTab = tab ? tab.toLowerCase() : 'story';

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Careers Accordion State
  const [openJob, setOpenJob] = useState(null);

  const tabs = [
    { id: 'story', name: 'Our Story' },
    { id: 'mission', name: 'Mission & Values' },
    { id: 'team', name: 'Our Team' },
    { id: 'partners', name: 'Partners' },
    { id: 'careers', name: 'Careers' },
    { id: 'faq', name: 'FAQ' }
  ];

  const handleTabChange = (tabId) => {
    navigate(`/about/${tabId}`);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleJob = (index) => {
    setOpenJob(openJob === index ? null : index);
  };

  const handleApplyWhatsApp = (jobTitle) => {
    const phoneNumber = '918555887986';
    const text = `Hello Hemsethu Technologies, I would like to apply for the career position: "${jobTitle}". Please let me know the process for submitting my CV.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const timelineData = [
    { year: '2018', title: 'The Foundation', desc: 'Hemsethu Technologies was initiated by Dr. Ramesh Kumar in Secunderabad as a specialized consulting group for academic research papers, thesis editing, and IEEE base-paper implementations.' },
    { year: '2020', title: 'Virtual Scale & Training Bootcamps', desc: 'In response to the shift to digital platforms, we expanded into online coding bootcamps and remote technical internship programs, creating structured developer pipelines for college graduates.' },
    { year: '2022', title: 'Multi-Domain Technology Shift', desc: 'We scaled our portfolio to support full-stack application development (Django, Spring Boot, .NET MVC) and advanced machine learning models (TensorFlow, NLP), matching industry recruitment shifts.' },
    { year: '2024', title: 'Hemsethu Today', desc: 'With a portfolio of 146 customizable projects and 12 career bootcamps, we have successfully guided over 2,500+ engineering students to academic excellence and job readiness.' }
  ];

  const coreValues = [
    { title: 'Student-First Mentor', desc: 'We prioritize personalized, step-by-step guidance over generic training plans, matching students with dedicated project mentors.', icon: <Users size={24} color="var(--accent-orange)" /> },
    { title: 'Project-Driven Curriculums', desc: 'We reject boring theory slides. Every course, internship, and package is structured entirely around building fully operational software prototypes.', icon: <BookOpen size={24} color="var(--accent-teal)" /> },
    { title: 'Continuous Upgrades', desc: 'We continuously refresh our codebases, database schemas, and documentation models to match modern software development best practices.', icon: <TrendingUp size={24} color="var(--accent-green)" /> },
    { title: 'Academic Compliance', desc: 'All materials (source files, SRS docs, review slides, DFD diagrams) are drafted strictly matching local university and IEEE journal guidelines.', icon: <Award size={24} color="var(--accent-purple)" /> }
  ];

  const teamData = [
    { 
      name: 'Dr. Ramesh Kumar', 
      role: 'Founder & Managing Director', 
      desc: 'Expert in university guidelines, thesis consulting, and scientific paper draft reviews. Leads IEEE and UGC publication panels.',
      skills: ['Research Methodologies', 'UGC Care Publications', 'Scopus Thesis Editing', 'Academic Guidance']
    },
    { 
      name: 'Srinivas Rao', 
      role: 'Head of Technology & Code Architect', 
      desc: 'Full-stack enterprise developer with 10+ years of industrial code expertise. Architect of the Django, Java, and .NET templates.',
      skills: ['Python Django', 'Spring Boot Microservices', 'ASP.NET Core MVC', 'Database Architecture']
    },
    { 
      name: 'Anitha Reddy', 
      role: 'Lead ML Mentor & Data Scientist', 
      desc: 'Specializes in preparing datasets, training machine learning classifiers, model optimization, and drafting research manuscripts.',
      skills: ['TensorFlow/Keras', 'NLP & Computer Vision', 'IEEE Paper Proofing', 'Data Analytics Pipelines']
    }
  ];

  const partnersData = [
    { name: 'University Affiliates', desc: 'Direct curriculum mapping and syllabus compliance across regional technological universities, ensuring approved research scopes.', icon: <Handshake size={32} /> },
    { name: 'Corporate Placement Affiliates', desc: 'Partnership with 80+ software firms, local IT enterprises, and startups in Hyderabad and Secunderabad for placement recruitment.', icon: <Briefcase size={32} /> },
    { name: 'IEEE Publication Hubs', desc: 'Affiliated resources to assist students in paper review, formatting edits, plagiarism checks, and publication approvals in reputed international journals.', icon: <Target size={32} /> }
  ];

  const jobsData = [
    { 
      title: 'Full Stack Web Development Mentor', 
      type: 'Full-time', 
      loc: 'Secunderabad Office / Hybrid',
      responsibilities: [
        'Deliver interactive live mentorship sessions on HTML, CSS, JavaScript, React.js, and Django backend.',
        'Guide students through resolving bugs and setting up local database connections.',
        'Review and update repository templates to meet modern web design aesthetics.'
      ],
      skills: ['HTML5 & CSS3', 'JavaScript ES6', 'Python & Django Framework', 'React / Next.js', 'MySQL/PostgreSQL']
    },
    { 
      title: 'IEEE Project Research Assistant', 
      type: 'Contract / Part-time', 
      loc: 'Secunderabad Office',
      responsibilities: [
        'Review IEEE research papers and build working prototype models in Python or MATLAB.',
        'Draft structural documentation modules including System Requirements Specifications (SRS) and DFD diagrams.',
        'Deliver technical documentation and guide students for university presentations.'
      ],
      skills: ['Python/MATLAB', 'Technical Writing & SRS Documentations', 'Academic Research Frameworks', 'LaTeX']
    },
    { 
      title: 'Digital Marketing & Community Lead', 
      type: 'Full-time', 
      loc: 'Remote / Secunderabad Office',
      responsibilities: [
        'Create technical blogs, SEO content, and organic outreach campaigns targeting university final year students.',
        'Manage community platforms and handle student lead inquiries for course enrollments.',
        'Coordinate organic placements and update hiring partner dashboards.'
      ],
      skills: ['SEO Optimization', 'Social Media Strategy', 'Technical Copywriting', 'Lead Generation & CRM']
    }
  ];

  const faqData = [
    {
      q: "Are the academic project codes customizable?",
      a: "Yes! All project codebases delivered by Hemsethu Technologies are fully customizable to meet your specific university Guidelines. Our project mentors will help you configure and run the code locally, configure database connections, and edit labels."
    },
    {
      q: "Do you provide university publication support?",
      a: "Yes. We offer complete guidance for drafting, formatting, formatting citations, plagiarism checking, and publishing research papers in reputed international journals including IEEE, UGC Care, and Scopus."
    },
    {
      q: "Can I join online/remote training classes?",
      a: "Absolutely. We offer live interactive online training sessions and remote internships with dedicated mentor assistance. Real-time screen sharing support is available for code setup."
    },
    {
      q: "Do you offer job placement assistance?",
      a: "Yes. Our bootcamps include placement training, resume reviews, mock interviews, and direct placement opportunities at our partner firms and local software enterprises."
    },
    {
      q: "What diagrams and document files are included in the project package?",
      a: "Our complete project guides package includes a 60-80 page Project Report (SRS documentation), System Architecture designs, Entity-Relationship (ER) Diagrams, Data Flow Diagrams (DFD Levels 0, 1, and 2), UML Diagrams (Class, Use Case, Sequence), PPT slides for all three university reviews, and execution installation videos."
    }
  ];

  return (
    <main className="page-wrapper about-page">
      <div className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-orange) 100%)'}}>
        <h1>About Hemsethu</h1>
        <p>Discover our story, mission, core values, technical team, affiliates, open careers, and FAQs.</p>
      </div>

      <div className="page-content-wrap">
        {/* Tab Navigation */}
        <div className="about-tabs-nav">
          {tabs.map(t => (
            <button 
              key={t.id} 
              className={`about-tab-btn ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => handleTabChange(t.id)}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="about-tab-content-box">
          
          {/* ==========================================
              Tab 1: Story & Timeline
              ========================================== */}
          {activeTab === 'story' && (
            <section className="tab-pane fade-in">
              <div className="pane-header">
                <h2>Our Story</h2>
                <div className="title-underline"></div>
              </div>
              <p className="pane-desc">
                Founded by a group of passionate engineers and educators, Hemsethu Technologies was born out of a simple observation: traditional education often falls short in preparing students for the fast-paced realities of the tech industry. We decided to create a "university of code" where learning is project-based, hands-on, and directly aligned with what companies actually need.
              </p>
              <p className="pane-desc">
                Over the years, we have transitioned from a localized training group to a recognized digital innovation hub, offering end-to-end technical education, corporate upskilling programs, custom software solutions, and comprehensive academic project guidance.
              </p>

              <h3 className="modal-section-title" style={{ marginTop: '40px', fontSize: '1.4rem' }}>Our Milestones Journey</h3>
              <div className="story-timeline-container">
                {timelineData.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-year">{item.year}</div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-body">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ==========================================
              Tab 2: Mission & Core Values
              ========================================== */}
          {activeTab === 'mission' && (
            <section className="tab-pane fade-in">
              <div className="pane-header">
                <h2>Mission & Vision</h2>
                <div className="title-underline"></div>
              </div>
              <div className="about-mission">
                <div className="mission-card">
                  <Target size={48} color="var(--accent-orange)" style={{ margin: '0 auto' }} />
                  <h3>Our Mission</h3>
                  <p>To empower the next generation of software engineers by providing accessible, high-quality, and deeply practical technical education.</p>
                </div>
                <div className="mission-card">
                  <Eye size={48} color="var(--accent-green)" style={{ margin: '0 auto' }} />
                  <h3>Our Vision</h3>
                  <p>To become the global standard for project-based tech education, where every student graduates with a portfolio that guarantees success.</p>
                </div>
              </div>

              <div className="core-values-section">
                <h3 className="modal-section-title" style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '10px' }}>Our Core Operating Values</h3>
                <p className="pane-desc text-center">These principles guide our curriculum curation and student mentorship pipelines.</p>
                <div className="values-grid">
                  {coreValues.map((value, idx) => (
                    <div key={idx} className="value-card">
                      <div style={{ marginBottom: '15px' }}>{value.icon}</div>
                      <h4>{value.title}</h4>
                      <p>{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              Tab 3: Our Team
              ========================================== */}
          {activeTab === 'team' && (
            <section className="tab-pane fade-in">
              <div className="pane-header">
                <h2>Our Team</h2>
                <div className="title-underline"></div>
              </div>
              <div className="team-grid">
                {teamData.map((member, idx) => (
                  <div key={idx} className="team-card">
                    <div className="team-avatar">
                      <Users size={32} color="var(--accent-orange)" />
                    </div>
                    <h4>{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <p className="member-desc">{member.desc}</p>
                    
                    <div className="member-skills-row">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="member-skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ==========================================
              Tab 4: Partners & Affiliates
              ========================================== */}
          {activeTab === 'partners' && (
            <section className="tab-pane fade-in">
              <div className="pane-header">
                <h2>Partners & Affiliates</h2>
                <div className="title-underline"></div>
              </div>
              <p className="pane-desc text-center">
                We work in close collaboration with academic universities, corporate recruiters, and local technology hubs to enable direct student placements and support paper publications.
              </p>
              <div className="partners-grid">
                {partnersData.map((partner, idx) => (
                  <div key={idx} className="partner-card">
                    <div className="partner-icon">{partner.icon}</div>
                    <h4>{partner.name}</h4>
                    <p>{partner.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mock Client Strip */}
              <div className="mock-logo-strip">
                <span className="mock-logo-item">JNTUH</span>
                <span className="mock-logo-item">OU COLLEGE</span>
                <span className="mock-logo-item">IEEE REGION 10</span>
                <span className="mock-logo-item">TCS AFFILIATE</span>
                <span className="mock-logo-item">WIPRO ALIGNED</span>
              </div>
            </section>
          )}

          {/* ==========================================
              Tab 5: Careers
              ========================================== */}
          {activeTab === 'careers' && (
            <section className="tab-pane fade-in">
              <div className="pane-header">
                <h2>Careers</h2>
                <div className="title-underline"></div>
              </div>
              <p className="pane-desc">
                Want to mentor the next generation of engineers? We are constantly on the lookout for technical instructors, web developers, and academic project mentors to join our Secunderabad office. Click positions below to inspect roles:
              </p>

              <div className="careers-list">
                {jobsData.map((job, idx) => (
                  <div 
                    key={idx} 
                    className={`job-card-panel ${openJob === idx ? 'open' : ''}`}
                  >
                    <div 
                      className="job-header-row" 
                      onClick={() => toggleJob(idx)}
                    >
                      <div>
                        <h4>{job.title}</h4>
                        <span className="job-tag">{job.type} • {job.loc}</span>
                      </div>
                      <div>
                        {openJob === idx ? <ChevronUp size={20} color="var(--accent-orange)" /> : <ChevronDown size={20} />}
                      </div>
                    </div>

                    {openJob === idx && (
                      <div className="job-exp-details">
                        <div className="job-specs-title">Key Responsibilities:</div>
                        <ul className="job-specs-list">
                          {job.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>{resp}</li>
                          ))}
                        </ul>

                        <div className="job-specs-title">Required Technical Skills:</div>
                        <div className="modal-tech-stack-grid" style={{ marginBottom: '20px' }}>
                          {job.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="modal-tech-badge">{skill}</span>
                          ))}
                        </div>

                        <div className="careers-apply-box">
                          <button 
                            className="btn-careers primary"
                            onClick={() => navigate('/contact')}
                          >
                            Apply via Form
                          </button>
                          <button 
                            className="btn-careers whatsapp"
                            onClick={() => handleApplyWhatsApp(job.title)}
                          >
                            Apply via WhatsApp
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ==========================================
              Tab 6: FAQ Accordion
              ========================================== */}
          {activeTab === 'faq' && (
            <section className="tab-pane fade-in">
              <div className="pane-header">
                <h2>Frequently Asked Questions</h2>
                <div className="title-underline"></div>
              </div>
              <div className="faq-accordion-box">
                {faqData.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`faq-item-row ${openFaq === idx ? 'open' : ''}`} 
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="faq-question">
                      <h4>{faq.q}</h4>
                      {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                    {openFaq === idx && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </main>
  );
}
