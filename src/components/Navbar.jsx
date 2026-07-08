import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const MOBILE_BREAKPOINT = 768;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  // Scroll detection + active section spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const threshold = window.innerHeight * 0.45;
      let found = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= threshold) {
          found = sections[i];
          break;
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-close menu and release scroll lock when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock/unlock body scroll — always synced to menuOpen state
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Portal is ALWAYS rendered (never conditionally unmounted)
  // so the CSS slide-out transition plays on close, not just on open.
  const mobileOverlay = createPortal(
    <>
      {/* Backdrop: fades in/out via CSS opacity transition */}
      <div
        className={`menu-backdrop${menuOpen ? ' visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      {/* Drawer: slides in/out via CSS right transition */}
      <nav className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link${active === link.href.replace('#', '') ? ' active' : ''}`}
            onClick={e => { e.preventDefault(); handleNav(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/La-Min-Aung-NET-Developer-Resume.pdf"
          className="btn btn-outline nav-resume-btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>
      </nav>
    </>,
    document.body
  );

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="navbar-inner container">
          <a
            className="navbar-logo"
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="logo-mark">LMA</span>
          </a>

          {/* Desktop nav */}
          <nav className="navbar-desktop-links">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${active === link.href.replace('#', '') ? ' active' : ''}`}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/La-Min-Aung-NET-Developer-Resume.pdf"
              className="btn btn-outline nav-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {mobileOverlay}
    </>
  );
}
