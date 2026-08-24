import React from 'react';
import './SuccessModel.css';
import studentImg from '../assets/student_with_laptop.png';

/* ── Chart constants ─────────────────────────────────── */
const CX = 390;
const CY = 265;
const OUTER_R = 165;     // Increased from 148
const INNER_R = 95;      // Increased from 84
const LINE_START = OUTER_R + 12;
const LINE_END = OUTER_R + 50;
const TEXT_R = OUTER_R + 64;

/* ── Segment data ────────────────────────────────────── */
const segments = [
  { label: 'Group Discussion', pct: 5, color: '#e91e8c' },
  { label: 'Practical Exposure', pct: 50, color: '#1565c0' },
  { label: 'Live Projects', pct: 20, color: '#29b6f6' },
  { label: 'Theory Knowledge', pct: 10, color: '#f57c00' },
  { label: 'Weekly Evaluations', pct: 5, color: '#546e7a' },
  { label: 'Placement Assessments', pct: 5, color: '#43a047' },
  { label: 'Mock Interviews', pct: 5, color: '#7b1fa2' },
];

/* ── Helpers ─────────────────────────────────────────── */
function polar(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx, cy, oR, iR, startDeg, endDeg) {
  const GAP = 1.5;
  const s = startDeg + GAP;
  const e = endDeg - GAP;
  const p1 = polar(cx, cy, oR, s);
  const p2 = polar(cx, cy, oR, e);
  const p3 = polar(cx, cy, iR, e);
  const p4 = polar(cx, cy, iR, s);
  const large = (e - s) > 180 ? 1 : 0;
  return [
    `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`,
    `A ${oR} ${oR} 0 ${large} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`,
    `L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)}`,
    `A ${iR} ${iR} 0 ${large} 0 ${p4.x.toFixed(2)} ${p4.y.toFixed(2)}`,
    'Z',
  ].join(' ');
}

/* ── Pre-calculate angles ────────────────────────────── */
let cum = 0;
const processed = segments.map((s) => {
  const startDeg = cum * 3.6;
  cum += s.pct;
  const endDeg = cum * 3.6;
  const midDeg = (startDeg + endDeg) / 2;
  return { ...s, startDeg, endDeg, midDeg };
});

/* ── Component ───────────────────────────────────────── */
export default function SuccessModel() {
  return (
    <section className="sm-section">
      <div className="sm-container">

        {/* Title Centered at Top */}
        <div className="sm-title-wrapper">
          <h2 className="sm-title">
            How We Measure <br className="sm-mobile-break" />
            <span className="sm-title-accent">Your Success</span>
          </h2>
          <p className="sm-description">
            A proven, comprehensive framework designed to assess and elevate your potential at every step.
          </p>
        </div>

        <div className="sm-grid">
          {/* Left Column: Chart */}
          <div className="sm-left">
            <div className="sm-chart-wrap">
              <svg
                viewBox="0 50 780 440"
                xmlns="http://www.w3.org/2000/svg"
                className="sm-svg"
              >
                {/* Segments */}
                {processed.map((s, i) => (
                  <path
                    key={i}
                    d={arcPath(CX, CY, OUTER_R, INNER_R, s.startDeg, s.endDeg)}
                    fill={s.color}
                    className="sm-segment"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  />
                ))}

                {/* Center hole */}
                <circle cx={CX} cy={CY} r={INNER_R - 3} fill="#ffffff" className="sm-center-circle" />

                {/* Center text */}
                <g className="sm-center-content">
                  <text x={CX} y={CY - 8} textAnchor="middle" className="sm-center-pct">
                    100%
                  </text>
                  <text x={CX} y={CY + 20} textAnchor="middle" className="sm-center-sub">
                    SUCCESS MODEL
                  </text>
                </g>

                {/* Leader lines + labels */}
                {processed.map((s, i) => {
                  const lineS = polar(CX, CY, LINE_START, s.midDeg);
                  const lineE = polar(CX, CY, LINE_END, s.midDeg);
                  const txtPt = polar(CX, CY, TEXT_R, s.midDeg);

                  const radMid = ((s.midDeg - 90) * Math.PI) / 180;
                  const cosVal = Math.cos(radMid);
                  const anchor = cosVal > 0.15 ? 'start' : cosVal < -0.15 ? 'end' : 'middle';
                  const txtX = txtPt.x + (cosVal > 0.15 ? 4 : cosVal < -0.15 ? -4 : 0);

                  return (
                    <g key={i} className="sm-label-group" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                      {/* Leader line */}
                      <line
                        x1={lineS.x.toFixed(2)} y1={lineS.y.toFixed(2)}
                        x2={lineE.x.toFixed(2)} y2={lineE.y.toFixed(2)}
                        stroke={s.color}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        className="sm-line"
                      />
                      {/* Small dot at line end */}
                      <circle cx={lineE.x.toFixed(2)} cy={lineE.y.toFixed(2)} r="3.5" fill={s.color} className="sm-dot" />

                      {/* Label name */}
                      <text
                        x={txtX.toFixed(2)}
                        y={(txtPt.y - 6).toFixed(2)}
                        textAnchor={anchor}
                        className="sm-lbl-name"
                      >
                        {s.label}
                      </text>

                      {/* Percentage in segment color */}
                      <text
                        x={txtX.toFixed(2)}
                        y={(txtPt.y + 16).toFixed(2)}
                        textAnchor={anchor}
                        fill={s.color}
                        className="sm-lbl-pct"
                      >
                        {s.pct}%
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="sm-right">
            <div className="sm-image-wrapper">
              <img src={studentImg} alt="Student Success" className="sm-student-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
