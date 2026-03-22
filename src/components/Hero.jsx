import { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const roles = [
  'Full Stack .NET Developer',
  'Enterprise Software Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 2800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          {/* <div className="hero-tag">
            <span className="hero-tag-dot" />
            Available for opportunities
          </div> */}

          <h1 className="hero-name">
            La Min Aung
          </h1>

          <div className="hero-role-wrap">
            <span className="hero-role">{displayed}</span>
            <span className="hero-cursor" />
          </div>

          <p className="hero-desc">
            Full Stack .NET Developer with over 3 years of experience building automation systems for large-scale enterprises. Specialized in backend engineering, database architecture, and complex robotics integration.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-value">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-value">7+</span>
              <span className="stat-label">Enterprise Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-value">5+</span>
              <span className="stat-label">Global Brands</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar-container">
              <img
                src={profileImg}
                alt="La Min Aung"
                className="avatar-img"
              />
            </div>
            {/* <div className="avatar-badge">
              <span>💼</span>
              <span>Open to Work</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}
