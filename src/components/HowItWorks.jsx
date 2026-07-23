import React from 'react';
import { Search, Code, Award, Briefcase } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Discover',
      desc: 'Browse our comprehensive database of verified IEEE research projects, cloud bootcamps, and remote internships.',
      icon: <Search size={28} />,
      colorClass: 'step-blue'
    },
    {
      id: 2,
      title: 'Learn & Build',
      desc: 'Access verified codebases, attend virtual mentorship sessions, and develop hands-on projects guided by experts.',
      icon: <Code size={28} />,
      colorClass: 'step-purple'
    },
    {
      id: 3,
      title: 'Certify & Deploy',
      desc: 'Deploy your applications live to cloud environments, complete assessments, and earn industry-recognized credentials.',
      icon: <Award size={28} />,
      colorClass: 'step-orange'
    },
    {
      id: 4,
      title: 'Get Placed',
      desc: 'Present your completed project portfolio to our 100+ corporate hiring partners and secure your dream job.',
      icon: <Briefcase size={28} />,
      colorClass: 'step-green'
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header-centered">
          <span className="section-tag">ROADMAP</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A structured path designed to transform you from a student into a highly capable software engineer.
          </p>
        </div>

        <div className="roadmap-grid">
          {steps.map((step, idx) => (
            <div key={step.id} className="roadmap-step-card">
              <div className="step-number">{step.id}</div>
              <div className={`step-icon-wrap ${step.colorClass}`}>
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {idx < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
