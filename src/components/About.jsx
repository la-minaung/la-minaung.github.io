import { Check, Cpu, Database } from 'lucide-react';
import SectionHead from './SectionHead';
import profileImg from '../assets/profile.webp';
import { about } from '../data/profile';
import './About.css';

const icons = { cpu: Cpu, database: Database, check: Check };

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead
          index="01"
          label="About"
          id="about-title"
          title="Software for places where things physically move."
        />

        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((text, i) => (
              <p key={i} className="about-desc">{text}</p>
            ))}

            <ul className="principles">
              {about.principles.map(({ icon, title, text }) => {
                const Icon = icons[icon];
                return (
                  <li key={title} className="principle">
                    <span className="principle-icon"><Icon size={18} /></span>
                    <div>
                      <h3 className="principle-title">{title}</h3>
                      <p className="principle-text">{text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="about-side">
            <div className="about-photo">
              <img src={profileImg} alt="Portrait of La Min Aung" width="280" height="280" loading="lazy" decoding="async" />
            </div>
            <dl className="card facts">
              {about.facts.map((f) => (
                <div key={f.label} className="fact">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
