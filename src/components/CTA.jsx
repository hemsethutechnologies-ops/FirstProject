import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';
import studentImg from '../assets/student_with_laptop.png';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const [processedImg, setProcessedImg] = useState(studentImg);

  useEffect(() => {
    const img = new Image();
    img.src = studentImg;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const width = canvas.width;
      const height = canvas.height;

      const stack = [];
      const visited = new Uint8Array(width * height);

      // Push boundary pixels to stack (Top, Left, Right ONLY. Exclude bottom border to protect shoes/legs)
      for (let x = 0; x < width; x++) {
        stack.push(x, 0);
      }
      for (let y = 0; y < height; y++) {
        stack.push(0, y);
        stack.push(width - 1, y);
      }

      while (stack.length > 0) {
        const cy = stack.pop();
        const cx = stack.pop();
        if (cx === undefined || cy === undefined) continue;

        const idx = cy * width + cx;
        if (visited[idx]) continue;
        visited[idx] = 1;

        const p = idx * 4;
        const r = data[p];
        const g = data[p + 1];
        const b = data[p + 2];

        // Match near-white background and light grey shadow pixels
        const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
        const isBg = (r > 218 && g > 218 && b > 218) || (r > 185 && g > 185 && b > 185 && maxDiff < 10);

        if (isBg) {
          data[p + 3] = 0; // Make transparent

          if (cx > 0) stack.push(cx - 1, cy);
          if (cx < width - 1) stack.push(cx + 1, cy);
          if (cy > 0) stack.push(cx, cy - 1);
          if (cy < height - 1) stack.push(cx, cy + 1);
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedImg(canvas.toDataURL('image/png'));
    };
  }, []);

  return (
    <section className="premium-cta-section">
      <div className="premium-cta-wrapper">
        <div className="premium-cta-card">
          {/* Card Left: Text content & stats */}
          <div className="cta-left-content">
            <span className="cta-tag">PROJECTS & CERTIFICATIONS</span>
            <h2 className="cta-title-new">
              We help you finish your Certifications & Projects with Assured Success
            </h2>
            <p className="cta-desc-new">
              Our team of seasoned developers and educators guide you through building real-world projects, mastering industry-relevant courses, and securing recognized certifications with top marks.
            </p>

            {/* Bottom Row: Metrics & Explore Button side by side */}
            <div className="cta-bottom-row-container">
              <div className="cta-metrics-row">
                <div className="cta-metric-item">
                  <span className="metric-number yellow">500+</span>
                  <span className="metric-label">Verified Projects</span>
                </div>
                <div className="cta-metric-item">
                  <span className="metric-number teal">5K+</span>
                  <span className="metric-label">Trained Students</span>
                </div>
                <div className="cta-metric-item">
                  <span className="metric-number purple">100%</span>
                  <span className="metric-label">Job Assistance</span>
                </div>
              </div>

              <div className="cta-button-container">
                <Link to="/courses" className="btn-cta-explore">
                  Explore Courses <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card Right: Circle frame & Overlapping student image */}
          <div className="cta-right-content">
            <div className="cta-circle-backdrop">
              <img
                src={processedImg}
                alt="Student with laptop"
                className="cta-student-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
