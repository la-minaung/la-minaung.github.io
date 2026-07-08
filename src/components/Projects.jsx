import './Projects.css';

const projects = [
  {
    tag: 'Warehouse Automation',
    title: 'Schneider Electric Warehouse Automation',
    desc: 'Built a real-time C# service communicating with PLCs via Modbus TCP to capture carton weights and barcodes, determine automated sorting lanes, synchronize order and packaging data, and support exception handling through operational dashboards.',
    impact: 'Real-time Sorting',
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'REST APIs', 'Modbus TCP', 'HuarayTech MVSDK'],
    accent: 'cyan',
  },
  {
    tag: '3D Sorting Automation',
    title: 'Samsung SDS Asia Pacific 3D Sorting System',
    desc: 'Implemented backend logic for 3D sorting and B2B/B2C packing workflows, supporting up to 890 orders daily and 210 orders/hour. Integrated Samsung Cello logistics platform with Libiao Robotics System for automated sorting operations.',
    impact: '890 Orders/Day',
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'REST APIs', 'Libiao Robotics', 'ZPL'],
    accent: 'purple',
  },
  {
    tag: 'Warehouse Automation',
    title: 'Makino Inc Warehouse Automation',
    desc: 'Developed forklift automation integration for receiving, pallet transfer, picking, and Zebra label printing workflows. Implemented REST APIs, MS SQL Server workflows, Crystal Reports, and dashboards for warehouse performance monitoring.',
    impact: 'Forklift Automation',
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'REST APIs', 'Crystal Reports', 'Zebra/ZPL'],
    accent: 'cyan',
  },
  {
    tag: 'Robotics Integration',
    title: 'Storefriendly Robotic Storage System',
    desc: 'Developed a robotic storage management system handling 200+ automated storage shelves across 4 customer terminals. Integrated Hikrobot workflows for shelf retrieval, return, task queue management, and automated door-control synchronization.',
    impact: '200+ Shelves',
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'Hikrobot', 'Windows Services', 'REST APIs'],
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
          Selected client projects demonstrating .NET development, MS SQL Server workflows,
          REST API integrations, warehouse automation, and robotics system integration.
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
