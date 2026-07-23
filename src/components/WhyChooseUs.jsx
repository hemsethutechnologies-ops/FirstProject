import React from 'react';
import {
  ShieldCheck, TrendingUp, BookOpen, Headphones,
  Users, PlayCircle, ClipboardList, Award, ArrowRight
} from 'lucide-react';
import studentImg from '../assets/wcu_student_bg.png';
import './WhyChooseUs.css';

const features = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Industry Expert Mentors',
    desc: 'Learn directly from working professionals with real project experience.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: '10+ Years Proven',
    desc: 'A decade of coaching across varied tech profiles and career goals.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Personal Attention',
    desc: 'Individual code reviews and feedback for faster skill improvement.',
  },
  {
    icon: <Headphones size={22} />,
    title: 'Flexible Batches',
    desc: 'Weekday, weekend, online and offline options to fit your schedule.',
  },
];

const highlights = [
  {
    icon: <Users size={26} />,
    title: '10,000+ Happy Students',
    desc: 'Build real projects and practice under industry conditions regularly.',
    accent: false,
  },
  {
    icon: <PlayCircle size={26} />,
    title: 'Free Demo Class',
    desc: 'Attend first, decide later — no pressure, no commitment.',
    accent: true,
  },
  {
    icon: <ClipboardList size={26} />,
    title: 'Honest Assessment',
    desc: 'Know your current level and get a clear improvement roadmap.',
    accent: false,
  },
  {
    icon: <Award size={26} />,
    title: 'Placement Guarantee',
    desc: 'Get placed in 8–12 weeks or we continue training at no extra cost.',
    accent: true,
  },
];

const bullets = [
  'Unlimited access until you get placed',
  'Private 1-on-1 mentorship sessions',
  '97% student satisfaction score',
  '500+ real-world industry projects',
  'Free resume building & mock interviews',
];

export default function WhyChooseUs() {
  return (
    <section className="wcu-section">
      <div className="wcu-container">

        {/* Header */}
        <div className="wcu-header">
          <h2 className="wcu-title">Why Serious Learners Choose STT</h2>
          <p className="wcu-subtitle">
            Real expertise. Proven results. Personal support that gets your career moving.
          </p>
        </div>

        {/* Main 2-column row */}
        <div className="wcu-main">

          {/* LEFT — photo background + floating dark card */}
          <div className="wcu-left" style={{ backgroundImage: `url(${studentImg})` }}>
            {/* floating dark overlay card — positioned inside the photo */}
            <div className="wcu-overlay">
              <h3 className="wcu-overlay-title">
                Online &nbsp;|&nbsp; Offline &nbsp;|&nbsp; Hybrid Training
              </h3>
              <ul className="wcu-bullet-list">
                {bullets.map((b, i) => (
                  <li key={i} className="wcu-bullet">
                    <ArrowRight size={13} className="wcu-arrow" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — 2×2 feature cards */}
          <div className="wcu-right">
            {features.map((f, i) => (
              <div key={i} className="wcu-feat-card">
                <div className="wcu-feat-icon">{f.icon}</div>
                <h4 className="wcu-feat-title">{f.title}</h4>
                <p className="wcu-feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom 4 highlight cards — HORIZONTAL layout (icon left, text right) */}
        <div className="wcu-bottom">
          {highlights.map((h, i) => (
            <div key={i} className={`wcu-hl-card ${h.accent ? 'wcu-hl-card--accent' : ''}`}>
              <div className="wcu-hl-icon">{h.icon}</div>
              <div className="wcu-hl-text">
                <h4 className="wcu-hl-title">{h.title}</h4>
                <p className="wcu-hl-desc">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
