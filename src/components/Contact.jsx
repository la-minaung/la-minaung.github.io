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
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.63.72.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.2-3.58.94.96-3.49-.23-.36A9.42 9.42 0 0 1 2.58 12c0-5.2 4.24-9.44 9.46-9.44a9.4 9.4 0 0 1 6.68 2.77A9.37 9.37 0 0 1 21.5 12c0 5.2-4.25 9.44-9.46 9.44m8.05-17.48A11.3 11.3 0 0 0 12.05.7C5.8.7.72 5.77.72 12c0 2 .53 3.96 1.54 5.68L.62 23.3l5.77-1.51a11.37 11.37 0 0 0 5.65 1.44h.01c6.25 0 11.34-5.08 11.34-11.32 0-3.02-1.17-5.86-3.3-8" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+959776966554',
    href: 'https://wa.me/959776966554',
    copyable: false,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/la-minaung',
    href: 'https://github.com/la-minaung',
    copyable: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M2.8 9.98h4.36V21H2.8V9.98m6.98 0h4.18v1.51h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.23 2.9 5.23 6.68V21h-4.35v-4.51c0-1.08-.02-2.46-1.5-2.46-1.5 0-1.73 1.17-1.73 2.38V21H9.78V9.98" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/laminaung-dev',
    href: 'https://www.linkedin.com/in/laminaung-dev',
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
