import { useState } from 'react';
import './Contact.css';

const contacts = [
  {
    icon: '✉',
    label: 'Email',
    value: 'laminaung.dev@gmail.com',
    href: 'mailto:laminaung.dev@gmail.com',
    copyable: true,
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+959776966554',
    href: 'tel:+959776966554',
    copyable: true,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/la-minaung',
    href: 'https://github.com/la-minaung',
    copyable: false,
  },
  {
    icon: '💼',
    label: 'Portfolio',
    value: 'la-minaung.github.io',
    href: 'https://la-minaung.github.io',
    copyable: false,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copy = (value, label) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="section-tag">Contact</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc">
            Based in Da Nang, Vietnam, I'm open to .NET, C#, MS SQL Server, backend development, and system integration opportunities. Feel free to reach out via any of the channels below.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map(c => (
            <div key={c.label} className="card contact-card">
              <div className="contact-icon">{c.icon}</div>
              <div className="contact-info">
                <p className="contact-label">{c.label}</p>
                <a
                  href={c.href}
                  className="contact-value"
                  target={c.copyable ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  {c.value}
                </a>
              </div>
              {c.copyable && (
                <button
                  className={`copy-btn${copied === c.label ? ' copied' : ''}`}
                  onClick={() => copy(c.value, c.label)}
                  title="Copy to clipboard"
                >
                  {copied === c.label ? '✓ Copied' : 'Copy'}
                </button>
              )}
              {!c.copyable && (
                <a href={c.href} className="ext-link" target="_blank" rel="noopener noreferrer" title="Open link">↗</a>
              )}
            </div>
          ))}
        </div>

        <div className="contact-resume">
          <p className="resume-prompt">Want a full overview of my experience?</p>
          <a
            href="/La-Min-Aung-NET-Developer-Resume.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
