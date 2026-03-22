import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="glow-line" />
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">LMA</span>
          <span className="footer-copy">
            © {year} La Min Aung. All rights reserved.
          </span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/la-minaung" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/la-minaung" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:laminaung.dev@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
}
