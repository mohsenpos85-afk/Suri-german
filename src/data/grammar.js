export const GRAMMAR = {
  A1: [
    { de: "Personalpronomen", ku: "جێناوی کەسی", icon: "✺",
      exp: "جێناوەکان: ich (من)، du (تۆ)، er/sie/es (ئەو)، wir (ئێمە)، ihr (ئێوە)، sie (ئەوان)، Sie (ئێوەی فەرمی).",
      tr: "Kişi Zamirleri", expTr: "Zamirler: ich (ben), du (sen), er/sie/es (o), wir (biz), ihr (siz), sie (onlar), Sie (siz - resmi).",
      en: "Personal pronouns", expEn: "Pronouns: ich (I), du (you), er/sie/es (he/she/it), wir (we), ihr (you all), sie (they), Sie (you - formal).",
      ar: "ضمائر الشخص", expAr: "الضمائر: ich (أنا)، du (أنت)، er/sie/es (هو/هي/هو-محايد)، wir (نحن)، ihr (أنتم)، sie (هم)، Sie (أنتم - رسمي).",
      ex: [ { de: "Ich bin Student.", ku: "من خوێندکارم.", tr: "Ben öğrenciyim.", en: "I am a student.", ar: "أنا طالب." }, { de: "Wir lernen Deutsch.", ku: "ئێمە ئەڵمانی فێردەبین.", tr: "Almanca öğreniyoruz.", en: "We are learning German.", ar: "نحن نتعلم الألمانية." }, { de: "Sie ist Lehrerin.", ku: "ئەو (مێ) مامۆستایە.", tr: "O (dişil) öğretmen.", en: "She is a teacher.", ar: "هي معلمة." }, { de: "Er kommt aus Erbil.", ku: "ئەو خەڵکی هەولێرە.", tr: "O Erbil'den.", en: "He is from Erbil.", ar: "هو من أربيل." }, { de: "Ihr seid willkommen.", ku: "ئێوە بەخێربێن.", tr: "Siz hoş geldiniz.", en: "You (all) are welcome.", ar: "أنتم مرحب بكم." }, { de: "Es ist kalt heute.", ku: "ئەمڕۆ ساردە.", tr: "Bugün soğuk.", en: "It is cold today.", ar: "الجو بارد اليوم." } ] },
    { de: "sein und haben", ku: "کرداری «بوون» و «هەبوون»", icon: "◈",
      exp: "sein: ich bin، du bist، er ist، wir sind، ihr seid، sie sind. haben: ich habe، du hast، er hat، wir haben، ihr habt، sie haben. زۆر گرنگن چونکە بنەمای زۆر شتن.",
      tr: "«olmak» ve «sahip olmak» Fiilleri", expTr: "sein: ich bin, du bist, er ist, wir sind, ihr seid, sie sind. haben: ich habe, du hast, er hat, wir haben, ihr habt, sie haben. Pek çok şeyin temeli olduğu için çok önemlidirler.",
      en: "\"sein\" and \"haben\" (to be / to have)", expEn: "sein (to be): ich bin, du bist, er ist, wir sind, ihr seid, sie sind. haben (to have): ich habe, du hast, er hat, wir haben, ihr habt, sie haben. They are very important because they form the basis of many things.",
      ar: "فعلا «sein» و«haben» (الكينونة والامتلاك)", expAr: "sein (يكون): ich bin، du bist، er ist، wir sind، ihr seid، sie sind. haben (يملك): ich habe، du hast، er hat، wir haben، ihr habt، sie haben. مهمّان جدا لأنهما أساس أشياء كثيرة.",
      ex: [ { de: "Ich bin müde.", ku: "ماندووم.", tr: "Yorgunum.", en: "I am tired.", ar: "أنا متعب." }, { de: "Du hast Zeit.", ku: "کاتت هەیە.", tr: "Zamanın var.", en: "You have time.", ar: "لديك وقت." }, { de: "Wir sind hier.", ku: "ئێمە لێرەین.", tr: "Biz buradayız.", en: "We are here.", ar: "نحن هنا." }, { de: "Er ist mein Bruder.", ku: "ئەو برامە.", tr: "O benim kardeşim.", en: "He is my brother.", ar: "هو أخي." }, { de: "Sie hat ein Auto.", ku: "ئەو ئۆتۆمبێلێکی هەیە.", tr: "Onun arabası var.", en: "She has a car.", ar: "لديها سيارة." }, { de: "Ihr seid spät.", ku: "ئێوە درەنگن.", tr: "Siz geç kaldınız.", en: "You (all) are late.", ar: "أنتم متأخرون." } ] },
    { de: "Präsens — regelmäßige Verben", ku: "کاتی ئێستا — کرداری ڕێکوپێک", icon: "▸",
      exp: "ڕەگی کردار + کۆتایی: ich -e، du -st، er/sie/es -t، wir -en، ihr -t، sie/Sie -en. نموونە: lernen → ich lerne.",
      tr: "Geniş Zaman — Düzenli Fiiller", expTr: "Fiil kökü + ek: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Örnek: lernen → ich lerne.",
      en: "Present tense — regular verbs", expEn: "Verb stem + ending: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Example: lernen → ich lerne.",
      ar: "المضارع — الأفعال المنتظمة", expAr: "جذر الفعل + النهاية: ich -e، du -st، er/sie/es -t، wir -en، ihr -t، sie/Sie -en. مثال: lernen ← ich lerne.",
      ex: [ { de: "ich lerne", ku: "فێردەبم", tr: "öğreniyorum", en: "I learn / I am learning", ar: "أنا أتعلّم" }, { de: "du lernst", ku: "تۆ فێردەبیت", tr: "sen öğreniyorsun", en: "you learn / you are learning", ar: "أنت تتعلّم" }, { de: "wir lernen", ku: "ئێمە فێردەبین", tr: "biz öğreniyoruz", en: "we learn / we are learning", ar: "نحن نتعلّم" }, { de: "er spielt Fußball.", ku: "ئەو تۆپی پێ یاری دەکات.", tr: "O futbol oynuyor.", en: "He plays football.", ar: "هو يلعب كرة القدم." }, { de: "ihr arbeitet viel.", ku: "ئێوە زۆر کار دەکەن.", tr: "Siz çok çalışıyorsunuz.", en: "You (all) work a lot.", ar: "أنتم تعملون كثيرا." }, { de: "sie wohnen hier.", ku: "ئەوان لێرە نیشتەجێن.", tr: "Onlar burada yaşıyor.", en: "They live here.", ar: "هم يسكنون هنا." } ] },
    { de: "Artikel: der, die, das", ku: "ئارتیکڵ (der/die/das)", icon: "✦",
      exp: "هەموو ناوێک لە ئەڵمانیدا ڕەگەزی هەیە: نێر «der»، مێ «die»، بێلایەن «das». ئارتیکڵ پێشتر دێت و دەبێت لەگەڵ ناوەکەدا فێری بیت، چونکە هەمیشە بە لۆژیک نییە. لای خوارەوە یاسا و نموونەکان بەپێی هەر ئارتیکڵێک جیاکراونەتەوە.",
      tr: "Artikel: der, die, das", expTr: "Almancada her ismin bir cinsiyeti vardır: eril «der», dişil «die», yansız «das». Artikel ismin önüne gelir ve isimle birlikte öğrenilmelidir, çünkü her zaman mantıklı değildir. Aşağıda her artikele göre ayrılmış kurallar ve örnekler bulunmaktadır.",
      en: "Articles: der, die, das", expEn: "In German, every noun has a gender: masculine «der», feminine «die», neuter «das». The article comes before the noun and must be learned together with it, since it is not always logical. Below, the rules and examples are separated by each article.",
      ar: "أدوات التعريف: der, die, das", expAr: "في اللغة الألمانية لكل اسم جنس نحوي: مذكر «der»، مؤنث «die»، محايد «das». تأتي الأداة قبل الاسم ويجب تعلّمها مع الاسم نفسه، لأن الأمر ليس منطقيا دائما. أدناه القواعد والأمثلة مقسّمة حسب كل أداة.",
      groups: [
        { art: "der", emoji: "🔵", tr: "Eril (männlich)", ku: "نێر (männlich)", color: "#2f6f8f", rules: ["ڕۆژەکانی هەفتە، مانگەکان، وەرزەکان", "زۆربەی پیشەکان", "کۆتاییەکان: -er، -en، -el (زۆرجار)", "زۆربەی کەسانی نێر"], rulesTr: ["Haftanın günleri, aylar, mevsimler", "Çoğu meslek", "Sonekler: -er, -en, -el (çoğunlukla)", "Çoğu erkek kişi"], rulesEn: ["Days of the week, months, seasons", "Most professions", "Endings: -er, -en, -el (often)", "Most male persons"], rulesAr: ["أيام الأسبوع، الأشهر، الفصول", "معظم المهن", "اللواحق: -er، -en، -el (غالبًا)", "معظم الأشخاص الذكور"], words: [["der Mann","پیاو","adam","man","رجل"],["der Vater","باوک","baba","father","أب"],["der Sohn","کوڕ","oğul","son","ابن"],["der Bruder","برا","erkek kardeş","brother","أخ"],["der Lehrer","مامۆستا","öğretmen","teacher","معلم"],["der Arzt","پزیشک","doktor","doctor","طبيب"],["der Student","خوێندکار","öğrenci","student","طالب"],["der Fahrer","شۆفێر","şoför","driver","سائق"],["der Bäcker","نانەوا","fırıncı","baker","خبّاز"],["der Computer","کۆمپیوتەر","bilgisayar","computer","حاسوب"],["der Tisch","مێز","masa","table","طاولة"],["der Stuhl","کورسی","sandalye","chair","كرسي"],["der Fernseher","تەلەفزیۆن","televizyon","television","تلفاز"],["der Kühlschrank","بەفرگر / سەلاجە","buzdolabı","refrigerator","ثلاجة"],["der Montag","دووشەممە","pazartesi","Monday","الاثنين"],["der Dienstag","سێشەممە","salı","Tuesday","الثلاثاء"],["der Mittwoch","چوارشەممە","çarşamba","Wednesday","الأربعاء"],["der Januar","ژانویە","ocak","January","يناير"],["der Februar","شوبات","şubat","February","فبراير"],["der Sommer","هاوین","yaz","summer","الصيف"],["der Winter","زستان","kış","winter","الشتاء"]] },
        { art: "die", emoji: "🔴", tr: "Dişil (feminin)", ku: "مێ (feminin)", color: "#b8412e", rules: ["کۆتاییەکان: -e، -ung، -heit، -keit، -ion، -schaft، -ie", "زۆربەی کەسانی مێ", "زۆربەی شار و شتەکان"], rulesTr: ["Sonekler: -e, -ung, -heit, -keit, -ion, -schaft, -ie", "Çoğu dişi kişi", "Çoğu şehir ve nesne"], rulesEn: ["Endings: -e, -ung, -heit, -keit, -ion, -schaft, -ie", "Most female persons", "Most cities and objects"], rulesAr: ["اللواحق: -e، -ung، -heit، -keit، -ion، -schaft، -ie", "معظم الأشخاص الإناث", "معظم المدن والأشياء"], words: [["die Frau","ژن","kadın","woman","امرأة"],["die Mutter","دایک","anne","mother","أم"],["die Tochter","کچ","kız","daughter","ابنة"],["die Schwester","خوشک","kız kardeş","sister","أخت"],["die Lehrerin","مامۆستا (ژن)","öğretmen (kadın)","teacher (female)","معلمة"],["die Ärztin","پزیشک (ژن)","doktor (kadın)","doctor (female)","طبيبة"],["die Lampe","چرا / لامپە","lamba","lamp","مصباح"],["die Tür","دەرگا","kapı","door","باب"],["die Schule","قوتابخانە","okul","school","مدرسة"],["die Stadt","شار","şehir","city","مدينة"],["die Wohnung","ئەپارتمان / نیشتەجێ","daire","apartment","شقة"],["die Küche","چێشتخانە","mutfak","kitchen","مطبخ"],["die Straße","شەقام","sokak","street","شارع"],["die Prüfung","تاقیکردنەوە","sınav","exam","امتحان"],["die Zeitung","ڕۆژنامە","gazete","newspaper","جريدة"],["die Meinung","بۆچوون","görüş","opinion","رأي"],["die Freiheit","ئازادی","özgürlük","freedom","حرية"],["die Möglichkeit","دەرفەت / ئەگەر","olasılık / imkân","possibility","إمكانية"],["die Freundschaft","هاوڕێیەتی","arkadaşlık","friendship","صداقة"],["die Nation","نەتەوە","millet","nation","أمة"],["die Situation","بارودۆخ","durum","situation","وضع / حالة"],["die Biologie","زیندەزانی","biyoloji","biology","علم الأحياء"],["die Musik","مۆسیقا","müzik","music","موسيقى"]] },
        { art: "das", emoji: "🟡", tr: "Nötr (neutral)", ku: "بێلایەن (neutral)", color: "#c8922a", rules: ["کۆتاییەکان: -chen، -lein، -ment، -um", "کردار وەک ناو", "منداڵ و شتەکان"], rulesTr: ["Sonekler: -chen, -lein, -ment, -um", "İsim olarak kullanılan fiiller", "Çocuklar ve nesneler"], rulesEn: ["Endings: -chen, -lein, -ment, -um", "Verbs used as nouns", "Children and objects"], rulesAr: ["اللواحق: -chen، -lein، -ment، -um", "الأفعال المستخدمة كأسماء", "الأطفال والأشياء"], words: [["das Kind","منداڵ","çocuk","child","طفل"],["das Baby","کۆرپە","bebek","baby","رضيع"],["das Mädchen","کچ (بچووک)","kız (küçük)","girl (young)","فتاة (صغيرة)"],["das Haus","ماڵ / خانوو","ev","house","بيت / منزل"],["das Auto","ئۆتۆمبێل","araba","car","سيارة"],["das Buch","کتێب","kitap","book","كتاب"],["das Fenster","پەنجەرە","pencere","window","نافذة"],["das Wasser","ئاو","su","water","ماء"],["das Essen","خواردن","yemek","food","طعام"],["das Trinken","خواردنەوە","içecek","drinking / beverage","شرب / مشروب"],["das Spiel","یاری","oyun","game","لعبة"],["das Zimmer","ژوور","oda","room","غرفة"],["das Krankenhaus","نەخۆشخانە","hastane","hospital","مستشفى"],["das Studium","خوێندن","üniversite eğitimi","university studies","الدراسة الجامعية"],["das Museum","مۆزەخانە","müze","museum","متحف"],["das Zentrum","ناوەند","merkez","center","مركز"],["das Instrument","ئامێری مۆسیقا","enstrüman","instrument","آلة موسيقية"],["das Problem","کێشە","sorun","problem","مشكلة"],["das Telefon","تەلەفۆن","telefon","telephone","هاتف"],["das Foto","وێنە","fotoğraf","photo","صورة"]] },
      ],
      merksatz: [ { de: "der", ku: "نێر (männlich)", tr: "Eril (männlich)", en: "Masculine (männlich)", ar: "مذكر (männlich)" }, { de: "die", ku: "مێ (weiblich)", tr: "Dişil (weiblich)", en: "Feminine (weiblich)", ar: "مؤنث (weiblich)" }, { de: "das", ku: "بێلایەن (neutral)", tr: "Nötr (neutral)", en: "Neuter (neutral)", ar: "محايد (neutral)" } ],
      ex: [ { de: "der Tisch", ku: "مێز (نێر)", tr: "masa (eril)", en: "table (masculine)", ar: "طاولة (مذكر)" }, { de: "die Lampe", ku: "چرا (مێ)", tr: "lamba (dişil)", en: "lamp (feminine)", ar: "مصباح (مؤنث)" }, { de: "das Buch", ku: "کتێب (بێلایەن)", tr: "kitap (yansız)", en: "book (neuter)", ar: "كتاب (محايد)" }, { de: "der Stuhl ist neu.", ku: "کورسییەکە نوێیە.", tr: "Sandalye yeni.", en: "The chair is new.", ar: "الكرسي جديد." }, { de: "die Tür ist offen.", ku: "دەرگاکە کراوەیە.", tr: "Kapı açık.", en: "The door is open.", ar: "الباب مفتوح." }, { de: "das Fenster ist groß.", ku: "پەنجەرەکە گەورەیە.", tr: "Pencere büyük.", en: "The window is big.", ar: "النافذة كبيرة." } ] },
    { de: "Plural", ku: "کۆ (زۆرینە)", icon: "❖",
      exp: "لە ئەڵمانیدا کۆکردنەوە چەند شێوازی هەیە: -e، -n/-en، -er، -s، یان بێ گۆڕان. لە کۆدا ئارتیکڵ هەمیشە «die» دەبێت.",
      tr: "Çoğul", expTr: "Almancada çoğul yapmanın birkaç yolu vardır: -e, -n/-en, -er, -s veya değişmeden. Çoğulda artikel her zaman «die» olur.",
      en: "Plural", expEn: "In German there are several ways to form the plural: -e, -n/-en, -er, -s, or no change. In the plural, the article is always «die».",
      ar: "الجمع", expAr: "في اللغة الألمانية هناك عدة طرق لتكوين الجمع: -e، -n/-en، -er، -s، أو بدون تغيير. في الجمع تكون الأداة دائما «die».",
      ex: [ { de: "das Kind → die Kinder", ku: "منداڵ → منداڵان", tr: "çocuk → çocuklar", en: "the child → the children", ar: "الطفل ← الأطفال" }, { de: "die Frau → die Frauen", ku: "ژن → ژنان", tr: "kadın → kadınlar", en: "the woman → the women", ar: "المرأة ← النساء" }, { de: "das Auto → die Autos", ku: "ئۆتۆمبێل → ئۆتۆمبێلەکان", tr: "araba → arabalar", en: "the car → the cars", ar: "السيارة ← السيارات" }, { de: "der Tisch → die Tische", ku: "مێز → مێزەکان", tr: "masa → masalar", en: "the table → the tables", ar: "الطاولة ← الطاولات" }, { de: "der Apfel → die Äpfel", ku: "سێو → سێوەکان", tr: "elma → elmalar", en: "the apple → the apples", ar: "التفاحة ← التفاحات" }, { de: "das Buch → die Bücher", ku: "کتێب → کتێبەکان", tr: "kitap → kitaplar", en: "the book → the books", ar: "الكتاب ← الكتب" } ] },
    { de: "Bestimmte / unbestimmte Artikel", ku: "ئارتیکڵی دیاریکراو و نادیار", icon: "✧",
      exp: "«der/die/das» بۆ شتی دیاریکراو (ئەو شتەی دەیناسین). «ein/eine» بۆ شتی نادیار (شتێک بۆ یەکەم جار). بۆ بێلایەن و نێر «ein»، بۆ مێ «eine».",
      tr: "Belirli / Belirsiz Artikel", expTr: "«der/die/das» tanıdığımız belirli şeyler için kullanılır. «ein/eine» ilk kez söz edilen belirsiz şeyler için kullanılır. Yansız ve eril için «ein», dişil için «eine» kullanılır.",
      en: "Definite / indefinite articles", expEn: "«der/die/das» is used for definite things (things we already know). «ein/eine» is used for indefinite things (something mentioned for the first time). For neuter and masculine, «ein» is used; for feminine, «eine» is used.",
      ar: "أدوات التعريف المعرّفة والنكرة", expAr: "تُستخدم «der/die/das» للأشياء المعرّفة (التي نعرفها). وتُستخدم «ein/eine» للأشياء غير المعرّفة (شيء يُذكر لأول مرة). للمحايد والمذكر تُستخدم «ein»، وللمؤنث تُستخدم «eine».",
      ex: [ { de: "Das ist ein Buch.", ku: "ئەمە کتێبێکە (نادیار).", tr: "Bu bir kitap. (belirsiz)", en: "This is a book. (indefinite)", ar: "هذا كتاب. (نكرة)" }, { de: "Das Buch ist neu.", ku: "کتێبەکە نوێیە (دیاریکراو).", tr: "Kitap yeni. (belirli)", en: "The book is new. (definite)", ar: "الكتاب جديد. (معرفة)" }, { de: "Ich habe eine Frage.", ku: "پرسیارێکم هەیە.", tr: "Bir sorum var.", en: "I have a question.", ar: "لدي سؤال." }, { de: "Ein Mann wartet draußen.", ku: "پیاوێک لە دەرەوە چاوەڕێیە.", tr: "Dışarıda bir adam bekliyor.", en: "A man is waiting outside.", ar: "رجل ينتظر في الخارج." }, { de: "Der Mann ist mein Vater.", ku: "پیاوەکە باوکمە.", tr: "Adam babam.", en: "The man is my father.", ar: "الرجل هو أبي." }, { de: "Eine Katze schläft hier.", ku: "پشیلەیەک لێرە خەوتووە.", tr: "Burada bir kedi uyuyor.", en: "A cat is sleeping here.", ar: "قطة نائمة هنا." } ] },
    { de: "Akkusativ", ku: "ئاککوزاتیڤ (بەرکاری ڕاستەوخۆ)", icon: "→",
      exp: "ئاککوزاتیڤ بەرکاری ڕاستەوخۆیە. تەنها ئارتیکڵی نێر دەگۆڕێت: der → den، ein → einen. مێ و بێلایەن ناگۆڕێن.",
      tr: "Akuzatif (Belirtme Durumu)", expTr: "Akuzatif doğrudan nesne durumudur. Sadece eril artikel değişir: der → den, ein → einen. Dişil ve yansız değişmez.",
      en: "Accusative case", expEn: "The accusative is the case of the direct object. Only the masculine article changes: der → den, ein → einen. Feminine and neuter do not change.",
      ar: "حالة النصب (الأكوزاتيف)", expAr: "حالة النصب (الأكوزاتيف) هي حالة المفعول به المباشر. تتغير فقط أداة المذكر: der ← den، ein ← einen. أما المؤنث والمحايد فلا يتغيران.",
      ex: [ { de: "Ich sehe den Mann.", ku: "پیاوەکە دەبینم.", tr: "Adamı görüyorum.", en: "I see the man.", ar: "أرى الرجل." }, { de: "Ich kaufe einen Apfel.", ku: "سێوێک دەکڕم.", tr: "Bir elma satın alıyorum.", en: "I am buying an apple.", ar: "أشتري تفاحة." }, { de: "Ich lese das Buch.", ku: "کتێبەکە دەخوێنمەوە.", tr: "Kitabı okuyorum.", en: "I am reading the book.", ar: "أقرأ الكتاب." }, { de: "Er hat einen Hund.", ku: "سەگێکی هەیە.", tr: "Bir köpeği var.", en: "He has a dog.", ar: "لديه كلب." }, { de: "Wir brauchen den Schlüssel.", ku: "پێویستیمان بە کلیلەکەیە.", tr: "Anahtara ihtiyacımız var.", en: "We need the key.", ar: "نحتاج إلى المفتاح." }, { de: "Ich trinke eine Cola.", ku: "کۆلایەک دەخۆمەوە.", tr: "Bir kola içiyorum.", en: "I am drinking a cola.", ar: "أشرب كولا." } ] },
    { de: "Possessivartikel", ku: "ئارتیکڵی خاوەندارێتی", icon: "✪",
      exp: "mein (هی من)، dein (هی تۆ)، sein (هی ئەو نێر)، ihr (هی ئەو مێ)، unser (هی ئێمە). لەگەڵ ڕەگەزی ناوەکە دەگونجێن.",
      tr: "İyelik Sıfatları", expTr: "mein (benim), dein (senin), sein (onun - eril), ihr (onun - dişil), unser (bizim). İsmin cinsiyetiyle uyum sağlarlar.",
      en: "Possessive articles", expEn: "mein (my), dein (your), sein (his), ihr (her), unser (our). They agree with the gender of the noun.",
      ar: "أدوات الملكية", expAr: "mein (ملكي)، dein (ملكك)، sein (ملكه - للمذكر)، ihr (ملكها - للمؤنث)، unser (ملكنا). تتوافق مع جنس الاسم.",
      ex: [ { de: "Das ist mein Buch.", ku: "ئەمە کتێبی منە.", tr: "Bu benim kitabım.", en: "This is my book.", ar: "هذا كتابي." }, { de: "Deine Tasche ist schön.", ku: "جانتاکەت جوانە.", tr: "Çantan güzel.", en: "Your bag is nice.", ar: "حقيبتك جميلة." }, { de: "Sein Auto ist neu.", ku: "ئۆتۆمبێلەکەی نوێیە.", tr: "Onun arabası yeni.", en: "His car is new.", ar: "سيارته جديدة." }, { de: "Ihre Mutter ist Ärztin.", ku: "دایکی پزیشکە.", tr: "Annesi doktor.", en: "Her mother is a doctor.", ar: "أمها طبيبة." }, { de: "Unser Haus ist groß.", ku: "خانووەکەمان گەورەیە.", tr: "Evimiz büyük.", en: "Our house is big.", ar: "بيتنا كبير." }, { de: "Euer Lehrer ist nett.", ku: "مامۆستاکەتان بەسۆزە.", tr: "Öğretmeniniz nazik.", en: "Your (all) teacher is nice.", ar: "معلمكم لطيف." } ] },
    { de: "Negation: nicht / kein", ku: "نەرێ کردن (nicht/kein)", icon: "⊘",
      exp: "«nicht» بۆ نەرێکردنی کردار، سیفەت یان ڕستە. «kein» بۆ نەرێکردنی ناو (لەگەڵ ئارتیکڵی نادیار یان بێ ئارتیکڵ).",
      tr: "Olumsuzluk: nicht / kein", expTr: "«nicht» fiil, sıfat veya cümleyi olumsuz yapar. «kein» isimleri olumsuz yapar (belirsiz artikel veya artikelsiz isimlerle).",
      en: "Negation: nicht / kein", expEn: "«nicht» negates a verb, adjective, or sentence. «kein» negates a noun (used with an indefinite article or no article).",
      ar: "النفي: nicht / kein", expAr: "«nicht» تُستخدم لنفي الفعل أو الصفة أو الجملة. «kein» تُستخدم لنفي الاسم (مع أداة النكرة أو بدون أداة).",
      ex: [ { de: "Ich verstehe nicht.", ku: "تێناگەم.", tr: "Anlamıyorum.", en: "I don't understand.", ar: "لا أفهم." }, { de: "Ich habe kein Geld.", ku: "پارەم نییە.", tr: "Param yok.", en: "I have no money.", ar: "ليس لدي مال." }, { de: "Das ist nicht richtig.", ku: "ئەمە ڕاست نییە.", tr: "Bu doğru değil.", en: "That is not correct.", ar: "هذا ليس صحيحا." }, { de: "Er ist nicht hier.", ku: "ئەو لێرە نییە.", tr: "O burada değil.", en: "He is not here.", ar: "هو ليس هنا." }, { de: "Ich habe keine Zeit.", ku: "کاتم نییە.", tr: "Zamanım yok.", en: "I have no time.", ar: "ليس لدي وقت." }, { de: "Das macht keinen Spaß.", ku: "ئەمە خۆش نییە.", tr: "Bu eğlenceli değil.", en: "That's not fun.", ar: "هذا ليس ممتعا." } ] },
    { de: "W-Fragen", ku: "پرسیاری W", icon: "?",
      exp: "پرسیار بە وشەی پرسیاری دەست پێدەکات: wer (کێ)، was (چی)، wo (لەکوێ)، wann (کەی)، wie (چۆن)، warum (بۆچی). کردار دێتە جێی دووەم.",
      tr: "W-Soruları", expTr: "Sorular soru kelimesiyle başlar: wer (kim), was (ne), wo (nerede), wann (ne zaman), wie (nasıl), warum (neden). Fiil ikinci sıraya gelir.",
      en: "WH-questions", expEn: "A question starts with a question word: wer (who), was (what), wo (where), wann (when), wie (how), warum (why). The verb comes in second position.",
      ar: "أسئلة الاستفهام (W-Fragen)", expAr: "يبدأ السؤال بكلمة استفهام: wer (من)، was (ماذا)، wo (أين)، wann (متى)، wie (كيف)، warum (لماذا). يأتي الفعل في الموضع الثاني.",
      ex: [ { de: "Wo wohnst du?", ku: "لەکوێ نیشتەجێیت؟", tr: "Nerede yaşıyorsun?", en: "Where do you live?", ar: "أين تسكن؟" }, { de: "Was machst du?", ku: "چی دەکەیت؟", tr: "Ne yapıyorsun?", en: "What are you doing?", ar: "ماذا تفعل؟" }, { de: "Wann kommst du?", ku: "کەی دێیت؟", tr: "Ne zaman geliyorsun?", en: "When are you coming?", ar: "متى ستأتي؟" }, { de: "Wer ist das?", ku: "ئەمە کێیە؟", tr: "Bu kim?", en: "Who is that?", ar: "من هذا؟" }, { de: "Wie heißt du?", ku: "ناوت چییە؟", tr: "Adın ne?", en: "What is your name?", ar: "ما اسمك؟" }, { de: "Warum lernst du Deutsch?", ku: "بۆچی ئەڵمانی فێردەبیت؟", tr: "Neden Almanca öğreniyorsun?", en: "Why are you learning German?", ar: "لماذا تتعلم الألمانية؟" } ] },
    { de: "Ja/Nein-Fragen", ku: "پرسیاری بەڵێ/نەخێر", icon: "↔",
      exp: "ئەم پرسیارانە بە کردار دەست پێدەکەن (کردار دێتە جێی یەکەم). وەڵام بە ja یان nein.",
      tr: "Evet/Hayır Soruları", expTr: "Bu sorular fiille başlar (fiil birinci sıraya gelir). Cevap ja (evet) veya nein (hayır) şeklindedir.",
      en: "Yes/No questions", expEn: "These questions start with the verb (the verb comes in first position). The answer is ja (yes) or nein (no).",
      ar: "أسئلة نعم/لا", expAr: "تبدأ هذه الأسئلة بالفعل (يأتي الفعل في الموضع الأول). الجواب يكون ja (نعم) أو nein (لا).",
      ex: [ { de: "Kommst du mit?", ku: "لەگەڵم دێیت؟", tr: "Benimle geliyor musun?", en: "Are you coming along?", ar: "هل ستأتي معي؟" }, { de: "Hast du Zeit?", ku: "کاتت هەیە؟", tr: "Zamanın var mı?", en: "Do you have time?", ar: "هل لديك وقت؟" }, { de: "Ist das richtig?", ku: "ئەمە ڕاستە؟", tr: "Bu doğru mu?", en: "Is that correct?", ar: "هل هذا صحيح؟" }, { de: "Sprichst du Englisch?", ku: "ئینگلیزی قسە دەکەیت؟", tr: "İngilizce konuşuyor musun?", en: "Do you speak English?", ar: "هل تتحدث الإنجليزية؟" }, { de: "Magst du Tee?", ku: "حەزت لە چایە؟", tr: "Çayı sever misin?", en: "Do you like tea?", ar: "هل تحب الشاي؟" }, { de: "Wohnst du hier?", ku: "لێرە نیشتەجێیت؟", tr: "Burada mı yaşıyorsun?", en: "Do you live here?", ar: "هل تسكن هنا؟" } ] },
    { de: "Satzstellung", ku: "ڕیزبەندی ڕستە", icon: "≡",
      exp: "لە ڕستەی ئاساییدا کردار هەمیشە لە جێی دووەمە. «Position 2» یاسای زۆر گرنگی ئەڵمانییە.",
      tr: "Cümle Yapısı", expTr: "Normal cümlede fiil her zaman ikinci sıradadır. «İkinci konum» Almancada çok önemli bir kuraldır.",
      en: "Word order", expEn: "In a normal sentence, the verb is always in second position. «Position 2» is a very important rule in German.",
      ar: "ترتيب الجملة", expAr: "في الجملة العادية يكون الفعل دائما في الموضع الثاني. «الموضع الثاني» قاعدة مهمة جدا في اللغة الألمانية.",
      ex: [ { de: "Ich lerne heute Deutsch.", ku: "ئەمڕۆ ئەڵمانی فێردەبم.", tr: "Bugün Almanca öğreniyorum.", en: "I am learning German today.", ar: "أتعلم الألمانية اليوم." }, { de: "Heute lerne ich Deutsch.", ku: "ئەمڕۆ ئەڵمانی فێردەبم (کردار هێشتا جێی ٢).", tr: "Bugün Almanca öğreniyorum (fiil hâlâ 2. sırada).", en: "Today I am learning German (verb still in position 2).", ar: "اليوم أتعلم الألمانية (الفعل ما زال في الموضع الثاني)." }, { de: "Morgen gehe ich nach Hause.", ku: "سبەینێ دەچمە ماڵەوە.", tr: "Yarın eve gidiyorum.", en: "Tomorrow I am going home.", ar: "غدا سأذهب إلى البيت." }, { de: "Am Abend sehe ich fern.", ku: "ئێوارە تەلەفزیۆن سەیر دەکەم.", tr: "Akşam televizyon izliyorum.", en: "In the evening I watch TV.", ar: "في المساء أشاهد التلفاز." }, { de: "In Bochum wohne ich.", ku: "لە بۆخوم نیشتەجێم.", tr: "Bochum'da yaşıyorum.", en: "I live in Bochum.", ar: "أسكن في بوخوم." }, { de: "Jetzt esse ich.", ku: "ئێستا دەخۆم.", tr: "Şimdi yiyorum.", en: "Now I am eating.", ar: "الآن أنا آكل." } ] },
    { de: "Modalverben", ku: "کرداری یاریدەدەر (مۆداڵ)", icon: "◆",
      exp: "können (توانین)، müssen (دەبێت)، wollen (ویستن)، dürfen (مۆڵەت)، sollen (پێویست)، möchten (حەزکردن). کرداری دووەم بە شێوەی بنەڕەتی دەچێتە کۆتایی ڕستە.",
      tr: "Modal Fiiller", expTr: "können (yapabilmek), müssen (zorunda olmak), wollen (istemek), dürfen (izni olmak), sollen (gerekmek), möchten (arzu etmek). İkinci fiil cümlenin sonuna mastar olarak gelir.",
      en: "Modal verbs", expEn: "können (to be able to), müssen (to have to), wollen (to want to), dürfen (to be allowed to), sollen (should), möchten (would like to). The second verb goes to the end of the sentence in its infinitive form.",
      ar: "الأفعال الناقصة (المودالية)", expAr: "können (يستطيع)، müssen (يجب)، wollen (يريد)، dürfen (يُسمح له)، sollen (ينبغي)، möchten (يرغب). يذهب الفعل الثاني إلى نهاية الجملة بصيغة المصدر.",
      ex: [ { de: "Ich kann schwimmen.", ku: "دەتوانم مەلە بکەم.", tr: "Yüzebiliyorum.", en: "I can swim.", ar: "أستطيع السباحة." }, { de: "Du musst lernen.", ku: "دەبێت فێربیت.", tr: "Çalışmak zorundasın.", en: "You have to study.", ar: "يجب أن تدرس." }, { de: "Wir wollen essen.", ku: "دەمانەوێت بخۆین.", tr: "Yemek istiyoruz.", en: "We want to eat.", ar: "نريد أن نأكل." }, { de: "Darf ich rein?", ku: "دەکرێت بێمە ژوورەوە؟", tr: "İçeri girebilir miyim?", en: "May I come in?", ar: "هل يمكنني الدخول؟" }, { de: "Du sollst warten.", ku: "دەبێت چاوەڕێ بکەیت.", tr: "Beklemelisin.", en: "You should wait.", ar: "ينبغي أن تنتظر." }, { de: "Ich möchte Kaffee.", ku: "قاوەم دەوێت.", tr: "Kahve istiyorum.", en: "I would like coffee.", ar: "أريد قهوة." } ] },
    { de: "Unregelmäßige Verben", ku: "کرداری ناڕێک (بنەڕەتی)", icon: "↯",
      exp: "هەندێ کردار لە «du» و «er/sie/es»دا ڤاوڵەکەیان دەگۆڕێت (a→ä، e→i/ie). نموونە: fahren → du fährst، essen → du isst.",
      tr: "Düzensiz Fiiller", expTr: "Bazı fiiller «du» ve «er/sie/es» için ünlü değiştirir (a→ä, e→i/ie). Örnek: fahren → du fährst, essen → du isst.",
      en: "Irregular verbs", expEn: "Some verbs change their vowel in the «du» and «er/sie/es» forms (a→ä, e→i/ie). Example: fahren → du fährst, essen → du isst.",
      ar: "الأفعال الشاذة", expAr: "بعض الأفعال تغيّر حرف العلة في صيغتي «du» و«er/sie/es» (a←ä، e←i/ie). مثال: fahren ← du fährst، essen ← du isst.",
      ex: [ { de: "fahren → er fährt", ku: "لێخوڕین → ئەو لێدەخوڕێت", tr: "gitmek → o gidiyor", en: "to drive → he drives", ar: "يقود ← هو يقود" }, { de: "essen → du isst", ku: "خواردن → تۆ دەخۆیت", tr: "yemek → sen yiyorsun", en: "to eat → you eat", ar: "يأكل ← أنت تأكل" }, { de: "sehen → er sieht", ku: "بینین → ئەو دەبینێت", tr: "görmek → o görüyor", en: "to see → he sees", ar: "يرى ← هو يرى" }, { de: "geben → du gibst", ku: "دان → تۆ دەدەیت", tr: "vermek → sen veriyorsun", en: "to give → you give", ar: "يعطي ← أنت تعطي" }, { de: "lesen → sie liest", ku: "خوێندنەوە → ئەو دەیخوێنێتەوە", tr: "okumak → o okuyor", en: "to read → she reads", ar: "يقرأ ← هي تقرأ" }, { de: "schlafen → er schläft", ku: "خەوتن → ئەو دەخەوێت", tr: "uyumak → o uyuyor", en: "to sleep → he sleeps", ar: "ينام ← هو ينام" } ] },
    { de: "Trennbare Verben", ku: "کرداری لێکدراو", icon: "⇿",
      exp: "هەندێ کردار پێشگرێکیان هەیە کە لە کاتی ئێستادا لێک دەبێتەوە و دەچێتە کۆتایی ڕستە. نموونە: aufstehen → ich stehe auf.",
      tr: "Ayrılabilen Fiiller", expTr: "Bazı fiillerin geniş zamanda ayrılan bir önekleri vardır ve cümlenin sonuna gider. Örnek: aufstehen → ich stehe auf.",
      en: "Separable verbs", expEn: "Some verbs have a prefix that separates in the present tense and moves to the end of the sentence. Example: aufstehen → ich stehe auf.",
      ar: "الأفعال القابلة للانفصال", expAr: "بعض الأفعال لها بادئة تنفصل في زمن المضارع وتذهب إلى نهاية الجملة. مثال: aufstehen ← ich stehe auf.",
      ex: [ { de: "Ich stehe um 7 auf.", ku: "کاتژمێر ٧ هەڵدەستم.", tr: "Saat 7'de kalkıyorum.", en: "I get up at 7.", ar: "أستيقظ الساعة السابعة." }, { de: "Er kauft ein.", ku: "ئەو بازاڕ دەکات.", tr: "O alışveriş yapıyor.", en: "He goes shopping.", ar: "هو يتسوّق." }, { de: "Wir kommen an.", ku: "ئێمە دەگەین.", tr: "Biz varıyoruz.", en: "We arrive.", ar: "نحن نصل." }, { de: "Ruf mich an!", ku: "پەیوەندیم پێوە بکە!", tr: "Beni ara!", en: "Call me!", ar: "اتصل بي!" }, { de: "Der Zug fährt ab.", ku: "شەمەندەفەرەکە بەڕێدەکەوێت.", tr: "Tren kalkıyor.", en: "The train departs.", ar: "القطار يغادر." }, { de: "Ich räume das Zimmer auf.", ku: "ژوورەکە ڕێک دەخەم.", tr: "Odayı toparlıyorum.", en: "I am tidying up the room.", ar: "أرتّب الغرفة." } ] },
    { de: "Imperativ", ku: "فەرمان", icon: "!",
      exp: "بۆ فەرمانکردن. du: ڕەگی کردار (Komm!). ihr: ڕەگ + t (Kommt!). Sie: کردار + Sie (Kommen Sie!).",
      tr: "Emir Kipi", expTr: "Emir vermek için. du: fiil kökü (Komm!). ihr: kök + t (Kommt!). Sie: fiil + Sie (Kommen Sie!).",
      en: "Imperative", expEn: "For giving commands. du: verb stem (Komm!). ihr: stem + t (Kommt!). Sie: verb + Sie (Kommen Sie!).",
      ar: "صيغة الأمر", expAr: "لإصدار الأوامر. du: جذر الفعل (Komm!). ihr: الجذر + t (Kommt!). Sie: الفعل + Sie (Kommen Sie!).",
      ex: [ { de: "Komm her!", ku: "وەرە ئێرە!", tr: "Buraya gel!", en: "Come here!", ar: "تعال هنا!" }, { de: "Macht die Tür zu!", ku: "دەرگاکە دابخەن!", tr: "Kapıyı kapatın!", en: "Close the door!", ar: "أغلقوا الباب!" }, { de: "Warten Sie bitte!", ku: "تکایە چاوەڕێ بکەن!", tr: "Lütfen bekleyin!", en: "Please wait!", ar: "من فضلكم انتظروا!" }, { de: "Iss dein Essen!", ku: "خواردنەکەت بخۆ!", tr: "Yemeğini ye!", en: "Eat your food!", ar: "كل طعامك!" }, { de: "Sei ruhig!", ku: "بێدەنگ بە!", tr: "Sessiz ol!", en: "Be quiet!", ar: "كن هادئا!" }, { de: "Hören Sie zu!", ku: "گوێ بگرن!", tr: "Dinleyin!", en: "Listen!", ar: "استمعوا!" } ] },
    { de: "Präpositionen: Ort & Zeit", ku: "ئامرازی شوێن و کات", icon: "⌖",
      exp: "شوێن: in (لە ناو)، an (لەسەر/لای)، auf (لەسەر)، neben (لاتەنیشت). کات: um (کاتژمێر)، am (ڕۆژ)، im (مانگ/وەرز).",
      tr: "Edatlar: Yer ve Zaman", expTr: "Yer: in (içinde), an (yanında/üzerinde), auf (üzerinde), neben (yanında). Zaman: um (saat için), am (gün için), im (ay/mevsim için).",
      en: "Prepositions: place & time", expEn: "Place: in (inside), an (next to/on), auf (on top of), neben (next to). Time: um (for a specific hour), am (for a day), im (for a month/season).",
      ar: "حروف الجر: المكان والزمان", expAr: "المكان: in (في داخل)، an (بجانب/عند)، auf (على)، neben (بجانب). الزمان: um (للساعة)، am (لليوم)، im (للشهر/الفصل).",
      ex: [ { de: "Ich bin in der Schule.", ku: "لە قوتابخانەم.", tr: "Okuldayım.", en: "I am at school.", ar: "أنا في المدرسة." }, { de: "Um 8 Uhr.", ku: "کاتژمێر ٨.", tr: "Saat 8.", en: "At 8 o'clock.", ar: "الساعة الثامنة." }, { de: "Im Sommer.", ku: "لە هاویندا.", tr: "Yazın.", en: "In summer.", ar: "في الصيف." }, { de: "Am Montag arbeite ich.", ku: "دووشەممە کار دەکەم.", tr: "Pazartesi çalışıyorum.", en: "I work on Monday.", ar: "أعمل يوم الاثنين." }, { de: "Das Bild ist an der Wand.", ku: "وێنەکە لەسەر دیوارەکەیە.", tr: "Resim duvardaki.", en: "The picture is on the wall.", ar: "اللوحة على الحائط." }, { de: "Die Tasche ist auf dem Tisch.", ku: "جانتاکە لەسەر مێزەکەیە.", tr: "Çanta masanın üzerinde.", en: "The bag is on the table.", ar: "الحقيبة على الطاولة." } ] },
  ],
  A2: [
    { de: "Perfekt", ku: "کاتی ڕابردووی تەواو (Perfekt)", icon: "↩",
      exp: "haben/sein + Partizip II. زۆربەی کردار haben وەردەگرن؛ کرداری جووڵە و گۆڕان sein. Partizip II زۆرجار: ge...t یان ge...en.",
      tr: "Geçmiş Zaman (Perfekt)", expTr: "haben/sein + Partizip II. Çoğu fiil haben alır; hareket ve değişim fiilleri sein alır. Partizip II genellikle: ge...t veya ge...en.",
      en: "Present perfect", expEn: "haben/sein + Partizip II. Most verbs take haben; verbs of motion and change take sein. Partizip II is usually formed with ge...t or ge...en.",
      ar: "الماضي التام (Perfekt)", expAr: "haben/sein + Partizip II. معظم الأفعال تأخذ haben؛ أفعال الحركة والتغيير تأخذ sein. صيغة Partizip II غالبًا ما تُبنى بـ ge...t أو ge...en.",
      ex: [ { de: "Ich habe gegessen.", ku: "خواردم.", tr: "Yedim.", en: "I have eaten.", ar: "أكلتُ." }, { de: "Wir haben gelernt.", ku: "فێربووین.", tr: "Öğrendik.", en: "We have learned.", ar: "تعلّمنا." }, { de: "Er ist gegangen.", ku: "ئەو ڕۆیشت.", tr: "O gitti.", en: "He went.", ar: "لقد ذهب." }, { de: "Sie hat ein Buch gekauft.", ku: "کتێبێکی کڕی.", tr: "Bir kitap satın aldı.", en: "She bought a book.", ar: "اشترت كتابًا." }, { de: "Ich bin nach Berlin gefahren.", ku: "چووم بۆ بەرلین.", tr: "Berlin'e gittim.", en: "I traveled to Berlin.", ar: "سافرتُ إلى برلين." }, { de: "Hast du das gesehen?", ku: "ئەمەت بینی؟", tr: "Bunu gördün mü?", en: "Did you see that?", ar: "هل رأيت ذلك؟" } ] },
    { de: "Präteritum (sein, haben, Modalverben)", ku: "ڕابردووی سادە", icon: "↪",
      exp: "بۆ sein، haben و مۆداڵەکان لە قسەی ڕۆژانەشدا Präteritum بەکاردێت: war (بوو)، hatte (هەیبوو)، konnte (توانی)، musste (پێویست بوو).",
      tr: "Basit Geçmiş Zaman", expTr: "sein, haben ve modal fiiller için konuşmada da Präteritum kullanılır: war (idim), hatte (vardı), konnte (yapabildi), musste (zorundaydı).",
      en: "Simple past (sein, haben, modal verbs)", expEn: "For sein, haben, and modal verbs, the Präteritum (simple past) is also used in everyday speech: war (was), hatte (had), konnte (could), musste (had to).",
      ar: "الماضي البسيط (sein وhaben والأفعال الناقصة)", expAr: "بالنسبة إلى sein وhaben والأفعال الوجوبية (المودالية)، يُستخدم الماضي البسيط (Präteritum) أيضًا في الحديث اليومي: war (كان)، hatte (كان لديه)، konnte (استطاع)، musste (كان مضطرًا).",
      ex: [ { de: "Ich war krank.", ku: "نەخۆش بووم.", tr: "Hasta idim.", en: "I was sick.", ar: "كنتُ مريضًا." }, { de: "Sie hatte Zeit.", ku: "کاتی هەبوو.", tr: "Zamanı vardı.", en: "She had time.", ar: "كان لديها وقت." }, { de: "Wir konnten nicht kommen.", ku: "نەماندەتوانی بێین.", tr: "Gelemezdik.", en: "We could not come.", ar: "لم نستطع القدوم." }, { de: "Es war sehr kalt.", ku: "زۆر سارد بوو.", tr: "Çok soğuktu.", en: "It was very cold.", ar: "كان الجو باردًا جدًا." }, { de: "Er musste arbeiten.", ku: "پێویست بوو کار بکات.", tr: "Çalışmak zorundaydı.", en: "He had to work.", ar: "كان عليه أن يعمل." }, { de: "Ich hatte keine Wahl.", ku: "هیچ هەڵبژاردنێکم نەبوو.", tr: "Seçeneğim yoktu.", en: "I had no choice.", ar: "لم يكن لديّ خيار." } ] },
    { de: "Dativ", ku: "داتیڤ (بەرکاری ناڕاستەوخۆ)", icon: "→",
      exp: "داتیڤ بەرکاری ناڕاستەوخۆیە (بۆ کێ؟). ئارتیکڵ دەگۆڕێت: der→dem، die→der، das→dem، die(کۆ)→den+n.",
      tr: "Datif (Dolaylı Nesne Durumu)", expTr: "Datif dolaylı nesne durumudur (kime?). Artikel değişir: der→dem, die→der, das→dem, die(çoğul)→den+n.",
      en: "Dative case", expEn: "Dative is the indirect object case (to whom?). The article changes: der→dem, die→der, das→dem, die (plural)→den+n.",
      ar: "حالة الجر (الداتيف)", expAr: "حالة الجر (الداتيف) هي حالة المفعول به غير المباشر (لمن؟). تتغيّر أداة التعريف: der→dem، die→der، das→dem، die (الجمع)→den+n.",
      ex: [ { de: "Ich gebe dem Kind ein Buch.", ku: "کتێبێک دەدەم بە منداڵەکە.", tr: "Çocuğa bir kitap veriyorum.", en: "I am giving the child a book.", ar: "أعطي الطفلَ كتابًا." }, { de: "Ich helfe der Frau.", ku: "یارمەتی ژنەکە دەدەم.", tr: "Kadına yardım ediyorum.", en: "I am helping the woman.", ar: "أساعد المرأةَ." }, { de: "Es gehört dem Mann.", ku: "هی پیاوەکەیە.", tr: "O adama ait.", en: "It belongs to the man.", ar: "إنه يخص الرجل." }, { de: "Ich danke dir.", ku: "سوپاست دەکەم.", tr: "Sana teşekkür ederim.", en: "I thank you.", ar: "أشكرك." }, { de: "Das Buch gehört mir.", ku: "کتێبەکە هی منە.", tr: "Kitap bana ait.", en: "The book belongs to me.", ar: "الكتاب لي." }, { de: "Sie hilft den Kindern.", ku: "یارمەتی منداڵەکان دەدات.", tr: "Çocuklara yardım ediyor.", en: "She helps the children.", ar: "تساعد الأطفالَ." } ] },
    { de: "Wechselpräpositionen", ku: "ئامرازی دوولایەن", icon: "⇆",
      exp: "نۆ ئامراز (in, an, auf, über, unter, vor, hinter, neben, zwischen) هەم Akkusativ هەم Dativ. جووڵە→Akkusativ (wohin؟)، شوێن→Dativ (wo؟).",
      tr: "İki Hallı Edatlar", expTr: "Dokuz edat (in, an, auf, über, unter, vor, hinter, neben, zwischen) hem Akuzatif hem Datif alır. Hareket→Akuzatif (nereye?), yer→Datif (nerede?).",
      en: "Two-way prepositions", expEn: "Nine prepositions (in, an, auf, über, unter, vor, hinter, neben, zwischen) take both Akkusativ and Dativ. Motion→Akkusativ (to where?), location→Dativ (where?).",
      ar: "حروف الجر ثنائية الحالة", expAr: "تسعة حروف جر (in, an, auf, über, unter, vor, hinter, neben, zwischen) تأخذ حالة النصب (Akkusativ) وحالة الجر (Dativ) معًا. الحركة → نصب (إلى أين؟)، والمكان → جر (أين؟).",
      ex: [ { de: "Ich gehe in die Schule.", ku: "دەچمە قوتابخانە (جووڵە/Akk).", tr: "Okula gidiyorum (hareket/Akk).", en: "I am going to school (motion/Akk).", ar: "أذهب إلى المدرسة (حركة/نصب)." }, { de: "Ich bin in der Schule.", ku: "لە قوتابخانەم (شوێن/Dativ).", tr: "Okuldayım (yer/Datif).", en: "I am at school (location/Dativ).", ar: "أنا في المدرسة (مكان/جر)." }, { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە.", tr: "Kitap masanın üzerinde.", en: "The book is lying on the table.", ar: "الكتاب موضوع على الطاولة." }, { de: "Ich lege das Buch auf den Tisch.", ku: "کتێبەکە دەخەمە سەر مێزەکە.", tr: "Kitabı masanın üzerine koyuyorum.", en: "I am putting the book on the table.", ar: "أضع الكتاب على الطاولة." }, { de: "Die Katze ist unter dem Bett.", ku: "پشیلەکە لەژێر جێگاکەیە.", tr: "Kedi yatağın altında.", en: "The cat is under the bed.", ar: "القطة تحت السرير." }, { de: "Er hängt das Bild an die Wand.", ku: "وێنەکە بە دیوارەوە هەڵدەواسێت.", tr: "Resmi duvara asıyor.", en: "He is hanging the picture on the wall.", ar: "يعلّق الصورة على الحائط." } ] },
    { de: "Pronomen: Personal-, Possessiv-, Demonstrativ-", ku: "جۆرەکانی جێناو", icon: "⁂",
      exp: "Personalpronomen (er, ihn, ihm)، Possessivpronomen (meiner, deiner)، Demonstrativpronomen (dieser, jener) — بۆ ئاماژەکردن و دووبارەنەکردنەوەی ناو.",
      tr: "Zamir Türleri", expTr: "Kişi zamirleri (er, ihn, ihm), iyelik zamirleri (meiner, deiner), işaret zamirleri (dieser, jener) — işaret etmek ve isim tekrarını önlemek için.",
      en: "Pronouns: personal, possessive, demonstrative", expEn: "Personal pronouns (er, ihn, ihm), possessive pronouns (meiner, deiner), demonstrative pronouns (dieser, jener) — for pointing things out and avoiding repeating a noun.",
      ar: "الضمائر: الشخصية والملكية والإشارية", expAr: "الضمائر الشخصية (er, ihn, ihm)، والضمائر الملكية (meiner, deiner)، وضمائر الإشارة (dieser, jener) — للإشارة إلى الأشياء وتجنّب تكرار الاسم.",
      ex: [ { de: "Ich sehe ihn.", ku: "ئەو دەبینم.", tr: "Onu görüyorum.", en: "I see him.", ar: "أراه." }, { de: "Dieser Stuhl ist frei.", ku: "ئەم کورسییە بەتاڵە.", tr: "Bu sandalye boş.", en: "This chair is free.", ar: "هذا الكرسي فارغ." }, { de: "Das ist meiner.", ku: "ئەمە هی منە.", tr: "Bu benimki.", en: "That is mine.", ar: "هذا لي." }, { de: "Ich gebe ihm das Buch.", ku: "کتێبەکەی دەدەمێ.", tr: "Ona kitabı veriyorum.", en: "I am giving him the book.", ar: "أعطيه الكتاب." }, { de: "Diese Tasche ist schön.", ku: "ئەم جانتایە جوانە.", tr: "Bu çanta güzel.", en: "This bag is beautiful.", ar: "هذه الحقيبة جميلة." }, { de: "Welches möchtest du? Dieses.", ku: "کامەت دەوێت؟ ئەمە.", tr: "Hangisini istiyorsun? Bunu.", en: "Which one do you want? This one.", ar: "أيّها تريد؟ هذا." } ] },
    { de: "Reflexive Verben", ku: "کرداری لێکدراوەی خۆ", icon: "↺",
      exp: "هەندێ کردار جێناوی خۆ (mich, dich, sich…) وەردەگرن. نموونە: sich freuen (دڵخۆشبوون)، sich waschen (خۆشتن).",
      tr: "Dönüşlü Fiiller", expTr: "Bazı fiiller dönüşlü zamir alır (mich, dich, sich…). Örnek: sich freuen (sevinmek), sich waschen (yıkanmak).",
      en: "Reflexive verbs", expEn: "Some verbs take a reflexive pronoun (mich, dich, sich…). Example: sich freuen (to be glad), sich waschen (to wash oneself).",
      ar: "الأفعال الانعكاسية", expAr: "بعض الأفعال تأخذ ضمير انعكاس (mich, dich, sich…). مثال: sich freuen (أن يفرح)، sich waschen (أن يغتسل).",
      ex: [ { de: "Ich freue mich.", ku: "دڵخۆشم.", tr: "Sevincim var.", en: "I am glad.", ar: "أنا سعيد." }, { de: "Er wäscht sich.", ku: "خۆی دەشوات.", tr: "O yıkanıyor.", en: "He is washing himself.", ar: "هو يغتسل." }, { de: "Wir treffen uns.", ku: "یەکتر دەبینین.", tr: "Birbirimizle buluşuyoruz.", en: "We are meeting each other.", ar: "نلتقي ببعضنا." }, { de: "Setz dich bitte.", ku: "تکایە دانیشە.", tr: "Lütfen oturun.", en: "Please sit down.", ar: "تفضل بالجلوس من فضلك." }, { de: "Sie interessiert sich für Musik.", ku: "ئارەزووی مۆسیقا دەکات.", tr: "Müziğe ilgi duyuyor.", en: "She is interested in music.", ar: "هي مهتمة بالموسيقى." }, { de: "Ich fühle mich gut.", ku: "هەست بە باشی دەکەم.", tr: "Kendimi iyi hissediyorum.", en: "I feel good.", ar: "أشعر بأنني بخير." } ] },
    { de: "Komparativ", ku: "بەراوردی (پلەی بەرز)", icon: "≷",
      exp: "بۆ بەراوردکردن: سیفەت + -er + als. نموونە: groß → größer als. هەندێ بێ ڕێک: gut → besser.",
      tr: "Karşılaştırma Derecesi", expTr: "Karşılaştırma için: sıfat + -er + als. Örnek: groß → größer als. Bazı düzensizler: gut → besser.",
      en: "Comparative", expEn: "For comparison: adjective + -er + als. Example: groß → größer als. Some irregulars: gut → besser.",
      ar: "صيغة المقارنة (التفضيل)", expAr: "للمقارنة: الصفة + -er + als. مثال: groß → größer als. بعض الصفات الشاذة: gut → besser.",
      ex: [ { de: "Er ist größer als ich.", ku: "ئەو لە من گەورەترە.", tr: "O benden uzun.", en: "He is taller than me.", ar: "هو أطول مني." }, { de: "Heute ist es kälter.", ku: "ئەمڕۆ ساردترە.", tr: "Bugün daha soğuk.", en: "Today it is colder.", ar: "اليوم الجو أبرد." }, { de: "Das ist besser.", ku: "ئەمە باشترە.", tr: "Bu daha iyi.", en: "That is better.", ar: "هذا أفضل." }, { de: "Sie ist jünger als er.", ku: "ئەو لە ئەو گەنجترە.", tr: "O ondan genç.", en: "She is younger than him.", ar: "هي أصغر منه سنًا." }, { de: "Dieses Auto ist teurer.", ku: "ئەم ئۆتۆمبێلە گرانترە.", tr: "Bu araba daha pahalı.", en: "This car is more expensive.", ar: "هذه السيارة أغلى." }, { de: "Deutsch ist schwerer als Englisch.", ku: "ئەڵمانی لە ئینگلیزی قورسترە.", tr: "Almanca İngilizce'den zor.", en: "German is harder than English.", ar: "الألمانية أصعب من الإنجليزية." } ] },
    { de: "Superlativ", ku: "بەرزترین پلە", icon: "★",
      exp: "بەرزترین پلە: am + سیفەت + -sten، یان der/die/das + -ste. نموونە: am größten (گەورەترین).",
      tr: "Üstünlük Derecesi", expTr: "En yüksek derece: am + sıfat + -sten veya der/die/das + -ste. Örnek: am größten (en büyük).",
      en: "Superlative", expEn: "Superlative: am + adjective + -sten, or der/die/das + -ste. Example: am größten (the biggest/tallest).",
      ar: "صيغة التفضيل المطلق", expAr: "صيغة التفضيل المطلق: am + الصفة + -sten، أو der/die/das + -ste. مثال: am größten (الأكبر).",
      ex: [ { de: "Er ist am größten.", ku: "ئەو گەورەترینە.", tr: "O en uzun.", en: "He is the tallest.", ar: "هو الأطول." }, { de: "Das ist das beste Buch.", ku: "ئەمە باشترین کتێبە.", tr: "Bu en iyi kitap.", en: "That is the best book.", ar: "هذا أفضل كتاب." }, { de: "Sie läuft am schnellsten.", ku: "ئەو خێراترین ڕادەکات.", tr: "O en hızlı koşuyor.", en: "She runs the fastest.", ar: "هي تركض الأسرع." }, { de: "Das ist der höchste Berg.", ku: "ئەمە بەرزترین شاخە.", tr: "Bu en yüksek dağ.", en: "That is the highest mountain.", ar: "هذا أعلى جبل." }, { de: "Heute ist der kälteste Tag.", ku: "ئەمڕۆ ساردترین ڕۆژە.", tr: "Bugün en soğuk gün.", en: "Today is the coldest day.", ar: "اليوم هو أبرد يوم." }, { de: "Du bist mein bester Freund.", ku: "تۆ باشترین هاوڕێمی.", tr: "Sen en iyi arkadaşımsın.", en: "You are my best friend.", ar: "أنت أفضل صديق لي." } ] },
    { de: "Konjunktionen: und, oder, aber, denn, sondern", ku: "گرێدەرە سادەکان", icon: "&",
      exp: "ئەم گرێدەرانە ڕیزبەندی ناگۆڕن (کردار لە جێی ٢ دەمێنێتەوە): und (و)، oder (یان)، aber (بەڵام)، denn (چونکە)، sondern (بەڵکو).",
      tr: "Bağlaçlar: und, oder, aber, denn, sondern", expTr: "Bu bağlaçlar cümle yapısını değiştirmez (fiil ikinci sıradadır): und (ve), oder (veya), aber (ama), denn (çünkü), sondern (aksine).",
      en: "Conjunctions: und, oder, aber, denn, sondern", expEn: "These conjunctions do not change the word order (the verb stays in position 2): und (and), oder (or), aber (but), denn (because), sondern (but rather).",
      ar: "أدوات الربط: und، oder، aber، denn، sondern", expAr: "هذه الأدوات الرابطة لا تغيّر ترتيب الجملة (يبقى الفعل في الموضع الثاني): und (و)، oder (أو)، aber (لكن)، denn (لأنّ)، sondern (بل).",
      ex: [ { de: "Ich lerne, denn es ist wichtig.", ku: "فێردەبم، چونکە گرنگە.", tr: "Öğreniyorum, çünkü önemli.", en: "I am studying, because it is important.", ar: "أتعلّم لأنه مهم." }, { de: "Tee oder Kaffee?", ku: "چا یان قاوە؟", tr: "Çay mı kahve mi?", en: "Tea or coffee?", ar: "شاي أم قهوة؟" }, { de: "Nicht heute, sondern morgen.", ku: "نەک ئەمڕۆ، بەڵکو سبەینێ.", tr: "Bugün değil, yarın.", en: "Not today, but tomorrow.", ar: "ليس اليوم، بل غدًا." }, { de: "Ich bin müde, aber glücklich.", ku: "ماندووم، بەڵام بەختەوەرم.", tr: "Yorgunum ama mutluyum.", en: "I am tired, but happy.", ar: "أنا متعب لكن سعيد." }, { de: "Er kommt und sie geht.", ku: "ئەو دێت و ئەو دەڕوات.", tr: "O geliyor, o gidiyor.", en: "He is coming and she is going.", ar: "هو يأتي وهي تذهب." }, { de: "Ich bleibe, aber du gehst.", ku: "دەمێنمەوە، بەڵام تۆ دەڕۆیت.", tr: "Kalıyorum ama sen gidiyorsun.", en: "I am staying, but you are going.", ar: "أنا أبقى لكنك تذهب." } ] },
    { de: "Nebensatz: weil, dass", ku: "ڕستەی لاوەکی (weil/dass)", icon: "⟜",
      exp: "دوای weil (چونکە) و dass (کە) کردار دەچێتە کۆتایی ڕستەی لاوەکی. ئەمە جیاوازییەکی گەورەیە لەگەڵ ڕستەی سادە.",
      tr: "Yan Cümleler: weil, dass", expTr: "weil (çünkü) ve dass (ki/olduğu) dan sonra fiil yan cümlenin sonuna gider. Bu basit cümleden önemli bir farktır.",
      en: "Subordinate clauses: weil, dass", expEn: "After weil (because) and dass (that), the verb moves to the end of the subordinate clause. This is a major difference from a simple sentence.",
      ar: "الجمل الثانوية: weil، dass", expAr: "بعد weil (لأنّ) وdass (أنّ)، ينتقل الفعل إلى نهاية الجملة الفرعية. هذا فرق كبير عن الجملة البسيطة.",
      ex: [ { de: "Ich bleibe, weil ich krank bin.", ku: "دەمێنمەوە، چونکە نەخۆشم.", tr: "Kalıyorum çünkü hastayım.", en: "I am staying because I am sick.", ar: "أبقى لأني مريض." }, { de: "Ich weiß, dass du kommst.", ku: "دەزانم کە دێیت.", tr: "Geldiğini biliyorum.", en: "I know that you are coming.", ar: "أعلم أنك قادم." }, { de: "Er sagt, dass es regnet.", ku: "دەڵێت کە باران دەبارێت.", tr: "Yağmur yağdığını söylüyor.", en: "He says that it is raining.", ar: "يقول إنّ المطر يهطل." }, { de: "Ich lerne, weil ich es brauche.", ku: "فێردەبم، چونکە پێویستمە.", tr: "İhtiyacım olduğu için öğreniyorum.", en: "I am learning because I need it.", ar: "أتعلّم لأنني بحاجة إليه." }, { de: "Sie glaubt, dass es stimmt.", ku: "پێیوایە کە ڕاستە.", tr: "Doğru olduğuna inanıyor.", en: "She believes that it is true.", ar: "تعتقد أن ذلك صحيح." }, { de: "Wir gehen, weil es spät ist.", ku: "دەڕۆین، چونکە درەنگە.", tr: "Geç olduğu için gidiyoruz.", en: "We are leaving because it is late.", ar: "نذهب لأن الوقت متأخر." } ] },
    { de: "Relativsätze (basic)", ku: "ڕستەی پەیوەندیدار (سادە)", icon: "⌐",
      exp: "بۆ زانیاری زیاتر دەربارەی ناو. جێناوی پەیوەندیدار (der, die, das) لەگەڵ ڕەگەزی ناوەکە دەگونجێت و کردار دەچێتە کۆتایی.",
      tr: "Bağımlı Cümleler (Temel)", expTr: "İsim hakkında daha fazla bilgi vermek için. Bağıl zamir (der, die, das) ismin cinsiyetiyle uyuşur ve fiil cümlenin sonuna gider.",
      en: "Relative clauses (basic)", expEn: "Used to give more information about a noun. The relative pronoun (der, die, das) agrees with the gender of the noun, and the verb moves to the end.",
      ar: "جمل الصلة (أساسي)", expAr: "تُستخدم لإعطاء معلومات إضافية عن الاسم. الضمير الموصول (der, die, das) يتوافق مع جنس الاسم، وينتقل الفعل إلى نهاية الجملة.",
      ex: [ { de: "Der Mann, der dort steht, ...", ku: "ئەو پیاوەی لەوێ ڕاوەستاوە، ...", tr: "Orada duran adam, ...", en: "The man who is standing there, ...", ar: "الرجل الذي يقف هناك، ..." }, { de: "Das Buch, das ich lese, ...", ku: "ئەو کتێبەی دەیخوێنمەوە، ...", tr: "Okuduğum kitap, ...", en: "The book that I am reading, ...", ar: "الكتاب الذي أقرؤه، ..." }, { de: "Die Frau, die singt, ...", ku: "ئەو ژنەی گۆرانی دەڵێت، ...", tr: "Şarkı söyleyen kadın, ...", en: "The woman who is singing, ...", ar: "المرأة التي تغني، ..." }, { de: "Das Auto, das rot ist, ...", ku: "ئەو ئۆتۆمبێلەی سوورە، ...", tr: "Kırmızı araba, ...", en: "The red car, ...", ar: "السيارة الحمراء، ..." }, { de: "Der Freund, der hilft, ...", ku: "ئەو هاوڕێیەی یارمەتی دەدات، ...", tr: "Yardım eden arkadaş, ...", en: "The friend who helps, ...", ar: "الصديق الذي يساعد، ..." }, { de: "Die Stadt, die schön ist, ...", ku: "ئەو شارەی جوانە، ...", tr: "Güzel şehir, ...", en: "The beautiful city, ...", ar: "المدينة الجميلة، ..." } ] },
    { de: "Genitiv (Einführung)", ku: "گەنیتیڤ (ناساندن)", icon: "'s",
      exp: "گەنیتیڤ خاوەندارێتی پیشان دەدات (هی کێ؟). ئارتیکڵ: des/eines (+s بۆ ناوی نێر/بێلایەن)، der (مێ).",
      tr: "Genitif (Giriş)", expTr: "Genitif sahipliği gösterir (kimin?). Artikel: des/eines (+s eril/yansız için), der (dişil).",
      en: "Genitive (introduction)", expEn: "Genitive shows possession (whose?). Article: des/eines (+s for masculine/neuter nouns), der (feminine).",
      ar: "حالة الإضافة (الجنيتيف) - مقدمة", expAr: "حالة الإضافة (الجينيتيف) تدل على الملكية (ملك من؟). أداة التعريف: des/eines (+s للمذكر والمحايد)، der (للمؤنث).",
      ex: [ { de: "das Auto des Mannes", ku: "ئۆتۆمبێلی پیاوەکە", tr: "adamın arabası", en: "the man's car", ar: "سيارة الرجل" }, { de: "die Farbe der Blume", ku: "ڕەنگی گوڵەکە", tr: "çiçeğin rengi", en: "the flower's color", ar: "لون الزهرة" }, { de: "der Titel des Buches", ku: "ناونیشانی کتێبەکە", tr: "kitabın başlığı", en: "the book's title", ar: "عنوان الكتاب" }, { de: "das Haus meiner Eltern", ku: "خانووی دایک و باوکم", tr: "annemin babamın evi", en: "my parents' house", ar: "بيت والدَيّ" }, { de: "der Name des Kindes", ku: "ناوی منداڵەکە", tr: "çocuğun adı", en: "the child's name", ar: "اسم الطفل" }, { de: "die Tür des Hauses", ku: "دەرگای خانووەکە", tr: "evin kapısı", en: "the house's door", ar: "باب البيت" } ] },
  ],
  B1: [
    { de: "Adjektivdeklination", ku: "ڕەوانبێژی سیفەت", icon: "✦",
      exp: "کاتێک سیفەت پێش ناو دێت، کۆتاییەکەی دەگۆڕێت بەپێی ئارتیکڵ، ڕەگەز و کەیس. دوای der/die/das زۆرجار -e یان -en.",
      tr: "Sıfat Çekimi", expTr: "Sıfat ismin önüne geldiğinde artikel, cinsiyet ve hale göre eki değişir. der/die/das'tan sonra genellikle -e veya -en.",
      en: "Adjective declension", expEn: "When an adjective comes before a noun, its ending changes according to the article, gender, and case. After der/die/das it is usually -e or -en.",
      ar: "تصريف الصفات", expAr: "عندما تأتي الصفة قبل الاسم، تتغير نهايتها حسب أداة التعريف والجنس والحالة الإعرابية. بعد der/die/das تكون عادة -e أو -en.",
      ex: [ { de: "der rote Apfel", ku: "سێوە سوورەکە", tr: "kırmızı elma (belirli eril)", en: "the red apple (definite masculine)", ar: "التفاحة الحمراء (مذكر معرّف)" }, { de: "ein roter Apfel", ku: "سێوێکی سوور", tr: "kırmızı bir elma (belirsiz)", en: "a red apple (indefinite)", ar: "تفاحة حمراء (نكرة)" }, { de: "mit dem roten Auto", ku: "بە ئۆتۆمبێلە سوورەکە", tr: "kırmızı arabayla", en: "with the red car", ar: "بالسيارة الحمراء" }, { de: "die schöne Stadt", ku: "شارە جوانەکە", tr: "güzel şehir", en: "the beautiful city", ar: "المدينة الجميلة" }, { de: "ein gutes Buch", ku: "کتێبێکی باش", tr: "iyi bir kitap", en: "a good book", ar: "كتاب جيد" }, { de: "kaltes Wasser", ku: "ئاوی سارد", tr: "soğuk su (artikelsiz)", en: "cold water (without article)", ar: "ماء بارد (بدون أداة تعريف)" } ] },
    { de: "Genitiv", ku: "گەنیتیڤ (تەواو)", icon: "'s",
      exp: "خاوەندارێتی و پەیوەندی. ناوی نێر/بێلایەن +s دەگرن. هەروەها لەگەڵ هەندێ ئامرازدا بەکاردێت (wegen, trotz).",
      tr: "Genitif (Tam)", expTr: "Sahiplik ve bağlantı. Eril/yansız isimler +s alır. Ayrıca bazı edatlarla kullanılır (wegen, trotz).",
      en: "Genitive (full)", expEn: "Possession and connection. Masculine/neuter nouns take +s. Also used with certain prepositions (wegen, trotz).",
      ar: "حالة الإضافة (الجنيتيف) الكاملة", expAr: "الملكية والعلاقة. الأسماء المذكرة والمحايدة تأخذ +s. تُستخدم أيضاً مع بعض حروف الجر (wegen، trotz).",
      ex: [ { de: "das Haus meines Vaters", ku: "خانووی باوکم", tr: "babamın evi", en: "my father's house", ar: "بيت أبي" }, { de: "wegen des Wetters", ku: "بەهۆی کەش‌وهەواوە", tr: "hava yüzünden", en: "because of the weather", ar: "بسبب الطقس" }, { de: "trotz des Regens", ku: "سەرەڕای بارانەکە", tr: "yağmura rağmen", en: "despite the rain", ar: "رغم المطر" }, { de: "die Meinung der Leute", ku: "بۆچوونی خەڵک", tr: "halkın görüşü", en: "the opinion of the people", ar: "رأي الناس" }, { de: "während des Tages", ku: "لە ماوەی ڕۆژدا", tr: "gündüz boyunca", en: "during the day", ar: "خلال النهار" }, { de: "der Anfang des Films", ku: "سەرەتای فیلمەکە", tr: "filmin başlangıcı", en: "the beginning of the film", ar: "بداية الفيلم" } ] },
    { de: "Präpositionen mit Genitiv", ku: "ئامراز لەگەڵ گەنیتیڤ", icon: "⌖",
      exp: "هەندێ ئامراز Genitiv وەردەگرن: wegen (بەهۆی)، trotz (سەرەڕای)، während (لە ماوەی)، (an)statt (لەبری).",
      tr: "Genitifli Edatlar", expTr: "Bazı edatlar Genitif alır: wegen (yüzünden), trotz (rağmen), während (-esnasında), (an)statt (-yerine).",
      en: "Prepositions with genitive", expEn: "Some prepositions take the genitive: wegen (because of), trotz (despite), während (during), (an)statt (instead of).",
      ar: "حروف الجر مع حالة الإضافة", expAr: "بعض حروف الجر تأخذ حالة الإضافة (Genitiv): wegen (بسبب)، trotz (رغم)، während (أثناء)، (an)statt (بدلاً من).",
      ex: [ { de: "während des Kurses", ku: "لە ماوەی خولەکەدا", tr: "ders boyunca", en: "during the course", ar: "أثناء الدورة" }, { de: "wegen des Problems", ku: "بەهۆی کێشەکەوە", tr: "sorun yüzünden", en: "because of the problem", ar: "بسبب المشكلة" }, { de: "trotz der Kälte", ku: "سەرەڕای ساردی", tr: "soğuğa rağmen", en: "despite the cold", ar: "رغم البرد" }, { de: "statt des Kaffees", ku: "لەبری قاوەکە", tr: "kahve yerine", en: "instead of the coffee", ar: "بدلاً من القهوة" }, { de: "innerhalb einer Woche", ku: "لە ماوەی هەفتەیەکدا", tr: "bir hafta içinde", en: "within a week", ar: "خلال أسبوع" }, { de: "außerhalb der Stadt", ku: "لە دەرەوەی شارەکە", tr: "şehrin dışında", en: "outside the city", ar: "خارج المدينة" } ] },
    { de: "Plusquamperfekt", ku: "ڕابردووی دوور", icon: "⟲",
      exp: "بۆ کارێک کە پێش کارێکی تری ڕابردوو ڕوویداوە. hatte/war + Partizip II. زۆرجار لەگەڵ nachdem بەکاردێت.",
      tr: "Daha-önce-geçmiş Zaman", expTr: "Geçmişte başka bir olaydan önce gerçekleşen bir eylem için. hatte/war + Partizip II. Genellikle nachdem ile kullanılır.",
      en: "Past perfect (Plusquamperfekt)", expEn: "For an action that happened before another action in the past. hatte/war + Partizip II. Often used with nachdem.",
      ar: "الماضي البعيد (Plusquamperfekt)", expAr: "لفعل حدث قبل فعل آخر في الماضي. hatte/war + التصريف الثالث (Partizip II). كثيراً ما يُستخدم مع nachdem.",
      ex: [ { de: "Ich hatte schon gegessen.", ku: "پێشتر خواردبووم.", tr: "Daha önce yemiştim.", en: "I had already eaten.", ar: "كنتُ قد أكلتُ بالفعل." }, { de: "Er war schon gegangen.", ku: "ئەو پێشتر ڕۆیشتبوو.", tr: "O daha önce gitmişti.", en: "He had already left.", ar: "كان قد ذهب بالفعل." }, { de: "Nachdem ich gegessen hatte, ...", ku: "دوای ئەوەی خواردبووم، ...", tr: "Yedikten sonra, ...", en: "After I had eaten, ...", ar: "بعد أن كنتُ قد أكلتُ، ..." }, { de: "Sie hatte den Brief geschrieben.", ku: "نامەکەی نووسیبوو.", tr: "Mektubu yazmıştı.", en: "She had written the letter.", ar: "كانت قد كتبت الرسالة." }, { de: "Wir waren schon angekommen.", ku: "پێشتر گەیشتبووین.", tr: "Daha önce gelmiştik.", en: "We had already arrived.", ar: "كنا قد وصلنا بالفعل." }, { de: "Hattest du das gewusst?", ku: "ئەمەت زانیبوو؟", tr: "Bunu biliyor muydun?", en: "Had you known that?", ar: "هل كنتَ قد عرفتَ ذلك؟" } ] },
    { de: "Futur I", ku: "داهاتوو (Futur I)", icon: "⇉",
      exp: "بۆ داهاتوو و گریمانە. werden + کرداری بنەڕەتی (لە کۆتایی). هەرچەندە زۆرجار کاتی ئێستا بۆ داهاتوو بەکاردێت.",
      tr: "Gelecek Zaman (Futur I)", expTr: "Gelecek ve tahmin için. werden + mastar (sonda). Ancak günlük konuşmada gelecek için genellikle şimdiki zaman kullanılır.",
      en: "Future tense I", expEn: "For the future and assumptions. werden + infinitive (at the end). However, the present tense is often used for the future in everyday speech.",
      ar: "زمن المستقبل الأول", expAr: "للمستقبل والتخمين. werden + المصدر (في النهاية). لكن غالباً ما يُستخدم زمن المضارع للتعبير عن المستقبل في الحديث اليومي.",
      ex: [ { de: "Ich werde Deutsch lernen.", ku: "ئەڵمانی فێردەبم (داهاتوو).", tr: "Almanca öğreneceğim (gelecek).", en: "I will learn German (future).", ar: "سأتعلم الألمانية (المستقبل)." }, { de: "Es wird regnen.", ku: "باران دەبارێت.", tr: "Yağmur yağacak.", en: "It will rain.", ar: "ستمطر." }, { de: "Wir werden sehen.", ku: "دەبینین.", tr: "Göreceğiz.", en: "We will see.", ar: "سنرى." }, { de: "Sie wird Ärztin werden.", ku: "دەبێتە پزیشک.", tr: "Doktor olacak.", en: "She will become a doctor.", ar: "ستصبح طبيبة." }, { de: "Ich werde dich anrufen.", ku: "پەیوەندیت پێوە دەکەم.", tr: "Seni arayacağım.", en: "I will call you.", ar: "سأتصل بك." }, { de: "Morgen wird es kalt sein.", ku: "سبەینێ سارد دەبێت.", tr: "Yarın soğuk olacak.", en: "Tomorrow it will be cold.", ar: "غداً سيكون الجو بارداً." } ] },
    { de: "Konjunktionen: obwohl, wenn, als, während…", ku: "گرێدەرە لاوەکییەکان", icon: "⟜",
      exp: "obwohl (هەرچەندە)، wenn (ئەگەر/کاتێک)، als (کاتێک-ڕابردوو)، während (لە کاتێکدا)، bevor (پێش)، nachdem (دوای)، seitdem (لەو کاتەوە). کردار دەچێتە کۆتایی.",
      tr: "Yan Cümle Bağlaçları", expTr: "obwohl (her ne kadar), wenn (eğer/ne zaman), als (ne zaman - geçmiş), während (iken), bevor (önce), nachdem (sonra), seitdem (o zamandan beri). Fiil cümlenin sonuna gider.",
      en: "Subordinate clause conjunctions", expEn: "obwohl (although), wenn (if/when), als (when - past), während (while), bevor (before), nachdem (after), seitdem (since then). The verb goes to the end of the clause.",
      ar: "أدوات ربط الجمل الثانوية", expAr: "obwohl (رغم أن)، wenn (إذا/عندما)، als (عندما - ماضٍ)، während (بينما)، bevor (قبل)، nachdem (بعد)، seitdem (منذ ذلك الحين). يذهب الفعل إلى نهاية الجملة.",
      ex: [ { de: "Als ich klein war, ...", ku: "کاتێک بچووک بووم، ...", tr: "Küçükken, ...", en: "When I was little, ...", ar: "عندما كنتُ صغيراً، ..." }, { de: "Bevor ich gehe, esse ich.", ku: "پێش ئەوەی بڕۆم، دەخۆم.", tr: "Gitmeden önce yiyorum.", en: "Before I go, I eat.", ar: "قبل أن أذهب، آكل." }, { de: "Seitdem er hier ist, ...", ku: "لەو کاتەوەی لێرەیە، ...", tr: "O burada olduğundan beri, ...", en: "Since he has been here, ...", ar: "منذ أن أصبح هنا، ..." }, { de: "Obwohl es regnet, gehe ich.", ku: "هەرچەندە باران دەبارێت، دەڕۆم.", tr: "Her ne kadar yağmur yağsa da gidiyorum.", en: "Although it's raining, I'm going.", ar: "رغم أن المطر يهطل، سأذهب." }, { de: "Wenn ich Zeit habe, komme ich.", ku: "ئەگەر کاتم هەبێت، دێم.", tr: "Zamanım olursa gelirim.", en: "If I have time, I'll come.", ar: "إذا كان لدي وقت، سآتي." }, { de: "Während sie kocht, lese ich.", ku: "لە کاتێکدا ئەو خواردن لێدەنێ، دەخوێنمەوە.", tr: "O pişirirken okuyorum.", en: "While she cooks, I read.", ar: "بينما تطبخ، أقرأ." } ] },
    { de: "Relativsätze (detail)", ku: "ڕستەی پەیوەندیدار (ورد)", icon: "⌐",
      exp: "جێناوی پەیوەندیدار لە هەموو کەیسەکاندا دەگۆڕێت: Nominativ (der)، Akkusativ (den)، Dativ (dem)، Genitiv (dessen/deren).",
      tr: "Bağımlı Cümleler (Ayrıntılı)", expTr: "Bağıl zamir tüm hallerde değişir: Yalın (der), Belirtme (den), Datif (dem), Genitif (dessen/deren).",
      en: "Relative clauses (detailed)", expEn: "The relative pronoun changes in every case: nominative (der), accusative (den), dative (dem), genitive (dessen/deren).",
      ar: "جمل الصلة (تفصيلي)", expAr: "يتغير الضمير الموصول في جميع الحالات الإعرابية: الرفع (der)، النصب (den)، الجر (dem)، الإضافة (dessen/deren).",
      ex: [ { de: "Der Mann, dem ich helfe, ...", ku: "ئەو پیاوەی یارمەتی دەدەم، ... (Dativ)", tr: "Yardım ettiğim adam, ... (Datif)", en: "The man whom I help, ... (dative)", ar: "الرجل الذي أساعده، ... (حالة الجر)" }, { de: "Das Kind, dessen Buch ...", ku: "ئەو منداڵەی کتێبەکەی ... (Genitiv)", tr: "Kitabı olan çocuk, ... (Genitif)", en: "The child whose book ... (genitive)", ar: "الطفل الذي كتابه ... (حالة الإضافة)" }, { de: "Die Stadt, in der ich wohne, ...", ku: "ئەو شارەی تێیدا دەژیم، ...", tr: "İçinde yaşadığım şehir, ...", en: "The city in which I live, ...", ar: "المدينة التي أعيش فيها، ..." }, { de: "Der Film, den ich gesehen habe, ...", ku: "ئەو فیلمەی بینیم، ...", tr: "İzlediğim film, ...", en: "The film that I have watched, ...", ar: "الفيلم الذي شاهدته، ..." }, { de: "Die Leute, mit denen ich arbeite, ...", ku: "ئەو کەسانەی لەگەڵیان کار دەکەم، ...", tr: "Birlikte çalıştığım insanlar, ...", en: "The people with whom I work, ...", ar: "الأشخاص الذين أعمل معهم، ..." }, { de: "Das Auto, das er kaufte, ...", ku: "ئەو ئۆتۆمبێلەی کڕی، ...", tr: "Satın aldığı araba, ...", en: "The car that he bought, ...", ar: "السيارة التي اشتراها، ..." } ] },
    { de: "Indirekte Fragen", ku: "پرسیاری ناڕاستەوخۆ", icon: "?",
      exp: "پرسیار دەخرێتە ناو ڕستەیەکەوە؛ کردار دەچێتە کۆتایی. لەگەڵ ob (ئایا) بۆ پرسیاری بەڵێ/نەخێر.",
      tr: "Dolaylı Sorular", expTr: "Soru bir cümlenin içine yerleştirilir; fiil sona gider. Evet/hayır soruları için ob (acaba) ile.",
      en: "Indirect questions", expEn: "The question is embedded within a sentence; the verb goes to the end. With ob (whether) for yes/no questions.",
      ar: "الأسئلة غير المباشرة", expAr: "يُدرج السؤال داخل جملة؛ ويذهب الفعل إلى النهاية. تُستخدم ob (هل) لأسئلة نعم/لا.",
      ex: [ { de: "Weißt du, wo er ist?", ku: "دەزانیت لەکوێیە؟", tr: "Nerede olduğunu biliyor musun?", en: "Do you know where he is?", ar: "هل تعرف أين هو؟" }, { de: "Ich frage, ob es regnet.", ku: "دەپرسم ئایا باران دەبارێت.", tr: "Yağmur yağıp yağmadığını soruyorum.", en: "I'm asking whether it's raining.", ar: "أسأل عما إذا كان المطر يهطل." }, { de: "Sag mir, wann du kommst.", ku: "پێم بڵێ کەی دێیت.", tr: "Ne zaman geldiğini söyle.", en: "Tell me when you're coming.", ar: "أخبرني متى ستأتي." }, { de: "Ich weiß nicht, was das ist.", ku: "نازانم ئەمە چییە.", tr: "Bunun ne olduğunu bilmiyorum.", en: "I don't know what that is.", ar: "لا أعرف ما هذا." }, { de: "Kannst du mir sagen, wie es geht?", ku: "دەتوانیت پێم بڵێیت چۆنە؟", tr: "Nasıl olduğunu söyleyebilir misiniz?", en: "Can you tell me how it's going?", ar: "هل يمكنك أن تخبرني كيف الحال؟" }, { de: "Er fragt, warum du gehst.", ku: "دەپرسێت بۆچی دەڕۆیت.", tr: "Neden gittiğini soruyor.", en: "He asks why you're leaving.", ar: "يسأل لماذا تذهب." } ] },
    { de: "Infinitiv mit zu", ku: "ئینفینیتیڤ لەگەڵ zu", icon: "zu",
      exp: "دوای هەندێ کردار/ناو/سیفەت، کرداری دووەم بە «zu + Infinitiv» دێت. نموونە: «Ich versuche zu lernen».",
      tr: "zu'lu Mastar", expTr: "Bazı fiil/isim/sıfatların ardından ikinci fiil «zu + Mastar» ile gelir. Örnek: «Ich versuche zu lernen».",
      en: "Infinitive with \"zu\"", expEn: "After certain verbs, nouns, or adjectives, the second verb comes with 'zu + infinitive'. Example: 'Ich versuche zu lernen' (I try to learn).",
      ar: "المصدر مع «zu»", expAr: "بعد بعض الأفعال/الأسماء/الصفات، يأتي الفعل الثاني بصيغة «zu + المصدر». مثال: «Ich versuche zu lernen» (أحاول أن أتعلم).",
      ex: [ { de: "Ich versuche zu lernen.", ku: "هەوڵ دەدەم فێربم.", tr: "Öğrenmeye çalışıyorum.", en: "I try to learn.", ar: "أحاول أن أتعلم." }, { de: "Es ist wichtig zu üben.", ku: "گرنگە مەشق بکەیت.", tr: "Alıştırma yapmak önemli.", en: "It's important to practice.", ar: "من المهم أن تتدرب." }, { de: "Ich habe vergessen anzurufen.", ku: "بیرم چووە پەیوەندی بکەم.", tr: "Aramayı unuttum.", en: "I forgot to call.", ar: "نسيتُ أن أتصل." }, { de: "Ich hoffe dich zu sehen.", ku: "هیوادارم بتبینم.", tr: "Seni görmeyi umuyorum.", en: "I hope to see you.", ar: "أتمنى أن أراك." }, { de: "Es macht Spaß zu reisen.", ku: "گەشتکردن خۆشە.", tr: "Seyahat etmek eğlenceli.", en: "Traveling is fun.", ar: "السفر ممتع." }, { de: "Ich habe keine Zeit zu warten.", ku: "کاتم نییە چاوەڕێ بکەم.", tr: "Bekleyecek zamanım yok.", en: "I don't have time to wait.", ar: "ليس لدي وقت لأنتظر." } ] },
    { de: "um…zu / ohne…zu / statt…zu", ku: "um/ohne/statt + zu", icon: "⊕",
      exp: "um…zu (بۆ ئەوەی)، ohne…zu (بەبێ ئەوەی)، statt…zu (لەبری ئەوەی). هەردوو ڕستە یەک کردارکەریان هەیە.",
      tr: "um…zu / ohne…zu / statt…zu", expTr: "um…zu (... için), ohne…zu (... olmaksızın), statt…zu (... yerine). Her iki cümlenin aynı öznesi vardır.",
      en: "um…zu / ohne…zu / statt…zu", expEn: "um…zu (in order to), ohne…zu (without doing), statt…zu (instead of doing). Both clauses share the same subject.",
      ar: "um…zu / ohne…zu / statt…zu", expAr: "um…zu (لكي)، ohne…zu (من دون أن)، statt…zu (بدلاً من أن). كلا الجملتين لهما نفس الفاعل.",
      ex: [ { de: "Ich lerne, um zu bestehen.", ku: "فێردەبم بۆ ئەوەی سەربکەوم.", tr: "Sınavı geçmek için çalışıyorum.", en: "I study in order to pass.", ar: "أدرس لكي أنجح." }, { de: "Er geht, ohne zu grüßen.", ku: "دەڕوات بەبێ ئەوەی سڵاو بکات.", tr: "Selamlama yapmadan gitti.", en: "He leaves without saying hello.", ar: "يذهب من دون أن يلقي التحية." }, { de: "Statt zu schlafen, lese ich.", ku: "لەبری خەوتن، دەخوێنمەوە.", tr: "Uyumak yerine okuyorum.", en: "Instead of sleeping, I read.", ar: "بدلاً من أن أنام، أقرأ." }, { de: "Ich spare, um ein Auto zu kaufen.", ku: "پارە کۆدەکەمەوە بۆ کڕینی ئۆتۆمبێل.", tr: "Araba almak için para biriktiriyorum.", en: "I'm saving up in order to buy a car.", ar: "أدخر المال لكي أشتري سيارة." }, { de: "Sie ging, ohne etwas zu sagen.", ku: "ڕۆیشت بەبێ ئەوەی شتێک بڵێت.", tr: "Bir şey söylemeden gitti.", en: "She left without saying anything.", ar: "ذهبت من دون أن تقول شيئاً." }, { de: "Statt zu arbeiten, spielt er.", ku: "لەبری کارکردن، یاری دەکات.", tr: "Çalışmak yerine oynuyor.", en: "Instead of working, he plays.", ar: "بدلاً من أن يعمل، يلعب." } ] },
    { de: "Passiv (Vorgangspassiv)", ku: "ڕستەی چالاک‌نەبوو", icon: "⊡",
      exp: "کاتێک کردار گرنگترە لە کردارکەر. werden + Partizip II. نموونە: «Das Haus wird gebaut» (خانووەکە دروست دەکرێت).",
      tr: "Edilgen Yapı (Eylem)", expTr: "Eylemin kim tarafından yapıldığından daha önemli olduğunda. werden + Partizip II. Örnek: «Das Haus wird gebaut» (Ev yapılıyor).",
      en: "Passive voice (action passive)", expEn: "Used when the action is more important than who performs it. werden + Partizip II. Example: 'Das Haus wird gebaut' (The house is being built).",
      ar: "المبني للمجهول (السلبي الإجرائي)", expAr: "تُستخدم عندما يكون الفعل أهم من فاعله. werden + التصريف الثالث (Partizip II). مثال: «Das Haus wird gebaut» (يُبنى البيت).",
      ex: [ { de: "Das Auto wird repariert.", ku: "ئۆتۆمبێلەکە چاک دەکرێتەوە.", tr: "Araba tamir ediliyor.", en: "The car is being repaired.", ar: "تُصلَح السيارة." }, { de: "Die Tür wird geöffnet.", ku: "دەرگاکە دەکرێتەوە.", tr: "Kapı açılıyor.", en: "The door is being opened.", ar: "يُفتح الباب." }, { de: "Deutsch wird hier gesprochen.", ku: "لێرە ئەڵمانی قسە دەکرێت.", tr: "Burada Almanca konuşuluyor.", en: "German is spoken here.", ar: "تُتحدَّث الألمانية هنا." }, { de: "Das Buch wird gelesen.", ku: "کتێبەکە دەخوێنرێتەوە.", tr: "Kitap okunuyor.", en: "The book is being read.", ar: "يُقرأ الكتاب." }, { de: "Die Arbeit wird gemacht.", ku: "کارەکە دەکرێت.", tr: "İş yapılıyor.", en: "The work is being done.", ar: "يُنجَز العمل." }, { de: "Das Essen wird gekocht.", ku: "خواردنەکە لێدەنرێت.", tr: "Yemek pişiriliyor.", en: "The food is being cooked.", ar: "يُطهى الطعام." } ] },
    { de: "Konjunktiv II", ku: "کۆنیونکتیڤ II (مەرجی)", icon: "≈",
      exp: "بۆ خواست، گریمانە و ڕێزگرتن. würde + Infinitiv، یان hätte/wäre/könnte. زۆر بەکاردێت بۆ نەرمی.",
      tr: "Konjunktiv II (Dilek Kipi)", expTr: "İstek, varsayım ve nezaket için. würde + Mastar veya hätte/wäre/könnte. Nezaket için çok kullanılır.",
      en: "Subjunctive II (Konjunktiv II)", expEn: "For wishes, hypotheticals, and politeness. würde + infinitive, or hätte/wäre/könnte. Often used to sound polite.",
      ar: "الجملة الشرطية الثانية (Konjunktiv II)", expAr: "للتمني والافتراض والتأدب. würde + المصدر، أو hätte/wäre/könnte. تُستخدم كثيراً لإضفاء اللباقة على الكلام.",
      ex: [ { de: "Ich würde gern kommen.", ku: "حەز دەکەم بێم.", tr: "Gelmek isterdim.", en: "I would love to come.", ar: "أود أن آتي." }, { de: "Ich hätte eine Frage.", ku: "پرسیارێکم هەبووایە.", tr: "Bir sorum olurdu.", en: "I would have a question.", ar: "كان لدي سؤال." }, { de: "Könnten Sie mir helfen?", ku: "دەتوانن یارمەتیم بدەن؟", tr: "Yardım edebilir misiniz?", en: "Could you help me?", ar: "هل يمكنكم مساعدتي؟" }, { de: "Wenn ich reich wäre, ...", ku: "ئەگەر دەوڵەمەند بوومایە، ...", tr: "Zengin olsaydım, ...", en: "If I were rich, ...", ar: "لو كنتُ غنياً، ..." }, { de: "Das wäre toll.", ku: "ئەمە نایاب دەبوو.", tr: "Harika olurdu.", en: "That would be great.", ar: "سيكون ذلك رائعاً." }, { de: "Ich würde lieber bleiben.", ku: "پێم باشترە بمێنمەوە.", tr: "Kalmayı tercih ederdim.", en: "I would rather stay.", ar: "أُفضّل البقاء." } ] },
  ],
  B2: [
    { de: "Passiv (alle Formen)", ku: "ڕستەی چالاک‌نەبوو (هەموو فۆرمەکان)", icon: "⊡",
      exp: "Passiv لە هەموو کاتەکاندا: ئێستا (wird gemacht)، ڕابردوو (wurde gemacht)، Perfekt (ist gemacht worden). «worden» نیشانەی Passivی ڕابردووە.",
      tr: "Edilgen Yapı (Tüm Biçimler)", expTr: "Tüm zamanlarda edilgen: şimdiki (wird gemacht), geçmiş (wurde gemacht), Perfekt (ist gemacht worden). «worden» geçmiş edilgenin işaretidir.",
      en: "Passive voice (all forms)", expEn: "Passive in all tenses: present (wird gemacht), past (wurde gemacht), perfect (ist gemacht worden). «worden» is the marker of the past passive.",
      ar: "المبني للمجهول (جميع الأشكال)", expAr: "صيغة المبني للمجهول في جميع الأزمنة: المضارع (wird gemacht)، الماضي (wurde gemacht)، والتام (ist gemacht worden). «worden» هي علامة صيغة الماضي في المبني للمجهول.",
      ex: [ { de: "Das Haus wurde gebaut.", ku: "خانووەکە دروستکرا.", tr: "Ev yapıldı.", en: "The house was built.", ar: "بُني البيت." }, { de: "Es ist verkauft worden.", ku: "فرۆشراوە.", tr: "Satıldı.", en: "It has been sold.", ar: "لقد بيع." }, { de: "Das wird gemacht werden.", ku: "ئەمە دەکرێت (داهاتوو).", tr: "Bu yapılacak (gelecek).", en: "This will be done (future).", ar: "سيُفعل هذا (المستقبل)." }, { de: "Der Brief wurde geschrieben.", ku: "نامەکە نووسرا.", tr: "Mektup yazıldı.", en: "The letter was written.", ar: "كُتبت الرسالة." }, { de: "Die Stadt ist zerstört worden.", ku: "شارەکە وێران کراوە.", tr: "Şehir yıkıldı.", en: "The city has been destroyed.", ar: "دُمّرت المدينة." }, { de: "Die Regeln werden erklärt.", ku: "یاساکان ڕوون دەکرێنەوە.", tr: "Kurallar açıklanıyor.", en: "The rules are being explained.", ar: "تُشرح القواعد." } ] },
    { de: "Zustandspassiv", ku: "Passivی دۆخ", icon: "▣",
      exp: "ئەنجامی کارێک پیشان دەدات، نەک کردارەکە. sein + Partizip II. نموونە: «Die Tür ist geschlossen» (دەرگاکە داخراوە — دۆخ).",
      tr: "Durum Edilgeni", expTr: "Bir eylemin sonucunu gösterir, eylemin kendisini değil. sein + Partizip II. Örnek: «Die Tür ist geschlossen» (Kapı kapalı — durum).",
      en: "Stative passive", expEn: "Shows the result of an action, not the action itself. sein + Partizip II. Example: «Die Tür ist geschlossen» (The door is closed — state).",
      ar: "المبني للمجهول الوصفي (حالة)", expAr: "يبيّن نتيجة فعل ما، وليس الفعل نفسه. sein + Partizip II. مثال: «Die Tür ist geschlossen» (الباب مغلق — حالة).",
      ex: [ { de: "Das Geschäft ist geschlossen.", ku: "دوکانەکە داخراوە.", tr: "Dükkan kapalı.", en: "The shop is closed.", ar: "المحل مغلق." }, { de: "Der Brief ist geschrieben.", ku: "نامەکە نووسراوە.", tr: "Mektup yazılmış.", en: "The letter is written.", ar: "الرسالة مكتوبة." }, { de: "Alles ist vorbereitet.", ku: "هەمووشت ئامادەکراوە.", tr: "Her şey hazır.", en: "Everything is prepared.", ar: "كل شيء جاهز." }, { de: "Das Fenster ist geöffnet.", ku: "پەنجەرەکە کراوەیە.", tr: "Pencere açık.", en: "The window is open.", ar: "النافذة مفتوحة." }, { de: "Die Arbeit ist erledigt.", ku: "کارەکە تەواوکراوە.", tr: "İş tamamlandı.", en: "The work is done.", ar: "العمل منجز." }, { de: "Das Problem ist gelöst.", ku: "کێشەکە چارەسەرکراوە.", tr: "Sorun çözüldü.", en: "The problem is solved.", ar: "المشكلة محلولة." } ] },
    { de: "Passiv mit Modalverben", ku: "Passiv لەگەڵ مۆداڵ", icon: "⊞",
      exp: "مۆداڵ + Partizip II + werden. نموونە: «Das muss gemacht werden» (ئەمە دەبێت بکرێت).",
      tr: "Modal Fiilli Edilgen", expTr: "Modal + Partizip II + werden. Örnek: «Das muss gemacht werden» (Bu yapılmalıdır).",
      en: "Passive with modal verbs", expEn: "Modal verb + Partizip II + werden. Example: «Das muss gemacht werden» (This must be done).",
      ar: "المبني للمجهول مع الأفعال الناقصة", expAr: "الفعل الواصف (المودال) + Partizip II + werden. مثال: «Das muss gemacht werden» (يجب فعل هذا).",
      ex: [ { de: "Das muss repariert werden.", ku: "ئەمە دەبێت چاک بکرێتەوە.", tr: "Bu tamir edilmeli.", en: "This must be repaired.", ar: "يجب إصلاح هذا." }, { de: "Es kann gemacht werden.", ku: "دەکرێت بکرێت.", tr: "Yapılabilir.", en: "It can be done.", ar: "يمكن فعله." }, { de: "Es sollte vermieden werden.", ku: "دەبێت خۆی لێ بپارێزرێت.", tr: "Kaçınılmalıydı.", en: "It should be avoided.", ar: "ينبغي تجنّب ذلك." }, { de: "Das darf nicht gesagt werden.", ku: "ئەمە نابێت بگوترێت.", tr: "Bu söylenmemeli.", en: "This must not be said.", ar: "لا يجوز قول هذا." }, { de: "Die Regeln müssen befolgt werden.", ku: "دەبێت یاساکان پەیڕەو بکرێن.", tr: "Kurallara uyulmalı.", en: "The rules must be followed.", ar: "يجب اتباع القواعد." }, { de: "Es kann nicht geändert werden.", ku: "ناتوانرێت بگۆڕدرێت.", tr: "Değiştirilemez.", en: "It cannot be changed.", ar: "لا يمكن تغييره." } ] },
    { de: "Konjunktiv II (fortgeschritten)", ku: "کۆنیونکتیڤ II (پێشکەوتوو)", icon: "≈",
      exp: "بۆ گریمانەی ڕابردوو و پەشیمانی. hätte/wäre + Partizip II. نموونە: «Ich hätte das gemacht» (ئەمەم بکردایە).",
      tr: "Konjunktiv II (İleri Düzey)", expTr: "Geçmişteki varsayımlar ve pişmanlık için. hätte/wäre + Partizip II. Örnek: «Ich hätte das gemacht» (Bunu yapardım).",
      en: "Subjunctive II (advanced)", expEn: "For past hypotheticals and regret. hätte/wäre + Partizip II. Example: «Ich hätte das gemacht» (I would have done this).",
      ar: "الجملة الشرطية الثانية (متقدم)", expAr: "للافتراضات في الماضي والندم. hätte/wäre + Partizip II. مثال: «Ich hätte das gemacht» (كنت سأفعل هذا).",
      ex: [ { de: "Ich hätte dir geholfen.", ku: "یارمەتیم بدایایت.", tr: "Sana yardım ederdim.", en: "I would have helped you.", ar: "كنت سأساعدك." }, { de: "Wenn ich Zeit gehabt hätte, ...", ku: "ئەگەر کاتم هەبووایە، ...", tr: "Zamanım olsaydı, ...", en: "If I had had time, ...", ar: "لو كان لدي وقت، ..." }, { de: "Das wäre besser gewesen.", ku: "ئەمە باشتر دەبوو.", tr: "Bu daha iyi olurdu.", en: "That would have been better.", ar: "كان ذلك سيكون أفضل." }, { de: "Ich hätte das nicht gesagt.", ku: "ئەمەم نەدەگوت.", tr: "Bunu söylemezdim.", en: "I would not have said that.", ar: "ما كنت لأقول ذلك." }, { de: "Wärst du gekommen, ...", ku: "ئەگەر هاتبووایت، ...", tr: "Gelmiş olsaydın, ...", en: "Had you come, ...", ar: "لو كنت قد أتيت، ..." }, { de: "Sie hätte gewinnen können.", ku: "دەیتوانی بباتەوە.", tr: "Kazanabilirdi.", en: "She could have won.", ar: "كان بإمكانها أن تفوز." } ] },
    { de: "Konjunktiv I (indirekte Rede)", ku: "کۆنیونکتیڤ I (قسەی ناڕاستەوخۆ)", icon: "❝",
      exp: "بۆ گێڕانەوەی قسەی کەسانی تر (بەتایبەت لە ڕۆژنامەدا). نموونە: er sei، er habe، er komme.",
      tr: "Konjunktiv I (Dolaylı Anlatım)", expTr: "Başkalarının sözlerini aktarmak için (özellikle gazetecilikte). Örnek: er sei, er habe, er komme.",
      en: "Subjunctive I (reported speech)", expEn: "For reporting other people's speech (especially in journalism). Example: er sei, er habe, er komme.",
      ar: "الجملة الشرطية الأولى (الكلام المنقول)", expAr: "لنقل كلام الآخرين بشكل غير مباشر (خاصة في الصحافة). مثال: er sei، er habe، er komme.",
      ex: [ { de: "Er sagt, er sei krank.", ku: "دەڵێت کە نەخۆشە.", tr: "Hasta olduğunu söylüyor.", en: "He says he is sick.", ar: "يقول إنه مريض." }, { de: "Sie meint, sie habe Zeit.", ku: "پێیوایە کاتی هەیە.", tr: "Zamanının olduğunu düşünüyor.", en: "She thinks she has time.", ar: "تعتقد أن لديها وقتاً." }, { de: "Man sagt, es komme bald.", ku: "دەگوترێت بەم زووانە دێت.", tr: "Yakında geleceği söyleniyor.", en: "They say it will come soon.", ar: "يُقال إنه سيأتي قريباً." }, { de: "Er behauptet, er wisse nichts.", ku: "بانگەشە دەکات هیچ نازانێت.", tr: "Hiçbir şey bilmediğini iddia ediyor.", en: "He claims he knows nothing.", ar: "يدّعي أنه لا يعرف شيئاً." }, { de: "Sie sagte, sie werde kommen.", ku: "گوتی دێت.", tr: "Geleceğini söyledi.", en: "She said she would come.", ar: "قالت إنها ستأتي." }, { de: "Der Minister sagt, er habe recht.", ku: "وەزیر دەڵێت ڕاستە.", tr: "Bakan haklı olduğunu söylüyor.", en: "The minister says he is right.", ar: "يقول الوزير إنه على حق." } ] },
    { de: "Erweiterte Relativsätze", ku: "ڕستەی پەیوەندیداری فراوان", icon: "⌐",
      exp: "ڕستەی پەیوەندیدار لەگەڵ ئامراز: «in dem»، «mit der»، «über den». هەروەها was/wo بۆ ئاماژەی گشتی.",
      tr: "Genişletilmiş Bağımlı Cümleler", expTr: "Edatlı bağımlı cümleler: «in dem», «mit der», «über den». Ayrıca genel başvuru için was/wo.",
      en: "Extended relative clauses", expEn: "Relative clauses with prepositions: «in dem», «mit der», «über den». Also was/wo for general reference.",
      ar: "جمل الصلة الموسّعة", expAr: "جمل الوصل مع حروف الجر: «in dem»، «mit der»، «über den». وأيضاً was/wo للإشارة العامة.",
      ex: [ { de: "der Tag, an dem wir ...", ku: "ئەو ڕۆژەی کە ئێمە ...", tr: "... ettiğimiz gün", en: "the day on which we ...", ar: "اليوم الذي فيه ..." }, { de: "das Thema, über das ...", ku: "ئەو بابەتەی دەربارەی ...", tr: "... hakkında konuştuğumuz konu", en: "the topic about which ...", ar: "الموضوع الذي عنه ..." }, { de: "alles, was du brauchst", ku: "هەرچی پێویستتە", tr: "ihtiyacın olan her şey", en: "everything that you need", ar: "كل ما تحتاجه" }, { de: "die Firma, bei der ich arbeite, ...", ku: "ئەو کۆمپانیایەی تێیدا کار دەکەم، ...", tr: "çalıştığım şirket, ...", en: "the company where I work, ...", ar: "الشركة التي أعمل بها، ..." }, { de: "der Grund, aus dem ...", ku: "ئەو هۆکارەی کە ...", tr: "... sebebi", en: "the reason why ...", ar: "السبب الذي ..." }, { de: "das, was wichtig ist, ...", ku: "ئەوەی گرنگە، ...", tr: "önemli olan, ...", en: "what is important, ...", ar: "ما هو مهم، ..." } ] },
    { de: "Kausale, konsekutive, konzessive Sätze", ku: "ڕستەی هۆکاری، ئەنجامی، ڕێگری", icon: "⟜",
      exp: "هۆکاری (da، weil)، ئەنجامی (sodass، so…dass)، ڕێگری/کۆنسێسیڤ (obwohl، obgleich). بۆ پەیوەندی لۆژیکی نێوان ڕستەکان.",
      tr: "Neden, Sonuç ve Karşıt Cümleler", expTr: "Nedensel (da, weil), sonuç (sodass, so…dass), karşıt/tavizli (obwohl, obgleich). Cümleler arasındaki mantıksal bağlantı için.",
      en: "Causal, consecutive, concessive clauses", expEn: "Causal (da, weil), consecutive/result (sodass, so…dass), concessive (obwohl, obgleich). For the logical connection between clauses.",
      ar: "الجمل السببية والنتيجية والتنازلية", expAr: "السببية (da، weil)، والنتيجة (sodass، so…dass)، والتنازل/التضاد (obwohl، obgleich). للربط المنطقي بين الجمل.",
      ex: [ { de: "Da es regnet, bleiben wir.", ku: "لەبەر ئەوەی باران دەبارێت، دەمێنینەوە.", tr: "Yağmur yağdığı için kalıyoruz.", en: "Since it is raining, we are staying.", ar: "بما أن المطر يهطل، سنبقى." }, { de: "Es war so kalt, dass ...", ku: "ئەوەندە سارد بوو کە ...", tr: "O kadar soğuktu ki ...", en: "It was so cold that ...", ar: "كان الجو بارداً جداً لدرجة أن ..." }, { de: "Obwohl er müde ist, arbeitet er.", ku: "هەرچەندە ماندووە، کار دەکات.", tr: "Her ne kadar yorgun olsa da çalışıyor.", en: "Although he is tired, he is working.", ar: "على الرغم من أنه متعب، إلا أنه يعمل." }, { de: "Er lernte viel, sodass er bestand.", ku: "زۆر خوێندی، بۆیە سەرکەوت.", tr: "Çok çalıştı, bu yüzden başardı.", en: "He studied a lot, so he passed.", ar: "درس كثيراً، لذلك نجح." }, { de: "Weil sie krank war, blieb sie.", ku: "چونکە نەخۆش بوو، مایەوە.", tr: "Hasta olduğu için kaldı.", en: "Because she was sick, she stayed.", ar: "لأنها كانت مريضة، بقيت." }, { de: "Trotzdem gab er nicht auf.", ku: "لەگەڵ ئەوەشدا واز نەهێنا.", tr: "Yine de pes etmedi.", en: "Nevertheless, he did not give up.", ar: "مع ذلك، لم يستسلم." } ] },
    { de: "Futur II", ku: "داهاتووی دووەم", icon: "⇉",
      exp: "بۆ کارێک کە لە داهاتوودا تەواو دەبێت. werden + Partizip II + haben/sein. نموونە: «Ich werde es gemacht haben».",
      tr: "İkinci Gelecek Zaman", expTr: "Gelecekte tamamlanmış olacak bir eylem için. werden + Partizip II + haben/sein. Örnek: «Ich werde es gemacht haben».",
      en: "Future tense II", expEn: "For an action that will be completed in the future. werden + Partizip II + haben/sein. Example: «Ich werde es gemacht haben».",
      ar: "زمن المستقبل الثاني", expAr: "لفعل سيكون قد اكتمل في المستقبل. werden + Partizip II + haben/sein. مثال: «Ich werde es gemacht haben».",
      ex: [ { de: "Bis morgen werde ich es beendet haben.", ku: "تا سبەینێ تەوای دەکەم.", tr: "Yarına kadar bitirmiş olacağım.", en: "By tomorrow I will have finished it.", ar: "بحلول الغد سأكون قد أنهيته." }, { de: "Er wird angekommen sein.", ku: "ئەو گەیشتووی دەبێت.", tr: "Varmış olacak.", en: "He will have arrived.", ar: "سيكون قد وصل." }, { de: "Sie wird es vergessen haben.", ku: "لەوانەیە بیری چووبێت.", tr: "Unutmuş olabilir.", en: "She will have forgotten it.", ar: "لعلها تكون قد نسيت ذلك." }, { de: "Bis dahin werden wir fertig sein.", ku: "تا ئەو کاتە تەواو دەبین.", tr: "O zamana kadar bitirmiş olacağız.", en: "By then we will be finished.", ar: "بحلول ذلك الوقت سنكون قد انتهينا." }, { de: "Er wird das gelesen haben.", ku: "ئەو ئەمەی خوێندووەتەوە (گریمانە).", tr: "Okumuş olacak (tahmin).", en: "He will have read that (assumption).", ar: "سيكون قد قرأ ذلك (افتراض)." }, { de: "Sie werden gegangen sein.", ku: "ئەوان ڕۆیشتوون (گریمانە).", tr: "Gitmiş olacaklar (tahmin).", en: "They will have left (assumption).", ar: "سيكونون قد رحلوا (افتراض)." } ] },
    { de: "Partizip I", ku: "پارتیسیپی یەکەم", icon: "Ⅰ",
      exp: "Infinitiv + d. وەک سیفەت کاری ئەنجامدراو/بەردەوام پیشان دەدات. نموونە: spielend (یاریکەر، لە کاتی یاریدا).",
      tr: "Birinci Ortaç", expTr: "Mastar + d. Sıfat olarak süregelen eylemi gösterir. Örnek: spielend (oynayan, oynarken).",
      en: "Present participle (Partizip I)", expEn: "Infinitive + d. As an adjective, it shows an ongoing/simultaneous action. Example: spielend (playing, while playing).",
      ar: "اسم الفاعل (Partizip I)", expAr: "المصدر + d. يُستخدم كصفة ويدل على فعل مستمر/متزامن. مثال: spielend (لاعب، أثناء اللعب).",
      ex: [ { de: "das spielende Kind", ku: "منداڵە یاریکەرەکە", tr: "oynayan çocuk", en: "the playing child", ar: "الطفل اللاعب" }, { de: "die schlafende Katze", ku: "پشیلە خەوتووەکە", tr: "uyuyan kedi", en: "the sleeping cat", ar: "القطة النائمة" }, { de: "lachend", ku: "بەپێکەنینەوە", tr: "gülerek", en: "laughing", ar: "ضاحكاً" }, { de: "die singende Frau", ku: "ژنە گۆرانیبێژەکە", tr: "şarkı söyleyen kadın", en: "the singing woman", ar: "المرأة المغنية" }, { de: "ein weinendes Baby", ku: "کۆرپەیەکی گریان", tr: "ağlayan bir bebek", en: "a crying baby", ar: "طفل رضيع يبكي" }, { de: "die kommende Woche", ku: "هەفتەی داهاتوو", tr: "gelecek hafta", en: "next week", ar: "الأسبوع القادم" } ] },
    { de: "Partizip II als Adjektiv", ku: "پارتیسیپی دووەم وەک سیفەت", icon: "Ⅱ",
      exp: "Partizip II دەتوانێت وەک سیفەت بەکاربێت و ئەنجامێک پیشان بدات. نموونە: «das gekochte Essen» (خواردنە لێنراوەکە).",
      tr: "Sıfat Olarak İkinci Ortaç", expTr: "Partizip II sıfat olarak kullanılabilir ve sonucu gösterir. Örnek: «das gekochte Essen» (pişirilmiş yemek).",
      en: "Past participle as adjective", expEn: "Partizip II can be used as an adjective to show a result. Example: «das gekochte Essen» (the cooked food).",
      ar: "اسم المفعول كصفة (Partizip II)", expAr: "يمكن استخدام Partizip II كصفة تدل على نتيجة. مثال: «das gekochte Essen» (الطعام المطبوخ).",
      ex: [ { de: "die geöffnete Tür", ku: "دەرگا کراوەکە", tr: "açık kapı", en: "the open door", ar: "الباب المفتوح" }, { de: "ein gebrauchtes Auto", ku: "ئۆتۆمبێلێکی بەکارهاتوو", tr: "kullanılmış araba", en: "a used car", ar: "سيارة مستعملة" }, { de: "das geschriebene Wort", ku: "وشە نووسراوەکە", tr: "yazılmış kelime", en: "the written word", ar: "الكلمة المكتوبة" }, { de: "die gekochte Suppe", ku: "شۆربا لێنراوەکە", tr: "pişirilmiş çorba", en: "the cooked soup", ar: "الحساء المطبوخ" }, { de: "ein verlorenes Spiel", ku: "یارییەکی دۆڕاو", tr: "kaybedilmiş oyun", en: "a lost game", ar: "مباراة خاسرة" }, { de: "die reparierte Uhr", ku: "کاتژمێرە چاککراوەکە", tr: "tamir edilmiş saat", en: "the repaired watch", ar: "الساعة المُصلَّحة" } ] },
    { de: "Nominalisierung", ku: "ناوکردن (نۆمیناڵایزەیشن)", icon: "N",
      exp: "گۆڕینی کردار/ڕستە بۆ ناو — تایبەتمەندی ئەڵمانی فەرمی و ئەکادیمی. نموونە: «beim Lernen» = «während man lernt».",
      tr: "İsimleştirme", expTr: "Fiil/cümleyi isme dönüştürme — resmi ve akademik Almancaya özgü. Örnek: «beim Lernen» = «öğrenirken».",
      en: "Nominalization", expEn: "Turning a verb/clause into a noun — a feature specific to formal and academic German. Example: «beim Lernen» = «while learning».",
      ar: "التسمية (تحويل الفعل إلى اسم)", expAr: "تحويل الفعل/الجملة إلى اسم — سمة خاصة بالألمانية الرسمية والأكاديمية. مثال: «beim Lernen» = «أثناء التعلّم».",
      ex: [ { de: "das Lernen", ku: "فێربوون (وەک ناو)", tr: "öğrenme (isim olarak)", en: "learning (as a noun)", ar: "التعلّم (كاسم)" }, { de: "beim Lesen", ku: "لە کاتی خوێندنەوەدا", tr: "okuma sırasında", en: "while reading", ar: "أثناء القراءة" }, { de: "nach der Ankunft", ku: "دوای گەیشتن", tr: "varıştan sonra", en: "after arrival", ar: "بعد الوصول" }, { de: "vor dem Schlafen", ku: "پێش خەوتن", tr: "uyumadan önce", en: "before sleeping", ar: "قبل النوم" }, { de: "das Rauchen ist verboten", ku: "جگەرەکێشان قەدەغەیە", tr: "sigara içmek yasak", en: "smoking is forbidden", ar: "التدخين ممنوع" }, { de: "durch das Üben", ku: "بەهۆی مەشقکردنەوە", tr: "pratik yaparak", en: "through practicing", ar: "من خلال الممارسة" } ] },
    { de: "Funktionsverbgefüge", ku: "گرێدانی ناو-کردار", icon: "⚙",
      exp: "بەستەی ناو+کردار کە وەک یەک واتا کاردەکەن، زۆر لە ئەڵمانی فەرمیدا. نموونە: «eine Entscheidung treffen» (بڕیاردان).",
      tr: "Fiil-İsim Bileşikleri", expTr: "İsim+fiil bileşimi bir anlam birimini oluşturur, çok resmi Almancada sık kullanılır. Örnek: «eine Entscheidung treffen» (karar vermek).",
      en: "Support-verb constructions", expEn: "Noun+verb combinations that function as a single meaning unit, common in formal German. Example: «eine Entscheidung treffen» (to make a decision).",
      ar: "التراكيب الفعلية الوظيفية", expAr: "تراكيب اسم+فعل تعمل كوحدة معنى واحدة، شائعة في الألمانية الرسمية. مثال: «eine Entscheidung treffen» (اتخاذ قرار).",
      ex: [ { de: "eine Entscheidung treffen", ku: "بڕیاردان", tr: "karar vermek", en: "to make a decision", ar: "اتخاذ قرار" }, { de: "in Frage stellen", ku: "گومان لێکردن", tr: "sorgulamak", en: "to call into question", ar: "التشكيك في" }, { de: "zur Verfügung stehen", ku: "بەردەست بوون", tr: "mevcut olmak", en: "to be available", ar: "أن يكون متاحاً" }, { de: "eine Rolle spielen", ku: "ڕۆڵ گێڕان", tr: "rol oynamak", en: "to play a role", ar: "لعب دور" }, { de: "Rücksicht nehmen", ku: "ڕەچاوکردن", tr: "saygı göstermek", en: "to show consideration", ar: "المراعاة" }, { de: "in Anspruch nehmen", ku: "سوود وەرگرتن لە", tr: "yararlanmak", en: "to make use of", ar: "الاستفادة من" } ] },
    { de: "Verben/Adjektive/Nomen mit Präpositionen", ku: "وشە لەگەڵ ئامرازی جێگیر", icon: "⌖",
      exp: "زۆر کردار، سیفەت و ناو ئامرازێکی جێگیریان هەیە کە دەبێت لەبەری بکەیت. نموونە: warten auf (چاوەڕوانی)، stolz auf (شانازی بە).",
      tr: "Sabit Edatlı Kelimeler", expTr: "Birçok fiil, sıfat ve ismin öğrenilmesi gereken sabit bir edatı vardır. Örnek: warten auf (beklemek), stolz auf (gurur duymak).",
      en: "Verbs/adjectives/nouns with fixed prepositions", expEn: "Many verbs, adjectives and nouns have a fixed preposition that must be memorized. Example: warten auf (to wait for), stolz auf (proud of).",
      ar: "الأفعال والصفات والأسماء مع حروف جر ثابتة", expAr: "العديد من الأفعال والصفات والأسماء لها حرف جر ثابت يجب حفظه. مثال: warten auf (انتظار)، stolz auf (فخور بـ).",
      ex: [ { de: "Ich warte auf den Bus.", ku: "چاوەڕوانی پاس دەکەم.", tr: "Otobüsü bekliyorum.", en: "I am waiting for the bus.", ar: "أنا أنتظر الحافلة." }, { de: "Ich denke an dich.", ku: "بیرت دەکەمەوە.", tr: "Seni düşünüyorum.", en: "I am thinking of you.", ar: "أفكر فيك." }, { de: "stolz auf etwas sein", ku: "شانازی بە شتێک کردن", tr: "bir şeyle gurur duymak", en: "to be proud of something", ar: "أن يكون فخوراً بشيء" }, { de: "Ich freue mich auf das Wochenende.", ku: "بە کۆتایی هەفتە دڵخۆشم.", tr: "Haftasonuna sevindim.", en: "I am looking forward to the weekend.", ar: "أتطلع إلى نهاية الأسبوع." }, { de: "Er interessiert sich für Politik.", ku: "ئارەزووی سیاسەت دەکات.", tr: "Siyasetle ilgileniyor.", en: "He is interested in politics.", ar: "إنه مهتم بالسياسة." }, { de: "die Angst vor dem Versagen", ku: "ترس لە شکستهێنان", tr: "başarısızlık korkusu", en: "the fear of failure", ar: "الخوف من الفشل" } ] },
    { de: "Wortbildung: Präfixe & Suffixe", ku: "دروستکردنی وشە: پێشگر و پاشگر", icon: "✚",
      exp: "وشەی نوێ بە پێشگر (un-، ver-، be-) و پاشگر (-ung، -heit، -keit، -lich) دروست دەکرێن. ئەمە دەستەواژەکەت زۆر فراوان دەکات.",
      tr: "Kelime Yapımı: Önekler ve Sonekler", expTr: "Önekler (un-, ver-, be-) ve sonekler (-ung, -heit, -keit, -lich) ile yeni kelimeler üretilir. Bu kelime dağarcığını büyük ölçüde genişletir.",
      en: "Word formation: prefixes & suffixes", expEn: "New words are formed with prefixes (un-, ver-, be-) and suffixes (-ung, -heit, -keit, -lich). This greatly expands your vocabulary.",
      ar: "تكوين الكلمات: البادئات واللواحق", expAr: "تُشكَّل كلمات جديدة بإضافة بادئات (un-، ver-، be-) ولواحق (-ung، -heit، -keit، -lich). هذا يوسّع مفرداتك بشكل كبير.",
      ex: [ { de: "glücklich → das Glück", ku: "بەختەوەر → بەختەوەری", tr: "mutlu → mutluluk", en: "happy → happiness", ar: "سعيد ← السعادة" }, { de: "frei → die Freiheit", ku: "ئازاد → ئازادی", tr: "özgür → özgürlük", en: "free → freedom", ar: "حر ← الحرية" }, { de: "möglich → unmöglich", ku: "گونجاو → ناگونجاو", tr: "mümkün → imkânsız", en: "possible → impossible", ar: "ممكن ← مستحيل" }, { de: "arbeiten → die Arbeit", ku: "کارکردن → کار", tr: "çalışmak → iş", en: "to work → work", ar: "يعمل ← العمل" }, { de: "krank → die Krankheit", ku: "نەخۆش → نەخۆشی", tr: "hasta → hastalık", en: "sick → illness", ar: "مريض ← المرض" }, { de: "lesen → der Leser", ku: "خوێندنەوە → خوێنەر", tr: "okumak → okuyucu", en: "to read → reader", ar: "يقرأ ← القارئ" } ] },
  ],
  C1: [
    { de: "Konjunktiv I (komplex)", ku: "کۆنیونکتیڤ I (ئاستبەرز)", icon: "❝",
      exp: "Konjunktiv I زۆرجار لە ڕۆژنامەدا بۆ گێڕانەوەی قسەی کەسانی تر بەکاردێت. کاتێک Konjunktiv I وەک Indikativ دەبێت، Konjunktiv II جێی دەگرێتەوە. ئەم ڕێزمانە زۆر بەکارهاتووە لە مێدیای ئەڵمانیدا.",
      tr: "Konjunktiv I (Karmaşık)", expTr: "Konjunktiv I çoğunlukla gazetecilikte başkalarının sözlerini aktarmak için kullanılır. Konjunktiv I Indikativ gibi göründüğünde Konjunktiv II onun yerini alır. Bu dilbilgisi Alman medyasında çok yaygındır.",
      en: "Subjunctive I (complex)", expEn: "Konjunktiv I is mostly used in journalism to report what other people have said. When Konjunktiv I is identical in form to the Indikativ, Konjunktiv II takes its place instead. This grammatical feature is extremely common in German media.",
      ar: "الجملة الشرطية الأولى (معقدة)", expAr: "غالبًا ما تُستخدم صيغة Konjunktiv I في الصحافة لنقل كلام الآخرين. وعندما تتطابق صيغة Konjunktiv I مع صيغة Indikativ، تحل صيغة Konjunktiv II محلها. وهذه الظاهرة النحوية شائعة جدًا في وسائل الإعلام الألمانية.",
      ex: [ { de: "Der Minister erklärte, er habe alles getan.", ku: "وەزیرەکە ڕووناکی کردەوە کە هەرشتێکی کردووە.", tr: "Bakan her şeyi yaptığını açıkladı.", en: "The minister explained that he had done everything.", ar: "أوضح الوزير أنه قام بكل شيء." }, { de: "Die Studie besagt, die Lage sei kritisch.", ku: "توێژینەوەکە دەڵێت دۆخەکە خەمئالودەیە.", tr: "Çalışma durumun kritik olduğunu söylüyor.", en: "The study states that the situation is critical.", ar: "تشير الدراسة إلى أن الوضع حرج." }, { de: "Laut Bericht sei die Entscheidung falsch gewesen.", ku: "بەپێی ڕاپۆڕتەکە بڕیارەکە هەڵە بووە.", tr: "Rapora göre karar yanlışmış.", en: "According to the report, the decision was said to have been wrong.", ar: "بحسب التقرير، يُقال إن القرار كان خاطئًا." }, { de: "Er behauptete, er wisse nichts davon.", ku: "بانگەشەی کرد کە هیچی لێی نازانێت.", tr: "Hiçbir şey bilmediğini iddia etti.", en: "He claimed that he knew nothing about it.", ar: "زعم أنه لا يعرف شيئًا عن ذلك." }, { de: "Die Firma teilte mit, sie werde expandieren.", ku: "کۆمپانیاکە ئاگادارکردەوە کە فراوان دەبێت.", tr: "Şirket büyüyeceğini duyurdu.", en: "The company announced that it would expand.", ar: "أعلنت الشركة أنها ستتوسع." }, { de: "Berichten zufolge seien mehrere Personen verletzt.", ku: "بەپێی ڕاپۆڕتەکان ژمارەیەک کەس برینداربوون.", tr: "Raporlara göre birkaç kişi yaralanmış.", en: "According to reports, several people were said to be injured.", ar: "وفقًا للتقارير، أُصيب عدة أشخاص." } ] },
    { de: "Kausale & konzessive Konnektoren (C1)", ku: "بەستەرەکانی هۆکاری و ڕێگری (C1)", icon: "↔",
      exp: "لە ئاستی C1دا بەستەرە پێچەوانەکانی زیادتر هەن: wenngleich (هەرچەندە)، insofern (لەو ڕووەوە کە)، sofern (ئەگەر ئەمەش)، zumal (بەتایبەت کە)، geschweige denn (جا ئەوەش).",
      tr: "Neden ve Karşıt Bağlaçlar (C1)", expTr: "C1 düzeyinde daha fazla karşıt bağlaç vardır: wenngleich (her ne kadar), insofern (bu ölçüde), sofern (eğer), zumal (özellikle de), geschweige denn (bırak... bir de).",
      en: "Causal & concessive connectors (C1)", expEn: "At the C1 level there are more concessive connectors: wenngleich (although), insofern (insofar as), sofern (provided that), zumal (especially since), geschweige denn (let alone).",
      ar: "الروابط السببية والتنازلية (C1)", expAr: "في مستوى C1 هناك المزيد من الروابط الاستدراكية: wenngleich (رغم أن)، insofern (بقدر ما)، sofern (بشرط أن)، zumal (لا سيما أن)، geschweige denn (ناهيك عن).",
      ex: [ { de: "Wenngleich es schwierig ist, werden wir weitermachen.", ku: "هەرچەندە سەختە، بەردەوام دەبین.", tr: "Her ne kadar zor olsa da devam edeceğiz.", en: "Although it is difficult, we will continue.", ar: "رغم أن الأمر صعب، سنواصل." }, { de: "Insofern das stimmt, müssen wir handeln.", ku: "لەو ڕووەوە کە ئەمە ڕاستە، دەبێت هەنگاو بنێین.", tr: "Bu doğru olduğu ölçüde harekete geçmemiz gerekir.", en: "Insofar as that is true, we must act.", ar: "بقدر ما يكون هذا صحيحًا، يجب أن نتصرف." }, { de: "Zumal er krank ist, sollte er sich schonen.", ku: "بەتایبەت کە نەخۆشە، دەبێت خۆی بپارێزێت.", tr: "Özellikle hasta olduğu için dinlenmeli.", en: "Especially since he is sick, he should take it easy.", ar: "لا سيما أنه مريض، ينبغي أن يعتني بنفسه." }, { de: "Er kann nicht fahren, geschweige denn fliegen.", ku: "ناتوانێت بمژێت، جا فڕین؟", tr: "Araba süremez, uçmak ise hiç.", en: "He can't drive, let alone fly.", ar: "لا يستطيع القيادة، ناهيك عن الطيران." }, { de: "Sofern keine Einwände bestehen, beginnen wir.", ku: "ئەگەر دژایەتی نەبێت، دەست پێدەکەین.", tr: "İtiraz yoksa başlıyoruz.", en: "Provided there are no objections, we will begin.", ar: "بشرط ألا توجد اعتراضات، سنبدأ." }, { de: "Ungeachtet der Kritik hielt er an seiner Meinung fest.", ku: "سەرەڕای ڕەخنەکان، لە بۆچوونەکەی مایەوە.", tr: "Eleştirilere rağmen görüşünde ısrar etti.", en: "Regardless of the criticism, he held onto his opinion.", ar: "بصرف النظر عن الانتقادات، تمسك برأيه." } ] },
    { de: "Partizipialkonstruktionen", ku: "دروستکردنی هاوپەیوەند بە بەشداری", icon: "P",
      exp: "لە ئەڵمانیدا دەتوانین ڕستەی جێگیرکراو بەجێهێڵین و بە Partizip I یان II شوێنی بگرینەوە. ئەمە زۆرجار لە نووسینی فەرمی و ئەکادیمیدا دەردەکەوێت. Partizip I (کردار + -d) بۆ کردارێکی هاوکاتی بەکاردێت، Partizip II بۆ ئەوی تەواوبوو.",
      tr: "Ortaç Yapıları", expTr: "Almancada bağımlı cümleler yerine Partizip I veya II kullanılabilir. Bu çoğunlukla resmi ve akademik yazıda görülür. Partizip I (fiil + -d) eş zamanlı eylem, Partizip II tamamlanmış eylem için kullanılır.",
      en: "Participial constructions", expEn: "In German, subordinate clauses can be omitted and replaced with Partizip I or II constructions. This appears frequently in formal and academic writing. Partizip I (verb stem + -d) is used for simultaneous actions, Partizip II for completed ones.",
      ar: "تراكيب اسم الفاعل والمفعول", expAr: "في اللغة الألمانية يمكن الاستغناء عن الجملة الثانوية واستبدالها بصيغة Partizip I أو Partizip II. ويظهر هذا كثيرًا في الكتابة الرسمية والأكاديمية. تُستخدم Partizip I (الفعل + -d) للدلالة على فعل متزامن، بينما تُستخدم Partizip II للفعل التام.",
      ex: [ { de: "Der auf dem Sofa schlafende Mann schnarcht.", ku: "پیاوەکەی کە لەسەر کەناپەکە خەوتووە خڕژاند دەکات.", tr: "Kanepede uyuyan adam horluyor.", en: "The man sleeping on the sofa is snoring.", ar: "الرجل النائم على الأريكة يشخر." }, { de: "Das von ihr geschriebene Buch wurde ein Bestseller.", ku: "کتێبەکەی کە ئەوی نووسیوویەتی بەستسێلەر بوو.", tr: "Onun yazdığı kitap çok satanlar listesine girdi.", en: "The book written by her became a bestseller.", ar: "الكتاب الذي كتبته أصبح الأكثر مبيعًا." }, { de: "Die in der Zeitung erschienene Meldung war falsch.", ku: "هەواڵەکەی کە لە ڕۆژنامەدا چاپکراوە هەڵە بوو.", tr: "Gazetede çıkan haber yanlıştı.", en: "The report that appeared in the newspaper was wrong.", ar: "كان الخبر الذي نُشر في الصحيفة خاطئًا." }, { de: "Die zubereiteten Speisen rochen gut.", ku: "خواردنەکانی ئامادەکراو بۆی خۆش دەدا.", tr: "Hazırlanan yemekler güzel kokuyordu.", en: "The prepared dishes smelled good.", ar: "كانت الأطباق المُعدّة رائحتها طيبة." }, { de: "Ein lächelndes Kind kam auf mich zu.", ku: "منداڵێکی پێکەنان لەبەرچاوم هات.", tr: "Gülen bir çocuk yanıma geldi.", en: "A smiling child came up to me.", ar: "اقترب مني طفل مبتسم." }, { de: "Der verlorene Schlüssel war unter dem Tisch.", ku: "کلیلەکەی وەندراو لەژێر مێزەکەدا بوو.", tr: "Kaybolan anahtar masanın altındaydı.", en: "The lost key was under the table.", ar: "كان المفتاح المفقود تحت الطاولة." } ] },
    { de: "Erweiterte Infinitivkonstruktionen", ku: "دروستکردنی بێناو گەورەتر", icon: "∞",
      exp: "لەگەڵ um…zu (بۆ ئەوەی)، ohne…zu (بەبێ ئەوەی)، statt/anstatt…zu (لەبری ئەوەی)، brauchen…zu (پێویستت نییە). ئەمانە ڕستەی جێگیرکراو دەگۆڕن بۆ دروستکردنی سادەتر.",
      tr: "Genişletilmiş Mastar Yapıları", expTr: "um…zu (... için), ohne…zu (... olmaksızın), statt/anstatt…zu (... yerine), brauchen…zu (yapman gerekmiyor). Bunlar bağımlı cümlelerin yerini daha basit yapılarla alır.",
      en: "Extended infinitive constructions", expEn: "With um…zu (in order to), ohne…zu (without), statt/anstatt…zu (instead of), brauchen…zu (need not). These replace subordinate clauses with simpler constructions.",
      ar: "تراكيب المصدر الموسّعة", expAr: "مع um…zu (لكي)، ohne…zu (من دون أن)، statt/anstatt…zu (بدلاً من أن)، brauchen…zu (لا حاجة لـ). تحل هذه محل الجمل الثانوية بصيغ أبسط.",
      ex: [ { de: "Ich arbeite hart, um Erfolg zu haben.", ku: "زەحمەت دەکێشم بۆ ئەوەی سەرکەوتوو بمێنم.", tr: "Başarılı olmak için çok çalışıyorum.", en: "I work hard in order to be successful.", ar: "أعمل بجد لكي أنجح." }, { de: "Er ging, ohne sich zu verabschieden.", ku: "ڕۆیشت بەبێ ئەوەی خوداحافیزی بکات.", tr: "Veda etmeden gitti.", en: "He left without saying goodbye.", ar: "غادر من دون أن يودّع." }, { de: "Statt zu lernen, spielte er.", ku: "لەبری ئەوەی فێربێت، یاری کرد.", tr: "Öğrenmek yerine oynadı.", en: "Instead of studying, he played.", ar: "بدلاً من أن يدرس، لعب." }, { de: "Du brauchst nicht zu warten.", ku: "پێویستت نییە چاوەڕوان بیت.", tr: "Beklemen gerekmiyor.", en: "You don't need to wait.", ar: "لست بحاجة إلى الانتظار." }, { de: "Sie lernte Deutsch, um in Deutschland zu studieren.", ku: "ئەڵمانی فێربوو بۆ ئەوەی لە ئەڵمانیادا بخوێنێت.", tr: "Almanya'da okumak için Almanca öğrendi.", en: "She learned German in order to study in Germany.", ar: "تعلمت الألمانية لكي تدرس في ألمانيا." }, { de: "Er hörte auf zu rauchen, ohne zu kämpfen.", ku: "دوماندنی بەجێهێڵا بەبێ تەکاپۆ.", tr: "Mücadele etmeden içmeyi bıraktı.", en: "He stopped smoking without a struggle.", ar: "توقف عن التدخين من دون أن يكافح." } ] },
    { de: "Doppelter Infinitiv", ku: "دوو بێناوی تێکەڵ", icon: "∬",
      exp: "کاتێک مۆداڵ لەگەڵ Perfekt یان Futur II بەکاردێت، دوو بێناو لە کۆتایی ڕستەکەدا دەخرێن. نموونە: Er hat kommen müssen (پێویستی بووە بێت). ئەمە ڕێزمانی ئەڵمانیی ئاستبەرزی فەرمییە.",
      tr: "Çift Mastar", expTr: "Bir modal Perfekt veya Futur II ile kullanıldığında, iki mastar cümlenin sonuna konur. Örnek: Er hat kommen müssen (gelmek zorundaydı). Bu ileri düzey resmi Almancadır.",
      en: "Double infinitive", expEn: "When a modal verb is used with the Perfekt or Futur II, two infinitives are placed at the end of the sentence. Example: Er hat kommen müssen (He had to come). This is advanced, formal German grammar.",
      ar: "المصدر المزدوج", expAr: "عندما يُستخدم فعل ناقص (modal) مع صيغة Perfekt أو Futur II، يوضع مصدران في نهاية الجملة. مثال: Er hat kommen müssen (كان عليه أن يأتي). وهذه قاعدة نحوية ألمانية رسمية متقدمة.",
      ex: [ { de: "Er hat kommen müssen.", ku: "پێویستی بووە بێت.", tr: "Gelmek zorundaydı.", en: "He had to come.", ar: "كان عليه أن يأتي." }, { de: "Sie hat es nicht sagen dürfen.", ku: "مۆڵەتی نەبووە بیڵێت.", tr: "Söylemesine izin yoktu.", en: "She was not allowed to say it.", ar: "لم يكن مسموحًا لها أن تقول ذلك." }, { de: "Wir haben lange warten müssen.", ku: "پێویستمان بووە زۆر چاوەڕوان بین.", tr: "Uzun süre beklemek zorunda kaldık.", en: "We had to wait a long time.", ar: "كان علينا أن ننتظر طويلاً." }, { de: "Das hätte nicht passieren dürfen.", ku: "نەبایستی ڕوویدابایە.", tr: "Bu olmamalıydı.", en: "That should not have happened.", ar: "ما كان ينبغي لهذا أن يحدث." }, { de: "Sie haben das Haus verlassen müssen.", ku: "پێویستیان بووە خانووەکە بەجێبهێڵن.", tr: "Evi terk etmek zorunda kaldılar.", en: "They had to leave the house.", ar: "كان عليهم أن يغادروا المنزل." }, { de: "Ich werde es gemacht haben müssen.", ku: "پێویست دەبێت کردیبیت.", tr: "Yapmış olmak zorunda kalacağım.", en: "I will have had to have done it.", ar: "سيكون عليّ أن أكون قد فعلت ذلك." } ] },
    { de: "Nominalisierungsstil", ku: "شێوازی ناوکردن", icon: "N↑",
      exp: "لە ئەکادیمیا و بازرگانیدا کردار بەناودەگۆڕدرێن بۆ ئەوەی ڕستە سەختتر و فەرمیتر بێت. نموونە: «analysieren» دەبێت «die Analyse durchführen». ئەمە Nominalisierungsstil ناوی پێدەدرێت.",
      tr: "İsimleştirme Stili", expTr: "Akademik ve iş dünyasında fiiller isme dönüştürülür; cümle daha resmi ve ağır olur. Örnek: «analysieren» → «die Analyse durchführen». Buna Nominalisierungsstil denir.",
      en: "Nominalization style", expEn: "In academia and business, verbs are turned into nouns to make sentences sound more formal and complex. Example: 'analysieren' becomes 'die Analyse durchführen' (to carry out an analysis). This is called Nominalisierungsstil (nominalization style).",
      ar: "أسلوب التسمية", expAr: "في الأوساط الأكاديمية وعالم الأعمال، تُحوَّل الأفعال إلى أسماء لجعل الجملة أكثر رسمية وتعقيدًا. مثال: تتحول «analysieren» (يحلّل) إلى «die Analyse durchführen» (إجراء تحليل). يُسمى هذا أسلوب التسمية (Nominalisierungsstil).",
      ex: [ { de: "die Durchführung einer Analyse", ku: "ئەنجامدانی شیکاری (لەبری: شیکاری کردن)", tr: "bir analiz yapmak (yazmak yerine: analiz etmek)", en: "carrying out an analysis (instead of: to analyze)", ar: "إجراء تحليل (بدلاً من: أن يحلَّل)" }, { de: "die Verbesserung der Situation", ku: "باشترکردنی دۆخەکە (لەبری: دۆخەکە باشتر کردن)", tr: "durumu iyileştirmek (durumu iyileştirmek yerine)", en: "the improvement of the situation (instead of: to improve the situation)", ar: "تحسين الوضع (بدلاً من: أن يُحسَّن الوضع)" }, { de: "unter Berücksichtigung der Kosten", ku: "لەگەڵ ڕەچاوکردنی تێچووەکان", tr: "maliyetler göz önünde bulundurularak", en: "taking the costs into consideration", ar: "مع مراعاة التكاليف" }, { de: "die Erreichung der Ziele", ku: "گەیشتن بە ئامانجەکان", tr: "hedeflere ulaşmak", en: "the achievement of the goals", ar: "تحقيق الأهداف" }, { de: "zur Lösung des Problems beitragen", ku: "بەشداری کردن لە چارەسەرکردنی کێشەکە", tr: "sorunun çözümüne katkıda bulunmak", en: "to contribute to the solution of the problem", ar: "المساهمة في حل المشكلة" }, { de: "die Bearbeitung des Antrags", ku: "مامەڵەکردن لەگەڵ داواکاریەکە", tr: "başvuruyu işleme koymak", en: "the processing of the application", ar: "معالجة الطلب" } ] },
    { de: "Gehobene Schriftsprache", ku: "نووسینی فەرمی و ئاستبەرز", icon: "✦",
      exp: "لە نووسینی فەرمیدا ئەڵمانیەکان فۆرمەکانی تایبەت بەکاردەهێنن: «Es wurde festgestellt, dass…»، «Angesichts der Tatsache, dass…»، «Im Hinblick auf…». ئەمانە لە ئەکادیمیا و کار گرنگن.",
      tr: "Resmi Yazı Dili", expTr: "Resmi yazıda Almanlar özel biçimler kullanır: «Es wurde festgestellt, dass…», «Angesichts der Tatsache, dass…», «Im Hinblick auf…». Bunlar akademik ve iş hayatında önemlidir.",
      en: "Elevated written language", expEn: "In formal writing, Germans use special set phrases: 'Es wurde festgestellt, dass…' (It was determined that…), 'Angesichts der Tatsache, dass…' (In view of the fact that…), 'Im Hinblick auf…' (With regard to…). These are important in academia and business.",
      ar: "اللغة المكتوبة الراقية", expAr: "في الكتابة الرسمية، يستخدم الألمان صيغًا ثابتة خاصة: «Es wurde festgestellt, dass…» (لقد تبيّن أن...)، «Angesichts der Tatsache, dass…» (نظرًا لحقيقة أن...)، «Im Hinblick auf…» (فيما يتعلق بـ...). وهذه مهمة في الأوساط الأكاديمية والعمل.",
      ex: [ { de: "Angesichts der aktuellen Lage ist Vorsicht geboten.", ku: "بەرپێی دۆخی ئێستا، وریاکاری پێویستە.", tr: "Mevcut duruma bakıldığında dikkat gerekmektedir.", en: "In view of the current situation, caution is warranted.", ar: "نظرًا للوضع الراهن، يجب توخي الحذر." }, { de: "Im Hinblick auf die Ergebnisse lässt sich sagen…", ku: "لە ڕووی ئەنجامەکانەوە دەتوانرێت بڵێین…", tr: "Sonuçlar açısından şunu söylenebilir…", en: "With regard to the results, it can be said that…", ar: "فيما يتعلق بالنتائج، يمكن القول إن…" }, { de: "Es ist darauf hinzuweisen, dass…", ku: "دەبێت سەرنج بدرێتە ئەوەی کە…", tr: "Şunu belirtmek gerekmektedir ki…", en: "It should be pointed out that…", ar: "تجدر الإشارة إلى أن…" }, { de: "Gemäß den Vorschriften ist zu beachten…", ku: "بەپێی رێنماییەکان دەبێت ئامانج بدرێت…", tr: "Yönetmeliklere göre dikkat edilmesi gereken…", en: "In accordance with the regulations, it must be noted…", ar: "وفقًا للوائح، يجب مراعاة…" }, { de: "Infolgedessen wurde die Maßnahme ergriffen.", ku: "لە ئەنجامدا ئەم ڕێوشوێنە گرتە دەست.", tr: "Sonuç olarak bu önlem alındı.", en: "As a result, the measure was taken.", ar: "ونتيجة لذلك، تم اتخاذ هذا الإجراء." }, { de: "Unter Berücksichtigung aller Faktoren…", ku: "لە ڕووی هەموو هۆکارەکانەوە…", tr: "Tüm faktörler göz önünde bulundurulduğunda…", en: "Taking all factors into consideration…", ar: "مع مراعاة جميع العوامل…" } ] },
    { de: "Modalpartikeln", ku: "بەشداری هەستیار", icon: "~",
      exp: "مۆداڵپارتیکڵەکان وشەی بچووکن کە مانا یان هەستی قسەکەر دەگواستنەوە. مانای ڕستەکە دەگۆڕن بەبێ ئەوەی وەرگێڕیان بکرێت بە ڕاستی. ئەمانە: doch (بەڵام ئایا)، mal (جارێک)، eigentlich (لە ڕاستیدا)، halt (چییە)، wohl (بیم هەیە)، eben (ئەوەیە دیکە)، ja (باشە دەزانی)، denn (ئیتا).",
      tr: "Modal Partiküller", expTr: "Modal partiküller konuşmacının anlamını veya duygusunu aktaran küçük kelimelerdir. Cümlenin anlamını doğrudan çeviri yapılmadan değiştirirler. Bunlar: doch (ya), mal (bir kez), eigentlich (aslında), halt (işte), wohl (sanırım), eben (zaten), ja (biliyorsun), denn (peki).",
      en: "Modal particles", expEn: "Modal particles are small words that convey the speaker's meaning or attitude. They change the meaning of a sentence without being directly translatable. These include: doch (after all/but), mal (just/for once), eigentlich (actually), halt (just/simply), wohl (probably/I suppose), eben (just/simply), ja (you know/as you know), denn (then/so, used in questions).",
      ar: "الجسيمات الشكلية (Modalpartikeln)", expAr: "الجسيمات الشرطية (Modalpartikeln) هي كلمات صغيرة تنقل معنى المتحدث أو مشاعره. وهي تغيّر معنى الجملة من دون أن تُترجم ترجمة حرفية. ومن أمثلتها: doch (أليس كذلك/لكن)، mal (لمرة واحدة)، eigentlich (في الحقيقة)، halt (ببساطة)، wohl (على الأرجح)، eben (فقط/هكذا هو الحال)، ja (كما تعلم)، denn (إذن، تُستخدم في الأسئلة).",
      ex: [ { de: "Komm doch mal vorbei!", ku: "تکایە ئەوبارە وەرە سەردانی بکە!", tr: "Bir ara uğra ya!", en: "Do come by sometime!", ar: "تعال لزيارتي في وقت ما!" }, { de: "Das ist eigentlich ganz einfach.", ku: "ئەمە لە ڕاستیدا تەواو ئاسانە.", tr: "Bu aslında çok basit.", en: "That's actually quite simple.", ar: "هذا في الحقيقة بسيط جدًا." }, { de: "Er ist wohl krank.", ku: "بیم هەیە نەخۆشە.", tr: "Sanırım hasta.", en: "He's probably sick.", ar: "أظنه مريض." }, { de: "Das ist eben so.", ku: "ئەوەیە دیکە، ئاوایە.", tr: "İşte böyle.", en: "That's just how it is.", ar: "هكذا هو الحال ببساطة." }, { de: "Das weißt du ja.", ku: "تۆیش دەزانیت باشە.", tr: "Biliyorsun zaten.", en: "You know that already, don't you.", ar: "أنت تعرف ذلك أصلاً." }, { de: "Was machst du denn hier?", ku: "ئیتا تۆ لێرەدا چی دەکەیت؟", tr: "Peki sen burada ne yapıyorsun?", en: "So what are you doing here?", ar: "إذن ماذا تفعل هنا؟" } ] },
  ],
  C2: [
    { de: "Komplexe Satzgefüge", ku: "دروستکردنی ڕستەی پێچەواندار", icon: "🔗",
      exp: "لە C2دا ڕستەی پێچەواندار بەکاردێت کە چەند ئاست جیاوازی ئەوان تێکەڵن. Je mehr…desto mehr، Kaum…als، Nicht nur…sondern auch ئەمانەی گرنگترین دروستکردنەکانن.",
      tr: "Karmaşık Cümle Yapıları", expTr: "C2 düzeyinde birden fazla katmanlı iç içe geçmiş cümleler kullanılır. Je mehr…desto mehr, Kaum…als, Nicht nur…sondern auch en önemli yapılardandır.",
      en: "Complex sentence structures", expEn: "At C2 level, complex sentence structures with multiple intertwined levels of subordination are used. Je mehr…desto mehr (the more…the more), Kaum…als (hardly…when), and Nicht nur…sondern auch (not only…but also) are among the most important constructions.",
      ar: "التراكيب الجملية المعقدة", expAr: "في المستوى C2 تُستخدم تراكيب جملية معقدة تتشابك فيها عدة مستويات من التبعية. وتُعد Je mehr…desto mehr (كلما... كلما)، وKaum…als (بالكاد... حتى)، وNicht nur…sondern auch (ليس فقط... بل أيضاً) من أهم هذه التراكيب.",
      ex: [ { de: "Da er sich vorbereitet hatte, gelang es, obwohl es schwierig war.", ku: "چونکە خۆی ئامادە کردبوو، سەرکەوتووی بوو هەرچەندە سەخت بوو.", tr: "Hazırlandığı için, zor da olsa başardı.", en: "Because he had prepared, he succeeded, even though it was difficult.", ar: "لأنه كان قد استعد، نجح رغم أن الأمر كان صعباً." }, { de: "Nicht nur dass er zu spät kam, er hatte auch nichts mitgebracht.", ku: "نەتەنها دواخست، بەڵکو هیچیشی نەهاورد.", tr: "Sadece geç kalmakla kalmadı, bir şey de getirmedi.", en: "Not only did he arrive late, he also hadn't brought anything.", ar: "لم يتأخر فحسب، بل لم يُحضر معه شيئاً أيضاً." }, { de: "Je mehr man lernt, desto mehr erkennt man, wie viel man nicht weiß.", ku: "هەرچەند زیاتر فێربیت، زیاتر دەزانیت چەند نازانیت.", tr: "Ne kadar çok öğrenirsen, o kadar çok bilmediğini anlarsın.", en: "The more you learn, the more you realize how much you don't know.", ar: "كلما تعلّم المرء أكثر، أدرك أكثر كم هو لا يعرف." }, { de: "Wäre er pünktlich gewesen, hätte er den Zug nicht verpasst.", ku: "ئەگەر کاتی بووایە، ترینەکەی لەدەست نەدایە.", tr: "Vaktinde olsaydı, treni kaçırmazdı.", en: "Had he been on time, he would not have missed the train.", ar: "لو كان قد وصل في الوقت المحدد، لما فاته القطار." }, { de: "Kaum hatte er das Haus verlassen, fing es an zu regnen.", ku: "هێندە ئەوەی خانووەکەی بەجێهێڵا، باران دەستی کرد.", tr: "Evi terkeder terketmez yağmur başladı.", en: "Hardly had he left the house when it started to rain.", ar: "ما إن غادر المنزل حتى بدأ المطر بالهطول." }, { de: "So wichtig das auch sein mag, es darf nicht alles bestimmen.", ku: "هەرچەند گرنگیش بێت، نابێت هەموو شت بخاتە بەژێر دەستی.", tr: "Bu önemli de olsa, her şeyi belirlememelidir.", en: "As important as that may be, it must not determine everything.", ar: "مهما كان ذلك مهماً، فلا يجوز أن يتحكم في كل شيء." } ] },
    { de: "Negationsstrukturen (C2)", ku: "دروستکردنی نەرێن (ئاستبەرز)", icon: "¬",
      exp: "لە C2دا نەرێن بە شێوەی تایبەتتر بەکاردێت: nicht nur…sondern auch، weder…noch، keineswegs، mitnichten، bei weitem nicht.",
      tr: "Olumsuzluk Yapıları (C2)", expTr: "C2 düzeyinde olumsuzluk daha özel şekillerde kullanılır: nicht nur…sondern auch, weder…noch, keineswegs, mitnichten, bei weitem nicht.",
      en: "Negation structures (C2)", expEn: "At C2 level, negation is expressed in more specialized ways: nicht nur…sondern auch (not only…but also), weder…noch (neither…nor), keineswegs (by no means), mitnichten (not at all), bei weitem nicht (far from).",
      ar: "تراكيب النفي (C2)", expAr: "في المستوى C2 يُعبَّر عن النفي بأشكال أكثر تخصصاً: nicht nur…sondern auch (ليس فقط... بل أيضاً)، وweder…noch (لا... ولا)، وkeineswegs (بأي حال من الأحوال)، وmitnichten (البتة/إطلاقاً)، وbei weitem nicht (أبعد ما يكون عن الكفاية).",
      ex: [ { de: "Weder er noch sie hat Recht.", ku: "نە ئەو نە ئەو تری ڕاستیان هەیە.", tr: "Ne o ne de o haklı.", en: "Neither he nor she is right.", ar: "لا هو على حق ولا هي." }, { de: "Das ist keineswegs akzeptabel.", ku: "بە هیچ شێوەیەک پەسەند نییە.", tr: "Bu hiçbir şekilde kabul edilemez.", en: "That is by no means acceptable.", ar: "هذا غير مقبول بأي حال من الأحوال." }, { de: "Nicht nur er, sondern auch sie war dabei.", ku: "نەتەنها ئەو، بەڵکو ئەو تریش تێیدا بوو.", tr: "Sadece o değil, o da oradaydı.", en: "Not only he but she too was present.", ar: "لم يكن هو فقط حاضراً، بل هي أيضاً." }, { de: "Das stimmt mitnichten.", ku: "ئەمە بە هیچ جۆرێک ڕاست نییە.", tr: "Bu hiç doğru değil.", en: "That is not true in the least.", ar: "هذا غير صحيح إطلاقاً." }, { de: "Bei weitem nicht genug.", ku: "بە دوورکەوتنی زۆر بەسنییە.", tr: "Yeterli değil, çok uzak.", en: "Far from enough.", ar: "غير كافٍ على الإطلاق." }, { de: "Keiner der Anwesenden sprach dagegen.", ku: "هیچکام لە ئامادەبووان دژی قسە نەکرد.", tr: "Oradakilerin hiçbiri itiraz etmedi.", en: "None of those present spoke against it.", ar: "لم يعترض أحد من الحاضرين." } ] },
    { de: "Register & Stilebenen", ku: "ئاستەکانی زمان و شێواز", icon: "≡",
      exp: "زمانی ئەڵمانی چەند ئاستی جیاوازی هەیە: Umgangssprache (قسەی ڕۆژانە)، Standard (نڕمی)، gehobene Sprache (فەرمی ئاستبەرز)، Amtssprache (حکومی). هەر دۆخێک ئاستی جیاوازی داواکاری دەکات.",
      tr: "Dil Kayıtları ve Üslup Düzeyleri", expTr: "Almancada farklı üslup düzeyleri vardır: Umgangssprache (günlük konuşma), Standard (standart), gehobene Sprache (resmi üst düzey), Amtssprache (resmi dil). Her bağlam farklı düzey gerektirir.",
      en: "Register & style levels", expEn: "German has several distinct registers: Umgangssprache (colloquial everyday speech), Standard (standard language), gehobene Sprache (elevated formal language), and Amtssprache (official/bureaucratic language). Each situation calls for a different level.",
      ar: "مستويات اللغة والأسلوب", expAr: "للغة الألمانية عدة مستويات أسلوبية مختلفة: Umgangssprache (اللغة العامية اليومية)، وStandard (اللغة المعيارية)، وgehobene Sprache (اللغة الراقية الرسمية)، وAmtssprache (اللغة الرسمية/الإدارية). ويتطلب كل موقف مستوى مختلفاً.",
      ex: [ { de: "Ich kriege keinen Hunger. (umgangssprachlich)", ku: "براشم نییە. (قسەی ڕۆژانە)", tr: "Açım. (günlük)", en: "I'm hungry. (colloquial)", ar: "أنا جوعان. (عامي)" }, { de: "Ich habe keinen Appetit. (Standard)", ku: "خواست نییە بخۆم. (نڕمی)", tr: "Yemek yemek istemiyorum. (standart)", en: "I don't want to eat. (standard)", ar: "لا أريد أن آكل. (معياري)" }, { de: "Mir fehlt der Appetit. (gehoben)", ku: "خواستم نییە. (فەرمی)", tr: "İştahım yok. (resmi)", en: "I have no appetite. (formal)", ar: "لا شهية لي. (رسمي)" }, { de: "Was machst du? → Womit beschäftigen Sie sich?", ku: "چی دەکەیت؟ → بە چی بەرپرسی؟ (فەرمی)", tr: "Ne yapıyorsun? → Ne ile meşgulsünüz? (resmi)", en: "What are you doing? → What are you occupied with? (formal)", ar: "ماذا تفعل؟ ← بماذا تنشغلون؟ (رسمي)" }, { de: "Klar! (umg.) → Selbstverständlich. (formell)", ku: "باشە! → بەتەواوی. (فەرمی)", tr: "Tabii! (günlük) → Elbette. (resmi)", en: "Sure! (colloquial) → Certainly. (formal)", ar: "أكيد! (عامي) ← بالتأكيد. (رسمي)" }, { de: "Das geht nicht. → Das ist nicht möglich.", ku: "ئەمە نابێت. → ئەمە گونجاو نییە. (فەرمی)", tr: "Bu olmaz. → Bu mümkün değil. (resmi)", en: "That won't work. → That is not possible. (formal)", ar: "هذا لا يصلح. ← هذا غير ممكن. (رسمي)" } ] },
    { de: "Stilmittel", ku: "ئامرازەکانی شێواز", icon: "✍",
      exp: "ئامرازەکانی ئەدەبی و ڕیتۆریکی: Metapher (وێنەگرتن)، Ironie (پاقجی)، Antithese (دژایەتی)، Anapher (دووبارەکردنەوەی سەرەتا)، Hyperbel (زەیانی)، Litotes (نەرمی)، Personifikation (مرۆڤکردن).",
      tr: "Üslup Araçları", expTr: "Edebi ve retorik araçlar: Metapher (metafor), Ironie (ironi), Antithese (antitez), Anapher (anafora), Hyperbel (abartma), Litotes (olumsuzlama yoluyla olumlu), Personifikation (kişileştirme).",
      en: "Stylistic devices", expEn: "Literary and rhetorical devices: Metapher (metaphor), Ironie (irony), Antithese (antithesis), Anapher (anaphora), Hyperbel (hyperbole), Litotes (understatement via negation), Personifikation (personification).",
      ar: "الوسائل الأسلوبية", expAr: "الأدوات الأدبية والبلاغية: Metapher (الاستعارة)، وIronie (السخرية/التهكم)، وAntithese (الطباق/التضاد)، وAnapher (التكرار الاستهلالي)، وHyperbel (المبالغة)، وLitotes (التلطيف عبر النفي)، وPersonifikation (التجسيد/الأنسنة).",
      ex: [ { de: "Das Leben ist ein Fluss. (Metapher)", ku: "ژیان ڕووبارێکە. (وێنەگرتن)", tr: "Hayat bir nehirdir. (Metafor)", en: "Life is a river. (metaphor)", ar: "الحياة نهر. (استعارة)" }, { de: "Ja, das war wirklich klug! (Ironie)", ku: "بەڵێ، ئەمە زۆر زیرەکانەیە! (پاقجی)", tr: "Evet, bu gerçekten akıllıca! (İroni)", en: "Yes, that was really clever! (irony)", ar: "نعم، كان ذلك ذكياً حقاً! (سخرية)" }, { de: "arm und reich, jung und alt (Antithese)", ku: "هەژار و دەوڵەمەند، گەنج و پیر (دژایەتی)", tr: "fakir ve zengin, genç ve yaşlı (Antitez)", en: "poor and rich, young and old (antithesis)", ar: "فقير وغني، شاب وعجوز (طباق)" }, { de: "Ich kam, ich sah, ich siegte. (Anapher)", ku: "هاتم، بینم، برم. (دووبارەکردنەوە)", tr: "Geldim, gördüm, kazandım. (Anafora)", en: "I came, I saw, I conquered. (anaphora)", ar: "أتيت، رأيت، انتصرت. (تكرار استهلالي)" }, { de: "Das hab ich dir tausendmal gesagt! (Hyperbel)", ku: "هەزار جارت گوتووتمە! (زەیانی)", tr: "Bunu sana bin kez söyledim! (Abartma)", en: "I've told you that a thousand times! (hyperbole)", ar: "قلت لك هذا ألف مرة! (مبالغة)" }, { de: "Das ist nicht schlecht. (Litotes = es ist gut)", ku: "ئەمە خراپ نییە. (واتا: باشە — Litotes)", tr: "Bu fena değil. (yani: iyi — Litotes)", en: "That's not bad. (litotes = it is good)", ar: "هذا ليس سيئاً. (أي: إنه جيد — تلطيف)" } ] },
    { de: "Kollokationen", ku: "کۆمەڵی وشەی جێگیر", icon: "⊕",
      exp: "کۆلۆکەیشن بە ئەوە دەڵێن کە وشەکان بە شێوەی ئاسایی لەگەڵ یەکتر دێن. نموونە: «eine Entscheidung treffen» نەک «eine Entscheidung machen».",
      tr: "Kelime Birleşimleri (Kollokasyon)", expTr: "Kollokasyon, kelimelerin doğal olarak birlikte kullanılması demektir. Örnek: «eine Entscheidung treffen» değil «eine Entscheidung machen».",
      en: "Collocations", expEn: "A collocation refers to words that naturally co-occur. Example: 'eine Entscheidung treffen' (to make a decision), not 'eine Entscheidung machen'.",
      ar: "التلازمات اللفظية", expAr: "يُقصد بالمتلازمات اللفظية (Kollokation) الكلمات التي ترد معاً بشكل طبيعي. مثال: «eine Entscheidung treffen» (اتخاذ قرار) وليس «eine Entscheidung machen».",
      ex: [ { de: "eine Entscheidung treffen", ku: "بڕیاردان (نەک: مەرج کردن)", tr: "karar vermek (yapmak değil)", en: "to make a decision (not: to do a decision)", ar: "اتخاذ قرار (وليس: صنع قرار)" }, { de: "eine Frage stellen", ku: "پرسیار کردن (نەک: دانان)", tr: "soru sormak (koymak değil)", en: "to ask a question (not: to put a question)", ar: "طرح سؤال (وليس: وضع سؤال)" }, { de: "Verantwortung übernehmen", ku: "بەرپرسیارێتی وەرگرتن", tr: "sorumluluk üstlenmek", en: "to take on responsibility", ar: "تحمّل المسؤولية" }, { de: "einen Fehler begehen", ku: "هەڵەیەک کردن (فەرمی)", tr: "hata yapmak (resmi)", en: "to commit an error (formal)", ar: "ارتكاب خطأ (رسمي)" }, { de: "in Betracht ziehen", ku: "بیر لێ کردنەوە / ڕەچاوکردن", tr: "göz önünde bulundurmak", en: "to take into consideration", ar: "أخذ بعين الاعتبار" }, { de: "Rücksicht nehmen auf", ku: "ڕەچاو کردنی / گوێگرتن لە", tr: "saygı göstermek", en: "to show consideration for", ar: "مراعاة / إظهار الاحترام لـ" } ] },
    { de: "Redewendungen & Sprichwörter", ku: "دەستانووس و پەندوامۆڵ", icon: "💬",
      exp: "دیالۆگی خوێندووانەی ئەڵمانی پڕ لە Redewendungen (دەستانووس) و Sprichwörter (پەندوامۆڵ)ە. فێرکردنیان تێگەیشتن لە ناوەندی کولتوورییەکە دەگەیەنێت.",
      tr: "Deyimler ve Atasözleri", expTr: "Akıcı Almanca konuşmacılar Redewendungen (deyimler) ve Sprichwörter (atasözleri) kullanır. Bunları öğrenmek dile ve kültüre dair anlayışı derinleştirir.",
      en: "Idioms & proverbs", expEn: "Fluent German speakers make extensive use of Redewendungen (idioms) and Sprichwörter (proverbs). Learning them conveys a deeper understanding of the cultural context.",
      ar: "التعابير الاصطلاحية والأمثال", expAr: "يستخدم المتحدثون المتمكنون من الألمانية Redewendungen (التعابير الاصطلاحية) وSprichwörter (الأمثال) بكثرة. وتعلّمها يُعمّق الفهم للسياق الثقافي.",
      ex: [ { de: "Das ist nicht mein Bier.", ku: "ئەمە کارەکەم نییە.", tr: "Bu benim işim değil.", en: "That's not my business.", ar: "هذا ليس شأني." }, { de: "Lügen haben kurze Beine.", ku: "درۆ لەپێی خۆدا دەمێنێت.", tr: "Yalancının mumu yatsıya kadar yanar.", en: "Lies have short legs. (the truth always comes out)", ar: "للكذب أرجل قصيرة. (الحقيقة تظهر دائماً)" }, { de: "Tomaten auf den Augen haben.", ku: "گومرا بوون / نەدیتن چییە پێشتا.", tr: "Görmemek / Gözü kapalı olmak.", en: "To have tomatoes on one's eyes. (to fail to notice the obvious)", ar: "أن يكون لديه طماطم على عينيه. (أي لا يلاحظ ما هو واضح)" }, { de: "Den Nagel auf den Kopf treffen.", ku: "تێی گەیشتن / ڕاستی گوتن.", tr: "Tam yerine oturmak / Doğruyu söylemek.", en: "To hit the nail on the head.", ar: "أن يضرب المسمار على رأسه. (أي يصيب كبد الحقيقة)" }, { de: "Alles hat ein Ende, nur die Wurst hat zwei.", ku: "هەموو شتێک کۆتاییەکی هەیە.", tr: "Her şeyin bir sonu vardır.", en: "Everything has an end, only the sausage has two.", ar: "لكل شيء نهاية، أما السجق فله نهايتان." }, { de: "Wer zuletzt lacht, lacht am besten.", ku: "ئەوەی دوایین دەپێکنێت باشترین پێکەنینی هەیە.", tr: "En son gülen en iyi güler.", en: "He who laughs last, laughs best.", ar: "من يضحك أخيراً يضحك أطول." } ] },
    { de: "Dialekte & Varietäten", ku: "شێوەزارەکان و جۆرجۆری زمان", icon: "🗺",
      exp: "زمانی ئەڵمانی لە ئەڵمانیا، ئەوستریا و سویسرا جیاوازە. Bayerisch (بایەرن)، Berlinerisch (بەرلین)، Wienerisch (وین)، Schweizerdeutsch (سویس). بۆ C2 باشترە زانیاری هەبیت.",
      tr: "Lehçeler ve Dil Çeşitleri", expTr: "Almanya, Avusturya ve İsviçre'de Almanca farklıdır. Bayerisch (Bavyera), Berlinerisch (Berlin), Wienerisch (Viyana), Schweizerdeutsch (İsviçre). C2 için bu konuda bilgi sahibi olmak iyidir.",
      en: "Dialects & varieties", expEn: "German differs across Germany, Austria, and Switzerland. Bayerisch (Bavarian), Berlinerisch (Berlin dialect), Wienerisch (Viennese), Schweizerdeutsch (Swiss German). For C2 it is good to have knowledge of this.",
      ar: "اللهجات والتنوعات اللغوية", expAr: "تختلف اللغة الألمانية في ألمانيا والنمسا وسويسرا. Bayerisch (البافارية)، وBerlinerisch (لهجة برلين)، وWienerisch (لهجة فيينا)، وSchweizerdeutsch (الألمانية السويسرية). ومن المفيد لمستوى C2 الإلمام بهذا الموضوع.",
      ex: [ { de: "Grüß Gott! (bayerisch) = Guten Tag!", ku: "سڵاوت لەگەڵ خودا! = ڕۆژباش! (بایەری)", tr: "Grüß Gott! (Bavyera) = Günaydın!", en: "Grüß Gott! (Bavarian) = Good day!", ar: "Grüß Gott! (بافارية) = طاب يومك!" }, { de: "Servus! (österreichisch) = Hallo / Tschüss", ku: "سێروس! = سڵاو / خوداحافیز (ئەوستری)", tr: "Servus! (Avusturya) = Merhaba / Hoşça kal", en: "Servus! (Austrian) = Hello / Goodbye", ar: "Servus! (نمساوية) = مرحباً / وداعاً" }, { de: "Berlinerisch: ick statt ich", ku: "لە بەرلیندا: «ick» لەبری «ich»", tr: "Berlin'de: «ick» yerine «ich»", en: "Berlin dialect: 'ick' instead of 'ich'", ar: "في لهجة برلين: «ick» بدلاً من «ich»" }, { de: "In der Schweiz: Grüezi! = Guten Tag", ku: "لە سویسرادا: «گرییتسی!» = ڕۆژباش", tr: "İsviçre'de: «Grüezi!» = Günaydın", en: "In Switzerland: 'Grüezi!' = Good day", ar: "في سويسرا: «Grüezi!» = طاب يومك" }, { de: "Net statt nicht (süddeutsch)", ku: "«نێت» لەبری «نیخت» (باشووری ئەڵمانیا)", tr: "«Net» yerine «nicht» (Güney Almanya)", en: "'Net' instead of 'nicht' (Southern Germany)", ar: "«Net» بدلاً من «nicht» (جنوب ألمانيا)" }, { de: "Nix statt nichts (umgangssprachlich)", ku: "«نیکس» لەبری «نیختس» (قسەی ڕۆژانە)", tr: "«Nix» yerine «nichts» (günlük)", en: "'Nix' instead of 'nichts' (colloquial)", ar: "«Nix» بدلاً من «nichts» (عامية)" } ] },
    { de: "Historisches Deutsch", ku: "زمانی ئەڵمانیی مێژووی", icon: "📜",
      exp: "زمانی ئەڵمانی بۆ مێژوودا گۆڕابووە. ئەڵمانیی کلاسیک (Goethe، Schiller) چەند جیاوازییەکی بنەڕەتیان هەیە: Ihr بەجێی Sie، Präteritum زۆرتر، فۆرمەکانی بایبڵی.",
      tr: "Tarihsel Almanca", expTr: "Almanca tarih içinde değişmiştir. Klasik Almanca (Goethe, Schiller) bazı temel farklılıklar içerir: Sie yerine Ihr, daha fazla Präteritum, Kutsal Kitap biçimleri.",
      en: "Historical German", expEn: "German has changed throughout history. Classical German (Goethe, Schiller) contains several fundamental differences: Ihr instead of Sie, more frequent use of the Präteritum, and biblical forms.",
      ar: "الألمانية التاريخية", expAr: "تغيّرت اللغة الألمانية عبر التاريخ. تحتوي الألمانية الكلاسيكية (غوته، شيلر) على بعض الفروق الأساسية: Ihr بدلاً من Sie، واستخدام أكثر لصيغة الماضي البسيط (Präteritum)، وصيغ الكتاب المقدس.",
      ex: [ { de: "Habt Ihr das getan? (historisch formell)", ku: "ئایا ئێوە ئەمەی کردووە؟ (کۆن فەرمی)", tr: "Bunu yaptınız mı? (tarihsel resmi)", en: "Have you done that? (historical formal)", ar: "هل فعلتم ذلك؟ (تاريخي رسمي)" }, { de: "Es ward Licht. (Bibeldeutsch)", ku: "ڕووناکی بوو. (زمانی کتێبی پیرۆز)", tr: "Işık olsun. (Kutsal Kitap Almancası)", en: "Let there be light. (Biblical German)", ar: "وليكن نور. (ألمانية الكتاب المقدس)" }, { de: "Ich bin's. (kontrahiert = ich bin es)", ku: "منم. (کورتکراو)", tr: "Benim. (kısaltılmış = ich bin es)", en: "It's me. (contracted = ich bin es)", ar: "هذا أنا. (مختصر = ich bin es)" }, { de: "Welch ein schöner Tag! (gehobene alte Form)", ku: "چەند ڕۆژێکی جوان! (کۆن فەرمی)", tr: "Ne güzel bir gün! (eski resmi)", en: "What a beautiful day! (elevated old form)", ar: "يا له من يوم جميل! (صيغة قديمة راقية)" }, { de: "Das Wort «Weib» bedeutete früher «Frau».", ku: "وشەی «ڤایب» لەمێژوودا مانای «ژن» هەیدا.", tr: "«Weib» kelimesi eskiden «kadın» anlamına gelirdi.", en: "The word 'Weib' used to mean 'woman'.", ar: "كانت كلمة «Weib» تعني سابقاً «امرأة»." }, { de: "Man sprach damals anders.", ku: "لەو کاتەدا جیاوازتر قسە دەکران.", tr: "O zamanlar farklı konuşulurdu.", en: "People spoke differently back then.", ar: "كان الناس يتحدثون بشكل مختلف في ذلك الزمان." } ] },
  ],
};

export const GTABLES = {
  "Artikel: der, die, das": {
    headers: ["ڕەگەز", "ئارتیکڵ", "نموونە"],
    rows: [
    ["نێر", "der", "der Mann"],
    ["مێ", "die", "die Frau"],
    ["بێلایەن", "das", "das Kind"]
  ],
    headersTr: ["Cinsiyet", "Artikel", "Örnek"],
    rowsTr: [
    ["Eril", "der", "der Mann"],
    ["Dişil", "die", "die Frau"],
    ["Nötr", "das", "das Kind"]
  ],
    headersEn: ["Gender", "Article", "Example"],
    rowsEn: [
    ["Masculine", "der", "der Mann"],
    ["Feminine", "die", "die Frau"],
    ["Neuter", "das", "das Kind"]
  ],
    headersAr: ["الجنس", "أداة التعريف", "مثال"],
    rowsAr: [
    ["مذكر", "der", "der Mann"],
    ["مؤنث", "die", "die Frau"],
    ["محايد", "das", "das Kind"]
  ],
  },
  "Bestimmte / unbestimmte Artikel": {
    headers: ["ڕەگەز", "دیاریکراو", "نادیار"],
    rows: [
    ["نێر", "der", "ein"],
    ["مێ", "die", "eine"],
    ["بێلایەن", "das", "ein"]
  ],
    headersTr: ["Cinsiyet", "Belirli", "Belirsiz"],
    rowsTr: [
    ["Eril", "der", "ein"],
    ["Dişil", "die", "eine"],
    ["Nötr", "das", "ein"]
  ],
    headersEn: ["Gender", "Definite", "Indefinite"],
    rowsEn: [
    ["Masculine", "der", "ein"],
    ["Feminine", "die", "eine"],
    ["Neuter", "das", "ein"]
  ],
    headersAr: ["الجنس", "معرّف", "نكرة"],
    rowsAr: [
    ["مذكر", "der", "ein"],
    ["مؤنث", "die", "eine"],
    ["محايد", "das", "ein"]
  ],
  },
  "Plural": {
    headers: ["کۆتایی", "نموونە"],
    rows: [
    ["-e", "der Tisch → die Tische"],
    ["-er", "das Kind → die Kinder"],
    ["-(e)n", "die Frau → die Frauen"],
    ["-s", "das Auto → die Autos"]
  ],
    headersTr: ["Ek", "Örnek"],
    rowsTr: [
    ["-e", "der Tisch → die Tische"],
    ["-er", "das Kind → die Kinder"],
    ["-(e)n", "die Frau → die Frauen"],
    ["-s", "das Auto → die Autos"]
  ],
    headersEn: ["Ending", "Example"],
    rowsEn: [
    ["-e", "der Tisch → die Tische"],
    ["-er", "das Kind → die Kinder"],
    ["-(e)n", "die Frau → die Frauen"],
    ["-s", "das Auto → die Autos"]
  ],
    headersAr: ["اللاحقة", "مثال"],
    rowsAr: [
    ["-e", "der Tisch → die Tische"],
    ["-er", "das Kind → die Kinder"],
    ["-(e)n", "die Frau → die Frauen"],
    ["-s", "das Auto → die Autos"]
  ],
  },
  "Personalpronomen": {
    headers: ["ئەڵمانی", "سۆرانی"],
    rows: [
    ["ich", "من"],
    ["du", "تۆ"],
    ["er / sie / es", "ئەو"],
    ["wir", "ئێمە"],
    ["ihr", "ئێوە"],
    ["sie / Sie", "ئەوان / فەرمی"]
  ],
    headersTr: ["Almanca", "Türkçe"],
    rowsTr: [
    ["ich", "Ben"],
    ["du", "Sen"],
    ["er / sie / es", "O"],
    ["wir", "Biz"],
    ["ihr", "Siz"],
    ["sie / Sie", "Onlar / Siz (resmi)"]
  ],
    headersEn: ["German", "English"],
    rowsEn: [
    ["ich", "I"],
    ["du", "you"],
    ["er / sie / es", "he / she / it"],
    ["wir", "we"],
    ["ihr", "you (pl.)"],
    ["sie / Sie", "they / you (formal)"]
  ],
    headersAr: ["الألمانية", "العربية"],
    rowsAr: [
    ["ich", "أنا"],
    ["du", "أنتَ / أنتِ"],
    ["er / sie / es", "هو / هي"],
    ["wir", "نحن"],
    ["ihr", "أنتم"],
    ["sie / Sie", "هم / حضرتك (رسمي)"]
  ],
  },
  "Präsens — regelmäßige Verben": {
    headers: ["کەس", "lernen"],
    rows: [
    ["ich", "lerne"],
    ["du", "lernst"],
    ["er/sie/es", "lernt"],
    ["wir", "lernen"],
    ["ihr", "lernt"],
    ["sie/Sie", "lernen"]
  ],
    headersTr: ["Kişi", "lernen"],
    rowsTr: [
    ["ich", "lerne"],
    ["du", "lernst"],
    ["er/sie/es", "lernt"],
    ["wir", "lernen"],
    ["ihr", "lernt"],
    ["sie/Sie", "lernen"]
  ],
    headersEn: ["Person", "lernen"],
    rowsEn: [
    ["ich", "lerne"],
    ["du", "lernst"],
    ["er/sie/es", "lernt"],
    ["wir", "lernen"],
    ["ihr", "lernt"],
    ["sie/Sie", "lernen"]
  ],
    headersAr: ["الضمير", "lernen"],
    rowsAr: [
    ["ich", "lerne"],
    ["du", "lernst"],
    ["er/sie/es", "lernt"],
    ["wir", "lernen"],
    ["ihr", "lernt"],
    ["sie/Sie", "lernen"]
  ],
  },
  "Unregelmäßige Verben": {
    headers: ["کەس", "fahren", "essen"],
    rows: [
    ["ich", "fahre", "esse"],
    ["du", "fährst", "isst"],
    ["er/sie/es", "fährt", "isst"],
    ["wir", "fahren", "essen"]
  ],
    headersTr: ["Kişi", "fahren", "essen"],
    rowsTr: [
    ["ich", "fahre", "esse"],
    ["du", "fährst", "isst"],
    ["er/sie/es", "fährt", "isst"],
    ["wir", "fahren", "essen"]
  ],
    headersEn: ["Person", "fahren", "essen"],
    rowsEn: [
    ["ich", "fahre", "esse"],
    ["du", "fährst", "isst"],
    ["er/sie/es", "fährt", "isst"],
    ["wir", "fahren", "essen"]
  ],
    headersAr: ["الضمير", "fahren", "essen"],
    rowsAr: [
    ["ich", "fahre", "esse"],
    ["du", "fährst", "isst"],
    ["er/sie/es", "fährt", "isst"],
    ["wir", "fahren", "essen"]
  ],
  },
  "sein und haben": {
    headers: ["کەس", "sein", "haben"],
    rows: [
    ["ich", "bin", "habe"],
    ["du", "bist", "hast"],
    ["er/sie/es", "ist", "hat"],
    ["wir", "sind", "haben"],
    ["ihr", "seid", "habt"],
    ["sie/Sie", "sind", "haben"]
  ],
    headersTr: ["Kişi", "sein", "haben"],
    rowsTr: [
    ["ich", "bin", "habe"],
    ["du", "bist", "hast"],
    ["er/sie/es", "ist", "hat"],
    ["wir", "sind", "haben"],
    ["ihr", "seid", "habt"],
    ["sie/Sie", "sind", "haben"]
  ],
    headersEn: ["Person", "sein", "haben"],
    rowsEn: [
    ["ich", "bin", "habe"],
    ["du", "bist", "hast"],
    ["er/sie/es", "ist", "hat"],
    ["wir", "sind", "haben"],
    ["ihr", "seid", "habt"],
    ["sie/Sie", "sind", "haben"]
  ],
    headersAr: ["الضمير", "sein", "haben"],
    rowsAr: [
    ["ich", "bin", "habe"],
    ["du", "bist", "hast"],
    ["er/sie/es", "ist", "hat"],
    ["wir", "sind", "haben"],
    ["ihr", "seid", "habt"],
    ["sie/Sie", "sind", "haben"]
  ],
  },
  "Modalverben": {
    headers: ["مۆداڵ", "واتا"],
    rows: [
    ["können", "توانین"],
    ["müssen", "دەبێت"],
    ["wollen", "ویستن"],
    ["dürfen", "مۆڵەت"],
    ["sollen", "پێویست"],
    ["möchten", "حەزکردن"]
  ],
    headersTr: ["Kip Fiili (Modal)", "Anlamı"],
    rowsTr: [
    ["können", "yapabilmek"],
    ["müssen", "zorunda olmak"],
    ["wollen", "istemek"],
    ["dürfen", "izinli olmak"],
    ["sollen", "gerekmek"],
    ["möchten", "istemek (nazikçe)"]
  ],
    headersEn: ["Modal Verb", "Meaning"],
    rowsEn: [
    ["können", "to be able to"],
    ["müssen", "to have to"],
    ["wollen", "to want to"],
    ["dürfen", "to be allowed to"],
    ["sollen", "to be supposed to"],
    ["möchten", "would like to"]
  ],
    headersAr: ["الفعل المساعد (المودال)", "المعنى"],
    rowsAr: [
    ["können", "يستطيع"],
    ["müssen", "يجب"],
    ["wollen", "يريد"],
    ["dürfen", "يُسمح له"],
    ["sollen", "ينبغي"],
    ["möchten", "يودّ"]
  ],
  },
  "W-Fragen": {
    headers: ["پرسیار", "واتا"],
    rows: [
    ["wer", "کێ"],
    ["was", "چی"],
    ["wo", "لەکوێ"],
    ["wann", "کەی"],
    ["wie", "چۆن"],
    ["warum", "بۆچی"]
  ],
    headersTr: ["Soru Kelimesi", "Anlamı"],
    rowsTr: [
    ["wer", "kim"],
    ["was", "ne"],
    ["wo", "nerede"],
    ["wann", "ne zaman"],
    ["wie", "nasıl"],
    ["warum", "neden"]
  ],
    headersEn: ["Question word", "Meaning"],
    rowsEn: [
    ["wer", "who"],
    ["was", "what"],
    ["wo", "where"],
    ["wann", "when"],
    ["wie", "how"],
    ["warum", "why"]
  ],
    headersAr: ["أداة الاستفهام", "المعنى"],
    rowsAr: [
    ["wer", "من"],
    ["was", "ماذا"],
    ["wo", "أين"],
    ["wann", "متى"],
    ["wie", "كيف"],
    ["warum", "لماذا"]
  ],
  },
  "Ja/Nein-Fragen": {
    headers: ["١ (کردار)", "٢ (کەس)", "..."],
    rows: [
    ["Kommst", "du", "mit?"],
    ["Hast", "du", "Zeit?"],
    ["Ist", "das", "richtig?"]
  ],
    headersTr: ["1 (Fiil)", "2 (Özne)", "..."],
    rowsTr: [
    ["Kommst", "du", "mit?"],
    ["Hast", "du", "Zeit?"],
    ["Ist", "das", "richtig?"]
  ],
    headersEn: ["1 (Verb)", "2 (Subject)", "..."],
    rowsEn: [
    ["Kommst", "du", "mit?"],
    ["Hast", "du", "Zeit?"],
    ["Ist", "das", "richtig?"]
  ],
    headersAr: ["١ (الفعل)", "٢ (الفاعل)", "..."],
    rowsAr: [
    ["Kommst", "du", "mit?"],
    ["Hast", "du", "Zeit?"],
    ["Ist", "das", "richtig?"]
  ],
  },
  "Satzstellung": {
    headers: ["پێگەی ١", "پێگەی ٢ (کردار)", "ماوە"],
    rows: [
    ["Ich", "lerne", "heute Deutsch"],
    ["Heute", "lerne", "ich Deutsch"],
    ["Morgen", "gehe", "ich nach Hause"]
  ],
    headersTr: ["Konum 1", "Konum 2 (Fiil)", "Kalan"],
    rowsTr: [
    ["Ich", "lerne", "heute Deutsch"],
    ["Heute", "lerne", "ich Deutsch"],
    ["Morgen", "gehe", "ich nach Hause"]
  ],
    headersEn: ["Position 1", "Position 2 (Verb)", "Remainder"],
    rowsEn: [
    ["Ich", "lerne", "heute Deutsch"],
    ["Heute", "lerne", "ich Deutsch"],
    ["Morgen", "gehe", "ich nach Hause"]
  ],
    headersAr: ["الموضع ١", "الموضع ٢ (الفعل)", "الباقي"],
    rowsAr: [
    ["Ich", "lerne", "heute Deutsch"],
    ["Heute", "lerne", "ich Deutsch"],
    ["Morgen", "gehe", "ich nach Hause"]
  ],
  },
  "Akkusativ": {
    headers: ["ڕەگەز", "Nominativ", "Akkusativ"],
    rows: [
    ["نێر", "der / ein", "den / einen"],
    ["مێ", "die / eine", "die / eine"],
    ["بێلایەن", "das / ein", "das / ein"],
    ["کۆ", "die", "die"]
  ],
    headersTr: ["Cinsiyet", "Nominativ", "Akkusativ"],
    rowsTr: [
    ["Eril", "der / ein", "den / einen"],
    ["Dişil", "die / eine", "die / eine"],
    ["Nötr", "das / ein", "das / ein"],
    ["Çoğul", "die", "die"]
  ],
    headersEn: ["Gender", "Nominativ", "Akkusativ"],
    rowsEn: [
    ["Masculine", "der / ein", "den / einen"],
    ["Feminine", "die / eine", "die / eine"],
    ["Neuter", "das / ein", "das / ein"],
    ["Plural", "die", "die"]
  ],
    headersAr: ["الجنس", "حالة الرفع (Nominativ)", "حالة النصب (Akkusativ)"],
    rowsAr: [
    ["مذكر", "der / ein", "den / einen"],
    ["مؤنث", "die / eine", "die / eine"],
    ["محايد", "das / ein", "das / ein"],
    ["جمع", "die", "die"]
  ],
  },
  "Possessivartikel": {
    headers: ["کەس", "خاوەندارێتی"],
    rows: [
    ["ich", "mein"],
    ["du", "dein"],
    ["er", "sein"],
    ["sie", "ihr"],
    ["wir", "unser"],
    ["ihr", "euer"]
  ],
    headersTr: ["Kişi", "İyelik"],
    rowsTr: [
    ["ich", "mein"],
    ["du", "dein"],
    ["er", "sein"],
    ["sie", "ihr"],
    ["wir", "unser"],
    ["ihr", "euer"]
  ],
    headersEn: ["Person", "Possessive"],
    rowsEn: [
    ["ich", "mein"],
    ["du", "dein"],
    ["er", "sein"],
    ["sie", "ihr"],
    ["wir", "unser"],
    ["ihr", "euer"]
  ],
    headersAr: ["الضمير", "صفة الملكية"],
    rowsAr: [
    ["ich", "mein"],
    ["du", "dein"],
    ["er", "sein"],
    ["sie", "ihr"],
    ["wir", "unser"],
    ["ihr", "euer"]
  ],
  },
  "Trennbare Verben": {
    headers: ["کردار", "پێشگر", "لە ڕستەدا"],
    rows: [
    ["aufstehen", "auf", "ich stehe auf"],
    ["einkaufen", "ein", "ich kaufe ein"],
    ["ankommen", "an", "ich komme an"]
  ],
    headersTr: ["Fiil", "Ön Ek", "Cümlede"],
    rowsTr: [
    ["aufstehen", "auf", "ich stehe auf"],
    ["einkaufen", "ein", "ich kaufe ein"],
    ["ankommen", "an", "ich komme an"]
  ],
    headersEn: ["Verb", "Prefix", "In a sentence"],
    rowsEn: [
    ["aufstehen", "auf", "ich stehe auf"],
    ["einkaufen", "ein", "ich kaufe ein"],
    ["ankommen", "an", "ich komme an"]
  ],
    headersAr: ["الفعل", "البادئة (السابقة)", "في الجملة"],
    rowsAr: [
    ["aufstehen", "auf", "ich stehe auf"],
    ["einkaufen", "ein", "ich kaufe ein"],
    ["ankommen", "an", "ich komme an"]
  ],
  },
  "Negation: nicht / kein": {
    headers: ["بەکارهێنان", "نموونە"],
    rows: [
    ["nicht (کردار/سیفەت)", "Ich verstehe nicht."],
    ["kein (ناوی نادیار)", "Ich habe kein Geld."],
    ["keine (مێ/کۆ)", "Ich habe keine Zeit."]
  ],
    headersTr: ["Kullanım", "Örnek"],
    rowsTr: [
    ["nicht (fiil/sıfat)", "Ich verstehe nicht."],
    ["kein (belirsiz isim)", "Ich habe kein Geld."],
    ["keine (dişil/çoğul)", "Ich habe keine Zeit."]
  ],
    headersEn: ["Usage", "Example"],
    rowsEn: [
    ["nicht (verb/adjective)", "Ich verstehe nicht."],
    ["kein (indefinite noun)", "Ich habe kein Geld."],
    ["keine (feminine/plural)", "Ich habe keine Zeit."]
  ],
    headersAr: ["الاستخدام", "مثال"],
    rowsAr: [
    ["nicht (فعل/صفة)", "Ich verstehe nicht."],
    ["kein (اسم نكرة)", "Ich habe kein Geld."],
    ["keine (مؤنث/جمع)", "Ich habe keine Zeit."]
  ],
  },
  "Imperativ": {
    headers: ["کەس", "فۆرم"],
    rows: [
    ["du", "Komm!"],
    ["ihr", "Kommt!"],
    ["Sie", "Kommen Sie!"]
  ],
    headersTr: ["Kişi", "Biçim"],
    rowsTr: [
    ["du", "Komm!"],
    ["ihr", "Kommt!"],
    ["Sie", "Kommen Sie!"]
  ],
    headersEn: ["Person", "Form"],
    rowsEn: [
    ["du", "Komm!"],
    ["ihr", "Kommt!"],
    ["Sie", "Kommen Sie!"]
  ],
    headersAr: ["الضمير", "الصيغة"],
    rowsAr: [
    ["du", "Komm!"],
    ["ihr", "Kommt!"],
    ["Sie", "Kommen Sie!"]
  ],
  },
  "Präpositionen: Ort & Zeit": {
    headers: ["ئامراز", "واتا"],
    rows: [
    ["in", "لە ناو"],
    ["an", "لای / لەسەر"],
    ["auf", "لەسەر"],
    ["um", "کاتژمێر (کات)"],
    ["am", "ڕۆژ (کات)"],
    ["im", "مانگ / وەرز (کات)"]
  ],
    headersTr: ["Edat", "Anlamı"],
    rowsTr: [
    ["in", "içinde"],
    ["an", "yanında / üzerinde"],
    ["auf", "üzerinde"],
    ["um", "saat (zaman)"],
    ["am", "gün (zaman)"],
    ["im", "ay / mevsim (zaman)"]
  ],
    headersEn: ["Preposition", "Meaning"],
    rowsEn: [
    ["in", "inside"],
    ["an", "next to / on"],
    ["auf", "on"],
    ["um", "clock time (time)"],
    ["am", "day (time)"],
    ["im", "month / season (time)"]
  ],
    headersAr: ["حرف الجر", "المعنى"],
    rowsAr: [
    ["in", "داخل"],
    ["an", "بجانب / على"],
    ["auf", "على"],
    ["um", "الساعة (وقت)"],
    ["am", "اليوم (وقت)"],
    ["im", "الشهر / الفصل (وقت)"]
  ],
  },
  "Dativ": {
    headers: ["ڕەگەز", "Nominativ", "Dativ"],
    rows: [
    ["نێر", "der", "dem"],
    ["مێ", "die", "der"],
    ["بێلایەن", "das", "dem"],
    ["کۆ", "die", "den (+n)"]
  ],
    headersTr: ["Cinsiyet", "Nominativ", "Dativ"],
    rowsTr: [
    ["Eril", "der", "dem"],
    ["Dişil", "die", "der"],
    ["Nötr", "das", "dem"],
    ["Çoğul", "die", "den (+n)"]
  ],
    headersEn: ["Gender", "Nominativ", "Dativ"],
    rowsEn: [
    ["Masculine", "der", "dem"],
    ["Feminine", "die", "der"],
    ["Neuter", "das", "dem"],
    ["Plural", "die", "den (+n)"]
  ],
    headersAr: ["الجنس", "حالة الرفع (Nominativ)", "حالة الجر (Dativ)"],
    rowsAr: [
    ["مذكر", "der", "dem"],
    ["مؤنث", "die", "der"],
    ["محايد", "das", "dem"],
    ["جمع", "die", "den (+n)"]
  ],
  },
  "Wechselpräpositionen": {
    headers: ["پرسیار", "کەیس", "نموونە"],
    rows: [
    ["wohin? (جووڵە)", "Akkusativ", "in die Schule"],
    ["wo? (شوێن)", "Dativ", "in der Schule"]
  ],
    headersTr: ["Soru", "Hâl (Kasus)", "Örnek"],
    rowsTr: [
    ["wohin? (hareket)", "Akkusativ", "in die Schule"],
    ["wo? (konum)", "Dativ", "in der Schule"]
  ],
    headersEn: ["Question", "Case", "Example"],
    rowsEn: [
    ["wohin? (motion)", "Akkusativ", "in die Schule"],
    ["wo? (location)", "Dativ", "in der Schule"]
  ],
    headersAr: ["السؤال", "الحالة الإعرابية", "مثال"],
    rowsAr: [
    ["wohin? (حركة)", "Akkusativ", "in die Schule"],
    ["wo? (مكان)", "Dativ", "in der Schule"]
  ],
  },
  "Perfekt": {
    headers: ["یاریدەدەر", "نموونە"],
    rows: [
    ["haben", "ich habe gemacht"],
    ["sein (جووڵە)", "ich bin gegangen"]
  ],
    headersTr: ["Yardımcı Fiil", "Örnek"],
    rowsTr: [
    ["haben", "ich habe gemacht"],
    ["sein (hareket)", "ich bin gegangen"]
  ],
    headersEn: ["Auxiliary verb", "Example"],
    rowsEn: [
    ["haben", "ich habe gemacht"],
    ["sein (motion)", "ich bin gegangen"]
  ],
    headersAr: ["الفعل المساعد", "مثال"],
    rowsAr: [
    ["haben", "ich habe gemacht"],
    ["sein (حركة)", "ich bin gegangen"]
  ],
  },
  "Präteritum (sein, haben, Modalverben)": {
    headers: ["کردار", "Präteritum"],
    rows: [
    ["sein", "war"],
    ["haben", "hatte"],
    ["können", "konnte"],
    ["müssen", "musste"],
    ["wollen", "wollte"]
  ],
    headersTr: ["Fiil", "Präteritum"],
    rowsTr: [
    ["sein", "war"],
    ["haben", "hatte"],
    ["können", "konnte"],
    ["müssen", "musste"],
    ["wollen", "wollte"]
  ],
    headersEn: ["Verb", "Präteritum"],
    rowsEn: [
    ["sein", "war"],
    ["haben", "hatte"],
    ["können", "konnte"],
    ["müssen", "musste"],
    ["wollen", "wollte"]
  ],
    headersAr: ["الفعل", "الماضي البسيط (Präteritum)"],
    rowsAr: [
    ["sein", "war"],
    ["haben", "hatte"],
    ["können", "konnte"],
    ["müssen", "musste"],
    ["wollen", "wollte"]
  ],
  },
  "Reflexive Verben": {
    headers: ["کەس", "جێناوی خۆ"],
    rows: [
    ["ich", "mich"],
    ["du", "dich"],
    ["er/sie/es", "sich"],
    ["wir", "uns"],
    ["ihr", "euch"],
    ["sie/Sie", "sich"]
  ],
    headersTr: ["Kişi", "Dönüşlü Zamir"],
    rowsTr: [
    ["ich", "mich"],
    ["du", "dich"],
    ["er/sie/es", "sich"],
    ["wir", "uns"],
    ["ihr", "euch"],
    ["sie/Sie", "sich"]
  ],
    headersEn: ["Person", "Reflexive pronoun"],
    rowsEn: [
    ["ich", "mich"],
    ["du", "dich"],
    ["er/sie/es", "sich"],
    ["wir", "uns"],
    ["ihr", "euch"],
    ["sie/Sie", "sich"]
  ],
    headersAr: ["الضمير", "ضمير الانعكاس"],
    rowsAr: [
    ["ich", "mich"],
    ["du", "dich"],
    ["er/sie/es", "sich"],
    ["wir", "uns"],
    ["ihr", "euch"],
    ["sie/Sie", "sich"]
  ],
  },
  "Konjunktionen: und, oder, aber, denn, sondern": {
    headers: ["گرێدەر", "واتا"],
    rows: [
    ["und", "و"],
    ["oder", "یان"],
    ["aber", "بەڵام"],
    ["denn", "چونکە"],
    ["sondern", "بەڵکو"]
  ],
    headersTr: ["Bağlaç", "Anlamı"],
    rowsTr: [
    ["und", "ve"],
    ["oder", "veya"],
    ["aber", "ama"],
    ["denn", "çünkü"],
    ["sondern", "aksine"]
  ],
    headersEn: ["Conjunction", "Meaning"],
    rowsEn: [
    ["und", "and"],
    ["oder", "or"],
    ["aber", "but"],
    ["denn", "because/for"],
    ["sondern", "but rather"]
  ],
    headersAr: ["أداة الربط", "المعنى"],
    rowsAr: [
    ["und", "و"],
    ["oder", "أو"],
    ["aber", "لكن"],
    ["denn", "لأن"],
    ["sondern", "بل"]
  ],
  },
  "Nebensatz: weil, dass": {
    headers: ["گرێدەر", "واتا", "کردار"],
    rows: [
    ["weil", "چونکە", "کۆتایی ڕستە"],
    ["dass", "کە", "کۆتایی ڕستە"]
  ],
    headersTr: ["Bağlaç", "Anlamı", "Fiil"],
    rowsTr: [
    ["weil", "çünkü", "cümle sonunda"],
    ["dass", "ki", "cümle sonunda"]
  ],
    headersEn: ["Conjunction", "Meaning", "Verb"],
    rowsEn: [
    ["weil", "because", "end of clause"],
    ["dass", "that", "end of clause"]
  ],
    headersAr: ["أداة الربط", "المعنى", "الفعل"],
    rowsAr: [
    ["weil", "لأن", "نهاية الجملة"],
    ["dass", "أنّ", "نهاية الجملة"]
  ],
  },
  "Komparativ": {
    headers: ["Positiv", "Komparativ"],
    rows: [
    ["groß", "größer"],
    ["alt", "älter"],
    ["gut", "besser"],
    ["viel", "mehr"]
  ],
    headersTr: ["Positiv", "Komparativ"],
    rowsTr: [
    ["groß", "größer"],
    ["alt", "älter"],
    ["gut", "besser"],
    ["viel", "mehr"]
  ],
    headersEn: ["Positiv", "Komparativ"],
    rowsEn: [
    ["groß", "größer"],
    ["alt", "älter"],
    ["gut", "besser"],
    ["viel", "mehr"]
  ],
    headersAr: ["Positiv", "Komparativ"],
    rowsAr: [
    ["groß", "größer"],
    ["alt", "älter"],
    ["gut", "besser"],
    ["viel", "mehr"]
  ],
  },
  "Superlativ": {
    headers: ["Positiv", "Komparativ", "Superlativ"],
    rows: [
    ["groß", "größer", "am größten"],
    ["gut", "besser", "am besten"],
    ["viel", "mehr", "am meisten"]
  ],
    headersTr: ["Positiv", "Komparativ", "Superlativ"],
    rowsTr: [
    ["groß", "größer", "am größten"],
    ["gut", "besser", "am besten"],
    ["viel", "mehr", "am meisten"]
  ],
    headersEn: ["Positiv", "Komparativ", "Superlativ"],
    rowsEn: [
    ["groß", "größer", "am größten"],
    ["gut", "besser", "am besten"],
    ["viel", "mehr", "am meisten"]
  ],
    headersAr: ["Positiv", "Komparativ", "Superlativ"],
    rowsAr: [
    ["groß", "größer", "am größten"],
    ["gut", "besser", "am besten"],
    ["viel", "mehr", "am meisten"]
  ],
  },
  "Genitiv (Einführung)": {
    headers: ["ڕەگەز", "Genitiv"],
    rows: [
    ["نێر", "des (+s)"],
    ["مێ", "der"],
    ["بێلایەن", "des (+s)"],
    ["کۆ", "der"]
  ],
    headersTr: ["Cinsiyet", "Genitiv"],
    rowsTr: [
    ["Eril", "des (+s)"],
    ["Dişil", "der"],
    ["Nötr", "des (+s)"],
    ["Çoğul", "der"]
  ],
    headersEn: ["Gender", "Genitiv"],
    rowsEn: [
    ["Masculine", "des (+s)"],
    ["Feminine", "der"],
    ["Neuter", "des (+s)"],
    ["Plural", "der"]
  ],
    headersAr: ["الجنس", "حالة الإضافة (Genitiv)"],
    rowsAr: [
    ["مذكر", "des (+s)"],
    ["مؤنث", "der"],
    ["محايد", "des (+s)"],
    ["جمع", "der"]
  ],
  },
  "Pronomen: Personal-, Possessiv-, Demonstrativ-": {
    headers: ["جۆر", "نموونە"],
    rows: [
    ["Personal", "er, ihn, ihm"],
    ["Possessiv", "meiner, deiner"],
    ["Demonstrativ", "dieser, jener"]
  ],
    headersTr: ["Tür", "Örnek"],
    rowsTr: [
    ["Personal (Şahıs)", "er, ihn, ihm"],
    ["Possessiv (İyelik)", "meiner, deiner"],
    ["Demonstrativ (İşaret)", "dieser, jener"]
  ],
    headersEn: ["Type", "Example"],
    rowsEn: [
    ["Personal", "er, ihn, ihm"],
    ["Possessive", "meiner, deiner"],
    ["Demonstrative", "dieser, jener"]
  ],
    headersAr: ["النوع", "مثال"],
    rowsAr: [
    ["الشخصي (Personal)", "er, ihn, ihm"],
    ["الملكي (Possessiv)", "meiner, deiner"],
    ["الإشاري (Demonstrativ)", "dieser, jener"]
  ],
  },
  "Relativsätze (basic)": {
    headers: ["ڕەگەز", "جێناوی پەیوەندیدار"],
    rows: [
    ["نێر", "der"],
    ["مێ", "die"],
    ["بێلایەن", "das"],
    ["کۆ", "die"]
  ],
    headersTr: ["Cinsiyet", "İlgi Zamiri"],
    rowsTr: [
    ["Eril", "der"],
    ["Dişil", "die"],
    ["Nötr", "das"],
    ["Çoğul", "die"]
  ],
    headersEn: ["Gender", "Relative pronoun"],
    rowsEn: [
    ["Masculine", "der"],
    ["Feminine", "die"],
    ["Neuter", "das"],
    ["Plural", "die"]
  ],
    headersAr: ["الجنس", "ضمير الوصل"],
    rowsAr: [
    ["مذكر", "der"],
    ["مؤنث", "die"],
    ["محايد", "das"],
    ["جمع", "die"]
  ],
  },
  "Plusquamperfekt": {
    headers: ["یاریدەدەر", "نموونە"],
    rows: [
    ["hatte + Partizip II", "ich hatte gemacht"],
    ["war + Partizip II (جووڵە)", "ich war gegangen"]
  ],
    headersTr: ["Yardımcı Fiil", "Örnek"],
    rowsTr: [
    ["hatte + Partizip II", "ich hatte gemacht"],
    ["war + Partizip II (hareket)", "ich war gegangen"]
  ],
    headersEn: ["Auxiliary verb", "Example"],
    rowsEn: [
    ["hatte + Partizip II", "ich hatte gemacht"],
    ["war + Partizip II (motion)", "ich war gegangen"]
  ],
    headersAr: ["الفعل المساعد", "مثال"],
    rowsAr: [
    ["hatte + Partizip II", "ich hatte gemacht"],
    ["war + Partizip II (حركة)", "ich war gegangen"]
  ],
  },
  "Futur I": {
    headers: ["کەس", "werden", "+ Infinitiv"],
    rows: [
    ["ich", "werde", "lernen"],
    ["du", "wirst", "lernen"],
    ["er/sie/es", "wird", "lernen"],
    ["wir", "werden", "lernen"]
  ],
    headersTr: ["Kişi", "werden", "+ Infinitiv"],
    rowsTr: [
    ["ich", "werde", "lernen"],
    ["du", "wirst", "lernen"],
    ["er/sie/es", "wird", "lernen"],
    ["wir", "werden", "lernen"]
  ],
    headersEn: ["Person", "werden", "+ Infinitiv"],
    rowsEn: [
    ["ich", "werde", "lernen"],
    ["du", "wirst", "lernen"],
    ["er/sie/es", "wird", "lernen"],
    ["wir", "werden", "lernen"]
  ],
    headersAr: ["الضمير", "werden", "+ Infinitiv"],
    rowsAr: [
    ["ich", "werde", "lernen"],
    ["du", "wirst", "lernen"],
    ["er/sie/es", "wird", "lernen"],
    ["wir", "werden", "lernen"]
  ],
  },
  "Relativsätze (detail)": {
    headers: ["کەیس", "نێر", "مێ", "بێلایەن", "کۆ"],
    rows: [
    ["Nom", "der", "die", "das", "die"],
    ["Akk", "den", "die", "das", "die"],
    ["Dativ", "dem", "der", "dem", "denen"],
    ["Genitiv", "dessen", "deren", "dessen", "deren"]
  ],
    headersTr: ["Hâl (Kasus)", "Eril", "Dişil", "Nötr", "Çoğul"],
    rowsTr: [
    ["Nom", "der", "die", "das", "die"],
    ["Akk", "den", "die", "das", "die"],
    ["Dativ", "dem", "der", "dem", "denen"],
    ["Genitiv", "dessen", "deren", "dessen", "deren"]
  ],
    headersEn: ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
    rowsEn: [
    ["Nom", "der", "die", "das", "die"],
    ["Akk", "den", "die", "das", "die"],
    ["Dativ", "dem", "der", "dem", "denen"],
    ["Genitiv", "dessen", "deren", "dessen", "deren"]
  ],
    headersAr: ["الحالة الإعرابية", "المذكر", "المؤنث", "المحايد", "الجمع"],
    rowsAr: [
    ["Nom", "der", "die", "das", "die"],
    ["Akk", "den", "die", "das", "die"],
    ["Dativ", "dem", "der", "dem", "denen"],
    ["Genitiv", "dessen", "deren", "dessen", "deren"]
  ],
  },
  "Konjunktiv II": {
    headers: ["فۆرم", "واتا"],
    rows: [
    ["würde + Infinitiv", "بۆ گریمانە/خواست"],
    ["hätte", "هەبووایە"],
    ["wäre", "بووایە"],
    ["könnte", "دەیتوانی"]
  ],
    headersTr: ["Biçim (Form)", "Anlamı"],
    rowsTr: [
    ["würde + Infinitiv", "varsayım/istek için"],
    ["hätte", "sahip olsaydı"],
    ["wäre", "olsaydı"],
    ["könnte", "yapabilseydi"]
  ],
    headersEn: ["Form", "Meaning"],
    rowsEn: [
    ["würde + Infinitiv", "for hypothesis/wish"],
    ["hätte", "would have had"],
    ["wäre", "would have been"],
    ["könnte", "could/would be able to"]
  ],
    headersAr: ["الصيغة", "المعنى"],
    rowsAr: [
    ["würde + Infinitiv", "للافتراض/الرغبة"],
    ["hätte", "لو كان لديه"],
    ["wäre", "لو كان"],
    ["könnte", "لكان يستطيع"]
  ],
  },
  "Passiv (Vorgangspassiv)": {
    headers: ["Aktiv", "Passiv"],
    rows: [
    ["Man baut das Haus.", "Das Haus wird gebaut."],
    ["Man liest das Buch.", "Das Buch wird gelesen."]
  ],
    headersTr: ["Aktiv", "Passiv"],
    rowsTr: [
    ["Man baut das Haus.", "Das Haus wird gebaut."],
    ["Man liest das Buch.", "Das Buch wird gelesen."]
  ],
    headersEn: ["Aktiv", "Passiv"],
    rowsEn: [
    ["Man baut das Haus.", "Das Haus wird gebaut."],
    ["Man liest das Buch.", "Das Buch wird gelesen."]
  ],
    headersAr: ["Aktiv", "Passiv"],
    rowsAr: [
    ["Man baut das Haus.", "Das Haus wird gebaut."],
    ["Man liest das Buch.", "Das Buch wird gelesen."]
  ],
  },
  "Infinitiv mit zu": {
    headers: ["پێکهاتە", "نموونە"],
    rows: [
    ["Verb + zu + Infinitiv", "Ich versuche zu lernen."],
    ["Es ist + Adj + zu + Inf", "Es ist wichtig zu üben."]
  ],
    headersTr: ["Yapı", "Örnek"],
    rowsTr: [
    ["Verb + zu + Infinitiv", "Ich versuche zu lernen."],
    ["Es ist + Adj + zu + Inf", "Es ist wichtig zu üben."]
  ],
    headersEn: ["Structure", "Example"],
    rowsEn: [
    ["Verb + zu + Infinitiv", "Ich versuche zu lernen."],
    ["Es ist + Adj + zu + Inf", "Es ist wichtig zu üben."]
  ],
    headersAr: ["التركيب", "مثال"],
    rowsAr: [
    ["Verb + zu + Infinitiv", "Ich versuche zu lernen."],
    ["Es ist + Adj + zu + Inf", "Es ist wichtig zu üben."]
  ],
  },
  "um…zu / ohne…zu / statt…zu": {
    headers: ["پێکهاتە", "واتا"],
    rows: [
    ["um … zu", "بۆ ئەوەی"],
    ["ohne … zu", "بەبێ ئەوەی"],
    ["statt … zu", "لەبری ئەوەی"]
  ],
    headersTr: ["Yapı", "Anlamı"],
    rowsTr: [
    ["um … zu", "-mek için"],
    ["ohne … zu", "-meksizin"],
    ["statt … zu", "-mek yerine"]
  ],
    headersEn: ["Structure", "Meaning"],
    rowsEn: [
    ["um … zu", "in order to"],
    ["ohne … zu", "without doing"],
    ["statt … zu", "instead of doing"]
  ],
    headersAr: ["التركيب", "المعنى"],
    rowsAr: [
    ["um … zu", "لكي / من أجل"],
    ["ohne … zu", "دون أن / بدون"],
    ["statt … zu", "بدلاً من"]
  ],
  },
  "Adjektivdeklination": {
    headers: ["دوای", "کۆتایی (نێر Nom)", "نموونە"],
    rows: [
    ["der / die / das", "-e", "der rote Apfel"],
    ["ein / eine", "-er / -e / -es", "ein roter Apfel"],
    ["بێ ئارتیکڵ", "-er / -e / -es", "roter Wein"]
  ],
    headersTr: ["Öncesinde", "Ek (Eril Nom)", "Örnek"],
    rowsTr: [
    ["der / die / das", "-e", "der rote Apfel"],
    ["ein / eine", "-er / -e / -es", "ein roter Apfel"],
    ["Artikelsiz", "-er / -e / -es", "roter Wein"]
  ],
    headersEn: ["After", "Ending (Masc. Nom.)", "Example"],
    rowsEn: [
    ["der / die / das", "-e", "der rote Apfel"],
    ["ein / eine", "-er / -e / -es", "ein roter Apfel"],
    ["No article", "-er / -e / -es", "roter Wein"]
  ],
    headersAr: ["بعد", "اللاحقة (مذكر - حالة الرفع)", "مثال"],
    rowsAr: [
    ["der / die / das", "-e", "der rote Apfel"],
    ["ein / eine", "-er / -e / -es", "ein roter Apfel"],
    ["بلا أداة تعريف", "-er / -e / -es", "roter Wein"]
  ],
  },
  "Genitiv": {
    headers: ["ڕەگەز", "ئارتیکڵی Genitiv"],
    rows: [
    ["نێر", "des (+s)"],
    ["مێ", "der"],
    ["بێلایەن", "des (+s)"],
    ["کۆ", "der"]
  ],
    headersTr: ["Cinsiyet", "Genitiv Artikeli"],
    rowsTr: [
    ["Eril", "des (+s)"],
    ["Dişil", "der"],
    ["Nötr", "des (+s)"],
    ["Çoğul", "der"]
  ],
    headersEn: ["Gender", "Genitiv article"],
    rowsEn: [
    ["Masculine", "des (+s)"],
    ["Feminine", "der"],
    ["Neuter", "des (+s)"],
    ["Plural", "der"]
  ],
    headersAr: ["الجنس", "أداة حالة الإضافة (Genitiv)"],
    rowsAr: [
    ["مذكر", "des (+s)"],
    ["مؤنث", "der"],
    ["محايد", "des (+s)"],
    ["جمع", "der"]
  ],
  },
  "Indirekte Fragen": {
    headers: ["ڕاستەوخۆ", "ناڕاستەوخۆ"],
    rows: [
    ["Wo ist er?", "Weißt du, wo er ist?"],
    ["Kommt er? (بەڵێ/نەخێر)", "Ich frage, ob er kommt."]
  ],
    headersTr: ["Doğrudan", "Dolaylı"],
    rowsTr: [
    ["Wo ist er?", "Weißt du, wo er ist?"],
    ["Kommt er? (evet/hayır)", "Ich frage, ob er kommt."]
  ],
    headersEn: ["Direct", "Indirect"],
    rowsEn: [
    ["Wo ist er?", "Weißt du, wo er ist?"],
    ["Kommt er? (yes/no)", "Ich frage, ob er kommt."]
  ],
    headersAr: ["مباشر", "غير مباشر"],
    rowsAr: [
    ["Wo ist er?", "Weißt du, wo er ist?"],
    ["Kommt er? (نعم/لا)", "Ich frage, ob er kommt."]
  ],
  },
  "Konjunktionen: obwohl, wenn, als, während…": {
    headers: ["گرێدەر", "واتا"],
    rows: [
    ["obwohl", "هەرچەندە"],
    ["wenn", "ئەگەر / کاتێک"],
    ["als", "کاتێک (ڕابردوو)"],
    ["während", "لە کاتێکدا"],
    ["bevor", "پێش"],
    ["nachdem", "دوای"],
    ["seitdem", "لەو کاتەوە"]
  ],
    headersTr: ["Bağlaç", "Anlamı"],
    rowsTr: [
    ["obwohl", "-e rağmen"],
    ["wenn", "eğer / -dığında"],
    ["als", "-dığında (geçmiş)"],
    ["während", "iken"],
    ["bevor", "-den önce"],
    ["nachdem", "-den sonra"],
    ["seitdem", "o zamandan beri"]
  ],
    headersEn: ["Conjunction", "Meaning"],
    rowsEn: [
    ["obwohl", "although"],
    ["wenn", "if / when"],
    ["als", "when (past)"],
    ["während", "while"],
    ["bevor", "before"],
    ["nachdem", "after"],
    ["seitdem", "since then"]
  ],
    headersAr: ["أداة الربط", "المعنى"],
    rowsAr: [
    ["obwohl", "رغم أن"],
    ["wenn", "إذا / عندما"],
    ["als", "عندما (ماضٍ)"],
    ["während", "بينما"],
    ["bevor", "قبل"],
    ["nachdem", "بعد"],
    ["seitdem", "منذ ذلك الحين"]
  ],
  },
  "Präpositionen mit Genitiv": {
    headers: ["ئامراز", "واتا"],
    rows: [
    ["wegen", "بەهۆی"],
    ["trotz", "سەرەڕای"],
    ["während", "لە ماوەی"],
    ["statt", "لەبری"],
    ["innerhalb", "لە ناوەوەی"],
    ["außerhalb", "لە دەرەوەی"]
  ],
    headersTr: ["Edat", "Anlamı"],
    rowsTr: [
    ["wegen", "yüzünden"],
    ["trotz", "rağmen"],
    ["während", "süresince"],
    ["statt", "yerine"],
    ["innerhalb", "içinde"],
    ["außerhalb", "dışında"]
  ],
    headersEn: ["Preposition", "Meaning"],
    rowsEn: [
    ["wegen", "because of"],
    ["trotz", "despite"],
    ["während", "during"],
    ["statt", "instead of"],
    ["innerhalb", "within"],
    ["außerhalb", "outside of"]
  ],
    headersAr: ["حرف الجر", "المعنى"],
    rowsAr: [
    ["wegen", "بسبب"],
    ["trotz", "رغم / بالرغم من"],
    ["während", "أثناء"],
    ["statt", "بدلاً من"],
    ["innerhalb", "داخل / ضمن"],
    ["außerhalb", "خارج"]
  ],
  },
  "Passiv (alle Formen)": {
    headers: ["کات", "فۆرم"],
    rows: [
    ["Präsens", "wird gemacht"],
    ["Präteritum", "wurde gemacht"],
    ["Perfekt", "ist gemacht worden"],
    ["Futur", "wird gemacht werden"]
  ],
    headersTr: ["Zaman", "Biçim"],
    rowsTr: [
    ["Präsens", "wird gemacht"],
    ["Präteritum", "wurde gemacht"],
    ["Perfekt", "ist gemacht worden"],
    ["Futur", "wird gemacht werden"]
  ],
    headersEn: ["Tense", "Form"],
    rowsEn: [
    ["Präsens", "wird gemacht"],
    ["Präteritum", "wurde gemacht"],
    ["Perfekt", "ist gemacht worden"],
    ["Futur", "wird gemacht werden"]
  ],
    headersAr: ["الزمن", "الصيغة"],
    rowsAr: [
    ["Präsens", "wird gemacht"],
    ["Präteritum", "wurde gemacht"],
    ["Perfekt", "ist gemacht worden"],
    ["Futur", "wird gemacht werden"]
  ],
  },
  "Zustandspassiv": {
    headers: ["Vorgangspassiv (کردار)", "Zustandspassiv (دۆخ)"],
    rows: [
    ["wird geöffnet", "ist geöffnet"],
    ["wird geschlossen", "ist geschlossen"]
  ],
    headersTr: ["Vorgangspassiv (eylem)", "Zustandspassiv (durum)"],
    rowsTr: [
    ["wird geöffnet", "ist geöffnet"],
    ["wird geschlossen", "ist geschlossen"]
  ],
    headersEn: ["Vorgangspassiv (action)", "Zustandspassiv (state)"],
    rowsEn: [
    ["wird geöffnet", "ist geöffnet"],
    ["wird geschlossen", "ist geschlossen"]
  ],
    headersAr: ["Vorgangspassiv (فعل)", "Zustandspassiv (حالة)"],
    rowsAr: [
    ["wird geöffnet", "ist geöffnet"],
    ["wird geschlossen", "ist geschlossen"]
  ],
  },
  "Konjunktiv I (indirekte Rede)": {
    headers: ["Infinitiv", "Konjunktiv I"],
    rows: [
    ["sein", "sei"],
    ["haben", "habe"],
    ["kommen", "komme"],
    ["werden", "werde"]
  ],
    headersTr: ["Infinitiv", "Konjunktiv I"],
    rowsTr: [
    ["sein", "sei"],
    ["haben", "habe"],
    ["kommen", "komme"],
    ["werden", "werde"]
  ],
    headersEn: ["Infinitiv", "Konjunktiv I"],
    rowsEn: [
    ["sein", "sei"],
    ["haben", "habe"],
    ["kommen", "komme"],
    ["werden", "werde"]
  ],
    headersAr: ["Infinitiv", "Konjunktiv I"],
    rowsAr: [
    ["sein", "sei"],
    ["haben", "habe"],
    ["kommen", "komme"],
    ["werden", "werde"]
  ],
  },
  "Konjunktiv II (fortgeschritten)": {
    headers: ["کات", "فۆرم"],
    rows: [
    ["ئێستا", "würde machen"],
    ["ڕابردوو", "hätte gemacht"],
    ["ڕابردوو (جووڵە)", "wäre gegangen"]
  ],
    headersTr: ["Zaman", "Biçim"],
    rowsTr: [
    ["Şimdi", "würde machen"],
    ["Geçmiş", "hätte gemacht"],
    ["Geçmiş (hareket)", "wäre gegangen"]
  ],
    headersEn: ["Tense", "Form"],
    rowsEn: [
    ["Present", "würde machen"],
    ["Past", "hätte gemacht"],
    ["Past (motion)", "wäre gegangen"]
  ],
    headersAr: ["الزمن", "الصيغة"],
    rowsAr: [
    ["الحاضر", "würde machen"],
    ["الماضي", "hätte gemacht"],
    ["الماضي (حركة)", "wäre gegangen"]
  ],
  },
  "Nominalisierung": {
    headers: ["کردار", "ناو"],
    rows: [
    ["lernen", "das Lernen"],
    ["lesen", "das Lesen"],
    ["essen", "das Essen"],
    ["ankommen", "die Ankunft"]
  ],
    headersTr: ["Fiil", "İsim"],
    rowsTr: [
    ["lernen", "das Lernen"],
    ["lesen", "das Lesen"],
    ["essen", "das Essen"],
    ["ankommen", "die Ankunft"]
  ],
    headersEn: ["Verb", "Noun"],
    rowsEn: [
    ["lernen", "das Lernen"],
    ["lesen", "das Lesen"],
    ["essen", "das Essen"],
    ["ankommen", "die Ankunft"]
  ],
    headersAr: ["الفعل", "الاسم"],
    rowsAr: [
    ["lernen", "das Lernen"],
    ["lesen", "das Lesen"],
    ["essen", "das Essen"],
    ["ankommen", "die Ankunft"]
  ],
  },
  "Partizip I": {
    headers: ["Infinitiv", "Partizip I"],
    rows: [
    ["spielen", "spielend"],
    ["lachen", "lachend"],
    ["schlafen", "schlafend"],
    ["kommen", "kommend"]
  ],
    headersTr: ["Infinitiv", "Partizip I"],
    rowsTr: [
    ["spielen", "spielend"],
    ["lachen", "lachend"],
    ["schlafen", "schlafend"],
    ["kommen", "kommend"]
  ],
    headersEn: ["Infinitiv", "Partizip I"],
    rowsEn: [
    ["spielen", "spielend"],
    ["lachen", "lachend"],
    ["schlafen", "schlafend"],
    ["kommen", "kommend"]
  ],
    headersAr: ["Infinitiv", "Partizip I"],
    rowsAr: [
    ["spielen", "spielend"],
    ["lachen", "lachend"],
    ["schlafen", "schlafend"],
    ["kommen", "kommend"]
  ],
  },
  "Partizip II als Adjektiv": {
    headers: ["Verb", "Partizip II"],
    rows: [
    ["öffnen", "geöffnet"],
    ["kochen", "gekocht"],
    ["schreiben", "geschrieben"],
    ["reparieren", "repariert"]
  ],
    headersTr: ["Verb", "Partizip II"],
    rowsTr: [
    ["öffnen", "geöffnet"],
    ["kochen", "gekocht"],
    ["schreiben", "geschrieben"],
    ["reparieren", "repariert"]
  ],
    headersEn: ["Verb", "Partizip II"],
    rowsEn: [
    ["öffnen", "geöffnet"],
    ["kochen", "gekocht"],
    ["schreiben", "geschrieben"],
    ["reparieren", "repariert"]
  ],
    headersAr: ["Verb", "Partizip II"],
    rowsAr: [
    ["öffnen", "geöffnet"],
    ["kochen", "gekocht"],
    ["schreiben", "geschrieben"],
    ["reparieren", "repariert"]
  ],
  },
  "Futur II": {
    headers: ["پێکهاتە", "نموونە"],
    rows: [
    ["werden + P II + haben", "Ich werde es gemacht haben."],
    ["werden + P II + sein (جووڵە)", "Er wird gegangen sein."]
  ],
    headersTr: ["Yapı", "Örnek"],
    rowsTr: [
    ["werden + P II + haben", "Ich werde es gemacht haben."],
    ["werden + P II + sein (hareket)", "Er wird gegangen sein."]
  ],
    headersEn: ["Structure", "Example"],
    rowsEn: [
    ["werden + P II + haben", "Ich werde es gemacht haben."],
    ["werden + P II + sein (motion)", "Er wird gegangen sein."]
  ],
    headersAr: ["التركيب", "مثال"],
    rowsAr: [
    ["werden + P II + haben", "Ich werde es gemacht haben."],
    ["werden + P II + sein (حركة)", "Er wird gegangen sein."]
  ],
  },
  "Kausale, konsekutive, konzessive Sätze": {
    headers: ["جۆر", "گرێدەر"],
    rows: [
    ["هۆکاری", "weil, da"],
    ["ئەنجامی", "sodass, so … dass"],
    ["ڕێگری", "obwohl, obgleich"]
  ],
    headersTr: ["Tür", "Bağlaç"],
    rowsTr: [
    ["Nedensel (Kausal)", "weil, da"],
    ["Sonuç (Konsekutif)", "sodass, so … dass"],
    ["Karşıtlık (Konzessiv)", "obwohl, obgleich"]
  ],
    headersEn: ["Type", "Conjunction"],
    rowsEn: [
    ["Causal", "weil, da"],
    ["Consecutive", "sodass, so … dass"],
    ["Concessive", "obwohl, obgleich"]
  ],
    headersAr: ["النوع", "أداة الربط"],
    rowsAr: [
    ["سببي (Kausal)", "weil, da"],
    ["نتيجة (Konsekutiv)", "sodass, so … dass"],
    ["تنازلي (Konzessiv)", "obwohl, obgleich"]
  ],
  },
  "Wortbildung: Präfixe & Suffixe": {
    headers: ["جۆر", "نموونە"],
    rows: [
    ["پێشگر un-", "möglich → unmöglich"],
    ["پاشگر -ung", "die Zeitung"],
    ["پاشگر -heit", "die Freiheit"],
    ["پاشگر -keit", "die Möglichkeit"],
    ["پاشگر -er", "der Leser"]
  ],
    headersTr: ["Tür", "Örnek"],
    rowsTr: [
    ["Ön ek un-", "möglich → unmöglich"],
    ["Son ek -ung", "die Zeitung"],
    ["Son ek -heit", "die Freiheit"],
    ["Son ek -keit", "die Möglichkeit"],
    ["Son ek -er", "der Leser"]
  ],
    headersEn: ["Type", "Example"],
    rowsEn: [
    ["Prefix un-", "möglich → unmöglich"],
    ["Suffix -ung", "die Zeitung"],
    ["Suffix -heit", "die Freiheit"],
    ["Suffix -keit", "die Möglichkeit"],
    ["Suffix -er", "der Leser"]
  ],
    headersAr: ["النوع", "مثال"],
    rowsAr: [
    ["بادئة (سابقة) un-", "möglich → unmöglich"],
    ["لاحقة -ung", "die Zeitung"],
    ["لاحقة -heit", "die Freiheit"],
    ["لاحقة -keit", "die Möglichkeit"],
    ["لاحقة -er", "der Leser"]
  ],
  },
};

export const GEXAMPLES = {
  "Artikel: der, die, das": [
    { de: "Der Mann liest eine Zeitung.", ku: "پیاوەکە ڕۆژنامەیەک دەخوێنێتەوە." },
    { de: "Die Frau kocht das Essen.", ku: "ژنەکە خواردنەکە لێدەنێ." },
    { de: "Das Kind spielt im Garten.", ku: "منداڵەکە لە باخچەدا یاری دەکات." },
    { de: "Der Tisch ist aus Holz.", ku: "مێزەکە لە دارە." },
    { de: "Die Lampe ist sehr hell.", ku: "چراکە زۆر ڕووناکە." },
    { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە." },
    { de: "Der Hund schläft im Haus.", ku: "سەگەکە لە ماڵدا خەوتووە." },
    { de: "Die Tür ist offen.", ku: "دەرگاکە کراوەیە." },
    { de: "Das Auto fährt sehr schnell.", ku: "ئۆتۆمبێلەکە زۆر خێرا دەڕوات." },
    { de: "Der Lehrer erklärt die Aufgabe.", ku: "مامۆستا ئەرکەکە ڕوون دەکاتەوە." }
  ],
  "Bestimmte / unbestimmte Artikel": [
    { de: "Ich sehe einen Hund.", ku: "سەگێک دەبینم." },
    { de: "Der Hund ist sehr groß.", ku: "سەگەکە زۆر گەورەیە." },
    { de: "Sie kauft eine Tasche.", ku: "جانتایەک دەکڕێت." },
    { de: "Die Tasche ist teuer.", ku: "جانتاکە گرانە." },
    { de: "Wir haben ein Auto.", ku: "ئۆتۆمبێلێکمان هەیە." },
    { de: "Das Auto ist neu.", ku: "ئۆتۆمبێلەکە نوێیە." },
    { de: "Ein Mann steht vor der Tür.", ku: "پیاوێک لەبەردەم دەرگاکە ڕاوەستاوە." },
    { de: "Der Mann ist mein Onkel.", ku: "پیاوەکە ماممە." },
    { de: "Ich möchte einen Apfel.", ku: "سێوێکم دەوێت." },
    { de: "Eine Frau fragt nach dem Weg.", ku: "ژنێک پرسیاری ڕێگا دەکات." }
  ],
  "Plural": [
    { de: "Die Kinder spielen draußen.", ku: "منداڵەکان لە دەرەوە یاری دەکەن." },
    { de: "Meine Brüder wohnen in Berlin.", ku: "براکانم لە بەرلین دەژین." },
    { de: "Die Bücher sind sehr alt.", ku: "کتێبەکان زۆر کۆنن." },
    { de: "Wir haben zwei Autos.", ku: "دوو ئۆتۆمبێلمان هەیە." },
    { de: "Die Häuser sind groß.", ku: "خانووەکان گەورەن." },
    { de: "Die Frauen arbeiten im Büro.", ku: "ژنەکان لە نووسینگەدا کار دەکەن." },
    { de: "Ich kaufe drei Äpfel.", ku: "سێ سێو دەکڕم." },
    { de: "Die Lehrer sind freundlich.", ku: "مامۆستاکان دۆستانەن." },
    { de: "Die Tische sind aus Holz.", ku: "مێزەکان لە دارن." },
    { de: "Die Städte in Deutschland sind schön.", ku: "شارەکانی ئەڵمانیا جوانن." }
  ],
  "Personalpronomen": [
    { de: "Ich komme aus Kurdistan.", ku: "من خەڵکی کوردستانم." },
    { de: "Du sprichst sehr gut Deutsch.", ku: "تۆ زۆر باش ئەڵمانی قسە دەکەیت." },
    { de: "Er arbeitet in einer Firma.", ku: "ئەو لە کۆمپانیایەکدا کار دەکات." },
    { de: "Sie liest jeden Tag.", ku: "ئەو هەموو ڕۆژێک دەخوێنێتەوە." },
    { de: "Es ist heute sehr kalt.", ku: "ئەمڕۆ زۆر ساردە." },
    { de: "Wir lernen zusammen.", ku: "پێکەوە فێردەبین." },
    { de: "Ihr seid sehr nett.", ku: "ئێوە زۆر بەسۆزن." },
    { de: "Sie kommen morgen an.", ku: "ئەوان سبەینێ دەگەن." },
    { de: "Ich verstehe dich gut.", ku: "باش لێت دەگەم." },
    { de: "Wir wohnen in Bochum.", ku: "لە بۆخوم دەژین." }
  ],
  "Präsens — regelmäßige Verben": [
    { de: "Ich lerne jeden Tag Deutsch.", ku: "هەموو ڕۆژێک ئەڵمانی فێردەبم." },
    { de: "Du spielst sehr gut Fußball.", ku: "تۆ زۆر باش تۆپی پێ یاری دەکەیت." },
    { de: "Er arbeitet in Frankfurt.", ku: "ئەو لە فرانکفورت کار دەکات." },
    { de: "Wir wohnen in einer Stadt.", ku: "لە شارێکدا دەژین." },
    { de: "Ihr macht eine Pause.", ku: "ئێوە پشوویەک دەدەن." },
    { de: "Sie kaufen frisches Brot.", ku: "نانی تازە دەکڕن." },
    { de: "Ich höre gern Musik.", ku: "حەز دەکەم گوێ لە مۆسیقا بگرم." },
    { de: "Du fragst den Lehrer.", ku: "تۆ پرسیار لە مامۆستا دەکەیت." },
    { de: "Wir lernen neue Wörter.", ku: "وشەی نوێ فێردەبین." },
    { de: "Das Kind weint laut.", ku: "منداڵەکە بە دەنگی بەرز دەگری." }
  ],
  "Unregelmäßige Verben": [
    { de: "Er fährt mit dem Bus zur Arbeit.", ku: "ئەو بە پاس دەچێتە سەر کار." },
    { de: "Du isst zu viel Schokolade.", ku: "تۆ زۆر شۆکۆلاتە دەخۆیت." },
    { de: "Sie liest ein interessantes Buch.", ku: "کتێبێکی سەرنجڕاکێش دەخوێنێتەوە." },
    { de: "Er gibt mir sein Heft.", ku: "دەفتەرەکەی دەداتە من." },
    { de: "Das Kind schläft schon.", ku: "منداڵەکە ئێستا خەوتووە." },
    { de: "Du sprichst sehr schnell.", ku: "تۆ زۆر خێرا قسە دەکەیت." },
    { de: "Er nimmt den Zug nach Köln.", ku: "شەمەندەفەری کۆلن دەگرێت." },
    { de: "Sie sieht jeden Abend fern.", ku: "هەموو ئێوارەیەک تەلەفزیۆن سەیر دەکات." },
    { de: "Er trägt einen schweren Koffer.", ku: "جانتایەکی قورس هەڵدەگرێت." },
    { de: "Du läufst sehr schnell.", ku: "تۆ زۆر خێرا ڕادەکەیت." }
  ],
  "sein und haben": [
    { de: "Ich bin heute sehr müde.", ku: "ئەمڕۆ زۆر ماندووم." },
    { de: "Du bist mein bester Freund.", ku: "تۆ باشترین هاوڕێمی." },
    { de: "Er ist Arzt von Beruf.", ku: "ئەو پیشەی پزیشکە." },
    { de: "Wir sind seit zwei Jahren hier.", ku: "دوو ساڵە لێرەین." },
    { de: "Ihr seid sehr fleißig.", ku: "ئێوە زۆر کۆششکارن." },
    { de: "Sie sind aus Deutschland.", ku: "ئەوان خەڵکی ئەڵمانیان." },
    { de: "Ich habe einen großen Bruder.", ku: "برایەکی گەورەم هەیە." },
    { de: "Du hast viel Zeit.", ku: "کاتی زۆرت هەیە." },
    { de: "Er hat ein neues Auto.", ku: "ئۆتۆمبێلێکی نوێی هەیە." },
    { de: "Wir haben morgen eine Prüfung.", ku: "سبەینێ تاقیکردنەوەمان هەیە." }
  ],
  "Modalverben": [
    { de: "Ich kann gut schwimmen.", ku: "باش دەتوانم مەلە بکەم." },
    { de: "Du musst mehr lernen.", ku: "دەبێت زیاتر فێربیت." },
    { de: "Er will ein Auto kaufen.", ku: "دەیەوێت ئۆتۆمبێلێک بکڕێت." },
    { de: "Wir dürfen hier nicht rauchen.", ku: "لێرە بۆمان نییە جگەرە بکێشین." },
    { de: "Ihr sollt pünktlich sein.", ku: "دەبێت لە کاتی خۆتاندا بن." },
    { de: "Ich möchte einen Kaffee trinken.", ku: "دەمەوێت قاوەیەک بخۆمەوە." },
    { de: "Kannst du mir helfen?", ku: "دەتوانیت یارمەتیم بدەیت؟" },
    { de: "Wir müssen jetzt gehen.", ku: "ئێستا دەبێت بڕۆین." },
    { de: "Sie will Ärztin werden.", ku: "دەیەوێت ببێتە پزیشک." },
    { de: "Darf ich das Fenster öffnen?", ku: "دەکرێت پەنجەرەکە بکەمەوە؟" }
  ],
  "W-Fragen": [
    { de: "Wo wohnst du jetzt?", ku: "ئێستا لەکوێ دەژیت؟" },
    { de: "Was machst du am Wochenende?", ku: "کۆتایی هەفتە چی دەکەیت؟" },
    { de: "Wann beginnt der Unterricht?", ku: "وانەکە کەی دەست پێدەکات؟" },
    { de: "Wer ist dieser Mann?", ku: "ئەم پیاوە کێیە؟" },
    { de: "Wie heißt deine Schwester?", ku: "ناوی خوشکت چییە؟" },
    { de: "Warum lernst du Deutsch?", ku: "بۆچی ئەڵمانی فێردەبیت؟" },
    { de: "Woher kommst du?", ku: "خەڵکی کوێیت؟" },
    { de: "Wohin gehst du?", ku: "بۆ کوێ دەچیت؟" },
    { de: "Wie viel kostet das?", ku: "ئەمە چەند دەکات؟" },
    { de: "Welche Farbe magst du?", ku: "حەزت لە کام ڕەنگە؟" }
  ],
  "Ja/Nein-Fragen": [
    { de: "Kommst du heute Abend?", ku: "ئەمڕۆ ئێوارە دێیت؟" },
    { de: "Hast du ein Auto?", ku: "ئۆتۆمبێلت هەیە؟" },
    { de: "Sprichst du Englisch?", ku: "ئینگلیزی قسە دەکەیت؟" },
    { de: "Bist du müde?", ku: "ماندوویت؟" },
    { de: "Magst du Kaffee?", ku: "حەزت لە قاوەیە؟" },
    { de: "Wohnst du in Berlin?", ku: "لە بەرلین دەژیت؟" },
    { de: "Möchtest du etwas essen?", ku: "دەتەوێت شتێک بخۆیت؟" },
    { de: "Kannst du schwimmen?", ku: "دەتوانیت مەلە بکەیت؟" },
    { de: "Hast du morgen Zeit?", ku: "سبەینێ کاتت هەیە؟" },
    { de: "Verstehst du mich?", ku: "لێم دەگەیت؟" }
  ],
  "Satzstellung": [
    { de: "Ich gehe heute ins Kino.", ku: "ئەمڕۆ دەچمە سینەما." },
    { de: "Heute gehe ich ins Kino.", ku: "ئەمڕۆ دەچمە سینەما (کردار جێی ٢)." },
    { de: "Am Montag arbeite ich nicht.", ku: "دووشەممە کار ناکەم." },
    { de: "Morgen fahren wir nach Köln.", ku: "سبەینێ دەچینە کۆلن." },
    { de: "Ich trinke jeden Morgen Kaffee.", ku: "هەموو بەیانییەک قاوە دەخۆمەوە." },
    { de: "Nach der Arbeit gehe ich nach Hause.", ku: "دوای کار دەچمە ماڵەوە." },
    { de: "Im Sommer reisen wir viel.", ku: "لە هاویندا زۆر گەشت دەکەین." },
    { de: "Er spielt am Abend Gitarre.", ku: "ئێوارە گیتار لێدەدات." },
    { de: "Wir essen um acht Uhr.", ku: "کاتژمێر هەشت دەخۆین." },
    { de: "Manchmal koche ich für meine Familie.", ku: "هەندێجار بۆ خێزانەکەم خواردن لێدەنێم." }
  ],
  "Akkusativ": [
    { de: "Ich sehe den Mann dort.", ku: "ئەو پیاوەی ئەوێ دەبینم." },
    { de: "Sie kauft einen neuen Computer.", ku: "کۆمپیوتەرێکی نوێ دەکڕێت." },
    { de: "Wir lesen das Buch zusammen.", ku: "پێکەوە کتێبەکە دەخوێنینەوە." },
    { de: "Er trinkt einen Kaffee.", ku: "قاوەیەک دەخواتەوە." },
    { de: "Ich brauche den Schlüssel.", ku: "پێویستم بە کلیلەکەیە." },
    { de: "Hast du die Zeitung gelesen?", ku: "ڕۆژنامەکەت خوێندەوە؟" },
    { de: "Wir besuchen den Lehrer.", ku: "سەردانی مامۆستا دەکەین." },
    { de: "Sie liebt ihren Hund.", ku: "سەگەکەی خۆش دەوێت." },
    { de: "Ich kaufe einen Apfel und eine Banane.", ku: "سێوێک و مۆزێک دەکڕم." },
    { de: "Er fragt den Polizisten.", ku: "پرسیار لە پۆلیسەکە دەکات." }
  ],
  "Possessivartikel": [
    { de: "Das ist mein Auto.", ku: "ئەمە ئۆتۆمبێلی منە." },
    { de: "Deine Schwester ist sehr nett.", ku: "خوشکت زۆر بەسۆزە." },
    { de: "Sein Vater arbeitet im Krankenhaus.", ku: "باوکی لە نەخۆشخانە کار دەکات." },
    { de: "Ihre Mutter kocht sehr gut.", ku: "دایکی زۆر باش خواردن لێدەنێ." },
    { de: "Unser Haus ist klein.", ku: "خانووەکەمان بچووکە." },
    { de: "Euer Lehrer ist streng.", ku: "مامۆستاکەتان توندە." },
    { de: "Mein Bruder studiert in Köln.", ku: "برام لە کۆلن دەخوێنێت." },
    { de: "Ich suche meinen Schlüssel.", ku: "بەدوای کلیلەکەمدا دەگەڕێم." },
    { de: "Wo ist deine Tasche?", ku: "جانتاکەت لەکوێیە؟" },
    { de: "Ihre Kinder gehen zur Schule.", ku: "منداڵەکانی دەچنە قوتابخانە." }
  ],
  "Trennbare Verben": [
    { de: "Ich stehe jeden Tag um sieben auf.", ku: "هەموو ڕۆژێک کاتژمێر حەوت هەڵدەستم." },
    { de: "Wir kaufen am Samstag ein.", ku: "شەممە بازاڕ دەکەین." },
    { de: "Der Zug fährt um neun Uhr ab.", ku: "شەمەندەفەرەکە کاتژمێر نۆ بەڕێدەکەوێت." },
    { de: "Ruf mich heute Abend an!", ku: "ئەمڕۆ ئێوارە پەیوەندیم پێوە بکە!" },
    { de: "Wann kommt der Bus an?", ku: "پاسەکە کەی دەگات؟" },
    { de: "Ich räume mein Zimmer auf.", ku: "ژوورەکەم ڕێک دەخەم." },
    { de: "Sie zieht ihre Jacke an.", ku: "چاکەتەکەی دەپۆشێت." },
    { de: "Mach bitte das Licht aus!", ku: "تکایە چراکە بکوژێنەوە!" },
    { de: "Wir fangen um acht an.", ku: "کاتژمێر هەشت دەست پێدەکەین." },
    { de: "Er sieht jeden Abend fern.", ku: "هەموو ئێوارەیەک تەلەفزیۆن سەیر دەکات." }
  ],
  "Negation: nicht / kein": [
    { de: "Ich verstehe das nicht.", ku: "لەمە تێناگەم." },
    { de: "Er ist heute nicht zu Hause.", ku: "ئەمڕۆ لە ماڵەوە نییە." },
    { de: "Ich habe kein Geld dabei.", ku: "پارەم پێ نییە." },
    { de: "Sie hat keine Geschwister.", ku: "خوشک و برای نییە." },
    { de: "Das ist nicht mein Buch.", ku: "ئەمە کتێبی من نییە." },
    { de: "Wir gehen heute nicht ins Kino.", ku: "ئەمڕۆ ناچینە سینەما." },
    { de: "Ich trinke keinen Alkohol.", ku: "ئەلکهۆل ناخۆمەوە." },
    { de: "Das Wetter ist nicht gut.", ku: "کەش‌وهەوا باش نییە." },
    { de: "Er spricht kein Deutsch.", ku: "ئەو ئەڵمانی قسە ناکات." },
    { de: "Ich möchte das nicht.", ku: "ئەمەم ناوێت." }
  ],
  "Imperativ": [
    { de: "Komm bitte her!", ku: "تکایە وەرە ئێرە!" },
    { de: "Mach die Tür zu!", ku: "دەرگاکە دابخە!" },
    { de: "Hört bitte zu!", ku: "تکایە گوێ بگرن!" },
    { de: "Sei bitte ruhig!", ku: "تکایە بێدەنگ بە!" },
    { de: "Trink mehr Wasser!", ku: "زیاتر ئاو بخۆوە!" },
    { de: "Warten Sie einen Moment!", ku: "ساتێک چاوەڕێ بکەن!" },
    { de: "Iss dein Gemüse!", ku: "سەوزەکەت بخۆ!" },
    { de: "Geh nach Hause!", ku: "بڕۆ ماڵەوە!" },
    { de: "Helfen Sie mir bitte!", ku: "تکایە یارمەتیم بدەن!" },
    { de: "Schreibt die Wörter auf!", ku: "وشەکان بنووسن!" }
  ],
  "Präpositionen: Ort & Zeit": [
    { de: "Ich bin um acht Uhr zu Hause.", ku: "کاتژمێر هەشت لە ماڵەوەم." },
    { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە." },
    { de: "Wir treffen uns am Montag.", ku: "دووشەممە یەکتر دەبینین." },
    { de: "Im Sommer fahren wir ans Meer.", ku: "لە هاویندا دەچینە دەریا." },
    { de: "Die Katze ist unter dem Stuhl.", ku: "پشیلەکە لەژێر کورسییەکەیە." },
    { de: "Er wohnt in einer großen Stadt.", ku: "لە شارێکی گەورەدا دەژی." },
    { de: "Das Bild hängt an der Wand.", ku: "وێنەکە بە دیوارەوەیە." },
    { de: "Ich komme am Abend.", ku: "ئێوارە دێم." },
    { de: "Wir warten vor dem Kino.", ku: "لەبەردەم سینەما چاوەڕێ دەکەین." },
    { de: "Im Januar ist es sehr kalt.", ku: "لە ژانویەدا زۆر ساردە." }
  ],
  "Dativ": [
    { de: "Ich gebe dem Kind einen Apfel.", ku: "سێوێک دەدەمە منداڵەکە." },
    { de: "Sie hilft ihrer Mutter.", ku: "یارمەتی دایکی دەدات." },
    { de: "Das Buch gehört dem Lehrer.", ku: "کتێبەکە هی مامۆستایە." },
    { de: "Ich danke dir für deine Hilfe.", ku: "سوپاست دەکەم بۆ یارمەتیت." },
    { de: "Er schreibt seinem Freund einen Brief.", ku: "نامەیەک بۆ هاوڕێکەی دەنووسێت." },
    { de: "Das Auto gefällt mir sehr.", ku: "ئۆتۆمبێلەکە زۆر بەدڵمە." },
    { de: "Wir helfen den Kindern.", ku: "یارمەتی منداڵەکان دەدەین." },
    { de: "Sie gibt dem Hund Wasser.", ku: "ئاو دەداتە سەگەکە." },
    { de: "Ich glaube dir.", ku: "باوەڕت پێدەکەم." },
    { de: "Das gehört meiner Schwester.", ku: "ئەمە هی خوشکمە." }
  ],
  "Wechselpräpositionen": [
    { de: "Ich gehe in die Schule.", ku: "دەچمە قوتابخانە (جووڵە)." },
    { de: "Ich bin in der Schule.", ku: "لە قوتابخانەم (شوێن)." },
    { de: "Er legt das Buch auf den Tisch.", ku: "کتێبەکە دەخاتە سەر مێزەکە." },
    { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە." },
    { de: "Sie hängt das Bild an die Wand.", ku: "وێنەکە بە دیوارەوە هەڵدەواسێت." },
    { de: "Das Bild hängt an der Wand.", ku: "وێنەکە بە دیوارەوەیە." },
    { de: "Die Katze springt auf das Sofa.", ku: "پشیلەکە دەفڕێتە سەر قەنەفەکە." },
    { de: "Wir fahren in die Stadt.", ku: "دەچینە شار." },
    { de: "Das Kind steht hinter der Tür.", ku: "منداڵەکە لەپشت دەرگاکەوەیە." },
    { de: "Ich setze mich auf den Stuhl.", ku: "لەسەر کورسییەکە دادەنیشم." }
  ],
  "Perfekt": [
    { de: "Ich habe gestern viel gelernt.", ku: "دوێنێ زۆرم خوێند." },
    { de: "Wir haben einen Film gesehen.", ku: "فیلمێکمان بینی." },
    { de: "Er ist nach Berlin gefahren.", ku: "چووە بەرلین." },
    { de: "Sie hat ein Buch gekauft.", ku: "کتێبێکی کڕی." },
    { de: "Hast du schon gegessen?", ku: "خواردووتە؟" },
    { de: "Wir sind spät angekommen.", ku: "درەنگ گەیشتین." },
    { de: "Ich habe meine Hausaufgaben gemacht.", ku: "ئەرکی ماڵەوەم کرد." },
    { de: "Er hat den ganzen Tag gearbeitet.", ku: "بە درێژایی ڕۆژ کاری کرد." },
    { de: "Sie ist früh aufgestanden.", ku: "زوو هەستا." },
    { de: "Wir haben zusammen Kaffee getrunken.", ku: "پێکەوە قاوەمان خواردەوە." }
  ],
  "Präteritum (sein, haben, Modalverben)": [
    { de: "Ich war gestern krank.", ku: "دوێنێ نەخۆش بووم." },
    { de: "Wir waren im Urlaub.", ku: "لە پشوودا بووین." },
    { de: "Sie hatte keine Zeit.", ku: "کاتی نەبوو." },
    { de: "Er hatte einen schönen Tag.", ku: "ڕۆژێکی خۆشی هەبوو." },
    { de: "Ich konnte nicht schlafen.", ku: "نەمتوانی بخەوم." },
    { de: "Wir mussten lange warten.", ku: "ناچار بووین زۆر چاوەڕێ بکەین." },
    { de: "Du wolltest doch kommen.", ku: "تۆ دەتویست بێیت." },
    { de: "Es war sehr kalt im Winter.", ku: "لە زستاندا زۆر سارد بوو." },
    { de: "Sie durfte nicht ausgehen.", ku: "بۆی نەبوو بچێتە دەرەوە." },
    { de: "Ich hatte als Kind einen Hund.", ku: "لە منداڵیمدا سەگێکم هەبوو." }
  ],
  "Reflexive Verben": [
    { de: "Ich freue mich auf das Wochenende.", ku: "بە کۆتایی هەفتە دڵخۆشم." },
    { de: "Er wäscht sich jeden Morgen.", ku: "هەموو بەیانییەک خۆی دەشوات." },
    { de: "Wir treffen uns um sechs.", ku: "کاتژمێر شەش یەکتر دەبینین." },
    { de: "Setz dich bitte hierher.", ku: "تکایە لێرە دانیشە." },
    { de: "Sie interessiert sich für Kunst.", ku: "ئارەزووی هونەر دەکات." },
    { de: "Ich fühle mich heute gut.", ku: "ئەمڕۆ هەست بە باشی دەکەم." },
    { de: "Beeil dich, wir sind spät!", ku: "خێرا بکە، درەنگین!" },
    { de: "Er erinnert sich an seine Kindheit.", ku: "منداڵیی خۆی بیر دەکەوێتەوە." },
    { de: "Wir unterhalten uns über Politik.", ku: "دەربارەی سیاسەت گفتوگۆ دەکەین." },
    { de: "Ich ärgere mich über den Lärm.", ku: "لە دەنگەدەنگەکە بێزار دەبم." }
  ],
  "Konjunktionen: und, oder, aber, denn, sondern": [
    { de: "Ich lerne Deutsch und Englisch.", ku: "ئەڵمانی و ئینگلیزی فێردەبم." },
    { de: "Möchtest du Tee oder Kaffee?", ku: "چا دەتەوێت یان قاوە؟" },
    { de: "Ich bin müde, aber glücklich.", ku: "ماندووم، بەڵام بەختەوەرم." },
    { de: "Ich bleibe zu Hause, denn es regnet.", ku: "لە ماڵەوە دەمێنمەوە، چونکە باران دەبارێت." },
    { de: "Das ist nicht billig, sondern teuer.", ku: "ئەمە ئەرزان نییە، بەڵکو گرانە." },
    { de: "Er kocht und sie deckt den Tisch.", ku: "ئەو خواردن لێدەنێ و ئەو مێزەکە ئامادە دەکات." },
    { de: "Wir können laufen oder fahren.", ku: "دەتوانین بە پێ بڕۆین یان بە ئۆتۆمبێل." },
    { de: "Ich rufe an, aber niemand antwortet.", ku: "پەیوەندی دەکەم، بەڵام کەس وەڵام نادات." },
    { de: "Sie isst nicht Fleisch, sondern Gemüse.", ku: "گۆشت ناخوات، بەڵکو سەوزە." },
    { de: "Ich gehe früh, denn ich bin müde.", ku: "زوو دەڕۆم، چونکە ماندووم." }
  ],
  "Nebensatz: weil, dass": [
    { de: "Ich lerne Deutsch, weil ich in Deutschland lebe.", ku: "ئەڵمانی فێردەبم، چونکە لە ئەڵمانیا دەژیم." },
    { de: "Ich glaube, dass er recht hat.", ku: "پێموایە کە ڕاستە." },
    { de: "Sie bleibt zu Hause, weil sie krank ist.", ku: "لە ماڵەوە دەمێنێتەوە، چونکە نەخۆشە." },
    { de: "Ich weiß, dass du fleißig bist.", ku: "دەزانم کە کۆششکاریت." },
    { de: "Wir gehen nicht, weil es regnet.", ku: "ناڕۆین، چونکە باران دەبارێت." },
    { de: "Er sagt, dass er morgen kommt.", ku: "دەڵێت کە سبەینێ دێت." },
    { de: "Ich freue mich, dass du hier bist.", ku: "دڵخۆشم کە لێرەیت." },
    { de: "Sie lernt viel, weil sie eine Prüfung hat.", ku: "زۆر دەخوێنێت، چونکە تاقیکردنەوەی هەیە." },
    { de: "Ich hoffe, dass alles gut wird.", ku: "هیوادارم هەمووشت باش بێت." },
    { de: "Wir essen jetzt, weil wir Hunger haben.", ku: "ئێستا دەخۆین، چونکە برسیمانە." }
  ],
  "Komparativ": [
    { de: "Mein Bruder ist größer als ich.", ku: "برام لە من گەورەترە." },
    { de: "Heute ist es kälter als gestern.", ku: "ئەمڕۆ لە دوێنێ ساردترە." },
    { de: "Dieses Buch ist interessanter.", ku: "ئەم کتێبە سەرنجڕاکێشترە." },
    { de: "Berlin ist größer als Bochum.", ku: "بەرلین لە بۆخوم گەورەترە." },
    { de: "Sie ist jünger als ihr Bruder.", ku: "لە برای گەنجترە." },
    { de: "Das Auto ist teurer als das Fahrrad.", ku: "ئۆتۆمبێل لە پاسکیل گرانترە." },
    { de: "Kaffee schmeckt mir besser als Tee.", ku: "قاوە لە چا پێم خۆشترە." },
    { de: "Er läuft schneller als ich.", ku: "لە من خێراتر ڕادەکات." },
    { de: "Diese Aufgabe ist schwerer.", ku: "ئەم ئەرکە قورسترە." },
    { de: "Im Sommer sind die Tage länger.", ku: "لە هاویندا ڕۆژەکان درێژترن." }
  ],
  "Superlativ": [
    { de: "Das ist das beste Restaurant der Stadt.", ku: "ئەمە باشترین چێشتخانەی شارەکەیە." },
    { de: "Er ist der Größte in der Klasse.", ku: "لە پۆلەکەدا گەورەترینە." },
    { de: "Der Mount Everest ist der höchste Berg.", ku: "ئێڤەرێست بەرزترین شاخە." },
    { de: "Sie spricht am besten Deutsch.", ku: "باشترین ئەڵمانی قسە دەکات." },
    { de: "Heute ist der kälteste Tag des Jahres.", ku: "ئەمڕۆ ساردترین ڕۆژی ساڵە." },
    { de: "Das ist mein liebstes Buch.", ku: "ئەمە خۆشەویستترین کتێبمە." },
    { de: "Er läuft am schnellsten.", ku: "خێراترین ڕادەکات." },
    { de: "Diese Stadt ist die schönste.", ku: "ئەم شارە جوانترینە." },
    { de: "Du bist mein bester Freund.", ku: "تۆ باشترین هاوڕێمی." },
    { de: "Das war der längste Tag meines Lebens.", ku: "ئەوە درێژترین ڕۆژی ژیانم بوو." }
  ],
  "Genitiv (Einführung)": [
    { de: "Das ist das Auto meines Vaters.", ku: "ئەمە ئۆتۆمبێلی باوکمە." },
    { de: "Die Farbe der Blume ist rot.", ku: "ڕەنگی گوڵەکە سوورە." },
    { de: "Der Titel des Buches ist lang.", ku: "ناونیشانی کتێبەکە درێژە." },
    { de: "Das Haus meiner Eltern ist alt.", ku: "خانووی دایک و باوکم کۆنە." },
    { de: "Der Name des Kindes ist Lara.", ku: "ناوی منداڵەکە لارایە." },
    { de: "Die Tür des Hauses ist blau.", ku: "دەرگای خانووەکە شینە." },
    { de: "Das ist die Tasche meiner Schwester.", ku: "ئەمە جانتای خوشکمە." },
    { de: "Der Anfang des Films war spannend.", ku: "سەرەتای فیلمەکە سەرنجڕاکێش بوو." },
    { de: "Die Fenster des Zimmers sind groß.", ku: "پەنجەرەکانی ژوورەکە گەورەن." },
    { de: "Das ist das Büro des Chefs.", ku: "ئەمە نووسینگەی بەڕێوەبەرەکەیە." }
  ],
  "Pronomen: Personal-, Possessiv-, Demonstrativ-": [
    { de: "Ich sehe ihn jeden Tag.", ku: "هەموو ڕۆژێک دەیبینم." },
    { de: "Sie gibt ihm das Buch.", ku: "کتێبەکەی دەداتێ." },
    { de: "Dieser Stuhl ist frei.", ku: "ئەم کورسییە بەتاڵە." },
    { de: "Das ist meiner, nicht deiner.", ku: "ئەمە هی منە، نەک هی تۆ." },
    { de: "Diese Tasche gefällt mir.", ku: "ئەم جانتایە بەدڵمە." },
    { de: "Welches Auto möchtest du? Dieses.", ku: "کام ئۆتۆمبێلت دەوێت؟ ئەمە." },
    { de: "Kennst du sie?", ku: "دەیناسیت؟" },
    { de: "Er hilft uns immer.", ku: "هەمیشە یارمەتیمان دەدات." },
    { de: "Ich habe es ihr gegeben.", ku: "دامە ئەو (مێ)." },
    { de: "Jener Mann dort ist mein Lehrer.", ku: "ئەو پیاوەی ئەوێ مامۆستامە." }
  ],
  "Relativsätze (basic)": [
    { de: "Der Mann, der dort steht, ist mein Onkel.", ku: "ئەو پیاوەی لەوێ ڕاوەستاوە، ماممە." },
    { de: "Das Buch, das ich lese, ist spannend.", ku: "ئەو کتێبەی دەیخوێنمەوە، سەرنجڕاکێشە." },
    { de: "Die Frau, die singt, ist berühmt.", ku: "ئەو ژنەی گۆرانی دەڵێت، بەناوبانگە." },
    { de: "Das Auto, das rot ist, gehört mir.", ku: "ئەو ئۆتۆمبێلەی سوورە، هی منە." },
    { de: "Der Freund, der mir hilft, heißt Karwan.", ku: "ئەو هاوڕێیەی یارمەتیم دەدات، ناوی کاروانە." },
    { de: "Die Stadt, die schön ist, heißt Köln.", ku: "ئەو شارەی جوانە، ناوی کۆلنە." },
    { de: "Das Kind, das spielt, ist mein Sohn.", ku: "ئەو منداڵەی یاری دەکات، کوڕمە." },
    { de: "Der Lehrer, der Deutsch unterrichtet, ist nett.", ku: "ئەو مامۆستایەی ئەڵمانی دەڵێتەوە، بەسۆزە." },
    { de: "Die Blume, die hier wächst, ist selten.", ku: "ئەو گوڵەی لێرە گەشە دەکات، دەگمەنە." },
    { de: "Das Handy, das neu ist, war teuer.", ku: "ئەو مۆبایلەی نوێیە، گران بوو." }
  ],
  "Plusquamperfekt": [
    { de: "Ich hatte schon gegessen, als er kam.", ku: "پێشتر خواردبووم، کاتێک ئەو هات." },
    { de: "Sie war schon gegangen, bevor ich ankam.", ku: "پێشتر ڕۆیشتبوو، پێش ئەوەی بگەم." },
    { de: "Wir hatten den Film schon gesehen.", ku: "پێشتر فیلمەکەمان بینیبوو." },
    { de: "Nachdem er gegessen hatte, ging er schlafen.", ku: "دوای ئەوەی خواردبووی، چووە خەو." },
    { de: "Ich hatte den Brief geschrieben.", ku: "نامەکەم نووسیبوو." },
    { de: "Sie hatten das Haus schon verkauft.", ku: "پێشتر خانووەکەیان فرۆشتبوو." },
    { de: "Er war nie zuvor geflogen.", ku: "پێشتر هەرگیز نەفڕیبوو." },
    { de: "Wir waren schon angekommen, als es regnete.", ku: "پێشتر گەیشتبووین، کاتێک باران باری." },
    { de: "Hattest du davon gehört?", ku: "گوێت لێی بووبوو؟" },
    { de: "Ich hatte meinen Schlüssel vergessen.", ku: "کلیلەکەم لەبیر کردبوو." }
  ],
  "Futur I": [
    { de: "Ich werde nächstes Jahr Deutsch lernen.", ku: "ساڵی داهاتوو ئەڵمانی فێردەبم." },
    { de: "Morgen wird es regnen.", ku: "سبەینێ باران دەبارێت." },
    { de: "Wir werden uns bald wiedersehen.", ku: "بەم زووانە یەکتر دەبینینەوە." },
    { de: "Sie wird Ärztin werden.", ku: "دەبێتە پزیشک." },
    { de: "Ich werde dich morgen anrufen.", ku: "سبەینێ پەیوەندیت پێوە دەکەم." },
    { de: "Er wird die Prüfung bestehen.", ku: "لە تاقیکردنەوەکە سەردەکەوێت." },
    { de: "Das Wetter wird besser werden.", ku: "کەش‌وهەوا باشتر دەبێت." },
    { de: "Wir werden im Sommer nach Italien fahren.", ku: "لە هاویندا دەچینە ئیتاڵیا." },
    { de: "Ich werde nie aufgeben.", ku: "هەرگیز واز ناهێنم." },
    { de: "Du wirst es schaffen.", ku: "لەپێناوی دێیت." }
  ],
  "Relativsätze (detail)": [
    { de: "Der Mann, dem ich helfe, ist alt.", ku: "ئەو پیاوەی یارمەتی دەدەم، پیرە." },
    { de: "Das Kind, dessen Buch verloren ist, weint.", ku: "ئەو منداڵەی کتێبەکەی ون بووە، دەگری." },
    { de: "Die Stadt, in der ich wohne, ist klein.", ku: "ئەو شارەی تێیدا دەژیم، بچووکە." },
    { de: "Der Film, den ich gesehen habe, war gut.", ku: "ئەو فیلمەی بینیم، باش بوو." },
    { de: "Die Leute, mit denen ich arbeite, sind nett.", ku: "ئەو کەسانەی لەگەڵیان کار دەکەم، بەسۆزن." },
    { de: "Das Auto, das er gekauft hat, ist teuer.", ku: "ئەو ئۆتۆمبێلەی کڕیویەتی، گرانە." },
    { de: "Die Frau, deren Sohn hier lernt, ist Lehrerin.", ku: "ئەو ژنەی کوڕەکەی لێرە دەخوێنێت، مامۆستایە." },
    { de: "Der Tag, an dem wir uns trafen, war schön.", ku: "ئەو ڕۆژەی یەکترمان بینی، خۆش بوو." },
    { de: "Das Haus, in dem sie wohnt, ist alt.", ku: "ئەو خانووەی تێیدا دەژی، کۆنە." },
    { de: "Der Lehrer, dem die Schüler vertrauen, ist gut.", ku: "ئەو مامۆستایەی قوتابییەکان متمانەی پێدەکەن، باشە." }
  ],
  "Konjunktiv II": [
    { de: "Ich würde gern nach Japan reisen.", ku: "حەز دەکەم بچمە ژاپۆن." },
    { de: "An deiner Stelle würde ich mehr lernen.", ku: "لە جێی تۆ بوومایە زیاتر دەخوێندم." },
    { de: "Könnten Sie mir bitte helfen?", ku: "دەکرێت تکایە یارمەتیم بدەن؟" },
    { de: "Wenn ich Zeit hätte, würde ich kommen.", ku: "ئەگەر کاتم هەبووایە، دەهاتم." },
    { de: "Das wäre wirklich toll.", ku: "ئەمە بەڕاستی نایاب دەبوو." },
    { de: "Ich hätte gern einen Kaffee.", ku: "حەز دەکەم قاوەیەکم هەبێت." },
    { de: "Würdest du mir das erklären?", ku: "ئەمەم بۆ ڕوون دەکەیتەوە؟" },
    { de: "Wenn er reich wäre, würde er reisen.", ku: "ئەگەر دەوڵەمەند بوایە، گەشتی دەکرد." },
    { de: "Ich würde lieber zu Hause bleiben.", ku: "پێم باشترە لە ماڵەوە بمێنمەوە." },
    { de: "Es wäre besser, früh zu gehen.", ku: "باشتر دەبوو زوو بڕۆیت." }
  ],
  "Passiv (Vorgangspassiv)": [
    { de: "Das Auto wird gerade repariert.", ku: "ئۆتۆمبێلەکە ئێستا چاک دەکرێتەوە." },
    { de: "Die Tür wird langsam geöffnet.", ku: "دەرگاکە بەهێواشی دەکرێتەوە." },
    { de: "Hier wird Deutsch gesprochen.", ku: "لێرە ئەڵمانی قسە دەکرێت." },
    { de: "Das Buch wird von vielen gelesen.", ku: "کتێبەکە لەلایەن زۆر کەسەوە دەخوێنرێتەوە." },
    { de: "Das Essen wird in der Küche gekocht.", ku: "خواردنەکە لە چێشتخانە لێدەنرێت." },
    { de: "Die Häuser werden schnell gebaut.", ku: "خانووەکان خێرا دروست دەکرێن." },
    { de: "Der Brief wird heute geschickt.", ku: "نامەکە ئەمڕۆ دەنێردرێت." },
    { de: "Die Fenster werden geputzt.", ku: "پەنجەرەکان پاک دەکرێنەوە." },
    { de: "Das Problem wird bald gelöst.", ku: "کێشەکە بەم زووانە چارەسەر دەکرێت." },
    { de: "Die Arbeit wird gut gemacht.", ku: "کارەکە باش دەکرێت." }
  ],
  "Infinitiv mit zu": [
    { de: "Ich versuche, jeden Tag zu lernen.", ku: "هەوڵ دەدەم هەموو ڕۆژێک فێربم." },
    { de: "Es ist wichtig, viel zu üben.", ku: "گرنگە زۆر مەشق بکەیت." },
    { de: "Ich habe vergessen, dich anzurufen.", ku: "بیرم چووە پەیوەندیت پێوە بکەم." },
    { de: "Es macht Spaß, mit dir zu reden.", ku: "لەگەڵت قسەکردن خۆشە." },
    { de: "Ich hoffe, dich bald zu sehen.", ku: "هیوادارم بەم زووانە بتبینم." },
    { de: "Es ist nicht leicht, eine Sprache zu lernen.", ku: "ئاسان نییە زمانێک فێربیت." },
    { de: "Ich habe keine Zeit, zu warten.", ku: "کاتم نییە چاوەڕێ بکەم." },
    { de: "Er beginnt, Deutsch zu sprechen.", ku: "دەست دەکات بە ئەڵمانی قسەکردن." },
    { de: "Sie hat Angst, zu fliegen.", ku: "دەترسێت بفڕێت." },
    { de: "Vergiss nicht, das Licht auszumachen.", ku: "لەبیرت نەچێت چراکە بکوژێنیتەوە." }
  ],
  "um…zu / ohne…zu / statt…zu": [
    { de: "Ich lerne viel, um die Prüfung zu bestehen.", ku: "زۆر دەخوێنم بۆ ئەوەی لە تاقیکردنەوەکە سەربکەوم." },
    { de: "Er ging weg, ohne etwas zu sagen.", ku: "ڕۆیشت بەبێ ئەوەی شتێک بڵێت." },
    { de: "Statt zu schlafen, lernte sie die ganze Nacht.", ku: "لەبری خەوتن، بە درێژایی شەو خوێندی." },
    { de: "Ich spare Geld, um ein Auto zu kaufen.", ku: "پارە کۆدەکەمەوە بۆ ئەوەی ئۆتۆمبێلێک بکڕم." },
    { de: "Sie verließ das Haus, ohne zu frühstücken.", ku: "ماڵی بەجێهێشت بەبێ ئەوەی نانی بەیانی بخوات." },
    { de: "Statt zu arbeiten, spielt er den ganzen Tag.", ku: "لەبری کارکردن، بە درێژایی ڕۆژ یاری دەکات." },
    { de: "Wir fahren früh los, um den Stau zu vermeiden.", ku: "زوو بەڕێدەکەوین بۆ ئەوەی لە قەرەباڵغی خۆ بپارێزین." },
    { de: "Er ging, ohne sich zu verabschieden.", ku: "ڕۆیشت بەبێ ماڵئاوایی." },
    { de: "Ich rufe an, um einen Termin zu machen.", ku: "پەیوەندی دەکەم بۆ ئەوەی ژووانێک دابنێم." },
    { de: "Statt zu fahren, gehen wir zu Fuß.", ku: "لەبری ئۆتۆمبێل، بە پێ دەڕۆین." }
  ],
  "Adjektivdeklination": [
    { de: "Der rote Apfel schmeckt süß.", ku: "سێوە سوورەکە تامی شیرینە." },
    { de: "Ich kaufe ein neues Auto.", ku: "ئۆتۆمبێلێکی نوێ دەکڕم." },
    { de: "Sie wohnt in einem großen Haus.", ku: "لە خانوویەکی گەورەدا دەژی." },
    { de: "Das ist eine interessante Geschichte.", ku: "ئەمە چیرۆکێکی سەرنجڕاکێشە." },
    { de: "Wir trinken kaltes Wasser.", ku: "ئاوی سارد دەخۆینەوە." },
    { de: "Der kleine Hund schläft.", ku: "سەگە بچووکەکە خەوتووە." },
    { de: "Ich mag die schöne Stadt.", ku: "شارە جوانەکەم پێ خۆشە." },
    { de: "Er trägt einen schwarzen Mantel.", ku: "پاڵتۆیەکی ڕەش لەبەری دەکات." },
    { de: "Das alte Buch ist wertvoll.", ku: "کتێبە کۆنەکە بەنرخە." },
    { de: "Sie hat lange braune Haare.", ku: "مووی درێژی قاوەیی هەیە." }
  ],
  "Genitiv": [
    { de: "Das Haus meines Vaters ist groß.", ku: "خانووی باوکم گەورەیە." },
    { de: "Wegen des schlechten Wetters bleiben wir.", ku: "بەهۆی کەش‌وهەوای خراپ دەمێنینەوە." },
    { de: "Trotz des Regens gehen wir spazieren.", ku: "سەرەڕای بارانەکە دەچینە پیاسە." },
    { de: "Die Meinung der Leute ist wichtig.", ku: "بۆچوونی خەڵک گرنگە." },
    { de: "Während des Tages arbeite ich.", ku: "لە ماوەی ڕۆژدا کار دەکەم." },
    { de: "Der Anfang des Films war langweilig.", ku: "سەرەتای فیلمەکە بێزارکەر بوو." },
    { de: "Das ist das Auto meiner Mutter.", ku: "ئەمە ئۆتۆمبێلی دایکمە." },
    { de: "Die Tür des Zimmers ist zu.", ku: "دەرگای ژوورەکە داخراوە." },
    { de: "Das Ende der Geschichte war traurig.", ku: "کۆتایی چیرۆکەکە خەمگین بوو." },
    { de: "Die Hauptstadt des Landes ist schön.", ku: "پایتەختی وڵاتەکە جوانە." }
  ],
  "Indirekte Fragen": [
    { de: "Weißt du, wo der Bahnhof ist?", ku: "دەزانیت وێستگەکە لەکوێیە؟" },
    { de: "Ich frage mich, ob er kommt.", ku: "لە خۆم دەپرسم ئایا دێت." },
    { de: "Kannst du mir sagen, wie spät es ist?", ku: "دەتوانیت پێم بڵێیت کاتژمێر چەندە؟" },
    { de: "Ich weiß nicht, was das bedeutet.", ku: "نازانم ئەمە چی دەگەیەنێت." },
    { de: "Sie fragt, warum ich traurig bin.", ku: "دەپرسێت بۆچی خەمگینم." },
    { de: "Ich möchte wissen, wann der Kurs beginnt.", ku: "دەمەوێت بزانم خولەکە کەی دەست پێدەکات." },
    { de: "Er fragt, ob das Geschäft offen ist.", ku: "دەپرسێت ئایا دوکانەکە کراوەیە." },
    { de: "Weißt du, wer das gesagt hat?", ku: "دەزانیت کێ ئەمەی گوت؟" },
    { de: "Ich frage, wie das funktioniert.", ku: "دەپرسم ئەمە چۆن کار دەکات." },
    { de: "Sag mir, wohin du gehst.", ku: "پێم بڵێ بۆ کوێ دەچیت." }
  ],
  "Konjunktionen: obwohl, wenn, als, während…": [
    { de: "Obwohl es regnet, gehe ich spazieren.", ku: "هەرچەندە باران دەبارێت، دەچمە پیاسە." },
    { de: "Wenn ich Zeit habe, besuche ich dich.", ku: "ئەگەر کاتم هەبێت، سەردانت دەکەم." },
    { de: "Als ich klein war, wohnte ich in Erbil.", ku: "کاتێک بچووک بووم، لە هەولێر دەژیام." },
    { de: "Während sie kocht, deckt er den Tisch.", ku: "لە کاتێکدا ئەو خواردن لێدەنێ، ئەو مێزەکە ئامادە دەکات." },
    { de: "Bevor ich gehe, trinke ich Kaffee.", ku: "پێش ئەوەی بڕۆم، قاوە دەخۆمەوە." },
    { de: "Nachdem wir gegessen hatten, gingen wir.", ku: "دوای ئەوەی خواردمان، ڕۆیشتین." },
    { de: "Seitdem er hier ist, bin ich glücklich.", ku: "لەو کاتەوەی لێرەیە، بەختەوەرم." },
    { de: "Obwohl er müde ist, arbeitet er weiter.", ku: "هەرچەندە ماندووە، بەردەوامە لە کارکردن." },
    { de: "Wenn das Wetter gut ist, fahren wir ans Meer.", ku: "ئەگەر کەش‌وهەوا باش بێت، دەچینە دەریا." },
    { de: "Als der Film begann, wurde es still.", ku: "کاتێک فیلمەکە دەستی پێکرد، بێدەنگی باڵی کێشا." }
  ],
  "Präpositionen mit Genitiv": [
    { de: "Während des Kurses darf man nicht reden.", ku: "لە ماوەی خولەکەدا نابێت قسە بکرێت." },
    { de: "Wegen des Problems kam er zu spät.", ku: "بەهۆی کێشەکەوە درەنگ هات." },
    { de: "Trotz der Kälte gehen wir raus.", ku: "سەرەڕای ساردی دەچینە دەرەوە." },
    { de: "Statt des Kaffees trinke ich Tee.", ku: "لەبری قاوە چا دەخۆمەوە." },
    { de: "Innerhalb einer Woche antworte ich.", ku: "لە ماوەی هەفتەیەکدا وەڵام دەدەمەوە." },
    { de: "Außerhalb der Stadt ist es ruhig.", ku: "لە دەرەوەی شارەکە ئارامە." },
    { de: "Während der Ferien reisen wir viel.", ku: "لە ماوەی پشوودا زۆر گەشت دەکەین." },
    { de: "Wegen des Sturms blieben die Schulen zu.", ku: "بەهۆی ڕەشەبادا قوتابخانەکان داخران." },
    { de: "Trotz seiner Krankheit arbeitet er.", ku: "سەرەڕای نەخۆشییەکەی کار دەکات." },
    { de: "Anstatt eines Briefes schickte sie eine E-Mail.", ku: "لەبری نامەیەک، ئیمەیڵێکی نارد." }
  ],
  "Passiv (alle Formen)": [
    { de: "Das Haus wird dieses Jahr gebaut.", ku: "خانووەکە ئەمساڵ دروست دەکرێت." },
    { de: "Das Auto wurde letzte Woche repariert.", ku: "ئۆتۆمبێلەکە هەفتەی ڕابردوو چاک کرایەوە." },
    { de: "Der Brief ist schon geschickt worden.", ku: "نامەکە پێشتر نێردراوە." },
    { de: "Die Stadt ist im Krieg zerstört worden.", ku: "شارەکە لە جەنگدا وێران کراوە." },
    { de: "Die Regeln werden klar erklärt.", ku: "یاساکان بە ڕوونی ڕوون دەکرێنەوە." },
    { de: "Das Projekt wird nächstes Jahr beendet werden.", ku: "پڕۆژەکە ساڵی داهاتوو تەواو دەکرێت." },
    { de: "Die Entscheidung wurde gestern getroffen.", ku: "بڕیارەکە دوێنێ درا." },
    { de: "Viele Bücher werden jedes Jahr verkauft.", ku: "هەموو ساڵێک کتێبی زۆر دەفرۆشرێت." },
    { de: "Das Problem ist endlich gelöst worden.", ku: "کێشەکە لەکۆتاییدا چارەسەر کرا." },
    { de: "Die Arbeit wird bald fertig sein.", ku: "کارەکە بەم زووانە تەواو دەبێت." }
  ],
  "Zustandspassiv": [
    { de: "Das Geschäft ist seit gestern geschlossen.", ku: "دوکانەکە لە دوێنێوە داخراوە." },
    { de: "Der Brief ist schon geschrieben.", ku: "نامەکە نووسراوە." },
    { de: "Alles ist für die Party vorbereitet.", ku: "هەمووشت بۆ ئاهەنگەکە ئامادەکراوە." },
    { de: "Das Fenster ist den ganzen Tag geöffnet.", ku: "پەنجەرەکە بە درێژایی ڕۆژ کراوەیە." },
    { de: "Die Arbeit ist endlich erledigt.", ku: "کارەکە لەکۆتاییدا تەواوکراوە." },
    { de: "Das Problem ist jetzt gelöst.", ku: "کێشەکە ئێستا چارەسەرکراوە." },
    { de: "Die Tür ist abgeschlossen.", ku: "دەرگاکە کلیل کراوە." },
    { de: "Der Tisch ist schon gedeckt.", ku: "مێزەکە ئامادەکراوە." },
    { de: "Das Auto ist gut repariert.", ku: "ئۆتۆمبێلەکە باش چاککراوەتەوە." },
    { de: "Die Hausaufgaben sind gemacht.", ku: "ئەرکەکانی ماڵەوە کراون." }
  ],
  "Passiv mit Modalverben": [
    { de: "Das muss heute gemacht werden.", ku: "ئەمە دەبێت ئەمڕۆ بکرێت." },
    { de: "Das Auto kann repariert werden.", ku: "ئۆتۆمبێلەکە دەکرێت چاک بکرێتەوە." },
    { de: "Solche Fehler sollten vermieden werden.", ku: "دەبێت خۆ لەو جۆرە هەڵانە بپارێزرێت." },
    { de: "Hier darf nicht geraucht werden.", ku: "لێرە نابێت جگەرە بکێشرێت." },
    { de: "Die Regeln müssen befolgt werden.", ku: "دەبێت یاساکان پەیڕەو بکرێن." },
    { de: "Das kann nicht geändert werden.", ku: "ئەمە ناتوانرێت بگۆڕدرێت." },
    { de: "Die Aufgabe muss bis morgen erledigt werden.", ku: "ئەرکەکە دەبێت تا سبەینێ تەواو بکرێت." },
    { de: "Das Problem kann gelöst werden.", ku: "کێشەکە دەکرێت چارەسەر بکرێت." },
    { de: "Die Tür sollte geschlossen werden.", ku: "دەبێت دەرگاکە داخرێت." },
    { de: "Diese Frage muss beantwortet werden.", ku: "دەبێت ئەم پرسیارە وەڵام بدرێتەوە." }
  ],
  "Konjunktiv I (indirekte Rede)": [
    { de: "Er sagt, er sei sehr beschäftigt.", ku: "دەڵێت کە زۆر سەرقاڵە." },
    { de: "Sie meint, sie habe keine Zeit.", ku: "پێیوایە کاتی نییە." },
    { de: "Man sagt, das Wetter werde besser.", ku: "دەگوترێت کەش‌وهەوا باشتر دەبێت." },
    { de: "Der Minister erklärt, er kenne das Problem.", ku: "وەزیر ڕادەگەیەنێت کە کێشەکە دەناسێت." },
    { de: "Er behauptet, er sei unschuldig.", ku: "بانگەشە دەکات کە بێتاوانە." },
    { de: "Sie sagte, sie komme später.", ku: "گوتی دواتر دێت." },
    { de: "Die Zeitung schreibt, die Preise seien gestiegen.", ku: "ڕۆژنامەکە دەنووسێت نرخەکان بەرز بوونەتەوە." },
    { de: "Er sagt, er habe alles verstanden.", ku: "دەڵێت هەمووی تێگەیشتووە." },
    { de: "Sie meint, das sei nicht wichtig.", ku: "پێیوایە ئەمە گرنگ نییە." },
    { de: "Man berichtet, der Unfall sei schwer gewesen.", ku: "ڕاپۆرت دەدرێت کە ڕووداوەکە سەخت بووە." }
  ],
  "Konjunktiv II (fortgeschritten)": [
    { de: "Ich hätte dir geholfen, wenn du gefragt hättest.", ku: "یارمەتیم دەدایت، ئەگەر داوات بکردایە." },
    { de: "Wenn ich mehr Zeit gehabt hätte, wäre ich gekommen.", ku: "ئەگەر کاتی زیاترم هەبووایە، دەهاتم." },
    { de: "Das wäre besser gewesen.", ku: "ئەمە باشتر دەبوو." },
    { de: "Ich hätte das nie gesagt.", ku: "ئەمەم هەرگیز نەدەگوت." },
    { de: "Wärst du früher gekommen, hättest du ihn getroffen.", ku: "ئەگەر زووتر بهاتبووایت، دەتدی." },
    { de: "Sie hätte die Prüfung bestehen können.", ku: "دەیتوانی لە تاقیکردنەوەکە سەربکەوێت." },
    { de: "An deiner Stelle hätte ich anders gehandelt.", ku: "لە جێی تۆ بە جۆرێکی تر هەڵسوکەوتم دەکرد." },
    { de: "Es hätte schlimmer sein können.", ku: "دەکرا خراپتر بوایە." },
    { de: "Wenn er ehrlich gewesen wäre, hätte ich ihm vertraut.", ku: "ئەگەر ڕاستگۆ بوایە، متمانەم پێدەکرد." },
    { de: "Ich wäre fast zu spät gekommen.", ku: "خەریک بوو درەنگ بگەم." }
  ],
  "Nominalisierung": [
    { de: "Das Lernen einer Sprache braucht Zeit.", ku: "فێربوونی زمانێک کات دەوێت." },
    { de: "Beim Lesen entspanne ich mich.", ku: "لە کاتی خوێندنەوەدا حەوانەوەم بۆ دەبێت." },
    { de: "Nach der Ankunft ruhten wir uns aus.", ku: "دوای گەیشتن حەوانەوەمان کرد." },
    { de: "Das Rauchen ist hier verboten.", ku: "جگەرەکێشان لێرە قەدەغەیە." },
    { de: "Vor dem Schlafen lese ich ein Buch.", ku: "پێش خەوتن کتێبێک دەخوێنمەوە." },
    { de: "Durch das Üben wird man besser.", ku: "بەهۆی مەشقکردنەوە مرۆڤ باشتر دەبێت." },
    { de: "Das Schwimmen macht mir Spaß.", ku: "مەلەکردن پێم خۆشە." },
    { de: "Beim Kochen höre ich Musik.", ku: "لە کاتی خواردن لێناندا گوێ لە مۆسیقا دەگرم." },
    { de: "Das Reisen erweitert den Horizont.", ku: "گەشتکردن دیدگا فراوان دەکات." },
    { de: "Nach dem Essen gehen wir spazieren.", ku: "دوای خواردن دەچینە پیاسە." }
  ],
  "Partizip I": [
    { de: "Das spielende Kind lacht laut.", ku: "منداڵە یاریکەرەکە بە دەنگی بەرز پێدەکەنێت." },
    { de: "Die schlafende Katze liegt auf dem Sofa.", ku: "پشیلە خەوتووەکە لەسەر قەنەفەکەیە." },
    { de: "Lachend kam sie ins Zimmer.", ku: "بەپێکەنینەوە هاتە ژوورەوە." },
    { de: "Die singende Frau ist meine Tante.", ku: "ژنە گۆرانیبێژەکە پوورمە." },
    { de: "Ein weinendes Baby braucht seine Mutter.", ku: "کۆرپەیەکی گریان دایکی دەوێت." },
    { de: "In der kommenden Woche habe ich frei.", ku: "لە هەفتەی داهاتوودا پشوودارم." },
    { de: "Der wartende Mann wurde ungeduldig.", ku: "پیاوە چاوەڕوانەکە بێ ئارام بوو." },
    { de: "Das brennende Haus war gefährlich.", ku: "خانووە سووتاوەکە مەترسیدار بوو." },
    { de: "Sie sah die fallenden Blätter.", ku: "گەڵا کەوتووەکانی بینی." },
    { de: "Der lächelnde Lehrer begrüßte uns.", ku: "مامۆستا زەردەخەنەدارەکە بەخێرهاتنی کردین." }
  ],
  "Partizip II als Adjektiv": [
    { de: "Die geöffnete Tür ließ kalte Luft herein.", ku: "دەرگا کراوەکە هەوای سارد هێنایە ژوورەوە." },
    { de: "Er fährt ein gebrauchtes Auto.", ku: "ئۆتۆمبێلێکی بەکارهاتوو لێدەخوڕێت." },
    { de: "Das geschriebene Wort bleibt.", ku: "وشە نووسراوەکە دەمێنێتەوە." },
    { de: "Die gekochte Suppe schmeckt gut.", ku: "شۆربا لێنراوەکە تامی خۆشە." },
    { de: "Ein verlorenes Spiel ist nicht das Ende.", ku: "یارییەکی دۆڕاو کۆتایی نییە." },
    { de: "Die reparierte Uhr funktioniert wieder.", ku: "کاتژمێرە چاککراوەکە دیسان کار دەکات." },
    { de: "Das gebackene Brot riecht herrlich.", ku: "نانە کراوەکە بۆنی خۆشە." },
    { de: "Die bezahlte Rechnung liegt auf dem Tisch.", ku: "پسوولە دراوەکە لەسەر مێزەکەیە." },
    { de: "Ein gut geplanter Tag ist produktiv.", ku: "ڕۆژێکی باش پلاندانراو بەردارە." },
    { de: "Die versteckten Schlüssel waren im Garten.", ku: "کلیلە شاراوەکان لە باخچەدا بوون." }
  ],
  "Erweiterte Relativsätze": [
    { de: "Der Tag, an dem wir uns trafen, war besonders.", ku: "ئەو ڕۆژەی یەکترمان بینی، تایبەت بوو." },
    { de: "Das Thema, über das wir sprachen, war wichtig.", ku: "ئەو بابەتەی باسمان کرد، گرنگ بوو." },
    { de: "Das ist alles, was du wissen musst.", ku: "ئەمە هەمووی ئەوەیە کە دەبێت بیزانیت." },
    { de: "Die Firma, bei der ich arbeite, ist groß.", ku: "ئەو کۆمپانیایەی تێیدا کار دەکەم، گەورەیە." },
    { de: "Der Grund, aus dem er ging, ist unklar.", ku: "ئەو هۆکارەی لەبەری ڕۆیشت، ڕوون نییە." },
    { de: "Die Stadt, in die wir reisen, ist alt.", ku: "ئەو شارەی بۆی گەشت دەکەین، کۆنە." },
    { de: "Der Mann, mit dem sie spricht, ist Arzt.", ku: "ئەو پیاوەی لەگەڵی قسە دەکات، پزیشکە." },
    { de: "Das ist der Ort, wo ich geboren wurde.", ku: "ئەمە ئەو شوێنەیە کە تێیدا لەدایک بووم." },
    { de: "Die Leute, für die ich arbeite, sind fair.", ku: "ئەو کەسانەی بۆیان کار دەکەم، دادپەروەرن." },
    { de: "Das Auto, dessen Motor kaputt ist, steht hier.", ku: "ئەو ئۆتۆمبێلەی بزوێنەرەکەی خراپ بووە، لێرە ڕاوەستاوە." }
  ],
  "Futur II": [
    { de: "Bis morgen werde ich die Arbeit beendet haben.", ku: "تا سبەینێ کارەکە تەواو دەکەم." },
    { de: "Er wird bis dann angekommen sein.", ku: "تا ئەو کاتە دەگات." },
    { de: "Sie wird es bestimmt vergessen haben.", ku: "بەدڵنیاییەوە بیری چووە." },
    { de: "Bis nächstes Jahr werden wir umgezogen sein.", ku: "تا ساڵی داهاتوو ماڵمان گواستووەتەوە." },
    { de: "Er wird das Buch schon gelesen haben.", ku: "ئەو کتێبەکەی خوێندووەتەوە (گریمانە)." },
    { de: "Bis Freitag werden sie zurückgekommen sein.", ku: "تا هەینی دەگەڕێنەوە." },
    { de: "Ich werde bis dahin alles vorbereitet haben.", ku: "تا ئەو کاتە هەمووشت ئامادە دەکەم." },
    { de: "Sie werden die Prüfung bestanden haben.", ku: "لە تاقیکردنەوەکە سەرکەوتوون (گریمانە)." },
    { de: "Wir werden uns wohl getroffen haben.", ku: "لەوانەیە یەکترمان بینیبێت." },
    { de: "Bis zum Abend wird er fertig sein.", ku: "تا ئێوارە تەواو دەبێت." }
  ],
  "Kausale, konsekutive, konzessive Sätze": [
    { de: "Da es spät war, gingen wir nach Hause.", ku: "لەبەر ئەوەی درەنگ بوو، چووینەوە ماڵەوە." },
    { de: "Es war so kalt, dass wir drinnen blieben.", ku: "ئەوەندە سارد بوو کە لە ژوورەوە ماینەوە." },
    { de: "Obwohl er reich ist, lebt er einfach.", ku: "هەرچەندە دەوڵەمەندە، بە سادەیی دەژی." },
    { de: "Weil sie krank war, blieb sie im Bett.", ku: "چونکە نەخۆش بوو، لە جێگادا مایەوە." },
    { de: "Er lernte fleißig, sodass er bestand.", ku: "بە کۆشش خوێندی، بۆیە سەرکەوت." },
    { de: "Trotzdem gab er nicht auf.", ku: "لەگەڵ ئەوەشدا واز نەهێنا." },
    { de: "Da ich müde war, ging ich früh schlafen.", ku: "لەبەر ئەوەی ماندوو بووم، زوو چووم بخەوم." },
    { de: "Das Wetter war so schön, dass wir spazieren gingen.", ku: "کەش‌وهەوا ئەوەندە خۆش بوو کە چووینە پیاسە." },
    { de: "Obwohl es teuer war, kaufte sie es.", ku: "هەرچەندە گران بوو، کڕی." },
    { de: "Er sprach leise, sodass ihn niemand hörte.", ku: "بە دەنگی نزم قسەی کرد، بۆیە کەس گوێی لێ نەبوو." }
  ],
  "Funktionsverbgefüge": [
    { de: "Wir müssen eine Entscheidung treffen.", ku: "دەبێت بڕیارێک بدەین." },
    { de: "Sie stellt seine Ehrlichkeit in Frage.", ku: "گومان لە ڕاستگۆییەکەی دەکات." },
    { de: "Ich stehe dir zur Verfügung.", ku: "بەردەستی تۆم." },
    { de: "Bildung spielt eine wichtige Rolle.", ku: "پەروەردە ڕۆڵێکی گرنگ دەگێڕێت." },
    { de: "Bitte nimm Rücksicht auf die anderen.", ku: "تکایە ڕەچاوی ئەوانی تر بکە." },
    { de: "Er nimmt meine Hilfe in Anspruch.", ku: "سوود لە یارمەتیم وەردەگرێت." },
    { de: "Die Regierung trifft neue Maßnahmen.", ku: "حکوومەت ڕێوشوێنی نوێ دەگرێتەبەر." },
    { de: "Das bringt mich zum Nachdenken.", ku: "ئەمە وام لێدەکات بیر بکەمەوە." },
    { de: "Wir kommen zu einem guten Ergebnis.", ku: "دەگەینە ئەنجامێکی باش." },
    { de: "Er setzt seinen Plan in die Tat um.", ku: "پلانەکەی جێبەجێ دەکات." }
  ],
  "Verben/Adjektive/Nomen mit Präpositionen": [
    { de: "Ich warte auf den Bus.", ku: "چاوەڕوانی پاس دەکەم." },
    { de: "Ich denke oft an meine Familie.", ku: "زۆرجار بیری خێزانەکەم دەکەمەوە." },
    { de: "Sie freut sich auf das Wochenende.", ku: "بە کۆتایی هەفتە دڵخۆشە." },
    { de: "Er interessiert sich für Politik.", ku: "ئارەزووی سیاسەت دەکات." },
    { de: "Ich bin stolz auf meine Arbeit.", ku: "شانازی بە کارەکەم دەکەم." },
    { de: "Sie hat Angst vor Hunden.", ku: "لە سەگ دەترسێت." },
    { de: "Wir sprechen über das Problem.", ku: "دەربارەی کێشەکە قسە دەکەین." },
    { de: "Er gehört zu meiner Familie.", ku: "سەر بە خێزانەکەمە." },
    { de: "Ich bin mit dem Ergebnis zufrieden.", ku: "لە ئەنجامەکە ڕازیم." },
    { de: "Das hängt von dir ab.", ku: "ئەمە بە تۆوە بەندە." }
  ],
  "Wortbildung: Präfixe & Suffixe": [
    { de: "Aus glücklich wird das Glück.", ku: "لە «glücklich»ەوە دەبێتە بەختەوەری." },
    { de: "Die Freiheit ist ein wichtiges Recht.", ku: "ئازادی مافێکی گرنگە." },
    { de: "Das ist leider unmöglich.", ku: "بەداخەوە ئەمە ناگونجاوە." },
    { de: "Die Arbeit macht mir Freude.", ku: "کارەکە خۆشی پێ دەبەخشم." },
    { de: "Seine Krankheit war nicht schlimm.", ku: "نەخۆشییەکەی سەخت نەبوو." },
    { de: "Der Leser versteht den Text gut.", ku: "خوێنەرەکە دەقەکە باش تێدەگات." },
    { de: "Die Möglichkeit besteht noch.", ku: "ئەگەرەکە هێشتا هەیە." },
    { de: "Unfreundlich zu sein ist nicht gut.", ku: "نادۆستانە بوون باش نییە." },
    { de: "Die Schönheit der Natur ist groß.", ku: "جوانی سروشت گەورەیە." },
    { de: "Die Verbindung ist sehr schlecht.", ku: "پەیوەندییەکە زۆر خراپە." }
  ],
};
