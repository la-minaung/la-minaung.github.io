import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

// index.html sets data-theme before first paint; read it back as the initial state.
const readTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    // Only persist an explicit choice; otherwise keep following the system setting.
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
  };

  return [theme, toggle];
}
