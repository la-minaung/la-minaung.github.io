import { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Infolog Pte Ltd',
    type: 'Full-time',
    period: 'Oct 2022 – Present',
    location: 'Singapore (Remote)',
    summary: 'Core developer for warehouse automation and robotics integration projects across Singapore and the Asia-Pacific region. Deliver end-to-end software solutions from backend architecture to production deployment.',
    highlights: [
      'Engineered backend automation for 890+ orders/day sorting operations (Samsung SDS)',
      'Integrated multiple robotics platforms including Libiao and Hikrobot systems',
      'Delivered Android government asset management application for Singapore MOE',
      'Designed full-stack POS mobile solution with real-time Zebra printer integration',
      'Built modular warehouse management systems adopted across 5+ global brands',
    ],
    tech: ['C#', 'ASP.NET', 'Angular', 'MS SQL Server', 'Android', 'Docker', 'REST APIs', 'ZPL'],
  },
  {
    role: 'Software Development Intern',
    company: 'Irrahub Co. Ltd',
    type: 'Internship',
    period: 'Jul 2020 – Aug 2020',
    location: 'Myanmar',
    summary: 'Developed a full-featured election information web platform, gaining hands-on experience with modern JavaScript frameworks in a professional environment.',
    highlights: [
      'Built frontend UI with React JS for public-facing election data portal',
      'Developed REST API backend with Node.js and Express',
      'Collaborated in an agile team environment with daily standups',
    ],
    tech: ['React JS', 'Node.js', 'JavaScript', 'REST APIs'],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-tag">Experience</p>
        <h2 className="section-title">Professional Journey</h2>

        <div className="exp-layout">
          {/* Tabs */}
          <div className="exp-tabs">
            {experiences.map((exp, i) => (
              <button
                key={i}
                className={`exp-tab${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-company">{exp.company}</span>
                <span className="tab-period">{exp.period}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="exp-content card" key={active}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{experiences[active].role}</h3>
                <div className="exp-meta">
                  <span className="exp-company">{experiences[active].company}</span>
                  <span className="meta-sep">·</span>
                  <span className="badge">{experiences[active].type}</span>
                  <span className="meta-sep">·</span>
                  <span className="exp-location">{experiences[active].location}</span>
                </div>
              </div>
              <span className="exp-period">{experiences[active].period}</span>
            </div>

            <p className="exp-summary">{experiences[active].summary}</p>

            <ul className="exp-highlights">
              {experiences[active].highlights.map((h, i) => (
                <li key={i} className="exp-highlight-item">
                  <span className="highlight-dot" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="exp-tech">
              {experiences[active].tech.map(t => (
                <span key={t} className="badge purple">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
