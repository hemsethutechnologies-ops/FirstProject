import React from 'react';
import { BookOpen, Hammer, Rocket, Trophy } from 'lucide-react';
import './Features.css';

export default function Features() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'LEARN',
      description: 'Acquire cutting-edge skills from industry experts with our comprehensive curriculum.',
      icon: <BookOpen size={36} />,
      color: 'var(--accent-teal)',
      glowColor: 'rgba(0, 168, 150, 0.15)'
    },
    {
      id: 2,
      number: '02',
      title: 'BUILD',
      description: 'Apply your knowledge by building real-world projects in a hands-on environment.',
      icon: <Hammer size={36} />,
      color: '#0284c7', // Sky Blue
      glowColor: 'rgba(2, 132, 199, 0.15)'
    },
    {
      id: 3,
      number: '03',
      title: 'INNOVATE',
      description: 'Push boundaries and develop creative solutions to complex technical challenges.',
      icon: <Rocket size={36} />,
      color: '#1d4ed8', // Royal Blue
      glowColor: 'rgba(29, 78, 216, 0.15)'
    },
    {
      id: 4,
      number: '04',
      title: 'SUCCEED',
      description: 'Launch your career with confidence and stand out in the competitive tech industry.',
      icon: <Trophy size={36} />,
      color: 'var(--primary-dark)', // Navy Blue
      glowColor: 'rgba(11, 33, 74, 0.15)'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <span className="section-tag">METHODOLOGY</span>
          <h2 className="section-title">How We Help You Grow</h2>
          <p className="section-desc-text">
            A structured, hands-on progression path designed to help you go from learning fundamentals to building production-ready apps.
          </p>
        </div>
        <div className="features-grid">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="feature-card" 
              style={{ '--card-accent': step.color, '--card-glow': step.glowColor }}
            >
              <div className="feature-number">{step.number}</div>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-glow" style={{ backgroundColor: step.glowColor }}></div>
                <div className="feature-icon" style={{ color: step.color }}>
                  {step.icon}
                </div>
              </div>
              <h3 className="feature-title">{step.title}</h3>
              <p className="feature-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
