import { Component } from 'react';

const T = {
  tr: { h: 'Bir şeyler ters gitti', p: 'Uygulama beklenmedik bir hata verdi. İlerlemen kayıtlı, sayfayı yenilemek yeterli olmalı.', b: 'Yenile', d: 'Teknik ayrıntı' },
  en: { h: 'Something went wrong', p: 'The app hit an unexpected error. Your progress is saved; reloading should fix it.', b: 'Reload', d: 'Technical details' },
  ku: { h: 'شتێک هەڵە بوو', p: 'ئەپەکە توشی هەڵەیەکی چاوەڕواننەکراو بوو. پێشکەوتنت پاشەکەوتکراوە؛ نوێکردنەوەی پەڕەکە بەسە.', b: 'نوێکردنەوە', d: 'وردەکاری تەکنیکی' },
  ar: { h: 'حدث خطأ ما', p: 'واجه التطبيق خطأً غير متوقع. تقدمك محفوظ؛ أعد تحميل الصفحة.', b: 'إعادة التحميل', d: 'تفاصيل تقنية' },
  uk: { h: 'Щось пішло не так', p: 'У застосунку сталася несподівана помилка. Твій прогрес збережено; достатньо оновити сторінку.', b: 'Оновити', d: 'Технічні деталі' },
  fa: { h: 'مشکلی پیش آمد', p: 'برنامه با خطای غیرمنتظره روبه‌رو شد. پیشرفت تو ذخیره است؛ صفحه را دوباره بارگذاری کن.', b: 'بارگذاری مجدد', d: 'جزئیات فنی' },
  es: { h: 'Algo salió mal', p: 'La aplicación tuvo un error inesperado. Tu progreso está guardado; recarga la página.', b: 'Recargar', d: 'Detalles técnicos' },
};

function storedLang() {
  try { return JSON.parse(localStorage.getItem('ob_data') || '{}').lang || 'tr'; } catch { return 'tr'; }
}

export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('App crashed:', error, info && info.componentStack); }
  render() {
    if (!this.state.error) return this.props.children;
    const lang = storedLang();
    const t = T[lang] || T.tr;
    const rtl = lang === 'ar' || lang === 'ku' || lang === 'fa';
    return (
      <div dir={rtl ? 'rtl' : 'ltr'} role="alert" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: '#FBFBFC', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ maxWidth: 380, textAlign: 'center' }}>
          <div style={{ fontSize: 44, marginBottom: 8 }} aria-hidden="true">⚠️</div>
          <h1 style={{ fontSize: 20, margin: '0 0 8px', color: '#18181B' }}>{t.h}</h1>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: '#52525B', margin: '0 0 20px' }}>{t.p}</p>
          <button type="button" onClick={() => window.location.reload()}
            style={{ background: 'linear-gradient(135deg,#5B5BD6,#4B45C4)', color: '#fff', border: 'none', borderRadius: 14, padding: '12px 28px', fontSize: 15, fontWeight: 700, cursor: 'pointer', minHeight: 44 }}>
            {t.b}
          </button>
          <details style={{ marginTop: 20, textAlign: 'left', direction: 'ltr', fontSize: 12, color: '#71717A' }}>
            <summary style={{ cursor: 'pointer' }}>{t.d}</summary>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', marginTop: 8 }}>{String(this.state.error && (this.state.error.stack || this.state.error.message || this.state.error))}</pre>
          </details>
        </div>
      </div>
    );
  }
}
