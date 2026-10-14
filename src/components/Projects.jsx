import { ArrowRight } from 'lucide-react';
import SectionHead from './SectionHead';
import { moreWork, projects } from '../data/profile';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          index="03"
          label="Projects"
          id="projects-title"
          title="Selected client work."
          lead="Production systems for global clients. Each project is described by what I built, the scale it runs at, and how the pieces connect."
        />

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.client} className="card project-card">
              <div className="project-top">
                <span className="project-domain">{p.domain}</span>
                {p.period && <span className="project-period">{p.period}</span>}
              </div>

              <h3 className="project-title">
                {p.client}
                <span className="project-subtitle">{p.title}</span>
              </h3>

              <p className="project-impact"><span className="impact-mark" aria-hidden="true" />{p.impact}</p>

              <ul className="project-bullets">
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>

              <ol className="project-flow" aria-label="How the system connects">
                {p.flow.map((step, i) => (
                  <li key={step}>
                    {i > 0 && <ArrowRight size={14} aria-hidden="true" />}
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="project-tech">
                {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="more-work">
          <h3 className="more-title">More client work</h3>
          <ul className="more-grid">
            {moreWork.map((w) => (
              <li key={w.client} className="more-item">
                <div className="more-head">
                  <span className="more-client">{w.client}</span>
                  <span className="more-kind">{w.kind}</span>
                </div>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
