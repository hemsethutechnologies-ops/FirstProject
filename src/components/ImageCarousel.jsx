import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ban1 from '../assets/ban-1.png';
// You can add more banners here like:
// import ban2 from '../assets/ban-2.png';

const banners = [
  ban1,
  // ban2,
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  if (banners.length === 0) return null;

  return (
    <div className="image-carousel-container">
      <div 
        className="image-carousel-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((imgSrc, idx) => (
          <div key={idx} className="image-carousel-slide">
            <img src={imgSrc} alt={`Banner ${idx + 1}`} />
          </div>
        ))}
      </div>
      
      {banners.length > 1 && (
        <>
          <button className="carousel-arrow prev" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-arrow next" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
          <div className="carousel-dots">
            {banners.map((_, idx) => (
              <button 
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
