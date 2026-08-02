import React, { useEffect, useRef, useState } from 'react';
import './AchievementsBanner.css';

const stats = [
  { label: 'Students Trained',   short: 'ST', value: 10,  suffix: 'K+', color: 'blue' },
  { label: 'Placement Rate',     short: 'PR', value: 92,  suffix: '%',  color: 'gold' },
  { label: 'Projects Completed', short: 'PC', value: 500, suffix: '+',  color: 'blue' },
  { label: 'Satisfaction Score', short: 'SS', value: 98,  suffix: '%',  color: 'gold' },
];

/* Count-up animation triggered by IntersectionObserver */
function AnimatedNumber({ target, duration = 1600, suffix }) {
  const [count, setCount] = useState(0);
  const ref     = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let cur = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(cur));
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="ab-num">
      {count}<span className="ab-suf">{suffix}</span>
    </span>
  );
}

/* ── SVG: Graduate person (woman in graduation gown) ── */
function GraduateSVG() {
  return (
    <svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" className="ab-grad-svg">
      {/* Body / gown */}
      <ellipse cx="60" cy="155" rx="38" ry="30" fill="#0d2a6e" />
      <rect x="30" y="105" width="60" height="60" rx="10" fill="#0d2a6e" />
      {/* Gown collar V-shape */}
      <polygon points="60,108 50,130 70,130" fill="#1a3a8a" />
      {/* Arms */}
      <ellipse cx="22" cy="125" rx="10" ry="24" rx="10" fill="#0d2a6e" transform="rotate(-10 22 125)" />
      <ellipse cx="98" cy="125" rx="10" ry="24" fill="#0d2a6e" transform="rotate(10 98 125)" />
      {/* Fist/hand right — victory pose */}
      <circle cx="103" cy="105" r="9" fill="#f5c5a3" />
      <circle cx="103" cy="96" r="5" fill="#f5c5a3" />
      {/* Neck */}
      <rect x="53" y="75" width="14" height="18" rx="6" fill="#f5c5a3" />
      {/* Head */}
      <ellipse cx="60" cy="62" rx="22" ry="24" fill="#f5c5a3" />
      {/* Hair */}
      <ellipse cx="60" cy="46" rx="22" ry="14" fill="#3b1c0a" />
      <ellipse cx="40" cy="62" rx="6" ry="18" fill="#3b1c0a" />
      <ellipse cx="80" cy="62" rx="6" ry="18" fill="#3b1c0a" />
      {/* Eyes */}
      <ellipse cx="52" cy="62" rx="3" ry="3.5" fill="#2c1a0e" />
      <ellipse cx="68" cy="62" rx="3" ry="3.5" fill="#2c1a0e" />
      {/* Eye shine */}
      <circle cx="53.2" cy="60.5" r="1" fill="white" />
      <circle cx="69.2" cy="60.5" r="1" fill="white" />
      {/* Smile */}
      <path d="M52 70 Q60 76 68 70" stroke="#c0784a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Graduation cap board */}
      <rect x="36" y="38" width="48" height="7" rx="2" fill="#0b214a" />
      {/* Cap top */}
      <ellipse cx="60" cy="38" rx="14" ry="10" fill="#0b214a" />
      {/* Tassel string */}
      <line x1="76" y1="38" x2="82" y2="55" stroke="#ffc107" strokeWidth="2" />
      <circle cx="82" cy="57" r="3" fill="#ffc107" />
      {/* Certificate / scroll in left hand */}
      <rect x="24" y="118" width="16" height="20" rx="3" fill="#fff9e6" stroke="#ffc107" strokeWidth="1" />
      <line x1="27" y1="124" x2="37" y2="124" stroke="#ccc" strokeWidth="1" />
      <line x1="27" y1="128" x2="37" y2="128" stroke="#ccc" strokeWidth="1" />
      <line x1="27" y1="132" x2="34" y2="132" stroke="#ccc" strokeWidth="1" />
    </svg>
  );
}

/* ── SVG: Trophy on pedestal ── */
function TrophySVG() {
  return (
    <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" className="ab-trophy-svg">
      {/* Cup body */}
      <path d="M25 15 Q20 50 35 70 Q50 82 65 70 Q80 50 75 15 Z"
        fill="url(#tg)" />
      {/* Cup shine */}
      <path d="M32 18 Q29 45 38 63" stroke="rgba(255,255,255,0.45)" strokeWidth="3"
        fill="none" strokeLinecap="round" />
      {/* Left handle */}
      <path d="M25 25 Q8 30 10 50 Q12 62 28 60"
        fill="none" stroke="url(#tg)" strokeWidth="8" strokeLinecap="round" />
      {/* Right handle */}
      <path d="M75 25 Q92 30 90 50 Q88 62 72 60"
        fill="none" stroke="url(#tg)" strokeWidth="8" strokeLinecap="round" />
      {/* Star on cup */}
      <text x="50" y="52" textAnchor="middle" fontSize="18" fill="rgba(255,255,255,0.7)"
        fontWeight="900">★</text>
      {/* Medal ribbon */}
      <circle cx="50" cy="10" r="8" fill="#c0392b" />
      <circle cx="50" cy="10" r="5" fill="#e74c3c" />
      <line x1="44" y1="3" x2="48" y2="15" stroke="#8e44ad" strokeWidth="2" />
      <line x1="56" y1="3" x2="52" y2="15" stroke="#3498db" strokeWidth="2" />
      {/* Stem */}
      <rect x="45" y="80" width="10" height="18" rx="2" fill="url(#tg)" />
      {/* Base plate */}
      <rect x="32" y="97" width="36" height="8" rx="3" fill="url(#tg)" />
      {/* Pedestal box */}
      <rect x="22" y="105" width="56" height="20" rx="4" fill="#dde3ec" />
      <rect x="26" y="109" width="48" height="12" rx="2" fill="#c8d0de" />
      {/* Gradient def */}
      <defs>
        <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ffd700" />
          <stop offset="50%"  stopColor="#f0a500" />
          <stop offset="100%" stopColor="#c8760a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function AchievementsBanner() {
  return (
    <section className="ab-section">
      {/* faint watermark */}
      <span className="ab-watermark" aria-hidden="true">STT</span>

      <div className="ab-inner">

        {/* LEFT — graduate illustration card */}
        <div className="ab-person-wrap">
          <div className="ab-person-card">
            {/* yellow arc decoration — same as reference */}
            <div className="ab-arc" />
            <GraduateSVG />
          </div>
        </div>

        {/* CENTER — text */}
        <div className="ab-text">
          <p className="ab-eyebrow">PROVEN TRACK RECORD</p>
          <h2 className="ab-headline">
            Hemsethu Technologies:<br />Excellence in IT Training
          </h2>
          <p className="ab-body">
            Empowering students with industry-ready skills and hands-on project experience — our proven placement records and completed projects speak for themselves.
          </p>
        </div>

        {/* STATS — 4 alternating blue / gold tiles */}
        <div className="ab-cards">
          {stats.map((s, i) => (
            <div key={i} className={`ab-card ab-card--${s.color}`}>
              <span className="ab-short">{s.short}</span>
              <AnimatedNumber target={s.value} suffix={s.suffix} />
              <span className="ab-full">{s.label}</span>
            </div>
          ))}
        </div>

        {/* RIGHT — trophy */}
        <div className="ab-trophy-wrap">
          <TrophySVG />
        </div>

      </div>
    </section>
  );
}
