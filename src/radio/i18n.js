// Station category + description in the app language. German is the source text in stations.js.
import { kuDialect } from "../data/kuDialects.js";

const T = {
  tr: {
    dlf: ["Haberler, bilim, siyaset", "Haberler, arka plan bilgileri ve bilim içeren bilgi kanalı."],
    "dlf-nova": ["Günlük yaşam, kültür, gençlik konuları", "Bilgi, günlük yaşam ve kültür — genç dinleyiciler için anlatılır."],
    "dlf-kultur": ["Kültür, toplum, tartışmalar", "Kültür, toplum ve uzun sohbetler."],
    wdr5: ["Röportajlar, haberler, günlük yaşam", "Röportaj, haber ve günlük konuları içeren konuşma kanalı."],
    diemaus: ["Çocuk radyosu, sade dil", "Net ve yavaş konuşmalı çocuk radyosu — dinleme anlama becerisine başlamak için iyi."],
  },
  en: {
    dlf: ["News, science, politics", "Information channel with news, background reports and science."],
    "dlf-nova": ["Everyday life, culture, youth topics", "Knowledge, everyday life and culture — presented for a young audience."],
    "dlf-kultur": ["Culture, society, discussions", "Culture, society and in-depth conversations."],
    wdr5: ["Interviews, news, everyday life", "Talk channel with interviews, news and everyday topics."],
    diemaus: ["Children's radio, simple language", "Children's radio with clear, slow speech — a good start for listening practice."],
  },
  ar: {
    dlf: ["أخبار، علوم، سياسة", "قناة معلومات تقدّم الأخبار والتقارير الخلفية والعلوم."],
    "dlf-nova": ["الحياة اليومية، الثقافة، مواضيع الشباب", "معرفة وحياة يومية وثقافة — بأسلوب موجّه للجمهور الشاب."],
    "dlf-kultur": ["ثقافة، مجتمع، نقاشات", "ثقافة ومجتمع وحوارات مطوّلة."],
    wdr5: ["مقابلات، أخبار، الحياة اليومية", "قناة حوارية تضم مقابلات وأخبارًا ومواضيع يومية."],
    diemaus: ["إذاعة الأطفال، لغة بسيطة", "إذاعة للأطفال بكلام واضح وبطيء — بداية جيدة لتدريب الاستماع."],
  },
  fa: {
    dlf: ["اخبار، علم، سیاست", "شبکهٔ اطلاع‌رسانی با اخبار، گزارش‌های زمینه‌ای و علم."],
    "dlf-nova": ["زندگی روزمره، فرهنگ، موضوعات جوانان", "دانش، زندگی روزمره و فرهنگ — با زبانی برای مخاطب جوان."],
    "dlf-kultur": ["فرهنگ، جامعه، گفت‌وگوها", "فرهنگ، جامعه و گفت‌وگوهای مفصل."],
    wdr5: ["مصاحبه، اخبار، زندگی روزمره", "شبکهٔ گفتاری با مصاحبه، اخبار و موضوعات روزمره."],
    diemaus: ["رادیوی کودک، زبان ساده", "رادیوی کودک با گفتار واضح و آهسته — شروع خوب برای تمرین شنیداری."],
  },
  es: {
    dlf: ["Noticias, ciencia, política", "Programa informativo con noticias, contexto y ciencia."],
    "dlf-nova": ["Vida cotidiana, cultura, temas jóvenes", "Conocimiento, vida cotidiana y cultura, pensado para un público joven."],
    "dlf-kultur": ["Cultura, sociedad, debates", "Cultura, sociedad y conversaciones en profundidad."],
    wdr5: ["Entrevistas, noticias, vida cotidiana", "Programa hablado con entrevistas, noticias y temas del día a día."],
    diemaus: ["Radio infantil, lenguaje sencillo", "Radio infantil con habla clara y lenta: buen comienzo para practicar la comprensión auditiva."],
  },
  uk: {
    dlf: ["Новини, наука, політика", "Інформаційний канал з новинами, аналітикою та наукою."],
    "dlf-nova": ["Повсякденне життя, культура, молодіжні теми", "Знання, повсякдення й культура — для молодої аудиторії."],
    "dlf-kultur": ["Культура, суспільство, дискусії", "Культура, суспільство та докладні розмови."],
    wdr5: ["Інтерв’ю, новини, повсякдення", "Розмовний канал з інтерв’ю, новинами та повсякденними темами."],
    diemaus: ["Дитяче радіо, проста мова", "Дитяче радіо з чітким повільним мовленням — гарний старт для практики аудіювання."],
  },
  ku: {
    dlf: ["هەواڵ، زانست، سیاسەت", "کەناڵی زانیاری لەگەڵ هەواڵ، باکگراوەند و زانست."],
    "dlf-nova": ["ژیانی ڕۆژانە، کولتوور، بابەتی گەنجان", "زانین، ژیانی ڕۆژانە و کولتوور — بۆ بینەری گەنج."],
    "dlf-kultur": ["کولتوور، کۆمەڵگە، گفتوگۆ", "کولتوور، کۆمەڵگە و گفتوگۆی درێژ."],
    wdr5: ["چاوپێکەوتن، هەواڵ، ژیانی ڕۆژانە", "کەناڵی قسەکردن لەگەڵ چاوپێکەوتن، هەواڵ و بابەتی ڕۆژانە."],
    diemaus: ["ڕادیۆی منداڵان، زمانی سادە", "ڕادیۆی منداڵان بە قسەی ڕوون و هێواش — دەستپێکێکی باش بۆ گوێگرتن."],
  },
  kmj: {
    dlf: ["Nûçe, zanist, siyaset", "Kanala agahdariyê bi nûçe, paşxane û zanistê."],
    "dlf-nova": ["Jiyana rojane, çand, mijarên ciwanan", "Zanîn, jiyana rojane û çand — ji bo temaşevanên ciwan."],
    "dlf-kultur": ["Çand, civak, gengeşe", "Çand, civak û axaftinên dirêj."],
    wdr5: ["Hevpeyvîn, nûçe, jiyana rojane", "Kanala axaftinê bi hevpeyvîn, nûçe û mijarên rojane."],
    diemaus: ["Radyoya zarokan, zimanê sade", "Radyoya zarokan bi axaftina zelal û hêdî — destpêkeke baş ji bo guhdarîkirinê."],
  },
};
T.ku.diemaus[1] = "ڕادیۆی منداڵان بە قسەی ڕوون و هێواش — دەستپێکێکی باش بۆ گوێگرتن.";

/** {category, description} for a station in the given app language (falls back to the German source text). */
export function stationText(s, lang) {
  const key = lang === "ku" && kuDialect() === "kurmanji" ? "kmj" : lang;
  const row = T[key]?.[s.id];
  return row ? { category: row[0], description: row[1] } : { category: s.category, description: s.description };
}

/** Text direction of the app language (German UI text is always LTR). */
export function langDir(lang) {
  if (lang === "ar" || lang === "fa") return "rtl";
  if (lang === "ku") return kuDialect() === "kurmanji" ? "ltr" : "rtl";
  return "ltr";
}

const TIPS = {
  de: ["Tipps zum Hörverstehen", ["Höre zuerst ohne Pause und versuche, das Thema zu erkennen.", "Konzentriere dich auf bekannte Wörter, nicht auf jedes einzelne Wort.", "Höre kurze Abschnitte mehrmals, wenn du etwas nicht verstanden hast.", "Schreibe drei neue Wörter auf und suche sie in der App.", "Regelmäßig 10 Minuten täglich hilft mehr als einmal lange."]],
  tr: ["Dinleme ipuçları", ["Önce durmadan dinle ve konuyu anlamaya çalış.", "Her kelimeye değil, bildiğin kelimelere odaklan.", "Anlamadığın kısa bölümleri birkaç kez tekrar dinle.", "Üç yeni kelime yaz ve uygulamada ara.", "Her gün düzenli 10 dakika, bir kerelik uzun dinlemeden daha faydalıdır."]],
  en: ["Listening tips", ["First listen without pausing and try to get the topic.", "Focus on words you know, not on every single word.", "Replay short parts several times if you didn't understand something.", "Write down three new words and look them up in the app.", "10 minutes every day helps more than one long session."]],
  ar: ["نصائح للاستماع", ["استمع أولًا دون توقّف وحاول فهم الموضوع.", "ركّز على الكلمات التي تعرفها لا على كل كلمة.", "أعد الاستماع إلى المقاطع القصيرة عدة مرات إذا لم تفهمها.", "اكتب ثلاث كلمات جديدة وابحث عنها في التطبيق.", "عشر دقائق كل يوم أفضل من جلسة طويلة واحدة."]],
  fa: ["نکته‌های شنیداری", ["اول بدون توقف گوش کن و سعی کن موضوع را بفهمی.", "روی کلمه‌هایی که می‌شناسی تمرکز کن، نه روی تک‌تک کلمه‌ها.", "بخش‌های کوتاهی را که نفهمیدی چند بار گوش بده.", "سه کلمهٔ جدید بنویس و در برنامه جست‌وجو کن.", "هر روز ۱۰ دقیقه بیشتر از یک بار طولانی کمک می‌کند."]],
  es: ["Consejos para escuchar", ["Escucha primero sin pausas e intenta captar el tema.", "Concéntrate en las palabras que conoces, no en cada palabra.", "Repite varias veces los fragmentos cortos que no entendiste.", "Anota tres palabras nuevas y búscalas en la app.", "10 minutos al día ayudan más que una sola sesión larga."]],
  uk: ["Поради для аудіювання", ["Спершу слухай без пауз і спробуй зрозуміти тему.", "Зосереджуйся на знайомих словах, а не на кожному слові.", "Кілька разів повтори короткі уривки, яких не зрозумів.", "Запиши три нові слова й знайди їх у застосунку.", "10 хвилин щодня корисніше, ніж одне довге заняття."]],
  ku: ["ئامۆژگاری بۆ گوێگرتن", ["سەرەتا بەبێ وەستان گوێ بگرە و هەوڵ بدە بابەتەکە تێبگەیت.", "سەرنج بخەرە سەر ئەو وشانەی دەیانناسیت، نەک هەموو وشەیەک.", "بەشە کورتەکانی تێنەگەیشتوویت چەند جارێک دووبارە گوێ لێ بگرە.", "سێ وشەی نوێ بنووسە و لە ئەپەکەدا بیانگەڕێ.", "١٠ خولەک هەموو ڕۆژێک لە یەک دانیشتنی درێژ باشترە."]],
  kmj: ["Şîretên guhdarîkirinê", ["Pêşî bêyî rawestan guh bide û hewl bide mijarê fam bikî.", "Li ser peyvên ku tu dizanî bisekine, ne li ser her peyvekê.", "Beşên kurt ên ku fêm nekirine çend caran dubare guh bide.", "Sê peyvên nû binivîse û di sepanê de bigere.", "Rojane 10 deqe ji danişîneke dirêj bi qazanctir e."]],
};
export function tipsText(lang) {
  const key = lang === "ku" && kuDialect() === "kurmanji" ? "kmj" : lang;
  const r = TIPS[key] || TIPS.en;
  return { title: r[0], items: r[1] };
}
