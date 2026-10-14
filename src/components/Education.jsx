import { Award, BadgeCheck, GraduationCap } from 'lucide-react';
import SectionHead from './SectionHead';
import { award, certificates, education } from '../data/profile';
import './Education.css';

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHead
          index="05"
          label="Education & recognition"
          id="education-title"
          title="Learning, and leading when it counts."
        />

        <div className="edu-grid">
          <article className="card edu-card">
            <span className="edu-icon"><GraduationCap size={22} /></span>
            <div>
              <h3 className="edu-title">{education.degree}</h3>
              <p className="edu-school">{education.school}</p>
              <p className="edu-meta">{education.period} · {education.location}</p>
              <p className="edu-note">{education.note}</p>
            </div>
          </article>

          <article className="card edu-card award">
            <span className="edu-icon"><Award size={22} /></span>
            <div>
              <h3 className="edu-title">{award.title}</h3>
              <p className="edu-meta">{award.year}</p>
              <p className="edu-note">{award.text}</p>
            </div>
          </article>
        </div>

        <h3 className="cert-heading">Certificates</h3>
        <ul className="cert-grid">
          {certificates.map((c) => (
            <li key={c.title} className="cert">
              <BadgeCheck size={20} aria-hidden="true" />
              <div>
                <p className="cert-title">{c.title}</p>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
