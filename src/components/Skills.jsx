import './Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['C#', 'SQL', 'JavaScript', 'Java', 'Kotlin'],
  },
  {
    category: 'Frameworks & Platforms',
    icon: '⚙',
    skills: ['ASP.NET Core', 'MS SQL Server', 'Angular', 'Android Studio', 'Docker', 'Firebase', 'Crystal Reports'],
  },
  {
    category: 'Specializations',
    icon: '◈',
    skills: ['Warehouse Automation', 'Robotics Integration', 'RESTful API Design', 'Database Architecture', 'ERP Integration', 'ZPL / Label Printing'],
  },
  {
    category: 'Tools & Methods',
    icon: '◻',
    skills: ['SSMS', 'Git', 'Postman', 'Agile / Scrum', 'System Design', 'Technical Documentation'],
  },
];

const coreCompetencies = [
  { title: 'Backend Engineering', pct: 92 },
  { title: 'Database Design & Optimization', pct: 88 },
  { title: 'API Design & Integration', pct: 85 },
  { title: 'Mobile Development (Android)', pct: 75 },
  { title: 'System Architecture', pct: 80 },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <p className="section-tag">Technical Skills</p>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-desc">
          A focused tech stack built around enterprise .NET development, SQL database engineering,
          and real-world system integration.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="card skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="competency-section">
          <h3 className="competency-title">Core Competencies</h3>
          <div className="competency-bars">
            {coreCompetencies.map((c) => (
              <div key={c.title} className="competency-item">
                <div className="competency-label">
                  <span>{c.title}</span>
                  <span className="competency-pct">{c.pct}%</span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ '--pct': `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
