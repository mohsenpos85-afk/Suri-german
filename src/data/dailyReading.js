// Short reading passages for the daily plan (Leseverstehen). 4 per level; each has 3 multiple-choice questions.
// q = question, o = options, a = index of the correct option.
const P = (title, text, qs) => ({ title, text, qs: qs.map(([q, o, a]) => ({ q, o, a })) });

export const DAILY_READING = {
  A1: [
    P("Mein Tag", "Ich heiße Ali. Ich stehe um sieben Uhr auf. Dann frühstücke ich: Ich esse Brot und trinke Tee. Um acht Uhr gehe ich zur Arbeit. Ich arbeite bis vier Uhr. Am Abend koche ich und sehe fern.", [
      ["Wann steht Ali auf?", ["Um sechs Uhr", "Um sieben Uhr", "Um acht Uhr"], 1],
      ["Was trinkt Ali zum Frühstück?", ["Kaffee", "Wasser", "Tee"], 2],
      ["Was macht Ali am Abend?", ["Er arbeitet", "Er kocht und sieht fern", "Er geht einkaufen"], 1],
    ]),
    P("Die Familie", "Das ist meine Familie. Mein Vater heißt Karim und meine Mutter heißt Laila. Ich habe eine Schwester und einen Bruder. Meine Schwester ist zehn Jahre alt. Mein Bruder ist sechzehn. Wir wohnen in einer kleinen Wohnung.", [
      ["Wie heißt die Mutter?", ["Laila", "Karim", "Anna"], 0],
      ["Wie alt ist die Schwester?", ["Sechzehn", "Zehn", "Zwölf"], 1],
      ["Wo wohnt die Familie?", ["In einem Haus", "In einer kleinen Wohnung", "Bei den Großeltern"], 1],
    ]),
    P("Im Supermarkt", "Am Samstag gehe ich in den Supermarkt. Ich kaufe Milch, Eier, Äpfel und Brot. Die Milch kostet einen Euro. Die Äpfel sind heute billig. Ich bezahle mit Karte und gehe nach Hause.", [
      ["Wann geht die Person einkaufen?", ["Am Samstag", "Am Sonntag", "Am Freitag"], 0],
      ["Was kostet einen Euro?", ["Das Brot", "Die Milch", "Die Eier"], 1],
      ["Wie bezahlt die Person?", ["Bar", "Mit Karte", "Mit dem Handy"], 1],
    ]),
    P("Das Wetter", "Heute ist das Wetter schön. Die Sonne scheint und es sind 22 Grad. Morgen regnet es und es wird kälter, nur 14 Grad. Am Wochenende ist es wieder warm. Dann machen wir ein Picknick im Park.", [
      ["Wie ist das Wetter heute?", ["Es regnet", "Die Sonne scheint", "Es ist kalt"], 1],
      ["Wie warm ist es morgen?", ["22 Grad", "14 Grad", "30 Grad"], 1],
      ["Was machen sie am Wochenende?", ["Ein Picknick", "Einen Ausflug ans Meer", "Sie bleiben zu Hause"], 0],
    ]),
  ],
  A2: [
    P("Ein neuer Job", "Seit drei Wochen arbeite ich in einer Bäckerei. Die Arbeit beginnt schon um fünf Uhr morgens, deshalb gehe ich früh ins Bett. Meine Kollegen sind nett und helfen mir viel. Nur das Wochenende ist manchmal anstrengend, weil dann viele Kunden kommen.", [
      ["Seit wann arbeitet die Person in der Bäckerei?", ["Seit drei Tagen", "Seit drei Wochen", "Seit drei Monaten"], 1],
      ["Warum geht sie früh ins Bett?", ["Sie ist krank", "Die Arbeit beginnt sehr früh", "Sie hat keinen Fernseher"], 1],
      ["Wann ist die Arbeit manchmal anstrengend?", ["Am Wochenende", "Am Montag", "Am Abend"], 0],
    ]),
    P("Wohnungssuche", "Wir suchen eine neue Wohnung, denn unsere jetzige ist zu klein. Sie soll drei Zimmer haben und nicht mehr als 900 Euro kosten. Gestern haben wir eine Wohnung besichtigt. Sie war schön, aber leider zu weit vom Bahnhof entfernt.", [
      ["Warum suchen sie eine neue Wohnung?", ["Die Miete ist zu hoch", "Die alte Wohnung ist zu klein", "Sie ziehen in eine andere Stadt"], 1],
      ["Wie viel darf die Wohnung höchstens kosten?", ["600 Euro", "900 Euro", "1200 Euro"], 1],
      ["Was war das Problem bei der besichtigten Wohnung?", ["Sie war zu klein", "Sie war zu teuer", "Sie war zu weit vom Bahnhof"], 2],
    ]),
    P("Beim Arzt", "Mein Sohn hat seit zwei Tagen Fieber und Halsschmerzen. Deshalb sind wir heute zum Arzt gegangen. Der Arzt hat ihn untersucht und gesagt, dass es eine Erkältung ist. Mein Sohn muss viel Tee trinken und drei Tage im Bett bleiben.", [
      ["Was hat der Sohn?", ["Bauchschmerzen", "Fieber und Halsschmerzen", "Kopfschmerzen"], 1],
      ["Was sagt der Arzt?", ["Es ist eine Erkältung", "Es ist eine Grippe", "Er ist gesund"], 0],
      ["Was muss der Sohn tun?", ["Zur Schule gehen", "Viel Tee trinken und im Bett bleiben", "Tabletten nehmen und Sport machen"], 1],
    ]),
    P("Der Deutschkurs", "Jeden Dienstag und Donnerstag besuche ich einen Deutschkurs. Wir sind zwölf Teilnehmer aus acht Ländern. Die Lehrerin erklärt die Grammatik sehr gut. Nach dem Unterricht üben wir oft im Café zusammen, weil wir schneller sprechen lernen wollen.", [
      ["Wann findet der Kurs statt?", ["Montags und mittwochs", "Dienstags und donnerstags", "Jeden Tag"], 1],
      ["Wie viele Teilnehmer gibt es?", ["Acht", "Zwölf", "Zwanzig"], 1],
      ["Was machen sie nach dem Unterricht?", ["Sie gehen nach Hause", "Sie üben zusammen im Café", "Sie schreiben einen Test"], 1],
    ]),
  ],
  B1: [
    P("Homeoffice", "Seit der Pandemie arbeiten viele Menschen zumindest teilweise von zu Hause aus. Der größte Vorteil ist, dass man keine Zeit im Stau oder in der Bahn verliert. Allerdings berichten manche Beschäftigte, dass ihnen der Kontakt zu den Kollegen fehlt und dass sie abends schlechter abschalten können.", [
      ["Was ist ein Vorteil des Homeoffice?", ["Höheres Gehalt", "Man spart die Fahrzeit", "Mehr Kontakt zu Kollegen"], 1],
      ["Was vermissen manche Beschäftigte?", ["Den Kontakt zu Kollegen", "Einen Computer", "Ihr Gehalt"], 0],
      ["Welches Problem wird noch genannt?", ["Abends schlechter abschalten", "Zu wenig Arbeit", "Zu laute Nachbarn"], 0],
    ]),
    P("Mülltrennung", "In Deutschland wird der Müll nach strengen Regeln getrennt. Es gibt Tonnen für Papier, Bioabfälle, Verpackungen und Restmüll. Glas wirft man in spezielle Container. Wer den Müll falsch sortiert, muss mit Beschwerden der Nachbarn oder sogar mit einer Verwarnung der Hausverwaltung rechnen.", [
      ["Wohin kommt Glas?", ["In die Papiertonne", "In spezielle Container", "In den Restmüll"], 1],
      ["Was kann passieren, wenn man falsch trennt?", ["Man bekommt Geld zurück", "Die Nachbarn beschweren sich", "Nichts"], 1],
      ["Wie wird der Müll getrennt?", ["Gar nicht", "Nach strengen Regeln", "Nur nach Gewicht"], 1],
    ]),
    P("Ehrenamt", "Etwa jeder dritte Deutsche engagiert sich ehrenamtlich, zum Beispiel in Sportvereinen, bei der Feuerwehr oder in der Flüchtlingshilfe. Viele sagen, dass sie dadurch neue Freunde finden und das Gefühl haben, etwas Sinnvolles zu tun. Das Ehrenamt wird nicht bezahlt, aber es wird von der Gesellschaft sehr geschätzt.", [
      ["Wie viele Deutsche engagieren sich ehrenamtlich?", ["Etwa jeder Dritte", "Etwa jeder Zehnte", "Fast alle"], 0],
      ["Was nennen viele als Vorteil?", ["Gutes Gehalt", "Neue Freunde und Sinn", "Kostenlose Reisen"], 1],
      ["Wie ist die Arbeit im Ehrenamt?", ["Gut bezahlt", "Nicht bezahlt, aber geschätzt", "Verboten"], 1],
    ]),
    P("Radfahren in der Stadt", "Immer mehr Städte bauen neue Radwege, damit die Menschen das Auto öfter stehen lassen. Das ist gut für die Umwelt und für die Gesundheit. Trotzdem klagen viele Radfahrer, dass die Wege oft zu schmal sind und von parkenden Autos blockiert werden.", [
      ["Warum bauen Städte Radwege?", ["Damit weniger Auto gefahren wird", "Weil Fahrräder billig sind", "Wegen der Touristen"], 0],
      ["Was ist ein Vorteil des Radfahrens?", ["Es ist gut für Umwelt und Gesundheit", "Es ist schneller als die Bahn", "Es ist erlaubt überall"], 0],
      ["Was kritisieren Radfahrer?", ["Zu viele Ampeln", "Schmale, blockierte Wege", "Zu hohe Preise"], 1],
    ]),
  ],
  B2: [
    P("Fachkräftemangel", "Deutschland leidet unter einem Mangel an Fachkräften, vor allem in der Pflege, im Handwerk und in der IT-Branche. Um dem entgegenzuwirken, hat die Bundesregierung die Regeln für die Einwanderung gelockert. Kritiker bemängeln jedoch, dass die Anerkennung ausländischer Abschlüsse nach wie vor zu lange dauert.", [
      ["In welchen Bereichen fehlen besonders Fachkräfte?", ["Pflege, Handwerk und IT", "Handel und Tourismus", "Landwirtschaft und Verkehr"], 0],
      ["Was hat die Regierung getan?", ["Die Löhne erhöht", "Die Einwanderungsregeln gelockert", "Die Ausbildung verkürzt"], 1],
      ["Was kritisieren manche?", ["Die Anerkennung der Abschlüsse dauert zu lange", "Es kommen zu viele Menschen", "Die Löhne sind zu hoch"], 0],
    ]),
    P("Digitale Bildung", "Während der Schulschließungen zeigte sich, dass viele Schulen technisch schlecht ausgestattet waren. Inzwischen fließen Milliarden in Tablets und schnelles Internet. Experten warnen allerdings, dass Technik allein nicht genügt: Lehrkräfte müssen weitergebildet werden, damit digitale Medien den Unterricht tatsächlich verbessern.", [
      ["Was zeigte sich während der Schulschließungen?", ["Die Schulen waren technisch schlecht ausgestattet", "Die Schüler lernten schneller", "Es gab zu viele Lehrer"], 0],
      ["Wofür wird inzwischen viel Geld ausgegeben?", ["Neue Schulgebäude", "Tablets und schnelles Internet", "Höhere Lehrergehälter"], 1],
      ["Was fordern die Experten zusätzlich?", ["Weniger Hausaufgaben", "Fortbildung der Lehrkräfte", "Mehr Prüfungen"], 1],
    ]),
    P("Mieten in Großstädten", "In Großstädten wie München oder Hamburg sind die Mieten in den letzten zehn Jahren stark gestiegen. Viele Familien können sich die Innenstadt nicht mehr leisten und ziehen ins Umland. Die Politik versucht, mit einer Mietpreisbremse gegenzusteuern, doch deren Wirkung ist umstritten.", [
      ["Was ist in den Großstädten passiert?", ["Die Mieten sind stark gestiegen", "Die Mieten sind gesunken", "Es gibt mehr Wohnungen als Mieter"], 0],
      ["Wohin ziehen viele Familien?", ["Ins Ausland", "Ins Umland", "In die Innenstadt"], 1],
      ["Wie wird die Mietpreisbremse beurteilt?", ["Alle finden sie gut", "Ihre Wirkung ist umstritten", "Sie wurde abgeschafft"], 1],
    ]),
    P("Künstliche Intelligenz im Alltag", "Sprachassistenten, Übersetzungsprogramme und Navigationssysteme basieren längst auf künstlicher Intelligenz. Viele Menschen nutzen sie, ohne darüber nachzudenken. Datenschützer weisen darauf hin, dass dabei große Mengen persönlicher Daten anfallen, und fordern klare Regeln, wer diese Daten speichern und verwenden darf.", [
      ["Wofür wird künstliche Intelligenz bereits genutzt?", ["Nur in Fabriken", "Z. B. Sprachassistenten und Navigation", "Nur in der Medizin"], 1],
      ["Wie nutzen viele Menschen diese Technik?", ["Sehr bewusst", "Ohne darüber nachzudenken", "Gar nicht"], 1],
      ["Was fordern Datenschützer?", ["Klare Regeln für Daten", "Ein Verbot von Handys", "Mehr Werbung"], 0],
    ]),
  ],
  C1: [
    P("Work-Life-Balance", "Die Debatte um die Vier-Tage-Woche hat in den vergangenen Jahren erheblich an Dynamik gewonnen. Befürworter verweisen auf Pilotprojekte, in denen Beschäftigte bei gleichem Lohn weniger arbeiteten und dennoch ähnlich produktiv blieben. Skeptiker geben jedoch zu bedenken, dass sich dieses Modell nicht ohne Weiteres auf Branchen übertragen lässt, in denen ständige Präsenz erforderlich ist.", [
      ["Worauf berufen sich die Befürworter?", ["Auf Umfragen von Arbeitgebern", "Auf Pilotprojekte mit ähnlicher Produktivität", "Auf gesetzliche Vorgaben"], 1],
      ["Was bleibt in den Pilotprojekten gleich?", ["Der Lohn", "Die Arbeitszeit", "Die Zahl der Beschäftigten"], 0],
      ["Welchen Einwand erheben Skeptiker?", ["Das Modell passt nicht überall", "Die Beschäftigten wollen mehr arbeiten", "Es ist zu teuer für Beschäftigte"], 0],
    ]),
    P("Energiewende", "Der Ausbau erneuerbarer Energien schreitet voran, doch der Netzausbau hinkt hinterher. Strom aus Windkraft im Norden kann häufig nicht in die Industriezentren im Süden transportiert werden, weil die erforderlichen Leitungen fehlen. Zudem verzögern langwierige Genehmigungsverfahren und Bürgerproteste zahlreiche Projekte.", [
      ["Wo liegt das Hauptproblem?", ["Zu wenig Windräder", "Der Netzausbau kommt nicht hinterher", "Zu hohe Strompreise"], 1],
      ["Warum kann Windstrom nicht überall genutzt werden?", ["Leitungen fehlen", "Er ist zu teuer", "Er ist unsicher"], 0],
      ["Was verzögert die Projekte außerdem?", ["Fehlende Fachkräfte", "Genehmigungsverfahren und Proteste", "Schlechtes Wetter"], 1],
    ]),
    P("Lebenslanges Lernen", "In einer Arbeitswelt, die sich ständig wandelt, genügt eine einmal erworbene Ausbildung kaum noch. Arbeitgeber erwarten zunehmend, dass Beschäftigte sich kontinuierlich weiterbilden. Gewerkschaften fordern deshalb einen Rechtsanspruch auf Bildungsfreistellung, damit Weiterbildung nicht allein in der Freizeit stattfinden muss.", [
      ["Was gilt für Ausbildungen heute?", ["Sie reichen oft nicht mehr dauerhaft aus", "Sie werden abgeschafft", "Sie sind kostenlos"], 0],
      ["Was erwarten Arbeitgeber?", ["Weniger Urlaub", "Kontinuierliche Weiterbildung", "Mehr Überstunden"], 1],
      ["Was fordern die Gewerkschaften?", ["Mehr Lohn", "Einen Anspruch auf Bildungsfreistellung", "Kürzere Ausbildungen"], 1],
    ]),
    P("Stadtflucht", "Die Pandemie hat bei vielen den Wunsch geweckt, das Leben in der Großstadt gegen ein ruhigeres Dasein auf dem Land einzutauschen. Dank flexibler Arbeitsmodelle ist das inzwischen vielfach machbar. Dennoch warnen Experten, dass der Zuzug die Preise auf dem Land in die Höhe treibt und die dortige Infrastruktur an ihre Grenzen bringt.", [
      ["Was hat die Pandemie bei vielen ausgelöst?", ["Den Wunsch nach Landleben", "Angst vor Reisen", "Mehr Interesse an Großstädten"], 0],
      ["Was macht den Umzug möglich?", ["Flexible Arbeitsmodelle", "Niedrige Zinsen", "Staatliche Prämien"], 0],
      ["Welche Folge befürchten Experten?", ["Leere Dörfer", "Steigende Preise und überlastete Infrastruktur", "Mehr Arbeitslosigkeit"], 1],
    ]),
  ],
  C2: [
    P("Sprache und Identität", "Sprache ist weit mehr als ein bloßes Verständigungsmittel; sie prägt, wie Menschen die Welt wahrnehmen und sich selbst verorten. Sprachwissenschaftler beobachten, dass mit dem Verschwinden einer Sprache nicht nur Vokabular, sondern auch ein spezifisches Wissen über Natur, Geschichte und Gemeinschaft verloren geht. Initiativen zur Revitalisierung bedrohter Sprachen gewinnen daher zunehmend an Bedeutung.", [
      ["Wie wird Sprache in dem Text charakterisiert?", ["Als reines Verständigungsmittel", "Als prägend für Wahrnehmung und Selbstverständnis", "Als veraltet"], 1],
      ["Was geht mit einer Sprache verloren?", ["Nur Wörter", "Auch spezifisches Wissen", "Nur die Grammatik"], 1],
      ["Was nimmt an Bedeutung zu?", ["Initiativen zur Rettung bedrohter Sprachen", "Der Verzicht auf Fremdsprachen", "Das Verbot von Dialekten"], 0],
    ]),
    P("Wissenschaftskommunikation", "Angesichts komplexer Krisen wächst die Erwartung, dass Forschende ihre Erkenntnisse verständlich vermitteln. Zugleich birgt die Vereinfachung die Gefahr, dass Unsicherheiten verschwiegen werden und das Vertrauen schwindet, sobald sich vorläufige Befunde als revidierungsbedürftig erweisen. Eine redliche Kommunikation müsste deshalb Unsicherheit ausdrücklich benennen, statt sie zu kaschieren.", [
      ["Was wird von Forschenden zunehmend erwartet?", ["Verständliche Vermittlung ihrer Erkenntnisse", "Weniger Veröffentlichungen", "Mehr Prognosen"], 0],
      ["Welche Gefahr birgt die Vereinfachung?", ["Zu hohe Kosten", "Verschwiegene Unsicherheiten und Vertrauensverlust", "Zu lange Texte"], 1],
      ["Was verlangt eine redliche Kommunikation?", ["Unsicherheit klar zu benennen", "Unsicherheit zu vermeiden", "Nur gesicherte Fakten zu nennen"], 0],
    ]),
    P("Urbanisierung", "Bis zur Mitte des Jahrhunderts werden voraussichtlich zwei Drittel der Weltbevölkerung in Städten leben. Dies stellt die Stadtplanung vor die Herausforderung, bezahlbaren Wohnraum zu schaffen und zugleich den ökologischen Fußabdruck zu verringern. Als vielversprechend gelten Konzepte der Nachverdichtung, die vorhandene Flächen effizienter nutzen, statt immer neue Gebiete zu erschließen.", [
      ["Was wird für die Zukunft erwartet?", ["Zwei Drittel der Menschen leben in Städten", "Die Städte schrumpfen", "Alle ziehen aufs Land"], 0],
      ["Welche doppelte Aufgabe hat die Stadtplanung?", ["Wohnraum schaffen und Umweltbelastung senken", "Straßen bauen und Parks schließen", "Steuern erhöhen und Wohnungen verkaufen"], 0],
      ["Was bedeutet Nachverdichtung hier?", ["Bestehende Flächen effizienter nutzen", "Neue Städte bauen", "Häuser abreißen"], 0],
    ]),
    P("Gedächtnis und Erinnerung", "Die Neurowissenschaft hat gezeigt, dass Erinnerungen keine unveränderlichen Aufzeichnungen sind, sondern bei jedem Abruf neu rekonstruiert werden. Dadurch können sie sich unmerklich verändern, was etwa die Zuverlässigkeit von Zeugenaussagen infrage stellt. Dass sich jemand an ein Ereignis lebhaft erinnert, garantiert folglich nicht, dass es sich tatsächlich so zugetragen hat.", [
      ["Was zeigt die Neurowissenschaft über Erinnerungen?", ["Sie sind unveränderlich", "Sie werden beim Abruf neu rekonstruiert", "Sie verschwinden nach einem Jahr"], 1],
      ["Was wird dadurch fraglich?", ["Die Zuverlässigkeit von Zeugenaussagen", "Die Wirkung von Medikamenten", "Die Dauer des Schlafs"], 0],
      ["Welche Schlussfolgerung zieht der Text?", ["Lebhafte Erinnerung beweist die Richtigkeit", "Lebhafte Erinnerung garantiert keine Richtigkeit", "Erinnerungen sind immer falsch"], 1],
    ]),
  ],
};
