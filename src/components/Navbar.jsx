import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Download, Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import { scrollToSection } from '../utils/scroll';
import { profile } from '../data/profile';
import './Navbar.css';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const MOBILE_BREAKPOINT = 768;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [theme, toggleTheme] = useTheme();
  const menuButtonRef = useRef(null);

  // Scroll state + active-section spy, throttled to one update per frame
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);
      const threshold = window.innerHeight * 0.45;
      let found = '';
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          found = navLinks[i].id;
          break;
        }
      }
      setActive(found);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Auto-close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll while the drawer is open; Escape closes it and returns focus to the toggle
  useEffect(() => {
    if (!menuOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(id);
  };

  const otherTheme = theme === 'light' ? 'dark' : 'light';
  const themeButton = (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${otherTheme} theme`}
      title={`Switch to ${otherTheme} theme`}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );

  const links = navLinks.map(({ label, id }) => (
    <a
      key={id}
      href={`#${id}`}
      className={`nav-link${active === id ? ' active' : ''}`}
      aria-current={active === id ? 'true' : undefined}
      onClick={(e) => handleNav(e, id)}
    >
      {label}
    </a>
  ));

  // The drawer is always rendered (never conditionally unmounted)
  // so the CSS slide-out transition plays on close, not just on open.
  const mobileOverlay = createPortal(
    <>
      <div
        className={`menu-backdrop${menuOpen ? ' visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <nav id="mobile-menu" className={`mobile-drawer${menuOpen ? ' open' : ''}`} aria-label="Mobile" aria-hidden={!menuOpen}>
        {links}
        <a
          href={profile.resume}
          className="btn btn-primary nav-resume-btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <Download /> Resume
        </a>
      </nav>
    </>,
    document.body
  );

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="navbar-inner container">
          {/* aria-label starts with the visible text so the accessible name contains it (WCAG 2.5.3) */}
          <a
            className="navbar-logo"
            href="#top"
            aria-label={`LMA ${profile.name}, back to top`}
            onClick={(e) => handleNav(e, 'top')}
          >
            <span className="logo-mark">LMA</span>{' '}
            <span className="logo-name">{profile.name}</span>
          </a>

          <nav className="navbar-desktop-links" aria-label="Primary">
            {links}
            {themeButton}
            <a
              href={profile.resume}
              className="btn btn-primary nav-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download /> Resume
            </a>
          </nav>

          <div className="navbar-mobile-actions">
            {themeButton}
            <button
              ref={menuButtonRef}
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {mobileOverlay}
    </>
  );
}
