import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

// Dark mode: saved choice, otherwise follow the system setting.
try {
  const saved = localStorage.getItem('suri_theme');
  const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
} catch { /* storage unavailable */ }

// Icon-only buttons get an accessible name (title, else the icon's own label).
function nameIconButtons(root) {
  root.querySelectorAll('button:not([aria-label])').forEach((b) => {
    if ((b.textContent || '').replace(/[\p{Extended_Pictographic}\s]/gu, '')) return; // has real text
    const label = b.getAttribute('title') || b.querySelector('svg')?.getAttribute('aria-label')
      || ({ '🔊': 'Play audio', '✕': 'Close', '×': 'Close', '✖': 'Close', '←': 'Back', '→': 'Next' })[(b.textContent || '').trim()];
    if (label) b.setAttribute('aria-label', label);
  });
}
new MutationObserver(() => nameIconButtons(document.body)).observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
