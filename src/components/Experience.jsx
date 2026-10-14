import SectionHead from './SectionHead';
import { experience, years } from '../data/profile';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section alt" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHead
          index="02"
          label="Experience"
          id="experience-title"
          title={`${years}+ years shipping automation into live warehouses.`}
          lead="At Infolog Pte Ltd, from WMS customization to full PLC and robotics integrations for global clients and government agencies."
        />

        <ol className="timeline">
          {experience.map((job, i) => (
            <li key={job.company} className={`timeline-item${i === 0 ? ' current' : ''}`}>
              <div className="timeline-when">
                <span className="timeline-dates">{job.start} – {job.end}</span>
                {i === 0 && <span className="chip accent">{years}+ yrs</span>}
              </div>

              <div className="timeline-body card">
                <div className="exp-header">
                  <h3 className="exp-role">{job.role}</h3>
                  <p className="exp-meta">
                    <span className="exp-company">{job.company}</span>
                    <span className="meta-sep" aria-hidden="true">·</span>
                    <span>{job.type}</span>
                    <span className="meta-sep" aria-hidden="true">·</span>
                    <span>{job.location}</span>
                  </p>
                </div>

                <p className="exp-summary">{job.summary}</p>

                {job.highlights.length > 0 && (
                  <ul className="exp-highlights">
                    {job.highlights.map((h) => (
                      <li key={h} className="exp-highlight-item">
                        <span className="highlight-dot" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="exp-tech">
                  {job.tech.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
