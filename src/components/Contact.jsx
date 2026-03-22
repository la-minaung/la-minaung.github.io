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
    label: 'Phone (TH)',
    value: '+66 60 805 072',
    href: 'tel:+6660805072',
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
    label: 'LinkedIn',
    value: 'linkedin.com/in/la-minaung',
    href: 'https://www.linkedin.com/in/la-min-aung-506888175',
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
            I'm open to new full-time opportunities in backend engineering and enterprise system integration. Reach out via any of the channels below.
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
            href="/Resume.pdf"
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
