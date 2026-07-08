import './Skills.css';

const skillGroups = [
  {
    category: 'Backend & Database',
    icon: '{ }',
    skills: ['C#', 'ASP.NET', 'MS SQL Server', 'T-SQL', 'REST APIs', 'Windows Services'],
  },
  {
    category: 'Integration',
    icon: '⚙',
    skills: ['API Integration', 'Modbus TCP', 'Hikrobot', 'Libiao Robotics', 'HuarayTech MVSDK', 'Zebra/ZPL'],
  },
  {
    category: 'Frontend / Mobile',
    icon: '◈',
    skills: ['Angular', 'JavaScript', 'Java Android', 'Kotlin', 'SQLite'],
  },
  {
    category: 'Tools & Concepts',
    icon: '◻',
    skills: ['SSMS', 'Docker', 'Firebase', 'Git', 'Crystal Reports', 'Microservices Fundamentals'],
  },
];

const coreCompetencies = [
  { title: 'C# / ASP.NET Development', pct: 92 },
  { title: 'MS SQL Server & T-SQL', pct: 88 },
  { title: 'REST API Integration', pct: 85 },
  { title: 'Windows Services & Automation', pct: 80 },
  { title: 'System Integration', pct: 80 },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <p className="section-tag">Technical Skills</p>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-desc">
          A focused stack built around C#, ASP.NET, MS SQL Server, REST APIs,
          Windows Services, warehouse automation, robotics integration, and system integration.
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
