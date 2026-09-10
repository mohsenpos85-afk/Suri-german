import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Capacitor } from '@capacitor/core'
import { StatusBar, Style } from '@capacitor/status-bar'
import * as Sentry from '@sentry/react'
import './index.css'
import App from './App.jsx'

const sentryDsn = import.meta.env.VITE_SENTRY_DSN;
if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    environment: import.meta.env.MODE,
    sendDefaultPii: false,
  });
}
if (Capacitor.isNativePlatform()) {
  void StatusBar.setOverlaysWebView({ overlay: false });
  void StatusBar.setStyle({ style: Style.Dark });
  if (Capacitor.getPlatform() === "android") {
    void StatusBar.setBackgroundColor({ color: "#FBFBFC" });
  }
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<div role="alert" style={{ padding: 24, fontFamily: "system-ui", textAlign: "center" }}>SURI konnte nicht gestartet werden. Bitte öffnen Sie die App erneut.</div>}>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>,
)
