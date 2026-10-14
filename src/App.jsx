import { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Scroll-reveal: sections fade in as they enter the viewport.
// Content is only hidden once JS is running (the `reveal-ready` class), so a failed
// script, a crawler or a print-to-PDF never sees an empty page.
function useScrollReveal() {
  useLayoutEffect(() => {
    document.documentElement.classList.add('reveal-ready');
    return () => document.documentElement.classList.remove('reveal-ready');
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// The browser's own jump to `/#section` happens before React has rendered, so do it here.
function useInitialHashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);
}

export default function App() {
  useScrollReveal();
  useInitialHashScroll();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Experience /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Education /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </>
  );
}
