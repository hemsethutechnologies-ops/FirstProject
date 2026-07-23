import React from 'react';
import { Briefcase, Users, Cpu, Building2 } from 'lucide-react';
import './Stats.css';

export default function Stats() {
  const stats = [
    { id: 1, label: 'Projects Completed', value: '500+', icon: <Briefcase size={28} />, color: 'var(--accent-teal)' },
    { id: 2, label: 'Students Trained', value: '10k+', icon: <Users size={28} />, color: 'var(--accent-green)' },
    { id: 3, label: 'Technologies', value: '50+', icon: <Cpu size={28} />, color: 'var(--accent-orange)' },
    { id: 4, label: 'Partner Companies', value: '100+', icon: <Building2 size={28} />, color: 'var(--accent-purple)' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map(stat => (
          <div key={stat.id} className="stat-item" style={{ '--icon-color': stat.color }}>
            <div className="stat-icon-circle">
              {stat.icon}
            </div>
            <div className="stat-info">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
