import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryGrid.css';
import { 
  MonitorPlay, 
  BarChart2, 
  TrendingUp, 
  Lightbulb, 
  Smartphone, 
  Code2, 
  Cloud, 
  MessageCircle, 
  TerminalSquare 
} from 'lucide-react';

const categories = [
  { id: 1, name: 'Django Projects', count: '120+ Projects', icon: <MonitorPlay size={36} />, color: '#10b981', glow: 'rgba(16, 185, 129, 0.15)', path: '/projects/django' },
  { id: 2, name: 'DS Projects', count: '85+ Projects', icon: <BarChart2 size={36} />, color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.15)', path: '/projects/data-science' },
  { id: 3, name: 'ML Projects', count: '150+ Projects', icon: <TrendingUp size={36} />, color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.15)', path: '/projects/ml' },
  { id: 4, name: 'AI Projects', count: '95+ Projects', icon: <Lightbulb size={36} />, color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.15)', path: '/projects/ai' },
  { id: 5, name: 'Android Projects', count: '110+ Projects', icon: <Smartphone size={36} />, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.15)', path: '/projects/android' },
  { id: 6, name: 'JAVA Projects', count: '135+ Projects', icon: <Code2 size={36} />, color: '#f97316', glow: 'rgba(249, 115, 22, 0.15)', path: '/projects/java' },
  { id: 7, name: 'AWS Projects', count: '75+ Projects', icon: <Cloud size={36} />, color: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.15)', path: '/projects/all' },
  { id: 8, name: 'Twitter API', count: '40+ Projects', icon: <MessageCircle size={36} />, color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.15)', path: '/projects/all' },
  { id: 9, name: '.NET Projects', count: '90+ Projects', icon: <TerminalSquare size={36} />, color: '#ec4899', glow: 'rgba(236, 72, 153, 0.15)', path: '/projects/dotnet' },
];

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-header">
          <span className="section-tag">EXPLORE DOMAINS</span>
          <h2 className="section-title">Popular Project Categories</h2>
          <p className="section-desc-text">
            Filter through our massive repository of source code by clicking a specific technology domain.
          </p>
        </div>
        
        <div className="category-grid">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card"
              style={{ '--cat-color': cat.color, '--cat-glow': cat.glow }}
              onClick={() => navigate(cat.path)}
            >
              <div className="icon-outer-wrapper">
                <div className="icon-glow-bg"></div>
                <div className="icon-wrapper">
                  {cat.icon}
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">{cat.name}</h3>
                <span className="category-count">{cat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
