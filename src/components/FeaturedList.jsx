import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedList.css';
import { ArrowRight, Clock, Star, Download, Layers } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

export default function FeaturedList() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      tech: 'React, Node.js, MongoDB',
      duration: '4 Weeks',
      type: 'Project',
      level: 'Intermediate',
      rating: 4.8,
      reviews: 142,
      downloads: '1.4k',
      price: 'Free (Open Source)',
      tagColor: 'var(--accent-teal)'
    },
    {
      id: 2,
      title: 'Predictive Analytics Model',
      tech: 'Python, Scikit-Learn',
      duration: '6 Weeks',
      type: 'Internship',
      level: 'Advanced',
      rating: 4.9,
      reviews: 88,
      downloads: '850',
      price: 'Stipend Internship',
      tagColor: 'var(--accent-green)'
    },
    {
      id: 3,
      title: 'Banking Mobile App',
      tech: 'React Native, Firebase',
      duration: '8 Weeks',
      type: 'Internship',
      level: 'Advanced',
      rating: 4.7,
      reviews: 104,
      downloads: '1.1k',
      price: 'Stipend Internship',
      tagColor: 'var(--accent-orange)'
    }
  ];

  const handleApplyClick = (item) => {
    setSelectedItem({
      title: item.title,
      price: item.price
    });
    setIsModalOpen(true);
  };

  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <div className="header-left">
            <span className="section-tag">CATALOGUE</span>
            <h2 className="section-title">Featured Opportunities</h2>
          </div>
          <Link to="/projects" className="view-all-btn" style={{ textDecoration: 'none' }}>
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="project-grid">
          {projects.map(proj => (
            <div key={proj.id} className="project-card">
              <div className="project-card-header">
                <span className="project-tag" style={{ backgroundColor: proj.tagColor }}>
                  {proj.type}
                </span>
                <div className="project-rating">
                  <Star size={14} className="star-icon" fill="currentColor" />
                  <span className="rating-val">{proj.rating}</span>
                  <span className="reviews-count">({proj.reviews})</span>
                </div>
              </div>
              
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-tech">{proj.tech}</p>
              
              <div className="project-meta">
                <div className="meta-badge">
                  <Layers size={14} />
                  <span>{proj.level}</span>
                </div>
                <div className="meta-badge">
                  <Download size={14} />
                  <span>{proj.downloads} DLs</span>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-duration">
                  <Clock size={16} />
                  <span>{proj.duration}</span>
                </div>
                <button 
                  className="apply-btn"
                  onClick={() => handleApplyClick(proj)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedItem && (
        <EnrollmentModal 
          course={selectedItem} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </section>
  );
}
