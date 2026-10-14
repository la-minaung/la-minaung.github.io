import { Braces, Cpu, Database, Network } from 'lucide-react';
import SectionHead from './SectionHead';
import { coreStack, skillGroups } from '../data/profile';
import './Skills.css';

const icons = { braces: Braces, database: Database, network: Network, cpu: Cpu };

export default function Skills() {
  return (
    <section className="section alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          index="04"
          label="Skills"
          id="skills-title"
          title="The stack behind the work."
          lead="The core stack, where it shows up in my work, and the wider toolbox around it."
        />

        <ul className="core-grid">
          {coreStack.map(({ icon, title, text }) => {
            const Icon = icons[icon];
            return (
              <li key={title} className="card core-card">
                <span className="core-icon"><Icon size={20} /></span>
                <h3 className="core-title">{title}</h3>
                <p className="core-text">{text}</p>
              </li>
            );
          })}
        </ul>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-tags">
                {group.skills.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
