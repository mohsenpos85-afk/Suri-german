export const GRAMMAR = {
  A1: [
    { de: "Personalpronomen", ku: "جێناوی کەسی", icon: "✺",
      exp: "جێناوەکان: ich (من)، du (تۆ)، er/sie/es (ئەو)، wir (ئێمە)، ihr (ئێوە)، sie (ئەوان)، Sie (ئێوەی فەرمی).",
      tr: "Kişi Zamirleri", expTr: "Zamirler: ich (ben), du (sen), er/sie/es (o), wir (biz), ihr (siz), sie (onlar), Sie (siz - resmi).",
      en: "Personal pronouns", expEn: "Pronouns: ich (I), du (you), er/sie/es (he/she/it), wir (we), ihr (you all), sie (they), Sie (you - formal).",
      ar: "ضمائر الشخص", uk: "Особові займенники", fa: "ضمایر شخصی", expAr: "الضمائر: ich (أنا)، du (أنت)، er/sie/es (هو/هي/هو-محايد)، wir (نحن)، ihr (أنتم)، sie (هم)، Sie (أنتم - رسمي).", expUk: "Займенники: ich (я), du (ти), er/sie/es (він/вона/воно), wir (ми), ihr (ви), sie (вони), Sie (Ви — ввічлива форма).", expFa: "ضمایرها: ich (من)، du (تو)، er/sie/es (او)، wir (ما)، ihr (شما)، sie (آن‌ها)، Sie (شما — رسمی).",
      ex: [ { de: "Ich bin Student.", ku: "من خوێندکارم.", tr: "Ben öğrenciyim.", en: "I am a student.", ar: "أنا طالب.", uk: "Я студент.", fa: "من دانشجو هستم." ,"es":"Soy estudiante."}, { de: "Wir lernen Deutsch.", ku: "ئێمە ئەڵمانی فێردەبین.", tr: "Almanca öğreniyoruz.", en: "We are learning German.", ar: "نحن نتعلم الألمانية.", uk: "Ми вивчаємо німецьку.", fa: "ما آلمانی یاد می‌گیریم." ,"es":"Estamos aprendiendo alemán."}, { de: "Sie ist Lehrerin.", ku: "ئەو (مێ) مامۆستایە.", tr: "O (dişil) öğretmen.", en: "She is a teacher.", ar: "هي معلمة.", uk: "Вона вчителька.", fa: "او (مؤنث) معلم است." ,"es":"Ella es una maestra."}, { de: "Er kommt aus Erbil.", ku: "ئەو خەڵکی هەولێرە.", tr: "O Erbil'den.", en: "He is from Erbil.", ar: "هو من أربيل.", uk: "Він з Ербіля.", fa: "او اهل اربیل است." ,"es":"Es de Erbil."}, { de: "Ihr seid willkommen.", ku: "ئێوە بەخێربێن.", tr: "Siz hoş geldiniz.", en: "You (all) are welcome.", ar: "أنتم مرحب بكم.", uk: "Ласкаво просимо.", fa: "شما خوش آمدید." ,"es":"De nada."}, { de: "Es ist kalt heute.", ku: "ئەمڕۆ ساردە.", tr: "Bugün soğuk.", en: "It is cold today.", ar: "الجو بارد اليوم.", uk: "Сьогодні холодно.", fa: "امروز هوا سرد است." ,"es":"Hace frío hoy."} ] ,"es":"Pronombres personales","expEs":"Nombres: ich (I), du (you), er/sie/es (he/she/it), wir (we), ihr (you alls), sie (they), Sie (you - formal)."},
    { de: "sein und haben", ku: "کرداری «بوون» و «هەبوون»", icon: "◈",
      exp: "sein: ich bin، du bist، er ist، wir sind، ihr seid، sie sind. haben: ich habe، du hast، er hat، wir haben، ihr habt، sie haben. زۆر گرنگن چونکە بنەمای زۆر شتن.",
      tr: "«olmak» ve «sahip olmak» Fiilleri", expTr: "sein: ich bin, du bist, er ist, wir sind, ihr seid, sie sind. haben: ich habe, du hast, er hat, wir haben, ihr habt, sie haben. Pek çok şeyin temeli olduğu için çok önemlidirler.",
      en: "\"sein\" and \"haben\" (to be / to have)", expEn: "sein (to be): ich bin, du bist, er ist, wir sind, ihr seid, sie sind. haben (to have): ich habe, du hast, er hat, wir haben, ihr habt, sie haben. They are very important because they form the basis of many things.",
      ar: "فعلا «sein» و«haben» (الكينونة والامتلاك)", uk: "Дієслова «sein» і «haben» (бути / мати)", fa: "فعل‌های «sein» و «haben» (بودن / داشتن)", expAr: "sein (يكون): ich bin، du bist، er ist، wir sind، ihr seid، sie sind. haben (يملك): ich habe، du hast، er hat، wir haben، ihr habt، sie haben. مهمّان جدا لأنهما أساس أشياء كثيرة.", expUk: "sein (бути): ich bin, du bist, er ist, wir sind, ihr seid, sie sind. haben (мати): ich habe, du hast, er hat, wir haben, ihr habt, sie haben. Вони дуже важливі, бо є основою багатьох речей.", expFa: "sein (بودن): ich bin، du bist، er ist، wir sind، ihr seid، sie sind. haben (داشتن): ich habe، du hast، er hat، wir haben، ihr habt، sie haben. این‌ها بسیار مهم‌اند چون پایهٔ بسیاری از چیزها هستند.",
      ex: [ { de: "Ich bin müde.", ku: "ماندووم.", tr: "Yorgunum.", en: "I am tired.", ar: "أنا متعب.", uk: "Я втомився.", fa: "من خسته‌ام." ,"es":"Estoy cansado."}, { de: "Du hast Zeit.", ku: "کاتت هەیە.", tr: "Zamanın var.", en: "You have time.", ar: "لديك وقت.", uk: "У тебе є час.", fa: "تو وقت داری." ,"es":"Tienes tiempo."}, { de: "Wir sind hier.", ku: "ئێمە لێرەین.", tr: "Biz buradayız.", en: "We are here.", ar: "نحن هنا.", uk: "Ми тут.", fa: "ما اینجا هستیم." ,"es":"Estamos aquí."}, { de: "Er ist mein Bruder.", ku: "ئەو برامە.", tr: "O benim kardeşim.", en: "He is my brother.", ar: "هو أخي.", uk: "Він мій брат.", fa: "او برادر من است." ,"es":"Es mi hermano."}, { de: "Sie hat ein Auto.", ku: "ئەو ئۆتۆمبێلێکی هەیە.", tr: "Onun arabası var.", en: "She has a car.", ar: "لديها سيارة.", uk: "У неї є машина.", fa: "او یک ماشین دارد." ,"es":"Tiene un coche."}, { de: "Ihr seid spät.", ku: "ئێوە درەنگن.", tr: "Siz geç kaldınız.", en: "You (all) are late.", ar: "أنتم متأخرون.", uk: "Ви запізнилися.", fa: "شما دیر کرده‌اید." ,"es":"Llegan tarde."} ] ,"es":"\"sein\" y \"haben\" (ser / tener)","expEs":"Sein (ser): ich bin, du bist, er ist, wir sind, ihr seid, sie sind. haben (tener): ich habe, du hast, er hat, wir haben, ihr habt, sie haben. Son muy importantes porque forman la base de muchas cosas."},
    { de: "Präsens — regelmäßige Verben", ku: "کاتی ئێستا — کرداری ڕێکوپێک", icon: "▸",
      exp: "ڕەگی کردار + کۆتایی: ich -e، du -st، er/sie/es -t، wir -en، ihr -t، sie/Sie -en. نموونە: lernen → ich lerne.",
      tr: "Geniş Zaman — Düzenli Fiiller", expTr: "Fiil kökü + ek: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Örnek: lernen → ich lerne.",
      en: "Present tense — regular verbs", expEn: "Verb stem + ending: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Example: lernen → ich lerne.",
      ar: "المضارع — الأفعال المنتظمة", uk: "Теперішній час — правильні дієслова", fa: "زمان حال — افعال باقاعده", expAr: "جذر الفعل + النهاية: ich -e، du -st، er/sie/es -t، wir -en، ihr -t، sie/Sie -en. مثال: lernen ← ich lerne.", expUk: "Основа дієслова + закінчення: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Приклад: lernen → ich lerne.", expFa: "ریشهٔ فعل + پایانه: ich -e، du -st، er/sie/es -t، wir -en، ihr -t، sie/Sie -en. مثال: lernen ← ich lerne.",
      ex: [ { de: "ich lerne", ku: "فێردەبم", tr: "öğreniyorum", en: "I learn / I am learning", ar: "أنا أتعلّم", uk: "я вчуся / я навчаюся", fa: "من یاد می‌گیرم" ,"es":"Yo aprendo / Yo estoy aprendiendo"}, { de: "du lernst", ku: "تۆ فێردەبیت", tr: "sen öğreniyorsun", en: "you learn / you are learning", ar: "أنت تتعلّم", uk: "ти вчишся", fa: "تو یاد می‌گیری" ,"es":"aprendes / estás aprendiendo"}, { de: "wir lernen", ku: "ئێمە فێردەبین", tr: "biz öğreniyoruz", en: "we learn / we are learning", ar: "نحن نتعلّم", uk: "ми вчимося", fa: "ما یاد می‌گیریم" ,"es":"aprendemos / estamos aprendiendo"}, { de: "er spielt Fußball.", ku: "ئەو تۆپی پێ یاری دەکات.", tr: "O futbol oynuyor.", en: "He plays football.", ar: "هو يلعب كرة القدم.", uk: "Він грає у футбол.", fa: "او فوتبال بازی می‌کند." ,"es":"Juega al fútbol."}, { de: "ihr arbeitet viel.", ku: "ئێوە زۆر کار دەکەن.", tr: "Siz çok çalışıyorsunuz.", en: "You (all) work a lot.", ar: "أنتم تعملون كثيرا.", uk: "Ви багато працюєте.", fa: "شما زیاد کار می‌کنید." ,"es":"Ustedes (todos) trabajan mucho."}, { de: "sie wohnen hier.", ku: "ئەوان لێرە نیشتەجێن.", tr: "Onlar burada yaşıyor.", en: "They live here.", ar: "هم يسكنون هنا.", uk: "Вони тут живуть.", fa: "آن‌ها اینجا زندگی می‌کنند." ,"es":"Viven aquí."} ] ,"es":"Tiempo presente — verbos regulares","expEs":"• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •"},
    { de: "Artikel: der, die, das", ku: "ئارتیکڵ (der/die/das)", icon: "✦",
      exp: "هەموو ناوێک لە ئەڵمانیدا ڕەگەزی هەیە: نێر «der»، مێ «die»، بێلایەن «das». ئارتیکڵ پێشتر دێت و دەبێت لەگەڵ ناوەکەدا فێری بیت، چونکە هەمیشە بە لۆژیک نییە. لای خوارەوە یاسا و نموونەکان بەپێی هەر ئارتیکڵێک جیاکراونەتەوە.",
      tr: "Artikel: der, die, das", expTr: "Almancada her ismin bir cinsiyeti vardır: eril «der», dişil «die», yansız «das». Artikel ismin önüne gelir ve isimle birlikte öğrenilmelidir, çünkü her zaman mantıklı değildir. Aşağıda her artikele göre ayrılmış kurallar ve örnekler bulunmaktadır.",
      en: "Articles: der, die, das", expEn: "In German, every noun has a gender: masculine «der», feminine «die», neuter «das». The article comes before the noun and must be learned together with it, since it is not always logical. Below, the rules and examples are separated by each article.",
      ar: "أدوات التعريف: der, die, das", uk: "Артиклі: der, die, das", fa: "حروف تعریف: der, die, das", expAr: "في اللغة الألمانية لكل اسم جنس نحوي: مذكر «der»، مؤنث «die»، محايد «das». تأتي الأداة قبل الاسم ويجب تعلّمها مع الاسم نفسه، لأن الأمر ليس منطقيا دائما. أدناه القواعد والأمثلة مقسّمة حسب كل أداة.", expUk: "У німецькій мові кожен іменник має рід: чоловічий «der», жіночий «die», середній «das». Артикль стоїть перед іменником, і його треба вчити разом з ним, бо це не завжди логічно. Нижче правила та приклади розподілені за кожним артиклем.", expFa: "در زبان آلمانی هر اسمی جنسیت دارد: مذکر «der»، مؤنث «die»، خنثی «das». حرف تعریف پیش از اسم می‌آید و باید همراه با خود اسم یاد گرفته شود، چون همیشه منطقی نیست. در ادامه، قواعد و مثال‌ها بر اساس هر حرف تعریف جدا شده‌اند.",
      groups: [
        { art: "der", emoji: "🔵", es: "Masculino (männlich)", uk: "Чоловічий (männlich)", fa: "مذکر (männlich)", rulesUk: ["Дні тижня, місяці, пори року","Більшість професій","Закінчення: -er, -en, -el (часто)","Більшість осіб чоловічої статі"], rulesFa: ["روزهای هفته، ماه‌ها، فصل‌ها","بیشتر مشاغل","پایانه‌ها: -er، -en، -el (اغلب)","بیشتر افراد مذکر"], tr: "Eril (männlich)", ku: "نێر (männlich)", color: "#2f6f8f", rules: ["ڕۆژەکانی هەفتە، مانگەکان، وەرزەکان", "زۆربەی پیشەکان", "کۆتاییەکان: -er، -en، -el (زۆرجار)", "زۆربەی کەسانی نێر"], rulesTr: ["Haftanın günleri, aylar, mevsimler", "Çoğu meslek", "Sonekler: -er, -en, -el (çoğunlukla)", "Çoğu erkek kişi"], rulesEn: ["Days of the week, months, seasons", "Most professions", "Endings: -er, -en, -el (often)", "Most male persons"], rulesAr: ["أيام الأسبوع، الأشهر، الفصول", "معظم المهن", "اللواحق: -er، -en، -el (غالبًا)", "معظم الأشخاص الذكور"], words: [["der Mann","پیاو","adam","man","رجل","чоловік","مرد","hombre"],["der Vater","باوک","baba","father","أب","батько","پدر","padre"],["der Sohn","کوڕ","oğul","son","ابن","син","پسر","hijo"],["der Bruder","برا","erkek kardeş","brother","أخ","брат","برادر","hermano"],["der Lehrer","مامۆستا","öğretmen","teacher","معلم","вчитель","معلم","profesor"],["der Arzt","پزیشک","doktor","doctor","طبيب","лікар","پزشک","doctor"],["der Student","خوێندکار","öğrenci","student","طالب","студент","دانشجو","estudiante"],["der Fahrer","شۆفێر","şoför","driver","سائق","водій","راننده","controlador"],["der Bäcker","نانەوا","fırıncı","baker","خبّاز","пекар","نانوا","panadero"],["der Computer","کۆمپیوتەر","bilgisayar","computer","حاسوب","комп'ютер","رایانه","ordenador"],["der Tisch","مێز","masa","table","طاولة","стіл","میز","Cuadro"],["der Stuhl","کورسی","sandalye","chair","كرسي","стілець","صندلی","silla"],["der Fernseher","تەلەفزیۆن","televizyon","television","تلفاز","телевізор","تلویزیون","televisión"],["der Kühlschrank","بەفرگر / سەلاجە","buzdolabı","refrigerator","ثلاجة","холодильник","یخچال","nevera"],["der Montag","دووشەممە","pazartesi","Monday","الاثنين","понеділок","دوشنبه","Lunes"],["der Dienstag","سێشەممە","salı","Tuesday","الثلاثاء","вівторок","سه‌شنبه","Martes"],["der Mittwoch","چوارشەممە","çarşamba","Wednesday","الأربعاء","середа","چهارشنبه","Miércoles"],["der Januar","ژانویە","ocak","January","يناير","січень","ژانویه","Enero"],["der Februar","شوبات","şubat","February","فبراير","лютий","فوریه","Febrero"],["der Sommer","هاوین","yaz","summer","الصيف","літо","تابستان","verano"],["der Winter","زستان","kış","winter","الشتاء","зима","زمستان","invierno"]] ,"rulesEs":["Días de la semana, meses, estaciones","La mayoría de las profesiones","Finales: -er, -en, -el (a menudo)","La mayoría de los hombres"]},
        { art: "die", emoji: "🔴", es: "Femenino (feminin)", uk: "Жіночий (feminin)", fa: "مؤنث (feminin)", rulesUk: ["Закінчення: -e, -ung, -heit, -keit, -ion, -schaft, -ie","Більшість осіб жіночої статі","Більшість міст і предметів"], rulesFa: ["پایانه‌ها: -e، -ung، -heit، -keit، -ion، -schaft، -ie","بیشتر افراد مؤنث","بیشتر شهرها و اشیاء"], tr: "Dişil (feminin)", ku: "مێ (feminin)", color: "#b8412e", rules: ["کۆتاییەکان: -e، -ung، -heit، -keit، -ion، -schaft، -ie", "زۆربەی کەسانی مێ", "زۆربەی شار و شتەکان"], rulesTr: ["Sonekler: -e, -ung, -heit, -keit, -ion, -schaft, -ie", "Çoğu dişi kişi", "Çoğu şehir ve nesne"], rulesEn: ["Endings: -e, -ung, -heit, -keit, -ion, -schaft, -ie", "Most female persons", "Most cities and objects"], rulesAr: ["اللواحق: -e، -ung، -heit، -keit، -ion، -schaft، -ie", "معظم الأشخاص الإناث", "معظم المدن والأشياء"], words: [["die Frau","ژن","kadın","woman","امرأة","жінка","زن","mujer"],["die Mutter","دایک","anne","mother","أم","мати","مادر","madre"],["die Tochter","کچ","kız","daughter","ابنة","донька","دختر","hija"],["die Schwester","خوشک","kız kardeş","sister","أخت","сестра","خواهر","hermana"],["die Lehrerin","مامۆستا (ژن)","öğretmen (kadın)","teacher (female)","معلمة","вчителька","معلم (زن)","Profesora (mujeres)"],["die Ärztin","پزیشک (ژن)","doktor (kadın)","doctor (female)","طبيبة","лікарка","پزشک (زن)","Doctora (mujeres)"],["die Lampe","چرا / لامپە","lamba","lamp","مصباح","лампа","لامپ","lámpara"],["die Tür","دەرگا","kapı","door","باب","двері","در","puerta"],["die Schule","قوتابخانە","okul","school","مدرسة","школа","مدرسه","escuela"],["die Stadt","شار","şehir","city","مدينة","місто","شهر","ciudad"],["die Wohnung","ئەپارتمان / نیشتەجێ","daire","apartment","شقة","квартира","آپارتمان","apartamento"],["die Küche","چێشتخانە","mutfak","kitchen","مطبخ","кухня","آشپزخانه","cocina"],["die Straße","شەقام","sokak","street","شارع","вулиця","خیابان","calle"],["die Prüfung","تاقیکردنەوە","sınav","exam","امتحان","іспит","امتحان","examen"],["die Zeitung","ڕۆژنامە","gazete","newspaper","جريدة","газета","روزنامه","periódico"],["die Meinung","بۆچوون","görüş","opinion","رأي","думка","نظر","Dictamen"],["die Freiheit","ئازادی","özgürlük","freedom","حرية","свобода","آزادی","libertad"],["die Möglichkeit","دەرفەت / ئەگەر","olasılık / imkân","possibility","إمكانية","можливість","امکان","posibilidad"],["die Freundschaft","هاوڕێیەتی","arkadaşlık","friendship","صداقة","дружба","دوستی","amistad"],["die Nation","نەتەوە","millet","nation","أمة","нація","ملت","nación"],["die Situation","بارودۆخ","durum","situation","وضع / حالة","ситуація","وضعیت","situación"],["die Biologie","زیندەزانی","biyoloji","biology","علم الأحياء","біологія","زیست‌شناسی","biología"],["die Musik","مۆسیقا","müzik","music","موسيقى","музика","موسیقی","música"]] ,"rulesEs":["Fin: -e, -ung, -heit, -keit, -ion, -schaft, -ie","La mayoría de las mujeres","La mayoría de las ciudades y objetos"]},
        { art: "das", emoji: "🟡", es: "Neutro (neutral)", uk: "Середній (neutral)", fa: "خنثی (neutral)", rulesUk: ["Закінчення: -chen, -lein, -ment, -um","Дієслова, вжиті як іменники","Діти та предмети"], rulesFa: ["پایانه‌ها: -chen، -lein، -ment، -um","افعالِ به‌کاررفته به‌عنوان اسم","کودکان و اشیاء"], tr: "Nötr (neutral)", ku: "بێلایەن (neutral)", color: "#c8922a", rules: ["کۆتاییەکان: -chen، -lein، -ment، -um", "کردار وەک ناو", "منداڵ و شتەکان"], rulesTr: ["Sonekler: -chen, -lein, -ment, -um", "İsim olarak kullanılan fiiller", "Çocuklar ve nesneler"], rulesEn: ["Endings: -chen, -lein, -ment, -um", "Verbs used as nouns", "Children and objects"], rulesAr: ["اللواحق: -chen، -lein، -ment، -um", "الأفعال المستخدمة كأسماء", "الأطفال والأشياء"], words: [["das Kind","منداڵ","çocuk","child","طفل","дитина","کودک","niño"],["das Baby","کۆرپە","bebek","baby","رضيع","немовля","نوزاد","bebé"],["das Mädchen","کچ (بچووک)","kız (küçük)","girl (young)","فتاة (صغيرة)","дівчинка","دختر (کوچک)","niña (joven)"],["das Haus","ماڵ / خانوو","ev","house","بيت / منزل","будинок","خانه","casa"],["das Auto","ئۆتۆمبێل","araba","car","سيارة","автомобіль","خودرو","coche"],["das Buch","کتێب","kitap","book","كتاب","книга","کتاب","libro"],["das Fenster","پەنجەرە","pencere","window","نافذة","вікно","پنجره","ventana"],["das Wasser","ئاو","su","water","ماء","вода","آب","agua"],["das Essen","خواردن","yemek","food","طعام","їжа","غذا","alimentos"],["das Trinken","خواردنەوە","içecek","drinking / beverage","شرب / مشروب","напій","نوشیدنی","beber / beber"],["das Spiel","یاری","oyun","game","لعبة","гра","بازی","juego"],["das Zimmer","ژوور","oda","room","غرفة","кімната","اتاق","habitación"],["das Krankenhaus","نەخۆشخانە","hastane","hospital","مستشفى","лікарня","بیمارستان","hospital"],["das Studium","خوێندن","üniversite eğitimi","university studies","الدراسة الجامعية","навчання","تحصیلات دانشگاهی","Estudios universitarios"],["das Museum","مۆزەخانە","müze","museum","متحف","музей","موزه","museo"],["das Zentrum","ناوەند","merkez","center","مركز","центр","مرکز","centro"],["das Instrument","ئامێری مۆسیقا","enstrüman","instrument","آلة موسيقية","інструмент","ساز","instrumento"],["das Problem","کێشە","sorun","problem","مشكلة","проблема","مشکل","problema"],["das Telefon","تەلەفۆن","telefon","telephone","هاتف","телефон","تلفن","teléfono"],["das Foto","وێنە","fotoğraf","photo","صورة","фото","عکس","foto"]] ,"rulesEs":["Fin: -chen, -lein, -ment, -um","Verbos utilizados como sustantivos","Niños y objetos"]},
      ],
      merksatz: [ { de: "der", ku: "نێر (männlich)", tr: "Eril (männlich)", en: "Masculine (männlich)", ar: "مذكر (männlich)" ,"es":"Masculino (männlich)"}, { de: "die", ku: "مێ (weiblich)", tr: "Dişil (weiblich)", en: "Feminine (weiblich)", ar: "مؤنث (weiblich)" ,"es":"Femenino (weiblich)"}, { de: "das", ku: "بێلایەن (neutral)", tr: "Nötr (neutral)", en: "Neuter (neutral)", ar: "محايد (neutral)" ,"es":"Neutro (neutro)"} ],
      ex: [ { de: "der Tisch", ku: "مێز (نێر)", tr: "masa (eril)", en: "table (masculine)", ar: "طاولة (مذكر)", uk: "стіл (чоловічий рід)", fa: "میز (مذکر)" ,"es":"tabla (masculina)"}, { de: "die Lampe", ku: "چرا (مێ)", tr: "lamba (dişil)", en: "lamp (feminine)", ar: "مصباح (مؤنث)", uk: "лампа (жіночий рід)", fa: "لامپ (مؤنث)" ,"es":"luz (femenina)"}, { de: "das Buch", ku: "کتێب (بێلایەن)", tr: "kitap (yansız)", en: "book (neuter)", ar: "كتاب (محايد)", uk: "книга (середній рід)", fa: "کتاب (خنثی)" ,"es":"libro (neuter)"}, { de: "der Stuhl ist neu.", ku: "کورسییەکە نوێیە.", tr: "Sandalye yeni.", en: "The chair is new.", ar: "الكرسي جديد.", uk: "Стілець новий.", fa: "صندلی نو است." ,"es":"La silla es nueva."}, { de: "die Tür ist offen.", ku: "دەرگاکە کراوەیە.", tr: "Kapı açık.", en: "The door is open.", ar: "الباب مفتوح.", uk: "Двері відчинені.", fa: "در باز است." ,"es":"La puerta está abierta."}, { de: "das Fenster ist groß.", ku: "پەنجەرەکە گەورەیە.", tr: "Pencere büyük.", en: "The window is big.", ar: "النافذة كبيرة.", uk: "Вікно велике.", fa: "پنجره بزرگ است." ,"es":"La ventana es grande."} ] ,"es":"Artículos: der, die, das","expEs":"En alemán, cada sustantivo tiene un género: masculino «der», femenino «die», neutro «das». El artículo se presenta ante el sustantivo y debe ser aprendido junto con él, ya que no siempre es lógico. A continuación, las reglas y los ejemplos se separan por cada artículo."},
    { de: "Plural", ku: "کۆ (زۆرینە)", icon: "❖",
      exp: "لە ئەڵمانیدا کۆکردنەوە چەند شێوازی هەیە: -e، -n/-en، -er، -s، یان بێ گۆڕان. لە کۆدا ئارتیکڵ هەمیشە «die» دەبێت.",
      tr: "Çoğul", expTr: "Almancada çoğul yapmanın birkaç yolu vardır: -e, -n/-en, -er, -s veya değişmeden. Çoğulda artikel her zaman «die» olur.",
      en: "Plural", expEn: "In German there are several ways to form the plural: -e, -n/-en, -er, -s, or no change. In the plural, the article is always «die».",
      ar: "الجمع", uk: "Множина", fa: "جمع", expAr: "في اللغة الألمانية هناك عدة طرق لتكوين الجمع: -e، -n/-en، -er، -s، أو بدون تغيير. في الجمع تكون الأداة دائما «die».", expUk: "У німецькій мові є кілька способів утворення множини: -e, -n/-en, -er, -s або без змін. У множині артикль завжди «die».", expFa: "در زبان آلمانی چند راه برای ساختن جمع وجود دارد: -e، -n/-en، -er، -s یا بدون تغییر. در جمع، حرف تعریف همیشه «die» است.",
      ex: [ { de: "das Kind → die Kinder", ku: "منداڵ → منداڵان", tr: "çocuk → çocuklar", en: "the child → the children", ar: "الطفل ← الأطفال", uk: "дитина → діти", fa: "کودک ← کودکان" ,"es":"el niño → los niños"}, { de: "die Frau → die Frauen", ku: "ژن → ژنان", tr: "kadın → kadınlar", en: "the woman → the women", ar: "المرأة ← النساء", uk: "жінка → жінки", fa: "زن ← زنان" ,"es":"la mujer → las mujeres"}, { de: "das Auto → die Autos", ku: "ئۆتۆمبێل → ئۆتۆمبێلەکان", tr: "araba → arabalar", en: "the car → the cars", ar: "السيارة ← السيارات", uk: "машина → машини", fa: "خودرو ← خودروها" ,"es":"el coche → los coches"}, { de: "der Tisch → die Tische", ku: "مێز → مێزەکان", tr: "masa → masalar", en: "the table → the tables", ar: "الطاولة ← الطاولات", uk: "стіл → столи", fa: "میز ← میزها" ,"es":"el cuadro → los cuadros"}, { de: "der Apfel → die Äpfel", ku: "سێو → سێوەکان", tr: "elma → elmalar", en: "the apple → the apples", ar: "التفاحة ← التفاحات", uk: "яблуко → яблука", fa: "سیب ← سیب‌ها" ,"es":"la manzana → las manzanas"}, { de: "das Buch → die Bücher", ku: "کتێب → کتێبەکان", tr: "kitap → kitaplar", en: "the book → the books", ar: "الكتاب ← الكتب", uk: "книга → книги", fa: "کتاب ← کتاب‌ها" ,"es":"el libro → los libros"} ] ,"es":"Plural","expEs":"En alemán hay varias maneras de formar el plural: -e, -n/-en, -er, -s, o sin cambios. En plural, el artículo siempre es «die»."},
    { de: "Bestimmte / unbestimmte Artikel", ku: "ئارتیکڵی دیاریکراو و نادیار", icon: "✧",
      exp: "«der/die/das» بۆ شتی دیاریکراو (ئەو شتەی دەیناسین). «ein/eine» بۆ شتی نادیار (شتێک بۆ یەکەم جار). بۆ بێلایەن و نێر «ein»، بۆ مێ «eine».",
      tr: "Belirli / Belirsiz Artikel", expTr: "«der/die/das» tanıdığımız belirli şeyler için kullanılır. «ein/eine» ilk kez söz edilen belirsiz şeyler için kullanılır. Yansız ve eril için «ein», dişil için «eine» kullanılır.",
      en: "Definite / indefinite articles", expEn: "«der/die/das» is used for definite things (things we already know). «ein/eine» is used for indefinite things (something mentioned for the first time). For neuter and masculine, «ein» is used; for feminine, «eine» is used.",
      ar: "أدوات التعريف المعرّفة والنكرة", uk: "Означений / неозначений артикль", fa: "حرف تعریف معرفه / نکره", expAr: "تُستخدم «der/die/das» للأشياء المعرّفة (التي نعرفها). وتُستخدم «ein/eine» للأشياء غير المعرّفة (شيء يُذكر لأول مرة). للمحايد والمذكر تُستخدم «ein»، وللمؤنث تُستخدم «eine».", expUk: "«der/die/das» вживається для означених речей (які ми вже знаємо). «ein/eine» вживається для неозначених речей (про які згадують уперше). Для середнього і чоловічого роду вживається «ein», для жіночого — «eine».", expFa: "«der/die/das» برای چیزهای معرفه (که می‌شناسیم) به کار می‌رود. «ein/eine» برای چیزهای نکره (چیزی که برای نخستین بار گفته می‌شود) به کار می‌رود. برای خنثی و مذکر «ein» و برای مؤنث «eine» به کار می‌رود.",
      ex: [ { de: "Das ist ein Buch.", ku: "ئەمە کتێبێکە (نادیار).", tr: "Bu bir kitap. (belirsiz)", en: "This is a book. (indefinite)", ar: "هذا كتاب. (نكرة)", uk: "Це книга. (неозначений)", fa: "این یک کتاب است. (نکره)" ,"es":"Esto es un libro."}, { de: "Das Buch ist neu.", ku: "کتێبەکە نوێیە (دیاریکراو).", tr: "Kitap yeni. (belirli)", en: "The book is new. (definite)", ar: "الكتاب جديد. (معرفة)", uk: "Книга нова. (означений)", fa: "کتاب نو است. (معرفه)" ,"es":"El libro es nuevo."}, { de: "Ich habe eine Frage.", ku: "پرسیارێکم هەیە.", tr: "Bir sorum var.", en: "I have a question.", ar: "لدي سؤال.", uk: "У мене є питання.", fa: "من یک سؤال دارم." ,"es":"Tengo una pregunta."}, { de: "Ein Mann wartet draußen.", ku: "پیاوێک لە دەرەوە چاوەڕێیە.", tr: "Dışarıda bir adam bekliyor.", en: "A man is waiting outside.", ar: "رجل ينتظر في الخارج.", uk: "Надворі чекає чоловік.", fa: "مردی بیرون منتظر است." ,"es":"Un hombre está esperando afuera."}, { de: "Der Mann ist mein Vater.", ku: "پیاوەکە باوکمە.", tr: "Adam babam.", en: "The man is my father.", ar: "الرجل هو أبي.", uk: "Цей чоловік — мій батько.", fa: "این مرد پدر من است." ,"es":"El hombre es mi padre."}, { de: "Eine Katze schläft hier.", ku: "پشیلەیەک لێرە خەوتووە.", tr: "Burada bir kedi uyuyor.", en: "A cat is sleeping here.", ar: "قطة نائمة هنا.", uk: "Тут спить кішка.", fa: "گربه‌ای اینجا خوابیده است." ,"es":"Un gato está durmiendo aquí."} ] ,"es":"Artículos definidos / indefinidos","expEs":"«der/die/das» se utiliza para cosas definidas (cosas que ya sabemos). «ein/eine» se utiliza para cosas indefinidas (algo que se menciona por primera vez). Para neutro y masculino, se utiliza «ein»; para femenino, se utiliza «eine»."},
    { de: "Akkusativ", ku: "ئاککوزاتیڤ (بەرکاری ڕاستەوخۆ)", icon: "→",
      exp: "ئاککوزاتیڤ بەرکاری ڕاستەوخۆیە. تەنها ئارتیکڵی نێر دەگۆڕێت: der → den، ein → einen. مێ و بێلایەن ناگۆڕێن.",
      tr: "Akuzatif (Belirtme Durumu)", expTr: "Akuzatif doğrudan nesne durumudur. Sadece eril artikel değişir: der → den, ein → einen. Dişil ve yansız değişmez.",
      en: "Accusative case", expEn: "The accusative is the case of the direct object. Only the masculine article changes: der → den, ein → einen. Feminine and neuter do not change.",
      ar: "حالة النصب (الأكوزاتيف)", uk: "Знахідний відмінок (Akkusativ)", fa: "حالت مفعولی (Akkusativ)", expAr: "حالة النصب (الأكوزاتيف) هي حالة المفعول به المباشر. تتغير فقط أداة المذكر: der ← den، ein ← einen. أما المؤنث والمحايد فلا يتغيران.", expUk: "Знахідний відмінок — це відмінок прямого додатка. Змінюється лише артикль чоловічого роду: der → den, ein → einen. Жіночий і середній рід не змінюються.", expFa: "حالت مفعولی (آکوزاتیو) حالتِ مفعول مستقیم است. فقط حرف تعریف مذکر تغییر می‌کند: der ← den، ein ← einen. مؤنث و خنثی تغییر نمی‌کنند.",
      ex: [ { de: "Ich sehe den Mann.", ku: "پیاوەکە دەبینم.", tr: "Adamı görüyorum.", en: "I see the man.", ar: "أرى الرجل.", uk: "Я бачу чоловіка.", fa: "من مرد را می‌بینم." ,"es":"Veo al hombre."}, { de: "Ich kaufe einen Apfel.", ku: "سێوێک دەکڕم.", tr: "Bir elma satın alıyorum.", en: "I am buying an apple.", ar: "أشتري تفاحة.", uk: "Я купую яблуко.", fa: "من یک سیب می‌خرم." ,"es":"Estoy comprando una manzana."}, { de: "Ich lese das Buch.", ku: "کتێبەکە دەخوێنمەوە.", tr: "Kitabı okuyorum.", en: "I am reading the book.", ar: "أقرأ الكتاب.", uk: "Я читаю книгу.", fa: "من کتاب را می‌خوانم." ,"es":"Estoy leyendo el libro."}, { de: "Er hat einen Hund.", ku: "سەگێکی هەیە.", tr: "Bir köpeği var.", en: "He has a dog.", ar: "لديه كلب.", uk: "У нього є собака.", fa: "او یک سگ دارد." ,"es":"Tiene un perro."}, { de: "Wir brauchen den Schlüssel.", ku: "پێویستیمان بە کلیلەکەیە.", tr: "Anahtara ihtiyacımız var.", en: "We need the key.", ar: "نحتاج إلى المفتاح.", uk: "Нам потрібен ключ.", fa: "ما به کلید نیاز داریم." ,"es":"Necesitamos la llave."}, { de: "Ich trinke eine Cola.", ku: "کۆلایەک دەخۆمەوە.", tr: "Bir kola içiyorum.", en: "I am drinking a cola.", ar: "أشرب كولا.", uk: "Я п'ю колу.", fa: "من یک نوشابه می‌نوشم." ,"es":"Estoy bebiendo una cola."} ] ,"es":"Causa acusativa","expEs":"El acusador es el caso del objeto directo. Sólo el artículo masculino cambia: der → den, ein → einen. Femenino y neutro no cambian."},
    { de: "Possessivartikel", ku: "ئارتیکڵی خاوەندارێتی", icon: "✪",
      exp: "mein (هی من)، dein (هی تۆ)، sein (هی ئەو نێر)، ihr (هی ئەو مێ)، unser (هی ئێمە). لەگەڵ ڕەگەزی ناوەکە دەگونجێن.",
      tr: "İyelik Sıfatları", expTr: "mein (benim), dein (senin), sein (onun - eril), ihr (onun - dişil), unser (bizim). İsmin cinsiyetiyle uyum sağlarlar.",
      en: "Possessive articles", expEn: "mein (my), dein (your), sein (his), ihr (her), unser (our). They agree with the gender of the noun.",
      ar: "أدوات الملكية", uk: "Присвійні артиклі", fa: "حروف تعریف ملکی", expAr: "mein (ملكي)، dein (ملكك)، sein (ملكه - للمذكر)، ihr (ملكها - للمؤنث)، unser (ملكنا). تتوافق مع جنس الاسم.", expUk: "mein (мій), dein (твій), sein (його), ihr (її), unser (наш). Вони узгоджуються з родом іменника.", expFa: "mein (مالِ من)، dein (مالِ تو)، sein (مالِ او - مذکر)، ihr (مالِ او - مؤنث)، unser (مالِ ما). با جنسیت اسم مطابقت می‌کنند.",
      ex: [ { de: "Das ist mein Buch.", ku: "ئەمە کتێبی منە.", tr: "Bu benim kitabım.", en: "This is my book.", ar: "هذا كتابي.", uk: "Це моя книга.", fa: "این کتاب من است." ,"es":"Este es mi libro."}, { de: "Deine Tasche ist schön.", ku: "جانتاکەت جوانە.", tr: "Çantan güzel.", en: "Your bag is nice.", ar: "حقيبتك جميلة.", uk: "Твоя сумка гарна.", fa: "کیف تو قشنگ است." ,"es":"Tu bolso es bonito."}, { de: "Sein Auto ist neu.", ku: "ئۆتۆمبێلەکەی نوێیە.", tr: "Onun arabası yeni.", en: "His car is new.", ar: "سيارته جديدة.", uk: "Його машина нова.", fa: "ماشین او نو است." ,"es":"Su coche es nuevo."}, { de: "Ihre Mutter ist Ärztin.", ku: "دایکی پزیشکە.", tr: "Annesi doktor.", en: "Her mother is a doctor.", ar: "أمها طبيبة.", uk: "Її мати лікарка.", fa: "مادر او پزشک است." ,"es":"Su madre es doctora."}, { de: "Unser Haus ist groß.", ku: "خانووەکەمان گەورەیە.", tr: "Evimiz büyük.", en: "Our house is big.", ar: "بيتنا كبير.", uk: "Наш будинок великий.", fa: "خانهٔ ما بزرگ است." ,"es":"Nuestra casa es grande."}, { de: "Euer Lehrer ist nett.", ku: "مامۆستاکەتان بەسۆزە.", tr: "Öğretmeniniz nazik.", en: "Your (all) teacher is nice.", ar: "معلمكم لطيف.", uk: "Ваш учитель добрий.", fa: "معلم شما مهربان است." ,"es":"Tu (todos) profesor es agradable."} ] ,"es":"Artículos de posesión","expEs":"Mein (mi), dein (tu), sein (su), ihr (su), unser (nuestro), están de acuerdo con el género del sustantivo."},
    { de: "Negation: nicht / kein", ku: "نەرێ کردن (nicht/kein)", icon: "⊘",
      exp: "«nicht» بۆ نەرێکردنی کردار، سیفەت یان ڕستە. «kein» بۆ نەرێکردنی ناو (لەگەڵ ئارتیکڵی نادیار یان بێ ئارتیکڵ).",
      tr: "Olumsuzluk: nicht / kein", expTr: "«nicht» fiil, sıfat veya cümleyi olumsuz yapar. «kein» isimleri olumsuz yapar (belirsiz artikel veya artikelsiz isimlerle).",
      en: "Negation: nicht / kein", expEn: "«nicht» negates a verb, adjective, or sentence. «kein» negates a noun (used with an indefinite article or no article).",
      ar: "النفي: nicht / kein", uk: "Заперечення: nicht / kein", fa: "نفی: nicht / kein", expAr: "«nicht» تُستخدم لنفي الفعل أو الصفة أو الجملة. «kein» تُستخدم لنفي الاسم (مع أداة النكرة أو بدون أداة).", expUk: "«nicht» заперечує дієслово, прикметник або речення. «kein» заперечує іменник (вживається з неозначеним артиклем або без артикля).", expFa: "«nicht» فعل، صفت یا جمله را نفی می‌کند. «kein» اسم را نفی می‌کند (همراه با حرف تعریف نکره یا بدون حرف تعریف).",
      ex: [ { de: "Ich verstehe nicht.", ku: "تێناگەم.", tr: "Anlamıyorum.", en: "I don't understand.", ar: "لا أفهم.", uk: "Я не розумію.", fa: "من نمی‌فهمم." ,"es":"No entiendo."}, { de: "Ich habe kein Geld.", ku: "پارەم نییە.", tr: "Param yok.", en: "I have no money.", ar: "ليس لدي مال.", uk: "У мене немає грошей.", fa: "من پول ندارم." ,"es":"No tengo dinero."}, { de: "Das ist nicht richtig.", ku: "ئەمە ڕاست نییە.", tr: "Bu doğru değil.", en: "That is not correct.", ar: "هذا ليس صحيحا.", uk: "Це неправильно.", fa: "این درست نیست." ,"es":"Eso no es correcto."}, { de: "Er ist nicht hier.", ku: "ئەو لێرە نییە.", tr: "O burada değil.", en: "He is not here.", ar: "هو ليس هنا.", uk: "Його тут немає.", fa: "او اینجا نیست." ,"es":"No está aquí."}, { de: "Ich habe keine Zeit.", ku: "کاتم نییە.", tr: "Zamanım yok.", en: "I have no time.", ar: "ليس لدي وقت.", uk: "У мене немає часу.", fa: "من وقت ندارم." ,"es":"No tengo tiempo."}, { de: "Das macht keinen Spaß.", ku: "ئەمە خۆش نییە.", tr: "Bu eğlenceli değil.", en: "That's not fun.", ar: "هذا ليس ممتعا.", uk: "Це не весело.", fa: "این اصلاً لذت‌بخش نیست." ,"es":"Eso no es divertido."} ] ,"es":"Negación: nicht / kein","expEs":"«nicht» niega un verbo, adjetivo o frase. «kein» niega un sustantivo (usado con un artículo indefinido o sin artículo)."},
    { de: "W-Fragen", ku: "پرسیاری W", icon: "?",
      exp: "پرسیار بە وشەی پرسیاری دەست پێدەکات: wer (کێ)، was (چی)، wo (لەکوێ)، wann (کەی)، wie (چۆن)، warum (بۆچی). کردار دێتە جێی دووەم.",
      tr: "W-Soruları", expTr: "Sorular soru kelimesiyle başlar: wer (kim), was (ne), wo (nerede), wann (ne zaman), wie (nasıl), warum (neden). Fiil ikinci sıraya gelir.",
      en: "WH-questions", expEn: "A question starts with a question word: wer (who), was (what), wo (where), wann (when), wie (how), warum (why). The verb comes in second position.",
      ar: "أسئلة الاستفهام (W-Fragen)", uk: "Питання з W (питальні слова)", fa: "پرسش‌های W (کلمات پرسشی)", expAr: "يبدأ السؤال بكلمة استفهام: wer (من)، was (ماذا)، wo (أين)، wann (متى)، wie (كيف)، warum (لماذا). يأتي الفعل في الموضع الثاني.", expUk: "Питання починається з питального слова: wer (хто), was (що), wo (де), wann (коли), wie (як), warum (чому). Дієслово стоїть на другому місці.", expFa: "پرسش با یک کلمهٔ پرسشی آغاز می‌شود: wer (چه کسی)، was (چه)، wo (کجا)، wann (کِی)، wie (چگونه)، warum (چرا). فعل در جایگاه دوم می‌آید.",
      ex: [ { de: "Wo wohnst du?", ku: "لەکوێ نیشتەجێیت؟", tr: "Nerede yaşıyorsun?", en: "Where do you live?", ar: "أين تسكن؟", uk: "Де ти живеш?", fa: "کجا زندگی می‌کنی؟" ,"es":"¿Dónde vives?"}, { de: "Was machst du?", ku: "چی دەکەیت؟", tr: "Ne yapıyorsun?", en: "What are you doing?", ar: "ماذا تفعل؟", uk: "Що ти робиш?", fa: "چه کار می‌کنی؟" ,"es":"¿Qué estás haciendo?"}, { de: "Wann kommst du?", ku: "کەی دێیت؟", tr: "Ne zaman geliyorsun?", en: "When are you coming?", ar: "متى ستأتي؟", uk: "Коли ти прийдеш?", fa: "کِی می‌آیی؟" ,"es":"¿Cuándo vienes?"}, { de: "Wer ist das?", ku: "ئەمە کێیە؟", tr: "Bu kim?", en: "Who is that?", ar: "من هذا؟", uk: "Хто це?", fa: "این کیست؟" ,"es":"¿Quién es?"}, { de: "Wie heißt du?", ku: "ناوت چییە؟", tr: "Adın ne?", en: "What is your name?", ar: "ما اسمك؟", uk: "Як тебе звати?", fa: "اسمت چیست؟" ,"es":"¿Cómo te llamas?"}, { de: "Warum lernst du Deutsch?", ku: "بۆچی ئەڵمانی فێردەبیت؟", tr: "Neden Almanca öğreniyorsun?", en: "Why are you learning German?", ar: "لماذا تتعلم الألمانية؟", uk: "Чому ти вчиш німецьку?", fa: "چرا آلمانی یاد می‌گیری؟" ,"es":"¿Por qué estás aprendiendo alemán?"} ] ,"es":"Preguntas WH","expEs":"Una pregunta comienza con una palabra de pregunta: wer (quién), wann (cuándo), wie (cómo), warum (por qué). El verbo viene en segunda posición."},
    { de: "Ja/Nein-Fragen", ku: "پرسیاری بەڵێ/نەخێر", icon: "↔",
      exp: "ئەم پرسیارانە بە کردار دەست پێدەکەن (کردار دێتە جێی یەکەم). وەڵام بە ja یان nein.",
      tr: "Evet/Hayır Soruları", expTr: "Bu sorular fiille başlar (fiil birinci sıraya gelir). Cevap ja (evet) veya nein (hayır) şeklindedir.",
      en: "Yes/No questions", expEn: "These questions start with the verb (the verb comes in first position). The answer is ja (yes) or nein (no).",
      ar: "أسئلة نعم/لا", uk: "Питання так/ні", fa: "پرسش‌های بله/خیر", expAr: "تبدأ هذه الأسئلة بالفعل (يأتي الفعل في الموضع الأول). الجواب يكون ja (نعم) أو nein (لا).", expUk: "Ці питання починаються з дієслова (дієслово стоїть на першому місці). Відповідь — ja (так) або nein (ні).", expFa: "این پرسش‌ها با فعل آغاز می‌شوند (فعل در جایگاه اول می‌آید). پاسخ ja (بله) یا nein (خیر) است.",
      ex: [ { de: "Kommst du mit?", ku: "لەگەڵم دێیت؟", tr: "Benimle geliyor musun?", en: "Are you coming along?", ar: "هل ستأتي معي؟", uk: "Ти йдеш зі мною?", fa: "با من می‌آیی؟" ,"es":"¿Vienes?"}, { de: "Hast du Zeit?", ku: "کاتت هەیە؟", tr: "Zamanın var mı?", en: "Do you have time?", ar: "هل لديك وقت؟", uk: "У тебе є час?", fa: "وقت داری؟" ,"es":"¿Tienes tiempo?"}, { de: "Ist das richtig?", ku: "ئەمە ڕاستە؟", tr: "Bu doğru mu?", en: "Is that correct?", ar: "هل هذا صحيح؟", uk: "Це правильно?", fa: "این درست است؟" ,"es":"¿Es eso correcto?"}, { de: "Sprichst du Englisch?", ku: "ئینگلیزی قسە دەکەیت؟", tr: "İngilizce konuşuyor musun?", en: "Do you speak English?", ar: "هل تتحدث الإنجليزية؟", uk: "Ти розмовляєш англійською?", fa: "انگلیسی صحبت می‌کنی؟" ,"es":"¿Hablas inglés?"}, { de: "Magst du Tee?", ku: "حەزت لە چایە؟", tr: "Çayı sever misin?", en: "Do you like tea?", ar: "هل تحب الشاي؟", uk: "Ти любиш чай?", fa: "چای دوست داری؟" ,"es":"¿Te gusta el té?"}, { de: "Wohnst du hier?", ku: "لێرە نیشتەجێیت؟", tr: "Burada mı yaşıyorsun?", en: "Do you live here?", ar: "هل تسكن هنا؟", uk: "Ти тут живеш?", fa: "اینجا زندگی می‌کنی؟" ,"es":"¿Vives aquí?"} ] ,"es":"Sí/No preguntas","expEs":"Estas preguntas comienzan con el verbo (el verbo viene en primera posición). La respuesta es ja (sí) o nein (no)."},
    { de: "Satzstellung", ku: "ڕیزبەندی ڕستە", icon: "≡",
      exp: "لە ڕستەی ئاساییدا کردار هەمیشە لە جێی دووەمە. «Position 2» یاسای زۆر گرنگی ئەڵمانییە.",
      tr: "Cümle Yapısı", expTr: "Normal cümlede fiil her zaman ikinci sıradadır. «İkinci konum» Almancada çok önemli bir kuraldır.",
      en: "Word order", expEn: "In a normal sentence, the verb is always in second position. «Position 2» is a very important rule in German.",
      ar: "ترتيب الجملة", uk: "Порядок слів", fa: "ترتیب کلمات", expAr: "في الجملة العادية يكون الفعل دائما في الموضع الثاني. «الموضع الثاني» قاعدة مهمة جدا في اللغة الألمانية.", expUk: "У звичайному реченні дієслово завжди стоїть на другому місці. «Друга позиція» — дуже важливе правило німецької мови.", expFa: "در جملهٔ عادی، فعل همیشه در جایگاه دوم است. «جایگاه دوم» قاعده‌ای بسیار مهم در آلمانی است.",
      ex: [ { de: "Ich lerne heute Deutsch.", ku: "ئەمڕۆ ئەڵمانی فێردەبم.", tr: "Bugün Almanca öğreniyorum.", en: "I am learning German today.", ar: "أتعلم الألمانية اليوم.", uk: "Сьогодні я вчу німецьку.", fa: "من امروز آلمانی یاد می‌گیرم." ,"es":"Hoy estoy aprendiendo alemán."}, { de: "Heute lerne ich Deutsch.", ku: "ئەمڕۆ ئەڵمانی فێردەبم (کردار هێشتا جێی ٢).", tr: "Bugün Almanca öğreniyorum (fiil hâlâ 2. sırada).", en: "Today I am learning German (verb still in position 2).", ar: "اليوم أتعلم الألمانية (الفعل ما زال في الموضع الثاني).", uk: "Сьогодні я вчу німецьку (дієслово все одно на другій позиції).", fa: "امروز آلمانی یاد می‌گیرم (فعل باز هم در جایگاه دوم است)." ,"es":"Hoy estoy aprendiendo alemán (verbo todavía en posición 2)."}, { de: "Morgen gehe ich nach Hause.", ku: "سبەینێ دەچمە ماڵەوە.", tr: "Yarın eve gidiyorum.", en: "Tomorrow I am going home.", ar: "غدا سأذهب إلى البيت.", uk: "Завтра я йду додому.", fa: "فردا به خانه می‌روم." ,"es":"Mañana me voy a casa."}, { de: "Am Abend sehe ich fern.", ku: "ئێوارە تەلەفزیۆن سەیر دەکەم.", tr: "Akşam televizyon izliyorum.", en: "In the evening I watch TV.", ar: "في المساء أشاهد التلفاز.", uk: "Увечері я дивлюся телевізор.", fa: "شب تلویزیون تماشا می‌کنم." ,"es":"Por la noche veo la televisión."}, { de: "In Bochum wohne ich.", ku: "لە بۆخوم نیشتەجێم.", tr: "Bochum'da yaşıyorum.", en: "I live in Bochum.", ar: "أسكن في بوخوم.", uk: "Я живу в Бохумі.", fa: "من در بوخوم زندگی می‌کنم." ,"es":"Vivo en Bochum."}, { de: "Jetzt esse ich.", ku: "ئێستا دەخۆم.", tr: "Şimdi yiyorum.", en: "Now I am eating.", ar: "الآن أنا آكل.", uk: "Зараз я їм.", fa: "الان غذا می‌خورم." ,"es":"Ahora estoy comiendo."} ] ,"es":"Orden de palabras","expEs":"En una oración normal, el verbo está siempre en segunda posición. «Posición 2» es una regla muy importante en alemán."},
    { de: "Modalverben", ku: "کرداری یاریدەدەر (مۆداڵ)", icon: "◆",
      exp: "können (توانین)، müssen (دەبێت)، wollen (ویستن)، dürfen (مۆڵەت)، sollen (پێویست)، möchten (حەزکردن). کرداری دووەم بە شێوەی بنەڕەتی دەچێتە کۆتایی ڕستە.",
      tr: "Modal Fiiller", expTr: "können (yapabilmek), müssen (zorunda olmak), wollen (istemek), dürfen (izni olmak), sollen (gerekmek), möchten (arzu etmek). İkinci fiil cümlenin sonuna mastar olarak gelir.",
      en: "Modal verbs", expEn: "können (to be able to), müssen (to have to), wollen (to want to), dürfen (to be allowed to), sollen (should), möchten (would like to). The second verb goes to the end of the sentence in its infinitive form.",
      ar: "الأفعال الناقصة (المودالية)", uk: "Модальні дієслова", fa: "افعال کمکی وجهی (مُدال)", expAr: "können (يستطيع)، müssen (يجب)، wollen (يريد)، dürfen (يُسمح له)، sollen (ينبغي)، möchten (يرغب). يذهب الفعل الثاني إلى نهاية الجملة بصيغة المصدر.", expUk: "können (могти), müssen (мусити), wollen (хотіти), dürfen (мати дозвіл), sollen (мати повинність), möchten (хотіти б). Друге дієслово стоїть у кінці речення в неозначеній формі.", expFa: "können (توانستن)، müssen (باید)، wollen (خواستن)، dürfen (اجازه داشتن)، sollen (بایستن)، möchten (میل داشتن). فعل دوم به‌صورت مصدر به انتهای جمله می‌رود.",
      ex: [ { de: "Ich kann schwimmen.", ku: "دەتوانم مەلە بکەم.", tr: "Yüzebiliyorum.", en: "I can swim.", ar: "أستطيع السباحة.", uk: "Я вмію плавати.", fa: "من می‌توانم شنا کنم." ,"es":"Puedo nadar."}, { de: "Du musst lernen.", ku: "دەبێت فێربیت.", tr: "Çalışmak zorundasın.", en: "You have to study.", ar: "يجب أن تدرس.", uk: "Ти мусиш вчитися.", fa: "تو باید درس بخوانی." ,"es":"Tienes que estudiar."}, { de: "Wir wollen essen.", ku: "دەمانەوێت بخۆین.", tr: "Yemek istiyoruz.", en: "We want to eat.", ar: "نريد أن نأكل.", uk: "Ми хочемо їсти.", fa: "ما می‌خواهیم غذا بخوریم." ,"es":"Queremos comer."}, { de: "Darf ich rein?", ku: "دەکرێت بێمە ژوورەوە؟", tr: "İçeri girebilir miyim?", en: "May I come in?", ar: "هل يمكنني الدخول؟", uk: "Можна мені зайти?", fa: "اجازه دارم بیایم داخل؟" ,"es":"¿Puedo pasar?"}, { de: "Du sollst warten.", ku: "دەبێت چاوەڕێ بکەیت.", tr: "Beklemelisin.", en: "You should wait.", ar: "ينبغي أن تنتظر.", uk: "Ти маєш почекати.", fa: "تو باید صبر کنی." ,"es":"Deberías esperar."}, { de: "Ich möchte Kaffee.", ku: "قاوەم دەوێت.", tr: "Kahve istiyorum.", en: "I would like coffee.", ar: "أريد قهوة.", uk: "Я хотів би кави.", fa: "من قهوه می‌خواهم." ,"es":"Me gustaría café."} ] ,"es":"Verbos modales","expEs":"können (ser capaz), müssen (tener que hacerlo), wollen (querir hacerlo), dürfen (permitirlo), sollen (debería hacerlo), möchten (quisiera hacerlo). El segundo verbo va al final de la oración en su forma infinitiva."},
    { de: "Unregelmäßige Verben", ku: "کرداری ناڕێک (بنەڕەتی)", icon: "↯",
      exp: "هەندێ کردار لە «du» و «er/sie/es»دا ڤاوڵەکەیان دەگۆڕێت (a→ä، e→i/ie). نموونە: fahren → du fährst، essen → du isst.",
      tr: "Düzensiz Fiiller", expTr: "Bazı fiiller «du» ve «er/sie/es» için ünlü değiştirir (a→ä, e→i/ie). Örnek: fahren → du fährst, essen → du isst.",
      en: "Irregular verbs", expEn: "Some verbs change their vowel in the «du» and «er/sie/es» forms (a→ä, e→i/ie). Example: fahren → du fährst, essen → du isst.",
      ar: "الأفعال الشاذة", uk: "Неправильні дієслова", fa: "افعال بی‌قاعده", expAr: "بعض الأفعال تغيّر حرف العلة في صيغتي «du» و«er/sie/es» (a←ä، e←i/ie). مثال: fahren ← du fährst، essen ← du isst.", expUk: "Деякі дієслова змінюють голосну у формах «du» та «er/sie/es» (a→ä, e→i/ie). Приклад: fahren → du fährst, essen → du isst.", expFa: "برخی افعال در صیغه‌های «du» و «er/sie/es» مصوّت خود را تغییر می‌دهند (a→ä، e→i/ie). مثال: fahren → du fährst، essen → du isst.",
      ex: [ { de: "fahren → er fährt", ku: "لێخوڕین → ئەو لێدەخوڕێت", tr: "gitmek → o gidiyor", en: "to drive → he drives", ar: "يقود ← هو يقود", uk: "їхати → він їде", fa: "راندن ← او می‌راند" ,"es":"para conducir → conduce"}, { de: "essen → du isst", ku: "خواردن → تۆ دەخۆیت", tr: "yemek → sen yiyorsun", en: "to eat → you eat", ar: "يأكل ← أنت تأكل", uk: "їсти → ти їси", fa: "خوردن ← تو می‌خوری" ,"es":"comer → usted come"}, { de: "sehen → er sieht", ku: "بینین → ئەو دەبینێت", tr: "görmek → o görüyor", en: "to see → he sees", ar: "يرى ← هو يرى", uk: "бачити → він бачить", fa: "دیدن ← او می‌بیند" ,"es":"ver → él ve"}, { de: "geben → du gibst", ku: "دان → تۆ دەدەیت", tr: "vermek → sen veriyorsun", en: "to give → you give", ar: "يعطي ← أنت تعطي", uk: "давати → ти даєш", fa: "دادن ← تو می‌دهی" ,"es":"para dar → usted da"}, { de: "lesen → sie liest", ku: "خوێندنەوە → ئەو دەیخوێنێتەوە", tr: "okumak → o okuyor", en: "to read → she reads", ar: "يقرأ ← هي تقرأ", uk: "читати → вона читає", fa: "خواندن ← او می‌خواند" ,"es":"leer → ella lee"}, { de: "schlafen → er schläft", ku: "خەوتن → ئەو دەخەوێت", tr: "uyumak → o uyuyor", en: "to sleep → he sleeps", ar: "ينام ← هو ينام", uk: "спати → він спить", fa: "خوابیدن ← او می‌خوابد" ,"es":"dormir → duerme"} ] ,"es":"Verbos irregulares","expEs":"Algunos verbos cambian su vocal en las formas «du» y «er/sie/es» (a, e→i/ie). Ejemplo: fahren → du fährst, essen → du isst."},
    { de: "Trennbare Verben", ku: "کرداری لێکدراو", icon: "⇿",
      exp: "هەندێ کردار پێشگرێکیان هەیە کە لە کاتی ئێستادا لێک دەبێتەوە و دەچێتە کۆتایی ڕستە. نموونە: aufstehen → ich stehe auf.",
      tr: "Ayrılabilen Fiiller", expTr: "Bazı fiillerin geniş zamanda ayrılan bir önekleri vardır ve cümlenin sonuna gider. Örnek: aufstehen → ich stehe auf.",
      en: "Separable verbs", expEn: "Some verbs have a prefix that separates in the present tense and moves to the end of the sentence. Example: aufstehen → ich stehe auf.",
      ar: "الأفعال القابلة للانفصال", uk: "Дієслова з відокремлюваними префіксами", fa: "افعال جداشدنی", expAr: "بعض الأفعال لها بادئة تنفصل في زمن المضارع وتذهب إلى نهاية الجملة. مثال: aufstehen ← ich stehe auf.", expUk: "Деякі дієслова мають префікс, який у теперішньому часі відокремлюється й переходить у кінець речення. Приклад: aufstehen → ich stehe auf.", expFa: "برخی افعال پیشوندی دارند که در زمان حال جدا می‌شود و به انتهای جمله می‌رود. مثال: aufstehen → ich stehe auf.",
      ex: [ { de: "Ich stehe um 7 auf.", ku: "کاتژمێر ٧ هەڵدەستم.", tr: "Saat 7'de kalkıyorum.", en: "I get up at 7.", ar: "أستيقظ الساعة السابعة.", uk: "Я встаю о 7-й.", fa: "من ساعت ۷ بیدار می‌شوم." ,"es":"Me levanto a las 7."}, { de: "Er kauft ein.", ku: "ئەو بازاڕ دەکات.", tr: "O alışveriş yapıyor.", en: "He goes shopping.", ar: "هو يتسوّق.", uk: "Він робить покупки.", fa: "او خرید می‌کند." ,"es":"Va de compras."}, { de: "Wir kommen an.", ku: "ئێمە دەگەین.", tr: "Biz varıyoruz.", en: "We arrive.", ar: "نحن نصل.", uk: "Ми прибуваємо.", fa: "ما می‌رسیم." ,"es":"Llegamos."}, { de: "Ruf mich an!", ku: "پەیوەندیم پێوە بکە!", tr: "Beni ara!", en: "Call me!", ar: "اتصل بي!", uk: "Зателефонуй мені!", fa: "به من زنگ بزن!" ,"es":"¡Llámame!"}, { de: "Der Zug fährt ab.", ku: "شەمەندەفەرەکە بەڕێدەکەوێت.", tr: "Tren kalkıyor.", en: "The train departs.", ar: "القطار يغادر.", uk: "Потяг відходить.", fa: "قطار حرکت می‌کند." ,"es":"El tren sale."}, { de: "Ich räume das Zimmer auf.", ku: "ژوورەکە ڕێک دەخەم.", tr: "Odayı toparlıyorum.", en: "I am tidying up the room.", ar: "أرتّب الغرفة.", uk: "Я прибираю кімнату.", fa: "من اتاق را مرتب می‌کنم." ,"es":"Estoy ordenando la habitación."} ] ,"es":"Verbos separables","expEs":"Algunos verbos tienen un prefijo que se separa en el tiempo presente y se mueve al final de la oración. Ejemplo: aufstehen → ich stehe auf."},
    { de: "Imperativ", ku: "فەرمان", icon: "!",
      exp: "بۆ فەرمانکردن. du: ڕەگی کردار (Komm!). ihr: ڕەگ + t (Kommt!). Sie: کردار + Sie (Kommen Sie!).",
      tr: "Emir Kipi", expTr: "Emir vermek için. du: fiil kökü (Komm!). ihr: kök + t (Kommt!). Sie: fiil + Sie (Kommen Sie!).",
      en: "Imperative", expEn: "For giving commands. du: verb stem (Komm!). ihr: stem + t (Kommt!). Sie: verb + Sie (Kommen Sie!).",
      ar: "صيغة الأمر", uk: "Наказовий спосіб", fa: "وجه امری (فرمان)", expAr: "لإصدار الأوامر. du: جذر الفعل (Komm!). ihr: الجذر + t (Kommt!). Sie: الفعل + Sie (Kommen Sie!).", expUk: "Для віддавання наказів. du: основа дієслова (Komm!). ihr: основа + t (Kommt!). Sie: дієслово + Sie (Kommen Sie!).", expFa: "برای دادن فرمان. du: ریشهٔ فعل (Komm!). ihr: ریشه + t (Kommt!). Sie: فعل + Sie (Kommen Sie!).",
      ex: [ { de: "Komm her!", ku: "وەرە ئێرە!", tr: "Buraya gel!", en: "Come here!", ar: "تعال هنا!", uk: "Іди сюди!", fa: "بیا اینجا!" ,"es":"¡Ven aquí!"}, { de: "Macht die Tür zu!", ku: "دەرگاکە دابخەن!", tr: "Kapıyı kapatın!", en: "Close the door!", ar: "أغلقوا الباب!", uk: "Зачиніть двері!", fa: "در را ببندید!" ,"es":"¡Cierra la puerta!"}, { de: "Warten Sie bitte!", ku: "تکایە چاوەڕێ بکەن!", tr: "Lütfen bekleyin!", en: "Please wait!", ar: "من فضلكم انتظروا!", uk: "Зачекайте, будь ласка!", fa: "لطفاً صبر کنید!" ,"es":"¡Por favor, espere!"}, { de: "Iss dein Essen!", ku: "خواردنەکەت بخۆ!", tr: "Yemeğini ye!", en: "Eat your food!", ar: "كل طعامك!", uk: "Їж свою їжу!", fa: "غذایت را بخور!" ,"es":"¡Come tu comida!"}, { de: "Sei ruhig!", ku: "بێدەنگ بە!", tr: "Sessiz ol!", en: "Be quiet!", ar: "كن هادئا!", uk: "Будь тихо!", fa: "ساکت باش!" ,"es":"¡Cállate!"}, { de: "Hören Sie zu!", ku: "گوێ بگرن!", tr: "Dinleyin!", en: "Listen!", ar: "استمعوا!", uk: "Слухайте!", fa: "گوش کنید!" ,"es":"¡Escucha!"} ] ,"es":"Imperativo","expEs":"Para dar órdenes. du: verbo stem (Komm!). ihr: stem + t (Kommt!). Sie: verbo + Sie (Kommen Sie!)."},
    { de: "Präpositionen: Ort & Zeit", ku: "ئامرازی شوێن و کات", icon: "⌖",
      exp: "شوێن: in (لە ناو)، an (لەسەر/لای)، auf (لەسەر)، neben (لاتەنیشت). کات: um (کاتژمێر)، am (ڕۆژ)، im (مانگ/وەرز).",
      tr: "Edatlar: Yer ve Zaman", expTr: "Yer: in (içinde), an (yanında/üzerinde), auf (üzerinde), neben (yanında). Zaman: um (saat için), am (gün için), im (ay/mevsim için).",
      en: "Prepositions: place & time", expEn: "Place: in (inside), an (next to/on), auf (on top of), neben (next to). Time: um (for a specific hour), am (for a day), im (for a month/season).",
      ar: "حروف الجر: المكان والزمان", uk: "Прийменники: місце і час", fa: "حروف اضافه: مکان و زمان", expAr: "المكان: in (في داخل)، an (بجانب/عند)، auf (على)، neben (بجانب). الزمان: um (للساعة)، am (لليوم)، im (للشهر/الفصل).", expUk: "Місце: in (всередині), an (біля/на), auf (зверху на), neben (поряд). Час: um (для точної години), am (для дня), im (для місяця/пори року).", expFa: "مکان: in (داخلِ)، an (کنار/روی)، auf (روی)، neben (کنار). زمان: um (برای ساعت مشخص)، am (برای روز)، im (برای ماه/فصل).",
      ex: [ { de: "Ich bin in der Schule.", ku: "لە قوتابخانەم.", tr: "Okuldayım.", en: "I am at school.", ar: "أنا في المدرسة.", uk: "Я в школі.", fa: "من در مدرسه هستم." ,"es":"Estoy en la escuela."}, { de: "Um 8 Uhr.", ku: "کاتژمێر ٨.", tr: "Saat 8.", en: "At 8 o'clock.", ar: "الساعة الثامنة.", uk: "О 8-й годині.", fa: "ساعت ۸." ,"es":"A las 8 en punto."}, { de: "Im Sommer.", ku: "لە هاویندا.", tr: "Yazın.", en: "In summer.", ar: "في الصيف.", uk: "Влітку.", fa: "در تابستان." ,"es":"En verano."}, { de: "Am Montag arbeite ich.", ku: "دووشەممە کار دەکەم.", tr: "Pazartesi çalışıyorum.", en: "I work on Monday.", ar: "أعمل يوم الاثنين.", uk: "У понеділок я працюю.", fa: "روز دوشنبه کار می‌کنم." ,"es":"Trabajo el lunes."}, { de: "Das Bild ist an der Wand.", ku: "وێنەکە لەسەر دیوارەکەیە.", tr: "Resim duvardaki.", en: "The picture is on the wall.", ar: "اللوحة على الحائط.", uk: "Картина на стіні.", fa: "تابلو روی دیوار است." ,"es":"La foto está en la pared."}, { de: "Die Tasche ist auf dem Tisch.", ku: "جانتاکە لەسەر مێزەکەیە.", tr: "Çanta masanın üzerinde.", en: "The bag is on the table.", ar: "الحقيبة على الطاولة.", uk: "Сумка на столі.", fa: "کیف روی میز است." ,"es":"La bolsa está en la mesa."} ] ,"es":"Preposiciones: lugar y hora","expEs":"Lugar: en (dentro), un (próximo a/on), auf (arriba de), neben (próximo a). Tiempo: um (durante una hora específica), am (durante un día), im (durante un mes/temporada)."},
  ],
  A2: [
    { de: "Perfekt", ku: "کاتی ڕابردووی تەواو (Perfekt)", icon: "↩",
      exp: "haben/sein + Partizip II. زۆربەی کردار haben وەردەگرن؛ کرداری جووڵە و گۆڕان sein. Partizip II زۆرجار: ge...t یان ge...en.",
      tr: "Geçmiş Zaman (Perfekt)", expTr: "haben/sein + Partizip II. Çoğu fiil haben alır; hareket ve değişim fiilleri sein alır. Partizip II genellikle: ge...t veya ge...en.",
      en: "Present perfect", expEn: "haben/sein + Partizip II. Most verbs take haben; verbs of motion and change take sein. Partizip II is usually formed with ge...t or ge...en.",
      ar: "الماضي التام (Perfekt)", uk: "Доконаний минулий час (Perfekt)", fa: "ماضی نقلی (Perfekt)", expAr: "haben/sein + Partizip II. معظم الأفعال تأخذ haben؛ أفعال الحركة والتغيير تأخذ sein. صيغة Partizip II غالبًا ما تُبنى بـ ge...t أو ge...en.", expUk: "haben/sein + Partizip II. Більшість дієслів беруть haben; дієслова руху й зміни стану беруть sein. Partizip II зазвичай утворюється за допомогою ge...t або ge...en.", expFa: "haben/sein + Partizip II. بیشتر افعال haben می‌گیرند؛ افعال حرکت و تغییر sein می‌گیرند. Partizip II معمولاً با ge...t یا ge...en ساخته می‌شود.",
      ex: [ { de: "Ich habe gegessen.", ku: "خواردم.", tr: "Yedim.", en: "I have eaten.", ar: "أكلتُ.", uk: "Я поїв.", fa: "من غذا خورده‌ام." ,"es":"He comido."}, { de: "Wir haben gelernt.", ku: "فێربووین.", tr: "Öğrendik.", en: "We have learned.", ar: "تعلّمنا.", uk: "Ми навчилися.", fa: "ما یاد گرفته‌ایم." ,"es":"Hemos aprendido."}, { de: "Er ist gegangen.", ku: "ئەو ڕۆیشت.", tr: "O gitti.", en: "He went.", ar: "لقد ذهب.", uk: "Він пішов.", fa: "او رفته است." ,"es":"Se fue."}, { de: "Sie hat ein Buch gekauft.", ku: "کتێبێکی کڕی.", tr: "Bir kitap satın aldı.", en: "She bought a book.", ar: "اشترت كتابًا.", uk: "Вона купила книгу.", fa: "او یک کتاب خریده است." ,"es":"Ella compró un libro."}, { de: "Ich bin nach Berlin gefahren.", ku: "چووم بۆ بەرلین.", tr: "Berlin'e gittim.", en: "I traveled to Berlin.", ar: "سافرتُ إلى برلين.", uk: "Я поїхав до Берліна.", fa: "من به برلین رفته‌ام." ,"es":"Viajé a Berlín."}, { de: "Hast du das gesehen?", ku: "ئەمەت بینی؟", tr: "Bunu gördün mü?", en: "Did you see that?", ar: "هل رأيت ذلك؟", uk: "Ти це бачив?", fa: "این را دیدی؟" ,"es":"¿Viste eso?"} ] ,"es":"Presente perfecto","expEs":"haben/sein + Partizip II. La mayoría de los verbos toman haben; los verbos de movimiento y cambio toman sein. El partizip II se forma generalmente con ge...t o ge...en."},
    { de: "Präteritum (sein, haben, Modalverben)", ku: "ڕابردووی سادە", icon: "↪",
      exp: "بۆ sein، haben و مۆداڵەکان لە قسەی ڕۆژانەشدا Präteritum بەکاردێت: war (بوو)، hatte (هەیبوو)، konnte (توانی)، musste (پێویست بوو).",
      tr: "Basit Geçmiş Zaman", expTr: "sein, haben ve modal fiiller için konuşmada da Präteritum kullanılır: war (idim), hatte (vardı), konnte (yapabildi), musste (zorundaydı).",
      en: "Simple past (sein, haben, modal verbs)", expEn: "For sein, haben, and modal verbs, the Präteritum (simple past) is also used in everyday speech: war (was), hatte (had), konnte (could), musste (had to).",
      ar: "الماضي البسيط (sein وhaben والأفعال الناقصة)", uk: "Простий минулий час (sein, haben, модальні дієслова)", fa: "ماضی ساده (sein، haben، افعال وجهی)", expAr: "بالنسبة إلى sein وhaben والأفعال الوجوبية (المودالية)، يُستخدم الماضي البسيط (Präteritum) أيضًا في الحديث اليومي: war (كان)، hatte (كان لديه)، konnte (استطاع)، musste (كان مضطرًا).", expUk: "Для sein, haben та модальних дієслів у повсякденному мовленні також вживається Präteritum (простий минулий час): war (був), hatte (мав), konnte (міг), musste (мусив).", expFa: "برای sein، haben و افعال وجهی، در گفتار روزمره نیز Präteritum (ماضی ساده) به کار می‌رود: war (بود)، hatte (داشت)، konnte (توانست)، musste (مجبور بود).",
      ex: [ { de: "Ich war krank.", ku: "نەخۆش بووم.", tr: "Hasta idim.", en: "I was sick.", ar: "كنتُ مريضًا.", uk: "Я був хворий.", fa: "من مریض بودم." ,"es":"Estaba enfermo."}, { de: "Sie hatte Zeit.", ku: "کاتی هەبوو.", tr: "Zamanı vardı.", en: "She had time.", ar: "كان لديها وقت.", uk: "У неї був час.", fa: "او وقت داشت." ,"es":"Tuvo tiempo."}, { de: "Wir konnten nicht kommen.", ku: "نەماندەتوانی بێین.", tr: "Gelemezdik.", en: "We could not come.", ar: "لم نستطع القدوم.", uk: "Ми не могли прийти.", fa: "ما نتوانستیم بیاییم." ,"es":"No pudimos venir."}, { de: "Es war sehr kalt.", ku: "زۆر سارد بوو.", tr: "Çok soğuktu.", en: "It was very cold.", ar: "كان الجو باردًا جدًا.", uk: "Було дуже холодно.", fa: "هوا خیلی سرد بود." ,"es":"Hacía mucho frío."}, { de: "Er musste arbeiten.", ku: "پێویست بوو کار بکات.", tr: "Çalışmak zorundaydı.", en: "He had to work.", ar: "كان عليه أن يعمل.", uk: "Він мусив працювати.", fa: "او مجبور بود کار کند." ,"es":"Tenía que trabajar."}, { de: "Ich hatte keine Wahl.", ku: "هیچ هەڵبژاردنێکم نەبوو.", tr: "Seçeneğim yoktu.", en: "I had no choice.", ar: "لم يكن لديّ خيار.", uk: "У мене не було вибору.", fa: "من چاره‌ای نداشتم." ,"es":"No tenía elección."} ] ,"es":"Pasado simple (sein, haben, verbos modales)","expEs":"Para los verbos sein, haben y modal, el präteritum (pasado simple) también se utiliza en el habla cotidiana: guerra (era), hatte (had), konnte (podría), musste (había)."},
    { de: "Dativ", ku: "داتیڤ (بەرکاری ناڕاستەوخۆ)", icon: "→",
      exp: "داتیڤ بەرکاری ناڕاستەوخۆیە (بۆ کێ؟). ئارتیکڵ دەگۆڕێت: der→dem، die→der، das→dem، die(کۆ)→den+n.",
      tr: "Datif (Dolaylı Nesne Durumu)", expTr: "Datif dolaylı nesne durumudur (kime?). Artikel değişir: der→dem, die→der, das→dem, die(çoğul)→den+n.",
      en: "Dative case", expEn: "Dative is the indirect object case (to whom?). The article changes: der→dem, die→der, das→dem, die (plural)→den+n.",
      ar: "حالة الجر (الداتيف)", uk: "Давальний відмінок (Dativ)", fa: "حالت به‌ای (Dativ)", expAr: "حالة الجر (الداتيف) هي حالة المفعول به غير المباشر (لمن؟). تتغيّر أداة التعريف: der→dem، die→der، das→dem، die (الجمع)→den+n.", expUk: "Давальний відмінок — це відмінок непрямого додатка (кому?). Артикль змінюється: der→dem, die→der, das→dem, die (множина)→den+n.", expFa: "حالت داتیو حالتِ مفعول غیرمستقیم است (به چه کسی؟). حرف تعریف تغییر می‌کند: der→dem، die→der، das→dem، die (جمع)→den+n.",
      ex: [ { de: "Ich gebe dem Kind ein Buch.", ku: "کتێبێک دەدەم بە منداڵەکە.", tr: "Çocuğa bir kitap veriyorum.", en: "I am giving the child a book.", ar: "أعطي الطفلَ كتابًا.", uk: "Я даю дитині книгу.", fa: "من به کودک یک کتاب می‌دهم." ,"es":"Le estoy dando un libro al niño."}, { de: "Ich helfe der Frau.", ku: "یارمەتی ژنەکە دەدەم.", tr: "Kadına yardım ediyorum.", en: "I am helping the woman.", ar: "أساعد المرأةَ.", uk: "Я допомагаю жінці.", fa: "من به زن کمک می‌کنم." ,"es":"Estoy ayudando a la mujer."}, { de: "Es gehört dem Mann.", ku: "هی پیاوەکەیە.", tr: "O adama ait.", en: "It belongs to the man.", ar: "إنه يخص الرجل.", uk: "Це належить чоловікові.", fa: "این متعلق به مرد است." ,"es":"Pertenece al hombre."}, { de: "Ich danke dir.", ku: "سوپاست دەکەم.", tr: "Sana teşekkür ederim.", en: "I thank you.", ar: "أشكرك.", uk: "Я дякую тобі.", fa: "از تو تشکر می‌کنم." ,"es":"Gracias."}, { de: "Das Buch gehört mir.", ku: "کتێبەکە هی منە.", tr: "Kitap bana ait.", en: "The book belongs to me.", ar: "الكتاب لي.", uk: "Книга належить мені.", fa: "کتاب متعلق به من است." ,"es":"El libro me pertenece."}, { de: "Sie hilft den Kindern.", ku: "یارمەتی منداڵەکان دەدات.", tr: "Çocuklara yardım ediyor.", en: "She helps the children.", ar: "تساعد الأطفالَ.", uk: "Вона допомагає дітям.", fa: "او به کودکان کمک می‌کند." ,"es":"Ayuda a los niños."} ] ,"es":"Caso Dativo","expEs":"Dative es el caso de objeto indirecto (¿a quién?). El artículo cambia: der→dem, die→der, das→dem, die (plural)→den+n."},
    { de: "Wechselpräpositionen", ku: "ئامرازی دوولایەن", icon: "⇆",
      exp: "نۆ ئامراز (in, an, auf, über, unter, vor, hinter, neben, zwischen) هەم Akkusativ هەم Dativ. جووڵە→Akkusativ (wohin؟)، شوێن→Dativ (wo؟).",
      tr: "İki Hallı Edatlar", expTr: "Dokuz edat (in, an, auf, über, unter, vor, hinter, neben, zwischen) hem Akuzatif hem Datif alır. Hareket→Akuzatif (nereye?), yer→Datif (nerede?).",
      en: "Two-way prepositions", expEn: "Nine prepositions (in, an, auf, über, unter, vor, hinter, neben, zwischen) take both Akkusativ and Dativ. Motion→Akkusativ (to where?), location→Dativ (where?).",
      ar: "حروف الجر ثنائية الحالة", uk: "Прийменники подвійного керування", fa: "حروف اضافهٔ دوحالته", expAr: "تسعة حروف جر (in, an, auf, über, unter, vor, hinter, neben, zwischen) تأخذ حالة النصب (Akkusativ) وحالة الجر (Dativ) معًا. الحركة → نصب (إلى أين؟)، والمكان → جر (أين؟).", expUk: "Дев'ять прийменників (in, an, auf, über, unter, vor, hinter, neben, zwischen) керують як знахідним, так і давальним відмінком. Рух→знахідний (куди?), місцезнаходження→давальний (де?).", expFa: "نُه حرف اضافه (in, an, auf, über, unter, vor, hinter, neben, zwischen) هم Akkusativ و هم Dativ می‌گیرند. حرکت→Akkusativ (به کجا؟)، مکان→Dativ (کجا؟).",
      ex: [ { de: "Ich gehe in die Schule.", ku: "دەچمە قوتابخانە (جووڵە/Akk).", tr: "Okula gidiyorum (hareket/Akk).", en: "I am going to school (motion/Akk).", ar: "أذهب إلى المدرسة (حركة/نصب).", uk: "Я йду до школи (рух/Akk).", fa: "من به مدرسه می‌روم (حرکت/Akk)." ,"es":"Voy a la escuela (moción/Akk)."}, { de: "Ich bin in der Schule.", ku: "لە قوتابخانەم (شوێن/Dativ).", tr: "Okuldayım (yer/Datif).", en: "I am at school (location/Dativ).", ar: "أنا في المدرسة (مكان/جر).", uk: "Я в школі (місце/Dativ).", fa: "من در مدرسه هستم (مکان/Dativ)." ,"es":"Estoy en la escuela (ubicación/Dativ)."}, { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە.", tr: "Kitap masanın üzerinde.", en: "The book is lying on the table.", ar: "الكتاب موضوع على الطاولة.", uk: "Книга лежить на столі.", fa: "کتاب روی میز قرار دارد." ,"es":"El libro está sobre la mesa."}, { de: "Ich lege das Buch auf den Tisch.", ku: "کتێبەکە دەخەمە سەر مێزەکە.", tr: "Kitabı masanın üzerine koyuyorum.", en: "I am putting the book on the table.", ar: "أضع الكتاب على الطاولة.", uk: "Я кладу книгу на стіл.", fa: "من کتاب را روی میز می‌گذارم." ,"es":"Pondré el libro sobre la mesa."}, { de: "Die Katze ist unter dem Bett.", ku: "پشیلەکە لەژێر جێگاکەیە.", tr: "Kedi yatağın altında.", en: "The cat is under the bed.", ar: "القطة تحت السرير.", uk: "Кішка під ліжком.", fa: "گربه زیر تخت است." ,"es":"El gato está debajo de la cama."}, { de: "Er hängt das Bild an die Wand.", ku: "وێنەکە بە دیوارەوە هەڵدەواسێت.", tr: "Resmi duvara asıyor.", en: "He is hanging the picture on the wall.", ar: "يعلّق الصورة على الحائط.", uk: "Він вішає картину на стіну.", fa: "او تابلو را به دیوار می‌آویزد." ,"es":"Está colgando la foto en la pared."} ] ,"es":"Preposiciones bidireccionales","expEs":"Nueve preposiciones (en, af, über, unter, vor, hinter, neben, zwischen) toman tanto Akkusativ y Dativ. Motion→Akkusativ (¿a dónde?), location→Dativ (¿dónde?)."},
    { de: "Pronomen: Personal-, Possessiv-, Demonstrativ-", ku: "جۆرەکانی جێناو", icon: "⁂",
      exp: "Personalpronomen (er, ihn, ihm)، Possessivpronomen (meiner, deiner)، Demonstrativpronomen (dieser, jener) — بۆ ئاماژەکردن و دووبارەنەکردنەوەی ناو.",
      tr: "Zamir Türleri", expTr: "Kişi zamirleri (er, ihn, ihm), iyelik zamirleri (meiner, deiner), işaret zamirleri (dieser, jener) — işaret etmek ve isim tekrarını önlemek için.",
      en: "Pronouns: personal, possessive, demonstrative", expEn: "Personal pronouns (er, ihn, ihm), possessive pronouns (meiner, deiner), demonstrative pronouns (dieser, jener) — for pointing things out and avoiding repeating a noun.",
      ar: "الضمائر: الشخصية والملكية والإشارية", uk: "Займенники: особові, присвійні, вказівні", fa: "ضمایر: شخصی، ملکی، اشاره‌ای", expAr: "الضمائر الشخصية (er, ihn, ihm)، والضمائر الملكية (meiner, deiner)، وضمائر الإشارة (dieser, jener) — للإشارة إلى الأشياء وتجنّب تكرار الاسم.", expUk: "Особові займенники (er, ihn, ihm), присвійні займенники (meiner, deiner), вказівні займенники (dieser, jener) — для вказування на предмети та уникнення повторення іменника.", expFa: "ضمایر شخصی (er, ihn, ihm)، ضمایر ملکی (meiner, deiner)، ضمایر اشاره (dieser, jener) — برای اشاره به چیزها و پرهیز از تکرار اسم.",
      ex: [ { de: "Ich sehe ihn.", ku: "ئەو دەبینم.", tr: "Onu görüyorum.", en: "I see him.", ar: "أراه.", uk: "Я бачу його.", fa: "من او را می‌بینم." ,"es":"Lo veo."}, { de: "Dieser Stuhl ist frei.", ku: "ئەم کورسییە بەتاڵە.", tr: "Bu sandalye boş.", en: "This chair is free.", ar: "هذا الكرسي فارغ.", uk: "Цей стілець вільний.", fa: "این صندلی خالی است." ,"es":"Esta silla es gratis."}, { de: "Das ist meiner.", ku: "ئەمە هی منە.", tr: "Bu benimki.", en: "That is mine.", ar: "هذا لي.", uk: "Це моє.", fa: "این مالِ من است." ,"es":"Eso es mío."}, { de: "Ich gebe ihm das Buch.", ku: "کتێبەکەی دەدەمێ.", tr: "Ona kitabı veriyorum.", en: "I am giving him the book.", ar: "أعطيه الكتاب.", uk: "Я даю йому книгу.", fa: "من کتاب را به او می‌دهم." ,"es":"Le estoy dando el libro."}, { de: "Diese Tasche ist schön.", ku: "ئەم جانتایە جوانە.", tr: "Bu çanta güzel.", en: "This bag is beautiful.", ar: "هذه الحقيبة جميلة.", uk: "Ця сумка гарна.", fa: "این کیف قشنگ است." ,"es":"Esta bolsa es hermosa."}, { de: "Welches möchtest du? Dieses.", ku: "کامەت دەوێت؟ ئەمە.", tr: "Hangisini istiyorsun? Bunu.", en: "Which one do you want? This one.", ar: "أيّها تريد؟ هذا.", uk: "Яку ти хочеш? Оцю.", fa: "کدام را می‌خواهی؟ این یکی." ,"es":"¿Cuál quieres?"} ] ,"es":"Pronombres: personal, posesivo, demostrativo","expEs":"Pronombres personales (er, ihn, ihm), pronombres posesivos (meiner, deiner), pronombres demostrativos (dieser, jener) — para señalar las cosas y evitar repetir un sustantivo."},
    { de: "Reflexive Verben", ku: "کرداری لێکدراوەی خۆ", icon: "↺",
      exp: "هەندێ کردار جێناوی خۆ (mich, dich, sich…) وەردەگرن. نموونە: sich freuen (دڵخۆشبوون)، sich waschen (خۆشتن).",
      tr: "Dönüşlü Fiiller", expTr: "Bazı fiiller dönüşlü zamir alır (mich, dich, sich…). Örnek: sich freuen (sevinmek), sich waschen (yıkanmak).",
      en: "Reflexive verbs", expEn: "Some verbs take a reflexive pronoun (mich, dich, sich…). Example: sich freuen (to be glad), sich waschen (to wash oneself).",
      ar: "الأفعال الانعكاسية", uk: "Зворотні дієслова", fa: "افعال انعکاسی", expAr: "بعض الأفعال تأخذ ضمير انعكاس (mich, dich, sich…). مثال: sich freuen (أن يفرح)، sich waschen (أن يغتسل).", expUk: "Деякі дієслова беруть зворотний займенник (mich, dich, sich…). Приклад: sich freuen (радіти), sich waschen (митися).", expFa: "برخی افعال ضمیر انعکاسی می‌گیرند (mich, dich, sich…). مثال: sich freuen (خوشحال شدن)، sich waschen (خود را شستن).",
      ex: [ { de: "Ich freue mich.", ku: "دڵخۆشم.", tr: "Sevincim var.", en: "I am glad.", ar: "أنا سعيد.", uk: "Я радію.", fa: "من خوشحالم." ,"es":"Me alegro."}, { de: "Er wäscht sich.", ku: "خۆی دەشوات.", tr: "O yıkanıyor.", en: "He is washing himself.", ar: "هو يغتسل.", uk: "Він миється.", fa: "او خودش را می‌شوید." ,"es":"Se está lavando."}, { de: "Wir treffen uns.", ku: "یەکتر دەبینین.", tr: "Birbirimizle buluşuyoruz.", en: "We are meeting each other.", ar: "نلتقي ببعضنا.", uk: "Ми зустрічаємося.", fa: "ما همدیگر را می‌بینیم." ,"es":"Nos vamos a encontrar."}, { de: "Setz dich bitte.", ku: "تکایە دانیشە.", tr: "Lütfen oturun.", en: "Please sit down.", ar: "تفضل بالجلوس من فضلك.", uk: "Сідай, будь ласка.", fa: "لطفاً بنشین." ,"es":"Por favor, siéntese."}, { de: "Sie interessiert sich für Musik.", ku: "ئارەزووی مۆسیقا دەکات.", tr: "Müziğe ilgi duyuyor.", en: "She is interested in music.", ar: "هي مهتمة بالموسيقى.", uk: "Вона цікавиться музикою.", fa: "او به موسیقی علاقه دارد." ,"es":"Está interesada en la música."}, { de: "Ich fühle mich gut.", ku: "هەست بە باشی دەکەم.", tr: "Kendimi iyi hissediyorum.", en: "I feel good.", ar: "أشعر بأنني بخير.", uk: "Я почуваюся добре.", fa: "من احساس خوبی دارم." ,"es":"Me siento bien."} ] ,"es":"Verbos reflexivos","expEs":"Algunos verbos toman un pronombre reflexivo (mich, dich, sich...). Ejemplo: sich freuen (para alegrarse), sich waschen (para lavarse)."},
    { de: "Komparativ", ku: "بەراوردی (پلەی بەرز)", icon: "≷",
      exp: "بۆ بەراوردکردن: سیفەت + -er + als. نموونە: groß → größer als. هەندێ بێ ڕێک: gut → besser.",
      tr: "Karşılaştırma Derecesi", expTr: "Karşılaştırma için: sıfat + -er + als. Örnek: groß → größer als. Bazı düzensizler: gut → besser.",
      en: "Comparative", expEn: "For comparison: adjective + -er + als. Example: groß → größer als. Some irregulars: gut → besser.",
      ar: "صيغة المقارنة (التفضيل)", uk: "Вищий ступінь порівняння", fa: "صفت برتر (تفضیلی)", expAr: "للمقارنة: الصفة + -er + als. مثال: groß → größer als. بعض الصفات الشاذة: gut → besser.", expUk: "Для порівняння: прикметник + -er + als. Приклад: groß → größer als. Деякі неправильні: gut → besser.", expFa: "برای مقایسه: صفت + -er + als. مثال: groß → größer als. برخی بی‌قاعده: gut → besser.",
      ex: [ { de: "Er ist größer als ich.", ku: "ئەو لە من گەورەترە.", tr: "O benden uzun.", en: "He is taller than me.", ar: "هو أطول مني.", uk: "Він вищий за мене.", fa: "او از من بلندقدتر است." ,"es":"Es más alto que yo."}, { de: "Heute ist es kälter.", ku: "ئەمڕۆ ساردترە.", tr: "Bugün daha soğuk.", en: "Today it is colder.", ar: "اليوم الجو أبرد.", uk: "Сьогодні холодніше.", fa: "امروز سردتر است." ,"es":"Hoy hace más frío."}, { de: "Das ist besser.", ku: "ئەمە باشترە.", tr: "Bu daha iyi.", en: "That is better.", ar: "هذا أفضل.", uk: "Це краще.", fa: "این بهتر است." ,"es":"Eso está mejor."}, { de: "Sie ist jünger als er.", ku: "ئەو لە ئەو گەنجترە.", tr: "O ondan genç.", en: "She is younger than him.", ar: "هي أصغر منه سنًا.", uk: "Вона молодша за нього.", fa: "او از او جوان‌تر است." ,"es":"Ella es más joven que él."}, { de: "Dieses Auto ist teurer.", ku: "ئەم ئۆتۆمبێلە گرانترە.", tr: "Bu araba daha pahalı.", en: "This car is more expensive.", ar: "هذه السيارة أغلى.", uk: "Ця машина дорожча.", fa: "این خودرو گران‌تر است." ,"es":"Este coche es más caro."}, { de: "Deutsch ist schwerer als Englisch.", ku: "ئەڵمانی لە ئینگلیزی قورسترە.", tr: "Almanca İngilizce'den zor.", en: "German is harder than English.", ar: "الألمانية أصعب من الإنجليزية.", uk: "Німецька важча за англійську.", fa: "آلمانی از انگلیسی سخت‌تر است." ,"es":"El alemán es más difícil que el inglés."} ] ,"es":"Comparative","expEs":"Para comparación: adjetivo + -er + als. Ejemplo: groß → gr"},
    { de: "Superlativ", ku: "بەرزترین پلە", icon: "★",
      exp: "بەرزترین پلە: am + سیفەت + -sten، یان der/die/das + -ste. نموونە: am größten (گەورەترین).",
      tr: "Üstünlük Derecesi", expTr: "En yüksek derece: am + sıfat + -sten veya der/die/das + -ste. Örnek: am größten (en büyük).",
      en: "Superlative", expEn: "Superlative: am + adjective + -sten, or der/die/das + -ste. Example: am größten (the biggest/tallest).",
      ar: "صيغة التفضيل المطلق", uk: "Найвищий ступінь порівняння", fa: "صفت عالی (برترین)", expAr: "صيغة التفضيل المطلق: am + الصفة + -sten، أو der/die/das + -ste. مثال: am größten (الأكبر).", expUk: "Найвищий ступінь: am + прикметник + -sten або der/die/das + -ste. Приклад: am größten (найбільший/найвищий).", expFa: "صفت عالی: am + صفت + -sten، یا der/die/das + -ste. مثال: am größten (بزرگ‌ترین/بلندترین).",
      ex: [ { de: "Er ist am größten.", ku: "ئەو گەورەترینە.", tr: "O en uzun.", en: "He is the tallest.", ar: "هو الأطول.", uk: "Він найвищий.", fa: "او بلندقدترین است." ,"es":"Es el más alto."}, { de: "Das ist das beste Buch.", ku: "ئەمە باشترین کتێبە.", tr: "Bu en iyi kitap.", en: "That is the best book.", ar: "هذا أفضل كتاب.", uk: "Це найкраща книга.", fa: "این بهترین کتاب است." ,"es":"Ese es el mejor libro."}, { de: "Sie läuft am schnellsten.", ku: "ئەو خێراترین ڕادەکات.", tr: "O en hızlı koşuyor.", en: "She runs the fastest.", ar: "هي تركض الأسرع.", uk: "Вона біжить найшвидше.", fa: "او سریع‌ترین می‌دود." ,"es":"Ella corre más rápido."}, { de: "Das ist der höchste Berg.", ku: "ئەمە بەرزترین شاخە.", tr: "Bu en yüksek dağ.", en: "That is the highest mountain.", ar: "هذا أعلى جبل.", uk: "Це найвища гора.", fa: "این بلندترین کوه است." ,"es":"Esa es la montaña más alta."}, { de: "Heute ist der kälteste Tag.", ku: "ئەمڕۆ ساردترین ڕۆژە.", tr: "Bugün en soğuk gün.", en: "Today is the coldest day.", ar: "اليوم هو أبرد يوم.", uk: "Сьогодні найхолодніший день.", fa: "امروز سردترین روز است." ,"es":"Hoy es el día más frío."}, { de: "Du bist mein bester Freund.", ku: "تۆ باشترین هاوڕێمی.", tr: "Sen en iyi arkadaşımsın.", en: "You are my best friend.", ar: "أنت أفضل صديق لي.", uk: "Ти мій найкращий друг.", fa: "تو بهترین دوست من هستی." ,"es":"Eres mi mejor amigo."} ] ,"es":"Superlativo","expEs":"Superlativo: am + adjetivo + -sten, o der/die/das + -ste. Ejemplo: am gr­oten (el más grande/talle)."},
    { de: "Konjunktionen: und, oder, aber, denn, sondern", ku: "گرێدەرە سادەکان", icon: "&",
      exp: "ئەم گرێدەرانە ڕیزبەندی ناگۆڕن (کردار لە جێی ٢ دەمێنێتەوە): und (و)، oder (یان)، aber (بەڵام)، denn (چونکە)، sondern (بەڵکو).",
      tr: "Bağlaçlar: und, oder, aber, denn, sondern", expTr: "Bu bağlaçlar cümle yapısını değiştirmez (fiil ikinci sıradadır): und (ve), oder (veya), aber (ama), denn (çünkü), sondern (aksine).",
      en: "Conjunctions: und, oder, aber, denn, sondern", expEn: "These conjunctions do not change the word order (the verb stays in position 2): und (and), oder (or), aber (but), denn (because), sondern (but rather).",
      ar: "أدوات الربط: und، oder، aber، denn، sondern", uk: "Сполучники: und, oder, aber, denn, sondern", fa: "حروف ربط: und, oder, aber, denn, sondern", expAr: "هذه الأدوات الرابطة لا تغيّر ترتيب الجملة (يبقى الفعل في الموضع الثاني): und (و)، oder (أو)، aber (لكن)، denn (لأنّ)، sondern (بل).", expUk: "Ці сполучники не змінюють порядок слів (дієслово залишається на другій позиції): und (і), oder (або), aber (але), denn (бо), sondern (а навпаки).", expFa: "این حروف ربط ترتیب کلمات را تغییر نمی‌دهند (فعل در جایگاه دوم می‌ماند): und (و)، oder (یا)، aber (اما)، denn (زیرا)، sondern (بلکه).",
      ex: [ { de: "Ich lerne, denn es ist wichtig.", ku: "فێردەبم، چونکە گرنگە.", tr: "Öğreniyorum, çünkü önemli.", en: "I am studying, because it is important.", ar: "أتعلّم لأنه مهم.", uk: "Я вчуся, бо це важливо.", fa: "من درس می‌خوانم، زیرا مهم است." ,"es":"Estoy estudiando, porque es importante."}, { de: "Tee oder Kaffee?", ku: "چا یان قاوە؟", tr: "Çay mı kahve mi?", en: "Tea or coffee?", ar: "شاي أم قهوة؟", uk: "Чай чи кава?", fa: "چای یا قهوه؟" ,"es":"¿Té o café?"}, { de: "Nicht heute, sondern morgen.", ku: "نەک ئەمڕۆ، بەڵکو سبەینێ.", tr: "Bugün değil, yarın.", en: "Not today, but tomorrow.", ar: "ليس اليوم، بل غدًا.", uk: "Не сьогодні, а завтра.", fa: "نه امروز، بلکه فردا." ,"es":"Hoy no, pero mañana."}, { de: "Ich bin müde, aber glücklich.", ku: "ماندووم، بەڵام بەختەوەرم.", tr: "Yorgunum ama mutluyum.", en: "I am tired, but happy.", ar: "أنا متعب لكن سعيد.", uk: "Я втомлений, але щасливий.", fa: "من خسته‌ام، اما خوشحالم." ,"es":"Estoy cansado, pero feliz."}, { de: "Er kommt und sie geht.", ku: "ئەو دێت و ئەو دەڕوات.", tr: "O geliyor, o gidiyor.", en: "He is coming and she is going.", ar: "هو يأتي وهي تذهب.", uk: "Він приходить, а вона йде.", fa: "او می‌آید و او می‌رود." ,"es":"Él viene y ella se va."}, { de: "Ich bleibe, aber du gehst.", ku: "دەمێنمەوە، بەڵام تۆ دەڕۆیت.", tr: "Kalıyorum ama sen gidiyorsun.", en: "I am staying, but you are going.", ar: "أنا أبقى لكنك تذهب.", uk: "Я залишаюся, але ти йдеш.", fa: "من می‌مانم، اما تو می‌روی." ,"es":"Me quedo, pero tú te vas."} ] ,"es":"Conjunciones: und, oder, aber, denn, sondern","expEs":"Estas conjunciones no cambian el orden de la palabra (el verbo permanece en la posición 2): und (y), oder (o), aber (pero), denn (porque), sondern (pero más bien)."},
    { de: "Nebensatz: weil, dass", ku: "ڕستەی لاوەکی (weil/dass)", icon: "⟜",
      exp: "دوای weil (چونکە) و dass (کە) کردار دەچێتە کۆتایی ڕستەی لاوەکی. ئەمە جیاوازییەکی گەورەیە لەگەڵ ڕستەی سادە.",
      tr: "Yan Cümleler: weil, dass", expTr: "weil (çünkü) ve dass (ki/olduğu) dan sonra fiil yan cümlenin sonuna gider. Bu basit cümleden önemli bir farktır.",
      en: "Subordinate clauses: weil, dass", expEn: "After weil (because) and dass (that), the verb moves to the end of the subordinate clause. This is a major difference from a simple sentence.",
      ar: "الجمل الثانوية: weil، dass", uk: "Підрядні речення: weil, dass", fa: "جملهٔ پیرو: weil, dass", expAr: "بعد weil (لأنّ) وdass (أنّ)، ينتقل الفعل إلى نهاية الجملة الفرعية. هذا فرق كبير عن الجملة البسيطة.", expUk: "Після weil (тому що) і dass (що) дієслово переходить у кінець підрядного речення. Це головна відмінність від простого речення.", expFa: "پس از weil (زیرا) و dass (که)، فعل به انتهای جملهٔ پیرو می‌رود. این تفاوت مهمی با جملهٔ ساده است.",
      ex: [ { de: "Ich bleibe, weil ich krank bin.", ku: "دەمێنمەوە، چونکە نەخۆشم.", tr: "Kalıyorum çünkü hastayım.", en: "I am staying because I am sick.", ar: "أبقى لأني مريض.", uk: "Я залишаюся, бо я хворий.", fa: "من می‌مانم، زیرا مریض هستم." ,"es":"Me quedo porque estoy enfermo."}, { de: "Ich weiß, dass du kommst.", ku: "دەزانم کە دێیت.", tr: "Geldiğini biliyorum.", en: "I know that you are coming.", ar: "أعلم أنك قادم.", uk: "Я знаю, що ти прийдеш.", fa: "من می‌دانم که تو می‌آیی." ,"es":"Sé que vas a venir."}, { de: "Er sagt, dass es regnet.", ku: "دەڵێت کە باران دەبارێت.", tr: "Yağmur yağdığını söylüyor.", en: "He says that it is raining.", ar: "يقول إنّ المطر يهطل.", uk: "Він каже, що йде дощ.", fa: "او می‌گوید که باران می‌بارد." ,"es":"Dice que está lloviendo."}, { de: "Ich lerne, weil ich es brauche.", ku: "فێردەبم، چونکە پێویستمە.", tr: "İhtiyacım olduğu için öğreniyorum.", en: "I am learning because I need it.", ar: "أتعلّم لأنني بحاجة إليه.", uk: "Я вчуся, бо мені це потрібно.", fa: "من درس می‌خوانم، زیرا به آن نیاز دارم." ,"es":"Estoy aprendiendo porque lo necesito."}, { de: "Sie glaubt, dass es stimmt.", ku: "پێیوایە کە ڕاستە.", tr: "Doğru olduğuna inanıyor.", en: "She believes that it is true.", ar: "تعتقد أن ذلك صحيح.", uk: "Вона вірить, що це правда.", fa: "او باور دارد که درست است." ,"es":"Ella cree que es verdad."}, { de: "Wir gehen, weil es spät ist.", ku: "دەڕۆین، چونکە درەنگە.", tr: "Geç olduğu için gidiyoruz.", en: "We are leaving because it is late.", ar: "نذهب لأن الوقت متأخر.", uk: "Ми йдемо, бо вже пізно.", fa: "ما می‌رویم، زیرا دیر است." ,"es":"Nos vamos porque es tarde."} ] ,"es":"Cláusulas subordinadas: weil, dass","expEs":"Después de weil (porque) y dass (que), el verbo se mueve al final de la cláusula subordinada. Esto es una diferencia importante de una oración simple."},
    { de: "Relativsätze (basic)", ku: "ڕستەی پەیوەندیدار (سادە)", icon: "⌐",
      exp: "بۆ زانیاری زیاتر دەربارەی ناو. جێناوی پەیوەندیدار (der, die, das) لەگەڵ ڕەگەزی ناوەکە دەگونجێت و کردار دەچێتە کۆتایی.",
      tr: "Bağımlı Cümleler (Temel)", expTr: "İsim hakkında daha fazla bilgi vermek için. Bağıl zamir (der, die, das) ismin cinsiyetiyle uyuşur ve fiil cümlenin sonuna gider.",
      en: "Relative clauses (basic)", expEn: "Used to give more information about a noun. The relative pronoun (der, die, das) agrees with the gender of the noun, and the verb moves to the end.",
      ar: "جمل الصلة (أساسي)", uk: "Підрядні означальні речення (основи)", fa: "جملات موصولی (پایه)", expAr: "تُستخدم لإعطاء معلومات إضافية عن الاسم. الضمير الموصول (der, die, das) يتوافق مع جنس الاسم، وينتقل الفعل إلى نهاية الجملة.", expUk: "Вживаються, щоб дати більше інформації про іменник. Відносний займенник (der, die, das) узгоджується з родом іменника, а дієслово переходить у кінець.", expFa: "برای دادن اطلاعات بیشتر دربارهٔ یک اسم به کار می‌رود. ضمیر موصولی (der, die, das) با جنسیت اسم مطابقت می‌کند و فعل به انتها می‌رود.",
      ex: [ { de: "Der Mann, der dort steht, ...", ku: "ئەو پیاوەی لەوێ ڕاوەستاوە، ...", tr: "Orada duran adam, ...", en: "The man who is standing there, ...", ar: "الرجل الذي يقف هناك، ...", uk: "Чоловік, який там стоїть, …", fa: "مردی که آنجا ایستاده است، …" ,"es":"El hombre que está parado allí,..."}, { de: "Das Buch, das ich lese, ...", ku: "ئەو کتێبەی دەیخوێنمەوە، ...", tr: "Okuduğum kitap, ...", en: "The book that I am reading, ...", ar: "الكتاب الذي أقرؤه، ...", uk: "Книга, яку я читаю, …", fa: "کتابی که می‌خوانم، …" ,"es":"El libro que estoy leyendo,..."}, { de: "Die Frau, die singt, ...", ku: "ئەو ژنەی گۆرانی دەڵێت، ...", tr: "Şarkı söyleyen kadın, ...", en: "The woman who is singing, ...", ar: "المرأة التي تغني، ...", uk: "Жінка, яка співає, …", fa: "زنی که آواز می‌خواند، …" ,"es":"La mujer que está cantando,..."}, { de: "Das Auto, das rot ist, ...", ku: "ئەو ئۆتۆمبێلەی سوورە، ...", tr: "Kırmızı araba, ...", en: "The red car, ...", ar: "السيارة الحمراء، ...", uk: "Машина, яка червона, …", fa: "خودرویی که قرمز است، …" ,"es":"El coche rojo,..."}, { de: "Der Freund, der hilft, ...", ku: "ئەو هاوڕێیەی یارمەتی دەدات، ...", tr: "Yardım eden arkadaş, ...", en: "The friend who helps, ...", ar: "الصديق الذي يساعد، ...", uk: "Друг, який допомагає, …", fa: "دوستی که کمک می‌کند، …" ,"es":"El amigo que ayuda,..."}, { de: "Die Stadt, die schön ist, ...", ku: "ئەو شارەی جوانە، ...", tr: "Güzel şehir, ...", en: "The beautiful city, ...", ar: "المدينة الجميلة، ...", uk: "Місто, яке гарне, …", fa: "شهری که زیبا است، …" ,"es":"La hermosa ciudad,..."} ] ,"es":"Cláusulas relativas (básicas)","expEs":"Se usa para dar más información sobre un sustantivo. El pronombre relativo (der, die, das) está de acuerdo con el género del sustantivo, y el verbo se mueve hasta el final."},
    { de: "Genitiv (Einführung)", ku: "گەنیتیڤ (ناساندن)", icon: "'s",
      exp: "گەنیتیڤ خاوەندارێتی پیشان دەدات (هی کێ؟). ئارتیکڵ: des/eines (+s بۆ ناوی نێر/بێلایەن)، der (مێ).",
      tr: "Genitif (Giriş)", expTr: "Genitif sahipliği gösterir (kimin?). Artikel: des/eines (+s eril/yansız için), der (dişil).",
      en: "Genitive (introduction)", expEn: "Genitive shows possession (whose?). Article: des/eines (+s for masculine/neuter nouns), der (feminine).",
      ar: "حالة الإضافة (الجنيتيف) - مقدمة", uk: "Родовий відмінок (вступ)", fa: "حالت اضافی (Genitiv) — مقدمه", expAr: "حالة الإضافة (الجينيتيف) تدل على الملكية (ملك من؟). أداة التعريف: des/eines (+s للمذكر والمحايد)، der (للمؤنث).", expUk: "Родовий відмінок показує належність (чий?). Артикль: des/eines (+s для іменників чоловічого/середнього роду), der (жіночий).", expFa: "حالت اضافی مالکیت را نشان می‌دهد (مالِ چه کسی؟). حرف تعریف: des/eines (+s برای اسم‌های مذکر/خنثی)، der (مؤنث).",
      ex: [ { de: "das Auto des Mannes", ku: "ئۆتۆمبێلی پیاوەکە", tr: "adamın arabası", en: "the man's car", ar: "سيارة الرجل", uk: "машина чоловіка", fa: "خودروی آن مرد" ,"es":"el coche del hombre"}, { de: "die Farbe der Blume", ku: "ڕەنگی گوڵەکە", tr: "çiçeğin rengi", en: "the flower's color", ar: "لون الزهرة", uk: "колір квітки", fa: "رنگ آن گل" ,"es":"el color de la flor"}, { de: "der Titel des Buches", ku: "ناونیشانی کتێبەکە", tr: "kitabın başlığı", en: "the book's title", ar: "عنوان الكتاب", uk: "назва книги", fa: "عنوان آن کتاب" ,"es":"el título del libro"}, { de: "das Haus meiner Eltern", ku: "خانووی دایک و باوکم", tr: "annemin babamın evi", en: "my parents' house", ar: "بيت والدَيّ", uk: "будинок моїх батьків", fa: "خانهٔ والدینم" ,"es":"casa de mis padres"}, { de: "der Name des Kindes", ku: "ناوی منداڵەکە", tr: "çocuğun adı", en: "the child's name", ar: "اسم الطفل", uk: "ім'я дитини", fa: "نامِ آن کودک" ,"es":"el nombre del niño"}, { de: "die Tür des Hauses", ku: "دەرگای خانووەکە", tr: "evin kapısı", en: "the house's door", ar: "باب البيت", uk: "двері будинку", fa: "درِ آن خانه" ,"es":"la puerta de la casa"} ] ,"es":"Genitivo (introducción)","expEs":"El genito muestra la posesión (¿de quién?). Artículo: des/eines (+s para los sustantivos masculinos/neuter), der (femenino)."},
  ],
  B1: [
    { de: "Adjektivdeklination", ku: "ڕەوانبێژی سیفەت", icon: "✦",
      exp: "کاتێک سیفەت پێش ناو دێت، کۆتاییەکەی دەگۆڕێت بەپێی ئارتیکڵ، ڕەگەز و کەیس. دوای der/die/das زۆرجار -e یان -en.",
      tr: "Sıfat Çekimi", expTr: "Sıfat ismin önüne geldiğinde artikel, cinsiyet ve hale göre eki değişir. der/die/das'tan sonra genellikle -e veya -en.",
      en: "Adjective declension", expEn: "When an adjective comes before a noun, its ending changes according to the article, gender, and case. After der/die/das it is usually -e or -en.",
      ar: "تصريف الصفات", uk: "Відмінювання прикметників", fa: "صرف صفت", expAr: "عندما تأتي الصفة قبل الاسم، تتغير نهايتها حسب أداة التعريف والجنس والحالة الإعرابية. بعد der/die/das تكون عادة -e أو -en.", expUk: "Коли прикметник стоїть перед іменником, його закінчення змінюється відповідно до артикля, роду й відмінка. Після der/die/das воно зазвичай -e або -en.", expFa: "وقتی صفت پیش از اسم می‌آید، پایانهٔ آن بر اساس حرف تعریف، جنس و حالت تغییر می‌کند. پس از der/die/das معمولاً -e یا -en است.",
      ex: [ { de: "der rote Apfel", ku: "سێوە سوورەکە", tr: "kırmızı elma (belirli eril)", en: "the red apple (definite masculine)", ar: "التفاحة الحمراء (مذكر معرّف)", uk: "червоне яблуко (означений, чоловічий рід)", fa: "سیب قرمز (معرفه، مذکر)" ,"es":"la manzana roja (masculino definido)"}, { de: "ein roter Apfel", ku: "سێوێکی سوور", tr: "kırmızı bir elma (belirsiz)", en: "a red apple (indefinite)", ar: "تفاحة حمراء (نكرة)", uk: "червоне яблуко (неозначений)", fa: "یک سیب قرمز (نکره)" ,"es":"una manzana roja (indefinida)"}, { de: "mit dem roten Auto", ku: "بە ئۆتۆمبێلە سوورەکە", tr: "kırmızı arabayla", en: "with the red car", ar: "بالسيارة الحمراء", uk: "з червоною машиною", fa: "با خودروی قرمز" ,"es":"con el coche rojo"}, { de: "die schöne Stadt", ku: "شارە جوانەکە", tr: "güzel şehir", en: "the beautiful city", ar: "المدينة الجميلة", uk: "гарне місто", fa: "شهر زیبا" ,"es":"la hermosa ciudad"}, { de: "ein gutes Buch", ku: "کتێبێکی باش", tr: "iyi bir kitap", en: "a good book", ar: "كتاب جيد", uk: "хороша книга", fa: "یک کتاب خوب" ,"es":"un buen libro"}, { de: "kaltes Wasser", ku: "ئاوی سارد", tr: "soğuk su (artikelsiz)", en: "cold water (without article)", ar: "ماء بارد (بدون أداة تعريف)", uk: "холодна вода (без артикля)", fa: "آب سرد (بدون حرف تعریف)" ,"es":"Agua fría (sin artículo)"} ] ,"es":"Descenso de la aplicación","expEs":"Cuando un adjetivo viene antes de un sustantivo, su final cambia según el artículo, género y caso. Después de der/die/das es normalmente -e o -en."},
    { de: "Genitiv", ku: "گەنیتیڤ (تەواو)", icon: "'s",
      exp: "خاوەندارێتی و پەیوەندی. ناوی نێر/بێلایەن +s دەگرن. هەروەها لەگەڵ هەندێ ئامرازدا بەکاردێت (wegen, trotz).",
      tr: "Genitif (Tam)", expTr: "Sahiplik ve bağlantı. Eril/yansız isimler +s alır. Ayrıca bazı edatlarla kullanılır (wegen, trotz).",
      en: "Genitive (full)", expEn: "Possession and connection. Masculine/neuter nouns take +s. Also used with certain prepositions (wegen, trotz).",
      ar: "حالة الإضافة (الجنيتيف) الكاملة", uk: "Родовий відмінок (повний)", fa: "حالت اضافی (کامل)", expAr: "الملكية والعلاقة. الأسماء المذكرة والمحايدة تأخذ +s. تُستخدم أيضاً مع بعض حروف الجر (wegen، trotz).", expUk: "Належність і зв'язок. Іменники чоловічого/середнього роду беруть +s. Також вживається з певними прийменниками (wegen, trotz).", expFa: "مالکیت و ارتباط. اسم‌های مذکر/خنثی +s می‌گیرند. همچنین با برخی حروف اضافه به کار می‌رود (wegen، trotz).",
      ex: [ { de: "das Haus meines Vaters", ku: "خانووی باوکم", tr: "babamın evi", en: "my father's house", ar: "بيت أبي", uk: "будинок мого батька", fa: "خانهٔ پدرم" ,"es":"La casa de mi padre"}, { de: "wegen des Wetters", ku: "بەهۆی کەش‌وهەواوە", tr: "hava yüzünden", en: "because of the weather", ar: "بسبب الطقس", uk: "через погоду", fa: "به‌خاطر هوا" ,"es":"debido al tiempo"}, { de: "trotz des Regens", ku: "سەرەڕای بارانەکە", tr: "yağmura rağmen", en: "despite the rain", ar: "رغم المطر", uk: "попри дощ", fa: "با وجود باران" ,"es":"a pesar de la lluvia"}, { de: "die Meinung der Leute", ku: "بۆچوونی خەڵک", tr: "halkın görüşü", en: "the opinion of the people", ar: "رأي الناس", uk: "думка людей", fa: "نظر مردم" ,"es":"la opinión del pueblo"}, { de: "während des Tages", ku: "لە ماوەی ڕۆژدا", tr: "gündüz boyunca", en: "during the day", ar: "خلال النهار", uk: "протягом дня", fa: "در طول روز" ,"es":"durante el día"}, { de: "der Anfang des Films", ku: "سەرەتای فیلمەکە", tr: "filmin başlangıcı", en: "the beginning of the film", ar: "بداية الفيلم", uk: "початок фільму", fa: "آغاز فیلم" ,"es":"el comienzo de la película"} ] ,"es":"Genitivo (completo)","expEs":"Posesión y conexión. Los sustantivos masculinos/neuter toman +s. También se usan con ciertas preposiciones (wegen, trotz)."},
    { de: "Präpositionen mit Genitiv", ku: "ئامراز لەگەڵ گەنیتیڤ", icon: "⌖",
      exp: "هەندێ ئامراز Genitiv وەردەگرن: wegen (بەهۆی)، trotz (سەرەڕای)، während (لە ماوەی)، (an)statt (لەبری).",
      tr: "Genitifli Edatlar", expTr: "Bazı edatlar Genitif alır: wegen (yüzünden), trotz (rağmen), während (-esnasında), (an)statt (-yerine).",
      en: "Prepositions with genitive", expEn: "Some prepositions take the genitive: wegen (because of), trotz (despite), während (during), (an)statt (instead of).",
      ar: "حروف الجر مع حالة الإضافة", uk: "Прийменники з родовим відмінком", fa: "حروف اضافه با حالت اضافی", expAr: "بعض حروف الجر تأخذ حالة الإضافة (Genitiv): wegen (بسبب)، trotz (رغم)، während (أثناء)، (an)statt (بدلاً من).", expUk: "Деякі прийменники керують родовим відмінком: wegen (через), trotz (попри), während (протягом), (an)statt (замість).", expFa: "برخی حروف اضافه حالت اضافی می‌گیرند: wegen (به‌خاطرِ)، trotz (با وجودِ)، während (در طولِ)، (an)statt (به‌جایِ).",
      ex: [ { de: "während des Kurses", ku: "لە ماوەی خولەکەدا", tr: "ders boyunca", en: "during the course", ar: "أثناء الدورة", uk: "протягом курсу", fa: "در طول دوره" ,"es":"durante el curso"}, { de: "wegen des Problems", ku: "بەهۆی کێشەکەوە", tr: "sorun yüzünden", en: "because of the problem", ar: "بسبب المشكلة", uk: "через проблему", fa: "به‌خاطر مشکل" ,"es":"debido al problema"}, { de: "trotz der Kälte", ku: "سەرەڕای ساردی", tr: "soğuğa rağmen", en: "despite the cold", ar: "رغم البرد", uk: "попри холод", fa: "با وجود سرما" ,"es":"a pesar del frío"}, { de: "statt des Kaffees", ku: "لەبری قاوەکە", tr: "kahve yerine", en: "instead of the coffee", ar: "بدلاً من القهوة", uk: "замість кави", fa: "به‌جای قهوه" ,"es":"en lugar del café"}, { de: "innerhalb einer Woche", ku: "لە ماوەی هەفتەیەکدا", tr: "bir hafta içinde", en: "within a week", ar: "خلال أسبوع", uk: "протягом тижня", fa: "ظرف یک هفته" ,"es":"dentro de una semana"}, { de: "außerhalb der Stadt", ku: "لە دەرەوەی شارەکە", tr: "şehrin dışında", en: "outside the city", ar: "خارج المدينة", uk: "за межами міста", fa: "بیرون از شهر" ,"es":"fuera de la ciudad"} ] ,"es":"Preposiciones con genitivo","expEs":"Algunas preposiciones toman el genitivo: wegen (debido a), trotz (a pesar), während (durante), (an)statt (en lugar de)."},
    { de: "Plusquamperfekt", ku: "ڕابردووی دوور", icon: "⟲",
      exp: "بۆ کارێک کە پێش کارێکی تری ڕابردوو ڕوویداوە. hatte/war + Partizip II. زۆرجار لەگەڵ nachdem بەکاردێت.",
      tr: "Daha-önce-geçmiş Zaman", expTr: "Geçmişte başka bir olaydan önce gerçekleşen bir eylem için. hatte/war + Partizip II. Genellikle nachdem ile kullanılır.",
      en: "Past perfect (Plusquamperfekt)", expEn: "For an action that happened before another action in the past. hatte/war + Partizip II. Often used with nachdem.",
      ar: "الماضي البعيد (Plusquamperfekt)", uk: "Давноминулий час (Plusquamperfekt)", fa: "ماضی بعید (Plusquamperfekt)", expAr: "لفعل حدث قبل فعل آخر في الماضي. hatte/war + التصريف الثالث (Partizip II). كثيراً ما يُستخدم مع nachdem.", expUk: "Для дії, що відбулася перед іншою дією в минулому. hatte/war + Partizip II. Часто вживається з nachdem.", expFa: "برای کاری که پیش از کاری دیگر در گذشته رخ داده است. hatte/war + Partizip II. اغلب با nachdem به کار می‌رود.",
      ex: [ { de: "Ich hatte schon gegessen.", ku: "پێشتر خواردبووم.", tr: "Daha önce yemiştim.", en: "I had already eaten.", ar: "كنتُ قد أكلتُ بالفعل.", uk: "Я вже поїв.", fa: "من از قبل غذا خورده بودم." ,"es":"Ya había comido."}, { de: "Er war schon gegangen.", ku: "ئەو پێشتر ڕۆیشتبوو.", tr: "O daha önce gitmişti.", en: "He had already left.", ar: "كان قد ذهب بالفعل.", uk: "Він уже пішов.", fa: "او از قبل رفته بود." ,"es":"Ya se había ido."}, { de: "Nachdem ich gegessen hatte, ...", ku: "دوای ئەوەی خواردبووم، ...", tr: "Yedikten sonra, ...", en: "After I had eaten, ...", ar: "بعد أن كنتُ قد أكلتُ، ...", uk: "Після того, як я поїв, …", fa: "بعد از اینکه غذا خورده بودم، …" ,"es":"Después de comer,..."}, { de: "Sie hatte den Brief geschrieben.", ku: "نامەکەی نووسیبوو.", tr: "Mektubu yazmıştı.", en: "She had written the letter.", ar: "كانت قد كتبت الرسالة.", uk: "Вона написала листа.", fa: "او نامه را نوشته بود." ,"es":"Ella había escrito la carta."}, { de: "Wir waren schon angekommen.", ku: "پێشتر گەیشتبووین.", tr: "Daha önce gelmiştik.", en: "We had already arrived.", ar: "كنا قد وصلنا بالفعل.", uk: "Ми вже прибули.", fa: "ما از قبل رسیده بودیم." ,"es":"Ya habíamos llegado."}, { de: "Hattest du das gewusst?", ku: "ئەمەت زانیبوو؟", tr: "Bunu biliyor muydun?", en: "Had you known that?", ar: "هل كنتَ قد عرفتَ ذلك؟", uk: "Ти це знав?", fa: "آیا این را می‌دانستی؟" ,"es":"¿Lo sabías?"} ] ,"es":"Pasado perfecto (Plusquamperfekt)","expEs":"Para una acción que ocurrió antes de otra acción en el pasado. hatte/war + Partizip II. A menudo se utiliza con nachdem."},
    { de: "Futur I", ku: "داهاتوو (Futur I)", icon: "⇉",
      exp: "بۆ داهاتوو و گریمانە. werden + کرداری بنەڕەتی (لە کۆتایی). هەرچەندە زۆرجار کاتی ئێستا بۆ داهاتوو بەکاردێت.",
      tr: "Gelecek Zaman (Futur I)", expTr: "Gelecek ve tahmin için. werden + mastar (sonda). Ancak günlük konuşmada gelecek için genellikle şimdiki zaman kullanılır.",
      en: "Future tense I", expEn: "For the future and assumptions. werden + infinitive (at the end). However, the present tense is often used for the future in everyday speech.",
      ar: "زمن المستقبل الأول", uk: "Майбутній час I", fa: "زمان آینده I (Futur I)", expAr: "للمستقبل والتخمين. werden + المصدر (في النهاية). لكن غالباً ما يُستخدم زمن المضارع للتعبير عن المستقبل في الحديث اليومي.", expUk: "Для майбутнього і припущень. werden + інфінітив (у кінці). Проте в повсякденному мовленні для майбутнього часто вживають теперішній час.", expFa: "برای آینده و گمانه‌زنی. werden + مصدر (در انتها). با این حال، در گفتار روزمره اغلب زمان حال برای آینده به کار می‌رود.",
      ex: [ { de: "Ich werde Deutsch lernen.", ku: "ئەڵمانی فێردەبم (داهاتوو).", tr: "Almanca öğreneceğim (gelecek).", en: "I will learn German (future).", ar: "سأتعلم الألمانية (المستقبل).", uk: "Я вивчатиму німецьку (майбутній).", fa: "من آلمانی یاد خواهم گرفت (آینده)." ,"es":"Aprenderé alemán (futuro)."}, { de: "Es wird regnen.", ku: "باران دەبارێت.", tr: "Yağmur yağacak.", en: "It will rain.", ar: "ستمطر.", uk: "Буде дощ.", fa: "باران خواهد بارید." ,"es":"Lloverá."}, { de: "Wir werden sehen.", ku: "دەبینین.", tr: "Göreceğiz.", en: "We will see.", ar: "سنرى.", uk: "Побачимо.", fa: "خواهیم دید." ,"es":"Ya veremos."}, { de: "Sie wird Ärztin werden.", ku: "دەبێتە پزیشک.", tr: "Doktor olacak.", en: "She will become a doctor.", ar: "ستصبح طبيبة.", uk: "Вона стане лікаркою.", fa: "او پزشک خواهد شد." ,"es":"Se convertirá en doctora."}, { de: "Ich werde dich anrufen.", ku: "پەیوەندیت پێوە دەکەم.", tr: "Seni arayacağım.", en: "I will call you.", ar: "سأتصل بك.", uk: "Я тобі зателефоную.", fa: "من به تو زنگ خواهم زد." ,"es":"Te llamaré."}, { de: "Morgen wird es kalt sein.", ku: "سبەینێ سارد دەبێت.", tr: "Yarın soğuk olacak.", en: "Tomorrow it will be cold.", ar: "غداً سيكون الجو بارداً.", uk: "Завтра буде холодно.", fa: "فردا هوا سرد خواهد بود." ,"es":"Mañana estará frío."} ] ,"es":"Tiempo futuro I","expEs":"Para el futuro y las suposiciones. werden + infinitive (al final). Sin embargo, el tiempo presente se utiliza a menudo para el futuro en el discurso diario."},
    { de: "Konjunktionen: obwohl, wenn, als, während…", ku: "گرێدەرە لاوەکییەکان", icon: "⟜",
      exp: "obwohl (هەرچەندە)، wenn (ئەگەر/کاتێک)، als (کاتێک-ڕابردوو)، während (لە کاتێکدا)، bevor (پێش)، nachdem (دوای)، seitdem (لەو کاتەوە). کردار دەچێتە کۆتایی.",
      tr: "Yan Cümle Bağlaçları", expTr: "obwohl (her ne kadar), wenn (eğer/ne zaman), als (ne zaman - geçmiş), während (iken), bevor (önce), nachdem (sonra), seitdem (o zamandan beri). Fiil cümlenin sonuna gider.",
      en: "Subordinate clause conjunctions", expEn: "obwohl (although), wenn (if/when), als (when - past), während (while), bevor (before), nachdem (after), seitdem (since then). The verb goes to the end of the clause.",
      ar: "أدوات ربط الجمل الثانوية", uk: "Сполучники підрядних речень", fa: "حروف ربط جملات پیرو", expAr: "obwohl (رغم أن)، wenn (إذا/عندما)، als (عندما - ماضٍ)، während (بينما)، bevor (قبل)، nachdem (بعد)، seitdem (منذ ذلك الحين). يذهب الفعل إلى نهاية الجملة.", expUk: "obwohl (хоча), wenn (якщо/коли), als (коли — минуле), während (поки), bevor (перш ніж), nachdem (після того як), seitdem (відтоді як). Дієслово переходить у кінець речення.", expFa: "obwohl (اگرچه)، wenn (اگر/وقتی)، als (وقتی — گذشته)، während (در حالی که)، bevor (پیش از)، nachdem (پس از)، seitdem (از وقتی که). فعل به انتهای جمله می‌رود.",
      ex: [ { de: "Als ich klein war, ...", ku: "کاتێک بچووک بووم، ...", tr: "Küçükken, ...", en: "When I was little, ...", ar: "عندما كنتُ صغيراً، ...", uk: "Коли я був малий, …", fa: "وقتی کوچک بودم، …" ,"es":"Cuando era pequeña,..."}, { de: "Bevor ich gehe, esse ich.", ku: "پێش ئەوەی بڕۆم، دەخۆم.", tr: "Gitmeden önce yiyorum.", en: "Before I go, I eat.", ar: "قبل أن أذهب، آكل.", uk: "Перш ніж піти, я їм.", fa: "پیش از رفتن، غذا می‌خورم." ,"es":"Antes de irme, como."}, { de: "Seitdem er hier ist, ...", ku: "لەو کاتەوەی لێرەیە، ...", tr: "O burada olduğundan beri, ...", en: "Since he has been here, ...", ar: "منذ أن أصبح هنا، ...", uk: "Відтоді, як він тут, …", fa: "از وقتی که او اینجاست، …" ,"es":"Desde que ha estado aquí,..."}, { de: "Obwohl es regnet, gehe ich.", ku: "هەرچەندە باران دەبارێت، دەڕۆم.", tr: "Her ne kadar yağmur yağsa da gidiyorum.", en: "Although it's raining, I'm going.", ar: "رغم أن المطر يهطل، سأذهب.", uk: "Хоча йде дощ, я йду.", fa: "اگرچه باران می‌بارد، من می‌روم." ,"es":"Aunque llueva, me voy."}, { de: "Wenn ich Zeit habe, komme ich.", ku: "ئەگەر کاتم هەبێت، دێم.", tr: "Zamanım olursa gelirim.", en: "If I have time, I'll come.", ar: "إذا كان لدي وقت، سآتي.", uk: "Якщо матиму час, я прийду.", fa: "اگر وقت داشته باشم، می‌آیم." ,"es":"Si tengo tiempo, iré."}, { de: "Während sie kocht, lese ich.", ku: "لە کاتێکدا ئەو خواردن لێدەنێ، دەخوێنمەوە.", tr: "O pişirirken okuyorum.", en: "While she cooks, I read.", ar: "بينما تطبخ، أقرأ.", uk: "Поки вона готує, я читаю.", fa: "در حالی که او آشپزی می‌کند، من می‌خوانم." ,"es":"Mientras ella cocina, yo leo."} ] ,"es":"Conjunciones de cláusulas subordinadas","expEs":"obwohl (aunque), wenn (si/cuándo), als (cuando - pasado), während (mientras tanto), bevor (antes), nachdem (después), seitdem (desde entonces). El verbo va al final de la cláusula."},
    { de: "Relativsätze (detail)", ku: "ڕستەی پەیوەندیدار (ورد)", icon: "⌐",
      exp: "جێناوی پەیوەندیدار لە هەموو کەیسەکاندا دەگۆڕێت: Nominativ (der)، Akkusativ (den)، Dativ (dem)، Genitiv (dessen/deren).",
      tr: "Bağımlı Cümleler (Ayrıntılı)", expTr: "Bağıl zamir tüm hallerde değişir: Yalın (der), Belirtme (den), Datif (dem), Genitif (dessen/deren).",
      en: "Relative clauses (detailed)", expEn: "The relative pronoun changes in every case: nominative (der), accusative (den), dative (dem), genitive (dessen/deren).",
      ar: "جمل الصلة (تفصيلي)", uk: "Підрядні означальні речення (детально)", fa: "جملات موصولی (تفصیلی)", expAr: "يتغير الضمير الموصول في جميع الحالات الإعرابية: الرفع (der)، النصب (den)، الجر (dem)، الإضافة (dessen/deren).", expUk: "Відносний займенник змінюється в кожному відмінку: називний (der), знахідний (den), давальний (dem), родовий (dessen/deren).", expFa: "ضمیر موصولی در هر حالتی تغییر می‌کند: نهادی (der)، مفعولی (den)، به‌ای (dem)، اضافی (dessen/deren).",
      ex: [ { de: "Der Mann, dem ich helfe, ...", ku: "ئەو پیاوەی یارمەتی دەدەم، ... (Dativ)", tr: "Yardım ettiğim adam, ... (Datif)", en: "The man whom I help, ... (dative)", ar: "الرجل الذي أساعده، ... (حالة الجر)", uk: "Чоловік, якому я допомагаю, … (давальний)", fa: "مردی که به او کمک می‌کنم، … (Dativ)" ,"es":"El hombre al que ayudo,... (dativo)"}, { de: "Das Kind, dessen Buch ...", ku: "ئەو منداڵەی کتێبەکەی ... (Genitiv)", tr: "Kitabı olan çocuk, ... (Genitif)", en: "The child whose book ... (genitive)", ar: "الطفل الذي كتابه ... (حالة الإضافة)", uk: "Дитина, чия книга … (родовий)", fa: "کودکی که کتابش … (Genitiv)" ,"es":"El niño cuyo libro... (genitivo)"}, { de: "Die Stadt, in der ich wohne, ...", ku: "ئەو شارەی تێیدا دەژیم، ...", tr: "İçinde yaşadığım şehir, ...", en: "The city in which I live, ...", ar: "المدينة التي أعيش فيها، ...", uk: "Місто, в якому я живу, …", fa: "شهری که در آن زندگی می‌کنم، …" ,"es":"La ciudad en la que vivo,..."}, { de: "Der Film, den ich gesehen habe, ...", ku: "ئەو فیلمەی بینیم، ...", tr: "İzlediğim film, ...", en: "The film that I have watched, ...", ar: "الفيلم الذي شاهدته، ...", uk: "Фільм, який я подивився, …", fa: "فیلمی که دیده‌ام، …" ,"es":"La película que he visto,..."}, { de: "Die Leute, mit denen ich arbeite, ...", ku: "ئەو کەسانەی لەگەڵیان کار دەکەم، ...", tr: "Birlikte çalıştığım insanlar, ...", en: "The people with whom I work, ...", ar: "الأشخاص الذين أعمل معهم، ...", uk: "Люди, з якими я працюю, …", fa: "کسانی که با آن‌ها کار می‌کنم، …" ,"es":"La gente con la que trabajo,..."}, { de: "Das Auto, das er kaufte, ...", ku: "ئەو ئۆتۆمبێلەی کڕی، ...", tr: "Satın aldığı araba, ...", en: "The car that he bought, ...", ar: "السيارة التي اشتراها، ...", uk: "Машина, яку він купив, …", fa: "خودرویی که او خرید، …" ,"es":"El coche que compró,..."} ] ,"es":"Cláusulas relativas (detalles)","expEs":"El pronombre relativo cambia en cada caso: nominativo (der), acusativo (den), dativo (dem), genitivo (dessen/deren)."},
    { de: "Indirekte Fragen", ku: "پرسیاری ناڕاستەوخۆ", icon: "?",
      exp: "پرسیار دەخرێتە ناو ڕستەیەکەوە؛ کردار دەچێتە کۆتایی. لەگەڵ ob (ئایا) بۆ پرسیاری بەڵێ/نەخێر.",
      tr: "Dolaylı Sorular", expTr: "Soru bir cümlenin içine yerleştirilir; fiil sona gider. Evet/hayır soruları için ob (acaba) ile.",
      en: "Indirect questions", expEn: "The question is embedded within a sentence; the verb goes to the end. With ob (whether) for yes/no questions.",
      ar: "الأسئلة غير المباشرة", uk: "Непрямі питання", fa: "پرسش‌های غیرمستقیم", expAr: "يُدرج السؤال داخل جملة؛ ويذهب الفعل إلى النهاية. تُستخدم ob (هل) لأسئلة نعم/لا.", expUk: "Питання вбудоване в речення; дієслово переходить у кінець. З ob (чи) для питань так/ні.", expFa: "پرسش درون یک جمله جای می‌گیرد؛ فعل به انتها می‌رود. برای پرسش‌های بله/خیر با ob (آیا).",
      ex: [ { de: "Weißt du, wo er ist?", ku: "دەزانیت لەکوێیە؟", tr: "Nerede olduğunu biliyor musun?", en: "Do you know where he is?", ar: "هل تعرف أين هو؟", uk: "Ти знаєш, де він?", fa: "می‌دانی او کجاست؟" ,"es":"¿Sabes dónde está?"}, { de: "Ich frage, ob es regnet.", ku: "دەپرسم ئایا باران دەبارێت.", tr: "Yağmur yağıp yağmadığını soruyorum.", en: "I'm asking whether it's raining.", ar: "أسأل عما إذا كان المطر يهطل.", uk: "Я питаю, чи йде дощ.", fa: "می‌پرسم آیا باران می‌بارد." ,"es":"Estoy preguntando si está lloviendo."}, { de: "Sag mir, wann du kommst.", ku: "پێم بڵێ کەی دێیت.", tr: "Ne zaman geldiğini söyle.", en: "Tell me when you're coming.", ar: "أخبرني متى ستأتي.", uk: "Скажи мені, коли ти прийдеш.", fa: "به من بگو کِی می‌آیی." ,"es":"Dime cuándo vas a venir."}, { de: "Ich weiß nicht, was das ist.", ku: "نازانم ئەمە چییە.", tr: "Bunun ne olduğunu bilmiyorum.", en: "I don't know what that is.", ar: "لا أعرف ما هذا.", uk: "Я не знаю, що це.", fa: "نمی‌دانم این چیست." ,"es":"No sé qué es eso."}, { de: "Kannst du mir sagen, wie es geht?", ku: "دەتوانیت پێم بڵێیت چۆنە؟", tr: "Nasıl olduğunu söyleyebilir misiniz?", en: "Can you tell me how it's going?", ar: "هل يمكنك أن تخبرني كيف الحال؟", uk: "Можеш сказати мені, як справи?", fa: "می‌توانی به من بگویی اوضاع چطور است؟" ,"es":"¿Puedes decirme cómo va todo?"}, { de: "Er fragt, warum du gehst.", ku: "دەپرسێت بۆچی دەڕۆیت.", tr: "Neden gittiğini soruyor.", en: "He asks why you're leaving.", ar: "يسأل لماذا تذهب.", uk: "Він питає, чому ти йдеш.", fa: "او می‌پرسد چرا می‌روی." ,"es":"Pregunta por qué te vas."} ] ,"es":"Cuestiones indirectas","expEs":"La pregunta está incrustada dentro de una oración; el verbo va al final. Con ob (si) para preguntas sí/no."},
    { de: "Infinitiv mit zu", ku: "ئینفینیتیڤ لەگەڵ zu", icon: "zu",
      exp: "دوای هەندێ کردار/ناو/سیفەت، کرداری دووەم بە «zu + Infinitiv» دێت. نموونە: «Ich versuche zu lernen».",
      tr: "zu'lu Mastar", expTr: "Bazı fiil/isim/sıfatların ardından ikinci fiil «zu + Mastar» ile gelir. Örnek: «Ich versuche zu lernen».",
      en: "Infinitive with \"zu\"", expEn: "After certain verbs, nouns, or adjectives, the second verb comes with 'zu + infinitive'. Example: 'Ich versuche zu lernen' (I try to learn).",
      ar: "المصدر مع «zu»", uk: "Інфінітив із «zu»", fa: "مصدر با «zu»", expAr: "بعد بعض الأفعال/الأسماء/الصفات، يأتي الفعل الثاني بصيغة «zu + المصدر». مثال: «Ich versuche zu lernen» (أحاول أن أتعلم).", expUk: "Після певних дієслів, іменників або прикметників друге дієслово вживається з «zu + інфінітив». Приклад: «Ich versuche zu lernen» (Я намагаюся вчитися).", expFa: "پس از برخی افعال، اسم‌ها یا صفت‌ها، فعل دوم با «zu + مصدر» می‌آید. مثال: «Ich versuche zu lernen» (سعی می‌کنم یاد بگیرم).",
      ex: [ { de: "Ich versuche zu lernen.", ku: "هەوڵ دەدەم فێربم.", tr: "Öğrenmeye çalışıyorum.", en: "I try to learn.", ar: "أحاول أن أتعلم.", uk: "Я намагаюся вчитися.", fa: "من سعی می‌کنم یاد بگیرم." ,"es":"Trato de aprender."}, { de: "Es ist wichtig zu üben.", ku: "گرنگە مەشق بکەیت.", tr: "Alıştırma yapmak önemli.", en: "It's important to practice.", ar: "من المهم أن تتدرب.", uk: "Важливо тренуватися.", fa: "تمرین کردن مهم است." ,"es":"Es importante practicar."}, { de: "Ich habe vergessen anzurufen.", ku: "بیرم چووە پەیوەندی بکەم.", tr: "Aramayı unuttum.", en: "I forgot to call.", ar: "نسيتُ أن أتصل.", uk: "Я забув зателефонувати.", fa: "فراموش کردم زنگ بزنم." ,"es":"Olvidé llamar."}, { de: "Ich hoffe dich zu sehen.", ku: "هیوادارم بتبینم.", tr: "Seni görmeyi umuyorum.", en: "I hope to see you.", ar: "أتمنى أن أراك.", uk: "Сподіваюся тебе побачити.", fa: "امیدوارم تو را ببینم." ,"es":"Espero verte."}, { de: "Es macht Spaß zu reisen.", ku: "گەشتکردن خۆشە.", tr: "Seyahat etmek eğlenceli.", en: "Traveling is fun.", ar: "السفر ممتع.", uk: "Подорожувати весело.", fa: "سفر کردن لذت‌بخش است." ,"es":"Viajar es divertido."}, { de: "Ich habe keine Zeit zu warten.", ku: "کاتم نییە چاوەڕێ بکەم.", tr: "Bekleyecek zamanım yok.", en: "I don't have time to wait.", ar: "ليس لدي وقت لأنتظر.", uk: "У мене немає часу чекати.", fa: "من وقت ندارم صبر کنم." ,"es":"No tengo tiempo para esperar."} ] ,"es":"Infinitivo con \"zu\"","expEs":"Después de ciertos verbos, sustantivos o adjetivos, el segundo verbo viene con 'zu + infinitivo'. Ejemplo: 'Ich versuche zu lernen' (Trato de aprender)."},
    { de: "um…zu / ohne…zu / statt…zu", ku: "um/ohne/statt + zu", icon: "⊕",
      exp: "um…zu (بۆ ئەوەی)، ohne…zu (بەبێ ئەوەی)، statt…zu (لەبری ئەوەی). هەردوو ڕستە یەک کردارکەریان هەیە.",
      tr: "um…zu / ohne…zu / statt…zu", expTr: "um…zu (... için), ohne…zu (... olmaksızın), statt…zu (... yerine). Her iki cümlenin aynı öznesi vardır.",
      en: "um…zu / ohne…zu / statt…zu", expEn: "um…zu (in order to), ohne…zu (without doing), statt…zu (instead of doing). Both clauses share the same subject.",
      ar: "um…zu / ohne…zu / statt…zu", uk: "um…zu / ohne…zu / statt…zu", fa: "um…zu / ohne…zu / statt…zu", expAr: "um…zu (لكي)، ohne…zu (من دون أن)، statt…zu (بدلاً من أن). كلا الجملتين لهما نفس الفاعل.", expUk: "um…zu (щоб), ohne…zu (не роблячи), statt…zu (замість того щоб). Обидва речення мають той самий підмет.", expFa: "um…zu (برای اینکه)، ohne…zu (بدون اینکه)، statt…zu (به‌جای اینکه). هر دو جمله فاعل یکسانی دارند.",
      ex: [ { de: "Ich lerne, um zu bestehen.", ku: "فێردەبم بۆ ئەوەی سەربکەوم.", tr: "Sınavı geçmek için çalışıyorum.", en: "I study in order to pass.", ar: "أدرس لكي أنجح.", uk: "Я вчуся, щоб скласти іспит.", fa: "من درس می‌خوانم تا قبول شوم." ,"es":"Estudio para pasar."}, { de: "Er geht, ohne zu grüßen.", ku: "دەڕوات بەبێ ئەوەی سڵاو بکات.", tr: "Selamlama yapmadan gitti.", en: "He leaves without saying hello.", ar: "يذهب من دون أن يلقي التحية.", uk: "Він іде, не привітавшись.", fa: "او می‌رود بدون اینکه سلام کند." ,"es":"Se va sin saludar."}, { de: "Statt zu schlafen, lese ich.", ku: "لەبری خەوتن، دەخوێنمەوە.", tr: "Uyumak yerine okuyorum.", en: "Instead of sleeping, I read.", ar: "بدلاً من أن أنام، أقرأ.", uk: "Замість того щоб спати, я читаю.", fa: "به‌جای اینکه بخوابم، می‌خوانم." ,"es":"En vez de dormir, leo."}, { de: "Ich spare, um ein Auto zu kaufen.", ku: "پارە کۆدەکەمەوە بۆ کڕینی ئۆتۆمبێل.", tr: "Araba almak için para biriktiriyorum.", en: "I'm saving up in order to buy a car.", ar: "أدخر المال لكي أشتري سيارة.", uk: "Я заощаджую, щоб купити машину.", fa: "من پس‌انداز می‌کنم تا خودرو بخرم." ,"es":"Estoy ahorrando para comprar un coche."}, { de: "Sie ging, ohne etwas zu sagen.", ku: "ڕۆیشت بەبێ ئەوەی شتێک بڵێت.", tr: "Bir şey söylemeden gitti.", en: "She left without saying anything.", ar: "ذهبت من دون أن تقول شيئاً.", uk: "Вона пішла, нічого не сказавши.", fa: "او رفت بدون اینکه چیزی بگوید." ,"es":"Se fue sin decir nada."}, { de: "Statt zu arbeiten, spielt er.", ku: "لەبری کارکردن، یاری دەکات.", tr: "Çalışmak yerine oynuyor.", en: "Instead of working, he plays.", ar: "بدلاً من أن يعمل، يلعب.", uk: "Замість того щоб працювати, він грає.", fa: "به‌جای اینکه کار کند، بازی می‌کند." ,"es":"En vez de trabajar, juega."} ] ,"es":"um...zu / ohne...zu / statt...zu","expEs":"um...zu (para), ohne...zu (sin hacer), statt...zu (en lugar de hacer). Ambas cláusulas comparten el mismo tema."},
    { de: "Passiv (Vorgangspassiv)", ku: "ڕستەی چالاک‌نەبوو", icon: "⊡",
      exp: "کاتێک کردار گرنگترە لە کردارکەر. werden + Partizip II. نموونە: «Das Haus wird gebaut» (خانووەکە دروست دەکرێت).",
      tr: "Edilgen Yapı (Eylem)", expTr: "Eylemin kim tarafından yapıldığından daha önemli olduğunda. werden + Partizip II. Örnek: «Das Haus wird gebaut» (Ev yapılıyor).",
      en: "Passive voice (action passive)", expEn: "Used when the action is more important than who performs it. werden + Partizip II. Example: 'Das Haus wird gebaut' (The house is being built).",
      ar: "المبني للمجهول (السلبي الإجرائي)", uk: "Пасивний стан (пасив дії)", fa: "حالت مجهول (مجهول کنشی)", expAr: "تُستخدم عندما يكون الفعل أهم من فاعله. werden + التصريف الثالث (Partizip II). مثال: «Das Haus wird gebaut» (يُبنى البيت).", expUk: "Вживається, коли дія важливіша за того, хто її виконує. werden + Partizip II. Приклад: «Das Haus wird gebaut» (Будинок будується).", expFa: "وقتی به کار می‌رود که کنش مهم‌تر از کنندهٔ آن باشد. werden + Partizip II. مثال: «Das Haus wird gebaut» (خانه ساخته می‌شود).",
      ex: [ { de: "Das Auto wird repariert.", ku: "ئۆتۆمبێلەکە چاک دەکرێتەوە.", tr: "Araba tamir ediliyor.", en: "The car is being repaired.", ar: "تُصلَح السيارة.", uk: "Машину ремонтують.", fa: "خودرو تعمیر می‌شود." ,"es":"El coche está siendo reparado."}, { de: "Die Tür wird geöffnet.", ku: "دەرگاکە دەکرێتەوە.", tr: "Kapı açılıyor.", en: "The door is being opened.", ar: "يُفتح الباب.", uk: "Двері відчиняють.", fa: "در باز می‌شود." ,"es":"La puerta está siendo abierta."}, { de: "Deutsch wird hier gesprochen.", ku: "لێرە ئەڵمانی قسە دەکرێت.", tr: "Burada Almanca konuşuluyor.", en: "German is spoken here.", ar: "تُتحدَّث الألمانية هنا.", uk: "Тут розмовляють німецькою.", fa: "اینجا آلمانی صحبت می‌شود." ,"es":"Aquí se habla alemán."}, { de: "Das Buch wird gelesen.", ku: "کتێبەکە دەخوێنرێتەوە.", tr: "Kitap okunuyor.", en: "The book is being read.", ar: "يُقرأ الكتاب.", uk: "Книгу читають.", fa: "کتاب خوانده می‌شود." ,"es":"El libro está siendo leído."}, { de: "Die Arbeit wird gemacht.", ku: "کارەکە دەکرێت.", tr: "İş yapılıyor.", en: "The work is being done.", ar: "يُنجَز العمل.", uk: "Роботу виконують.", fa: "کار انجام می‌شود." ,"es":"El trabajo está siendo hecho."}, { de: "Das Essen wird gekocht.", ku: "خواردنەکە لێدەنرێت.", tr: "Yemek pişiriliyor.", en: "The food is being cooked.", ar: "يُطهى الطعام.", uk: "Їжу готують.", fa: "غذا پخته می‌شود." ,"es":"La comida está siendo cocinada."} ] ,"es":"Voz pasiva (acción pasiva)","expEs":"Se usa cuando la acción es más importante que quién la realiza. werden + Partizip II. Ejemplo: 'Das Haus wird gebaut' (La casa está siendo construida)."},
    { de: "Konjunktiv II", ku: "کۆنیونکتیڤ II (مەرجی)", icon: "≈",
      exp: "بۆ خواست، گریمانە و ڕێزگرتن. würde + Infinitiv، یان hätte/wäre/könnte. زۆر بەکاردێت بۆ نەرمی.",
      tr: "Konjunktiv II (Dilek Kipi)", expTr: "İstek, varsayım ve nezaket için. würde + Mastar veya hätte/wäre/könnte. Nezaket için çok kullanılır.",
      en: "Subjunctive II (Konjunktiv II)", expEn: "For wishes, hypotheticals, and politeness. würde + infinitive, or hätte/wäre/könnte. Often used to sound polite.",
      ar: "الجملة الشرطية الثانية (Konjunktiv II)", uk: "Умовний спосіб II (Konjunktiv II)", fa: "وجه التزامی II (Konjunktiv II)", expAr: "للتمني والافتراض والتأدب. würde + المصدر، أو hätte/wäre/könnte. تُستخدم كثيراً لإضفاء اللباقة على الكلام.", expUk: "Для бажань, гіпотез та ввічливості. würde + інфінітив або hätte/wäre/könnte. Часто вживається, щоб звучати ввічливо.", expFa: "برای آرزوها، فرض‌ها و ادب. würde + مصدر، یا hätte/wäre/könnte. اغلب برای مؤدبانه‌تر شدن گفتار به کار می‌رود.",
      ex: [ { de: "Ich würde gern kommen.", ku: "حەز دەکەم بێم.", tr: "Gelmek isterdim.", en: "I would love to come.", ar: "أود أن آتي.", uk: "Я б залюбки прийшов.", fa: "من با کمال میل می‌آمدم." ,"es":"Me encantaría venir."}, { de: "Ich hätte eine Frage.", ku: "پرسیارێکم هەبووایە.", tr: "Bir sorum olurdu.", en: "I would have a question.", ar: "كان لدي سؤال.", uk: "У мене було б питання.", fa: "من یک سؤال داشتم." ,"es":"Yo tendría una pregunta."}, { de: "Könnten Sie mir helfen?", ku: "دەتوانن یارمەتیم بدەن؟", tr: "Yardım edebilir misiniz?", en: "Could you help me?", ar: "هل يمكنكم مساعدتي؟", uk: "Ви могли б мені допомогти?", fa: "می‌توانید به من کمک کنید؟" ,"es":"¿Podrías ayudarme?"}, { de: "Wenn ich reich wäre, ...", ku: "ئەگەر دەوڵەمەند بوومایە، ...", tr: "Zengin olsaydım, ...", en: "If I were rich, ...", ar: "لو كنتُ غنياً، ...", uk: "Якби я був багатий, …", fa: "اگر ثروتمند بودم، …" ,"es":"Si fuera rico,..."}, { de: "Das wäre toll.", ku: "ئەمە نایاب دەبوو.", tr: "Harika olurdu.", en: "That would be great.", ar: "سيكون ذلك رائعاً.", uk: "Це було б чудово.", fa: "این عالی می‌شد." ,"es":"Eso sería genial."}, { de: "Ich würde lieber bleiben.", ku: "پێم باشترە بمێنمەوە.", tr: "Kalmayı tercih ederdim.", en: "I would rather stay.", ar: "أُفضّل البقاء.", uk: "Я б краще залишився.", fa: "من ترجیح می‌دادم بمانم." ,"es":"Prefiero quedarme."} ] ,"es":"Subjuntivo II (Konjunktiv II)","expEs":"Para deseos, hipótesis, y cortesía. würde + infinitive, o hätte/wäre/könnte. A menudo se utiliza para sonar educado."},
  ],
  B2: [
    { de: "Passiv (alle Formen)", ku: "ڕستەی چالاک‌نەبوو (هەموو فۆرمەکان)", icon: "⊡",
      exp: "Passiv لە هەموو کاتەکاندا: ئێستا (wird gemacht)، ڕابردوو (wurde gemacht)، Perfekt (ist gemacht worden). «worden» نیشانەی Passivی ڕابردووە.",
      tr: "Edilgen Yapı (Tüm Biçimler)", expTr: "Tüm zamanlarda edilgen: şimdiki (wird gemacht), geçmiş (wurde gemacht), Perfekt (ist gemacht worden). «worden» geçmiş edilgenin işaretidir.",
      en: "Passive voice (all forms)", expEn: "Passive in all tenses: present (wird gemacht), past (wurde gemacht), perfect (ist gemacht worden). «worden» is the marker of the past passive.",
      ar: "المبني للمجهول (جميع الأشكال)", uk: "Пасивний стан (усі форми)", expAr: "صيغة المبني للمجهول في جميع الأزمنة: المضارع (wird gemacht)، الماضي (wurde gemacht)، والتام (ist gemacht worden). «worden» هي علامة صيغة الماضي في المبني للمجهول.", expUk: "Пасив у всіх часах: теперішній (wird gemacht), минулий (wurde gemacht), доконаний (ist gemacht worden). «worden» — це маркер минулого пасиву.",
      ex: [ { de: "Das Haus wurde gebaut.", ku: "خانووەکە دروستکرا.", tr: "Ev yapıldı.", en: "The house was built.", ar: "بُني البيت.", uk: "Будинок збудували." ,"es":"La casa fue construida."}, { de: "Es ist verkauft worden.", ku: "فرۆشراوە.", tr: "Satıldı.", en: "It has been sold.", ar: "لقد بيع.", uk: "Це продали." ,"es":"Se ha vendido."}, { de: "Das wird gemacht werden.", ku: "ئەمە دەکرێت (داهاتوو).", tr: "Bu yapılacak (gelecek).", en: "This will be done (future).", ar: "سيُفعل هذا (المستقبل).", uk: "Це буде зроблено (майбутній)." ,"es":"Esto se hará (futuro)."}, { de: "Der Brief wurde geschrieben.", ku: "نامەکە نووسرا.", tr: "Mektup yazıldı.", en: "The letter was written.", ar: "كُتبت الرسالة.", uk: "Листа написали." ,"es":"La carta fue escrita."}, { de: "Die Stadt ist zerstört worden.", ku: "شارەکە وێران کراوە.", tr: "Şehir yıkıldı.", en: "The city has been destroyed.", ar: "دُمّرت المدينة.", uk: "Місто зруйнували." ,"es":"La ciudad ha sido destruida."}, { de: "Die Regeln werden erklärt.", ku: "یاساکان ڕوون دەکرێنەوە.", tr: "Kurallar açıklanıyor.", en: "The rules are being explained.", ar: "تُشرح القواعد.", uk: "Правила пояснюють." ,"es":"Las reglas están siendo explicadas."} ] ,"es":"Voz pasiva (todos los formularios)","expEs":"Pasivo en todos los tiempos: presente (girl gemacht), pasado (wurde gemacht), perfecto (est gemacht worden). «worden» es el marcador del pasado pasivo."},
    { de: "Zustandspassiv", ku: "Passivی دۆخ", icon: "▣",
      exp: "ئەنجامی کارێک پیشان دەدات، نەک کردارەکە. sein + Partizip II. نموونە: «Die Tür ist geschlossen» (دەرگاکە داخراوە — دۆخ).",
      tr: "Durum Edilgeni", expTr: "Bir eylemin sonucunu gösterir, eylemin kendisini değil. sein + Partizip II. Örnek: «Die Tür ist geschlossen» (Kapı kapalı — durum).",
      en: "Stative passive", expEn: "Shows the result of an action, not the action itself. sein + Partizip II. Example: «Die Tür ist geschlossen» (The door is closed — state).",
      ar: "المبني للمجهول الوصفي (حالة)", uk: "Пасив стану", expAr: "يبيّن نتيجة فعل ما، وليس الفعل نفسه. sein + Partizip II. مثال: «Die Tür ist geschlossen» (الباب مغلق — حالة).", expUk: "Показує результат дії, а не саму дію. sein + Partizip II. Приклад: «Die Tür ist geschlossen» (Двері зачинені — стан).",
      ex: [ { de: "Das Geschäft ist geschlossen.", ku: "دوکانەکە داخراوە.", tr: "Dükkan kapalı.", en: "The shop is closed.", ar: "المحل مغلق.", uk: "Магазин зачинений." ,"es":"La tienda está cerrada."}, { de: "Der Brief ist geschrieben.", ku: "نامەکە نووسراوە.", tr: "Mektup yazılmış.", en: "The letter is written.", ar: "الرسالة مكتوبة.", uk: "Лист написаний." ,"es":"La carta está escrita."}, { de: "Alles ist vorbereitet.", ku: "هەمووشت ئامادەکراوە.", tr: "Her şey hazır.", en: "Everything is prepared.", ar: "كل شيء جاهز.", uk: "Усе підготовлено." ,"es":"Todo está preparado."}, { de: "Das Fenster ist geöffnet.", ku: "پەنجەرەکە کراوەیە.", tr: "Pencere açık.", en: "The window is open.", ar: "النافذة مفتوحة.", uk: "Вікно відчинене." ,"es":"La ventana está abierta."}, { de: "Die Arbeit ist erledigt.", ku: "کارەکە تەواوکراوە.", tr: "İş tamamlandı.", en: "The work is done.", ar: "العمل منجز.", uk: "Роботу виконано." ,"es":"El trabajo está hecho."}, { de: "Das Problem ist gelöst.", ku: "کێشەکە چارەسەرکراوە.", tr: "Sorun çözüldü.", en: "The problem is solved.", ar: "المشكلة محلولة.", uk: "Проблему вирішено." ,"es":"El problema está resuelto."} ] ,"es":"Pasivos estables","expEs":"Muestra el resultado de una acción, no la acción misma. sein + Partizip II. Ejemplo: «Die Tür ist geschlossen» (La puerta está cerrada — estado)."},
    { de: "Passiv mit Modalverben", ku: "Passiv لەگەڵ مۆداڵ", icon: "⊞",
      exp: "مۆداڵ + Partizip II + werden. نموونە: «Das muss gemacht werden» (ئەمە دەبێت بکرێت).",
      tr: "Modal Fiilli Edilgen", expTr: "Modal + Partizip II + werden. Örnek: «Das muss gemacht werden» (Bu yapılmalıdır).",
      en: "Passive with modal verbs", expEn: "Modal verb + Partizip II + werden. Example: «Das muss gemacht werden» (This must be done).",
      ar: "المبني للمجهول مع الأفعال الناقصة", uk: "Пасив із модальними дієсловами", expAr: "الفعل الواصف (المودال) + Partizip II + werden. مثال: «Das muss gemacht werden» (يجب فعل هذا).", expUk: "Модальне дієслово + Partizip II + werden. Приклад: «Das muss gemacht werden» (Це треба зробити).",
      ex: [ { de: "Das muss repariert werden.", ku: "ئەمە دەبێت چاک بکرێتەوە.", tr: "Bu tamir edilmeli.", en: "This must be repaired.", ar: "يجب إصلاح هذا.", uk: "Це треба відремонтувати." ,"es":"Esto debe ser reparado."}, { de: "Es kann gemacht werden.", ku: "دەکرێت بکرێت.", tr: "Yapılabilir.", en: "It can be done.", ar: "يمكن فعله.", uk: "Це можна зробити." ,"es":"Se puede hacer."}, { de: "Es sollte vermieden werden.", ku: "دەبێت خۆی لێ بپارێزرێت.", tr: "Kaçınılmalıydı.", en: "It should be avoided.", ar: "ينبغي تجنّب ذلك.", uk: "Цього слід уникати." ,"es":"Debería evitarse."}, { de: "Das darf nicht gesagt werden.", ku: "ئەمە نابێت بگوترێت.", tr: "Bu söylenmemeli.", en: "This must not be said.", ar: "لا يجوز قول هذا.", uk: "Цього не можна казати." ,"es":"Esto no debe decirse."}, { de: "Die Regeln müssen befolgt werden.", ku: "دەبێت یاساکان پەیڕەو بکرێن.", tr: "Kurallara uyulmalı.", en: "The rules must be followed.", ar: "يجب اتباع القواعد.", uk: "Правил треба дотримуватися." ,"es":"Las reglas deben ser seguidas."}, { de: "Es kann nicht geändert werden.", ku: "ناتوانرێت بگۆڕدرێت.", tr: "Değiştirilemez.", en: "It cannot be changed.", ar: "لا يمكن تغييره.", uk: "Це неможливо змінити." ,"es":"No puede cambiarse."} ] ,"es":"Pasivo con verbos modal","expEs":"Verbo modal + Partizip II + werden. Ejemplo: «Das muss gemacht werden» (Esto debe hacerse)."},
    { de: "Konjunktiv II (fortgeschritten)", ku: "کۆنیونکتیڤ II (پێشکەوتوو)", icon: "≈",
      exp: "بۆ گریمانەی ڕابردوو و پەشیمانی. hätte/wäre + Partizip II. نموونە: «Ich hätte das gemacht» (ئەمەم بکردایە).",
      tr: "Konjunktiv II (İleri Düzey)", expTr: "Geçmişteki varsayımlar ve pişmanlık için. hätte/wäre + Partizip II. Örnek: «Ich hätte das gemacht» (Bunu yapardım).",
      en: "Subjunctive II (advanced)", expEn: "For past hypotheticals and regret. hätte/wäre + Partizip II. Example: «Ich hätte das gemacht» (I would have done this).",
      ar: "الجملة الشرطية الثانية (متقدم)", uk: "Умовний спосіб II (просунутий)", expAr: "للافتراضات في الماضي والندم. hätte/wäre + Partizip II. مثال: «Ich hätte das gemacht» (كنت سأفعل هذا).", expUk: "Для гіпотез про минуле та жалю. hätte/wäre + Partizip II. Приклад: «Ich hätte das gemacht» (Я б це зробив).",
      ex: [ { de: "Ich hätte dir geholfen.", ku: "یارمەتیم بدایایت.", tr: "Sana yardım ederdim.", en: "I would have helped you.", ar: "كنت سأساعدك.", uk: "Я б тобі допоміг." ,"es":"Te habría ayudado."}, { de: "Wenn ich Zeit gehabt hätte, ...", ku: "ئەگەر کاتم هەبووایە، ...", tr: "Zamanım olsaydı, ...", en: "If I had had time, ...", ar: "لو كان لدي وقت، ...", uk: "Якби я мав час, …" ,"es":"Si hubiera tenido tiempo,..."}, { de: "Das wäre besser gewesen.", ku: "ئەمە باشتر دەبوو.", tr: "Bu daha iyi olurdu.", en: "That would have been better.", ar: "كان ذلك سيكون أفضل.", uk: "Так було б краще." ,"es":"Eso hubiera sido mejor."}, { de: "Ich hätte das nicht gesagt.", ku: "ئەمەم نەدەگوت.", tr: "Bunu söylemezdim.", en: "I would not have said that.", ar: "ما كنت لأقول ذلك.", uk: "Я б цього не сказав." ,"es":"No habría dicho eso."}, { de: "Wärst du gekommen, ...", ku: "ئەگەر هاتبووایت، ...", tr: "Gelmiş olsaydın, ...", en: "Had you come, ...", ar: "لو كنت قد أتيت، ...", uk: "Якби ти прийшов, …" ,"es":"Si hubieras venido..."}, { de: "Sie hätte gewinnen können.", ku: "دەیتوانی بباتەوە.", tr: "Kazanabilirdi.", en: "She could have won.", ar: "كان بإمكانها أن تفوز.", uk: "Вона могла б перемогти." ,"es":"Podría haber ganado."} ] ,"es":"Subjuntivo II (avanzado)","expEs":"Para hipótesis y arrepentimientos pasados. hätte/wäre + Partizip II. Ejemplo: «Ich hätte das gemacht» (habría hecho esto)."},
    { de: "Konjunktiv I (indirekte Rede)", ku: "کۆنیونکتیڤ I (قسەی ناڕاستەوخۆ)", icon: "❝",
      exp: "بۆ گێڕانەوەی قسەی کەسانی تر (بەتایبەت لە ڕۆژنامەدا). نموونە: er sei، er habe، er komme.",
      tr: "Konjunktiv I (Dolaylı Anlatım)", expTr: "Başkalarının sözlerini aktarmak için (özellikle gazetecilikte). Örnek: er sei, er habe, er komme.",
      en: "Subjunctive I (reported speech)", expEn: "For reporting other people's speech (especially in journalism). Example: er sei, er habe, er komme.",
      ar: "الجملة الشرطية الأولى (الكلام المنقول)", uk: "Умовний спосіб I (непряма мова)", expAr: "لنقل كلام الآخرين بشكل غير مباشر (خاصة في الصحافة). مثال: er sei، er habe، er komme.", expUk: "Для передавання чужих слів (особливо в журналістиці). Приклад: er sei, er habe, er komme.",
      ex: [ { de: "Er sagt, er sei krank.", ku: "دەڵێت کە نەخۆشە.", tr: "Hasta olduğunu söylüyor.", en: "He says he is sick.", ar: "يقول إنه مريض.", uk: "Він каже, що хворий." ,"es":"Dice que está enfermo."}, { de: "Sie meint, sie habe Zeit.", ku: "پێیوایە کاتی هەیە.", tr: "Zamanının olduğunu düşünüyor.", en: "She thinks she has time.", ar: "تعتقد أن لديها وقتاً.", uk: "Вона вважає, що має час." ,"es":"Cree que tiene tiempo."}, { de: "Man sagt, es komme bald.", ku: "دەگوترێت بەم زووانە دێت.", tr: "Yakında geleceği söyleniyor.", en: "They say it will come soon.", ar: "يُقال إنه سيأتي قريباً.", uk: "Кажуть, що це скоро прийде." ,"es":"Dicen que llegará pronto."}, { de: "Er behauptet, er wisse nichts.", ku: "بانگەشە دەکات هیچ نازانێت.", tr: "Hiçbir şey bilmediğini iddia ediyor.", en: "He claims he knows nothing.", ar: "يدّعي أنه لا يعرف شيئاً.", uk: "Він стверджує, що нічого не знає." ,"es":"Dice que no sabe nada."}, { de: "Sie sagte, sie werde kommen.", ku: "گوتی دێت.", tr: "Geleceğini söyledi.", en: "She said she would come.", ar: "قالت إنها ستأتي.", uk: "Вона сказала, що прийде." ,"es":"Dijo que vendría."}, { de: "Der Minister sagt, er habe recht.", ku: "وەزیر دەڵێت ڕاستە.", tr: "Bakan haklı olduğunu söylüyor.", en: "The minister says he is right.", ar: "يقول الوزير إنه على حق.", uk: "Міністр каже, що має рацію." ,"es":"El ministro dice que tiene razón."} ] ,"es":"Subjuntivo I (hablas comunicadas)","expEs":"Para informar del discurso de otras personas (especialmente en periodismo). Ejemplo: er sei, er habe, er komme."},
    { de: "Erweiterte Relativsätze", ku: "ڕستەی پەیوەندیداری فراوان", icon: "⌐",
      exp: "ڕستەی پەیوەندیدار لەگەڵ ئامراز: «in dem»، «mit der»، «über den». هەروەها was/wo بۆ ئاماژەی گشتی.",
      tr: "Genişletilmiş Bağımlı Cümleler", expTr: "Edatlı bağımlı cümleler: «in dem», «mit der», «über den». Ayrıca genel başvuru için was/wo.",
      en: "Extended relative clauses", expEn: "Relative clauses with prepositions: «in dem», «mit der», «über den». Also was/wo for general reference.",
      ar: "جمل الصلة الموسّعة", uk: "Розширені означальні речення", expAr: "جمل الوصل مع حروف الجر: «in dem»، «mit der»، «über den». وأيضاً was/wo للإشارة العامة.", expUk: "Означальні речення з прийменниками: «in dem», «mit der», «über den». Також was/wo для загального відсилання.",
      ex: [ { de: "der Tag, an dem wir ...", ku: "ئەو ڕۆژەی کە ئێمە ...", tr: "... ettiğimiz gün", en: "the day on which we ...", ar: "اليوم الذي فيه ...", uk: "день, у який ми …" ,"es":"el día en que..."}, { de: "das Thema, über das ...", ku: "ئەو بابەتەی دەربارەی ...", tr: "... hakkında konuştuğumuz konu", en: "the topic about which ...", ar: "الموضوع الذي عنه ...", uk: "тема, про яку …" ,"es":"el tema sobre el cual..."}, { de: "alles, was du brauchst", ku: "هەرچی پێویستتە", tr: "ihtiyacın olan her şey", en: "everything that you need", ar: "كل ما تحتاجه", uk: "усе, що тобі потрібно" ,"es":"todo lo que necesitas"}, { de: "die Firma, bei der ich arbeite, ...", ku: "ئەو کۆمپانیایەی تێیدا کار دەکەم، ...", tr: "çalıştığım şirket, ...", en: "the company where I work, ...", ar: "الشركة التي أعمل بها، ...", uk: "компанія, де я працюю, …" ,"es":"la empresa donde trabajo,..."}, { de: "der Grund, aus dem ...", ku: "ئەو هۆکارەی کە ...", tr: "... sebebi", en: "the reason why ...", ar: "السبب الذي ...", uk: "причина, через яку …" ,"es":"la razón por la que..."}, { de: "das, was wichtig ist, ...", ku: "ئەوەی گرنگە، ...", tr: "önemli olan, ...", en: "what is important, ...", ar: "ما هو مهم، ...", uk: "те, що важливо, …" ,"es":"lo que es importante,..."} ] ,"es":"Cláusulas relativas ampliadas","expEs":"Cláusulas relativas con preposiciones: «in dem», «mit der», ber den». También era/wo para referencia general."},
    { de: "Kausale, konsekutive, konzessive Sätze", ku: "ڕستەی هۆکاری، ئەنجامی، ڕێگری", icon: "⟜",
      exp: "هۆکاری (da، weil)، ئەنجامی (sodass، so…dass)، ڕێگری/کۆنسێسیڤ (obwohl، obgleich). بۆ پەیوەندی لۆژیکی نێوان ڕستەکان.",
      tr: "Neden, Sonuç ve Karşıt Cümleler", expTr: "Nedensel (da, weil), sonuç (sodass, so…dass), karşıt/tavizli (obwohl, obgleich). Cümleler arasındaki mantıksal bağlantı için.",
      en: "Causal, consecutive, concessive clauses", expEn: "Causal (da, weil), consecutive/result (sodass, so…dass), concessive (obwohl, obgleich). For the logical connection between clauses.",
      ar: "الجمل السببية والنتيجية والتنازلية", uk: "Причинові, наслідкові, допустові речення", expAr: "السببية (da، weil)، والنتيجة (sodass، so…dass)، والتنازل/التضاد (obwohl، obgleich). للربط المنطقي بين الجمل.", expUk: "Причинові (da, weil), наслідкові (sodass, so…dass), допустові (obwohl, obgleich). Для логічного зв'язку між реченнями.",
      ex: [ { de: "Da es regnet, bleiben wir.", ku: "لەبەر ئەوەی باران دەبارێت، دەمێنینەوە.", tr: "Yağmur yağdığı için kalıyoruz.", en: "Since it is raining, we are staying.", ar: "بما أن المطر يهطل، سنبقى.", uk: "Оскільки йде дощ, ми залишаємося." ,"es":"Ya que está lloviendo, nos quedamos."}, { de: "Es war so kalt, dass ...", ku: "ئەوەندە سارد بوو کە ...", tr: "O kadar soğuktu ki ...", en: "It was so cold that ...", ar: "كان الجو بارداً جداً لدرجة أن ...", uk: "Було так холодно, що …" ,"es":"Hacía tanto frío que..."}, { de: "Obwohl er müde ist, arbeitet er.", ku: "هەرچەندە ماندووە، کار دەکات.", tr: "Her ne kadar yorgun olsa da çalışıyor.", en: "Although he is tired, he is working.", ar: "على الرغم من أنه متعب، إلا أنه يعمل.", uk: "Хоча він втомлений, він працює." ,"es":"Aunque está cansado, está trabajando."}, { de: "Er lernte viel, sodass er bestand.", ku: "زۆر خوێندی، بۆیە سەرکەوت.", tr: "Çok çalıştı, bu yüzden başardı.", en: "He studied a lot, so he passed.", ar: "درس كثيراً، لذلك نجح.", uk: "Він багато вчився, тож склав іспит." ,"es":"Estudió mucho, así que murió."}, { de: "Weil sie krank war, blieb sie.", ku: "چونکە نەخۆش بوو، مایەوە.", tr: "Hasta olduğu için kaldı.", en: "Because she was sick, she stayed.", ar: "لأنها كانت مريضة، بقيت.", uk: "Оскільки вона була хвора, вона залишилася." ,"es":"Porque estaba enferma, se quedó."}, { de: "Trotzdem gab er nicht auf.", ku: "لەگەڵ ئەوەشدا واز نەهێنا.", tr: "Yine de pes etmedi.", en: "Nevertheless, he did not give up.", ar: "مع ذلك، لم يستسلم.", uk: "Попри це, він не здався." ,"es":"Sin embargo, no se dio por vencido."} ] ,"es":"Cláusulas causales, consecutivas y concestivas","expEs":"Causal (da, weil), consecutiva/resultado (sodass, so...dass), concessive (obwohl, obgleich). Para la conexión lógica entre cláusulas."},
    { de: "Futur II", ku: "داهاتووی دووەم", icon: "⇉",
      exp: "بۆ کارێک کە لە داهاتوودا تەواو دەبێت. werden + Partizip II + haben/sein. نموونە: «Ich werde es gemacht haben».",
      tr: "İkinci Gelecek Zaman", expTr: "Gelecekte tamamlanmış olacak bir eylem için. werden + Partizip II + haben/sein. Örnek: «Ich werde es gemacht haben».",
      en: "Future tense II", expEn: "For an action that will be completed in the future. werden + Partizip II + haben/sein. Example: «Ich werde es gemacht haben».",
      ar: "زمن المستقبل الثاني", uk: "Майбутній час II", expAr: "لفعل سيكون قد اكتمل في المستقبل. werden + Partizip II + haben/sein. مثال: «Ich werde es gemacht haben».", expUk: "Для дії, яка буде завершена в майбутньому. werden + Partizip II + haben/sein. Приклад: «Ich werde es gemacht haben».",
      ex: [ { de: "Bis morgen werde ich es beendet haben.", ku: "تا سبەینێ تەوای دەکەم.", tr: "Yarına kadar bitirmiş olacağım.", en: "By tomorrow I will have finished it.", ar: "بحلول الغد سأكون قد أنهيته.", uk: "До завтра я це закінчу." ,"es":"Mañana lo habré terminado."}, { de: "Er wird angekommen sein.", ku: "ئەو گەیشتووی دەبێت.", tr: "Varmış olacak.", en: "He will have arrived.", ar: "سيكون قد وصل.", uk: "Він уже прибуде." ,"es":"Él habrá llegado."}, { de: "Sie wird es vergessen haben.", ku: "لەوانەیە بیری چووبێت.", tr: "Unutmuş olabilir.", en: "She will have forgotten it.", ar: "لعلها تكون قد نسيت ذلك.", uk: "Вона це вже забуде." ,"es":"Ella lo habrá olvidado."}, { de: "Bis dahin werden wir fertig sein.", ku: "تا ئەو کاتە تەواو دەبین.", tr: "O zamana kadar bitirmiş olacağız.", en: "By then we will be finished.", ar: "بحلول ذلك الوقت سنكون قد انتهينا.", uk: "На той час ми будемо готові." ,"es":"Para entonces habremos terminado."}, { de: "Er wird das gelesen haben.", ku: "ئەو ئەمەی خوێندووەتەوە (گریمانە).", tr: "Okumuş olacak (tahmin).", en: "He will have read that (assumption).", ar: "سيكون قد قرأ ذلك (افتراض).", uk: "Він, напевно, це прочитав (припущення)." ,"es":"Él habrá leído eso (suposición)."}, { de: "Sie werden gegangen sein.", ku: "ئەوان ڕۆیشتوون (گریمانە).", tr: "Gitmiş olacaklar (tahmin).", en: "They will have left (assumption).", ar: "سيكونون قد رحلوا (افتراض).", uk: "Вони, напевно, вже пішли (припущення)." ,"es":"Se habrán ido (supuestos)."} ] ,"es":"Tiempo futuro II","expEs":"Para una acción que se completará en el futuro. werden + Partizip II + haben/sein. Ejemplo: «Ich werde es gemacht haben»."},
    { de: "Partizip I", ku: "پارتیسیپی یەکەم", icon: "Ⅰ",
      exp: "Infinitiv + d. وەک سیفەت کاری ئەنجامدراو/بەردەوام پیشان دەدات. نموونە: spielend (یاریکەر، لە کاتی یاریدا).",
      tr: "Birinci Ortaç", expTr: "Mastar + d. Sıfat olarak süregelen eylemi gösterir. Örnek: spielend (oynayan, oynarken).",
      en: "Present participle (Partizip I)", expEn: "Infinitive + d. As an adjective, it shows an ongoing/simultaneous action. Example: spielend (playing, while playing).",
      ar: "اسم الفاعل (Partizip I)", uk: "Дієприкметник теперішнього часу (Partizip I)", expAr: "المصدر + d. يُستخدم كصفة ويدل على فعل مستمر/متزامن. مثال: spielend (لاعب، أثناء اللعب).", expUk: "Інфінітив + d. Як прикметник, показує тривалу/одночасну дію. Приклад: spielend (граючи, під час гри).",
      ex: [ { de: "das spielende Kind", ku: "منداڵە یاریکەرەکە", tr: "oynayan çocuk", en: "the playing child", ar: "الطفل اللاعب", uk: "дитина, що грається" ,"es":"el niño que juega"}, { de: "die schlafende Katze", ku: "پشیلە خەوتووەکە", tr: "uyuyan kedi", en: "the sleeping cat", ar: "القطة النائمة", uk: "кішка, що спить" ,"es":"el gato durmiente"}, { de: "lachend", ku: "بەپێکەنینەوە", tr: "gülerek", en: "laughing", ar: "ضاحكاً", uk: "сміючись" ,"es":"Riendo"}, { de: "die singende Frau", ku: "ژنە گۆرانیبێژەکە", tr: "şarkı söyleyen kadın", en: "the singing woman", ar: "المرأة المغنية", uk: "жінка, що співає" ,"es":"la mujer cantante"}, { de: "ein weinendes Baby", ku: "کۆرپەیەکی گریان", tr: "ağlayan bir bebek", en: "a crying baby", ar: "طفل رضيع يبكي", uk: "немовля, що плаче" ,"es":"un bebé llorando"}, { de: "die kommende Woche", ku: "هەفتەی داهاتوو", tr: "gelecek hafta", en: "next week", ar: "الأسبوع القادم", uk: "наступного тижня" ,"es":"la semana próxima"} ] ,"es":"Participante actual (Partizip I)","expEs":"Infinitivo + d. Como adjetivo, muestra una acción continua/simultáneo. Ejemplo: spielend (jugando, mientras se juega)."},
    { de: "Partizip II als Adjektiv", ku: "پارتیسیپی دووەم وەک سیفەت", icon: "Ⅱ",
      exp: "Partizip II دەتوانێت وەک سیفەت بەکاربێت و ئەنجامێک پیشان بدات. نموونە: «das gekochte Essen» (خواردنە لێنراوەکە).",
      tr: "Sıfat Olarak İkinci Ortaç", expTr: "Partizip II sıfat olarak kullanılabilir ve sonucu gösterir. Örnek: «das gekochte Essen» (pişirilmiş yemek).",
      en: "Past participle as adjective", expEn: "Partizip II can be used as an adjective to show a result. Example: «das gekochte Essen» (the cooked food).",
      ar: "اسم المفعول كصفة (Partizip II)", uk: "Дієприкметник минулого часу як прикметник", expAr: "يمكن استخدام Partizip II كصفة تدل على نتيجة. مثال: «das gekochte Essen» (الطعام المطبوخ).", expUk: "Partizip II можна вживати як прикметник, щоб показати результат. Приклад: «das gekochte Essen» (зварена їжа).",
      ex: [ { de: "die geöffnete Tür", ku: "دەرگا کراوەکە", tr: "açık kapı", en: "the open door", ar: "الباب المفتوح", uk: "відчинені двері" ,"es":"la puerta abierta"}, { de: "ein gebrauchtes Auto", ku: "ئۆتۆمبێلێکی بەکارهاتوو", tr: "kullanılmış araba", en: "a used car", ar: "سيارة مستعملة", uk: "вживана машина" ,"es":"un automóvil usado"}, { de: "das geschriebene Wort", ku: "وشە نووسراوەکە", tr: "yazılmış kelime", en: "the written word", ar: "الكلمة المكتوبة", uk: "написане слово" ,"es":"la palabra escrita"}, { de: "die gekochte Suppe", ku: "شۆربا لێنراوەکە", tr: "pişirilmiş çorba", en: "the cooked soup", ar: "الحساء المطبوخ", uk: "зварений суп" ,"es":"la sopa cocida"}, { de: "ein verlorenes Spiel", ku: "یارییەکی دۆڕاو", tr: "kaybedilmiş oyun", en: "a lost game", ar: "مباراة خاسرة", uk: "програна гра" ,"es":"una partida perdida"}, { de: "die reparierte Uhr", ku: "کاتژمێرە چاککراوەکە", tr: "tamir edilmiş saat", en: "the repaired watch", ar: "الساعة المُصلَّحة", uk: "відремонтований годинник" ,"es":"el reloj reparado"} ] ,"es":"Participio pasado como adjetivo","expEs":"Partizip II puede ser utilizado como adjetivo para mostrar un resultado. Ejemplo: «das gekochte Essen» (la comida cocida)."},
    { de: "Nominalisierung", ku: "ناوکردن (نۆمیناڵایزەیشن)", icon: "N",
      exp: "گۆڕینی کردار/ڕستە بۆ ناو — تایبەتمەندی ئەڵمانی فەرمی و ئەکادیمی. نموونە: «beim Lernen» = «während man lernt».",
      tr: "İsimleştirme", expTr: "Fiil/cümleyi isme dönüştürme — resmi ve akademik Almancaya özgü. Örnek: «beim Lernen» = «öğrenirken».",
      en: "Nominalization", expEn: "Turning a verb/clause into a noun — a feature specific to formal and academic German. Example: «beim Lernen» = «while learning».",
      ar: "التسمية (تحويل الفعل إلى اسم)", uk: "Субстантивація (номіналізація)", expAr: "تحويل الفعل/الجملة إلى اسم — سمة خاصة بالألمانية الرسمية والأكاديمية. مثال: «beim Lernen» = «أثناء التعلّم».", expUk: "Перетворення дієслова/речення на іменник — особливість формальної та академічної німецької. Приклад: «beim Lernen» = «під час навчання».",
      ex: [ { de: "das Lernen", ku: "فێربوون (وەک ناو)", tr: "öğrenme (isim olarak)", en: "learning (as a noun)", ar: "التعلّم (كاسم)", uk: "навчання (як іменник)" ,"es":"aprendizaje (como sustantivo)"}, { de: "beim Lesen", ku: "لە کاتی خوێندنەوەدا", tr: "okuma sırasında", en: "while reading", ar: "أثناء القراءة", uk: "під час читання" ,"es":"mientras leía"}, { de: "nach der Ankunft", ku: "دوای گەیشتن", tr: "varıştan sonra", en: "after arrival", ar: "بعد الوصول", uk: "після прибуття" ,"es":"después de la llegada"}, { de: "vor dem Schlafen", ku: "پێش خەوتن", tr: "uyumadan önce", en: "before sleeping", ar: "قبل النوم", uk: "перед сном" ,"es":"antes de dormir"}, { de: "das Rauchen ist verboten", ku: "جگەرەکێشان قەدەغەیە", tr: "sigara içmek yasak", en: "smoking is forbidden", ar: "التدخين ممنوع", uk: "паління заборонено" ,"es":"Está prohibido fumar"}, { de: "durch das Üben", ku: "بەهۆی مەشقکردنەوە", tr: "pratik yaparak", en: "through practicing", ar: "من خلال الممارسة", uk: "завдяки практиці" ,"es":"a través de la práctica"} ] ,"es":"Nominalización","expEs":"Convertir un verbo/cláusula en un sustantivo — una característica específica del alemán formal y académico. Ejemplo: «beim Lernen» = «mientras aprende»."},
    { de: "Funktionsverbgefüge", ku: "گرێدانی ناو-کردار", icon: "⚙",
      exp: "بەستەی ناو+کردار کە وەک یەک واتا کاردەکەن، زۆر لە ئەڵمانی فەرمیدا. نموونە: «eine Entscheidung treffen» (بڕیاردان).",
      tr: "Fiil-İsim Bileşikleri", expTr: "İsim+fiil bileşimi bir anlam birimini oluşturur, çok resmi Almancada sık kullanılır. Örnek: «eine Entscheidung treffen» (karar vermek).",
      en: "Support-verb constructions", expEn: "Noun+verb combinations that function as a single meaning unit, common in formal German. Example: «eine Entscheidung treffen» (to make a decision).",
      ar: "التراكيب الفعلية الوظيفية", uk: "Дієслівно-іменні конструкції", expAr: "تراكيب اسم+فعل تعمل كوحدة معنى واحدة، شائعة في الألمانية الرسمية. مثال: «eine Entscheidung treffen» (اتخاذ قرار).", expUk: "Поєднання іменник+дієслово, що функціонують як єдина смислова одиниця, поширені у формальній німецькій. Приклад: «eine Entscheidung treffen» (ухвалити рішення).",
      ex: [ { de: "eine Entscheidung treffen", ku: "بڕیاردان", tr: "karar vermek", en: "to make a decision", ar: "اتخاذ قرار", uk: "ухвалити рішення" ,"es":"para tomar una decisión"}, { de: "in Frage stellen", ku: "گومان لێکردن", tr: "sorgulamak", en: "to call into question", ar: "التشكيك في", uk: "ставити під сумнів" ,"es":"para cuestionar"}, { de: "zur Verfügung stehen", ku: "بەردەست بوون", tr: "mevcut olmak", en: "to be available", ar: "أن يكون متاحاً", uk: "бути в наявності" ,"es":"a disposición"}, { de: "eine Rolle spielen", ku: "ڕۆڵ گێڕان", tr: "rol oynamak", en: "to play a role", ar: "لعب دور", uk: "відігравати роль" ,"es":"desempeñar un papel"}, { de: "Rücksicht nehmen", ku: "ڕەچاوکردن", tr: "saygı göstermek", en: "to show consideration", ar: "المراعاة", uk: "виявляти увагу" ,"es":"para mostrar consideración"}, { de: "in Anspruch nehmen", ku: "سوود وەرگرتن لە", tr: "yararlanmak", en: "to make use of", ar: "الاستفادة من", uk: "скористатися" ,"es":"para hacer uso de"} ] ,"es":"Construcciones de soporte-verbo","expEs":"Combinaciones de sustantivo+verbo que funcionan como una unidad de un solo significado, común en alemán formal. Ejemplo: «eine Entscheidung treffen» (para tomar una decisión)."},
    { de: "Verben/Adjektive/Nomen mit Präpositionen", ku: "وشە لەگەڵ ئامرازی جێگیر", icon: "⌖",
      exp: "زۆر کردار، سیفەت و ناو ئامرازێکی جێگیریان هەیە کە دەبێت لەبەری بکەیت. نموونە: warten auf (چاوەڕوانی)، stolz auf (شانازی بە).",
      tr: "Sabit Edatlı Kelimeler", expTr: "Birçok fiil, sıfat ve ismin öğrenilmesi gereken sabit bir edatı vardır. Örnek: warten auf (beklemek), stolz auf (gurur duymak).",
      en: "Verbs/adjectives/nouns with fixed prepositions", expEn: "Many verbs, adjectives and nouns have a fixed preposition that must be memorized. Example: warten auf (to wait for), stolz auf (proud of).",
      ar: "الأفعال والصفات والأسماء مع حروف جر ثابتة", uk: "Дієслова/прикметники/іменники з усталеними прийменниками", expAr: "العديد من الأفعال والصفات والأسماء لها حرف جر ثابت يجب حفظه. مثال: warten auf (انتظار)، stolz auf (فخور بـ).", expUk: "Багато дієслів, прикметників та іменників мають усталений прийменник, який треба запам'ятати. Приклад: warten auf (чекати на), stolz auf (гордий чимось).",
      ex: [ { de: "Ich warte auf den Bus.", ku: "چاوەڕوانی پاس دەکەم.", tr: "Otobüsü bekliyorum.", en: "I am waiting for the bus.", ar: "أنا أنتظر الحافلة.", uk: "Я чекаю на автобус." ,"es":"Estoy esperando el autobús."}, { de: "Ich denke an dich.", ku: "بیرت دەکەمەوە.", tr: "Seni düşünüyorum.", en: "I am thinking of you.", ar: "أفكر فيك.", uk: "Я думаю про тебе." ,"es":"Estoy pensando en ti."}, { de: "stolz auf etwas sein", ku: "شانازی بە شتێک کردن", tr: "bir şeyle gurur duymak", en: "to be proud of something", ar: "أن يكون فخوراً بشيء", uk: "пишатися чимось" ,"es":"para estar orgulloso de algo"}, { de: "Ich freue mich auf das Wochenende.", ku: "بە کۆتایی هەفتە دڵخۆشم.", tr: "Haftasonuna sevindim.", en: "I am looking forward to the weekend.", ar: "أتطلع إلى نهاية الأسبوع.", uk: "Я з нетерпінням чекаю вихідних." ,"es":"Estoy deseando el fin de semana."}, { de: "Er interessiert sich für Politik.", ku: "ئارەزووی سیاسەت دەکات.", tr: "Siyasetle ilgileniyor.", en: "He is interested in politics.", ar: "إنه مهتم بالسياسة.", uk: "Він цікавиться політикою." ,"es":"Está interesado en la política."}, { de: "die Angst vor dem Versagen", ku: "ترس لە شکستهێنان", tr: "başarısızlık korkusu", en: "the fear of failure", ar: "الخوف من الفشل", uk: "страх перед невдачею" ,"es":"el miedo al fracaso"} ] ,"es":"Verbos/adictivos/sustantivos con preposiciones fijas","expEs":"Muchos verbos, adjetivos y sustantivos tienen una preposición fija que debe memorizarse. Ejemplo: wasten auf (esperar), stolz auf (orgulloso de)."},
    { de: "Wortbildung: Präfixe & Suffixe", ku: "دروستکردنی وشە: پێشگر و پاشگر", icon: "✚",
      exp: "وشەی نوێ بە پێشگر (un-، ver-، be-) و پاشگر (-ung، -heit، -keit، -lich) دروست دەکرێن. ئەمە دەستەواژەکەت زۆر فراوان دەکات.",
      tr: "Kelime Yapımı: Önekler ve Sonekler", expTr: "Önekler (un-, ver-, be-) ve sonekler (-ung, -heit, -keit, -lich) ile yeni kelimeler üretilir. Bu kelime dağarcığını büyük ölçüde genişletir.",
      en: "Word formation: prefixes & suffixes", expEn: "New words are formed with prefixes (un-, ver-, be-) and suffixes (-ung, -heit, -keit, -lich). This greatly expands your vocabulary.",
      ar: "تكوين الكلمات: البادئات واللواحق", uk: "Словотвір: префікси та суфікси", expAr: "تُشكَّل كلمات جديدة بإضافة بادئات (un-، ver-، be-) ولواحق (-ung، -heit، -keit، -lich). هذا يوسّع مفرداتك بشكل كبير.", expUk: "Нові слова утворюються за допомогою префіксів (un-, ver-, be-) і суфіксів (-ung, -heit, -keit, -lich). Це значно розширює словниковий запас.",
      ex: [ { de: "glücklich → das Glück", ku: "بەختەوەر → بەختەوەری", tr: "mutlu → mutluluk", en: "happy → happiness", ar: "سعيد ← السعادة", uk: "щасливий → щастя" ,"es":"feliz → felicidad"}, { de: "frei → die Freiheit", ku: "ئازاد → ئازادی", tr: "özgür → özgürlük", en: "free → freedom", ar: "حر ← الحرية", uk: "вільний → свобода" ,"es":"libertad → libertad"}, { de: "möglich → unmöglich", ku: "گونجاو → ناگونجاو", tr: "mümkün → imkânsız", en: "possible → impossible", ar: "ممكن ← مستحيل", uk: "можливий → неможливий" ,"es":"→ imposible"}, { de: "arbeiten → die Arbeit", ku: "کارکردن → کار", tr: "çalışmak → iş", en: "to work → work", ar: "يعمل ← العمل", uk: "працювати → робота" ,"es":"trabajar → trabajar"}, { de: "krank → die Krankheit", ku: "نەخۆش → نەخۆشی", tr: "hasta → hastalık", en: "sick → illness", ar: "مريض ← المرض", uk: "хворий → хвороба" ,"es":"enfermedad → enfermedad"}, { de: "lesen → der Leser", ku: "خوێندنەوە → خوێنەر", tr: "okumak → okuyucu", en: "to read → reader", ar: "يقرأ ← القارئ", uk: "читати → читач" ,"es":"leer → lector"} ] ,"es":"Formación de palabras: prefijos y sufijos","expEs":"Las palabras nuevas se forman con prefijos (un-, ver-, ser-) y sufijos (-ung, -heit, -keit, -lich). Esto expande enormemente su vocabulario."},
  ],
  C1: [
    { de: "Konjunktiv I (komplex)", ku: "کۆنیونکتیڤ I (ئاستبەرز)", icon: "❝",
      exp: "Konjunktiv I زۆرجار لە ڕۆژنامەدا بۆ گێڕانەوەی قسەی کەسانی تر بەکاردێت. کاتێک Konjunktiv I وەک Indikativ دەبێت، Konjunktiv II جێی دەگرێتەوە. ئەم ڕێزمانە زۆر بەکارهاتووە لە مێدیای ئەڵمانیدا.",
      tr: "Konjunktiv I (Karmaşık)", expTr: "Konjunktiv I çoğunlukla gazetecilikte başkalarının sözlerini aktarmak için kullanılır. Konjunktiv I Indikativ gibi göründüğünde Konjunktiv II onun yerini alır. Bu dilbilgisi Alman medyasında çok yaygındır.",
      en: "Subjunctive I (complex)", expEn: "Konjunktiv I is mostly used in journalism to report what other people have said. When Konjunktiv I is identical in form to the Indikativ, Konjunktiv II takes its place instead. This grammatical feature is extremely common in German media.",
      ar: "الجملة الشرطية الأولى (معقدة)", uk: "Умовний спосіб I (складний)", expAr: "غالبًا ما تُستخدم صيغة Konjunktiv I في الصحافة لنقل كلام الآخرين. وعندما تتطابق صيغة Konjunktiv I مع صيغة Indikativ، تحل صيغة Konjunktiv II محلها. وهذه الظاهرة النحوية شائعة جدًا في وسائل الإعلام الألمانية.", expUk: "Konjunktiv I переважно вживається в журналістиці для передавання того, що сказали інші. Коли форма Konjunktiv I збігається з дійсним способом, її замінює Konjunktiv II. Ця граматична особливість надзвичайно поширена в німецьких медіа.",
      ex: [ { de: "Der Minister erklärte, er habe alles getan.", ku: "وەزیرەکە ڕووناکی کردەوە کە هەرشتێکی کردووە.", tr: "Bakan her şeyi yaptığını açıkladı.", en: "The minister explained that he had done everything.", ar: "أوضح الوزير أنه قام بكل شيء.", uk: "Міністр пояснив, що зробив усе." ,"es":"El ministro explicó que había hecho todo."}, { de: "Die Studie besagt, die Lage sei kritisch.", ku: "توێژینەوەکە دەڵێت دۆخەکە خەمئالودەیە.", tr: "Çalışma durumun kritik olduğunu söylüyor.", en: "The study states that the situation is critical.", ar: "تشير الدراسة إلى أن الوضع حرج.", uk: "Дослідження стверджує, що ситуація критична." ,"es":"El estudio afirma que la situación es crítica."}, { de: "Laut Bericht sei die Entscheidung falsch gewesen.", ku: "بەپێی ڕاپۆڕتەکە بڕیارەکە هەڵە بووە.", tr: "Rapora göre karar yanlışmış.", en: "According to the report, the decision was said to have been wrong.", ar: "بحسب التقرير، يُقال إن القرار كان خاطئًا.", uk: "За повідомленням, рішення було нібито хибним." ,"es":"Según el informe, se dijo que la decisión era errónea."}, { de: "Er behauptete, er wisse nichts davon.", ku: "بانگەشەی کرد کە هیچی لێی نازانێت.", tr: "Hiçbir şey bilmediğini iddia etti.", en: "He claimed that he knew nothing about it.", ar: "زعم أنه لا يعرف شيئًا عن ذلك.", uk: "Він стверджував, що нічого про це не знає." ,"es":"Afirmó que no sabía nada al respecto."}, { de: "Die Firma teilte mit, sie werde expandieren.", ku: "کۆمپانیاکە ئاگادارکردەوە کە فراوان دەبێت.", tr: "Şirket büyüyeceğini duyurdu.", en: "The company announced that it would expand.", ar: "أعلنت الشركة أنها ستتوسع.", uk: "Компанія оголосила, що розширюватиметься." ,"es":"La compañía anunció que se expandiría."}, { de: "Berichten zufolge seien mehrere Personen verletzt.", ku: "بەپێی ڕاپۆڕتەکان ژمارەیەک کەس برینداربوون.", tr: "Raporlara göre birkaç kişi yaralanmış.", en: "According to reports, several people were said to be injured.", ar: "وفقًا للتقارير، أُصيب عدة أشخاص.", uk: "За повідомленнями, кілька людей нібито поранені." ,"es":"Según los informes, varias personas resultaron heridas."} ] ,"es":"Subjuntivo I (complejo)","expEs":"Konjunktiv I es usado principalmente en periodismo para informar lo que otras personas han dicho. Cuando Konjunktiv I es idéntico en forma de Indikativ, Konjunktiv II toma su lugar en su lugar. Esta característica gramatical es extremadamente común en los medios alemanes."},
    { de: "Kausale & konzessive Konnektoren (C1)", ku: "بەستەرەکانی هۆکاری و ڕێگری (C1)", icon: "↔",
      exp: "لە ئاستی C1دا بەستەرە پێچەوانەکانی زیادتر هەن: wenngleich (هەرچەندە)، insofern (لەو ڕووەوە کە)، sofern (ئەگەر ئەمەش)، zumal (بەتایبەت کە)، geschweige denn (جا ئەوەش).",
      tr: "Neden ve Karşıt Bağlaçlar (C1)", expTr: "C1 düzeyinde daha fazla karşıt bağlaç vardır: wenngleich (her ne kadar), insofern (bu ölçüde), sofern (eğer), zumal (özellikle de), geschweige denn (bırak... bir de).",
      en: "Causal & concessive connectors (C1)", expEn: "At the C1 level there are more concessive connectors: wenngleich (although), insofern (insofar as), sofern (provided that), zumal (especially since), geschweige denn (let alone).",
      ar: "الروابط السببية والتنازلية (C1)", uk: "Причинові й допустові конектори (C1)", expAr: "في مستوى C1 هناك المزيد من الروابط الاستدراكية: wenngleich (رغم أن)، insofern (بقدر ما)، sofern (بشرط أن)، zumal (لا سيما أن)، geschweige denn (ناهيك عن).", expUk: "На рівні C1 є більше допустових конекторів: wenngleich (хоча), insofern (остільки), sofern (за умови що), zumal (тим паче що), geschweige denn (не кажучи вже про).",
      ex: [ { de: "Wenngleich es schwierig ist, werden wir weitermachen.", ku: "هەرچەندە سەختە، بەردەوام دەبین.", tr: "Her ne kadar zor olsa da devam edeceğiz.", en: "Although it is difficult, we will continue.", ar: "رغم أن الأمر صعب، سنواصل.", uk: "Хоча це важко, ми продовжимо." ,"es":"Aunque es difícil, continuaremos."}, { de: "Insofern das stimmt, müssen wir handeln.", ku: "لەو ڕووەوە کە ئەمە ڕاستە، دەبێت هەنگاو بنێین.", tr: "Bu doğru olduğu ölçüde harekete geçmemiz gerekir.", en: "Insofar as that is true, we must act.", ar: "بقدر ما يكون هذا صحيحًا، يجب أن نتصرف.", uk: "Остільки це правда, ми маємо діяти." ,"es":"En la medida en que eso es cierto, debemos actuar."}, { de: "Zumal er krank ist, sollte er sich schonen.", ku: "بەتایبەت کە نەخۆشە، دەبێت خۆی بپارێزێت.", tr: "Özellikle hasta olduğu için dinlenmeli.", en: "Especially since he is sick, he should take it easy.", ar: "لا سيما أنه مريض، ينبغي أن يعتني بنفسه.", uk: "Тим паче що він хворий, йому слід поберегтися." ,"es":"Especialmente como está enfermo, debería tomárselo con calma."}, { de: "Er kann nicht fahren, geschweige denn fliegen.", ku: "ناتوانێت بمژێت، جا فڕین؟", tr: "Araba süremez, uçmak ise hiç.", en: "He can't drive, let alone fly.", ar: "لا يستطيع القيادة، ناهيك عن الطيران.", uk: "Він не вміє водити, не кажучи вже про те, щоб літати." ,"es":"No puede conducir, mucho menos volar."}, { de: "Sofern keine Einwände bestehen, beginnen wir.", ku: "ئەگەر دژایەتی نەبێت، دەست پێدەکەین.", tr: "İtiraz yoksa başlıyoruz.", en: "Provided there are no objections, we will begin.", ar: "بشرط ألا توجد اعتراضات، سنبدأ.", uk: "За умови, що не буде заперечень, ми почнемо." ,"es":"Siempre que no haya objeciones, empezaremos."}, { de: "Ungeachtet der Kritik hielt er an seiner Meinung fest.", ku: "سەرەڕای ڕەخنەکان، لە بۆچوونەکەی مایەوە.", tr: "Eleştirilere rağmen görüşünde ısrar etti.", en: "Regardless of the criticism, he held onto his opinion.", ar: "بصرف النظر عن الانتقادات، تمسك برأيه.", uk: "Попри критику, він тримався своєї думки." ,"es":"Independientemente de las críticas, se mantuvo en su opinión."} ] ,"es":"Conectores causales y concesivos (C1)","expEs":"En el nivel C1 hay conectores más concesivos: wenngleich (aunque), insofern (en la medida en que), sofern (siempre que), zumal (especialmente desde entonces), geschweige denn (por no hablar)."},
    { de: "Partizipialkonstruktionen", ku: "دروستکردنی هاوپەیوەند بە بەشداری", icon: "P",
      exp: "لە ئەڵمانیدا دەتوانین ڕستەی جێگیرکراو بەجێهێڵین و بە Partizip I یان II شوێنی بگرینەوە. ئەمە زۆرجار لە نووسینی فەرمی و ئەکادیمیدا دەردەکەوێت. Partizip I (کردار + -d) بۆ کردارێکی هاوکاتی بەکاردێت، Partizip II بۆ ئەوی تەواوبوو.",
      tr: "Ortaç Yapıları", expTr: "Almancada bağımlı cümleler yerine Partizip I veya II kullanılabilir. Bu çoğunlukla resmi ve akademik yazıda görülür. Partizip I (fiil + -d) eş zamanlı eylem, Partizip II tamamlanmış eylem için kullanılır.",
      en: "Participial constructions", expEn: "In German, subordinate clauses can be omitted and replaced with Partizip I or II constructions. This appears frequently in formal and academic writing. Partizip I (verb stem + -d) is used for simultaneous actions, Partizip II for completed ones.",
      ar: "تراكيب اسم الفاعل والمفعول", uk: "Дієприкметникові конструкції", expAr: "في اللغة الألمانية يمكن الاستغناء عن الجملة الثانوية واستبدالها بصيغة Partizip I أو Partizip II. ويظهر هذا كثيرًا في الكتابة الرسمية والأكاديمية. تُستخدم Partizip I (الفعل + -d) للدلالة على فعل متزامن، بينما تُستخدم Partizip II للفعل التام.", expUk: "У німецькій мові підрядні речення можна опустити й замінити конструкціями з Partizip I або II. Це часто трапляється у формальному та академічному письмі. Partizip I (основа дієслова + -d) вживається для одночасних дій, Partizip II — для завершених.",
      ex: [ { de: "Der auf dem Sofa schlafende Mann schnarcht.", ku: "پیاوەکەی کە لەسەر کەناپەکە خەوتووە خڕژاند دەکات.", tr: "Kanepede uyuyan adam horluyor.", en: "The man sleeping on the sofa is snoring.", ar: "الرجل النائم على الأريكة يشخر.", uk: "Чоловік, що спить на дивані, хропе." ,"es":"El hombre que duerme en el sofá está roncando."}, { de: "Das von ihr geschriebene Buch wurde ein Bestseller.", ku: "کتێبەکەی کە ئەوی نووسیوویەتی بەستسێلەر بوو.", tr: "Onun yazdığı kitap çok satanlar listesine girdi.", en: "The book written by her became a bestseller.", ar: "الكتاب الذي كتبته أصبح الأكثر مبيعًا.", uk: "Написана нею книга стала бестселером." ,"es":"El libro escrito por ella se convirtió en un bestseller."}, { de: "Die in der Zeitung erschienene Meldung war falsch.", ku: "هەواڵەکەی کە لە ڕۆژنامەدا چاپکراوە هەڵە بوو.", tr: "Gazetede çıkan haber yanlıştı.", en: "The report that appeared in the newspaper was wrong.", ar: "كان الخبر الذي نُشر في الصحيفة خاطئًا.", uk: "Повідомлення, що з'явилося в газеті, було хибним." ,"es":"El informe que apareció en el periódico estaba equivocado."}, { de: "Die zubereiteten Speisen rochen gut.", ku: "خواردنەکانی ئامادەکراو بۆی خۆش دەدا.", tr: "Hazırlanan yemekler güzel kokuyordu.", en: "The prepared dishes smelled good.", ar: "كانت الأطباق المُعدّة رائحتها طيبة.", uk: "Приготовані страви приємно пахли." ,"es":"Los platos preparados olían bien."}, { de: "Ein lächelndes Kind kam auf mich zu.", ku: "منداڵێکی پێکەنان لەبەرچاوم هات.", tr: "Gülen bir çocuk yanıma geldi.", en: "A smiling child came up to me.", ar: "اقترب مني طفل مبتسم.", uk: "До мене підійшла усміхнена дитина." ,"es":"Un niño sonriente se me acercó."}, { de: "Der verlorene Schlüssel war unter dem Tisch.", ku: "کلیلەکەی وەندراو لەژێر مێزەکەدا بوو.", tr: "Kaybolan anahtar masanın altındaydı.", en: "The lost key was under the table.", ar: "كان المفتاح المفقود تحت الطاولة.", uk: "Загублений ключ був під столом." ,"es":"La llave perdida estaba debajo de la mesa."} ] ,"es":"Construcciones participativas","expEs":"En alemán, las cláusulas subordinadas pueden ser omitidas y reemplazadas por construcciones Partizip I o II. Esto aparece frecuentemente en la escritura formal y académica. Partizip I (verb stell + -d) se utiliza para acciones simultáneas, Partizip II para las completas."},
    { de: "Erweiterte Infinitivkonstruktionen", ku: "دروستکردنی بێناو گەورەتر", icon: "∞",
      exp: "لەگەڵ um…zu (بۆ ئەوەی)، ohne…zu (بەبێ ئەوەی)، statt/anstatt…zu (لەبری ئەوەی)، brauchen…zu (پێویستت نییە). ئەمانە ڕستەی جێگیرکراو دەگۆڕن بۆ دروستکردنی سادەتر.",
      tr: "Genişletilmiş Mastar Yapıları", expTr: "um…zu (... için), ohne…zu (... olmaksızın), statt/anstatt…zu (... yerine), brauchen…zu (yapman gerekmiyor). Bunlar bağımlı cümlelerin yerini daha basit yapılarla alır.",
      en: "Extended infinitive constructions", expEn: "With um…zu (in order to), ohne…zu (without), statt/anstatt…zu (instead of), brauchen…zu (need not). These replace subordinate clauses with simpler constructions.",
      ar: "تراكيب المصدر الموسّعة", uk: "Розширені інфінітивні конструкції", expAr: "مع um…zu (لكي)، ohne…zu (من دون أن)، statt/anstatt…zu (بدلاً من أن)، brauchen…zu (لا حاجة لـ). تحل هذه محل الجمل الثانوية بصيغ أبسط.", expUk: "З um…zu (щоб), ohne…zu (не), statt/anstatt…zu (замість), brauchen…zu (не потрібно). Вони замінюють підрядні речення простішими конструкціями.",
      ex: [ { de: "Ich arbeite hart, um Erfolg zu haben.", ku: "زەحمەت دەکێشم بۆ ئەوەی سەرکەوتوو بمێنم.", tr: "Başarılı olmak için çok çalışıyorum.", en: "I work hard in order to be successful.", ar: "أعمل بجد لكي أنجح.", uk: "Я багато працюю, щоб бути успішним." ,"es":"Trabajo duro para tener éxito."}, { de: "Er ging, ohne sich zu verabschieden.", ku: "ڕۆیشت بەبێ ئەوەی خوداحافیزی بکات.", tr: "Veda etmeden gitti.", en: "He left without saying goodbye.", ar: "غادر من دون أن يودّع.", uk: "Він пішов, не попрощавшись." ,"es":"Se fue sin despedirse."}, { de: "Statt zu lernen, spielte er.", ku: "لەبری ئەوەی فێربێت، یاری کرد.", tr: "Öğrenmek yerine oynadı.", en: "Instead of studying, he played.", ar: "بدلاً من أن يدرس، لعب.", uk: "Замість того щоб учитися, він грав." ,"es":"En vez de estudiar, jugó."}, { de: "Du brauchst nicht zu warten.", ku: "پێویستت نییە چاوەڕوان بیت.", tr: "Beklemen gerekmiyor.", en: "You don't need to wait.", ar: "لست بحاجة إلى الانتظار.", uk: "Тобі не потрібно чекати." ,"es":"No tienes que esperar."}, { de: "Sie lernte Deutsch, um in Deutschland zu studieren.", ku: "ئەڵمانی فێربوو بۆ ئەوەی لە ئەڵمانیادا بخوێنێت.", tr: "Almanya'da okumak için Almanca öğrendi.", en: "She learned German in order to study in Germany.", ar: "تعلمت الألمانية لكي تدرس في ألمانيا.", uk: "Вона вивчила німецьку, щоб навчатися в Німеччині." ,"es":"Aprendió alemán para estudiar en Alemania."}, { de: "Er hörte auf zu rauchen, ohne zu kämpfen.", ku: "دوماندنی بەجێهێڵا بەبێ تەکاپۆ.", tr: "Mücadele etmeden içmeyi bıraktı.", en: "He stopped smoking without a struggle.", ar: "توقف عن التدخين من دون أن يكافح.", uk: "Він кинув палити без боротьби." ,"es":"Dejó de fumar sin luchar."} ] ,"es":"Construcciones infinitivas extendidas","expEs":"Con um...zu (para), ohne...zu (sin), statt/anstatt...zu (en lugar de), brauchen...zu (no es necesario).Estos sustituyen a las cláusulas subordinadas con construcciones más simples."},
    { de: "Doppelter Infinitiv", ku: "دوو بێناوی تێکەڵ", icon: "∬",
      exp: "کاتێک مۆداڵ لەگەڵ Perfekt یان Futur II بەکاردێت، دوو بێناو لە کۆتایی ڕستەکەدا دەخرێن. نموونە: Er hat kommen müssen (پێویستی بووە بێت). ئەمە ڕێزمانی ئەڵمانیی ئاستبەرزی فەرمییە.",
      tr: "Çift Mastar", expTr: "Bir modal Perfekt veya Futur II ile kullanıldığında, iki mastar cümlenin sonuna konur. Örnek: Er hat kommen müssen (gelmek zorundaydı). Bu ileri düzey resmi Almancadır.",
      en: "Double infinitive", expEn: "When a modal verb is used with the Perfekt or Futur II, two infinitives are placed at the end of the sentence. Example: Er hat kommen müssen (He had to come). This is advanced, formal German grammar.",
      ar: "المصدر المزدوج", uk: "Подвійний інфінітив", expAr: "عندما يُستخدم فعل ناقص (modal) مع صيغة Perfekt أو Futur II، يوضع مصدران في نهاية الجملة. مثال: Er hat kommen müssen (كان عليه أن يأتي). وهذه قاعدة نحوية ألمانية رسمية متقدمة.", expUk: "Коли модальне дієслово вживається з Perfekt або Futur II, у кінці речення ставлять два інфінітиви. Приклад: Er hat kommen müssen (Він мусив прийти). Це просунута, формальна граматика німецької.",
      ex: [ { de: "Er hat kommen müssen.", ku: "پێویستی بووە بێت.", tr: "Gelmek zorundaydı.", en: "He had to come.", ar: "كان عليه أن يأتي.", uk: "Він мусив прийти." ,"es":"Tenía que venir."}, { de: "Sie hat es nicht sagen dürfen.", ku: "مۆڵەتی نەبووە بیڵێت.", tr: "Söylemesine izin yoktu.", en: "She was not allowed to say it.", ar: "لم يكن مسموحًا لها أن تقول ذلك.", uk: "Їй не дозволили цього сказати." ,"es":"No se le permitió decirlo."}, { de: "Wir haben lange warten müssen.", ku: "پێویستمان بووە زۆر چاوەڕوان بین.", tr: "Uzun süre beklemek zorunda kaldık.", en: "We had to wait a long time.", ar: "كان علينا أن ننتظر طويلاً.", uk: "Нам довелося довго чекати." ,"es":"Tuvimos que esperar mucho tiempo."}, { de: "Das hätte nicht passieren dürfen.", ku: "نەبایستی ڕوویدابایە.", tr: "Bu olmamalıydı.", en: "That should not have happened.", ar: "ما كان ينبغي لهذا أن يحدث.", uk: "Цього не мало б статися." ,"es":"Eso no debería haber sucedido."}, { de: "Sie haben das Haus verlassen müssen.", ku: "پێویستیان بووە خانووەکە بەجێبهێڵن.", tr: "Evi terk etmek zorunda kaldılar.", en: "They had to leave the house.", ar: "كان عليهم أن يغادروا المنزل.", uk: "Їм довелося покинути будинок." ,"es":"Tuvieron que salir de la casa."}, { de: "Ich werde es gemacht haben müssen.", ku: "پێویست دەبێت کردیبیت.", tr: "Yapmış olmak zorunda kalacağım.", en: "I will have had to have done it.", ar: "سيكون عليّ أن أكون قد فعلت ذلك.", uk: "Я, напевно, муситиму це зробити." ,"es":"Tendré que haberlo hecho."} ] ,"es":"Doble infinitivo","expEs":"Cuando se utiliza un verbo modal con el Perfekt o Futur II, dos infinitivos se colocan al final de la oración. Ejemplo: Er hat kommen müssen (Tenía que venir). Esto es gramática alemana avanzada, formal."},
    { de: "Nominalisierungsstil", ku: "شێوازی ناوکردن", icon: "N↑",
      exp: "لە ئەکادیمیا و بازرگانیدا کردار بەناودەگۆڕدرێن بۆ ئەوەی ڕستە سەختتر و فەرمیتر بێت. نموونە: «analysieren» دەبێت «die Analyse durchführen». ئەمە Nominalisierungsstil ناوی پێدەدرێت.",
      tr: "İsimleştirme Stili", expTr: "Akademik ve iş dünyasında fiiller isme dönüştürülür; cümle daha resmi ve ağır olur. Örnek: «analysieren» → «die Analyse durchführen». Buna Nominalisierungsstil denir.",
      en: "Nominalization style", expEn: "In academia and business, verbs are turned into nouns to make sentences sound more formal and complex. Example: 'analysieren' becomes 'die Analyse durchführen' (to carry out an analysis). This is called Nominalisierungsstil (nominalization style).",
      ar: "أسلوب التسمية", uk: "Номіналізаційний стиль", expAr: "في الأوساط الأكاديمية وعالم الأعمال، تُحوَّل الأفعال إلى أسماء لجعل الجملة أكثر رسمية وتعقيدًا. مثال: تتحول «analysieren» (يحلّل) إلى «die Analyse durchführen» (إجراء تحليل). يُسمى هذا أسلوب التسمية (Nominalisierungsstil).", expUk: "В академічній та діловій сфері дієслова перетворюють на іменники, щоб речення звучали формальніше й складніше. Приклад: «analysieren» стає «die Analyse durchführen» (проводити аналіз). Це називається Nominalisierungsstil (номіналізаційний стиль).",
      ex: [ { de: "die Durchführung einer Analyse", ku: "ئەنجامدانی شیکاری (لەبری: شیکاری کردن)", tr: "bir analiz yapmak (yazmak yerine: analiz etmek)", en: "carrying out an analysis (instead of: to analyze)", ar: "إجراء تحليل (بدلاً من: أن يحلَّل)", uk: "проведення аналізу (замість: аналізувати)" ,"es":"realizar un análisis (en lugar de: analizar)"}, { de: "die Verbesserung der Situation", ku: "باشترکردنی دۆخەکە (لەبری: دۆخەکە باشتر کردن)", tr: "durumu iyileştirmek (durumu iyileştirmek yerine)", en: "the improvement of the situation (instead of: to improve the situation)", ar: "تحسين الوضع (بدلاً من: أن يُحسَّن الوضع)", uk: "поліпшення ситуації (замість: поліпшити ситуацію)" ,"es":"la mejora de la situación (en lugar de: mejorar la situación)"}, { de: "unter Berücksichtigung der Kosten", ku: "لەگەڵ ڕەچاوکردنی تێچووەکان", tr: "maliyetler göz önünde bulundurularak", en: "taking the costs into consideration", ar: "مع مراعاة التكاليف", uk: "з урахуванням витрат" ,"es":"teniendo en cuenta los costes"}, { de: "die Erreichung der Ziele", ku: "گەیشتن بە ئامانجەکان", tr: "hedeflere ulaşmak", en: "the achievement of the goals", ar: "تحقيق الأهداف", uk: "досягнення цілей" ,"es":"el logro de los objetivos"}, { de: "zur Lösung des Problems beitragen", ku: "بەشداری کردن لە چارەسەرکردنی کێشەکە", tr: "sorunun çözümüne katkıda bulunmak", en: "to contribute to the solution of the problem", ar: "المساهمة في حل المشكلة", uk: "сприяти вирішенню проблеми" ,"es":"contribuir a la solución del problema"}, { de: "die Bearbeitung des Antrags", ku: "مامەڵەکردن لەگەڵ داواکاریەکە", tr: "başvuruyu işleme koymak", en: "the processing of the application", ar: "معالجة الطلب", uk: "опрацювання заяви" ,"es":"la tramitación de la solicitud"} ] ,"es":"Estilo de designación","expEs":"En el mundo académico y empresarial, los verbos se convierten en sustantivos para hacer que las oraciones suenen más formales y complejas. Ejemplo: 'analysieren' se convierte en 'die Analyse durchführen' (para realizar un análisis), llamado Nominalisierungssstil (estilo de nominalización)."},
    { de: "Gehobene Schriftsprache", ku: "نووسینی فەرمی و ئاستبەرز", icon: "✦",
      exp: "لە نووسینی فەرمیدا ئەڵمانیەکان فۆرمەکانی تایبەت بەکاردەهێنن: «Es wurde festgestellt, dass…»، «Angesichts der Tatsache, dass…»، «Im Hinblick auf…». ئەمانە لە ئەکادیمیا و کار گرنگن.",
      tr: "Resmi Yazı Dili", expTr: "Resmi yazıda Almanlar özel biçimler kullanır: «Es wurde festgestellt, dass…», «Angesichts der Tatsache, dass…», «Im Hinblick auf…». Bunlar akademik ve iş hayatında önemlidir.",
      en: "Elevated written language", expEn: "In formal writing, Germans use special set phrases: 'Es wurde festgestellt, dass…' (It was determined that…), 'Angesichts der Tatsache, dass…' (In view of the fact that…), 'Im Hinblick auf…' (With regard to…). These are important in academia and business.",
      ar: "اللغة المكتوبة الراقية", uk: "Піднесена писемна мова", expAr: "في الكتابة الرسمية، يستخدم الألمان صيغًا ثابتة خاصة: «Es wurde festgestellt, dass…» (لقد تبيّن أن...)، «Angesichts der Tatsache, dass…» (نظرًا لحقيقة أن...)، «Im Hinblick auf…» (فيما يتعلق بـ...). وهذه مهمة في الأوساط الأكاديمية والعمل.", expUk: "У формальному письмі німці вживають особливі усталені звороти: «Es wurde festgestellt, dass…» (Було встановлено, що…), «Angesichts der Tatsache, dass…» (З огляду на те, що…), «Im Hinblick auf…» (Що стосується…). Вони важливі в академічній та діловій сфері.",
      ex: [ { de: "Angesichts der aktuellen Lage ist Vorsicht geboten.", ku: "بەرپێی دۆخی ئێستا، وریاکاری پێویستە.", tr: "Mevcut duruma bakıldığında dikkat gerekmektedir.", en: "In view of the current situation, caution is warranted.", ar: "نظرًا للوضع الراهن، يجب توخي الحذر.", uk: "З огляду на теперішню ситуацію, слід бути обережним." ,"es":"En vista de la situación actual, se debe actuar con cautela."}, { de: "Im Hinblick auf die Ergebnisse lässt sich sagen…", ku: "لە ڕووی ئەنجامەکانەوە دەتوانرێت بڵێین…", tr: "Sonuçlar açısından şunu söylenebilir…", en: "With regard to the results, it can be said that…", ar: "فيما يتعلق بالنتائج، يمكن القول إن…", uk: "Що стосується результатів, можна сказати, що…" ,"es":"Con respecto a los resultados, se puede decir que..."}, { de: "Es ist darauf hinzuweisen, dass…", ku: "دەبێت سەرنج بدرێتە ئەوەی کە…", tr: "Şunu belirtmek gerekmektedir ki…", en: "It should be pointed out that…", ar: "تجدر الإشارة إلى أن…", uk: "Слід зазначити, що…" ,"es":"Hay que señalar que..."}, { de: "Gemäß den Vorschriften ist zu beachten…", ku: "بەپێی رێنماییەکان دەبێت ئامانج بدرێت…", tr: "Yönetmeliklere göre dikkat edilmesi gereken…", en: "In accordance with the regulations, it must be noted…", ar: "وفقًا للوائح، يجب مراعاة…", uk: "Згідно з приписами, треба зважати…" ,"es":"De acuerdo con las normas, hay que tener en cuenta..."}, { de: "Infolgedessen wurde die Maßnahme ergriffen.", ku: "لە ئەنجامدا ئەم ڕێوشوێنە گرتە دەست.", tr: "Sonuç olarak bu önlem alındı.", en: "As a result, the measure was taken.", ar: "ونتيجة لذلك، تم اتخاذ هذا الإجراء.", uk: "Внаслідок цього було вжито заходу." ,"es":"Como resultado, se adoptó la medida."}, { de: "Unter Berücksichtigung aller Faktoren…", ku: "لە ڕووی هەموو هۆکارەکانەوە…", tr: "Tüm faktörler göz önünde bulundurulduğunda…", en: "Taking all factors into consideration…", ar: "مع مراعاة جميع العوامل…", uk: "З урахуванням усіх чинників…" ,"es":"Tomando en consideración todos los factores..."} ] ,"es":"Lenguaje escrito elevado","expEs":"En la escritura formal, los alemanes usan frases especiales: 'Es wurde festellt, dass...' (Se determinó que...), 'Angesichts der Tatsache, dass...' (En vista del hecho de que...), 'Im Hinblick auf...' (Con respecto a...).Estos son importantes en la academia y los negocios."},
    { de: "Modalpartikeln", ku: "بەشداری هەستیار", icon: "~",
      exp: "مۆداڵپارتیکڵەکان وشەی بچووکن کە مانا یان هەستی قسەکەر دەگواستنەوە. مانای ڕستەکە دەگۆڕن بەبێ ئەوەی وەرگێڕیان بکرێت بە ڕاستی. ئەمانە: doch (بەڵام ئایا)، mal (جارێک)، eigentlich (لە ڕاستیدا)، halt (چییە)، wohl (بیم هەیە)، eben (ئەوەیە دیکە)، ja (باشە دەزانی)، denn (ئیتا).",
      tr: "Modal Partiküller", expTr: "Modal partiküller konuşmacının anlamını veya duygusunu aktaran küçük kelimelerdir. Cümlenin anlamını doğrudan çeviri yapılmadan değiştirirler. Bunlar: doch (ya), mal (bir kez), eigentlich (aslında), halt (işte), wohl (sanırım), eben (zaten), ja (biliyorsun), denn (peki).",
      en: "Modal particles", expEn: "Modal particles are small words that convey the speaker's meaning or attitude. They change the meaning of a sentence without being directly translatable. These include: doch (after all/but), mal (just/for once), eigentlich (actually), halt (just/simply), wohl (probably/I suppose), eben (just/simply), ja (you know/as you know), denn (then/so, used in questions).",
      ar: "الجسيمات الشكلية (Modalpartikeln)", uk: "Модальні частки", expAr: "الجسيمات الشرطية (Modalpartikeln) هي كلمات صغيرة تنقل معنى المتحدث أو مشاعره. وهي تغيّر معنى الجملة من دون أن تُترجم ترجمة حرفية. ومن أمثلتها: doch (أليس كذلك/لكن)، mal (لمرة واحدة)، eigentlich (في الحقيقة)، halt (ببساطة)، wohl (على الأرجح)، eben (فقط/هكذا هو الحال)، ja (كما تعلم)، denn (إذن، تُستخدم في الأسئلة).", expUk: "Модальні частки — це маленькі слова, що передають смисл або ставлення мовця. Вони змінюють значення речення, хоча не перекладаються безпосередньо. До них належать: doch (все ж/та ж), mal (-но/якось), eigentlich (власне), halt (просто), wohl (мабуть), eben (саме/просто), ja (ж/адже), denn (ж, у питаннях).",
      ex: [ { de: "Komm doch mal vorbei!", ku: "تکایە ئەوبارە وەرە سەردانی بکە!", tr: "Bir ara uğra ya!", en: "Do come by sometime!", ar: "تعال لزيارتي في وقت ما!", uk: "Зайди ж якось!" ,"es":"¡Ven a verme alguna vez!"}, { de: "Das ist eigentlich ganz einfach.", ku: "ئەمە لە ڕاستیدا تەواو ئاسانە.", tr: "Bu aslında çok basit.", en: "That's actually quite simple.", ar: "هذا في الحقيقة بسيط جدًا.", uk: "Це, власне, доволі просто." ,"es":"Eso es bastante simple."}, { de: "Er ist wohl krank.", ku: "بیم هەیە نەخۆشە.", tr: "Sanırım hasta.", en: "He's probably sick.", ar: "أظنه مريض.", uk: "Він, мабуть, хворий." ,"es":"Probablemente esté enfermo."}, { de: "Das ist eben so.", ku: "ئەوەیە دیکە، ئاوایە.", tr: "İşte böyle.", en: "That's just how it is.", ar: "هكذا هو الحال ببساطة.", uk: "Так уже воно є." ,"es":"Así es como es."}, { de: "Das weißt du ja.", ku: "تۆیش دەزانیت باشە.", tr: "Biliyorsun zaten.", en: "You know that already, don't you.", ar: "أنت تعرف ذلك أصلاً.", uk: "Ти ж це вже знаєш." ,"es":"Ya lo sabes, ¿no?"}, { de: "Was machst du denn hier?", ku: "ئیتا تۆ لێرەدا چی دەکەیت؟", tr: "Peki sen burada ne yapıyorsun?", en: "So what are you doing here?", ar: "إذن ماذا تفعل هنا؟", uk: "Що ж ти тут робиш?" ,"es":"¿Qué haces aquí?"} ] ,"es":"Partículas modales","expEs":"Las partículas modales son pequeñas palabras que transmiten el significado o la actitud del orador. Cambian el significado de una oración sin ser directamente traducibles. Estos incluyen: doch (después de todo/pero), mal (sólo/por una vez), eigentlich (en realidad), deten (simplemente), wohl (probablemente/supongo), eben (simplemente), ja (usted sabe/como usted sabe), denn (entonces/así, usado en preguntas)."},
  ],
  C2: [
    { de: "Komplexe Satzgefüge", ku: "دروستکردنی ڕستەی پێچەواندار", icon: "🔗",
      exp: "لە C2دا ڕستەی پێچەواندار بەکاردێت کە چەند ئاست جیاوازی ئەوان تێکەڵن. Je mehr…desto mehr، Kaum…als، Nicht nur…sondern auch ئەمانەی گرنگترین دروستکردنەکانن.",
      tr: "Karmaşık Cümle Yapıları", expTr: "C2 düzeyinde birden fazla katmanlı iç içe geçmiş cümleler kullanılır. Je mehr…desto mehr, Kaum…als, Nicht nur…sondern auch en önemli yapılardandır.",
      en: "Complex sentence structures", expEn: "At C2 level, complex sentence structures with multiple intertwined levels of subordination are used. Je mehr…desto mehr (the more…the more), Kaum…als (hardly…when), and Nicht nur…sondern auch (not only…but also) are among the most important constructions.",
      ar: "التراكيب الجملية المعقدة", uk: "Складні синтаксичні конструкції", expAr: "في المستوى C2 تُستخدم تراكيب جملية معقدة تتشابك فيها عدة مستويات من التبعية. وتُعد Je mehr…desto mehr (كلما... كلما)، وKaum…als (بالكاد... حتى)، وNicht nur…sondern auch (ليس فقط... بل أيضاً) من أهم هذه التراكيب.", expUk: "На рівні C2 вживаються складні синтаксичні конструкції з кількома переплетеними рівнями підрядності. Je mehr…desto mehr (чим більше…тим більше), Kaum…als (щойно…як) і Nicht nur…sondern auch (не лише…а й) належать до найважливіших конструкцій.",
      ex: [ { de: "Da er sich vorbereitet hatte, gelang es, obwohl es schwierig war.", ku: "چونکە خۆی ئامادە کردبوو، سەرکەوتووی بوو هەرچەندە سەخت بوو.", tr: "Hazırlandığı için, zor da olsa başardı.", en: "Because he had prepared, he succeeded, even though it was difficult.", ar: "لأنه كان قد استعد، نجح رغم أن الأمر كان صعباً.", uk: "Оскільки він підготувався, йому вдалося, хоча це було важко." ,"es":"Porque se había preparado, lo logró, aunque era difícil."}, { de: "Nicht nur dass er zu spät kam, er hatte auch nichts mitgebracht.", ku: "نەتەنها دواخست، بەڵکو هیچیشی نەهاورد.", tr: "Sadece geç kalmakla kalmadı, bir şey de getirmedi.", en: "Not only did he arrive late, he also hadn't brought anything.", ar: "لم يتأخر فحسب، بل لم يُحضر معه شيئاً أيضاً.", uk: "Він не лише запізнився, а й нічого не приніс." ,"es":"No sólo llegó tarde, tampoco había traído nada."}, { de: "Je mehr man lernt, desto mehr erkennt man, wie viel man nicht weiß.", ku: "هەرچەند زیاتر فێربیت، زیاتر دەزانیت چەند نازانیت.", tr: "Ne kadar çok öğrenirsen, o kadar çok bilmediğini anlarsın.", en: "The more you learn, the more you realize how much you don't know.", ar: "كلما تعلّم المرء أكثر، أدرك أكثر كم هو لا يعرف.", uk: "Чим більше вчишся, тим більше усвідомлюєш, як багато не знаєш." ,"es":"Cuanto más aprendes, más te das cuenta de lo poco que sabes."}, { de: "Wäre er pünktlich gewesen, hätte er den Zug nicht verpasst.", ku: "ئەگەر کاتی بووایە، ترینەکەی لەدەست نەدایە.", tr: "Vaktinde olsaydı, treni kaçırmazdı.", en: "Had he been on time, he would not have missed the train.", ar: "لو كان قد وصل في الوقت المحدد، لما فاته القطار.", uk: "Якби він був вчасно, він би не пропустив потяг." ,"es":"Si hubiera llegado a tiempo, no habría perdido el tren."}, { de: "Kaum hatte er das Haus verlassen, fing es an zu regnen.", ku: "هێندە ئەوەی خانووەکەی بەجێهێڵا، باران دەستی کرد.", tr: "Evi terkeder terketmez yağmur başladı.", en: "Hardly had he left the house when it started to rain.", ar: "ما إن غادر المنزل حتى بدأ المطر بالهطول.", uk: "Щойно він вийшов з дому, як почався дощ." ,"es":"Apenas había salido de la casa cuando empezó a llover."}, { de: "So wichtig das auch sein mag, es darf nicht alles bestimmen.", ku: "هەرچەند گرنگیش بێت، نابێت هەموو شت بخاتە بەژێر دەستی.", tr: "Bu önemli de olsa, her şeyi belirlememelidir.", en: "As important as that may be, it must not determine everything.", ar: "مهما كان ذلك مهماً، فلا يجوز أن يتحكم في كل شيء.", uk: "Хоч яким важливим це не було б, воно не повинно вирішувати все." ,"es":"Por importante que sea, no debe determinar todo."} ] ,"es":"Estructuras de frases complejas","expEs":"A nivel C2, se utilizan estructuras de oración complejas con múltiples niveles entrelazados de subordinación. Je mehr...desto mehr (más...más), Kaum...als (difícilmente...cuando), y Nicht nur...sondern auch (no sólo...sino también) están entre las construcciones más importantes."},
    { de: "Negationsstrukturen (C2)", ku: "دروستکردنی نەرێن (ئاستبەرز)", icon: "¬",
      exp: "لە C2دا نەرێن بە شێوەی تایبەتتر بەکاردێت: nicht nur…sondern auch، weder…noch، keineswegs، mitnichten، bei weitem nicht.",
      tr: "Olumsuzluk Yapıları (C2)", expTr: "C2 düzeyinde olumsuzluk daha özel şekillerde kullanılır: nicht nur…sondern auch, weder…noch, keineswegs, mitnichten, bei weitem nicht.",
      en: "Negation structures (C2)", expEn: "At C2 level, negation is expressed in more specialized ways: nicht nur…sondern auch (not only…but also), weder…noch (neither…nor), keineswegs (by no means), mitnichten (not at all), bei weitem nicht (far from).",
      ar: "تراكيب النفي (C2)", uk: "Структури заперечення (C2)", expAr: "في المستوى C2 يُعبَّر عن النفي بأشكال أكثر تخصصاً: nicht nur…sondern auch (ليس فقط... بل أيضاً)، وweder…noch (لا... ولا)، وkeineswegs (بأي حال من الأحوال)، وmitnichten (البتة/إطلاقاً)، وbei weitem nicht (أبعد ما يكون عن الكفاية).", expUk: "На рівні C2 заперечення виражається спеціалізованіше: nicht nur…sondern auch (не лише…а й), weder…noch (ні…ні), keineswegs (аж ніяк), mitnichten (зовсім ні), bei weitem nicht (далеко не).",
      ex: [ { de: "Weder er noch sie hat Recht.", ku: "نە ئەو نە ئەو تری ڕاستیان هەیە.", tr: "Ne o ne de o haklı.", en: "Neither he nor she is right.", ar: "لا هو على حق ولا هي.", uk: "Ні він, ні вона не мають рації." ,"es":"Ni él ni ella tienen razón."}, { de: "Das ist keineswegs akzeptabel.", ku: "بە هیچ شێوەیەک پەسەند نییە.", tr: "Bu hiçbir şekilde kabul edilemez.", en: "That is by no means acceptable.", ar: "هذا غير مقبول بأي حال من الأحوال.", uk: "Це аж ніяк не прийнятно." ,"es":"Eso no es aceptable en absoluto."}, { de: "Nicht nur er, sondern auch sie war dabei.", ku: "نەتەنها ئەو، بەڵکو ئەو تریش تێیدا بوو.", tr: "Sadece o değil, o da oradaydı.", en: "Not only he but she too was present.", ar: "لم يكن هو فقط حاضراً، بل هي أيضاً.", uk: "Не лише він, а й вона була присутня." ,"es":"No sólo él, sino ella también estaba presente."}, { de: "Das stimmt mitnichten.", ku: "ئەمە بە هیچ جۆرێک ڕاست نییە.", tr: "Bu hiç doğru değil.", en: "That is not true in the least.", ar: "هذا غير صحيح إطلاقاً.", uk: "Це зовсім не так." ,"es":"Eso no es cierto en lo más mínimo."}, { de: "Bei weitem nicht genug.", ku: "بە دوورکەوتنی زۆر بەسنییە.", tr: "Yeterli değil, çok uzak.", en: "Far from enough.", ar: "غير كافٍ على الإطلاق.", uk: "Далеко не достатньо." ,"es":"Lejos de ser suficiente."}, { de: "Keiner der Anwesenden sprach dagegen.", ku: "هیچکام لە ئامادەبووان دژی قسە نەکرد.", tr: "Oradakilerin hiçbiri itiraz etmedi.", en: "None of those present spoke against it.", ar: "لم يعترض أحد من الحاضرين.", uk: "Ніхто з присутніх не виступив проти." ,"es":"Ninguno de los presentes habló en contra."} ] ,"es":"Estructuras de negación (C2)","expEs":"En el nivel C2, la negación se expresa de maneras más especializadas: nicht nur...sondern auch (no sólo...sino también), weder...noch (ni...ni), kinewegs (de ninguna manera), mitnichten (no en absoluto), bei weitem nicht (lejos de)."},
    { de: "Register & Stilebenen", ku: "ئاستەکانی زمان و شێواز", icon: "≡",
      exp: "زمانی ئەڵمانی چەند ئاستی جیاوازی هەیە: Umgangssprache (قسەی ڕۆژانە)، Standard (نڕمی)، gehobene Sprache (فەرمی ئاستبەرز)، Amtssprache (حکومی). هەر دۆخێک ئاستی جیاوازی داواکاری دەکات.",
      tr: "Dil Kayıtları ve Üslup Düzeyleri", expTr: "Almancada farklı üslup düzeyleri vardır: Umgangssprache (günlük konuşma), Standard (standart), gehobene Sprache (resmi üst düzey), Amtssprache (resmi dil). Her bağlam farklı düzey gerektirir.",
      en: "Register & style levels", expEn: "German has several distinct registers: Umgangssprache (colloquial everyday speech), Standard (standard language), gehobene Sprache (elevated formal language), and Amtssprache (official/bureaucratic language). Each situation calls for a different level.",
      ar: "مستويات اللغة والأسلوب", uk: "Регістри та стильові рівні", expAr: "للغة الألمانية عدة مستويات أسلوبية مختلفة: Umgangssprache (اللغة العامية اليومية)، وStandard (اللغة المعيارية)، وgehobene Sprache (اللغة الراقية الرسمية)، وAmtssprache (اللغة الرسمية/الإدارية). ويتطلب كل موقف مستوى مختلفاً.", expUk: "У німецькій мові є кілька різних регістрів: Umgangssprache (розмовна повсякденна мова), Standard (стандартна мова), gehobene Sprache (піднесена формальна мова) і Amtssprache (офіційно-бюрократична мова). Кожна ситуація вимагає іншого рівня.",
      ex: [ { de: "Ich kriege keinen Hunger. (umgangssprachlich)", ku: "براشم نییە. (قسەی ڕۆژانە)", tr: "Açım. (günlük)", en: "I'm hungry. (colloquial)", ar: "أنا جوعان. (عامي)", uk: "Я голодний. (розмовно)" ,"es":"Tengo hambre."}, { de: "Ich habe keinen Appetit. (Standard)", ku: "خواست نییە بخۆم. (نڕمی)", tr: "Yemek yemek istemiyorum. (standart)", en: "I don't want to eat. (standard)", ar: "لا أريد أن آكل. (معياري)", uk: "Я не хочу їсти. (стандарт)" ,"es":"No quiero comer."}, { de: "Mir fehlt der Appetit. (gehoben)", ku: "خواستم نییە. (فەرمی)", tr: "İştahım yok. (resmi)", en: "I have no appetite. (formal)", ar: "لا شهية لي. (رسمي)", uk: "У мене немає апетиту. (формально)" ,"es":"No tengo apetito."}, { de: "Was machst du? → Womit beschäftigen Sie sich?", ku: "چی دەکەیت؟ → بە چی بەرپرسی؟ (فەرمی)", tr: "Ne yapıyorsun? → Ne ile meşgulsünüz? (resmi)", en: "What are you doing? → What are you occupied with? (formal)", ar: "ماذا تفعل؟ ← بماذا تنشغلون؟ (رسمي)", uk: "Що ти робиш? → Чим Ви займаєтеся? (формально)" ,"es":"¿Qué estás haciendo? → ¿Con qué estás ocupado? (formal)"}, { de: "Klar! (umg.) → Selbstverständlich. (formell)", ku: "باشە! → بەتەواوی. (فەرمی)", tr: "Tabii! (günlük) → Elbette. (resmi)", en: "Sure! (colloquial) → Certainly. (formal)", ar: "أكيد! (عامي) ← بالتأكيد. (رسمي)", uk: "Звісно! (розмовно) → Безумовно. (формально)" ,"es":"¡Claro! (coloquial) → Ciertamente. (formal)"}, { de: "Das geht nicht. → Das ist nicht möglich.", ku: "ئەمە نابێت. → ئەمە گونجاو نییە. (فەرمی)", tr: "Bu olmaz. → Bu mümkün değil. (resmi)", en: "That won't work. → That is not possible. (formal)", ar: "هذا لا يصلح. ← هذا غير ممكن. (رسمي)", uk: "Це не вийде. → Це неможливо. (формально)" ,"es":"Eso no funcionará. → Eso no es posible. (formal)"} ] ,"es":"Registrar niveles de & estilo","expEs":"El alemán tiene varios registros distintos: Umgangssprache (habla cotidiana coloquial), Standard (lenguaje estándar), gehobene Sprache (lenguaje formal elevado) y Amtssprache (lenguaje oficial/burocrático).Cada situación requiere un nivel diferente."},
    { de: "Stilmittel", ku: "ئامرازەکانی شێواز", icon: "✍",
      exp: "ئامرازەکانی ئەدەبی و ڕیتۆریکی: Metapher (وێنەگرتن)، Ironie (پاقجی)، Antithese (دژایەتی)، Anapher (دووبارەکردنەوەی سەرەتا)، Hyperbel (زەیانی)، Litotes (نەرمی)، Personifikation (مرۆڤکردن).",
      tr: "Üslup Araçları", expTr: "Edebi ve retorik araçlar: Metapher (metafor), Ironie (ironi), Antithese (antitez), Anapher (anafora), Hyperbel (abartma), Litotes (olumsuzlama yoluyla olumlu), Personifikation (kişileştirme).",
      en: "Stylistic devices", expEn: "Literary and rhetorical devices: Metapher (metaphor), Ironie (irony), Antithese (antithesis), Anapher (anaphora), Hyperbel (hyperbole), Litotes (understatement via negation), Personifikation (personification).",
      ar: "الوسائل الأسلوبية", uk: "Стилістичні засоби", expAr: "الأدوات الأدبية والبلاغية: Metapher (الاستعارة)، وIronie (السخرية/التهكم)، وAntithese (الطباق/التضاد)، وAnapher (التكرار الاستهلالي)، وHyperbel (المبالغة)، وLitotes (التلطيف عبر النفي)، وPersonifikation (التجسيد/الأنسنة).", expUk: "Літературні та риторичні засоби: Metapher (метафора), Ironie (іронія), Antithese (антитеза), Anapher (анафора), Hyperbel (гіпербола), Litotes (применшення через заперечення), Personifikation (уособлення).",
      ex: [ { de: "Das Leben ist ein Fluss. (Metapher)", ku: "ژیان ڕووبارێکە. (وێنەگرتن)", tr: "Hayat bir nehirdir. (Metafor)", en: "Life is a river. (metaphor)", ar: "الحياة نهر. (استعارة)", uk: "Життя — це річка. (метафора)" ,"es":"La vida es un río."}, { de: "Ja, das war wirklich klug! (Ironie)", ku: "بەڵێ، ئەمە زۆر زیرەکانەیە! (پاقجی)", tr: "Evet, bu gerçekten akıllıca! (İroni)", en: "Yes, that was really clever! (irony)", ar: "نعم، كان ذلك ذكياً حقاً! (سخرية)", uk: "Так, це було справді розумно! (іронія)" ,"es":"¡Sí, eso fue muy inteligente!"}, { de: "arm und reich, jung und alt (Antithese)", ku: "هەژار و دەوڵەمەند، گەنج و پیر (دژایەتی)", tr: "fakir ve zengin, genç ve yaşlı (Antitez)", en: "poor and rich, young and old (antithesis)", ar: "فقير وغني، شاب وعجوز (طباق)", uk: "бідні й багаті, молоді й старі (антитеза)" ,"es":"pobres y ricos, jóvenes y mayores (antitesis)"}, { de: "Ich kam, ich sah, ich siegte. (Anapher)", ku: "هاتم، بینم، برم. (دووبارەکردنەوە)", tr: "Geldim, gördüm, kazandım. (Anafora)", en: "I came, I saw, I conquered. (anaphora)", ar: "أتيت، رأيت، انتصرت. (تكرار استهلالي)", uk: "Я прийшов, я побачив, я переміг. (анафора)" ,"es":"Vine, vi, conquisté."}, { de: "Das hab ich dir tausendmal gesagt! (Hyperbel)", ku: "هەزار جارت گوتووتمە! (زەیانی)", tr: "Bunu sana bin kez söyledim! (Abartma)", en: "I've told you that a thousand times! (hyperbole)", ar: "قلت لك هذا ألف مرة! (مبالغة)", uk: "Я казав тобі це тисячу разів! (гіпербола)" ,"es":"¡Te lo he dicho mil veces!"}, { de: "Das ist nicht schlecht. (Litotes = es ist gut)", ku: "ئەمە خراپ نییە. (واتا: باشە — Litotes)", tr: "Bu fena değil. (yani: iyi — Litotes)", en: "That's not bad. (litotes = it is good)", ar: "هذا ليس سيئاً. (أي: إنه جيد — تلطيف)", uk: "Це непогано. (літота = це добре)" ,"es":"Eso no está mal."} ] ,"es":"Dispositivos de estilismo","expEs":"Dispositivos literarios y retóricos: Metáfer (metafora), Ironía (irónica), Antítesis (antítesis), Anafera (anafora), Hiperbel (hiperbole), Litotes (subdeclaración por negación), Persifikation (personificación)."},
    { de: "Kollokationen", ku: "کۆمەڵی وشەی جێگیر", icon: "⊕",
      exp: "کۆلۆکەیشن بە ئەوە دەڵێن کە وشەکان بە شێوەی ئاسایی لەگەڵ یەکتر دێن. نموونە: «eine Entscheidung treffen» نەک «eine Entscheidung machen».",
      tr: "Kelime Birleşimleri (Kollokasyon)", expTr: "Kollokasyon, kelimelerin doğal olarak birlikte kullanılması demektir. Örnek: «eine Entscheidung treffen» değil «eine Entscheidung machen».",
      en: "Collocations", expEn: "A collocation refers to words that naturally co-occur. Example: 'eine Entscheidung treffen' (to make a decision), not 'eine Entscheidung machen'.",
      ar: "التلازمات اللفظية", uk: "Колокації", expAr: "يُقصد بالمتلازمات اللفظية (Kollokation) الكلمات التي ترد معاً بشكل طبيعي. مثال: «eine Entscheidung treffen» (اتخاذ قرار) وليس «eine Entscheidung machen».", expUk: "Колокація — це слова, що природно вживаються разом. Приклад: «eine Entscheidung treffen» (ухвалити рішення), а не «eine Entscheidung machen».",
      ex: [ { de: "eine Entscheidung treffen", ku: "بڕیاردان (نەک: مەرج کردن)", tr: "karar vermek (yapmak değil)", en: "to make a decision (not: to do a decision)", ar: "اتخاذ قرار (وليس: صنع قرار)", uk: "ухвалити рішення (не: зробити рішення)" ,"es":"para tomar una decisión (no: para tomar una decisión)"}, { de: "eine Frage stellen", ku: "پرسیار کردن (نەک: دانان)", tr: "soru sormak (koymak değil)", en: "to ask a question (not: to put a question)", ar: "طرح سؤال (وليس: وضع سؤال)", uk: "поставити питання (не: покласти питання)" ,"es":"para hacer una pregunta (no: para hacer una pregunta)"}, { de: "Verantwortung übernehmen", ku: "بەرپرسیارێتی وەرگرتن", tr: "sorumluluk üstlenmek", en: "to take on responsibility", ar: "تحمّل المسؤولية", uk: "взяти на себе відповідальність" ,"es":"asumir la responsabilidad"}, { de: "einen Fehler begehen", ku: "هەڵەیەک کردن (فەرمی)", tr: "hata yapmak (resmi)", en: "to commit an error (formal)", ar: "ارتكاب خطأ (رسمي)", uk: "припуститися помилки (формально)" ,"es":"cometer un error (formal)"}, { de: "in Betracht ziehen", ku: "بیر لێ کردنەوە / ڕەچاوکردن", tr: "göz önünde bulundurmak", en: "to take into consideration", ar: "أخذ بعين الاعتبار", uk: "взяти до уваги" ,"es":"a tener en cuenta"}, { de: "Rücksicht nehmen auf", ku: "ڕەچاو کردنی / گوێگرتن لە", tr: "saygı göstermek", en: "to show consideration for", ar: "مراعاة / إظهار الاحترام لـ", uk: "виявляти увагу до" ,"es":"para demostrar su consideración por"} ] ,"es":"Collocaciones","expEs":"Una collocación se refiere a palabras que naturalmente co-ocurren. Ejemplo: 'eine Entscheidung treffen' (para tomar una decisión), no 'eine Entscheidung machen'."},
    { de: "Redewendungen & Sprichwörter", ku: "دەستانووس و پەندوامۆڵ", icon: "💬",
      exp: "دیالۆگی خوێندووانەی ئەڵمانی پڕ لە Redewendungen (دەستانووس) و Sprichwörter (پەندوامۆڵ)ە. فێرکردنیان تێگەیشتن لە ناوەندی کولتوورییەکە دەگەیەنێت.",
      tr: "Deyimler ve Atasözleri", expTr: "Akıcı Almanca konuşmacılar Redewendungen (deyimler) ve Sprichwörter (atasözleri) kullanır. Bunları öğrenmek dile ve kültüre dair anlayışı derinleştirir.",
      en: "Idioms & proverbs", expEn: "Fluent German speakers make extensive use of Redewendungen (idioms) and Sprichwörter (proverbs). Learning them conveys a deeper understanding of the cultural context.",
      ar: "التعابير الاصطلاحية والأمثال", uk: "Ідіоми та прислів'я", expAr: "يستخدم المتحدثون المتمكنون من الألمانية Redewendungen (التعابير الاصطلاحية) وSprichwörter (الأمثال) بكثرة. وتعلّمها يُعمّق الفهم للسياق الثقافي.", expUk: "Вільні носії німецької широко вживають Redewendungen (ідіоми) і Sprichwörter (прислів'я). Їх вивчення передає глибше розуміння культурного контексту.",
      ex: [ { de: "Das ist nicht mein Bier.", ku: "ئەمە کارەکەم نییە.", tr: "Bu benim işim değil.", en: "That's not my business.", ar: "هذا ليس شأني.", uk: "Це не моя справа." ,"es":"Eso no es asunto mío."}, { de: "Lügen haben kurze Beine.", ku: "درۆ لەپێی خۆدا دەمێنێت.", tr: "Yalancının mumu yatsıya kadar yanar.", en: "Lies have short legs. (the truth always comes out)", ar: "للكذب أرجل قصيرة. (الحقيقة تظهر دائماً)", uk: "У брехні короткі ноги. (правда завжди виходить назовні)" ,"es":"Las mentiras tienen piernas cortas. (la verdad siempre sale)"}, { de: "Tomaten auf den Augen haben.", ku: "گومرا بوون / نەدیتن چییە پێشتا.", tr: "Görmemek / Gözü kapalı olmak.", en: "To have tomatoes on one's eyes. (to fail to notice the obvious)", ar: "أن يكون لديه طماطم على عينيه. (أي لا يلاحظ ما هو واضح)", uk: "Мати помідори на очах. (не помічати очевидного)" ,"es":"Tener tomates en los ojos. (no notar lo obvio)"}, { de: "Den Nagel auf den Kopf treffen.", ku: "تێی گەیشتن / ڕاستی گوتن.", tr: "Tam yerine oturmak / Doğruyu söylemek.", en: "To hit the nail on the head.", ar: "أن يضرب المسمار على رأسه. (أي يصيب كبد الحقيقة)", uk: "Влучити цвяхом у голову. (влучити в саму суть)" ,"es":"Para golpear el clavo en la cabeza."}, { de: "Alles hat ein Ende, nur die Wurst hat zwei.", ku: "هەموو شتێک کۆتاییەکی هەیە.", tr: "Her şeyin bir sonu vardır.", en: "Everything has an end, only the sausage has two.", ar: "لكل شيء نهاية، أما السجق فله نهايتان.", uk: "Усе має кінець, лише ковбаса має два." ,"es":"Todo tiene un final, sólo la salchicha tiene dos."}, { de: "Wer zuletzt lacht, lacht am besten.", ku: "ئەوەی دوایین دەپێکنێت باشترین پێکەنینی هەیە.", tr: "En son gülen en iyi güler.", en: "He who laughs last, laughs best.", ar: "من يضحك أخيراً يضحك أطول.", uk: "Хто сміється останнім, той сміється найкраще." ,"es":"El que ríe último, ríe mejor."} ] ,"es":"Idiomas y proverbios","expEs":"Los hablantes de alemán fluidos hacen un uso extenso de los idiomas Redewendungen y Sprichwörter (proverbios). Aprenderlos transmite una comprensión más profunda del contexto cultural."},
    { de: "Dialekte & Varietäten", ku: "شێوەزارەکان و جۆرجۆری زمان", icon: "🗺",
      exp: "زمانی ئەڵمانی لە ئەڵمانیا، ئەوستریا و سویسرا جیاوازە. Bayerisch (بایەرن)، Berlinerisch (بەرلین)، Wienerisch (وین)، Schweizerdeutsch (سویس). بۆ C2 باشترە زانیاری هەبیت.",
      tr: "Lehçeler ve Dil Çeşitleri", expTr: "Almanya, Avusturya ve İsviçre'de Almanca farklıdır. Bayerisch (Bavyera), Berlinerisch (Berlin), Wienerisch (Viyana), Schweizerdeutsch (İsviçre). C2 için bu konuda bilgi sahibi olmak iyidir.",
      en: "Dialects & varieties", expEn: "German differs across Germany, Austria, and Switzerland. Bayerisch (Bavarian), Berlinerisch (Berlin dialect), Wienerisch (Viennese), Schweizerdeutsch (Swiss German). For C2 it is good to have knowledge of this.",
      ar: "اللهجات والتنوعات اللغوية", uk: "Діалекти та варіанти", expAr: "تختلف اللغة الألمانية في ألمانيا والنمسا وسويسرا. Bayerisch (البافارية)، وBerlinerisch (لهجة برلين)، وWienerisch (لهجة فيينا)، وSchweizerdeutsch (الألمانية السويسرية). ومن المفيد لمستوى C2 الإلمام بهذا الموضوع.", expUk: "Німецька відрізняється в Німеччині, Австрії та Швейцарії. Bayerisch (баварський), Berlinerisch (берлінський діалект), Wienerisch (віденський), Schweizerdeutsch (швейцарський німецький). Для C2 добре мати про це уявлення.",
      ex: [ { de: "Grüß Gott! (bayerisch) = Guten Tag!", ku: "سڵاوت لەگەڵ خودا! = ڕۆژباش! (بایەری)", tr: "Grüß Gott! (Bavyera) = Günaydın!", en: "Grüß Gott! (Bavarian) = Good day!", ar: "Grüß Gott! (بافارية) = طاب يومك!", uk: "Grüß Gott! (баварською) = Добрий день!" ,"es":"¡Gr"}, { de: "Servus! (österreichisch) = Hallo / Tschüss", ku: "سێروس! = سڵاو / خوداحافیز (ئەوستری)", tr: "Servus! (Avusturya) = Merhaba / Hoşça kal", en: "Servus! (Austrian) = Hello / Goodbye", ar: "Servus! (نمساوية) = مرحباً / وداعاً", uk: "Servus! (австрійською) = Привіт / Бувай" ,"es":"¡Servus! (Austriano) = Hola / Adiós"}, { de: "Berlinerisch: ick statt ich", ku: "لە بەرلیندا: «ick» لەبری «ich»", tr: "Berlin'de: «ick» yerine «ich»", en: "Berlin dialect: 'ick' instead of 'ich'", ar: "في لهجة برلين: «ick» بدلاً من «ich»", uk: "Берлінський діалект: «ick» замість «ich»" ,"es":"dialecto berlinés: \"enfermo\" en lugar de \"ich\""}, { de: "In der Schweiz: Grüezi! = Guten Tag", ku: "لە سویسرادا: «گرییتسی!» = ڕۆژباش", tr: "İsviçre'de: «Grüezi!» = Günaydın", en: "In Switzerland: 'Grüezi!' = Good day", ar: "في سويسرا: «Grüezi!» = طاب يومك", uk: "У Швейцарії: «Grüezi!» = Добрий день" ,"es":"En Suiza: 'Grüezi!' = Buenos días"}, { de: "Net statt nicht (süddeutsch)", ku: "«نێت» لەبری «نیخت» (باشووری ئەڵمانیا)", tr: "«Net» yerine «nicht» (Güney Almanya)", en: "'Net' instead of 'nicht' (Southern Germany)", ar: "«Net» بدلاً من «nicht» (جنوب ألمانيا)", uk: "«Net» замість «nicht» (південнонімецькою)" ,"es":"«Net» en lugar de «nicht» (Alemania meridional)"}, { de: "Nix statt nichts (umgangssprachlich)", ku: "«نیکس» لەبری «نیختس» (قسەی ڕۆژانە)", tr: "«Nix» yerine «nichts» (günlük)", en: "'Nix' instead of 'nichts' (colloquial)", ar: "«Nix» بدلاً من «nichts» (عامية)", uk: "«Nix» замість «nichts» (розмовно)" ,"es":"'Nix' en lugar de 'nichts' (coloquial)"} ] ,"es":"Dialectos y variedades","expEs":"El alemán difiere en Alemania, Austria y Suiza. Bayerisch (Bavarian), Berlinerisch (Dialecto de Berlín), Wienerisch (Viennes), Schweizerdeutsch (Alemán suizo). Para C2 es bueno tener conocimiento de esto."},
    { de: "Historisches Deutsch", ku: "زمانی ئەڵمانیی مێژووی", icon: "📜",
      exp: "زمانی ئەڵمانی بۆ مێژوودا گۆڕابووە. ئەڵمانیی کلاسیک (Goethe، Schiller) چەند جیاوازییەکی بنەڕەتیان هەیە: Ihr بەجێی Sie، Präteritum زۆرتر، فۆرمەکانی بایبڵی.",
      tr: "Tarihsel Almanca", expTr: "Almanca tarih içinde değişmiştir. Klasik Almanca (Goethe, Schiller) bazı temel farklılıklar içerir: Sie yerine Ihr, daha fazla Präteritum, Kutsal Kitap biçimleri.",
      en: "Historical German", expEn: "German has changed throughout history. Classical German (Goethe, Schiller) contains several fundamental differences: Ihr instead of Sie, more frequent use of the Präteritum, and biblical forms.",
      ar: "الألمانية التاريخية", uk: "Історична німецька", expAr: "تغيّرت اللغة الألمانية عبر التاريخ. تحتوي الألمانية الكلاسيكية (غوته، شيلر) على بعض الفروق الأساسية: Ihr بدلاً من Sie، واستخدام أكثر لصيغة الماضي البسيط (Präteritum)، وصيغ الكتاب المقدس.", expUk: "Німецька мова змінювалася впродовж історії. Класична німецька (Ґете, Шиллер) містить кілька суттєвих відмінностей: Ihr замість Sie, частіше вживання Präteritum і біблійні форми.",
      ex: [ { de: "Habt Ihr das getan? (historisch formell)", ku: "ئایا ئێوە ئەمەی کردووە؟ (کۆن فەرمی)", tr: "Bunu yaptınız mı? (tarihsel resmi)", en: "Have you done that? (historical formal)", ar: "هل فعلتم ذلك؟ (تاريخي رسمي)", uk: "Ви це зробили? (історично формально)" ,"es":"¿Has hecho eso?"}, { de: "Es ward Licht. (Bibeldeutsch)", ku: "ڕووناکی بوو. (زمانی کتێبی پیرۆز)", tr: "Işık olsun. (Kutsal Kitap Almancası)", en: "Let there be light. (Biblical German)", ar: "وليكن نور. (ألمانية الكتاب المقدس)", uk: "І стало світло. (біблійна німецька)" ,"es":"Que haya luz."}, { de: "Ich bin's. (kontrahiert = ich bin es)", ku: "منم. (کورتکراو)", tr: "Benim. (kısaltılmış = ich bin es)", en: "It's me. (contracted = ich bin es)", ar: "هذا أنا. (مختصر = ich bin es)", uk: "Це я. (стягнено = ich bin es)" ,"es":"Soy yo."}, { de: "Welch ein schöner Tag! (gehobene alte Form)", ku: "چەند ڕۆژێکی جوان! (کۆن فەرمی)", tr: "Ne güzel bir gün! (eski resmi)", en: "What a beautiful day! (elevated old form)", ar: "يا له من يوم جميل! (صيغة قديمة راقية)", uk: "Який гарний день! (піднесена стара форма)" ,"es":"¡Qué hermoso día! (elevada forma vieja)"}, { de: "Das Wort «Weib» bedeutete früher «Frau».", ku: "وشەی «ڤایب» لەمێژوودا مانای «ژن» هەیدا.", tr: "«Weib» kelimesi eskiden «kadın» anlamına gelirdi.", en: "The word 'Weib' used to mean 'woman'.", ar: "كانت كلمة «Weib» تعني سابقاً «امرأة».", uk: "Слово «Weib» колись означало «жінка»." ,"es":"La palabra \"Weib\" solía significar \"mujer\"."}, { de: "Man sprach damals anders.", ku: "لەو کاتەدا جیاوازتر قسە دەکران.", tr: "O zamanlar farklı konuşulurdu.", en: "People spoke differently back then.", ar: "كان الناس يتحدثون بشكل مختلف في ذلك الزمان.", uk: "Тоді говорили інакше." ,"es":"La gente hablaba de manera diferente en ese entonces."} ] ,"es":"Alemán histórico","expEs":"El alemán clásico (Goethe, Schiller) contiene varias diferencias fundamentales: Ihr en lugar de Sie, el uso más frecuente del präteritum, y las formas bíblicas."},
  ],
};

export const GTABLES = {
  "Artikel: der, die, das": {
    headersUk: ["Рід","Артикль","Приклад"],
    rowsUk: [["Чоловічий","der","der Mann"],["Жіночий","die","die Frau"],["Середній","das","das Kind"]],
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
  "headersEs":["Género","Artículo","Ejemplo"],"rowsEs":[["Masculino","der","der Mann"],["Femenino","morir","die Frau"],["Neutro","das","das Kind"]]},
  "Bestimmte / unbestimmte Artikel": {
    headersUk: ["Рід","Означений","Неозначений"],
    rowsUk: [["Чоловічий","der","ein"],["Жіночий","die","eine"],["Середній","das","ein"]],
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
  "headersEs":["Género","Definido","Indefinido"],"rowsEs":[["Masculino","der","ein"],["Femenino","morir","eína"],["Neutro","das","ein"]]},
  "Plural": {
    headersUk: ["Закінчення","Приклад"],
    rowsUk: [["-e","der Tisch → die Tische"],["-er","das Kind → die Kinder"],["-(e)n","die Frau → die Frauen"],["-s","das Auto → die Autos"]],
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
  "headersEs":["Fin","Ejemplo"],"rowsEs":[["-e","der Tisch → die Tische"],["-er","das Kind → die Kinder"],["-(e)n","die Frau → die Frauen"],["-s","das Auto → die Autos"]]},
  "Personalpronomen": {
    headersUk: ["Німецька","Українська"],
    rowsUk: [["ich","я"],["du","ти"],["er / sie / es","він / вона / воно"],["wir","ми"],["ihr","ви (мн.)"],["sie / Sie","вони / Ви (ввічливо)"]],
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
  "headersEs":["Alemán","página 2"],"rowsEs":[["ich","I"],["du","tú"],["er / sie / es","Él / ella / él"],["wir","nosotros"],["ihr","tú (pl.)"],["sie / Sie","ellos / usted (formal)"]]},
  "Präsens — regelmäßige Verben": {
    headersUk: ["Особа","lernen"],
    rowsUk: [["ich","lerne"],["du","lernst"],["er/sie/es","lernt"],["wir","lernen"],["ihr","lernt"],["sie/Sie","lernen"]],
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
  "headersEs":["Persona","lernen"],"rowsEs":[["ich","lerno"],["du","lernst"],["er/sie/es","lernt"],["wir","lernen"],["ihr","lernt"],["sie/Sie","lernen"]]},
  "Unregelmäßige Verben": {
    headersUk: ["Особа","fahren","essen"],
    rowsUk: [["ich","fahre","esse"],["du","fährst","isst"],["er/sie/es","fährt","isst"],["wir","fahren","essen"]],
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
  "headersEs":["Persona","fahren","essen"],"rowsEs":[["ich","fahre","esse"],["du","fährst","isst"],["er/sie/es","fährt","isst"],["wir","fahren","essen"]]},
  "sein und haben": {
    headersUk: ["Особа","sein","haben"],
    rowsUk: [["ich","bin","habe"],["du","bist","hast"],["er/sie/es","ist","hat"],["wir","sind","haben"],["ihr","seid","habt"],["sie/Sie","sind","haben"]],
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
  "headersEs":["Persona","sein","haben"],"rowsEs":[["ich","bin","hábé"],["du","bist","hast"],["er/sie/es","ist","sombrero"],["wir","sind","haben"],["ihr","seid","habt"],["sie/Sie","sind","haben"]]},
  "Modalverben": {
    headersUk: ["Модальне дієслово","Значення"],
    rowsUk: [["können","могти"],["müssen","мусити"],["wollen","хотіти"],["dürfen","мати дозвіл"],["sollen","мати повинність"],["möchten","хотіти б"]],
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
  "headersEs":["Verbo Modal","Significado"],"rowsEs":[["können","para poder"],["müssen","tener que hacerlo"],["wollen","a querer"],["dürfen","que se permita"],["sollen","que se supone que"],["möchten","me gustaría"]]},
  "W-Fragen": {
    headersUk: ["Питальне слово","Значення"],
    rowsUk: [["wer","хто"],["was","що"],["wo","де"],["wann","коли"],["wie","як"],["warum","чому"]],
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
  "headersEs":["Palabra de pregunta","Significado"],"rowsEs":[["wer","quién"],["era","¿Qué?"],["wo","donde"],["wann","cuando"],["wie","cómo"],["warum","¿Por qué?"]]},
  "Ja/Nein-Fragen": {
    headersUk: ["1 (Дієслово)","2 (Підмет)","..."],
    rowsUk: [["Kommst","du","mit?"],["Hast","du","Zeit?"],["Ist","das","richtig?"]],
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
  "headersEs":["1 (Verb)","2 (Asunto)","..."],"rowsEs":[["Kommst","du","¿Mit?"],["Hast","du","¿Zeit?"],["Ist","das","¿Richtig?"]]},
  "Satzstellung": {
    headersUk: ["Позиція 1","Позиція 2 (Дієслово)","Решта"],
    rowsUk: [["Ich","lerne","heute Deutsch"],["Heute","lerne","ich Deutsch"],["Morgen","gehe","ich nach Hause"]],
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
  "headersEs":["Posición 1","Posición 2 (Verb)","Resto"],"rowsEs":[["Ich","lerno","heute Deutsch"],["Heute","lerno","ich Deutsch"],["Morgen","gehe","ich nach Hause"]]},
  "Akkusativ": {
    headersUk: ["Рід","Nominativ","Akkusativ"],
    rowsUk: [["Чоловічий","der / ein","den / einen"],["Жіночий","die / eine","die / eine"],["Середній","das / ein","das / ein"],["Множина","die","die"]],
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
  "headersEs":["Género","Nominativ","Akkusativ"],"rowsEs":[["Masculino","der / ein","den/einen"],["Femenino","die / eine","die / eine"],["Neutro","das / ein","das / ein"],["Plural","morir","morir"]]},
  "Possessivartikel": {
    headersUk: ["Особа","Присвійний"],
    rowsUk: [["ich","mein"],["du","dein"],["er","sein"],["sie","ihr"],["wir","unser"],["ihr","euer"]],
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
  "headersEs":["Persona","Posesivo"],"rowsEs":[["ich","mein"],["du","dein"],["er","sein"],["sie","ihr"],["wir","unser"],["ihr","euer"]]},
  "Trennbare Verben": {
    headersUk: ["Дієслово","Префікс","У реченні"],
    rowsUk: [["aufstehen","auf","ich stehe auf"],["einkaufen","ein","ich kaufe ein"],["ankommen","an","ich komme an"]],
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
  "headersEs":["Verbo","Prefijo","En una frase"],"rowsEs":[["aufstehen","auf","ich stehe auf"],["einkaufen","ein","ich kaufe ein"],["ankommen","an","ich komme an"]]},
  "Negation: nicht / kein": {
    headersUk: ["Вживання","Приклад"],
    rowsUk: [["nicht (дієслово/прикметник)","Ich verstehe nicht."],["kein (неозначений іменник)","Ich habe kein Geld."],["keine (жіночий/множина)","Ich habe keine Zeit."]],
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
  "headersEs":["Uso","Ejemplo"],"rowsEs":[["nicht (verbo/adictivo)","Ich verstehe nicht."],["kein (nombre indefinido)","Ich habe kein Geld."],["keina (femenina/plural)","Ich habe keine Zeit."]]},
  "Imperativ": {
    headersUk: ["Особа","Форма"],
    rowsUk: [["du","Komm!"],["ihr","Kommt!"],["Sie","Kommen Sie!"]],
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
  "headersEs":["Persona","Formulario"],"rowsEs":[["du","¡Komm!"],["ihr","¡Kommt!"],["Sie","¡Kommen Sie!"]]},
  "Präpositionen: Ort & Zeit": {
    headersUk: ["Прийменник","Значення"],
    rowsUk: [["in","всередині"],["an","біля / на"],["auf","на"],["um","година (час)"],["am","день (час)"],["im","місяць / пора року (час)"]],
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
  "headersEs":["Preposición","Significado"],"rowsEs":[["en","interior"],["an","junto a / en"],["auf","el"],["um","hora (hora)"],["- Sí.","día (hora)"],["im","mes / temporada (hora)"]]},
  "Dativ": {
    headersUk: ["Рід","Nominativ","Dativ"],
    rowsUk: [["Чоловічий","der","dem"],["Жіночий","die","der"],["Середній","das","dem"],["Множина","die","den (+n)"]],
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
  "headersEs":["Género","Nominativ","Dativ"],"rowsEs":[["Masculino","der","dem"],["Femenino","morir","der"],["Neutro","das","dem"],["Plural","morir","den (+n)"]]},
  "Wechselpräpositionen": {
    headersUk: ["Питання","Відмінок","Приклад"],
    rowsUk: [["wohin? (рух)","Akkusativ","in die Schule"],["wo? (місце)","Dativ","in der Schule"]],
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
  "headersEs":["Pregunta","Caso","Ejemplo"],"rowsEs":[["¿Wohin?","Akkusativ","en die Schule"],["(Localización)","Dativ","in der Schule"]]},
  "Perfekt": {
    headersUk: ["Допоміжне дієслово","Приклад"],
    rowsUk: [["haben","ich habe gemacht"],["sein (рух)","ich bin gegangen"]],
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
  "headersEs":["Verbo auxiliar","Ejemplo"],"rowsEs":[["haben","ich habe gemacht"],["sein (moción)","ich bin gegangen"]]},
  "Präteritum (sein, haben, Modalverben)": {
    headersUk: ["Дієслово","Präteritum"],
    rowsUk: [["sein","war"],["haben","hatte"],["können","konnte"],["müssen","musste"],["wollen","wollte"]],
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
  "headersEs":["Verbo","Präteritum"],"rowsEs":[["sein","guerra"],["haben","hatte"],["können","konnte"],["müssen","musste"],["wollen","wollte"]]},
  "Reflexive Verben": {
    headersUk: ["Особа","Зворотний займенник"],
    rowsUk: [["ich","mich"],["du","dich"],["er/sie/es","sich"],["wir","uns"],["ihr","euch"],["sie/Sie","sich"]],
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
  "headersEs":["Persona","Pronombre reflexivo"],"rowsEs":[["ich","mich"],["du","dich"],["er/sie/es","sich"],["wir","uns"],["ihr","euch"],["sie/Sie","sich"]]},
  "Konjunktionen: und, oder, aber, denn, sondern": {
    headersUk: ["Сполучник","Значення"],
    rowsUk: [["und","і"],["oder","або"],["aber","але"],["denn","бо / адже"],["sondern","а навпаки"]],
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
  "headersEs":["Conjunción","Significado"],"rowsEs":[["und","y"],["oder","o"],["aber","pero"],["dens","porque/por"],["söndern","pero más bien"]]},
  "Nebensatz: weil, dass": {
    headersUk: ["Сполучник","Значення","Дієслово"],
    rowsUk: [["weil","тому що","у кінці речення"],["dass","що","у кінці речення"]],
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
  "headersEs":["Conjunción","Significado","Verbo"],"rowsEs":[["weil","porque","fin de la cláusula"],["dass","que","fin de la cláusula"]]},
  "Komparativ": {
    headersUk: ["Positiv","Komparativ"],
    rowsUk: [["groß","größer"],["alt","älter"],["gut","besser"],["viel","mehr"]],
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
  "headersEs":["Positiv","Komparativ"],"rowsEs":[["groß","grl"],["alt","älter"],["intestino","besser"],["viel","más"]]},
  "Superlativ": {
    headersUk: ["Positiv","Komparativ","Superlativ"],
    rowsUk: [["groß","größer","am größten"],["gut","besser","am besten"],["viel","mehr","am meisten"]],
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
  "headersEs":["Positiv","Komparativ","Superlativ"],"rowsEs":[["groß","grl","am gr"],["intestino","besser","am besten"],["viel","más","am meisten"]]},
  "Genitiv (Einführung)": {
    headersUk: ["Рід","Genitiv"],
    rowsUk: [["Чоловічий","des (+s)"],["Жіночий","der"],["Середній","des (+s)"],["Множина","der"]],
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
  "headersEs":["Género","Genitiv"],"rowsEs":[["Masculino","des (+s)"],["Femenino","der"],["Neutro","des (+s)"],["Plural","der"]]},
  "Pronomen: Personal-, Possessiv-, Demonstrativ-": {
    headersUk: ["Тип","Приклад"],
    rowsUk: [["Особовий","er, ihn, ihm"],["Присвійний","meiner, deiner"],["Вказівний","dieser, jener"]],
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
  "headersEs":["Tipo","Ejemplo"],"rowsEs":[["Personal","um, hn, hm"],["Posesivo","meiner, deiner"],["Demostración","dierer, jener"]]},
  "Relativsätze (basic)": {
    headersUk: ["Рід","Відносний займенник"],
    rowsUk: [["Чоловічий","der"],["Жіночий","die"],["Середній","das"],["Множина","die"]],
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
  "headersEs":["Género","Pronombre relativo"],"rowsEs":[["Masculino","der"],["Femenino","morir"],["Neutro","das"],["Plural","morir"]]},
  "Plusquamperfekt": {
    headersUk: ["Допоміжне дієслово","Приклад"],
    rowsUk: [["hatte + Partizip II","ich hatte gemacht"],["war + Partizip II (рух)","ich war gegangen"]],
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
  "headersEs":["Verbo auxiliar","Ejemplo"],"rowsEs":[["Hatte + Partizip II","ich hatte gemacht"],["guerra + Partizip II (moción)","ich gegangen de guerra"]]},
  "Futur I": {
    headersUk: ["Особа","werden","+ Infinitiv"],
    rowsUk: [["ich","werde","lernen"],["du","wirst","lernen"],["er/sie/es","wird","lernen"],["wir","werden","lernen"]],
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
  "headersEs":["Persona","werden","+ Infinitiv"],"rowsEs":[["ich","werde","lernen"],["du","wirst","lernen"],["er/sie/es","wird","lernen"],["wir","werden","lernen"]]},
  "Relativsätze (detail)": {
    headersUk: ["Відмінок","Чоловічий","Жіночий","Середній","Множина"],
    rowsUk: [["Nom","der","die","das","die"],["Akk","den","die","das","die"],["Dativ","dem","der","dem","denen"],["Genitiv","dessen","deren","dessen","deren"]],
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
  "headersEs":["Caso","Masculino","Femenino","Neutro","Plural"],"rowsEs":[["Nom","der","morir","das","morir"],["Akk","den","morir","das","morir"],["Dativ","dem","der","dem","denen"],["Genitiv","dessen","deren","dessen","deren"]]},
  "Konjunktiv II": {
    headersUk: ["Форма","Значення"],
    rowsUk: [["würde + Infinitiv","для гіпотези/бажання"],["hätte","мав би"],["wäre","був би"],["könnte","міг би"]],
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
  "headersEs":["Formulario","Significado"],"rowsEs":[["würde + Infinitiv","para hipótesis/deseo"],["hätte","hubieran tenido"],["wäre","hubiera sido"],["könnte","podría/podría ser capaz de"]]},
  "Passiv (Vorgangspassiv)": {
    headersUk: ["Aktiv","Passiv"],
    rowsUk: [["Man baut das Haus.","Das Haus wird gebaut."],["Man liest das Buch.","Das Buch wird gelesen."]],
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
  "headersEs":["Aktiv","Passiv"],"rowsEs":[["Man baut das Haus.","Das Haus wird gebaut."],["El hombre miente en el Buch.","Das Buch wird gelesen."]]},
  "Infinitiv mit zu": {
    headersUk: ["Структура","Приклад"],
    rowsUk: [["Verb + zu + Infinitiv","Ich versuche zu lernen."],["Es ist + Adj + zu + Inf","Es ist wichtig zu üben."]],
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
  "headersEs":["Estructura","Ejemplo"],"rowsEs":[["Verbo + zu + Infinitiv","Ich versuche zu lernen."],["Es ist + Adj + zu + Inf","Es ist wichtig zu üben."]]},
  "um…zu / ohne…zu / statt…zu": {
    headersUk: ["Структура","Значення"],
    rowsUk: [["um … zu","щоб"],["ohne … zu","не роблячи"],["statt … zu","замість того щоб"]],
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
  "headersEs":["Estructura","Significado"],"rowsEs":[["um... zu","para"],["ohne... zu","sin hacer"],["statt... zu","en lugar de hacerlo"]]},
  "Adjektivdeklination": {
    headersUk: ["Після","Закінчення (чол. Nom.)","Приклад"],
    rowsUk: [["der / die / das","-e","der rote Apfel"],["ein / eine","-er / -e / -es","ein roter Apfel"],["Без артикля","-er / -e / -es","roter Wein"]],
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
  "headersEs":["Después","Fin (No.","Ejemplo"],"rowsEs":[["der / die / das","-e","der rote Apfel"],["ein / eine","-er / -e / -es","ein roter Apfel"],["Sin artículo","-er / -e / -es","roter Wein"]]},
  "Genitiv": {
    headersUk: ["Рід","Артикль Genitiv"],
    rowsUk: [["Чоловічий","des (+s)"],["Жіночий","der"],["Середній","des (+s)"],["Множина","der"]],
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
  "headersEs":["Género","Artículo relativo a la cuestión de la genética"],"rowsEs":[["Masculino","des (+s)"],["Femenino","der"],["Neutro","des (+s)"],["Plural","der"]]},
  "Indirekte Fragen": {
    headersUk: ["Пряме","Непряме"],
    rowsUk: [["Wo ist er?","Weißt du, wo er ist?"],["Kommt er? (так/ні)","Ich frage, ob er kommt."]],
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
  "headersEs":["Directo","Indirectas"],"rowsEs":[["¿Qué es esto?","¿Qué?"],["¿Kommt er? (sí/no)","Ich frage, ob er kommt."]]},
  "Konjunktionen: obwohl, wenn, als, während…": {
    headersUk: ["Сполучник","Значення"],
    rowsUk: [["obwohl","хоча"],["wenn","якщо / коли"],["als","коли (минуле)"],["während","поки"],["bevor","перш ніж"],["nachdem","після того як"],["seitdem","відтоді"]],
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
  "headersEs":["Conjunción","Significado"],"rowsEs":[["obwohl","aunque"],["wenn","si / cuando"],["als","cuando (pasado)"],["während","mientras"],["bevor","antes"],["nachdem","después"],["seitdem","Desde entonces"]]},
  "Präpositionen mit Genitiv": {
    headersUk: ["Прийменник","Значення"],
    rowsUk: [["wegen","через"],["trotz","попри"],["während","протягом"],["statt","замість"],["innerhalb","у межах"],["außerhalb","за межами"]],
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
  "headersEs":["Preposición","Significado"],"rowsEs":[["wegen","debido a"],["trotz","a pesar de"],["während","durante"],["statt","en lugar de"],["inrilhalb","dentro"],["außerhalb","fuera de"]]},
  "Passiv (alle Formen)": {
    headersUk: ["Час","Форма"],
    rowsUk: [["Präsens","wird gemacht"],["Präteritum","wurde gemacht"],["Perfekt","ist gemacht worden"],["Futur","wird gemacht werden"]],
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
  "headersEs":["Tenso","Formulario"],"rowsEs":[["Präsens","gema de wird"],["Präteritum","wurde gemacht"],["Perfekt","ist gemacht worden"],["Futur","wird gemacht werden"]]},
  "Zustandspassiv": {
    headersUk: ["Vorgangspassiv (дія)","Zustandspassiv (стан)"],
    rowsUk: [["wird geöffnet","ist geöffnet"],["wird geschlossen","ist geschlossen"]],
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
  "headersEs":["Vorgangspassiv (acción)","Zustandspassiv (estado)"],"rowsEs":[["wird geöffnet","ist geöffnet"],["wird geschlossen","ist geschlossen"]]},
  "Konjunktiv I (indirekte Rede)": {
    headersUk: ["Infinitiv","Konjunktiv I"],
    rowsUk: [["sein","sei"],["haben","habe"],["kommen","komme"],["werden","werde"]],
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
  "headersEs":["Infinitiv","Konjunktiv I"],"rowsEs":[["sein","sei"],["haben","hábé"],["kommen","komme"],["werden","werde"]]},
  "Konjunktiv II (fortgeschritten)": {
    headersUk: ["Час","Форма"],
    rowsUk: [["Теперішній","würde machen"],["Минулий","hätte gemacht"],["Минулий (рух)","wäre gegangen"]],
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
  "headersEs":["Tenso","Formulario"],"rowsEs":[["Presente","würde machen"],["Pasado","hätte gemacht"],["Pasado (moción)","wäre gegangen"]]},
  "Nominalisierung": {
    headersUk: ["Дієслово","Іменник"],
    rowsUk: [["lernen","das Lernen"],["lesen","das Lesen"],["essen","das Essen"],["ankommen","die Ankunft"]],
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
  "headersEs":["Verbo","Nombre"],"rowsEs":[["lernen","das Lernen"],["lesen","das Lesen"],["essen","das Essen"],["ankommen","die Ankunft"]]},
  "Partizip I": {
    headersUk: ["Infinitiv","Partizip I"],
    rowsUk: [["spielen","spielend"],["lachen","lachend"],["schlafen","schlafend"],["kommen","kommend"]],
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
  "headersEs":["Infinitiv","Partizip I"],"rowsEs":[["espielen","spielend"],["lachen","lachend"],["schlafen","schlafend"],["kommen","kommend"]]},
  "Partizip II als Adjektiv": {
    headersUk: ["Дієслово","Partizip II"],
    rowsUk: [["öffnen","geöffnet"],["kochen","gekocht"],["schreiben","geschrieben"],["reparieren","repariert"]],
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
  "headersEs":["Verbo","Partizip II"],"rowsEs":[["öffnen","geöffnet"],["kochen","gekocht"],["schreiben","geschrieben"],["reparieren","repariert"]]},
  "Futur II": {
    headersUk: ["Структура","Приклад"],
    rowsUk: [["werden + P II + haben","Ich werde es gemacht haben."],["werden + P II + sein (рух)","Er wird gegangen sein."]],
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
  "headersEs":["Estructura","Ejemplo"],"rowsEs":[["werden + P II + haben","Ich werde es gemacht haben."],["werden + P II + sein (moción)","Er wird gegangen sein."]]},
  "Kausale, konsekutive, konzessive Sätze": {
    headersUk: ["Тип","Сполучник"],
    rowsUk: [["Причиновий","weil, da"],["Наслідковий","sodass, so … dass"],["Допустовий","obwohl, obgleich"]],
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
  "headersEs":["Tipo","Conjunción"],"rowsEs":[["Causal","weil, da"],["Consecutivo","sodas, así que... dass"],["Concesivo","obwohl, obgleich"]]},
  "Wortbildung: Präfixe & Suffixe": {
    headersUk: ["Тип","Приклад"],
    rowsUk: [["Префікс un-","möglich → unmöglich"],["Суфікс -ung","die Zeitung"],["Суфікс -heit","die Freiheit"],["Суфікс -keit","die Möglichkeit"],["Суфікс -er","der Leser"]],
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
  "headersEs":["Tipo","Ejemplo"],"rowsEs":[["Prefijo un-","möglich → unmöglich"],["Sufijo -ung","die Zeitung"],["Sufijo - heit","die Freiheit"],["Sufijo - Keit","die Möglichkeit"],["Sufijo -er","der Leser"]]},
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

/* __GTABLES_FA_MERGE__ */
const __GTABLES_FA = {"Artikel: der, die, das":{"headersFa":["جنسیت","حرف تعریف","مثال"],"rowsFa":[["مذکر","der","der Mann"],["مؤنث","die","die Frau"],["خنثی","das","das Kind"]]},"Bestimmte / unbestimmte Artikel":{"headersFa":["جنسیت","معرفه","نکره"],"rowsFa":[["مذکر","der","ein"],["مؤنث","die","eine"],["خنثی","das","ein"]]},"Plural":{"headersFa":["پایانه","مثال"],"rowsFa":[["-e","der Tisch → die Tische"],["-er","das Kind → die Kinder"],["-(e)n","die Frau → die Frauen"],["-s","das Auto → die Autos"]]},"Personalpronomen":{"headersFa":["آلمانی","فارسی"],"rowsFa":[["ich","من"],["du","تو"],["er / sie / es","او (مذکر/مؤنث/خنثی)"],["wir","ما"],["ihr","شما (جمع)"],["sie / Sie","آن‌ها / شما (رسمی)"]]},"Präsens — regelmäßige Verben":{"headersFa":["شخص","lernen"],"rowsFa":[["ich","lerne"],["du","lernst"],["er/sie/es","lernt"],["wir","lernen"],["ihr","lernt"],["sie/Sie","lernen"]]},"Unregelmäßige Verben":{"headersFa":["شخص","fahren","essen"],"rowsFa":[["ich","fahre","esse"],["du","fährst","isst"],["er/sie/es","fährt","isst"],["wir","fahren","essen"]]},"sein und haben":{"headersFa":["شخص","sein","haben"],"rowsFa":[["ich","bin","habe"],["du","bist","hast"],["er/sie/es","ist","hat"],["wir","sind","haben"],["ihr","seid","habt"],["sie/Sie","sind","haben"]]},"Modalverben":{"headersFa":["فعل مُدال","معنی"],"rowsFa":[["können","توانستن"],["müssen","مجبور بودن"],["wollen","خواستن"],["dürfen","اجازه داشتن"],["sollen","قرار بودن (بایستن)"],["möchten","میل داشتن"]]},"W-Fragen":{"headersFa":["کلمهٔ پرسشی","معنی"],"rowsFa":[["wer","چه کسی"],["was","چه"],["wo","کجا"],["wann","کِی"],["wie","چگونه"],["warum","چرا"]]},"Ja/Nein-Fragen":{"headersFa":["۱ (فعل)","۲ (فاعل)","..."],"rowsFa":[["Kommst","du","mit?"],["Hast","du","Zeit?"],["Ist","das","richtig?"]]},"Satzstellung":{"headersFa":["جایگاه ۱","جایگاه ۲ (فعل)","بقیهٔ جمله"],"rowsFa":[["Ich","lerne","heute Deutsch"],["Heute","lerne","ich Deutsch"],["Morgen","gehe","ich nach Hause"]]},"Akkusativ":{"headersFa":["جنسیت","Nominativ","Akkusativ"],"rowsFa":[["مذکر","der / ein","den / einen"],["مؤنث","die / eine","die / eine"],["خنثی","das / ein","das / ein"],["جمع","die","die"]]},"Possessivartikel":{"headersFa":["شخص","ملکی"],"rowsFa":[["ich","mein"],["du","dein"],["er","sein"],["sie","ihr"],["wir","unser"],["ihr","euer"]]},"Trennbare Verben":{"headersFa":["فعل","پیشوند","در جمله"],"rowsFa":[["aufstehen","auf","ich stehe auf"],["einkaufen","ein","ich kaufe ein"],["ankommen","an","ich komme an"]]},"Negation: nicht / kein":{"headersFa":["کاربرد","مثال"],"rowsFa":[["nicht (فعل/صفت)","Ich verstehe nicht."],["kein (اسم نکره)","Ich habe kein Geld."],["keine (مؤنث/جمع)","Ich habe keine Zeit."]]},"Imperativ":{"headersFa":["شخص","شکل"],"rowsFa":[["du","Komm!"],["ihr","Kommt!"],["Sie","Kommen Sie!"]]},"Präpositionen: Ort & Zeit":{"headersFa":["حرف اضافه","معنی"],"rowsFa":[["in","داخلِ"],["an","کنار / روی"],["auf","روی"],["um","ساعت (زمان)"],["am","روز (زمان)"],["im","ماه / فصل (زمان)"]]},"Dativ":{"headersFa":["جنسیت","Nominativ","Dativ"],"rowsFa":[["مذکر","der","dem"],["مؤنث","die","der"],["خنثی","das","dem"],["جمع","die","den (+n)"]]},"Wechselpräpositionen":{"headersFa":["پرسش","حالت","مثال"],"rowsFa":[["wohin? (حرکت)","Akkusativ","in die Schule"],["wo? (مکان)","Dativ","in der Schule"]]},"Perfekt":{"headersFa":["فعل کمکی","مثال"],"rowsFa":[["haben","ich habe gemacht"],["sein (حرکت)","ich bin gegangen"]]},"Präteritum (sein, haben, Modalverben)":{"headersFa":["فعل","Präteritum"],"rowsFa":[["sein","war"],["haben","hatte"],["können","konnte"],["müssen","musste"],["wollen","wollte"]]},"Reflexive Verben":{"headersFa":["شخص","ضمیر انعکاسی"],"rowsFa":[["ich","mich"],["du","dich"],["er/sie/es","sich"],["wir","uns"],["ihr","euch"],["sie/Sie","sich"]]},"Konjunktionen: und, oder, aber, denn, sondern":{"headersFa":["حرف ربط","معنی"],"rowsFa":[["und","و"],["oder","یا"],["aber","اما"],["denn","زیرا / چون"],["sondern","بلکه"]]},"Nebensatz: weil, dass":{"headersFa":["حرف ربط","معنی","فعل"],"rowsFa":[["weil","چون","پایان جمله"],["dass","که","پایان جمله"]]},"Komparativ":{"headersFa":["Positiv","Komparativ"],"rowsFa":[["groß","größer"],["alt","älter"],["gut","besser"],["viel","mehr"]]},"Superlativ":{"headersFa":["Positiv","Komparativ","Superlativ"],"rowsFa":[["groß","größer","am größten"],["gut","besser","am besten"],["viel","mehr","am meisten"]]},"Genitiv (Einführung)":{"headersFa":["جنسیت","Genitiv"],"rowsFa":[["مذکر","des (+s)"],["مؤنث","der"],["خنثی","des (+s)"],["جمع","der"]]},"Pronomen: Personal-, Possessiv-, Demonstrativ-":{"headersFa":["نوع","مثال"],"rowsFa":[["شخصی","er, ihn, ihm"],["ملکی","meiner, deiner"],["اشاره‌ای","dieser, jener"]]},"Relativsätze (basic)":{"headersFa":["جنسیت","ضمیر موصولی"],"rowsFa":[["مذکر","der"],["مؤنث","die"],["خنثی","das"],["جمع","die"]]},"Plusquamperfekt":{"headersFa":["فعل کمکی","مثال"],"rowsFa":[["hatte + Partizip II","ich hatte gemacht"],["war + Partizip II (حرکت)","ich war gegangen"]]},"Futur I":{"headersFa":["شخص","werden","+ Infinitiv"],"rowsFa":[["ich","werde","lernen"],["du","wirst","lernen"],["er/sie/es","wird","lernen"],["wir","werden","lernen"]]},"Relativsätze (detail)":{"headersFa":["حالت","مذکر","مؤنث","خنثی","جمع"],"rowsFa":[["Nom","der","die","das","die"],["Akk","den","die","das","die"],["Dativ","dem","der","dem","denen"],["Genitiv","dessen","deren","dessen","deren"]]},"Konjunktiv II":{"headersFa":["شکل","معنی"],"rowsFa":[["würde + Infinitiv","برای فرض / آرزو"],["hätte","می‌داشت (فرضیِ گذشته)"],["wäre","می‌بود (فرضیِ گذشته)"],["könnte","می‌توانست"]]},"Passiv (Vorgangspassiv)":{"headersFa":["Aktiv","Passiv"],"rowsFa":[["Man baut das Haus.","Das Haus wird gebaut."],["Man liest das Buch.","Das Buch wird gelesen."]]},"Infinitiv mit zu":{"headersFa":["ساختار","مثال"],"rowsFa":[["Verb + zu + Infinitiv","Ich versuche zu lernen."],["Es ist + Adj + zu + Inf","Es ist wichtig zu üben."]]},"um…zu / ohne…zu / statt…zu":{"headersFa":["ساختار","معنی"],"rowsFa":[["um … zu","برای اینکه"],["ohne … zu","بدون انجام دادن"],["statt … zu","به‌جای انجام دادن"]]},"Adjektivdeklination":{"headersFa":["بعد از","پایانه (مذکر، Nom.)","مثال"],"rowsFa":[["der / die / das","-e","der rote Apfel"],["ein / eine","-er / -e / -es","ein roter Apfel"],["بدون حرف تعریف","-er / -e / -es","roter Wein"]]},"Genitiv":{"headersFa":["جنسیت","حرف تعریفِ Genitiv"],"rowsFa":[["مذکر","des (+s)"],["مؤنث","der"],["خنثی","des (+s)"],["جمع","der"]]},"Indirekte Fragen":{"headersFa":["مستقیم","غیرمستقیم"],"rowsFa":[["Wo ist er?","Weißt du, wo er ist?"],["Kommt er? (بله/خیر)","Ich frage, ob er kommt."]]},"Konjunktionen: obwohl, wenn, als, während…":{"headersFa":["حرف ربط","معنی"],"rowsFa":[["obwohl","اگرچه"],["wenn","اگر / وقتی"],["als","وقتی (گذشته)"],["während","در حالی که"],["bevor","پیش از"],["nachdem","پس از"],["seitdem","از آن زمان"]]},"Präpositionen mit Genitiv":{"headersFa":["حرف اضافه","معنی"],"rowsFa":[["wegen","به‌خاطرِ"],["trotz","با وجودِ"],["während","در طولِ"],["statt","به‌جایِ"],["innerhalb","درونِ / در ظرفِ"],["außerhalb","بیرونِ"]]},"Passiv (alle Formen)":{"headersFa":["زمان","شکل"],"rowsFa":[["Präsens","wird gemacht"],["Präteritum","wurde gemacht"],["Perfekt","ist gemacht worden"],["Futur","wird gemacht werden"]]},"Zustandspassiv":{"headersFa":["Vorgangspassiv (کنش)","Zustandspassiv (حالت)"],"rowsFa":[["wird geöffnet","ist geöffnet"],["wird geschlossen","ist geschlossen"]]},"Konjunktiv I (indirekte Rede)":{"headersFa":["Infinitiv","Konjunktiv I"],"rowsFa":[["sein","sei"],["haben","habe"],["kommen","komme"],["werden","werde"]]},"Konjunktiv II (fortgeschritten)":{"headersFa":["زمان","شکل"],"rowsFa":[["حال","würde machen"],["گذشته","hätte gemacht"],["گذشته (حرکت)","wäre gegangen"]]},"Nominalisierung":{"headersFa":["فعل","اسم"],"rowsFa":[["lernen","das Lernen"],["lesen","das Lesen"],["essen","das Essen"],["ankommen","die Ankunft"]]},"Partizip I":{"headersFa":["Infinitiv","Partizip I"],"rowsFa":[["spielen","spielend"],["lachen","lachend"],["schlafen","schlafend"],["kommen","kommend"]]},"Partizip II als Adjektiv":{"headersFa":["فعل","Partizip II"],"rowsFa":[["öffnen","geöffnet"],["kochen","gekocht"],["schreiben","geschrieben"],["reparieren","repariert"]]},"Futur II":{"headersFa":["ساختار","مثال"],"rowsFa":[["werden + P II + haben","Ich werde es gemacht haben."],["werden + P II + sein (حرکت)","Er wird gegangen sein."]]},"Kausale, konsekutive, konzessive Sätze":{"headersFa":["نوع","حرف ربط"],"rowsFa":[["علّی","weil, da"],["نتیجه‌ای","sodass, so … dass"],["امتیازی (واگذارانه)","obwohl, obgleich"]]},"Wortbildung: Präfixe & Suffixe":{"headersFa":["نوع","مثال"],"rowsFa":[["پیشوندِ -un","möglich → unmöglich"],["پسوندِ ung-","die Zeitung"],["پسوندِ heit-","die Freiheit"],["پسوندِ keit-","die Möglichkeit"],["پسوندِ er-","der Leser"]]}};
for (const __k in __GTABLES_FA) { if (GTABLES[__k]) Object.assign(GTABLES[__k], __GTABLES_FA[__k]); }

/* __EXPFA_MERGE__ */
const __EXPFA = {"Passiv (alle Formen)":"مجهول در همهٔ زمان‌ها: حال (wird gemacht)، گذشته (wurde gemacht)، ماضی نقلی (ist gemacht worden). «worden» نشانهٔ مجهولِ گذشته است.","Zustandspassiv":"نتیجهٔ یک عمل را نشان می‌دهد، نه خودِ عمل را. sein + Partizip II. مثال: «Die Tür ist geschlossen» (در بسته است — حالت).","Passiv mit Modalverben":"فعل مُدال + Partizip II + werden. مثال: «Das muss gemacht werden» (این باید انجام شود).","Konjunktiv II (fortgeschritten)":"برای فرض‌های غیرواقعیِ گذشته و افسوس. hätte/wäre + Partizip II. مثال: «Ich hätte das gemacht» (این کار را می‌کردم).","Konjunktiv I (indirekte Rede)":"برای نقلِ گفتهٔ دیگران (به‌ویژه در روزنامه‌نگاری). مثال: er sei، er habe، er komme.","Erweiterte Relativsätze":"جمله‌های موصولی همراه با حرف اضافه: «in dem»، «mit der»، «über den». همچنین was/wo برای اشارهٔ کلی.","Kausale, konsekutive, konzessive Sätze":"علّی (da، weil)، نتیجه‌ای (sodass، so…dass)، امتیازی/واگذارانه (obwohl، obgleich). برای پیوندِ منطقی میان جمله‌ها.","Futur II":"برای عملی که در آینده کامل خواهد شد. werden + Partizip II + haben/sein. مثال: «Ich werde es gemacht haben».","Partizip I":"مصدر + d. در نقشِ صفت، عملی در حالِ جریان/همزمان را نشان می‌دهد. مثال: spielend (در حالِ بازی).","Partizip II als Adjektiv":"Partizip II می‌تواند در نقشِ صفت برای نشان‌دادنِ نتیجه به کار رود. مثال: «das gekochte Essen» (غذای پخته).","Nominalisierung":"تبدیلِ فعل/جمله به اسم — ویژگیِ خاصِ آلمانیِ رسمی و دانشگاهی. مثال: «beim Lernen» = «هنگامِ یادگیری».","Funktionsverbgefüge":"ترکیب‌های اسم+فعل که به‌عنوانِ یک واحدِ معناییِ واحد عمل می‌کنند و در آلمانیِ رسمی رایج‌اند. مثال: «eine Entscheidung treffen» (تصمیم گرفتن).","Verben/Adjektive/Nomen mit Präpositionen":"بسیاری از فعل‌ها، صفت‌ها و اسم‌ها حرفِ اضافهٔ ثابتی دارند که باید حفظ شود. مثال: warten auf (منتظرِ چیزی بودن)، stolz auf (مفتخر به).","Wortbildung: Präfixe & Suffixe":"واژه‌های نو با پیشوندها (un-، ver-، be-) و پسوندها (-ung، -heit، -keit، -lich) ساخته می‌شوند. این کار دایرهٔ واژگانِ شما را بسیار گسترش می‌دهد.","Konjunktiv I (komplex)":"Konjunktiv I بیشتر در روزنامه‌نگاری برای نقلِ گفتهٔ دیگران به کار می‌رود. هرگاه شکلِ Konjunktiv I با Indikativ یکسان باشد، Konjunktiv II جای آن را می‌گیرد. این ویژگیِ دستوری در رسانه‌های آلمانی بسیار رایج است.","Kausale & konzessive Konnektoren (C1)":"در سطحِ C1 حروفِ ربطِ واگذارانهٔ بیشتری هست: wenngleich (اگرچه)، insofern (تا آنجا که)، sofern (به شرطی که)، zumal (به‌ویژه چون)، geschweige denn (چه رسد به).","Partizipialkonstruktionen":"در آلمانی می‌توان جمله‌های پیرو را حذف کرد و با ساخت‌های Partizip I یا II جایگزین کرد. این در نوشتارِ رسمی و دانشگاهی بسیار دیده می‌شود. Partizip I (ریشهٔ فعل + d-) برای اعمالِ همزمان و Partizip II برای اعمالِ کامل‌شده به کار می‌رود.","Erweiterte Infinitivkonstruktionen":"با um…zu (برای اینکه)، ohne…zu (بدونِ آنکه)، statt/anstatt…zu (به‌جای آنکه)، brauchen…zu (نیازی نیست). این‌ها جمله‌های پیرو را با ساخت‌های ساده‌تر جایگزین می‌کنند.","Doppelter Infinitiv":"وقتی فعلِ مُدال با Perfekt یا Futur II به کار رود، دو مصدر در پایانِ جمله قرار می‌گیرند. مثال: Er hat kommen müssen (او مجبور بود بیاید). این دستورِ پیشرفته و رسمیِ آلمانی است.","Nominalisierungsstil":"در فضای دانشگاهی و تجاری، فعل‌ها به اسم تبدیل می‌شوند تا جمله رسمی‌تر و پیچیده‌تر به‌نظر برسد. مثال: 'analysieren' می‌شود 'die Analyse durchführen' (تحلیلی را انجام دادن). به این کار Nominalisierungsstil (سبکِ اسم‌سازی) می‌گویند.","Gehobene Schriftsprache":"در نوشتارِ رسمی، آلمانی‌ها از عبارت‌های ثابتِ ویژه استفاده می‌کنند: 'Es wurde festgestellt, dass…' (مشخص شد که…)، 'Angesichts der Tatsache, dass…' (با توجه به این واقعیت که…)، 'Im Hinblick auf…' (با نظر به…). این‌ها در دانشگاه و تجارت مهم‌اند.","Modalpartikeln":"ذراتِ وجهی واژه‌های کوچکی‌اند که مقصود یا نگرشِ گوینده را می‌رسانند. آن‌ها معنای جمله را بدونِ آنکه مستقیماً قابلِ ترجمه باشند تغییر می‌دهند. از جمله: doch (بالاخره/اما)، mal (فقط/یک‌بار)، eigentlich (در واقع)، halt (همین‌طوری/فقط)، wohl (احتمالاً)، eben (دقیقاً/فقط)، ja (می‌دانی که)، denn (پس/آخر، در پرسش‌ها).","Komplexe Satzgefüge":"در سطحِ C2 از ساختارهای جملهٔ پیچیده با چند لایهٔ درهم‌تنیدهٔ وابستگی استفاده می‌شود. Je mehr…desto mehr (هرچه بیشتر…همان‌قدر بیشتر)، Kaum…als (به‌محضِ اینکه)، و Nicht nur…sondern auch (نه‌تنها…بلکه) از مهم‌ترین ساخت‌ها هستند.","Negationsstrukturen (C2)":"در سطحِ C2 نفی به شیوه‌های تخصصی‌تری بیان می‌شود: nicht nur…sondern auch (نه‌تنها…بلکه)، weder…noch (نه…نه)، keineswegs (به‌هیچ‌وجه)، mitnichten (اصلاً)، bei weitem nicht (به‌مراتب کمتر/ابداً).","Register & Stilebenen":"آلمانی چند لایهٔ زبانیِ متمایز دارد: Umgangssprache (زبانِ محاورهٔ روزمره)، Standard (زبانِ معیار)، gehobene Sprache (زبانِ رسمی و فاخر)، و Amtssprache (زبانِ اداری/دیوانی). هر موقعیت سطحی متفاوت می‌طلبد.","Stilmittel":"آرایه‌های ادبی و بلاغی: Metapher (استعاره)، Ironie (طعنه/آیرونی)، Antithese (تضاد)، Anapher (تکرارِ آغازین)، Hyperbel (اغراق)، Litotes (کم‌گویی از راهِ نفی)، Personifikation (تشخیص/جان‌بخشی).","Kollokationen":"همایند (کالوکیشن) به واژه‌هایی گفته می‌شود که به‌طورِ طبیعی با هم می‌آیند. مثال: 'eine Entscheidung treffen' (تصمیم گرفتن)، نه 'eine Entscheidung machen'.","Redewendungen & Sprichwörter":"آلمانی‌زبان‌های مسلط از Redewendungen (اصطلاحات) و Sprichwörter (ضرب‌المثل‌ها) بسیار استفاده می‌کنند. یادگیریِ آن‌ها درکِ عمیق‌تری از بافتِ فرهنگی می‌رساند.","Dialekte & Varietäten":"آلمانی در آلمان، اتریش و سوئیس متفاوت است. Bayerisch (باواریایی)، Berlinerisch (لهجهٔ برلین)، Wienerisch (وینی)، Schweizerdeutsch (آلمانیِ سوئیسی). برای C2 خوب است که از این‌ها آگاهی داشته باشید.","Historisches Deutsch":"آلمانی در طولِ تاریخ تغییر کرده است. آلمانیِ کلاسیک (Goethe، Schiller) چند تفاوتِ بنیادین دارد: Ihr به‌جای Sie، کاربردِ پرتکرارترِ Präteritum، و شکل‌های کتاب‌مقدسی."};
for (const __lv in GRAMMAR) { for (const __t of GRAMMAR[__lv]) { if (__EXPFA[__t.de] && !__t.expFa) __t.expFa = __EXPFA[__t.de]; } }

/* __TITLEFA_MERGE__ */
const __TITLEFA = {"Passiv (alle Formen)":"مجهول (همهٔ شکل‌ها)","Zustandspassiv":"مجهولِ حالت (Zustandspassiv)","Passiv mit Modalverben":"مجهول با افعالِ مُدال","Konjunktiv II (fortgeschritten)":"Konjunktiv II (پیشرفته)","Konjunktiv I (indirekte Rede)":"Konjunktiv I (نقلِ قولِ غیرمستقیم)","Erweiterte Relativsätze":"جمله‌های موصولیِ گسترده","Kausale, konsekutive, konzessive Sätze":"جمله‌های علّی، نتیجه‌ای و امتیازی","Futur II":"Futur II (آیندهٔ کامل)","Partizip I":"Partizip I (اسمِ فاعل)","Partizip II als Adjektiv":"Partizip II در نقشِ صفت","Nominalisierung":"اسم‌سازی (Nominalisierung)","Funktionsverbgefüge":"ترکیب‌های فعلِ کارکردی (Funktionsverbgefüge)","Verben/Adjektive/Nomen mit Präpositionen":"فعل‌ها/صفت‌ها/اسم‌ها با حرفِ اضافه","Wortbildung: Präfixe & Suffixe":"واژه‌سازی: پیشوندها و پسوندها","Konjunktiv I (komplex)":"Konjunktiv I (پیچیده)","Kausale & konzessive Konnektoren (C1)":"حروفِ ربطِ علّی و امتیازی (C1)","Partizipialkonstruktionen":"ساخت‌های وجهِ وصفی (Partizipialkonstruktionen)","Erweiterte Infinitivkonstruktionen":"ساخت‌های مصدریِ گسترده","Doppelter Infinitiv":"مصدرِ دوگانه (Doppelter Infinitiv)","Nominalisierungsstil":"سبکِ اسم‌سازی (Nominalisierungsstil)","Gehobene Schriftsprache":"زبانِ نوشتاریِ فاخر","Modalpartikeln":"ذراتِ وجهی (Modalpartikeln)","Komplexe Satzgefüge":"ساختارهای جملهٔ پیچیده","Negationsstrukturen (C2)":"ساختارهای نفی (C2)","Register & Stilebenen":"لایه‌های زبانی و سطوحِ سبک","Stilmittel":"آرایه‌های ادبی (Stilmittel)","Kollokationen":"همایندها (Kollokationen)","Redewendungen & Sprichwörter":"اصطلاحات و ضرب‌المثل‌ها","Dialekte & Varietäten":"گویش‌ها و گونه‌های زبانی","Historisches Deutsch":"آلمانیِ تاریخی"};
for (const __lv in GRAMMAR) { for (const __t of GRAMMAR[__lv]) { if (__TITLEFA[__t.de] && !__t.fa) __t.fa = __TITLEFA[__t.de]; } }

/* __GRAMEX_MERGE__ */
const __GRAMEX = {"Das Haus wurde gebaut.":"خانه ساخته شد.","Es ist verkauft worden.":"فروخته شده است.","Das wird gemacht werden.":"این انجام خواهد شد.","Der Brief wurde geschrieben.":"نامه نوشته شد.","Die Stadt ist zerstört worden.":"شهر ویران شده است.","Die Regeln werden erklärt.":"قواعد توضیح داده می‌شوند.","Das Geschäft ist geschlossen.":"مغازه بسته است.","Der Brief ist geschrieben.":"نامه نوشته شده است.","Alles ist vorbereitet.":"همه‌چیز آماده است.","Das Fenster ist geöffnet.":"پنجره باز است.","Die Arbeit ist erledigt.":"کار انجام شده است.","Das Problem ist gelöst.":"مشکل حل شده است.","Das muss repariert werden.":"این باید تعمیر شود.","Es kann gemacht werden.":"می‌توان آن را انجام داد.","Es sollte vermieden werden.":"باید از آن پرهیز شود.","Das darf nicht gesagt werden.":"این را نباید گفت.","Die Regeln müssen befolgt werden.":"قواعد باید رعایت شوند.","Es kann nicht geändert werden.":"نمی‌توان آن را تغییر داد.","Ich hätte dir geholfen.":"به تو کمک می‌کردم.","Wenn ich Zeit gehabt hätte, ...":"اگر وقت داشتم، …","Das wäre besser gewesen.":"این بهتر می‌بود.","Ich hätte das nicht gesagt.":"من این را نمی‌گفتم.","Wärst du gekommen, ...":"اگر آمده بودی، …","Sie hätte gewinnen können.":"او می‌توانست ببرد.","Er sagt, er sei krank.":"او می‌گوید که بیمار است.","Sie meint, sie habe Zeit.":"او فکر می‌کند که وقت دارد.","Man sagt, es komme bald.":"می‌گویند که به‌زودی می‌آید.","Er behauptet, er wisse nichts.":"او ادعا می‌کند که چیزی نمی‌داند.","Sie sagte, sie werde kommen.":"او گفت که خواهد آمد.","Der Minister sagt, er habe recht.":"وزیر می‌گوید که حق با اوست.","der Tag, an dem wir ...":"روزی که ما …","das Thema, über das ...":"موضوعی که دربارهٔ آن …","alles, was du brauchst":"هر آنچه نیاز داری","die Firma, bei der ich arbeite, ...":"شرکتی که در آن کار می‌کنم، …","der Grund, aus dem ...":"دلیلی که به‌خاطرِ آن …","das, was wichtig ist, ...":"آنچه مهم است، …","Da es regnet, bleiben wir.":"چون باران می‌بارد، می‌مانیم.","Es war so kalt, dass ...":"آن‌قدر سرد بود که …","Obwohl er müde ist, arbeitet er.":"با اینکه خسته است، کار می‌کند.","Er lernte viel, sodass er bestand.":"او زیاد درس خواند، چنان‌که قبول شد.","Weil sie krank war, blieb sie.":"چون بیمار بود، ماند.","Trotzdem gab er nicht auf.":"با این حال، تسلیم نشد.","Bis morgen werde ich es beendet haben.":"تا فردا آن را تمام کرده خواهم بود.","Er wird angekommen sein.":"او رسیده خواهد بود.","Sie wird es vergessen haben.":"او آن را فراموش کرده خواهد بود.","Bis dahin werden wir fertig sein.":"تا آن موقع کارمان تمام خواهد شد.","Er wird das gelesen haben.":"احتمالاً آن را خوانده است.","Sie werden gegangen sein.":"احتمالاً رفته‌اند.","das spielende Kind":"کودکِ در حالِ بازی","die schlafende Katze":"گربهٔ در حالِ خواب","lachend":"خندان","die singende Frau":"زنِ در حالِ آواز","ein weinendes Baby":"نوزادی گریان","die kommende Woche":"هفتهٔ آینده","die geöffnete Tür":"درِ باز","ein gebrauchtes Auto":"خودرویی دستِ‌دوم","das geschriebene Wort":"کلمهٔ نوشته‌شده","die gekochte Suppe":"سوپِ پخته","ein verlorenes Spiel":"بازیِ باخته","die reparierte Uhr":"ساعتِ تعمیرشده","das Lernen":"یادگیری (به‌عنوان اسم)","beim Lesen":"هنگام خواندن","nach der Ankunft":"پس از رسیدن","vor dem Schlafen":"پیش از خوابیدن","das Rauchen ist verboten":"سیگار کشیدن ممنوع است","durch das Üben":"از راهِ تمرین کردن","eine Entscheidung treffen":"تصمیم گرفتن","in Frage stellen":"زیرِ سؤال بردن","zur Verfügung stehen":"در دسترس بودن","eine Rolle spielen":"نقش داشتن","Rücksicht nehmen":"ملاحظه کردن","in Anspruch nehmen":"استفاده کردن (از چیزی)","Ich warte auf den Bus.":"منتظرِ اتوبوس هستم.","Ich denke an dich.":"به تو فکر می‌کنم.","stolz auf etwas sein":"به چیزی افتخار کردن","Ich freue mich auf das Wochenende.":"مشتاقانه منتظرِ آخرِ هفته‌ام.","Er interessiert sich für Politik.":"او به سیاست علاقه دارد.","die Angst vor dem Versagen":"ترس از شکست","glücklich → das Glück":"خوشحال ← خوشبختی","frei → die Freiheit":"آزاد ← آزادی","möglich → unmöglich":"ممکن ← ناممکن","arbeiten → die Arbeit":"کار کردن ← کار","krank → die Krankheit":"بیمار ← بیماری","lesen → der Leser":"خواندن ← خواننده","Der Minister erklärte, er habe alles getan.":"وزیر توضیح داد که همه‌کار را انجام داده است.","Die Studie besagt, die Lage sei kritisch.":"پژوهش می‌گوید که وضعیت بحرانی است.","Laut Bericht sei die Entscheidung falsch gewesen.":"بنا بر گزارش، آن تصمیم اشتباه بوده است.","Er behauptete, er wisse nichts davon.":"او ادعا کرد که چیزی از آن نمی‌داند.","Die Firma teilte mit, sie werde expandieren.":"شرکت اعلام کرد که گسترش خواهد یافت.","Berichten zufolge seien mehrere Personen verletzt.":"بنا بر گزارش‌ها، چند نفر زخمی شده‌اند.","Wenngleich es schwierig ist, werden wir weitermachen.":"اگرچه دشوار است، ادامه خواهیم داد.","Insofern das stimmt, müssen wir handeln.":"تا آنجا که این درست است، باید اقدام کنیم.","Zumal er krank ist, sollte er sich schonen.":"به‌ویژه چون بیمار است، باید مراقبِ خود باشد.","Er kann nicht fahren, geschweige denn fliegen.":"او نمی‌تواند رانندگی کند، چه رسد به خلبانی.","Sofern keine Einwände bestehen, beginnen wir.":"به شرطی که مخالفتی نباشد، شروع می‌کنیم.","Ungeachtet der Kritik hielt er an seiner Meinung fest.":"بی‌اعتنا به انتقادها، بر نظرِ خود پافشاری کرد.","Der auf dem Sofa schlafende Mann schnarcht.":"مردی که روی مبل خوابیده، خُرخُر می‌کند.","Das von ihr geschriebene Buch wurde ein Bestseller.":"کتابی که او نوشت، پرفروش شد.","Die in der Zeitung erschienene Meldung war falsch.":"خبری که در روزنامه منتشر شد، نادرست بود.","Die zubereiteten Speisen rochen gut.":"غذاهای آماده‌شده بوی خوبی می‌دادند.","Ein lächelndes Kind kam auf mich zu.":"کودکی خندان به‌سویِ من آمد.","Der verlorene Schlüssel war unter dem Tisch.":"کلیدِ گم‌شده زیرِ میز بود.","Ich arbeite hart, um Erfolg zu haben.":"سخت کار می‌کنم تا موفق شوم.","Er ging, ohne sich zu verabschieden.":"او رفت، بدون آنکه خداحافظی کند.","Statt zu lernen, spielte er.":"به‌جای درس خواندن، بازی کرد.","Du brauchst nicht zu warten.":"لازم نیست منتظر بمانی.","Sie lernte Deutsch, um in Deutschland zu studieren.":"او آلمانی یاد گرفت تا در آلمان تحصیل کند.","Er hörte auf zu rauchen, ohne zu kämpfen.":"او سیگار را ترک کرد، بدونِ هیچ کشمکشی.","Er hat kommen müssen.":"او مجبور بود بیاید.","Sie hat es nicht sagen dürfen.":"او اجازه نداشت آن را بگوید.","Wir haben lange warten müssen.":"ما مجبور بودیم مدتِ زیادی صبر کنیم.","Das hätte nicht passieren dürfen.":"این نباید اتفاق می‌افتاد.","Sie haben das Haus verlassen müssen.":"آن‌ها مجبور بودند خانه را ترک کنند.","Ich werde es gemacht haben müssen.":"باید تا آن موقع آن را انجام داده باشم.","die Durchführung einer Analyse":"انجامِ یک تحلیل","die Verbesserung der Situation":"بهبودِ وضعیت","unter Berücksichtigung der Kosten":"با در نظر گرفتنِ هزینه‌ها","die Erreichung der Ziele":"دستیابی به اهداف","zur Lösung des Problems beitragen":"به حلِ مشکل کمک کردن","die Bearbeitung des Antrags":"رسیدگی به درخواست","Angesichts der aktuellen Lage ist Vorsicht geboten.":"با توجه به وضعیتِ کنونی، احتیاط لازم است.","Im Hinblick auf die Ergebnisse lässt sich sagen…":"با نظر به نتایج می‌توان گفت…","Es ist darauf hinzuweisen, dass…":"باید به این نکته اشاره کرد که…","Gemäß den Vorschriften ist zu beachten…":"طبقِ مقررات باید توجه شود…","Infolgedessen wurde die Maßnahme ergriffen.":"در نتیجه، آن اقدام انجام شد.","Unter Berücksichtigung aller Faktoren…":"با در نظر گرفتنِ همهٔ عوامل…","Komm doch mal vorbei!":"یک‌سری بزن دیگر!","Das ist eigentlich ganz einfach.":"این در واقع خیلی ساده است.","Er ist wohl krank.":"او احتمالاً بیمار است.","Das ist eben so.":"خب همین‌طوری است دیگر.","Das weißt du ja.":"خودت که می‌دانی.","Was machst du denn hier?":"پس اینجا چه‌کار می‌کنی؟","Da er sich vorbereitet hatte, gelang es, obwohl es schwierig war.":"چون آماده شده بود، با اینکه دشوار بود، موفق شد.","Nicht nur dass er zu spät kam, er hatte auch nichts mitgebracht.":"نه‌تنها دیر آمد، بلکه چیزی هم نیاورده بود.","Je mehr man lernt, desto mehr erkennt man, wie viel man nicht weiß.":"هرچه بیشتر یاد بگیری، بیشتر می‌فهمی که چقدر نمی‌دانی.","Wäre er pünktlich gewesen, hätte er den Zug nicht verpasst.":"اگر به‌موقع می‌رسید، قطار را از دست نمی‌داد.","Kaum hatte er das Haus verlassen, fing es an zu regnen.":"به‌محضِ اینکه از خانه بیرون رفت، باران گرفت.","So wichtig das auch sein mag, es darf nicht alles bestimmen.":"هرقدر هم مهم باشد، نباید همه‌چیز را تعیین کند.","Weder er noch sie hat Recht.":"نه او و نه وی، هیچ‌کدام حق ندارند.","Das ist keineswegs akzeptabel.":"این به‌هیچ‌وجه قابلِ قبول نیست.","Nicht nur er, sondern auch sie war dabei.":"نه‌تنها او، بلکه وی هم حاضر بود.","Das stimmt mitnichten.":"این اصلاً درست نیست.","Bei weitem nicht genug.":"به‌مراتب کمتر از حدِ کافی.","Keiner der Anwesenden sprach dagegen.":"هیچ‌یک از حاضران مخالفتی نکرد.","Ich kriege keinen Hunger. (umgangssprachlich)":"گرسنه‌ام نمی‌شود. (محاوره‌ای)","Ich habe keinen Appetit. (Standard)":"اشتها ندارم. (معیار)","Mir fehlt der Appetit. (gehoben)":"اشتهایی ندارم. (فاخر)","Was machst du? → Womit beschäftigen Sie sich?":"چه‌کار می‌کنی؟ ← به چه کاری مشغول هستید؟ (رسمی)","Klar! (umg.) → Selbstverständlich. (formell)":"حتماً! (محاوره) ← البته/بی‌شک. (رسمی)","Das geht nicht. → Das ist nicht möglich.":"نمی‌شود. ← این ممکن نیست. (رسمی)","Das Leben ist ein Fluss. (Metapher)":"زندگی یک رودخانه است. (استعاره)","Ja, das war wirklich klug! (Ironie)":"بله، واقعاً کارِ هوشمندانه‌ای بود! (طعنه)","arm und reich, jung und alt (Antithese)":"فقیر و غنی، پیر و جوان (تضاد)","Ich kam, ich sah, ich siegte. (Anapher)":"آمدم، دیدم، پیروز شدم. (تکرارِ آغازین)","Das hab ich dir tausendmal gesagt! (Hyperbel)":"هزار بار به تو گفته‌ام! (اغراق)","Das ist nicht schlecht. (Litotes = es ist gut)":"بد نیست. (کم‌گویی = یعنی خوب است)","eine Frage stellen":"سؤال پرسیدن","Verantwortung übernehmen":"مسئولیت را بر عهده گرفتن","einen Fehler begehen":"مرتکبِ اشتباه شدن (رسمی)","in Betracht ziehen":"در نظر گرفتن","Rücksicht nehmen auf":"ملاحظهٔ (کسی/چیزی) را کردن","Das ist nicht mein Bier.":"این به من مربوط نیست.","Lügen haben kurze Beine.":"دروغ پا ندارد (حقیقت همیشه آشکار می‌شود).","Tomaten auf den Augen haben.":"جلوی چشمت را نمی‌بینی (چیزِ آشکار را نادیده گرفتن).","Den Nagel auf den Kopf treffen.":"درست به هدف زدن / دقیقاً درست گفتن.","Alles hat ein Ende, nur die Wurst hat zwei.":"همه‌چیز یک پایان دارد، فقط سوسیس دو تا. (شوخی)","Wer zuletzt lacht, lacht am besten.":"کسی که آخر می‌خندد، بهتر می‌خندد.","Grüß Gott! (bayerisch) = Guten Tag!":"Grüß Gott! (باواریایی) = روز بخیر!","Servus! (österreichisch) = Hallo / Tschüss":"Servus! (اتریشی) = سلام / خداحافظ","Berlinerisch: ick statt ich":"لهجهٔ برلین: ick به‌جای ich","In der Schweiz: Grüezi! = Guten Tag":"در سوئیس: Grüezi! = روز بخیر","Net statt nicht (süddeutsch)":"Net به‌جای nicht (جنوبِ آلمان)","Nix statt nichts (umgangssprachlich)":"Nix به‌جای nichts (محاوره‌ای)","Habt Ihr das getan? (historisch formell)":"آیا شما این کار را کردید؟ (رسمیِ تاریخی)","Es ward Licht. (Bibeldeutsch)":"روشنایی پدید آمد. (آلمانیِ کتابِ مقدس)","Ich bin's. (kontrahiert = ich bin es)":"منم. (کوتاه‌شدهٔ ich bin es)","Welch ein schöner Tag! (gehobene alte Form)":"چه روزِ زیبایی! (شکلِ کهنِ فاخر)","Das Wort «Weib» bedeutete früher «Frau».":"واژهٔ «Weib» در گذشته به‌معنای «زن» بود.","Man sprach damals anders.":"در آن زمان طورِ دیگری صحبت می‌کردند."};
for (const __lv in GRAMMAR) { for (const __t of GRAMMAR[__lv]) { for (const __e of (__t.ex || [])) { if (__GRAMEX[__e.de] && !__e.fa) __e.fa = __GRAMEX[__e.de]; } } }
