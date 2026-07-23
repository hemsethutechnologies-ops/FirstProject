import React from 'react';
import './AlumniCompanies.css';

export default function AlumniCompanies() {
  const companies = [
    {
      name: 'Zoho',
      logo: (
        <span className="logo-zoho">
          <span className="z-red">Z</span>
          <span className="z-blue">o</span>
          <span className="z-green">h</span>
          <span className="z-yellow">o</span>
        </span>
      )
    },
    {
      name: 'Accenture',
      logo: (
        <span className="logo-accenture">
          accenture<span className="acc-arrow">&gt;</span>
        </span>
      )
    },
    {
      name: 'Razorpay',
      logo: <span className="logo-razorpay">Razorpay</span>
    },
    {
      name: 'Cognizant',
      logo: <span className="logo-cognizant">Cognizant</span>
    },
    {
      name: 'Swiggy',
      logo: <span className="logo-swiggy">Swiggy</span>
    },
    {
      name: 'Capgemini',
      logo: (
        <span className="logo-capgemini">
          <span className="cap-spade">♦</span> Capgemini
        </span>
      )
    },
    {
      name: 'Zomato',
      logo: <span className="logo-zomato">zomato</span>
    },
    {
      name: 'TCS',
      logo: (
        <span className="logo-tcs">
          TCS<span className="tcs-dot">.</span>
        </span>
      )
    },
    {
      name: 'Freshworks',
      logo: <span className="logo-freshworks">freshworks</span>
    },
    {
      name: 'Infosys',
      logo: <span className="logo-infosys">Infosys</span>
    },
    {
      name: 'Wipro',
      logo: <span className="logo-wipro">Wipro</span>
    }
  ];

  // Double the array for seamless infinite marquee scroll
  const scrollList = [...companies, ...companies];

  return (
    <section className="alumni-section">
      <div className="alumni-container">
        <div className="alumni-header">
          <span className="alumni-tag">OUR ALUMNI</span>
          <h3 className="alumni-title">Where Our Alumni Work</h3>
          <p className="alumni-subtitle">
            Hemsethu bootcamps and internship graduates are building successful engineering careers at leading global tech firms.
          </p>
        </div>

        <div className="companies-ticker-wrap">
          <div className="companies-ticker-track">
            {scrollList.map((company, index) => (
              <div key={index} className="company-logo-card">
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
