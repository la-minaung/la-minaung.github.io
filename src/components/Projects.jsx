import './Projects.css';

const projects = [
  {
    tag: 'Warehouse Automation',
    title: 'Samsung SDS 3D Sorting System',
    desc: 'Engineered the core backend logic for a high-throughput B2B/B2C packing automation system handling 890+ orders per day. Integrated Samsung Cello WMS with Libiao Robotics for real-time sorting coordination.',
    impact: '890+ orders/day',
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'REST APIs'],
    accent: 'cyan',
  },
  {
    tag: 'Government / Mobile',
    title: 'Singapore MOE Asset Management App',
    desc: 'Delivered a full Android application for Singapore\'s Ministry of Education to manage government assets across schools. Features include barcode scanning, photo documentation, and real-time database sync.',
    impact: 'Govt. Deployed',
    tech: ['Java', 'Android Studio', 'SQLite', 'REST APIs'],
    accent: 'purple',
  },
  {
    tag: 'Robotics Integration',
    title: 'Storefriendly Robotic Storage System',
    desc: 'Architected and built a robotic storage management platform for 200+ automated shelves, integrating Hikrobot\'s AS/RS system with a custom management interface for self-storage operations.',
    impact: '200+ Auto Shelves',
    tech: ['C#', 'SQL Server', 'Hikrobot SDK', 'REST APIs'],
    accent: 'cyan',
  },
  {
    tag: 'AI / Mobile · Award Winner',
    title: 'Paddy Pest Detection App',
    desc: '🏆 1st Prize – Myanmar National Cloud & AI Contest 2019. Developed a mobile application using image classification and computer vision to help farmers identify crop diseases in real time.',
    impact: '1st Prize — National',
    tech: ['Android', 'TensorFlow', 'Computer Vision', 'Cloud AI'],
    accent: 'purple',
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <p className="section-tag">Projects</p>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-desc">
          A curated selection of enterprise and personal projects that demonstrate
          depth in backend engineering, system integration, and mobile development.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`card project-card accent-${p.accent}`}>
              <div className="project-top">
                <span className="project-tag badge">{p.tag}</span>
                <span className="project-impact">{p.impact}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
