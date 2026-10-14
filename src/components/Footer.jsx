import { lastUpdated, profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="hazard" aria-hidden="true" />
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">LMA</span>
          <span className="footer-copy">
            © {year} {profile.name}. Built with React &amp; Vite. Updated {lastUpdated}.
          </span>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="footer-link">Email</a>
        </nav>
      </div>
    </footer>
  );
}
