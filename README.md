# Zunft zu den Drei Königen

Frontend für die Zunft zu den Drei Königen in Zürich-Enge. Die App zeigt Übersicht, Kalender, Mitglieder und Kontakt, dazu die Zürcher Zünfte und die Umzugsroute am Sächsilüüte.

Es gibt kein Backend. Anmeldung, Profil und das Kontaktformular bleiben im Browser.

## Start

```bash
npm install
npm run dev
```

Die App läuft danach unter [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

```bash
npm run build    # Typecheck und Produktionsbuild
npm run preview  # gebauten Stand lokal ansehen
```

## Anmeldung

Auf dem Startbild gibt es zwei Wege hinein:

- **Login:** eine gültige E-Mail und ein Passwort mit mindestens 4 Zeichen. Es wird kein Konto geprüft.
- **Gästelogin:** öffnet die App als Gast.

Die Sitzung liegt in `sessionStorage` und gilt für den offenen Tab. Abmelden löscht sie.

## Seiten

- **Übersicht:** Kennzahlen, nächste Termine, Zunft News, Geschichte und die Karte zum Sächsilüüte. Ein Punkt auf der Karte zeigt Name, Wappen und Adresse der Zunft.
- **Zünfte:** alle 26 Zürcher Zünfte. Im Overlay stehen Zunfthaus, Adresse und eine Karte des Hauses.
- **Kalender:** anstehende Anlässe.
- **Mitglieder:** Verzeichnis und eigenes Profil. Änderungen bleiben in dieser Sitzung.
- **Kontakt:** Formular mit Bestätigung in der App. Es wird keine Nachricht verschickt.

## Karten

Beide Karten nutzen [OpenFreeMap](https://openfreemap.org/) (Stil Bright) über MapLibre. Dafür ist kein API-Schlüssel nötig. Die Umzugsroute folgt dem offiziellen Weg: Bürkliplatz, Bahnhofstrasse, Rudolf-Brun-Brücke, Limmatquai, Sechseläutenplatz.

## Technik

React 19, TypeScript und Vite. Die Daten der Zünfte, Termine und Mitglieder stehen in `src/guilds.ts` und `src/data.ts`.
