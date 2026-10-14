// Scrolls to a section and keeps the URL hash in sync so sections are shareable.
// `scrollIntoView()` with no options defers to the CSS `scroll-behavior` on <html>,
// which is smooth normally and disabled under `prefers-reduced-motion`.
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView();
  window.history.replaceState(null, '', id === 'top' ? window.location.pathname : `#${id}`);
}
