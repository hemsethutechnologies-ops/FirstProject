import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import './PageStyles.css';
import './About.css';
import aboutHeroImg from '../assets/internships_photo_hero.jpg';
import SEO from '../components/SEO';

export default function About() {
  const navigate = useNavigate();

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleApplyWhatsApp = (jobTitle) => {
    const phoneNumber = '919391925913';
    const text = `Hello Hemsethu Technologies, I would like to apply for the career position: "${jobTitle}". Please let me know the process for submitting my CV.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const jobsData = [
    { 
      title: 'Full Stack Web Development Mentor', 
      type: 'Full-time', 
      loc: 'Secunderabad Office',
      desc: 'Deliver interactive live mentorship sessions on React and Django. Guide students through resolving bugs and setting up databases.'
    },
    { 
      title: 'IEEE Project Research Assistant', 
      type: 'Contract', 
      loc: 'Secunderabad Office',
      desc: 'Review IEEE research papers and build working prototype models in Python. Draft structural documentation modules (SRS, DFD).'
    },
    { 
      title: 'Digital Marketing Lead', 
      type: 'Full-time', 
      loc: 'Remote',
      desc: 'Create technical blogs and SEO content targeting university students. Manage community platforms and handle leads.'
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
    }
  ];

  return (
    <main className="page-wrapper ent-about">
      <SEO title="About Us" description="Learn the story behind Hemsethu Technologies: The Hub of Emerging Minds and the bridge to modern technology." />
      
      {/* 1. Full-Bleed Photographic Hero */}
      <section className="about-photo-hero-section">
        <div className="about-photo-hero-bg">
          <img src={aboutHeroImg} alt="Hemsethu About Team" />
          <div className="about-photo-hero-overlay"></div>
        </div>
        <div className="about-photo-hero-content">
          <div className="about-photo-hero-text">
            <span className="about-photo-hero-badge">Who We Are</span>
            <h1>Engineering Excellence.</h1>
            <p>Bridging the gap between university curriculum and the demands of the modern technology industry.</p>
          </div>
        </div>
      </section>

      {/* 2. Magazine Editorial Narrative Section */}
      <section className="ent-section ent-narrative">
        <div className="ent-container">
          
          <div className="ent-story-header">
            <h2 className="ent-title">
              HEM – Hub of Emerging Minds. <br />
              Sethu – The Bridge to Technology.
            </h2>
            <div className="ent-red-line"></div>
          </div>

          <div className="ent-story-columns">
            <p className="ent-lead">
              Founded by passionate engineers, HemSethu Technologies was born out of a simple observation: traditional education often falls short in preparing students for the fast-paced realities of the tech industry.
            </p>
            
            <p className="ent-body">
              We decided to create a learning environment where education is project-based, hands-on, and directly aligned with what companies actually need. Over the years, we have transitioned from a localized training group to a recognized digital innovation hub.
            </p>
            
            <p className="ent-body">
              Today, with a portfolio of over 140 customizable projects and enterprise-grade bootcamps, we have successfully guided over 2,500 engineering students to academic excellence and job readiness.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Sleek Enterprise Mission Statement */}
      <section className="ent-section ent-mission">
        <div className="ent-container">
          <div className="ent-mission-grid">
            <div className="ent-mission-label">Our Core Mission</div>
            <h2 className="ent-mission-statement">
              To empower the next generation of software engineers by providing accessible, high-quality, and deeply practical technical education.
            </h2>
          </div>
        </div>
      </section>

      {/* 4. Core Values (Clean Typographic List, sharp lines) */}
      <section className="ent-section ent-values">
        <div className="ent-container">
          <div className="ent-header-left">
            <h2>Operating Principles</h2>
            <div className="ent-red-line"></div>
          </div>
          
          <div className="ent-values-grid">
            <div className="ent-value-item">
              <span className="ent-number">01</span>
              <h3>Student-First Mentorship</h3>
              <p>We prioritize personalized, step-by-step guidance over generic training plans, matching students with dedicated project mentors.</p>
            </div>
            <div className="ent-value-item">
              <span className="ent-number">02</span>
              <h3>Project-Driven Curriculums</h3>
              <p>We reject boring theory slides. Every course, internship, and package is structured entirely around building fully operational software prototypes.</p>
            </div>
            <div className="ent-value-item">
              <span className="ent-number">03</span>
              <h3>Continuous Upgrades</h3>
              <p>We continuously refresh our codebases, database schemas, and documentation models to match modern software development best practices.</p>
            </div>
            <div className="ent-value-item">
              <span className="ent-number">04</span>
              <h3>Academic Compliance</h3>
              <p>All materials are drafted strictly matching local university and IEEE journal guidelines to ensure guaranteed academic acceptance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Careers (Editorial List View) */}
      <section className="ent-section ent-careers">
        <div className="ent-container">
          <div className="ent-header-left">
            <h2>Join the Firm</h2>
            <div className="ent-red-line"></div>
          </div>

          <div className="ent-jobs-list">
            {jobsData.map((job, idx) => (
              <div key={idx} className="ent-job-row">
                <div className="ent-job-meta">
                  <span className="ent-job-type">{job.type}</span>
                  <span className="ent-job-loc">{job.loc}</span>
                </div>
                <div className="ent-job-info">
                  <h4>{job.title}</h4>
                  <p>{job.desc}</p>
                </div>
                <div className="ent-job-action">
                  <button 
                    className="ent-btn-apply"
                    onClick={() => handleApplyWhatsApp(job.title)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Clean FAQ */}
      <section className="ent-section ent-faq">
        <div className="ent-container">
          <div className="ent-header-left">
            <h2>Frequently Asked Questions</h2>
            <div className="ent-red-line"></div>
          </div>
          
          <div className="ent-faq-list">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className={`ent-faq-item ${openFaq === idx ? 'open' : ''}`} 
                onClick={() => toggleFaq(idx)}
              >
                <div className="ent-faq-q">
                  <h4>{faq.q}</h4>
                  <div className="ent-faq-icon">
                    {openFaq === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
                {openFaq === idx && (
                  <div className="ent-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
