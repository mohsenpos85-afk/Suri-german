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

// ── UI strings ───────────────────────────────────────────────────────────────
const K = ["title","tagline","back","liveNow","play","pause","stop","volume","closePlayer","sleep","off","min","sender","info","openPlayer","preview","viaOfficial","connecting","buffering","playing","paused","unreachable","offline","geo","disabled","notLicensed","noStream","expired","open","swipe","noLive","footer"];
const UI = {
  de: ["Radio & Hören","Lerne Deutsch mit echten Radiosendungen.","Zurück","Jetzt live hören","Abspielen","Pausieren","Wiedergabe beenden","Lautstärke","Player schließen","Einschlaf-Timer","Aus","Min.","Sender","Offizielle Informationen","Offiziellen Player öffnen","Vorschau","Wird über den offiziellen Player des Senders geöffnet.","Verbindung wird hergestellt …","Puffert …","Läuft","Pausiert","Der Radiosender ist momentan nicht erreichbar.","Bitte überprüfe deine Internetverbindung.","Dieser Sender ist in deinem Land nicht verfügbar.","Dieser Sender ist noch nicht freigeschaltet.","Für diesen Sender liegt noch keine Genehmigung vor.","Für diesen Sender ist noch keine Verbindung eingerichtet.","Die Genehmigung für diesen Sender ist abgelaufen.","öffnen","Nach links oder rechts wischen, um den Sender zu wechseln","Zurzeit ist noch kein Live-Sender freigegeben. Sobald ein Sender genehmigt ist, erscheint er hier.","Hinweis: Beim Hören über das Internet kann deine IP-Adresse an den jeweiligen Streaming-Anbieter übermittelt werden. Sender werden erst nach Genehmigung durch den jeweiligen Rundfunkanbieter freigeschaltet."],
  tr: ["Radyo ve Dinleme","Gerçek radyo yayınlarıyla Almanca öğren.","Geri","Şimdi canlı dinle","Oynat","Duraklat","Oynatmayı bitir","Ses","Oynatıcıyı kapat","Uyku zamanlayıcısı","Kapalı","dk","Kanal","Resmî bilgiler","Resmî oynatıcıyı aç","Önizleme","Kanalın resmî oynatıcısı üzerinden açılır.","Bağlanılıyor …","Arabelleğe alınıyor …","Çalıyor","Duraklatıldı","Radyo kanalına şu an ulaşılamıyor.","Lütfen internet bağlantını kontrol et.","Bu kanal ülkende kullanılamıyor.","Bu kanal henüz açılmadı.","Bu kanal için henüz izin yok.","Bu kanal için henüz bağlantı kurulmadı.","Bu kanalın izin süresi doldu.","aç","Kanal değiştirmek için sola veya sağa kaydır","Şu anda canlı yayını açık kanal yok. Bir kanal onaylanınca burada görünür.","Not: İnternetten dinlerken IP adresin ilgili yayın sağlayıcısına iletilebilir. Kanallar, ilgili yayıncı kuruluş onay verdikten sonra açılır."],
  en: ["Radio & Listening","Learn German with real radio programmes.","Back","Listen live now","Play","Pause","Stop playback","Volume","Close player","Sleep timer","Off","min","Station","Official information","Open official player","Preview","Opens through the station's official player.","Connecting …","Buffering …","Playing","Paused","The radio station is not reachable right now.","Please check your internet connection.","This station is not available in your country.","This station is not enabled yet.","This station has no authorization yet.","No connection has been set up for this station yet.","The authorization for this station has expired.","open","Swipe left or right to change station","No live station is enabled at the moment. Once a station is approved, it will appear here.","Note: When listening over the internet, your IP address may be sent to the streaming provider. Stations are enabled only after approval by the broadcaster."],
  ar: ["الراديو والاستماع","تعلّم الألمانية مع برامج إذاعية حقيقية.","رجوع","استمع مباشرة الآن","تشغيل","إيقاف مؤقت","إنهاء التشغيل","الصوت","إغلاق المشغّل","مؤقّت النوم","إيقاف","د","المحطة","معلومات رسمية","افتح المشغّل الرسمي","معاينة","يُفتح عبر المشغّل الرسمي للمحطة.","جارٍ الاتصال …","جارٍ التخزين المؤقت …","قيد التشغيل","متوقف مؤقتًا","محطة الراديو غير متاحة حاليًا.","يُرجى التحقق من اتصالك بالإنترنت.","هذه المحطة غير متاحة في بلدك.","هذه المحطة لم تُفعَّل بعد.","لا يوجد ترخيص لهذه المحطة بعد.","لم يتم إعداد اتصال لهذه المحطة بعد.","انتهى ترخيص هذه المحطة.","فتح","اسحب يمينًا أو يسارًا لتغيير المحطة","لا توجد محطة بث مباشر مفعّلة حاليًا. ستظهر هنا بمجرد الموافقة عليها.","ملاحظة: عند الاستماع عبر الإنترنت قد يُرسَل عنوان IP الخاص بك إلى مزوّد البث. تُفعَّل المحطات بعد موافقة الجهة المذيعة."],
  fa: ["رادیو و شنیدن","با برنامه‌های واقعی رادیو آلمانی یاد بگیر.","بازگشت","همین حالا زنده گوش کن","پخش","توقف موقت","پایان پخش","صدا","بستن پخش‌کننده","زمان‌سنج خواب","خاموش","دقیقه","ایستگاه","اطلاعات رسمی","باز کردن پخش‌کنندهٔ رسمی","پیش‌نمایش","از طریق پخش‌کنندهٔ رسمی ایستگاه باز می‌شود.","در حال اتصال …","در حال بارگذاری …","در حال پخش","متوقف شد","ایستگاه رادیو اکنون در دسترس نیست.","لطفاً اتصال اینترنت خود را بررسی کن.","این ایستگاه در کشور تو در دسترس نیست.","این ایستگاه هنوز فعال نشده است.","برای این ایستگاه هنوز مجوزی وجود ندارد.","هنوز اتصالی برای این ایستگاه تنظیم نشده است.","مجوز این ایستگاه منقضی شده است.","باز کردن","برای تغییر ایستگاه به چپ یا راست بکش","فعلاً ایستگاه زنده‌ای فعال نیست. پس از تأیید، اینجا نمایش داده می‌شود.","توجه: هنگام گوش دادن از طریق اینترنت ممکن است نشانی IP تو به ارائه‌دهندهٔ پخش ارسال شود. ایستگاه‌ها پس از تأیید پخش‌کننده فعال می‌شوند."],
  es: ["Radio y escucha","Aprende alemán con programas de radio reales.","Atrás","Escuchar en directo","Reproducir","Pausar","Detener","Volumen","Cerrar reproductor","Temporizador de sueño","Apagado","min","Emisora","Información oficial","Abrir reproductor oficial","Vista previa","Se abre mediante el reproductor oficial de la emisora.","Conectando …","Cargando …","Reproduciendo","En pausa","La emisora no está disponible en este momento.","Comprueba tu conexión a internet.","Esta emisora no está disponible en tu país.","Esta emisora aún no está habilitada.","Esta emisora aún no tiene autorización.","Aún no hay conexión configurada para esta emisora.","La autorización de esta emisora ha caducado.","abrir","Desliza a izquierda o derecha para cambiar de emisora","Por ahora no hay ninguna emisora en directo habilitada. Aparecerá aquí cuando se apruebe.","Nota: al escuchar por internet, tu dirección IP puede enviarse al proveedor de streaming. Las emisoras se habilitan tras la aprobación del emisor."],
  uk: ["Радіо та аудіювання","Вивчай німецьку з реальними радіопрограмами.","Назад","Слухати наживо","Відтворити","Пауза","Зупинити","Гучність","Закрити плеєр","Таймер сну","Вимк.","хв","Станція","Офіційна інформація","Відкрити офіційний плеєр","Попередній перегляд","Відкривається через офіційний плеєр станції.","Підключення …","Буферизація …","Грає","Призупинено","Радіостанція зараз недоступна.","Перевір підключення до інтернету.","Ця станція недоступна у твоїй країні.","Цю станцію ще не ввімкнено.","Для цієї станції ще немає дозволу.","Для цієї станції ще не налаштовано підключення.","Термін дії дозволу для цієї станції минув.","відкрити","Проведи вліво або вправо, щоб змінити станцію","Наразі жодна станція наживо не ввімкнена. Після схвалення вона з’явиться тут.","Примітка: під час прослуховування через інтернет твоя IP-адреса може передаватися провайдеру стримінгу. Станції вмикаються після схвалення мовником."],
  ku: ["ڕادیۆ و گوێگرتن","لەگەڵ بەرنامەی ڕاستەقینەی ڕادیۆ ئەڵمانی فێربە.","گەڕانەوە","ئێستا ڕاستەوخۆ گوێ بگرە","لێدان","وەستاندنی کاتی","کۆتایی لێدان","دەنگ","داخستنی لێدەر","کاتژمێری خەو","کوژاوە","خولەک","کەناڵ","زانیاری فەرمی","کردنەوەی لێدەری فەرمی","پێشبینین","لە ڕێگەی لێدەری فەرمی کەناڵەکەوە دەکرێتەوە.","پەیوەندی دەکرێت …","بافەر دەکرێت …","دەیڵێت","وەستێنراوە","کەناڵی ڕادیۆ ئێستا بەردەست نییە.","تکایە پەیوەندی ئینتەرنێتەکەت بپشکنە.","ئەم کەناڵە لە وڵاتەکەتدا بەردەست نییە.","ئەم کەناڵە هێشتا چالاک نەکراوە.","بۆ ئەم کەناڵە هێشتا مۆڵەت نییە.","بۆ ئەم کەناڵە هێشتا پەیوەندی دروست نەکراوە.","مۆڵەتی ئەم کەناڵە بەسەرچووە.","کردنەوە","بۆ گۆڕینی کەناڵ بۆ چەپ یان ڕاست بکێشە","ئێستا هیچ کەناڵێکی ڕاستەوخۆ چالاک نییە. دوای پەسەندکردن لێرە دەردەکەوێت.","تێبینی: لە کاتی گوێگرتن بە ئینتەرنێت، ئایپی ئەدرەسەکەت لەوانەیە بنێردرێت بۆ دابینکەری پەخش. کەناڵەکان دوای ڕەزامەندی پەخشکەر چالاک دەکرێن."],
  kmj: ["Radyo û Guhdarî","Bi bernameyên radyoyê yên rastîn Almanî fêr bibe.","Vegere","Niha zindî guh bide","Lê bide","Raweste","Dawî li lêdanê bîne","Deng","Lêdêr bigire","Demjimêra xewê","Girtî","deq","Qenal","Agahiyên fermî","Lêdêra fermî veke","Pêşdîtin","Bi lêdêra fermî ya qenalê tê vekirin.","Girêdan tê çêkirin …","Tê barkirin …","Dilêze","Hat rawestandin","Qenala radyoyê niha nayê gihîştin.","Ji kerema xwe girêdana înternetê kontrol bike.","Ev qenal li welatê te peyda nabe.","Ev qenal hê nehatiye vekirin.","Ji bo vî qenalî hê destûr tune.","Ji bo vî qenalî hê girêdan nehatiye avakirin.","Destûra vî qenalî qediya.","veke","Ji bo guhertina qenalê berbi çep an rast bikişîne","Niha qenaleke zindî ne çalak e. Piştî pejirandinê dê li vir xuya bibe.","Nîşe: Dema bi înternetê guh didî, navnîşana IP ya te dibe ku ji pêşkêşkara weşanê re bê şandin. Qenal piştî erêkirina weşangerê têne çalakirin."],
};
export function ui(lang) {
  const key = lang === "ku" && kuDialect() === "kurmanji" ? "kmj" : lang;
  const row = UI[key] || UI.en;
  const o = {}; K.forEach((k, i) => { o[k] = row[i]; });
  return o;
}
/** Map a German service/license message to the app language. */
const ERR = { "Verbindung wird hergestellt …": "connecting", "Der Radiosender ist momentan nicht erreichbar.": "unreachable", "Bitte überprüfe deine Internetverbindung.": "offline", "Dieser Sender ist in deinem Land nicht verfügbar.": "geo", "Dieser Sender ist noch nicht freigeschaltet.": "disabled", "Für diesen Sender liegt noch keine Genehmigung vor.": "notLicensed", "Für diesen Sender ist noch keine Verbindung eingerichtet.": "noStream", "Die Genehmigung für diesen Sender ist abgelaufen.": "expired" };
export function errText(u, msg) { return (ERR[msg] && u[ERR[msg]]) || msg; }
