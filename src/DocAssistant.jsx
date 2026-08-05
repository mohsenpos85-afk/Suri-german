import React, { useState, useRef, useEffect } from "react";
import {
  ScanText, Upload, Camera, FileText, Sparkles, Calendar, AlertTriangle,
  Check, HelpCircle, ArrowRight, MessageCircle, Copy, Share2, Download,
  X, ChevronLeft, Info, Languages, ListChecks, Phone, Mail, MapPin, Hash,
  Building2, Clock, Loader2, Send, Wand2, Banknote, FileSignature, ShieldCheck,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────
   Dokumenten-Assistent — AI document understanding assistant
   Self-contained. Wired into App.jsx menu. Uses the app's callClaude proxy
   (Claude vision) so the AI reads + explains scanned/imported documents in
   the user's selected app language.
   ──────────────────────────────────────────────────────────────────────── */

const RTL = new Set(["ar", "ku", "fa"]);
const LANG_NAME = {
  es: "Spanish", en: "English", ar: "Arabic", tr: "Turkish", fr: "French",
  uk: "Ukrainian", ku: "Sorani Kurdish", fa: "Persian", ja: "Japanese", de: "German",
};

// UI chrome strings. AI-generated content is always localised via the prompt;
// these are the static labels. Falls back to English for any missing key/lang.
const LABELS = {
  en: {
    title: "Document Assistant", subtitle: "Scan, understand and analyse documents.",
    ob1t: "Understand any document", ob1b: "Official letters, forms, contracts, invoices — the AI explains what they mean, not just a translation.",
    ob2t: "Scan or import", ob2b: "Take a photo or pick a file. No document type selection needed — it's recognised automatically.",
    ob3t: "Ask anything", ob3b: "Chat with the assistant about your document: deadlines, next steps, or draft a reply.",
    skip: "Skip", next: "Continue", start: "Get started",
    takePhoto: "Take a photo", importFile: "Import file", homeHint: "Photo, PDF or image of a document",
    recent: "Recent", noRecent: "Your scanned documents will appear here.",
    analysing: "Analysing document…", analysingHint: "Reading and understanding your document",
    detectedLang: "Language", docType: "Document type", confidence: "Confidence",
    s_summary: "Summary", s_purpose: "Why did I receive this?", s_info: "Important information",
    s_todo: "What should I do?", s_warn: "Important warnings", s_detail: "Detailed explanation",
    s_faq: "Frequently asked questions", s_next: "Suggested next steps", s_trans: "Original text",
    showOriginal: "Original", showApp: "Explained", quickTitle: "Quick actions",
    qa_reply: "Reply to this letter", qa_summary: "Summarise", qa_simple: "Explain simply",
    qa_checklist: "Create checklist", qa_dates: "Extract dates", qa_addr: "Extract addresses",
    qa_phone: "Extract phone numbers", qa_email: "Extract emails", qa_iban: "Extract IBAN",
    qa_copy: "Copy text", qa_share: "Share",
    chatTitle: "Ask about this document", chatPlaceholder: "Ask anything about this document…",
    disclaimer: "This explanation is intended to help you understand the document. It does not replace professional legal, tax or medical advice.",
    newScan: "New scan", back: "Back", errTitle: "Something went wrong",
    signIn: "Please sign in to use the Document Assistant.", retry: "Try again",
    copied: "Copied", thinking: "Thinking…",
  },
  tr: {
    title: "Belge Asistanı", subtitle: "Belgeleri tarayın, anlayın ve analiz edin.",
    ob1t: "Her belgeyi anlayın", ob1b: "Resmi yazılar, formlar, sözleşmeler, faturalar — yapay zekâ çeviri değil, ne anlama geldiğini açıklar.",
    ob2t: "Tara veya içe aktar", ob2b: "Fotoğraf çek ya da dosya seç. Belge türü seçmene gerek yok — otomatik tanınır.",
    ob3t: "İstediğini sor", ob3b: "Belgen hakkında asistanla konuş: son tarihler, sonraki adımlar veya bir yanıt taslağı.",
    skip: "Atla", next: "Devam", start: "Başla",
    takePhoto: "Fotoğraf çek", importFile: "Dosya seç", homeHint: "Belgenin fotoğrafı, PDF veya görseli",
    recent: "Son taramalar", noRecent: "Taradığın belgeler burada görünecek.",
    analysing: "Belge analiz ediliyor…", analysingHint: "Belgen okunuyor ve anlaşılıyor",
    detectedLang: "Dil", docType: "Belge türü", confidence: "Güven",
    s_summary: "Özet", s_purpose: "Bunu neden aldım?", s_info: "Önemli bilgiler",
    s_todo: "Ne yapmalıyım?", s_warn: "Önemli uyarılar", s_detail: "Ayrıntılı açıklama",
    s_faq: "Sık sorulan sorular", s_next: "Önerilen adımlar", s_trans: "Orijinal metin",
    showOriginal: "Orijinal", showApp: "Açıklama", quickTitle: "Hızlı işlemler",
    qa_reply: "Bu yazıya yanıt", qa_summary: "Özetle", qa_simple: "Basitçe açıkla",
    qa_checklist: "Kontrol listesi", qa_dates: "Tarihleri çıkar", qa_addr: "Adresleri çıkar",
    qa_phone: "Telefonları çıkar", qa_email: "E-postaları çıkar", qa_iban: "IBAN çıkar",
    qa_copy: "Metni kopyala", qa_share: "Paylaş",
    chatTitle: "Bu belge hakkında sor", chatPlaceholder: "Bu belge hakkında istediğini sor…",
    disclaimer: "Bu açıklama belgeyi anlamana yardımcı olmak içindir. Profesyonel hukuki, mali veya tıbbi danışmanlığın yerini tutmaz.",
    newScan: "Yeni tarama", back: "Geri", errTitle: "Bir sorun oluştu",
    signIn: "Belge Asistanını kullanmak için lütfen giriş yap.", retry: "Tekrar dene",
    copied: "Kopyalandı", thinking: "Düşünüyor…",
  },
  ar: {
    title: "مساعد المستندات", subtitle: "امسح المستندات وافهمها وحلّلها.",
    ob1t: "افهم أي مستند", ob1b: "الرسائل الرسمية والنماذج والعقود والفواتير — يشرح الذكاء الاصطناعي معناها، وليس مجرد ترجمة.",
    ob2t: "امسح أو استورد", ob2b: "التقط صورة أو اختر ملفًا. لا حاجة لاختيار نوع المستند — يُتعرّف عليه تلقائيًا.",
    ob3t: "اسأل أي شيء", ob3b: "تحدث مع المساعد عن مستندك: المواعيد النهائية والخطوات التالية أو صياغة رد.",
    skip: "تخطٍ", next: "متابعة", start: "ابدأ",
    takePhoto: "التقط صورة", importFile: "استيراد ملف", homeHint: "صورة أو PDF أو صورة للمستند",
    recent: "الأخيرة", noRecent: "ستظهر مستنداتك الممسوحة هنا.",
    analysing: "جارٍ تحليل المستند…", analysingHint: "تجري قراءة مستندك وفهمه",
    detectedLang: "اللغة", docType: "نوع المستند", confidence: "الثقة",
    s_summary: "ملخص", s_purpose: "لماذا استلمت هذا؟", s_info: "معلومات مهمة",
    s_todo: "ماذا عليّ أن أفعل؟", s_warn: "تحذيرات مهمة", s_detail: "شرح مفصّل",
    s_faq: "أسئلة شائعة", s_next: "الخطوات المقترحة", s_trans: "النص الأصلي",
    showOriginal: "الأصلي", showApp: "الشرح", quickTitle: "إجراءات سريعة",
    qa_reply: "الرد على الرسالة", qa_summary: "لخّص", qa_simple: "اشرح ببساطة",
    qa_checklist: "أنشئ قائمة", qa_dates: "استخرج التواريخ", qa_addr: "استخرج العناوين",
    qa_phone: "استخرج الهواتف", qa_email: "استخرج الإيميلات", qa_iban: "استخرج IBAN",
    qa_copy: "انسخ النص", qa_share: "مشاركة",
    chatTitle: "اسأل عن هذا المستند", chatPlaceholder: "اسأل أي شيء عن هذا المستند…",
    disclaimer: "هذا الشرح يهدف لمساعدتك على فهم المستند. وهو لا يغني عن الاستشارة القانونية أو الضريبية أو الطبية المهنية.",
    newScan: "مسح جديد", back: "رجوع", errTitle: "حدث خطأ ما",
    signIn: "الرجاء تسجيل الدخول لاستخدام مساعد المستندات.", retry: "أعد المحاولة",
    copied: "تم النسخ", thinking: "يفكر…",
  },
  fa: {
    title: "دستیار اسناد", subtitle: "اسناد را اسکن، درک و تحلیل کنید.",
    ob1t: "هر سندی را بفهمید", ob1b: "نامه‌های اداری، فرم‌ها، قراردادها و صورت‌حساب‌ها — هوش مصنوعی معنای آن‌ها را توضیح می‌دهد، نه صرفاً ترجمه.",
    ob2t: "اسکن یا وارد کردن", ob2b: "عکس بگیرید یا فایلی انتخاب کنید. نیازی به انتخاب نوع سند نیست — خودکار تشخیص داده می‌شود.",
    ob3t: "هر چه می‌خواهید بپرسید", ob3b: "دربارهٔ سندتان با دستیار گفتگو کنید: مهلت‌ها، گام‌های بعدی یا نوشتن یک پاسخ.",
    skip: "رد کردن", next: "ادامه", start: "شروع",
    takePhoto: "عکس بگیرید", importFile: "وارد کردن فایل", homeHint: "عکس، PDF یا تصویرِ سند",
    recent: "اخیر", noRecent: "اسناد اسکن‌شدهٔ شما اینجا نمایش داده می‌شوند.",
    analysing: "در حال تحلیل سند…", analysingHint: "سند شما در حال خوانده‌شدن و درک است",
    detectedLang: "زبان", docType: "نوع سند", confidence: "اطمینان",
    s_summary: "خلاصه", s_purpose: "چرا این را دریافت کردم؟", s_info: "اطلاعات مهم",
    s_todo: "چه باید بکنم؟", s_warn: "هشدارهای مهم", s_detail: "توضیح کامل",
    s_faq: "پرسش‌های پرتکرار", s_next: "گام‌های پیشنهادی", s_trans: "متن اصلی",
    showOriginal: "اصلی", showApp: "توضیح", quickTitle: "اقدامات سریع",
    qa_reply: "پاسخ به این نامه", qa_summary: "خلاصه کن", qa_simple: "ساده توضیح بده",
    qa_checklist: "فهرست کارها", qa_dates: "استخراج تاریخ‌ها", qa_addr: "استخراج نشانی‌ها",
    qa_phone: "استخراج تلفن‌ها", qa_email: "استخراج ایمیل‌ها", qa_iban: "استخراج IBAN",
    qa_copy: "کپی متن", qa_share: "اشتراک",
    chatTitle: "دربارهٔ این سند بپرسید", chatPlaceholder: "هر چه می‌خواهید دربارهٔ این سند بپرسید…",
    disclaimer: "این توضیح برای کمک به درک سند است و جایگزین مشاورهٔ حرفه‌ای حقوقی، مالیاتی یا پزشکی نیست.",
    newScan: "اسکن جدید", back: "بازگشت", errTitle: "مشکلی پیش آمد",
    signIn: "برای استفاده از دستیار اسناد لطفاً وارد شوید.", retry: "دوباره تلاش کنید",
    copied: "کپی شد", thinking: "در حال فکر…",
  },
  ku: {
    title: "یاریدەدەری بەڵگەنامە", subtitle: "بەڵگەنامەکان سکان بکە، تێبگە و شیبکەرەوە.",
    ob1t: "هەر بەڵگەنامەیەک تێبگە", ob1b: "نامە فەرمییەکان، فۆرم، گرێبەست و پسووڵەکان — زیرەکی دەستکرد ماناکەی ڕوون دەکاتەوە، نەک تەنها وەرگێڕان.",
    ob2t: "سکان یان هێنان", ob2b: "وێنە بگرە یان فایلێک هەڵبژێرە. پێویست بە هەڵبژاردنی جۆری بەڵگەنامە ناکات — خۆکارانە ناسراو دەبێت.",
    ob3t: "هەرچی بپرسە", ob3b: "لەگەڵ یاریدەدەر دەربارەی بەڵگەنامەکەت قسە بکە: کۆتا کات، هەنگاوەکانی داهاتوو یان نووسینی وەڵام.",
    skip: "بازدان", next: "بەردەوامبوون", start: "دەستپێبکە",
    takePhoto: "وێنە بگرە", importFile: "فایل هێنان", homeHint: "وێنە، PDF یان وێنەی بەڵگەنامە",
    recent: "دواییەکان", noRecent: "بەڵگەنامە سکانکراوەکانت لێرە دەردەکەون.",
    analysing: "بەڵگەنامە شیدەکرێتەوە…", analysingHint: "بەڵگەنامەکەت دەخوێندرێتەوە و تێدەگەیت",
    detectedLang: "زمان", docType: "جۆری بەڵگەنامە", confidence: "دڵنیایی",
    s_summary: "کورتە", s_purpose: "بۆچی ئەمەم پێگەیشت؟", s_info: "زانیاری گرنگ",
    s_todo: "دەبێت چی بکەم؟", s_warn: "ئاگاداری گرنگ", s_detail: "ڕوونکردنەوەی وردەکاری",
    s_faq: "پرسیارە دووبارەکان", s_next: "هەنگاوە پێشنیارکراوەکان", s_trans: "دەقی ڕەسەن",
    showOriginal: "ڕەسەن", showApp: "ڕوونکراوە", quickTitle: "کردارە خێراکان",
    qa_reply: "وەڵامی نامەکە", qa_summary: "کورتی بکەرەوە", qa_simple: "ساکار ڕوونی بکەرەوە",
    qa_checklist: "لیستی کارەکان", qa_dates: "بەروارەکان دەربهێنە", qa_addr: "ناونیشانەکان دەربهێنە",
    qa_phone: "تەلەفۆنەکان دەربهێنە", qa_email: "ئیمەیڵەکان دەربهێنە", qa_iban: "IBAN دەربهێنە",
    qa_copy: "دەق کۆپی بکە", qa_share: "هاوبەشکردن",
    chatTitle: "دەربارەی ئەم بەڵگەنامەیە بپرسە", chatPlaceholder: "هەرچی دەربارەی ئەم بەڵگەنامەیە بپرسە…",
    disclaimer: "ئەم ڕوونکردنەوەیە بۆ یارمەتیدانتە بۆ تێگەیشتن لە بەڵگەنامەکە. جێگای ڕاوێژی پیشەیی یاسایی، باجی یان پزیشکی ناگرێتەوە.",
    newScan: "سکانی نوێ", back: "گەڕانەوە", errTitle: "هەڵەیەک ڕوویدا",
    signIn: "تکایە بچۆ ژوورەوە بۆ بەکارهێنانی یاریدەدەری بەڵگەنامە.", retry: "دووبارە هەوڵبدە",
    copied: "کۆپی کرا", thinking: "بیردەکاتەوە…",
  },
  es: {
    title: "Asistente de documentos", subtitle: "Escanea, comprende y analiza documentos.",
    ob1t: "Comprende cualquier documento", ob1b: "Cartas oficiales, formularios, contratos, facturas: la IA explica lo que significan, no solo una traducción.",
    ob2t: "Escanea o importa", ob2b: "Haz una foto o elige un archivo. No hace falta elegir el tipo — se reconoce automáticamente.",
    ob3t: "Pregunta lo que quieras", ob3b: "Habla con el asistente sobre tu documento: plazos, próximos pasos o redactar una respuesta.",
    skip: "Omitir", next: "Continuar", start: "Empezar",
    takePhoto: "Hacer foto", importFile: "Importar archivo", homeHint: "Foto, PDF o imagen de un documento",
    recent: "Recientes", noRecent: "Tus documentos escaneados aparecerán aquí.",
    analysing: "Analizando documento…", analysingHint: "Leyendo y comprendiendo tu documento",
    detectedLang: "Idioma", docType: "Tipo de documento", confidence: "Confianza",
    s_summary: "Resumen", s_purpose: "¿Por qué recibí esto?", s_info: "Información importante",
    s_todo: "¿Qué debo hacer?", s_warn: "Avisos importantes", s_detail: "Explicación detallada",
    s_faq: "Preguntas frecuentes", s_next: "Próximos pasos sugeridos", s_trans: "Texto original",
    showOriginal: "Original", showApp: "Explicado", quickTitle: "Acciones rápidas",
    qa_reply: "Responder a la carta", qa_summary: "Resumir", qa_simple: "Explicar simple",
    qa_checklist: "Crear lista", qa_dates: "Extraer fechas", qa_addr: "Extraer direcciones",
    qa_phone: "Extraer teléfonos", qa_email: "Extraer correos", qa_iban: "Extraer IBAN",
    qa_copy: "Copiar texto", qa_share: "Compartir",
    chatTitle: "Pregunta sobre este documento", chatPlaceholder: "Pregunta lo que quieras sobre este documento…",
    disclaimer: "Esta explicación busca ayudarte a entender el documento. No sustituye el asesoramiento profesional legal, fiscal o médico.",
    newScan: "Nuevo escaneo", back: "Atrás", errTitle: "Algo salió mal",
    signIn: "Inicia sesión para usar el Asistente de documentos.", retry: "Reintentar",
    copied: "Copiado", thinking: "Pensando…",
  },
};
// Privacy / consent strings (merged into LABELS)
const PV = {
  en: { pv_title: "Privacy & consent", pv_b1: "To analyse it, your document is sent securely to the AI service.", pv_b2: "It is used only to create your explanation — never for advertising.", pv_b3: "Only scan documents that belong to you or that you are allowed to use.", pv_accept: "I understand & continue", pv_cancel: "Cancel", pv_foot: "This does not replace professional legal, tax or medical advice." },
  tr: { pv_title: "Gizlilik ve onay", pv_b1: "Belgeni analiz etmek için içeriği güvenli şekilde yapay zekâ servisine gönderilir.", pv_b2: "Yalnızca açıklamanı oluşturmak için kullanılır — asla reklam için değil.", pv_b3: "Sadece sana ait olan veya kullanma hakkın olan belgeleri tara.", pv_accept: "Anladım, devam et", pv_cancel: "İptal", pv_foot: "Bu, profesyonel hukuki, mali veya tıbbi danışmanlığın yerini tutmaz." },
  ar: { pv_title: "الخصوصية والموافقة", pv_b1: "لتحليل مستندك، يُرسَل محتواه بشكل آمن إلى خدمة الذكاء الاصطناعي.", pv_b2: "يُستخدم فقط لإنشاء الشرح الخاص بك — وليس للإعلانات أبدًا.", pv_b3: "امسح فقط المستندات التي تملكها أو المسموح لك باستخدامها.", pv_accept: "فهمت، متابعة", pv_cancel: "إلغاء", pv_foot: "هذا لا يغني عن الاستشارة القانونية أو الضريبية أو الطبية المهنية." },
  fa: { pv_title: "حریم خصوصی و رضایت", pv_b1: "برای تحلیل سند، محتوای آن به‌صورت امن به سرویس هوش مصنوعی فرستاده می‌شود.", pv_b2: "فقط برای ساختن توضیحِ شما استفاده می‌شود — هرگز برای تبلیغات.", pv_b3: "فقط اسنادی را اسکن کنید که متعلق به شماست یا اجازهٔ استفاده از آن‌ها را دارید.", pv_accept: "متوجه شدم، ادامه", pv_cancel: "انصراف", pv_foot: "این جایگزین مشاورهٔ حرفه‌ای حقوقی، مالیاتی یا پزشکی نیست." },
  ku: { pv_title: "تایبەتێتی و ڕەزامەندی", pv_b1: "بۆ شیکردنەوەی بەڵگەنامەکەت، ناوەڕۆکەکەی بە شێوەیەکی پارێزراو بۆ خزمەتگوزاری زیرەکی دەستکرد دەنێردرێت.", pv_b2: "تەنها بۆ دروستکردنی ڕوونکردنەوەکەت بەکاردێت — هەرگیز بۆ ڕیکلام نا.", pv_b3: "تەنها ئەو بەڵگەنامانە سکان بکە کە هی خۆتن یان مۆڵەتی بەکارهێنانیانت هەیە.", pv_accept: "تێگەیشتم، بەردەوامبە", pv_cancel: "هەڵوەشاندنەوە", pv_foot: "ئەمە جێگای ڕاوێژی پیشەیی یاسایی، باجی یان پزیشکی ناگرێتەوە." },
  es: { pv_title: "Privacidad y consentimiento", pv_b1: "Para analizarlo, tu documento se envía de forma segura al servicio de IA.", pv_b2: "Se usa solo para crear tu explicación, nunca para publicidad.", pv_b3: "Escanea solo documentos que te pertenezcan o que tengas permiso de usar.", pv_accept: "Entiendo y continúo", pv_cancel: "Cancelar", pv_foot: "Esto no sustituye el asesoramiento profesional legal, fiscal o médico." },
};
Object.keys(PV).forEach((k) => { LABELS[k] = Object.assign(LABELS[k] || {}, PV[k]); });

// Extra strings (PDF / share / calendar / recent)
const XTRA = {
  en: { qa_pdf: "Export as PDF", qa_share: "Share", qa_calendar: "Add to calendar", noDates: "No dates found", shared: "Shared", openRecent: "Open" },
  tr: { qa_pdf: "PDF olarak dışa aktar", qa_share: "Paylaş", qa_calendar: "Takvime ekle", noDates: "Tarih bulunamadı", shared: "Paylaşıldı", openRecent: "Aç" },
  ar: { qa_pdf: "تصدير كـ PDF", qa_share: "مشاركة", qa_calendar: "أضف إلى التقويم", noDates: "لا توجد تواريخ", shared: "تمت المشاركة", openRecent: "فتح" },
  fa: { qa_pdf: "خروجی PDF", qa_share: "اشتراک", qa_calendar: "افزودن به تقویم", noDates: "تاریخی یافت نشد", shared: "به اشتراک گذاشته شد", openRecent: "باز کردن" },
  ku: { qa_pdf: "هەناردە بکە وەک PDF", qa_share: "هاوبەشکردن", qa_calendar: "زیادکردن بۆ ساڵنامە", noDates: "هیچ بەروارێک نەدۆزرایەوە", shared: "هاوبەشکرا", openRecent: "کردنەوە" },
  es: { qa_pdf: "Exportar como PDF", qa_share: "Compartir", qa_calendar: "Añadir al calendario", noDates: "No se encontraron fechas", shared: "Compartido", openRecent: "Abrir" },
};
Object.keys(XTRA).forEach((k) => { LABELS[k] = Object.assign(LABELS[k] || {}, XTRA[k]); });

const L = (lang, key) => (LABELS[lang]?.[key] ?? LABELS.en[key] ?? key);

const INFO_ICONS = {
  date: Calendar, deadline: Clock, amount: Banknote, reference: Hash,
  address: MapPin, authority: Building2, contact: Phone, application: FileSignature,
  case: FileText, appointment: Calendar, email: Mail, phone: Phone,
};

const T = {
  bg: "#FBFBFC", card: "#FFFFFF", ink: "#18181B", ink2: "#3F3F46", muted: "#71717A", faint: "#A1A1AA",
  line: "#ECECEF", line2: "#F6F6F7",
  accent: "#5B5BD6", accentSoft: "#EEEEFC", accentDk: "#4B45C4",
  green: "#16A06F", greenSoft: "#E7F6EF", amber: "#B7791F", amberSoft: "#FEF3E2",
  rose: "#E5484D", roseSoft: "#FDECEC", blue: "#2F6FED", blueSoft: "#EAF1FE",
};

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

function extractJSON(text) {
  if (!text) return null;
  let s = String(text).trim();
  s = s.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  const a = s.indexOf("{"), b = s.lastIndexOf("}");
  if (a !== -1 && b !== -1) s = s.slice(a, b + 1);
  try { return JSON.parse(s); } catch { return null; }
}

export default function DocAssistant({ lang = "en", onBack, callClaude }) {
  const dir = RTL.has(lang) ? "rtl" : "ltr";
  const langName = LANG_NAME[lang] || "English";
  const [stage, setStage] = useState(() =>
    (typeof localStorage !== "undefined" && localStorage.getItem("docassist_onboarded")) ? "home" : "onboarding");
  const [obStep, setObStep] = useState(0);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isPdf, setIsPdf] = useState(false);
  const [docText, setDocText] = useState("");
  const [chat, setChat] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatBusy, setChatBusy] = useState(false);
  const [transMode, setTransMode] = useState("app");
  const [toast, setToast] = useState("");
  const [consent, setConsent] = useState(() => {
    try { return !!localStorage.getItem("docassist_privacy_ok"); } catch { return false; }
  });
  const [pending, setPending] = useState(null); // 'cam' | 'file' | null
  const fileRef = useRef(null);
  const camRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chat, chatBusy]);

  const showToast = (m) => { setToast(m); setTimeout(() => setToast(""), 1600); };

  const openPicker = (kind) => { (kind === "cam" ? camRef : fileRef).current?.click(); };
  const requestScan = (kind) => { if (consent) openPicker(kind); else setPending(kind); };
  const acceptConsent = () => {
    try { localStorage.setItem("docassist_privacy_ok", "1"); } catch {}
    setConsent(true);
    const k = pending; setPending(null);
    openPicker(k); // still inside the user-gesture chain
  };

  function finishOnboarding() {
    try { localStorage.setItem("docassist_onboarded", "1"); } catch {}
    setStage("home");
  }

  async function analyze(file) {
    if (!file) return;
    setError(null); setResult(null); setChat([]); setDocText("");
    const pdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name || "");
    setIsPdf(pdf);
    setStage("loading");
    try {
      const dataUrl = await fileToBase64(file);
      const b64 = dataUrl.split(",")[1];
      const mediaType = file.type || (pdf ? "application/pdf" : "image/jpeg");
      setPreview(pdf ? null : dataUrl);

      const source = { type: "base64", media_type: mediaType, data: b64 };
      const docBlock = pdf ? { type: "document", source } : { type: "image", source };

      const prompt =
`You are a professional, friendly assistant that helps people understand official documents (letters, forms, contracts, invoices, certificates, authority/Behörden letters, medical, tax, rental, employment, bank, court, visa/residence documents, etc.).

Analyse the attached document. Do NOT merely translate it — EXPLAIN what it means so a non-expert understands. Recognise the document type automatically.

Write ALL human-readable text in ${langName}. Keep only "originalText" verbatim in the document's original language, and keep proper nouns, reference numbers, IBANs, dates and amounts exactly as written.

Respond with ONLY valid minified JSON (no markdown, no commentary) using exactly this schema:
{
 "detectedLanguage": string,        // language of the document, written in ${langName}
 "documentType": string,            // e.g. "Jobcenter letter", written in ${langName}
 "confidence": number,              // 0-100 integer, how confident you are about the type
 "summary": string,                 // 2-5 sentences: what is this document?
 "purpose": string,                 // why did the reader receive this?
 "importantInfo": [ { "icon": "date|deadline|amount|reference|address|authority|contact|application|case|appointment|email|phone", "label": string, "value": string } ],
 "checklist": [ string ],           // specific practical actions for THIS document
 "warnings": [ string ],            // possible consequences, clear but not fear-mongering; [] if none
 "detailedExplanation": [ string ], // one entry per paragraph/section, plain language
 "faq": [ { "q": string, "a": string } ],
 "nextSteps": [ string ],
 "originalText": string,            // full text extracted from the document, verbatim
 "isSensitive": boolean             // true if legal, tax or medical content
}
If the image is not a readable document, still return the schema with confidence 0 and a helpful summary asking for a clearer photo.`;

      const data = await callClaude({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4000,
        messages: [{ role: "user", content: [docBlock, { type: "text", text: prompt }] }],
      });
      const text = data?.content?.[0]?.text || "";
      const parsed = extractJSON(text);
      if (!parsed) throw new Error("PARSE");
      setResult(parsed);
      setDocText(parsed.originalText || "");
      saveRecent({ ts: Date.now(), documentType: parsed.documentType || "", detectedLanguage: parsed.detectedLanguage || "", summary: parsed.summary || "", result: parsed, docText: parsed.originalText || "" });
      setStage("result");
    } catch (e) {
      const msg = String(e?.message || e);
      setError(msg === "NOT_SIGNED_IN" ? L(lang, "signIn") : (msg === "PARSE" ? L(lang, "errTitle") : msg));
      setStage("error");
    }
  }

  async function sendChat(text) {
    const q = (text ?? chatInput).trim();
    if (!q || chatBusy) return;
    const next = [...chat, { role: "user", text: q }];
    setChat(next); setChatInput(""); setChatBusy(true);
    try {
      const system =
`You are a professional, friendly document assistant. The user scanned a document and is asking questions about it.
Always answer in ${langName}. Explain meaning; do not just translate. Be concise, warm and practical.
Here is the full text of the user's document (may be in another language):
"""${docText || "(no text extracted)"}"""`;
      const data = await callClaude({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1200,
        system,
        messages: next.map((m) => ({ role: m.role, content: m.text })),
      });
      const answer = data?.content?.[0]?.text || "…";
      setChat((c) => [...c, { role: "assistant", text: answer }]);
    } catch (e) {
      const msg = String(e?.message || e);
      setChat((c) => [...c, { role: "assistant", text: msg === "NOT_SIGNED_IN" ? L(lang, "signIn") : msg }]);
    } finally {
      setChatBusy(false);
    }
  }

  const copyText = (txt) => {
    try { navigator.clipboard?.writeText(txt || ""); showToast(L(lang, "copied")); } catch {}
  };

  // ── shared styles ──────────────────────────────────────────────────────
  const wrap = { direction: dir, maxWidth: 720, margin: "0 auto", fontFamily: "'Vazirmatn', system-ui, sans-serif", color: T.ink };
  const cardStyle = { background: T.card, border: `1px solid ${T.line}`, borderRadius: 20, padding: 20, boxShadow: "0 1px 2px rgba(24,24,27,.04), 0 8px 24px rgba(24,24,27,.04)" };
  const pill = (bg, fg) => ({ display: "inline-flex", alignItems: "center", gap: 6, background: bg, color: fg, borderRadius: 999, padding: "5px 12px", fontSize: 12.5, fontWeight: 700 });

  // ─────────────────────────────────────────────────── ONBOARDING
  if (stage === "onboarding") {
    const slides = [
      { icon: ScanText, t: L(lang, "ob1t"), b: L(lang, "ob1b") },
      { icon: Sparkles, t: L(lang, "ob2t"), b: L(lang, "ob2b") },
      { icon: MessageCircle, t: L(lang, "ob3t"), b: L(lang, "ob3b") },
    ];
    const s = slides[obStep];
    const Icon = s.icon;
    const last = obStep === slides.length - 1;
    return (
      <div style={wrap}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
          <button onClick={finishOnboarding} style={{ background: "none", border: "none", color: T.muted, cursor: "pointer", fontSize: 14, fontWeight: 600, padding: 8 }}>{L(lang, "skip")}</button>
        </div>
        <div style={{ ...cardStyle, padding: "44px 28px", textAlign: "center", minHeight: 380, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 92, height: 92, borderRadius: 26, background: T.accentSoft, display: "grid", placeItems: "center", marginBottom: 26 }}>
            <Icon size={42} color={T.accent} strokeWidth={1.6} />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 12px", letterSpacing: "-.01em" }}>{s.t}</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: T.muted, margin: 0, maxWidth: 420 }}>{s.b}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 7, margin: "22px 0" }}>
          {slides.map((_, i) => (
            <span key={i} style={{ width: i === obStep ? 22 : 7, height: 7, borderRadius: 999, background: i === obStep ? T.accent : T.line, transition: "all .25s" }} />
          ))}
        </div>
        <button onClick={() => last ? finishOnboarding() : setObStep(obStep + 1)}
          style={{ width: "100%", padding: "15px", borderRadius: 15, border: "none", background: T.accent, color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 20px rgba(91,91,214,.28)" }}>
          {last ? L(lang, "start") : L(lang, "next")}
        </button>
      </div>
    );
  }

  // ─────────────────────────────────────────────────── LOADING
  if (stage === "loading") {
    return (
      <div style={{ ...wrap, minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 22 }}>
        <div style={{ position: "relative", width: 96, height: 96 }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: 26, background: T.accentSoft }} />
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <FileText size={40} color={T.accent} strokeWidth={1.5} />
          </div>
          <div className="da-scan" />
        </div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>{L(lang, "analysing")}</div>
          <div style={{ fontSize: 14, color: T.muted }}>{L(lang, "analysingHint")}</div>
        </div>
        <Loader2 size={22} color={T.accent} className="da-spin" />
        <style>{`
          @keyframes daSpin { to { transform: rotate(360deg); } }
          .da-spin { animation: daSpin 1s linear infinite; }
          @keyframes daScan { 0%{top:8px;opacity:0} 15%{opacity:1} 85%{opacity:1} 100%{top:80px;opacity:0} }
          .da-scan { position:absolute; left:12px; right:12px; height:2.5px; border-radius:2px; background:linear-gradient(90deg,transparent,${T.accent},transparent); animation: daScan 1.6s ease-in-out infinite; }
        `}</style>
      </div>
    );
  }

  // ─────────────────────────────────────────────────── ERROR
  if (stage === "error") {
    return (
      <div style={wrap}>
        {topBar(L(lang, "back"))}
        <div style={{ ...cardStyle, textAlign: "center", padding: "40px 24px" }}>
          <div style={{ width: 68, height: 68, borderRadius: 20, background: T.roseSoft, display: "grid", placeItems: "center", margin: "0 auto 18px" }}>
            <AlertTriangle size={30} color={T.rose} />
          </div>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{L(lang, "errTitle")}</div>
          <p style={{ color: T.muted, fontSize: 14.5, lineHeight: 1.55, margin: "0 0 22px" }}>{error}</p>
          <button onClick={() => setStage("home")} style={{ padding: "13px 26px", borderRadius: 13, border: "none", background: T.accent, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>{L(lang, "retry")}</button>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────── HOME (scanner)
  if (stage === "home") {
    return (
      <div style={wrap}>
        {topBar(L(lang, "back"))}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
          <div style={{ width: 54, height: 54, borderRadius: 16, background: "linear-gradient(135deg,#5B5BD6,#7C6BF0)", display: "grid", placeItems: "center", boxShadow: "0 8px 20px rgba(91,91,214,.3)" }}>
            <ScanText size={26} color="#fff" strokeWidth={1.7} />
          </div>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-.01em" }}>{L(lang, "title")}</h1>
            <p style={{ fontSize: 13.5, color: T.muted, margin: "3px 0 0" }}>{L(lang, "subtitle")}</p>
          </div>
        </div>

        <input ref={camRef} type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={(e) => analyze(e.target.files?.[0])} />
        <input ref={fileRef} type="file" accept="image/*,application/pdf" style={{ display: "none" }} onChange={(e) => analyze(e.target.files?.[0])} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <button onClick={() => requestScan("cam")} style={bigBtn(T.accent, "#fff", true)}>
            <Camera size={26} strokeWidth={1.8} />
            <span>{L(lang, "takePhoto")}</span>
          </button>
          <button onClick={() => requestScan("file")} style={bigBtn(T.card, T.ink, false)}>
            <Upload size={26} strokeWidth={1.8} color={T.accent} />
            <span>{L(lang, "importFile")}</span>
          </button>
        </div>
        <p style={{ textAlign: "center", fontSize: 12.5, color: T.faint, margin: "2px 0 26px" }}>{L(lang, "homeHint")}</p>

        {(() => {
          const rec = loadRecent();
          if (!rec.length) return null;
          return (
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: T.faint, textTransform: "uppercase", letterSpacing: ".06em", margin: "0 4px 10px" }}>{L(lang, "recent")}</div>
              <div style={{ display: "grid", gap: 9 }}>
                {rec.map((it) => (
                  <button key={it.ts} onClick={() => openRecent(it)}
                    style={{ display: "flex", alignItems: "center", gap: 12, textAlign: "start", width: "100%", background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: "12px 14px", cursor: "pointer" }}>
                    <span style={{ width: 36, height: 36, borderRadius: 10, background: T.accentSoft, display: "grid", placeItems: "center", flexShrink: 0 }}><FileText size={17} color={T.accent} /></span>
                    <span style={{ minWidth: 0, flex: 1 }}>
                      <span style={{ display: "block", fontSize: 14.5, fontWeight: 700, color: T.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{it.documentType || "—"}</span>
                      <span style={{ display: "block", fontSize: 12, color: T.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{it.summary || it.detectedLanguage || ""}</span>
                    </span>
                    <ChevronLeft size={17} color={T.faint} style={{ transform: dir === "rtl" ? "none" : "scaleX(-1)", flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          );
        })()}

        <div style={{ ...cardStyle, background: T.line2, border: "none", boxShadow: "none", display: "flex", gap: 12, alignItems: "flex-start" }}>
          <ShieldCheck size={18} color={T.muted} style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ fontSize: 12.5, lineHeight: 1.55, color: T.muted, margin: 0 }}>{L(lang, "disclaimer")}</p>
        </div>

        {pending && (
          <div dir={dir} onClick={() => setPending(null)}
            style={{ position: "fixed", inset: 0, zIndex: 400, background: "rgba(24,24,27,.42)", backdropFilter: "blur(3px)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <div onClick={(e) => e.stopPropagation()} className="da-sheet"
              style={{ background: T.card, width: "100%", maxWidth: 480, borderRadius: "24px 24px 0 0", padding: "26px 22px calc(26px + env(safe-area-inset-bottom))", boxShadow: "0 -8px 40px rgba(0,0,0,.2)" }}>
              <div style={{ width: 44, height: 5, borderRadius: 999, background: T.line, margin: "0 auto 20px" }} />
              <div style={{ width: 60, height: 60, borderRadius: 18, background: T.accentSoft, display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
                <ShieldCheck size={28} color={T.accent} strokeWidth={1.7} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 800, textAlign: "center", margin: "0 0 18px" }}>{L(lang, "pv_title")}</h3>
              <div style={{ display: "grid", gap: 12, marginBottom: 18 }}>
                {["pv_b1", "pv_b2", "pv_b3"].map((k) => (
                  <div key={k} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                    <span style={{ width: 22, height: 22, borderRadius: 7, background: T.greenSoft, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}><Check size={13} color={T.green} strokeWidth={3} /></span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: T.ink2 }}>{L(lang, k)}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.5, color: T.faint, textAlign: "center", margin: "0 0 20px" }}>{L(lang, "pv_foot")}</p>
              <button onClick={acceptConsent}
                style={{ width: "100%", padding: "15px", borderRadius: 15, border: "none", background: T.accent, color: "#fff", fontSize: 15.5, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 20px rgba(91,91,214,.28)", marginBottom: 8 }}>
                {L(lang, "pv_accept")}
              </button>
              <button onClick={() => setPending(null)}
                style={{ width: "100%", padding: "13px", borderRadius: 14, border: "none", background: "transparent", color: T.muted, fontSize: 14.5, fontWeight: 600, cursor: "pointer" }}>
                {L(lang, "pv_cancel")}
              </button>
            </div>
            <style>{`@keyframes daSheet{from{transform:translateY(100%)}to{transform:translateY(0)}} .da-sheet{animation:daSheet .28s cubic-bezier(.22,1,.36,1)}`}</style>
          </div>
        )}
        {toast && toastEl()}
      </div>
    );
  }

  // ─────────────────────────────────────────────────── RESULT
  const r = result || {};
  const conf = Math.max(0, Math.min(100, Number(r.confidence) || 0));
  const confColor = conf >= 70 ? T.green : conf >= 40 ? T.amber : T.rose;

  return (
    <div style={wrap}>
      {topBar(L(lang, "newScan"), () => setStage("home"))}

      {/* preview + detection */}
      <div style={{ ...cardStyle, marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ width: 92, height: 116, borderRadius: 12, overflow: "hidden", flexShrink: 0, background: T.line2, display: "grid", placeItems: "center", border: `1px solid ${T.line}` }}>
            {preview ? <img src={preview} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <FileText size={34} color={T.faint} />}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.faint, textTransform: "uppercase", letterSpacing: ".06em" }}>{L(lang, "docType")}</div>
            <div style={{ fontSize: 18, fontWeight: 800, margin: "3px 0 12px", lineHeight: 1.25 }}>{r.documentType || "—"}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={pill(T.blueSoft, T.blue)}><Languages size={13} /> {r.detectedLanguage || "—"}</span>
              <span style={pill(conf >= 70 ? T.greenSoft : conf >= 40 ? T.amberSoft : T.roseSoft, confColor)}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: confColor }} /> {L(lang, "confidence")} {conf}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {r.summary && section(FileText, L(lang, "s_summary"), T.accent, <p style={pStyle}>{r.summary}</p>)}
      {r.purpose && section(HelpCircle, L(lang, "s_purpose"), T.blue, <p style={pStyle}>{r.purpose}</p>)}

      {Array.isArray(r.importantInfo) && r.importantInfo.length > 0 && section(Info, L(lang, "s_info"), T.accent, (
        <div style={{ display: "grid", gap: 10 }}>
          {r.importantInfo.map((it, i) => {
            const IC = INFO_ICONS[it.icon] || Info;
            return (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", background: T.line2, borderRadius: 13, padding: "12px 14px" }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: T.card, display: "grid", placeItems: "center", flexShrink: 0, border: `1px solid ${T.line}` }}>
                  <IC size={17} color={T.accent} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 11.5, color: T.muted, fontWeight: 600 }}>{it.label}</div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, wordBreak: "break-word" }}>{it.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {Array.isArray(r.checklist) && r.checklist.length > 0 && section(ListChecks, L(lang, "s_todo"), T.green, (
        <div style={{ display: "grid", gap: 9 }}>
          {r.checklist.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
              <span style={{ width: 22, height: 22, borderRadius: 7, background: T.greenSoft, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}><Check size={14} color={T.green} strokeWidth={3} /></span>
              <span style={{ fontSize: 14.5, lineHeight: 1.5 }}>{c}</span>
            </div>
          ))}
        </div>
      ))}

      {Array.isArray(r.warnings) && r.warnings.length > 0 && section(AlertTriangle, L(lang, "s_warn"), T.rose, (
        <div style={{ display: "grid", gap: 9 }}>
          {r.warnings.map((w, i) => (
            <div key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start", background: T.roseSoft, borderRadius: 12, padding: "11px 13px" }}>
              <AlertTriangle size={16} color={T.rose} style={{ flexShrink: 0, marginTop: 1 }} />
              <span style={{ fontSize: 14, lineHeight: 1.5, color: "#8a2b2f" }}>{w}</span>
            </div>
          ))}
        </div>
      ))}

      {Array.isArray(r.detailedExplanation) && r.detailedExplanation.length > 0 && section(FileText, L(lang, "s_detail"), T.ink2, (
        <div style={{ display: "grid", gap: 12 }}>
          {r.detailedExplanation.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 12 }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: T.accent, background: T.accentSoft, borderRadius: 8, minWidth: 24, height: 24, display: "grid", placeItems: "center", flexShrink: 0 }}>{i + 1}</span>
              <p style={{ ...pStyle, margin: 0 }}>{p}</p>
            </div>
          ))}
        </div>
      ))}

      {Array.isArray(r.faq) && r.faq.length > 0 && section(HelpCircle, L(lang, "s_faq"), T.blue, (
        <div style={{ display: "grid", gap: 8 }}>
          {r.faq.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      ))}

      {Array.isArray(r.nextSteps) && r.nextSteps.length > 0 && section(ArrowRight, L(lang, "s_next"), T.accent, (
        <div style={{ display: "grid", gap: 9 }}>
          {r.nextSteps.map((n, i) => (
            <div key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
              <ArrowRight size={16} color={T.accent} style={{ flexShrink: 0, marginTop: 2, transform: dir === "rtl" ? "scaleX(-1)" : "none" }} />
              <span style={{ fontSize: 14.5, lineHeight: 1.5 }}>{n}</span>
            </div>
          ))}
        </div>
      ))}

      {docText && section(Languages, L(lang, "s_trans"), T.ink2, (
        <div>
          <div style={{ display: "inline-flex", background: T.line2, borderRadius: 10, padding: 3, marginBottom: 12 }}>
            {[["app", L(lang, "showApp")], ["orig", L(lang, "showOriginal")]].map(([k, lab]) => (
              <button key={k} onClick={() => setTransMode(k)} style={{ border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 700, background: transMode === k ? T.card : "transparent", color: transMode === k ? T.ink : T.muted, boxShadow: transMode === k ? "0 1px 3px rgba(0,0,0,.08)" : "none" }}>{lab}</button>
            ))}
          </div>
          <p style={{ ...pStyle, whiteSpace: "pre-wrap", direction: transMode === "orig" ? "auto" : dir }}>
            {transMode === "orig" ? docText : (r.summary || "")}
          </p>
        </div>
      ))}

      {/* Quick actions */}
      {section(Wand2, L(lang, "quickTitle"), T.accent, (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            ["qa_reply", `Draft a polite reply to this letter in ${langName}.`],
            ["qa_summary", `Summarise this document in a few sentences.`],
            ["qa_simple", `Explain this document as simply as possible, for a beginner.`],
            ["qa_checklist", `Give me a concrete checklist of what I need to do.`],
            ["qa_dates", `Extract all dates and deadlines from this document.`],
            ["qa_addr", `Extract all addresses from this document.`],
            ["qa_phone", `Extract all phone numbers from this document.`],
            ["qa_email", `Extract all email addresses from this document.`],
            ["qa_iban", `Extract any IBAN / bank account details from this document.`],
          ].map(([key, prompt]) => (
            <button key={key} onClick={() => { sendChat(prompt); document.getElementById("da-chat")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ border: `1px solid ${T.line}`, background: T.card, color: T.ink2, borderRadius: 999, padding: "9px 15px", fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}>
              {L(lang, key)}
            </button>
          ))}
          {[
            [Calendar, L(lang, "qa_calendar"), addCalendar],
            [Download, L(lang, "qa_pdf"), exportPDF],
            [Share2, L(lang, "qa_share"), shareDoc],
            [Copy, L(lang, "qa_copy"), () => copyText(docText)],
          ].map(([Ic, lab, fn], i) => (
            <button key={i} onClick={fn} style={{ border: `1px solid ${T.line}`, background: T.card, color: T.ink2, borderRadius: 999, padding: "9px 15px", fontSize: 13.5, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}><Ic size={14} /> {lab}</button>
          ))}
        </div>
      ))}

      {r.isSensitive && (
        <div style={{ display: "flex", gap: 11, alignItems: "flex-start", background: T.amberSoft, borderRadius: 14, padding: "13px 15px", margin: "0 0 14px" }}>
          <Info size={17} color={T.amber} style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#7a5a15", margin: 0 }}>{L(lang, "disclaimer")}</p>
        </div>
      )}

      {/* Chat */}
      <div id="da-chat" style={{ ...cardStyle, marginBottom: 30, padding: 0, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "16px 18px", borderBottom: `1px solid ${T.line}` }}>
          <MessageCircle size={18} color={T.accent} />
          <span style={{ fontWeight: 800, fontSize: 15 }}>{L(lang, "chatTitle")}</span>
        </div>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12, maxHeight: 420, overflowY: "auto" }}>
          {chat.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
              <div style={{
                maxWidth: "82%", padding: "11px 14px", borderRadius: 16, fontSize: 14.5, lineHeight: 1.55, whiteSpace: "pre-wrap",
                background: m.role === "user" ? T.accent : T.line2,
                color: m.role === "user" ? "#fff" : T.ink,
                borderBottomRightRadius: m.role === "user" ? 5 : 16,
                borderBottomLeftRadius: m.role === "user" ? 16 : 5,
              }}>{m.text}</div>
            </div>
          ))}
          {chatBusy && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ padding: "11px 14px", borderRadius: 16, background: T.line2, color: T.muted, fontSize: 14, display: "inline-flex", gap: 8, alignItems: "center" }}>
                <Loader2 size={15} className="da-spin" /> {L(lang, "thinking")}
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <div style={{ display: "flex", gap: 8, padding: 12, borderTop: `1px solid ${T.line}` }}>
          <input value={chatInput} onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") sendChat(); }}
            placeholder={L(lang, "chatPlaceholder")}
            style={{ flex: 1, border: `1px solid ${T.line}`, borderRadius: 13, padding: "12px 14px", fontSize: 14.5, outline: "none", fontFamily: "inherit", background: T.bg, color: T.ink }} />
          <button onClick={() => sendChat()} disabled={chatBusy || !chatInput.trim()}
            style={{ border: "none", borderRadius: 13, width: 46, background: chatInput.trim() ? T.accent : T.line, color: "#fff", cursor: chatInput.trim() ? "pointer" : "default", display: "grid", placeItems: "center", flexShrink: 0 }}>
            <Send size={18} style={{ transform: dir === "rtl" ? "scaleX(-1)" : "none" }} />
          </button>
        </div>
      </div>

      <style>{`@keyframes daSpin{to{transform:rotate(360deg)}} .da-spin{animation:daSpin 1s linear infinite}`}</style>
      {toast && toastEl()}
    </div>
  );

  // ── report / export helpers ──────────────────────────────────────────
  function buildPlainText() {
    const d = result || {};
    const lines = [];
    if (d.documentType) lines.push(`${L(lang, "docType")}: ${d.documentType}`);
    if (d.summary) lines.push(`\n${L(lang, "s_summary")}\n${d.summary}`);
    if (d.purpose) lines.push(`\n${L(lang, "s_purpose")}\n${d.purpose}`);
    if (Array.isArray(d.importantInfo) && d.importantInfo.length) lines.push(`\n${L(lang, "s_info")}\n` + d.importantInfo.map((x) => `• ${x.label}: ${x.value}`).join("\n"));
    if (Array.isArray(d.checklist) && d.checklist.length) lines.push(`\n${L(lang, "s_todo")}\n` + d.checklist.map((x) => `✓ ${x}`).join("\n"));
    if (Array.isArray(d.nextSteps) && d.nextSteps.length) lines.push(`\n${L(lang, "s_next")}\n` + d.nextSteps.map((x) => `→ ${x}`).join("\n"));
    return lines.join("\n");
  }
  function buildReportHTML() {
    const d = result || {};
    const esc = (s) => String(s == null ? "" : s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
    const block = (title, inner) => inner ? `<h2>${esc(title)}</h2>${inner}` : "";
    const ul = (arr, pre = "") => Array.isArray(arr) && arr.length ? `<ul>${arr.map((x) => `<li>${pre}${esc(x)}</li>`).join("")}</ul>` : "";
    const info = Array.isArray(d.importantInfo) && d.importantInfo.length
      ? `<table>${d.importantInfo.map((x) => `<tr><td class="k">${esc(x.label)}</td><td>${esc(x.value)}</td></tr>`).join("")}</table>` : "";
    const detail = Array.isArray(d.detailedExplanation) ? d.detailedExplanation.map((p) => `<p>${esc(p)}</p>`).join("") : "";
    const faq = Array.isArray(d.faq) ? d.faq.map((f) => `<p><b>${esc(f.q)}</b><br>${esc(f.a)}</p>`).join("") : "";
    return `<!doctype html><html dir="${dir}"><head><meta charset="utf-8"><title>${esc(d.documentType || "Document")}</title>
<style>@page{margin:22mm}body{font-family:'Vazirmatn',system-ui,Arial,sans-serif;color:#18181B;line-height:1.6;max-width:720px;margin:0 auto;padding:20px}
h1{font-size:22px;margin:0 0 4px}h2{font-size:15px;margin:22px 0 8px;color:#4B45C4;border-bottom:1px solid #eee;padding-bottom:4px}
.meta{color:#71717A;font-size:13px;margin-bottom:8px}table{border-collapse:collapse;width:100%}td{padding:6px 8px;border-bottom:1px solid #eee;font-size:13px;vertical-align:top}td.k{color:#71717A;width:38%}
ul{padding-inline-start:20px}li{margin:4px 0}p{margin:8px 0}</style></head><body>
<h1>${esc(d.documentType || "Document")}</h1>
<div class="meta">${esc(d.detectedLanguage || "")} · ${L(lang, "confidence")} ${Math.round(d.confidence || 0)}%</div>
${block(L(lang, "s_summary"), d.summary ? `<p>${esc(d.summary)}</p>` : "")}
${block(L(lang, "s_purpose"), d.purpose ? `<p>${esc(d.purpose)}</p>` : "")}
${block(L(lang, "s_info"), info)}
${block(L(lang, "s_todo"), ul(d.checklist, "✓ "))}
${block(L(lang, "s_warn"), ul(d.warnings, "⚠ "))}
${block(L(lang, "s_detail"), detail)}
${block(L(lang, "s_faq"), faq)}
${block(L(lang, "s_next"), ul(d.nextSteps, "→ "))}
<p class="meta" style="margin-top:26px">${esc(L(lang, "disclaimer"))}</p>
</body></html>`;
  }
  function exportPDF() {
    const w = window.open("", "_blank");
    if (!w) { showToast(L(lang, "errTitle")); return; }
    w.document.write(buildReportHTML());
    w.document.close(); w.focus();
    setTimeout(() => { try { w.print(); } catch {} }, 350);
  }
  async function shareDoc() {
    const text = buildPlainText();
    try {
      if (navigator.share) { await navigator.share({ title: (result || {}).documentType || "Document", text }); showToast(L(lang, "shared")); }
      else { await navigator.clipboard.writeText(text); showToast(L(lang, "copied")); }
    } catch {}
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function parseDate(str) {
    const s = String(str || "");
    let m = s.match(/(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{2,4})/);      // dd.mm.yyyy
    if (m) { let y = +m[3]; if (y < 100) y += 2000; return `${y}${pad(+m[2])}${pad(+m[1])}`; }
    m = s.match(/(\d{4})[.\/-](\d{1,2})[.\/-](\d{1,2})/);            // yyyy-mm-dd
    if (m) return `${m[1]}${pad(+m[2])}${pad(+m[3])}`;
    return null;
  }
  function addCalendar() {
    const items = (result?.importantInfo || []).filter((x) => ["date", "deadline", "appointment"].includes(x.icon));
    const events = items.map((x) => ({ d: parseDate(x.value), title: `${x.label}: ${x.value}` })).filter((e) => e.d);
    if (!events.length) { showToast(L(lang, "noDates")); return; }
    const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//SURI//DocAssistant//EN",
      ...events.flatMap((e, i) => ["BEGIN:VEVENT", `UID:suri-${Date.now()}-${i}@suri`, `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${e.d}`, `SUMMARY:${e.title.replace(/[\r\n,]/g, " ")}`, "END:VEVENT"]),
      "END:VCALENDAR"].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "reminders.ics";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  // ── recent scans (localStorage) ──────────────────────────────────────
  function loadRecent() { try { return JSON.parse(localStorage.getItem("docassist_recent") || "[]"); } catch { return []; } }
  function saveRecent(entry) {
    const list = [entry, ...loadRecent().filter((x) => x.ts !== entry.ts)].slice(0, 8);
    try { localStorage.setItem("docassist_recent", JSON.stringify(list)); } catch {}
  }
  function openRecent(entry) {
    setResult(entry.result); setDocText(entry.docText || ""); setPreview(null); setIsPdf(false);
    setChat([]); setTransMode("app"); setStage("result");
  }

  // ── helpers (closures) ───────────────────────────────────────────────
  function topBar(label, onClick) {
    return (
      <button onClick={onClick || onBack} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", color: T.muted, cursor: "pointer", fontSize: 14, fontWeight: 600, padding: "4px 4px 16px 0" }}>
        <ChevronLeft size={18} style={{ transform: dir === "rtl" ? "scaleX(-1)" : "none" }} /> {label}
      </button>
    );
  }
  function section(Icon, title, color, body) {
    return (
      <div style={{ ...cardStyle, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: `${color}14`, display: "grid", placeItems: "center" }}>
            <Icon size={16} color={color} />
          </div>
          <h3 style={{ fontSize: 15.5, fontWeight: 800, margin: 0 }}>{title}</h3>
        </div>
        {body}
      </div>
    );
  }
  function bigBtn(bg, fg, primary) {
    return { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: "26px 14px", borderRadius: 18, border: primary ? "none" : `1px solid ${T.line}`, background: bg, color: fg, fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: primary ? "0 10px 24px rgba(91,91,214,.28)" : "0 1px 2px rgba(0,0,0,.04)" };
  }
  function toastEl() {
    return <div style={{ position: "fixed", bottom: 90, left: "50%", transform: "translateX(-50%)", background: T.ink, color: "#fff", padding: "10px 18px", borderRadius: 999, fontSize: 13.5, fontWeight: 600, zIndex: 300 }}>{toast}</div>;
  }
}

const pStyle = { fontSize: 14.5, lineHeight: 1.65, color: "#3F3F46", margin: 0 };

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px solid ${T.line}`, borderRadius: 13, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", textAlign: "start", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, background: T.card, border: "none", padding: "13px 15px", cursor: "pointer", fontSize: 14.5, fontWeight: 700, color: T.ink }}>
        <span>{q}</span>
        <span style={{ color: T.accent, fontSize: 20, flexShrink: 0, lineHeight: 1 }}>{open ? "−" : "+"}</span>
      </button>
      {open && <p style={{ ...pStyle, padding: "0 15px 14px" }}>{a}</p>}
    </div>
  );
}
