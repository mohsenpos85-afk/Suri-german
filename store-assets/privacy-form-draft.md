# Data Safety / App Privacy — Arbeitsentwurf

Dieser Entwurf basiert auf dem aktuellen Code. Vor dem Absenden mit den tatsächlich aktivierten Diensten und Verträgen abgleichen.

## Erhobene/verarbeitete Daten

| Datentyp | Zweck | Optional | Weitergabe/Verarbeiter | Löschweg |
|---|---|---:|---|---|
| E-Mail-Adresse und Auth-Daten | Konto, Anmeldung | Nein bei Konto-Nutzung | Supabase | Profil → Konto löschen |
| Lernfortschritt, XP, Favoriten, Sprache | App-Funktion und Personalisierung | Ja | primär lokal; ggf. Supabase | App-Daten löschen / Konto löschen |
| Vom Nutzer eingegebene KI-Texte | KI-Funktionen | Ja | Anthropic über Server-Proxy | nicht erneut senden; Provider-Richtlinie prüfen |
| Dokumentbilder und Dokumentinhalt | Dokument erklären | Ja, ausdrückliche Einwilligung | Anthropic/USA über Server-Proxy | lokale „Letzte Scans“ löschen; Provider-Richtlinie prüfen |
| Absturz-/Diagnosedaten | Stabilität | Ja; nur bei gesetzter Sentry-DSN | Sentry | Sentry-Aufbewahrung konfigurieren |

## Google Play Data Safety
- Daten während der Übertragung verschlüsselt: Ja (HTTPS; Produktionskonfiguration prüfen).
- Kontolöschung verfügbar: Ja, in der App und über `/legal/account-deletion.html` dokumentiert.
- Werbung: Nein, sofern keine Werbe-SDKs ergänzt werden.
- Standort, Kontakte, Mikrofon: Nicht als native Berechtigung angefordert.
- Kamera: Nur für vom Nutzer gestartete Dokumentaufnahme.
- Dokumente können freiwillig sensible Daten enthalten; dies im Formular als Nutzerinhalt/Dateien deklarieren.

## Apple App Privacy
Voraussichtlich anzugeben:
- Contact Info → Email Address → App Functionality → linked to identity.
- User Content → Photos or Videos / Other User Content → App Functionality → optional, linked depending on server handling.
- Diagnostics → Crash Data → App Functionality → nur wenn Sentry aktiviert wird.

Nicht als Tracking verwenden. `sendDefaultPii` ist im Sentry-Setup deaktiviert.

## Offene Nachweise vor Einreichung
- Reale Supabase-Region, Aufbewahrung und Löschkaskade bestätigen.
- Anthropic-Vertrag/DPA, Region, Aufbewahrung und Trainingseinstellung bestätigen.
- Sentry nur nach Ergänzung der Datenschutzerklärung aktivieren.
- Finale Domain, Support-Adresse und Verantwortlichen-Daten einsetzen.