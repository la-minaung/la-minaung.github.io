import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react';
import SectionHead from './SectionHead';
import { profile } from '../data/profile';
import './Contact.css';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.63.72.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.2-3.58.94.96-3.49-.23-.36A9.42 9.42 0 0 1 2.58 12c0-5.2 4.24-9.44 9.46-9.44a9.4 9.4 0 0 1 6.68 2.77A9.37 9.37 0 0 1 21.5 12c0 5.2-4.25 9.44-9.46 9.44m8.05-17.48A11.3 11.3 0 0 0 12.05.7C5.8.7.72 5.77.72 12c0 2 .53 3.96 1.54 5.68L.62 23.3l5.77-1.51a11.37 11.37 0 0 0 5.65 1.44h.01c6.25 0 11.34-5.08 11.34-11.32 0-3.02-1.17-5.86-3.3-8" />
  </svg>
);

const channels = [
  { icon: <Mail size={20} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copyable: true },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/laminaung-dev', href: profile.linkedin },
  { icon: <Github size={20} />, label: 'GitHub', value: 'github.com/la-minaung', href: profile.github },
  { icon: <WhatsAppIcon />, label: 'WhatsApp', value: profile.phoneDisplay, href: `https://wa.me/${profile.phone.replace(/\D/g, '')}` },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(0);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context / permissions): the mailto link still works.
    }
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-intro">
          <SectionHead
            index="06"
            label="Contact"
            id="contact-title"
            title="Let's build something that moves."
            lead={`Based in ${profile.location} (${profile.timezone}) and open to .NET, C#, MS SQL Server, backend and system-integration opportunities. Reach me by email, LinkedIn or WhatsApp.`}
          />

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary"><Mail /> Email me</a>
            <a href={profile.resume} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <Download /> Download resume
            </a>
          </div>
        </div>

        <ul className="channels">
          {channels.map((c) => (
            <li key={c.label} className="card channel">
              <span className="channel-icon">{c.icon}</span>
              <a
                href={c.href}
                className="channel-main"
                target={c.copyable ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <span className="channel-label">{c.label}</span>
                <span className="channel-value">{c.value}</span>
              </a>
              {c.copyable ? (
                <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={copyEmail} aria-label="Copy email address">
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              ) : (
                <ArrowUpRight size={18} className="channel-arrow" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
