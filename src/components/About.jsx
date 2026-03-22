import './About.css';

const highlights = [
  { label: 'Location', value: 'Bangkok, Thailand' },
  { label: 'Languages', value: 'English, Burmese' },
  { label: 'Availability', value: 'Open to opportunities' },
  { label: 'Focus Area', value: 'Backend & System Integration' },
];

const clients = ['Samsung SDS', 'Charles & Keith', 'Singapore MOE', 'Makino Inc', 'Storefriendly'];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-inner">
        <div className="about-text">
          <p className="section-tag">About Me</p>
          <h2 className="section-title">Building Systems That<br />Drive Real Results</h2>
          <p className="about-desc">
            I'm a full stack developer focused on backend engineering and enterprise system integration.
            Over the past 3+ years at Infolog Pte Ltd, I've engineered automation platforms that process
            thousands of warehouse operations daily — working directly with industry leaders across Singapore and Asia.
          </p>
          <p className="about-desc" style={{ marginTop: '16px' }}>
            My work sits at the intersection of software and physical operations — connecting ERP systems,
            robotic platforms, and mobile applications into cohesive, reliable solutions. I take ownership
            from architecture to delivery.
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
              <p className="award-sub">Myanmar Cloud & AI Challenge, 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
