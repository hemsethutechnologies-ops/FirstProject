import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import './PageStyles.css';
import './Projects.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const { domain } = useParams();

  const domainMapping = {
    'ieee': 'IEEE',
    'python': 'Python',
    'django': 'Python Django',
    'ml': 'Machine Learning',
    'data-science': 'Data Science',
    'ai': 'Artificial Intelligence',
    'android': 'Android',
    'java': 'Java',
    'dotnet': '.NET',
    'all': 'All'
  };

  // Expanded mock data for projects
  const allProjects = [
    { id: 1, title: 'AI Chatbot Assistant', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 2, title: 'E-Commerce Backend', category: 'Python Django', price: 'Premium', img: 'Web' },
    { id: 3, title: 'Stock Price Predictor', category: 'Machine Learning', price: 'Free', img: 'ML' },
    { id: 4, title: 'Expense Tracker App', category: 'Android', price: 'Premium', img: 'Android' },
    { id: 5, title: 'Customer Churn Analysis', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 6, title: 'Library Management System', category: 'Java', price: 'Free', img: 'Java' },
    { id: 7, title: 'Face Recognition System', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },
    { id: 8, title: 'Portfolio Website', category: 'Python', price: 'Free', img: 'Web' },
    { id: 9, title: 'House Price Prediction', category: 'Machine Learning', price: 'Premium', img: 'ML' },
    { id: 10, title: 'Food Delivery App', category: 'Android', price: 'Premium', img: 'Android' },
    { id: 11, title: 'Covid-19 Data Dashboard', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 12, title: 'Hospital Management', category: 'Java', price: 'Premium', img: 'Java' },
    { id: 13, title: 'NLP Text Summarizer', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 14, title: 'Blog CMS System', category: 'Python Django', price: 'Premium', img: 'Web' },
    { id: 15, title: 'Recommendation Engine', category: 'Machine Learning', price: 'Free', img: 'ML' },
    { id: 16, title: 'Fitness Tracker App', category: 'Android', price: 'Free', img: 'Android' },
    { id: 17, title: 'Sales Forecasting', category: 'Data Science', price: 'Premium', img: 'Data' },
    { id: 18, title: 'ATM Simulator System', category: 'Java', price: 'Free', img: 'Java' },
    { id: 19, title: 'IEEE Smart Agriculture IoT', category: 'IEEE', price: 'Premium', img: 'IoT' },
    { id: 20, title: 'IEEE Cryptographic Secure Transfer', category: 'IEEE', price: 'Free', img: 'Security' },
    { id: 21, title: 'Enterprise Resource ERP', category: '.NET', price: 'Premium', img: 'DotNet' },
    { id: 22, title: 'Python Web Scraper Tool', category: 'Python', price: 'Free', img: 'Python' }
  ];

  // Derive unique categories from data
  const categories = ['All', ...new Set(allProjects.map(p => p.category))];

  // State
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sync state when URL domain parameter changes
  useEffect(() => {
    if (domain && domainMapping[domain.toLowerCase()]) {
      setActiveCategory(domainMapping[domain.toLowerCase()]);
      setCurrentPage(1);
    } else {
      setActiveCategory('All');
      setCurrentPage(1);
    }
  }, [domain]);

  // Filter projects based on category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return allProjects;
    return allProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to page 1 on category change
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <main className="page-wrapper projects-page">
      <SEO
        title={activeCategory !== 'All' ? `${activeCategory} Projects` : 'Academic Projects Catalog'}
        description={`Browse ${activeCategory !== 'All' ? activeCategory : 'IEEE, Python, ML, AI, Java, .NET & Android'} academic projects at Hemsethu Technologies. Complete documentation, PPT support, and viva preparation included.`}
        canonical="/projects"
        keywords={['academic projects Hyderabad', 'IEEE projects', 'Python projects', 'ML projects', 'B.Tech final year projects', 'M.Tech projects']}
      />
      <div className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-orange) 100%)'}}>
        <h1>Projects Catalog</h1>
        <p>Browse our extensive library of industry-standard projects across various domains.</p>
      </div>

      <div className="page-content-wrap">
        
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {currentProjects.length > 0 ? (
          <div className="items-grid">
            {currentProjects.map(proj => (
              <div key={proj.id} className="item-card">
                <div className="item-image" style={{backgroundColor: '#e0f2fe', color: '#0369a1'}}>
                  <h3>{proj.img} Project</h3>
                </div>
                <div className="item-details">
                  <span className="proj-category-badge">{proj.category}</span>
                  <h3 className="item-title">{proj.title}</h3>
                  <p className="item-desc">A comprehensive project covering the core concepts of {proj.category}. Includes source code and documentation.</p>
                  <div className="item-footer">
                    <span className="item-price" style={{
                      color: proj.price === 'Free' ? 'var(--accent-green)' : 'var(--primary-dark)',
                      fontWeight: 'bold'
                    }}>{proj.price}</span>
                    <button className="item-btn btn-outline" onClick={() => alert(`Project Download: Your download package for "${proj.title}" will begin shortly.`)}>Download</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-found">
            <h3>No projects found for this category.</h3>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination-controls">
            <button 
              className="page-btn prev-next" 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i} 
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button 
              className="page-btn prev-next" 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
        
      </div>
    </main>
  );
}
