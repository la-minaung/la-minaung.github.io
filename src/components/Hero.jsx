import { ArrowDown, Cpu, Database, Download, MapPin, ScanBarcode, Split } from 'lucide-react';
import { clients, metrics, profile, sortingFlow, years } from '../data/profile';
import { scrollToSection } from '../utils/scroll';
import './Hero.css';

const flowIcons = { scan: ScanBarcode, database: Database, cpu: Cpu, split: Split };

const goTo = (id) => (e) => {
  e.preventDefault();
  scrollToSection(id);
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="hero-name">{profile.name}</span>
            <span className="hero-kicker-sep" />
            <span>{profile.title}</span>
            <span className="hero-kicker-sep" />
            <span className="hero-location"><MapPin size={14} /> {profile.location}</span>
          </p>

          <h1 className="hero-headline">
            I build the .NET backends that <em>move real warehouse operations.</em>
          </h1>

          <p className="hero-desc">
            {years}+ years of C#, ASP.NET and SQL Server work connecting WMS platforms to PLCs, robots and
            label printers, for clients including Samsung SDS, Schneider Electric, Charles &amp; Keith and
            Singapore MOE. I also support UAT, go-live and handover.
          </p>

          <div className="hero-actions">
            <a href={profile.resume} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <Download /> Download resume
            </a>
            <a href="#projects" className="btn btn-outline" onClick={goTo('projects')}>
              See my work
            </a>
            <a href="#contact" className="btn btn-link" onClick={goTo('contact')}>
              Get in touch <ArrowDown />
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Simplified sorting flow from the Schneider Electric project">
          <div className="flow-card card">
            <div className="flow-head">
              <span className="flow-title">How a carton gets sorted</span>
              <span className="chip accent">Simplified · Schneider Electric</span>
            </div>
            <div className="flow-steps">
              <ol>
                {sortingFlow.map((step, i) => {
                  const Icon = flowIcons[step.icon];
                  return (
                    <li key={step.label} className="flow-step" style={{ '--i': i }}>
                      <span className="flow-icon"><Icon size={18} /></span>
                      <div>
                        <p className="flow-label">
                          {step.label} <span className="flow-by">{step.by}</span>
                        </p>
                        <p className="flow-text">{step.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <span className="flow-rail" aria-hidden="true"><span className="flow-dot" /></span>
            </div>
          </div>
        </aside>
      </div>

      <div className="container hero-proof">
        <dl className="metrics">
          {metrics.map((m) => (
            <div key={m.label} className="metric">
              <dt className="metric-label">{m.label}</dt>
              <dd className="metric-value">{m.value}</dd>
              <dd className="metric-note">{m.note}</dd>
            </div>
          ))}
        </dl>

        <div className="clients">
          <p className="clients-label">Delivered for</p>
          <ul className="clients-list">
            {clients.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
