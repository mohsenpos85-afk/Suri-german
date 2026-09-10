import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Capacitor } from '@capacitor/core'
import { StatusBar, Style } from '@capacitor/status-bar'
import './index.css'
import App from './App.jsx'

if (Capacitor.isNativePlatform()) {
  void StatusBar.setOverlaysWebView({ overlay: false });
  void StatusBar.setStyle({ style: Style.Dark });
  if (Capacitor.getPlatform() === "android") {
    void StatusBar.setBackgroundColor({ color: "#FBFBFC" });
  }
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
