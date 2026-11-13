import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './theme.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

// Dark mode: saved choice, otherwise follow the system setting.
try {
  const saved = localStorage.getItem('suri_theme');
  const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
} catch { /* storage unavailable */ }

// Icon-only buttons get an accessible name: title, else the icon's own name in the app language.
const LABELS = {
  x: { en: 'Close', tr: 'Kapat', de: 'Schließen', ku: 'داخستن' },
  'chevron-left': { en: 'Back', tr: 'Geri', de: 'Zurück', ku: 'گەڕانەوە' },
  'arrow-left': { en: 'Back', tr: 'Geri', de: 'Zurück', ku: 'گەڕانەوە' },
  'chevron-right': { en: 'Next', tr: 'İleri', de: 'Weiter', ku: 'دواتر' },
  'arrow-right': { en: 'Next', tr: 'İleri', de: 'Weiter', ku: 'دواتر' },
  'chevron-down': { en: 'Expand', tr: 'Aç', de: 'Aufklappen', ku: 'کردنەوە' },
  'chevron-up': { en: 'Collapse', tr: 'Kapat', de: 'Zuklappen', ku: 'داخستن' },
  'volume-2': { en: 'Listen', tr: 'Dinle', de: 'Anhören', ku: 'گوێبگرە' },
  'volume-1': { en: 'Listen', tr: 'Dinle', de: 'Anhören', ku: 'گوێبگرە' },
  mic: { en: 'Microphone', tr: 'Mikrofon', de: 'Mikrofon', ku: 'مایکرۆفۆن' },
  menu: { en: 'Menu', tr: 'Menü', de: 'Menü', ku: 'لیست' },
  search: { en: 'Search', tr: 'Ara', de: 'Suchen', ku: 'گەڕان' },
  'refresh-cw': { en: 'Refresh', tr: 'Yenile', de: 'Neu laden', ku: 'نوێکردنەوە' },
  'rotate-ccw': { en: 'Try again', tr: 'Tekrar dene', de: 'Nochmal', ku: 'دووبارە' },
  heart: { en: 'Favorite', tr: 'Favori', de: 'Favorit', ku: 'دڵخواز' },
  star: { en: 'Favorite', tr: 'Favori', de: 'Favorit', ku: 'دڵخواز' },
  settings: { en: 'Settings', tr: 'Ayarlar', de: 'Einstellungen', ku: 'ڕێکخستن' },
  play: { en: 'Play', tr: 'Oynat', de: 'Abspielen', ku: 'لێدان' },
  pause: { en: 'Pause', tr: 'Duraklat', de: 'Pause', ku: 'وەستان' },
  'trash-2': { en: 'Delete', tr: 'Sil', de: 'Löschen', ku: 'سڕینەوە' },
  plus: { en: 'Add', tr: 'Ekle', de: 'Hinzufügen', ku: 'زیادکردن' },
  minus: { en: 'Remove', tr: 'Çıkar', de: 'Entfernen', ku: 'لابردن' },
  check: { en: 'Confirm', tr: 'Onayla', de: 'Bestätigen', ku: 'پشتڕاستکردنەوە' },
  copy: { en: 'Copy', tr: 'Kopyala', de: 'Kopieren', ku: 'کۆپی' },
  send: { en: 'Send', tr: 'Gönder', de: 'Senden', ku: 'ناردن' },
  globe: { en: 'Translate', tr: 'Çevir', de: 'Übersetzen', ku: 'وەرگێڕان' },
  home: { en: 'Home', tr: 'Ana sayfa', de: 'Startseite', ku: 'سەرەکی' },
  house: { en: 'Home', tr: 'Ana sayfa', de: 'Startseite', ku: 'سەرەکی' },
  moon: { en: 'Switch theme', tr: 'Tema değiştir', de: 'Design wechseln', ku: 'گۆڕینی ڕووکار' },
  sun: { en: 'Switch theme', tr: 'Tema değiştir', de: 'Design wechseln', ku: 'گۆڕینی ڕووکار' },
  user: { en: 'Profile', tr: 'Profil', de: 'Profil', ku: 'پرۆفایل' },
  'log-out': { en: 'Log out', tr: 'Çıkış yap', de: 'Abmelden', ku: 'چوونەدەرەوە' },
  'help-circle': { en: 'Help', tr: 'Yardım', de: 'Hilfe', ku: 'یارمەتی' },
  info: { en: 'Info', tr: 'Bilgi', de: 'Info', ku: 'زانیاری' },
};
const TEXT_LABELS = { '🔊': 'Play audio', '✕': 'Close', '×': 'Close', '✖': 'Close', '←': 'Back', '→': 'Next', '‹': 'Back', '›': 'Next' };
function appLang() { try { return JSON.parse(localStorage.getItem('ob_data') || '{}').lang || 'tr'; } catch { return 'tr'; } }
function nameIconButtons(root) {
  const lang = appLang();
  root.querySelectorAll('button:not([aria-label]), [role="button"]:not([aria-label])').forEach((b) => {
    if ((b.textContent || '').replace(/[\p{Extended_Pictographic}\s]/gu, '')) return; // has real text
    let label = b.getAttribute('title') || b.querySelector('svg')?.getAttribute('aria-label');
    if (!label) {
      const cls = b.querySelector('svg')?.getAttribute('class') || '';
      const m = cls.match(/lucide-([a-z0-9-]+?)(?:-icon)?(?:\s|$)/);
      const entry = m && LABELS[m[1]];
      if (entry) label = entry[lang] || entry.en;
    }
    label = label || TEXT_LABELS[(b.textContent || '').trim()];
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
