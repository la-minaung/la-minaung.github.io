import { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack / Backend .NET Developer',
    company: 'Infolog Pte Ltd',
    type: 'Full-time',
    period: '10/2022 – Present',
    location: 'Remote / Asia-Pacific Projects',
    summary: 'Develop backend-focused warehouse automation, robotics integration, WMS customization, and enterprise logistics systems for global clients and government agencies. Work includes C#/.NET services, REST API integrations, MS SQL Server workflows, reporting, and robotics system integration.',
    highlights: [
      'Built real-time C# services and automation workflows for warehouse sorting and logistics operations.',
      'Implemented backend logic for Samsung SDS 3D sorting workflows supporting up to 890 orders daily and 210 orders/hour.',
      'Integrated robotics platforms including Libiao Robotics and Hikrobot with WMS workflows.',
      'Developed REST API integrations, MS SQL Server workflows, dashboards, and Crystal Reports.',
      'Supported UAT, go-live deployment, technical documentation, and project handover.',
    ],
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'T-SQL', 'REST APIs', 'Windows Services', 'Angular', 'Crystal Reports', 'ZPL', 'Modbus TCP'],
  },
  {
    role: 'Software Development Intern',
    company: 'Irrahub Co. Ltd',
    type: 'Internship',
    period: '07/2020 – 08/2020',
    location: 'Myanmar',
    summary: 'Developed an election information web platform using React.js and Node.js for candidate, voter list, and election package search.',
    highlights: [
      'Built frontend UI with React.js for public-facing election data search.',
      'Developed REST API backend features with Node.js.',
      'Collaborated in an agile team environment with daily standups.',
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'REST APIs'],
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
