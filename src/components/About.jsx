import './About.css';

const highlights = [
  { label: 'Location', value: 'Da Nang, Vietnam' },
  { label: 'Languages', value: 'English, Burmese' },
  { label: 'Availability', value: 'Open to opportunities' },
  { label: 'Focus Area', value: '.NET, MS SQL Server & System Integration' },
];

const clients = ['Samsung SDS', 'Schneider Electric', 'Charles & Keith', 'Makino Inc', 'Storefriendly', 'Singapore MOE'];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-inner">
        <div className="about-text">
          <p className="section-tag">About Me</p>
          <h2 className="section-title">Building .NET Systems For<br />Real Operations</h2>
          <p className="about-desc">
            I'm a .NET developer focused on C#, ASP.NET, MS SQL Server, REST API integrations,
            and enterprise system integration. Over the past 3+ years at Infolog Pte Ltd,
            I have worked on warehouse automation, robotics integration, WMS customization,
            and logistics systems for clients across Singapore and Asia.
          </p>
          <p className="about-desc" style={{ marginTop: '16px' }}>
            My work connects software with real-world operations, including WMS platforms,
            PLC communication, robotics systems, Zebra/ZPL printing, reporting, and operational dashboards.
          </p>

          <div className="about-clients">
            <p className="clients-label">DELIVERED SOLUTIONS FOR</p>
            <div className="clients-list">
              {clients.map(c => (
                <span key={c} className="badge">{c}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-sidebar">
          <div className="card about-info-card">
            <h3 className="info-card-title">Quick Facts</h3>
            <ul className="info-list">
              {highlights.map(h => (
                <li key={h.label} className="info-item">
                  <span className="info-label">{h.label}</span>
                  <span className="info-value">{h.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card about-award-card">
            <div className="award-icon">🏆</div>
            <div>
              <p className="award-title">1st Prize — National AI Contest</p>
              <p className="award-sub">Myanmar National Cloud & AI Contest, 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
