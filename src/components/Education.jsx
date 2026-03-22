import './Education.css';

const certifications = [
  { title: 'Android Native Development', issuer: 'Fusion Lab Co. Ltd' },
  { title: 'Intermediate SQL Server', issuer: 'Ginger Grant · DataCamp' },
  { title: 'Hierarchical & Recursive Queries in SQL', issuer: 'DataCamp' },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-tag">Education & Certifications</p>
        <h2 className="section-title">Continuous Learning</h2>

        <div className="edu-layout">

          {/* Degree card — top, full width */}
          <div className="card edu-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-info">
              <h3 className="edu-degree">B.Sc. Computer Science</h3>
              <p className="edu-school">University of Computer Studies, Taungoo</p>
              <p className="edu-period">2015 – 2020 · 5-Year Program</p>
              <p className="edu-note">
                Studied through the final year of a 5-year Computer Science program,
                building a strong foundation in algorithms, data structures, and software engineering.
              </p>
            </div>
          </div>

          {/* Certifications — 3-column grid below */}
          <div className="edu-certs-section">
            <h3 className="cert-section-title">Certifications</h3>
            <div className="cert-grid">
              {certifications.map((c, i) => (
                <div key={i} className="card cert-card">
                  <div className="cert-check">✓</div>
                  <div>
                    <p className="cert-title">{c.title}</p>
                    <p className="cert-issuer">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
