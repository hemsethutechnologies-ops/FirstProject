import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'DevOps Engineer',
      company: 'TCS',
      text: 'The AWS & DevOps training at Hemsethu Technologies was completely hands-on. The industry-focused project blueprints helped me crack my interviews with confidence.',
      rating: 5,
      avatarInitials: 'PS',
      colorClass: 'avatar-blue'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'ML Developer',
      company: 'Final Year Student',
      text: 'I found the exact IEEE machine learning project I needed for my final year. The verified source code, step-by-step documentation, and support saved my semester.',
      rating: 5,
      avatarInitials: 'RV',
      colorClass: 'avatar-purple'
    },
    {
      id: 3,
      name: 'Divya Teja',
      role: 'React Native Intern',
      company: 'Cognizant',
      text: 'The remote internship program bridged the gap between my campus curriculum and real industry standards. Working on live blueprints gave me concrete professional skills.',
      rating: 5,
      avatarInitials: 'DT',
      colorClass: 'avatar-teal'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header-centered">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Discover how Hemsethu Technologies helps students learn, build portfolios, and land top roles in tech.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map(review => (
            <div key={review.id} className="testimonial-card">
              <div className="quote-icon-wrap">
                <Quote size={24} className="quote-icon" />
              </div>

              <div className="rating-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#eab308" color="#eab308" />
                ))}
              </div>

              <p className="testimonial-text">"{review.text}"</p>

              <div className="testimonial-user">
                <div className={`user-avatar ${review.colorClass}`}>
                  {review.avatarInitials}
                </div>
                <div className="user-info">
                  <h4 className="user-name">{review.name}</h4>
                  <p className="user-role">
                    {review.role} • <span className="placement-tag">{review.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
