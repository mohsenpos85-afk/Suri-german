// Mini-quiz per grammar topic (3 questions each). Correct option is always first; shuffled at runtime.
export const GRAMMAR_QUIZ = {
 "A1::Personalpronomen": [
  {
   "q": "___ heiße Anna.",
   "options": [
    "Ich",
    "Du",
    "Er"
   ],
   "correct": 0,
   "why": "heiße بۆ (ich) بەکاردێت",
   "whyTr": "heiße → (ich) ile kullanılır"
  },
  {
   "q": "___ bist sehr nett.",
   "options": [
    "Du",
    "Ich",
    "Wir"
   ],
   "correct": 0,
   "why": "bist بۆ (du) بەکاردێت",
   "whyTr": "bist → (du) ile kullanılır"
  },
  {
   "q": "Das sind Tom und Lisa. ___ sind Geschwister.",
   "options": [
    "Sie",
    "Er",
    "Es"
   ],
   "correct": 0,
   "why": "زیاتر لە یەک کەس = (sie) کۆ",
   "whyTr": "birden fazla kişi = (sie) çoğul"
  }
 ],
 "A1::sein und haben": [
  {
   "q": "Wir ___ müde.",
   "options": [
    "sind",
    "haben",
    "seid"
   ],
   "correct": 0,
   "why": "sein: wir sind",
   "whyTr": "sein: wir sind"
  },
  {
   "q": "Ich ___ einen Hund.",
   "options": [
    "habe",
    "bin",
    "hat"
   ],
   "correct": 0,
   "why": "haben: ich habe",
   "whyTr": "haben: ich habe"
  },
  {
   "q": "Ihr ___ Hunger.",
   "options": [
    "habt",
    "seid",
    "hat"
   ],
   "correct": 0,
   "why": "haben: ihr habt (Hunger haben)",
   "whyTr": "haben: ihr habt (Hunger haben)"
  }
 ],
 "A1::Präsens — regelmäßige Verben": [
  {
   "q": "Er ___ gern Musik.",
   "options": [
    "hört",
    "hören",
    "höre"
   ],
   "correct": 0,
   "why": "بۆ (er) کۆتایی -t: hört",
   "whyTr": "(er) için -t eki: hört"
  },
  {
   "q": "Ich ___ in Berlin.",
   "options": [
    "wohne",
    "wohnst",
    "wohnt"
   ],
   "correct": 0,
   "why": "بۆ (ich) کۆتایی -e: wohne",
   "whyTr": "(ich) için -e eki: wohne"
  },
  {
   "q": "Ihr ___ Deutsch.",
   "options": [
    "lernt",
    "lernen",
    "lernst"
   ],
   "correct": 0,
   "why": "بۆ (ihr) کۆتایی -t: lernt",
   "whyTr": "(ihr) için -t eki: lernt"
  }
 ],
 "A1::Artikel: der, die, das": [
  {
   "q": "___ Tisch ist neu.",
   "options": [
    "Der",
    "Die",
    "Das"
   ],
   "correct": 0,
   "why": "der Tisch (نێر)",
   "whyTr": "der Tisch (eril)"
  },
  {
   "q": "___ Lampe ist hell.",
   "options": [
    "Die",
    "Der",
    "Das"
   ],
   "correct": 0,
   "why": "die Lampe (مێ)",
   "whyTr": "die Lampe (dişil)"
  },
  {
   "q": "___ Auto ist rot.",
   "options": [
    "Das",
    "Der",
    "Die"
   ],
   "correct": 0,
   "why": "das Auto (بێلایەن)",
   "whyTr": "das Auto (nötr)"
  }
 ],
 "A1::Plural": [
  {
   "q": "ein Buch – zwei ___",
   "options": [
    "Bücher",
    "Buchs",
    "Büche"
   ],
   "correct": 0,
   "why": "Plural: das Buch → die Bücher",
   "whyTr": "Çoğul: das Buch → die Bücher"
  },
  {
   "q": "eine Lampe – drei ___",
   "options": [
    "Lampen",
    "Lampes",
    "Lämpe"
   ],
   "correct": 0,
   "why": "Plural: die Lampe → die Lampen",
   "whyTr": "Çoğul: die Lampe → die Lampen"
  },
  {
   "q": "ein Kind – viele ___",
   "options": [
    "Kinder",
    "Kinden",
    "Kinds"
   ],
   "correct": 0,
   "why": "Plural: das Kind → die Kinder",
   "whyTr": "Çoğul: das Kind → die Kinder"
  }
 ],
 "A1::Bestimmte / unbestimmte Artikel": [
  {
   "q": "Ich sehe ___ Katze. Die Katze ist süß.",
   "options": [
    "eine",
    "die",
    "der"
   ],
   "correct": 0,
   "why": "یەکەم جار باس دەکرێت → ناڕوون (eine)",
   "whyTr": "ilk kez söz edilince → belirsiz (eine)"
  },
  {
   "q": "Hier ist ein Hund. ___ Hund ist groß.",
   "options": [
    "Der",
    "Ein",
    "Einen"
   ],
   "correct": 0,
   "why": "دووەم جار باس دەکرێت → ڕوون (der)",
   "whyTr": "ikinci kez söz edilince → belirli (der)"
  },
  {
   "q": "Hast du ___ Auto?",
   "options": [
    "ein",
    "eine",
    "einen"
   ],
   "correct": 0,
   "why": "das Auto (بێلایەن) → ein",
   "whyTr": "das Auto (nötr) → ein"
  }
 ],
 "A1::Akkusativ": [
  {
   "q": "Ich sehe ___ Mann.",
   "options": [
    "den",
    "der",
    "dem"
   ],
   "correct": 0,
   "why": "Akkusativ نێر: der → den",
   "whyTr": "Akkusativ eril: der → den"
  },
  {
   "q": "Er kauft ___ Apfel.",
   "options": [
    "einen",
    "ein",
    "einem"
   ],
   "correct": 0,
   "why": "Akkusativ نێر: ein → einen",
   "whyTr": "Akkusativ eril: ein → einen"
  },
  {
   "q": "Wir besuchen ___ Freundin.",
   "options": [
    "die",
    "der",
    "den"
   ],
   "correct": 0,
   "why": "Akkusativ مێ: die وەک خۆی دەمێنێتەوە",
   "whyTr": "Akkusativ dişil: die değişmez"
  }
 ],
 "A1::Possessivartikel": [
  {
   "q": "Das ist ___ Mutter. (ich)",
   "options": [
    "meine",
    "mein",
    "meiner"
   ],
   "correct": 0,
   "why": "مێ: mein + e → meine",
   "whyTr": "dişil: mein + e → meine"
  },
  {
   "q": "Sie liebt ___ Kinder. (sie)",
   "options": [
    "ihre",
    "seine",
    "ihr"
   ],
   "correct": 0,
   "why": "کۆ + (sie): ihre",
   "whyTr": "çoğul + (sie): ihre"
  },
  {
   "q": "Wir haben ___ Auto. (wir)",
   "options": [
    "unser",
    "unsere",
    "uns"
   ],
   "correct": 0,
   "why": "بێلایەن: unser",
   "whyTr": "nötr: unser"
  }
 ],
 "A1::Negation: nicht / kein": [
  {
   "q": "Ich habe ___ Zeit.",
   "options": [
    "keine",
    "nicht",
    "kein"
   ],
   "correct": 0,
   "why": "ناو بێ artikel/ناڕوون → kein/keine: die Zeit → keine",
   "whyTr": "isimle → kein/keine: die Zeit → keine"
  },
  {
   "q": "Er kommt ___.",
   "options": [
    "nicht",
    "kein",
    "keine"
   ],
   "correct": 0,
   "why": "کریا دەکەیتە نەفی → nicht",
   "whyTr": "fiili olumsuzlamak → nicht"
  },
  {
   "q": "Das ist ___ Apfel.",
   "options": [
    "kein",
    "nicht",
    "keine"
   ],
   "correct": 0,
   "why": "der Apfel نێر → kein",
   "whyTr": "der Apfel eril → kein"
  }
 ],
 "A1::W-Fragen": [
  {
   "q": "___ heißt du?",
   "options": [
    "Wie",
    "Wo",
    "Wer"
   ],
   "correct": 0,
   "why": "Wie = چۆن (ناو)",
   "whyTr": "Wie = nasıl (isim)"
  },
  {
   "q": "___ wohnst du?",
   "options": [
    "Wo",
    "Wer",
    "Was"
   ],
   "correct": 0,
   "why": "Wo = لە کوێ",
   "whyTr": "Wo = nerede"
  },
  {
   "q": "___ kommt aus Italien?",
   "options": [
    "Wer",
    "Wo",
    "Wann"
   ],
   "correct": 0,
   "why": "Wer = کێ",
   "whyTr": "Wer = kim"
  }
 ],
 "A1::Ja/Nein-Fragen": [
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Hast du Zeit?",
    "Zeit du hast?",
    "Hast Zeit du?"
   ],
   "correct": 0,
   "why": "پرسیاری بەڵێ/نەخێر: کریا لە سەرەتا",
   "whyTr": "Evet/Hayır sorusu: fiil başta"
  },
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Spricht er Deutsch?",
    "Er Deutsch spricht?",
    "Spricht Deutsch er?"
   ],
   "correct": 0,
   "why": "کریا → بکەر → ئاوەڵ",
   "whyTr": "fiil → özne → tümleç"
  },
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Ist das dein Buch?",
    "Das ist dein Buch ist?",
    "Dein Buch das ist?"
   ],
   "correct": 0,
   "why": "کریا (Ist) لە سەرەتا",
   "whyTr": "fiil (Ist) başta"
  }
 ],
 "A1::Satzstellung": [
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Ich lerne heute Deutsch.",
    "Ich heute lerne Deutsch.",
    "Heute Ich lerne Deutsch."
   ],
   "correct": 0,
   "why": "کریا هەمیشە لە شوێنی دووەم",
   "whyTr": "fiil her zaman 2. konumda"
  },
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Morgen fahre ich nach Wien.",
    "Morgen ich fahre nach Wien.",
    "Ich morgen nach Wien fahre."
   ],
   "correct": 0,
   "why": "کات لە سەرەتا → کریا → بکەر",
   "whyTr": "zaman başta → fiil → özne"
  },
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Er trinkt gern Tee.",
    "Er gern trinkt Tee.",
    "Er gern Tee trinkt."
   ],
   "correct": 0,
   "why": "کریا لە شوێنی ٢",
   "whyTr": "fiil 2. konumda"
  }
 ],
 "A1::Modalverben": [
  {
   "q": "Ich ___ schwimmen.",
   "options": [
    "kann",
    "kannst",
    "können"
   ],
   "correct": 0,
   "why": "können: ich kann",
   "whyTr": "können: ich kann"
  },
  {
   "q": "Du ___ jetzt gehen.",
   "options": [
    "musst",
    "muss",
    "müssen"
   ],
   "correct": 0,
   "why": "müssen: du musst",
   "whyTr": "müssen: du musst"
  },
  {
   "q": "Wir ___ Deutsch lernen.",
   "options": [
    "wollen",
    "will",
    "willst"
   ],
   "correct": 0,
   "why": "wollen: wir wollen",
   "whyTr": "wollen: wir wollen"
  }
 ],
 "A1::Unregelmäßige Verben": [
  {
   "q": "Er ___ Brot.",
   "options": [
    "isst",
    "esst",
    "esse"
   ],
   "correct": 0,
   "why": "essen: er isst (e → i)",
   "whyTr": "essen: er isst (e → i)"
  },
  {
   "q": "Du ___ das Buch.",
   "options": [
    "liest",
    "lest",
    "lese"
   ],
   "correct": 0,
   "why": "lesen: du liest (e → ie)",
   "whyTr": "lesen: du liest (e → ie)"
  },
  {
   "q": "Sie ___ gut Deutsch.",
   "options": [
    "spricht",
    "sprecht",
    "sprechst"
   ],
   "correct": 0,
   "why": "sprechen: sie spricht (e → i)",
   "whyTr": "sprechen: sie spricht (e → i)"
  }
 ],
 "A1::Trennbare Verben": [
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Ich stehe um 7 Uhr auf.",
    "Ich aufstehe um 7 Uhr.",
    "Ich auf stehe um 7 Uhr."
   ],
   "correct": 0,
   "why": "aufstehen: پێشگر (auf) دەچێتە کۆتایی",
   "whyTr": "aufstehen: ön ek (auf) sona gider"
  },
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Er ruft seine Mutter an.",
    "Er anruft seine Mutter.",
    "Er an ruft seine Mutter."
   ],
   "correct": 0,
   "why": "anrufen: an دەچێتە کۆتایی",
   "whyTr": "anrufen: an sona gider"
  },
  {
   "q": "Der Zug kommt um 8 Uhr ___.",
   "options": [
    "an",
    "ab",
    "auf"
   ],
   "correct": 0,
   "why": "ankommen: (kommt … an)",
   "whyTr": "ankommen: (kommt … an)"
  }
 ],
 "A1::Imperativ": [
  {
   "q": "___ bitte langsam! (du, sprechen)",
   "options": [
    "Sprich",
    "Sprichst",
    "Sprechen"
   ],
   "correct": 0,
   "why": "Imperativ (du) بۆ sprechen: Sprich (e → i)",
   "whyTr": "sprechen için Imperativ (du): Sprich (e → i)"
  },
  {
   "q": "___ Sie bitte Platz!",
   "options": [
    "Nehmen",
    "Nimmt",
    "Nimm"
   ],
   "correct": 0,
   "why": "Imperativ بۆ Sie: مەسدەر + Sie",
   "whyTr": "Sie için Imperativ: mastar + Sie"
  },
  {
   "q": "___ nicht so laut! (ihr, sein)",
   "options": [
    "Seid",
    "Sei",
    "Sind"
   ],
   "correct": 0,
   "why": "Imperativ (ihr) بۆ sein: Seid",
   "whyTr": "sein için Imperativ (ihr): Seid"
  }
 ],
 "A1::Präpositionen: Ort & Zeit": [
  {
   "q": "Ich wohne ___ Berlin.",
   "options": [
    "in",
    "an",
    "auf"
   ],
   "correct": 0,
   "why": "شار = in",
   "whyTr": "şehir = in"
  },
  {
   "q": "Der Kurs beginnt ___ 9 Uhr.",
   "options": [
    "um",
    "in",
    "an"
   ],
   "correct": 0,
   "why": "کاتژمێر = um",
   "whyTr": "saat = um"
  },
  {
   "q": "Wir fahren ___ Montag nach Wien.",
   "options": [
    "am",
    "im",
    "um"
   ],
   "correct": 0,
   "why": "ڕۆژ = am",
   "whyTr": "gün = am"
  }
 ],
 "A2::Perfekt": [
  {
   "q": "Ich habe gestern Fußball ___.",
   "options": [
    "gespielt",
    "spielen",
    "gespielte"
   ],
   "correct": 0,
   "why": "Perfekt: haben + Partizip II (ge…t)",
   "whyTr": "Perfekt: haben + Partizip II (ge…t)"
  },
  {
   "q": "Er ist nach Hause ___.",
   "options": [
    "gegangen",
    "gegangt",
    "gehen"
   ],
   "correct": 0,
   "why": "جووڵە → sein + gegangen",
   "whyTr": "hareket → sein + gegangen"
  },
  {
   "q": "Wir haben einen Film ___.",
   "options": [
    "gesehen",
    "gesehn",
    "sehen"
   ],
   "correct": 0,
   "why": "sehen → gesehen (Partizip II)",
   "whyTr": "sehen → gesehen (Partizip II)"
  }
 ],
 "A2::Präteritum (sein, haben, Modalverben)": [
  {
   "q": "Gestern ___ ich krank.",
   "options": [
    "war",
    "bin",
    "wurde"
   ],
   "correct": 0,
   "why": "Präteritum بۆ sein: ich war",
   "whyTr": "sein Präteritum: ich war"
  },
  {
   "q": "Er ___ keine Zeit.",
   "options": [
    "hatte",
    "hat",
    "hattet"
   ],
   "correct": 0,
   "why": "Präteritum بۆ haben: er hatte",
   "whyTr": "haben Präteritum: er hatte"
  },
  {
   "q": "Wir ___ nach Hause gehen.",
   "options": [
    "mussten",
    "müssen",
    "musst"
   ],
   "correct": 0,
   "why": "Präteritum بۆ müssen: wir mussten",
   "whyTr": "müssen Präteritum: wir mussten"
  }
 ],
 "A2::Dativ": [
  {
   "q": "Ich helfe ___ Frau.",
   "options": [
    "der",
    "die",
    "den"
   ],
   "correct": 0,
   "why": "helfen + Dativ؛ مێ: die → der",
   "whyTr": "helfen + Dativ; dişil: die → der"
  },
  {
   "q": "Das Buch gehört ___ Kind.",
   "options": [
    "dem",
    "das",
    "den"
   ],
   "correct": 0,
   "why": "gehören + Dativ؛ بێلایەن: dem",
   "whyTr": "gehören + Dativ; nötr: dem"
  },
  {
   "q": "Er gibt ___ Mann das Geld.",
   "options": [
    "dem",
    "den",
    "der"
   ],
   "correct": 0,
   "why": "کەسەکە = Dativ؛ نێر: dem",
   "whyTr": "kişi = Dativ; eril: dem"
  }
 ],
 "A2::Wechselpräpositionen": [
  {
   "q": "Ich gehe ___ Kino.",
   "options": [
    "ins",
    "im",
    "in dem"
   ],
   "correct": 0,
   "why": "جووڵە (بۆ کوێ؟) = Akkusativ → in das = ins",
   "whyTr": "hareket (nereye?) = Akkusativ → in das = ins"
  },
  {
   "q": "Die Lampe hängt ___ Tisch.",
   "options": [
    "über dem",
    "über den",
    "über das"
   ],
   "correct": 0,
   "why": "شوێن (لە کوێ؟) = Dativ → über dem",
   "whyTr": "yer (nerede?) = Dativ → über dem"
  },
  {
   "q": "Er legt das Buch ___ Tisch.",
   "options": [
    "auf den",
    "auf dem",
    "auf der"
   ],
   "correct": 0,
   "why": "جووڵە (بۆ کوێ؟) = Akkusativ → auf den",
   "whyTr": "hareket (nereye?) = Akkusativ → auf den"
  }
 ],
 "A2::Pronomen: Personal-, Possessiv-, Demonstrativ-": [
  {
   "q": "Das ist Peter. Ich kenne ___.",
   "options": [
    "ihn",
    "er",
    "ihm"
   ],
   "correct": 0,
   "why": "kennen + Akkusativ → ihn",
   "whyTr": "kennen + Akkusativ → ihn"
  },
  {
   "q": "Wo ist mein Buch? — ___ liegt auf dem Tisch.",
   "options": [
    "Es",
    "Er",
    "Sie"
   ],
   "correct": 0,
   "why": "das Buch (بێلایەن) → es",
   "whyTr": "das Buch (nötr) → es"
  },
  {
   "q": "Das ist Anna. Das ist ___ Tasche.",
   "options": [
    "ihre",
    "seine",
    "ihr"
   ],
   "correct": 0,
   "why": "Anna = مێ؛ die Tasche مێ → ihre",
   "whyTr": "Anna = kadın; die Tasche dişil → ihre"
  }
 ],
 "A2::Reflexive Verben": [
  {
   "q": "Ich freue ___ auf das Wochenende.",
   "options": [
    "mich",
    "mir",
    "sich"
   ],
   "correct": 0,
   "why": "sich freuen: ich freue mich",
   "whyTr": "sich freuen: ich freue mich"
  },
  {
   "q": "Er wäscht ___ die Hände.",
   "options": [
    "sich",
    "ihn",
    "ihm"
   ],
   "correct": 0,
   "why": "ڕەنگدانەوە بۆ er = sich",
   "whyTr": "er için dönüşlü = sich"
  },
  {
   "q": "Wir treffen ___ um 5 Uhr.",
   "options": [
    "uns",
    "wir",
    "unser"
   ],
   "correct": 0,
   "why": "sich treffen: wir treffen uns",
   "whyTr": "sich treffen: wir treffen uns"
  }
 ],
 "A2::Komparativ": [
  {
   "q": "Mein Bruder ist ___ als ich.",
   "options": [
    "älter",
    "alter",
    "ältest"
   ],
   "correct": 0,
   "why": "Komparativ: alt → älter",
   "whyTr": "Komparativ: alt → älter"
  },
  {
   "q": "Berlin ist ___ als Köln.",
   "options": [
    "größer",
    "großer",
    "größte"
   ],
   "correct": 0,
   "why": "Komparativ: groß → größer",
   "whyTr": "Komparativ: groß → größer"
  },
  {
   "q": "Der Zug ist ___ als der Bus.",
   "options": [
    "schneller",
    "schnell",
    "am schnellsten"
   ],
   "correct": 0,
   "why": "Komparativ: schnell → schneller",
   "whyTr": "Komparativ: schnell → schneller"
  }
 ],
 "A2::Superlativ": [
  {
   "q": "Das ist das ___ Haus.",
   "options": [
    "schönste",
    "schönere",
    "schön"
   ],
   "correct": 0,
   "why": "Superlativ: schön → schönste",
   "whyTr": "Superlativ: schön → schönste"
  },
  {
   "q": "Sie läuft am ___.",
   "options": [
    "schnellsten",
    "schneller",
    "schnellste"
   ],
   "correct": 0,
   "why": "am + -sten: am schnellsten",
   "whyTr": "am + -sten: am schnellsten"
  },
  {
   "q": "Mein ___ Freund heißt Tom.",
   "options": [
    "bester",
    "besser",
    "gut"
   ],
   "correct": 0,
   "why": "Superlativ نادیار: gut → best-",
   "whyTr": "Superlativ: gut → best-"
  }
 ],
 "A2::Konjunktionen: und, oder, aber, denn, sondern": [
  {
   "q": "Ich esse keinen Fisch, ___ Fleisch.",
   "options": [
    "sondern",
    "aber",
    "denn"
   ],
   "correct": 0,
   "why": "پاش نەفی → sondern",
   "whyTr": "olumsuzluktan sonra → sondern"
  },
  {
   "q": "Er ist müde, ___ er hat lange gearbeitet.",
   "options": [
    "denn",
    "oder",
    "sondern"
   ],
   "correct": 0,
   "why": "denn = چونکە",
   "whyTr": "denn = çünkü"
  },
  {
   "q": "Willst du Tee ___ Kaffee?",
   "options": [
    "oder",
    "aber",
    "denn"
   ],
   "correct": 0,
   "why": "oder = یان",
   "whyTr": "oder = veya"
  }
 ],
 "A2::Nebensatz: weil, dass": [
  {
   "q": "Ich bleibe zu Hause, weil ich krank ___.",
   "options": [
    "bin",
    "bist",
    "ist"
   ],
   "correct": 0,
   "why": "لە ڕستەی لاوەکی کریا لە کۆتایی؛ ich → bin",
   "whyTr": "yan cümlede fiil sonda; ich → bin"
  },
  {
   "q": "Er sagt, dass er morgen ___.",
   "options": [
    "kommt",
    "kommen",
    "kommst"
   ],
   "correct": 0,
   "why": "dass-Satz: کریا لە کۆتایی؛ er → kommt",
   "whyTr": "dass-Satz: fiil sonda; er → kommt"
  },
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Ich lerne Deutsch, weil ich in Wien arbeite.",
    "Ich lerne Deutsch, weil ich arbeite in Wien.",
    "Ich lerne Deutsch, weil arbeite ich in Wien."
   ],
   "correct": 0,
   "why": "weil-Satz: کریا لە کۆتایی",
   "whyTr": "weil cümlesinde fiil sonda"
  }
 ],
 "A2::Relativsätze (basic)": [
  {
   "q": "Das ist der Mann, ___ dort wohnt.",
   "options": [
    "der",
    "die",
    "das"
   ],
   "correct": 0,
   "why": "نێر + بکەر → der",
   "whyTr": "eril + özne → der"
  },
  {
   "q": "Das ist die Frau, ___ ich kenne.",
   "options": [
    "die",
    "der",
    "den"
   ],
   "correct": 0,
   "why": "مێ + Akkusativ → die",
   "whyTr": "dişil + Akkusativ → die"
  },
  {
   "q": "Das ist das Buch, ___ ich lese.",
   "options": [
    "das",
    "der",
    "dem"
   ],
   "correct": 0,
   "why": "بێلایەن + Akkusativ → das",
   "whyTr": "nötr + Akkusativ → das"
  }
 ],
 "A2::Genitiv (Einführung)": [
  {
   "q": "Das ist das Auto ___ Vaters.",
   "options": [
    "des",
    "der",
    "dem"
   ],
   "correct": 0,
   "why": "Genitiv نێر: des + -s",
   "whyTr": "Genitiv eril: des + -s"
  },
  {
   "q": "Die Tasche ___ Frau ist rot.",
   "options": [
    "der",
    "des",
    "die"
   ],
   "correct": 0,
   "why": "Genitiv مێ: der",
   "whyTr": "Genitiv dişil: der"
  },
  {
   "q": "Das Haus ___ Lehrers ist groß.",
   "options": [
    "des",
    "dem",
    "der"
   ],
   "correct": 0,
   "why": "Genitiv نێر: des Lehrers",
   "whyTr": "Genitiv eril: des Lehrers"
  }
 ],
 "B1::Adjektivdeklination": [
  {
   "q": "Ich kaufe einen ___ Mantel.",
   "options": [
    "neuen",
    "neue",
    "neuer"
   ],
   "correct": 0,
   "why": "einen + نێر Akkusativ → -en: neuen",
   "whyTr": "einen + eril Akkusativ → -en: neuen"
  },
  {
   "q": "Die ___ Kinder spielen.",
   "options": [
    "kleinen",
    "kleine",
    "kleiner"
   ],
   "correct": 0,
   "why": "die + کۆ → -en: kleinen",
   "whyTr": "die + çoğul → -en: kleinen"
  },
  {
   "q": "Er hat ein ___ Auto.",
   "options": [
    "rotes",
    "roten",
    "roter"
   ],
   "correct": 0,
   "why": "ein + بێلایەن Akkusativ → -es: rotes",
   "whyTr": "ein + nötr Akkusativ → -es: rotes"
  }
 ],
 "B1::Genitiv": [
  {
   "q": "Das Fahrrad ___ Mädchens ist neu.",
   "options": [
    "des",
    "der",
    "dem"
   ],
   "correct": 0,
   "why": "Genitiv بێلایەن: des + -s",
   "whyTr": "Genitiv nötr: des + -s"
  },
  {
   "q": "Die Farbe ___ Autos gefällt mir.",
   "options": [
    "des",
    "das",
    "dem"
   ],
   "correct": 0,
   "why": "Genitiv بێلایەن: des Autos",
   "whyTr": "Genitiv nötr: des Autos"
  },
  {
   "q": "Das ist das Haus meines ___.",
   "options": [
    "Bruders",
    "Bruder",
    "Brüdern"
   ],
   "correct": 0,
   "why": "Genitiv نێر: meines Bruders (-s)",
   "whyTr": "Genitiv eril: meines Bruders (-s)"
  }
 ],
 "B1::Präpositionen mit Genitiv": [
  {
   "q": "___ des Regens bleiben wir zu Hause.",
   "options": [
    "Wegen",
    "Mit",
    "Bei"
   ],
   "correct": 0,
   "why": "wegen + Genitiv = بەهۆی",
   "whyTr": "wegen + Genitiv = -den dolayı"
  },
  {
   "q": "___ des schlechten Wetters gehen wir spazieren.",
   "options": [
    "Trotz",
    "Wegen",
    "Mit"
   ],
   "correct": 0,
   "why": "trotz + Genitiv = سەرەڕای",
   "whyTr": "trotz + Genitiv = -e rağmen"
  },
  {
   "q": "Während ___ Urlaubs hat er viel gelesen.",
   "options": [
    "des",
    "dem",
    "den"
   ],
   "correct": 0,
   "why": "während + Genitiv: des Urlaubs",
   "whyTr": "während + Genitiv: des Urlaubs"
  }
 ],
 "B1::Plusquamperfekt": [
  {
   "q": "Nachdem ich gegessen ___, ging ich schlafen.",
   "options": [
    "hatte",
    "habe",
    "hatten"
   ],
   "correct": 0,
   "why": "Plusquamperfekt: hatte + Partizip II",
   "whyTr": "Plusquamperfekt: hatte + Partizip II"
  },
  {
   "q": "Er ___ schon gegangen, als ich kam.",
   "options": [
    "war",
    "ist",
    "hatte"
   ],
   "correct": 0,
   "why": "جووڵە → war + gegangen",
   "whyTr": "hareket → war + gegangen"
  },
  {
   "q": "Sie ___ den Brief geschrieben, bevor er kam.",
   "options": [
    "hatte",
    "hat",
    "war"
   ],
   "correct": 0,
   "why": "schreiben → hatte geschrieben",
   "whyTr": "schreiben → hatte geschrieben"
  }
 ],
 "B1::Futur I": [
  {
   "q": "Morgen ___ es regnen.",
   "options": [
    "wird",
    "hat",
    "wurde"
   ],
   "correct": 0,
   "why": "Futur I: werden + مەسدەر → wird regnen",
   "whyTr": "Futur I: werden + mastar → wird regnen"
  },
  {
   "q": "Ich ___ dir helfen.",
   "options": [
    "werde",
    "wurde",
    "werden"
   ],
   "correct": 0,
   "why": "Futur I: ich werde",
   "whyTr": "Futur I: ich werde"
  },
  {
   "q": "Wir ___ nächstes Jahr nach Spanien fahren.",
   "options": [
    "werden",
    "wird",
    "wurden"
   ],
   "correct": 0,
   "why": "Futur I: wir werden",
   "whyTr": "Futur I: wir werden"
  }
 ],
 "B1::Konjunktionen: obwohl, wenn, als, während…": [
  {
   "q": "___ er krank war, ging er zur Arbeit.",
   "options": [
    "Obwohl",
    "Weil",
    "Damit"
   ],
   "correct": 0,
   "why": "obwohl = سەرەڕای ئەوەی",
   "whyTr": "obwohl = -e rağmen"
  },
  {
   "q": "___ ich ein Kind war, wohnte ich in Köln.",
   "options": [
    "Als",
    "Wenn",
    "Wann"
   ],
   "correct": 0,
   "why": "als = یەک جار لە ڕابردوودا",
   "whyTr": "als = geçmişte tek seferlik"
  },
  {
   "q": "___ ich Zeit habe, lese ich gern.",
   "options": [
    "Wenn",
    "Als",
    "Obwohl"
   ],
   "correct": 0,
   "why": "wenn = هەر جارێک / ئەگەر",
   "whyTr": "wenn = her seferinde / eğer"
  }
 ],
 "B1::Relativsätze (detail)": [
  {
   "q": "Das ist der Freund, mit ___ ich ins Kino gehe.",
   "options": [
    "dem",
    "den",
    "der"
   ],
   "correct": 0,
   "why": "mit + Dativ نێر → dem",
   "whyTr": "mit + Dativ eril → dem"
  },
  {
   "q": "Die Stadt, in ___ ich wohne, ist klein.",
   "options": [
    "der",
    "die",
    "dem"
   ],
   "correct": 0,
   "why": "in + Dativ مێ → der",
   "whyTr": "in + Dativ dişil → der"
  },
  {
   "q": "Das Buch, ___ Autor berühmt ist, ist neu.",
   "options": [
    "dessen",
    "deren",
    "dem"
   ],
   "correct": 0,
   "why": "Genitiv بێلایەن → dessen",
   "whyTr": "Genitiv nötr → dessen"
  }
 ],
 "B1::Indirekte Fragen": [
  {
   "q": "Ich weiß nicht, ___ er kommt.",
   "options": [
    "ob",
    "dass",
    "weil"
   ],
   "correct": 0,
   "why": "پرسیاری بەڵێ/نەخێر لە ڕستەی لاوەکی → ob",
   "whyTr": "evet/hayır sorusu yan cümlede → ob"
  },
  {
   "q": "Sie fragt, ___ ich wohne.",
   "options": [
    "wo",
    "ob",
    "dass"
   ],
   "correct": 0,
   "why": "پرسیاری W لە ڕستەی لاوەکی: wo",
   "whyTr": "W-sorusu yan cümlede: wo"
  },
  {
   "q": "کام ڕستە ڕاستە؟ / Hangi cümle doğru?",
   "options": [
    "Weißt du, wann der Zug kommt?",
    "Weißt du, wann kommt der Zug?",
    "Weißt du, wann der Zug kommt der?"
   ],
   "correct": 0,
   "why": "پرسیاری ناڕاستەوخۆ: کریا لە کۆتایی",
   "whyTr": "dolaylı soru: fiil sonda"
  }
 ],
 "B1::Infinitiv mit zu": [
  {
   "q": "Ich habe keine Lust, heute ___ arbeiten.",
   "options": [
    "zu",
    "um",
    "für"
   ],
   "correct": 0,
   "why": "Infinitiv mit zu: zu + مەسدەر",
   "whyTr": "Infinitiv mit zu: zu + mastar"
  },
  {
   "q": "Es ist wichtig, pünktlich ___ sein.",
   "options": [
    "zu",
    "um",
    "dass"
   ],
   "correct": 0,
   "why": "Es ist wichtig, … zu sein",
   "whyTr": "Es ist wichtig, … zu sein"
  },
  {
   "q": "Er hat vergessen, die Tür ___.",
   "options": [
    "abzuschließen",
    "zu abschließen",
    "abschließen zu"
   ],
   "correct": 0,
   "why": "کریای جیابووەوە: ab + zu + schließen → abzuschließen",
   "whyTr": "ayrılabilen fiil: ab + zu + schließen → abzuschließen"
  }
 ],
 "B1::um…zu / ohne…zu / statt…zu": [
  {
   "q": "Er lernt, ___ die Prüfung zu bestehen.",
   "options": [
    "um",
    "damit",
    "ohne"
   ],
   "correct": 0,
   "why": "um … zu = بۆ ئەوەی",
   "whyTr": "um … zu = -mek için"
  },
  {
   "q": "Er ging, ___ ein Wort zu sagen.",
   "options": [
    "ohne",
    "um",
    "damit"
   ],
   "correct": 0,
   "why": "ohne … zu = بێ ئەوەی",
   "whyTr": "ohne … zu = -meden"
  },
  {
   "q": "___ zu schlafen, sah er fern.",
   "options": [
    "Statt",
    "Um",
    "Ohne"
   ],
   "correct": 0,
   "why": "statt … zu = لەجیاتی",
   "whyTr": "statt … zu = -mek yerine"
  }
 ],
 "B1::Passiv (Vorgangspassiv)": [
  {
   "q": "Das Auto ___ repariert.",
   "options": [
    "wird",
    "hat",
    "wirst"
   ],
   "correct": 0,
   "why": "Vorgangspassiv: wird + Partizip II",
   "whyTr": "Vorgangspassiv: wird + Partizip II"
  },
  {
   "q": "Der Brief wurde gestern ___.",
   "options": [
    "geschrieben",
    "schreiben",
    "schrieb"
   ],
   "correct": 0,
   "why": "Passiv Präteritum: wurde + Partizip II",
   "whyTr": "Passiv Präteritum: wurde + Partizip II"
  },
  {
   "q": "Die Fenster ___ geputzt.",
   "options": [
    "werden",
    "wird",
    "wurde"
   ],
   "correct": 0,
   "why": "کۆ → werden + Partizip II",
   "whyTr": "çoğul → werden + Partizip II"
  }
 ],
 "B1::Konjunktiv II": [
  {
   "q": "Ich ___ gern ein Eis.",
   "options": [
    "hätte",
    "habe",
    "hatte"
   ],
   "correct": 0,
   "why": "Konjunktiv II بۆ نەرمی: hätte gern",
   "whyTr": "kibarlık için Konjunktiv II: hätte gern"
  },
  {
   "q": "Wenn ich reich ___, würde ich reisen.",
   "options": [
    "wäre",
    "bin",
    "war"
   ],
   "correct": 0,
   "why": "ئەگەری نەبووی: wäre",
   "whyTr": "gerçek dışı koşul: wäre"
  },
  {
   "q": "An deiner Stelle ___ ich das nicht tun.",
   "options": [
    "würde",
    "werde",
    "wurde"
   ],
   "correct": 0,
   "why": "ئامۆژگاری: ich würde (Konjunktiv II)",
   "whyTr": "tavsiye: ich würde (Konjunktiv II)"
  }
 ],
 "B2::Passiv (alle Formen)": [
  {
   "q": "Das Haus ___ 1990 gebaut worden.",
   "options": [
    "ist",
    "wird",
    "wurde"
   ],
   "correct": 0,
   "why": "Perfekt Passiv: ist + Partizip II + worden",
   "whyTr": "Perfekt Passiv: ist + Partizip II + worden"
  },
  {
   "q": "Der Vertrag ___ gestern unterschrieben.",
   "options": [
    "wurde",
    "wird",
    "war"
   ],
   "correct": 0,
   "why": "Präteritum Passiv: wurde + Partizip II",
   "whyTr": "Präteritum Passiv: wurde + Partizip II"
  },
  {
   "q": "Es ___ dort viel gefeiert.",
   "options": [
    "wird",
    "ist",
    "hat"
   ],
   "correct": 0,
   "why": "Passiv بێ بکەر: Es wird … gefeiert",
   "whyTr": "öznesiz Passiv: Es wird … gefeiert"
  }
 ],
 "B2::Zustandspassiv": [
  {
   "q": "Das Geschäft ist schon ___.",
   "options": [
    "geschlossen",
    "schließen",
    "geschlossene"
   ],
   "correct": 0,
   "why": "Zustandspassiv: sein + Partizip II",
   "whyTr": "Zustandspassiv: sein + Partizip II"
  },
  {
   "q": "Das Fenster ___ jetzt geschlossen. (دۆخ / durum)",
   "options": [
    "ist",
    "wird",
    "wurde"
   ],
   "correct": 0,
   "why": "دۆخ = sein + Partizip II",
   "whyTr": "durum = sein + Partizip II"
  },
  {
   "q": "Die Aufgaben ___ erledigt. (تەواو / bitti)",
   "options": [
    "sind",
    "werden",
    "wurden"
   ],
   "correct": 0,
   "why": "ئەنجامی کار = sind + Partizip II",
   "whyTr": "iş bitti (sonuç) = sind + Partizip II"
  }
 ],
 "B2::Passiv mit Modalverben": [
  {
   "q": "Der Antrag muss bis Montag abgegeben ___.",
   "options": [
    "werden",
    "sein",
    "haben"
   ],
   "correct": 0,
   "why": "Modalverb + Partizip II + werden",
   "whyTr": "Modal fiil + Partizip II + werden"
  },
  {
   "q": "Das Problem kann nicht gelöst ___.",
   "options": [
    "werden",
    "worden",
    "wird"
   ],
   "correct": 0,
   "why": "kann … gelöst werden",
   "whyTr": "kann … gelöst werden"
  },
  {
   "q": "Die Regeln sollen beachtet ___.",
   "options": [
    "werden",
    "sein",
    "wurden"
   ],
   "correct": 0,
   "why": "sollen … beachtet werden",
   "whyTr": "sollen … beachtet werden"
  }
 ],
 "B2::Konjunktiv II (fortgeschritten)": [
  {
   "q": "Wenn ich das gewusst ___, wäre ich gekommen.",
   "options": [
    "hätte",
    "habe",
    "hatte"
   ],
   "correct": 0,
   "why": "Konjunktiv II ڕابردوو: hätte + Partizip II",
   "whyTr": "geçmiş Konjunktiv II: hätte + Partizip II"
  },
  {
   "q": "Ich wäre gern länger ___.",
   "options": [
    "geblieben",
    "bleiben",
    "blieb"
   ],
   "correct": 0,
   "why": "wäre + Partizip II: wäre geblieben",
   "whyTr": "wäre + Partizip II: wäre geblieben"
  },
  {
   "q": "Er tat so, als ___ er alles verstanden.",
   "options": [
    "hätte",
    "hat",
    "hatte"
   ],
   "correct": 0,
   "why": "als ob/als + Konjunktiv II: hätte",
   "whyTr": "als ob/als + Konjunktiv II: hätte"
  }
 ],
 "B2::Konjunktiv I (indirekte Rede)": [
  {
   "q": "Sie sagt, sie ___ müde.",
   "options": [
    "sei",
    "ist",
    "war"
   ],
   "correct": 0,
   "why": "indirekte Rede: sein → sei",
   "whyTr": "indirekte Rede: sein → sei"
  },
  {
   "q": "Er behauptet, er ___ das nicht getan.",
   "options": [
    "habe",
    "hat",
    "hatte"
   ],
   "correct": 0,
   "why": "indirekte Rede: haben → habe",
   "whyTr": "indirekte Rede: haben → habe"
  },
  {
   "q": "Der Sprecher erklärte, die Preise ___ gestiegen.",
   "options": [
    "seien",
    "sind",
    "waren"
   ],
   "correct": 0,
   "why": "کۆ: sie seien + Partizip II",
   "whyTr": "çoğul: sie seien + Partizip II"
  }
 ],
 "B2::Erweiterte Relativsätze": [
  {
   "q": "Das Thema, über ___ wir gesprochen haben, ist wichtig.",
   "options": [
    "das",
    "dem",
    "den"
   ],
   "correct": 0,
   "why": "über + Akkusativ بێلایەن → das",
   "whyTr": "über + Akkusativ nötr → das"
  },
  {
   "q": "Alles, ___ er sagt, stimmt.",
   "options": [
    "was",
    "das",
    "der"
   ],
   "correct": 0,
   "why": "دوای alles → was",
   "whyTr": "alles'ten sonra → was"
  },
  {
   "q": "Die Frau, ___ Mann Arzt ist, wohnt neben uns.",
   "options": [
    "deren",
    "dessen",
    "die"
   ],
   "correct": 0,
   "why": "Genitiv مێ → deren",
   "whyTr": "Genitiv dişil → deren"
  }
 ],
 "B2::Kausale, konsekutive, konzessive Sätze": [
  {
   "q": "Er war so müde, ___ er sofort einschlief.",
   "options": [
    "dass",
    "weil",
    "obwohl"
   ],
   "correct": 0,
   "why": "so … dass = ئەنجام (konsekutiv)",
   "whyTr": "so … dass = sonuç (konsekutiv)"
  },
  {
   "q": "___ des Regens fiel das Fest aus.",
   "options": [
    "Wegen",
    "Obwohl",
    "Damit"
   ],
   "correct": 0,
   "why": "wegen + Genitiv = هۆکار (kausal)",
   "whyTr": "wegen + Genitiv = neden (kausal)"
  },
  {
   "q": "Er arbeitet weiter, ___ er krank ist.",
   "options": [
    "obwohl",
    "weil",
    "damit"
   ],
   "correct": 0,
   "why": "obwohl = سەرەڕای (konzessiv)",
   "whyTr": "obwohl = -e rağmen (konzessiv)"
  }
 ],
 "B2::Futur II": [
  {
   "q": "In einem Jahr ___ ich meinen Abschluss gemacht haben.",
   "options": [
    "werde",
    "wurde",
    "habe"
   ],
   "correct": 0,
   "why": "Futur II: werden + Partizip II + haben",
   "whyTr": "Futur II: werden + Partizip II + haben"
  },
  {
   "q": "Er ___ wohl schon zu Hause angekommen sein. (گومان / tahmin)",
   "options": [
    "wird",
    "hat",
    "ist"
   ],
   "correct": 0,
   "why": "Futur II بۆ گومان: wird … sein",
   "whyTr": "tahmin için Futur II: wird … sein"
  },
  {
   "q": "Bis morgen ___ wir das Projekt beendet haben.",
   "options": [
    "werden",
    "wurden",
    "haben"
   ],
   "correct": 0,
   "why": "Futur II: wir werden … haben",
   "whyTr": "Futur II: wir werden … haben"
  }
 ],
 "B2::Partizip I": [
  {
   "q": "Das ___ Kind hat Hunger.",
   "options": [
    "weinende",
    "geweinte",
    "weinen"
   ],
   "correct": 0,
   "why": "Partizip I = مەسدەر + d: weinend + e",
   "whyTr": "Partizip I = mastar + d: weinend + e"
  },
  {
   "q": "Das Partizip I von 'laufen' heißt ___.",
   "options": [
    "laufend",
    "gelaufen",
    "gelaufend"
   ],
   "correct": 0,
   "why": "Partizip I: مەسدەر + d",
   "whyTr": "Partizip I: mastar + d"
  },
  {
   "q": "Sie hörte den ___ Hund.",
   "options": [
    "bellenden",
    "gebellten",
    "bellen"
   ],
   "correct": 0,
   "why": "Partizip I + -en دوای den",
   "whyTr": "den'den sonra Partizip I + -en"
  }
 ],
 "B2::Partizip II als Adjektiv": [
  {
   "q": "Das ___ Fenster muss repariert werden.",
   "options": [
    "zerbrochene",
    "zerbrechende",
    "zerbrechen"
   ],
   "correct": 0,
   "why": "Partizip II وەک سیفەت: zerbrochen + e",
   "whyTr": "sıfat olarak Partizip II: zerbrochen + e"
  },
  {
   "q": "Er trägt ein ___ Hemd.",
   "options": [
    "gebügeltes",
    "bügelndes",
    "bügeln"
   ],
   "correct": 0,
   "why": "Partizip II: gebügelt + es",
   "whyTr": "Partizip II: gebügelt + es"
  },
  {
   "q": "Der ___ Kaffee ist stark.",
   "options": [
    "gekochte",
    "kochende",
    "kochen"
   ],
   "correct": 0,
   "why": "Partizip II: gekocht + e",
   "whyTr": "Partizip II: gekocht + e"
  }
 ],
 "B2::Nominalisierung": [
  {
   "q": "entscheiden → ___",
   "options": [
    "die Entscheidung",
    "das Entscheid",
    "der Entscheidung"
   ],
   "correct": 0,
   "why": "-ung ناو دروست دەکات (مێ)",
   "whyTr": "-ung isim yapar (dişil)"
  },
  {
   "q": "untersuchen → ___",
   "options": [
    "die Untersuchung",
    "das Untersuch",
    "der Untersucher"
   ],
   "correct": 0,
   "why": "-ung: die Untersuchung",
   "whyTr": "-ung: die Untersuchung"
  },
  {
   "q": "ankommen → ___",
   "options": [
    "die Ankunft",
    "die Ankommung",
    "der Ankommer"
   ],
   "correct": 0,
   "why": "ankommen → die Ankunft",
   "whyTr": "ankommen → die Ankunft"
  }
 ],
 "B2::Funktionsverbgefüge": [
  {
   "q": "Wir müssen eine Entscheidung ___.",
   "options": [
    "treffen",
    "machen",
    "setzen"
   ],
   "correct": 0,
   "why": "Funktionsverbgefüge: eine Entscheidung treffen",
   "whyTr": "Funktionsverbgefüge: eine Entscheidung treffen"
  },
  {
   "q": "Er nimmt Rücksicht ___ andere.",
   "options": [
    "auf",
    "für",
    "an"
   ],
   "correct": 0,
   "why": "Rücksicht nehmen auf + Akkusativ",
   "whyTr": "Rücksicht nehmen auf + Akkusativ"
  },
  {
   "q": "Der Plan kommt zur ___.",
   "options": [
    "Ausführung",
    "Ausführen",
    "Ausgeführt"
   ],
   "correct": 0,
   "why": "zur Ausführung kommen = جێبەجێ دەکرێت",
   "whyTr": "zur Ausführung kommen = uygulanır"
  }
 ],
 "B2::Verben/Adjektive/Nomen mit Präpositionen": [
  {
   "q": "Ich warte ___ den Bus.",
   "options": [
    "auf",
    "für",
    "an"
   ],
   "correct": 0,
   "why": "warten auf + Akkusativ",
   "whyTr": "warten auf + Akkusativ"
  },
  {
   "q": "Sie ist stolz ___ ihre Tochter.",
   "options": [
    "auf",
    "über",
    "für"
   ],
   "correct": 0,
   "why": "stolz sein auf + Akkusativ",
   "whyTr": "stolz sein auf + Akkusativ"
  },
  {
   "q": "Die Angst ___ der Prüfung ist groß.",
   "options": [
    "vor",
    "für",
    "von"
   ],
   "correct": 0,
   "why": "Angst vor + Dativ",
   "whyTr": "Angst vor + Dativ"
  }
 ],
 "B2::Wortbildung: Präfixe & Suffixe": [
  {
   "q": "Das Gegenteil von 'möglich' ist ___.",
   "options": [
    "unmöglich",
    "entmöglich",
    "vermöglich"
   ],
   "correct": 0,
   "why": "پێشگری un- = پێچەوانە",
   "whyTr": "un- ön eki = karşıt anlam"
  },
  {
   "q": "üben + -ung → ___",
   "options": [
    "die Übung",
    "das Übe",
    "der Üb"
   ],
   "correct": 0,
   "why": "-ung ناوی مێ دروست دەکات",
   "whyTr": "-ung dişil isim yapar"
  },
  {
   "q": "Freund + -lich → ___",
   "options": [
    "freundlich",
    "freundig",
    "freundisch"
   ],
   "correct": 0,
   "why": "-lich سیفەت دروست دەکات",
   "whyTr": "-lich sıfat yapar"
  }
 ],
 "C1::Konjunktiv I (komplex)": [
  {
   "q": "Der Minister erklärte, die Lage ___ stabil.",
   "options": [
    "sei",
    "ist",
    "wäre"
   ],
   "correct": 0,
   "why": "indirekte Rede: sein → sei",
   "whyTr": "dolaylı anlatım: sein → sei"
  },
  {
   "q": "Sie sagten, sie ___ das Problem gelöst. (Konj. I ≠ Indikativ)",
   "options": [
    "hätten",
    "haben",
    "hatten"
   ],
   "correct": 0,
   "why": "habe = وەک Indikativ، بۆیە hätten",
   "whyTr": "habe = Indikativ ile aynı, bu yüzden hätten"
  },
  {
   "q": "Er meinte, man ___ vorsichtig sein.",
   "options": [
    "solle",
    "soll",
    "sollte"
   ],
   "correct": 0,
   "why": "Konjunktiv I: er solle",
   "whyTr": "Konjunktiv I: er solle"
  }
 ],
 "C1::Kausale & konzessive Konnektoren (C1)": [
  {
   "q": "___ er sich bemühte, scheiterte er.",
   "options": [
    "Wenngleich",
    "Zumal",
    "Indem"
   ],
   "correct": 0,
   "why": "wenngleich = هەرچەندە (konzessiv)",
   "whyTr": "wenngleich = her ne kadar (konzessiv)"
  },
  {
   "q": "Er blieb zu Hause, ___ er ohnehin krank war.",
   "options": [
    "zumal",
    "obgleich",
    "indem"
   ],
   "correct": 0,
   "why": "zumal = بەتایبەت چونکە",
   "whyTr": "zumal = özellikle de çünkü"
  },
  {
   "q": "___ der hohen Kosten wurde das Projekt gebilligt.",
   "options": [
    "Ungeachtet",
    "Aufgrund",
    "Mittels"
   ],
   "correct": 0,
   "why": "ungeachtet + Genitiv = سەرەڕای",
   "whyTr": "ungeachtet + Genitiv = -e rağmen"
  }
 ],
 "C1::Partizipialkonstruktionen": [
  {
   "q": "Der ___ Mann war mein Onkel. (den Brief schreibt)",
   "options": [
    "den Brief schreibende",
    "den Brief geschriebene",
    "den Brief schreiben"
   ],
   "correct": 0,
   "why": "Partizip I = کاری بەردەوام",
   "whyTr": "Partizip I = süren eylem"
  },
  {
   "q": "Das ___ Buch liegt auf dem Tisch. (vom Autor signiert)",
   "options": [
    "vom Autor signierte",
    "vom Autor signierende",
    "signieren"
   ],
   "correct": 0,
   "why": "Partizip II = تەواوبوو",
   "whyTr": "Partizip II = tamamlanmış"
  },
  {
   "q": "Der noch zu ___ Vertrag liegt vor. (unterschreiben)",
   "options": [
    "unterschreibende",
    "unterschriebene",
    "unterschreiben"
   ],
   "correct": 0,
   "why": "zu + Partizip I = پێویستە بکرێت (passivisch)",
   "whyTr": "zu + Partizip I = yapılması gereken"
  }
 ],
 "C1::Erweiterte Infinitivkonstruktionen": [
  {
   "q": "Er beschloss, das Studium ___.",
   "options": [
    "abzubrechen",
    "abbrechen zu",
    "zu abbrechen"
   ],
   "correct": 0,
   "why": "ab + zu + brechen → abzubrechen",
   "whyTr": "ab + zu + brechen → abzubrechen"
  },
  {
   "q": "Es ist nicht leicht, ein Unternehmen ___ führen.",
   "options": [
    "zu",
    "um",
    "dass"
   ],
   "correct": 0,
   "why": "Es ist … zu + مەسدەر",
   "whyTr": "Es ist … zu + mastar"
  },
  {
   "q": "Sie ging, ohne sich ___ verabschieden.",
   "options": [
    "zu",
    "um",
    "dass"
   ],
   "correct": 0,
   "why": "ohne … zu",
   "whyTr": "ohne … zu"
  }
 ],
 "C1::Doppelter Infinitiv": [
  {
   "q": "Ich habe ihn kommen ___.",
   "options": [
    "sehen",
    "gesehen",
    "sah"
   ],
   "correct": 0,
   "why": "Ersatzinfinitiv: haben + مەسدەر + مەسدەر",
   "whyTr": "Ersatzinfinitiv: haben + mastar + mastar"
  },
  {
   "q": "Er hat nicht gehen ___.",
   "options": [
    "können",
    "gekonnt",
    "kann"
   ],
   "correct": 0,
   "why": "Modalverb Perfekt: hat … gehen können",
   "whyTr": "Modal fiil Perfekt: hat … gehen können"
  },
  {
   "q": "Ich weiß, dass er hat kommen ___.",
   "options": [
    "wollen",
    "gewollt",
    "will"
   ],
   "correct": 0,
   "why": "ڕستەی لاوەکی: hat kommen wollen",
   "whyTr": "yan cümle: hat kommen wollen"
  }
 ],
 "C1::Nominalisierungsstil": [
  {
   "q": "'Weil sie krank war' → ___ ihrer Krankheit",
   "options": [
    "Wegen",
    "Obwohl",
    "Damit"
   ],
   "correct": 0,
   "why": "nominal: wegen + Genitiv",
   "whyTr": "nominal: wegen + Genitiv"
  },
  {
   "q": "'nachdem er angekommen war' → ___ seiner Ankunft",
   "options": [
    "Nach",
    "Vor",
    "Seit"
   ],
   "correct": 0,
   "why": "nach + Dativ: Nach seiner Ankunft",
   "whyTr": "nach + Dativ: Nach seiner Ankunft"
  },
  {
   "q": "'indem man trainiert' → ___ Training",
   "options": [
    "durch",
    "trotz",
    "statt"
   ],
   "correct": 0,
   "why": "durch + Akkusativ = ڕێگا",
   "whyTr": "durch + Akkusativ = yöntem"
  }
 ],
 "C1::Gehobene Schriftsprache": [
  {
   "q": "Gehoben für 'anfangen': ___",
   "options": [
    "beginnen",
    "starten",
    "losgehen"
   ],
   "correct": 0,
   "why": "beginnen = بەرزتر لە anfangen",
   "whyTr": "beginnen = anfangen'dan daha resmi"
  },
  {
   "q": "Gehoben für 'sagen': ___",
   "options": [
    "äußern",
    "quatschen",
    "labern"
   ],
   "correct": 0,
   "why": "äußern = ڕەسمی",
   "whyTr": "äußern = resmi dil"
  },
  {
   "q": "Gehoben: 'Das ist ___ Interesse.' (von großem)",
   "options": [
    "von großem",
    "mit großem",
    "für großes"
   ],
   "correct": 0,
   "why": "von + Dativ بۆ سیفەت",
   "whyTr": "von + Dativ nitelik için"
  }
 ],
 "C1::Modalpartikeln": [
  {
   "q": "Komm ___ mal her! (نەرمکردنی فەرمان / yumuşatma)",
   "options": [
    "doch",
    "aber",
    "denn"
   ],
   "correct": 0,
   "why": "doch/mal فەرمان نەرم دەکەن",
   "whyTr": "doch/mal emri yumuşatır"
  },
  {
   "q": "Wie heißt du ___? (بیرخستنەوە / hatırlatma)",
   "options": [
    "noch mal",
    "denn",
    "eben"
   ],
   "correct": 0,
   "why": "noch mal/eben = دووبارە",
   "whyTr": "noch mal/eben = tekrar"
  },
  {
   "q": "Das ist ___ nicht schlimm! (دڵنیاکردنەوە / rahatlatma)",
   "options": [
    "ja",
    "denn",
    "doch"
   ],
   "correct": 0,
   "why": "ja = شتێکی ئاشکرا",
   "whyTr": "ja = bilinen şey"
  }
 ],
 "C2::Komplexe Satzgefüge": [
  {
   "q": "Der Mann, ___ ich gestern geholfen habe, dankte mir.",
   "options": [
    "dem",
    "den",
    "der"
   ],
   "correct": 0,
   "why": "helfen + Dativ → dem (ڕستەی لاوەکیی ناوخۆیی)",
   "whyTr": "helfen + Dativ → dem (iç içe yan cümle)"
  },
  {
   "q": "Obwohl er wusste, ___ es gefährlich war, ging er.",
   "options": [
    "dass",
    "ob",
    "weil"
   ],
   "correct": 0,
   "why": "wusste, dass … = ڕاستی",
   "whyTr": "wusste, dass … = olgu"
  },
  {
   "q": "Wer nicht kommt, ___ nichts erfahren.",
   "options": [
    "wird",
    "wurde",
    "wirst"
   ],
   "correct": 0,
   "why": "Wer … wird …",
   "whyTr": "Wer … wird …"
  }
 ],
 "C2::Negationsstrukturen (C2)": [
  {
   "q": "Das ist nicht ___ schlecht. (کەم نییە / fena değil)",
   "options": [
    "gerade",
    "kein",
    "nie"
   ],
   "correct": 0,
   "why": "nicht gerade = زۆر ... نییە",
   "whyTr": "nicht gerade = pek değil"
  },
  {
   "q": "Er kommt ___ nicht. (هەرگیز / asla)",
   "options": [
    "niemals",
    "nirgends",
    "keiner"
   ],
   "correct": 0,
   "why": "niemals = هەرگیز",
   "whyTr": "niemals = asla"
  },
  {
   "q": "Das ist ___ unwichtig. (litotes)",
   "options": [
    "nicht",
    "nie",
    "kein"
   ],
   "correct": 0,
   "why": "nicht unwichtig = گرنگە",
   "whyTr": "nicht unwichtig = önemli (litotes)"
  }
 ],
 "C2::Register & Stilebenen": [
  {
   "q": "Formell: 'Ich ___ Ihnen mitteilen, dass …'",
   "options": [
    "möchte",
    "will",
    "muss"
   ],
   "correct": 0,
   "why": "möchte = ڕەسمی و نەرم",
   "whyTr": "möchte = resmi ve kibar"
  },
  {
   "q": "Umgangssprachlich für 'sehr gut': ___",
   "options": [
    "klasse",
    "vorzüglich",
    "ausgezeichnet"
   ],
   "correct": 0,
   "why": "klasse = ڕۆژانە",
   "whyTr": "klasse = günlük dil"
  },
  {
   "q": "Offizieller Brief: '___ Grüße'",
   "options": [
    "Mit freundlichen",
    "Viele liebe",
    "Tschüss und"
   ],
   "correct": 0,
   "why": "Mit freundlichen Grüßen = ڕەسمی",
   "whyTr": "Mit freundlichen Grüßen = resmi"
  }
 ],
 "C2::Stilmittel": [
  {
   "q": "'Er ist stark wie ein Löwe.' ist ein ___.",
   "options": [
    "Vergleich",
    "Reim",
    "Oxymoron"
   ],
   "correct": 0,
   "why": "wie = بەراورد",
   "whyTr": "wie = karşılaştırma"
  },
  {
   "q": "'Eile mit Weile' ist ein ___.",
   "options": [
    "Oxymoron",
    "Vergleich",
    "Reim"
   ],
   "correct": 0,
   "why": "دوو پێچەوانە = Oxymoron",
   "whyTr": "iki karşıt = Oxymoron"
  },
  {
   "q": "Wiederholung am Satzanfang heißt ___.",
   "options": [
    "Anapher",
    "Metapher",
    "Ironie"
   ],
   "correct": 0,
   "why": "Anapher = دووبارەبوونەوە لە سەرەتا",
   "whyTr": "Anapher = başta tekrar"
  }
 ],
 "C2::Kollokationen": [
  {
   "q": "eine Entscheidung ___",
   "options": [
    "treffen",
    "machen",
    "setzen"
   ],
   "correct": 0,
   "why": "Kollokation: Entscheidung treffen",
   "whyTr": "Kollokasyon: Entscheidung treffen"
  },
  {
   "q": "einen Vortrag ___",
   "options": [
    "halten",
    "machen",
    "nehmen"
   ],
   "correct": 0,
   "why": "Vortrag halten",
   "whyTr": "Vortrag halten"
  },
  {
   "q": "Verantwortung ___",
   "options": [
    "übernehmen",
    "nehmen an",
    "machen"
   ],
   "correct": 0,
   "why": "Verantwortung übernehmen",
   "whyTr": "Verantwortung übernehmen"
  }
 ],
 "C2::Redewendungen & Sprichwörter": [
  {
   "q": "'Den Nagel auf den Kopf treffen' bedeutet: ___",
   "options": [
    "etwas genau richtig sagen",
    "wütend sein",
    "Handwerker sein"
   ],
   "correct": 0,
   "why": "= ڕاست و دروست دەربڕین",
   "whyTr": "= tam isabet söylemek"
  },
  {
   "q": "'Das ist nicht mein Bier' heißt: ___",
   "options": [
    "Das geht mich nichts an",
    "Ich trinke nicht",
    "Ich mag Bier"
   ],
   "correct": 0,
   "why": "= پەیوەندی بە منەوە نییە",
   "whyTr": "= beni ilgilendirmez"
  },
  {
   "q": "'Ich habe die Nase voll' bedeutet: ___",
   "options": [
    "Ich habe genug",
    "Ich bin krank",
    "Ich rieche etwas"
   ],
   "correct": 0,
   "why": "= بێزارم",
   "whyTr": "= bıktım"
  }
 ],
 "C2::Dialekte & Varietäten": [
  {
   "q": "'Grüß Gott' ist typisch für ___.",
   "options": [
    "Süddeutschland / Österreich",
    "Norddeutschland",
    "Berlin"
   ],
   "correct": 0,
   "why": "باشووری ئەڵمانیا و نەمسا",
   "whyTr": "Güney Almanya / Avusturya"
  },
  {
   "q": "'Moin' sagt man vor allem in ___.",
   "options": [
    "Norddeutschland",
    "Bayern",
    "Wien"
   ],
   "correct": 0,
   "why": "باکووری ئەڵمانیا",
   "whyTr": "Kuzey Almanya"
  },
  {
   "q": "'Servus' ist ein ___ Gruß.",
   "options": [
    "süddeutscher/österreichischer",
    "norddeutscher",
    "schweizer"
   ],
   "correct": 0,
   "why": "باشوور و نەمسا",
   "whyTr": "Güney/Avusturya"
  }
 ],
 "C2::Historisches Deutsch": [
  {
   "q": "Das Mittelhochdeutsche wurde etwa bis ___ gesprochen.",
   "options": [
    "1350",
    "1850",
    "1950"
   ],
   "correct": 0,
   "why": "ناوەڕاستی سەدەی ١٤",
   "whyTr": "14. yüzyıl ortası"
  },
  {
   "q": "Martin Luther prägte die ___.",
   "options": [
    "neuhochdeutsche Schriftsprache",
    "Dialekte",
    "Umgangssprache"
   ],
   "correct": 0,
   "why": "زمانی نووسینی ئەڵمانیی نوێ",
   "whyTr": "Yeni Yüksek Almanca yazı dili"
  },
  {
   "q": "Die Rechtschreibreform war im Jahr ___.",
   "options": [
    "1996",
    "1896",
    "1796"
   ],
   "correct": 0,
   "why": "چاکسازی ڕێنووس ١٩٩٦",
   "whyTr": "Yazım reformu 1996"
  }
 ]
};
