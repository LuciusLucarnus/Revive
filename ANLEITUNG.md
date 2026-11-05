# Revive-Website – Anleitung

## Was ist in diesem Ordner?

| Datei | Wofür |
|---|---|
| `daten.js` | **Alle Inhalte.** Nur diese Datei musst du normalerweise bearbeiten. |
| `index.html` | Startseite |
| `archiv.html` (Staffeln und Welt-Downloads), `events.html`, `presse.html`, `staffel.html`, `mitglieder.html`, `creator.html`, `regeln.html`, `faq.html`, `impressum.html` | Die Unterseiten. Kopfzeile, Menü und Fußzeile mit den rechtlichen Links werden auf jeder Seite automatisch gleich eingebaut. |
| `style.css`, `app.js` | Design und Technik |
| `bilder/`, `logos/` | Screenshots und Staffel-Logos |
| `og-bild.png` | Vorschaubild, wenn der Link in Discord geteilt wird |
| `.nojekyll` | Sorgt dafür, dass GitHub die Dateien unverändert ausliefert. Nicht löschen. |

Zum Testen: `index.html` doppelt anklicken, über das Menü kommst du auf alle Unterseiten. Die Staffel-Seiten laufen über `staffel.html#staffel-1`, `staffel.html#staffel-0` usw. – neue Staffeln aus `daten.js` funktionieren dort automatisch, du musst keine neue Datei anlegen.

## 0. Schriften (einmalig, 5 Minuten)

Die Seite nutzt die Schriften **VT323** (Pixel-Look) und **Exo 2**. Damit keine Daten an Google gehen (DSGVO), liegen sie lokal im Ordner `fonts/`:

1. Öffne gwfh.mranftl.com/fonts (google-webfonts-helper).
2. Suche **VT323**, wähle „regular“ und lade die `.woff2`-Datei herunter. Benenne sie in `vt323.woff2` um.
3. Suche **Exo 2**, wähle die Stärken 400 bis 800 (oder die Variable-Datei) und speichere die `.woff2` als `exo2.woff2`. Bei mehreren Dateien reicht die mit „700“.
4. Beide Dateien in den Ordner `fonts/` legen.

Ohne die Dateien funktioniert die Seite trotzdem, sieht dann aber weniger nach Pixel aus.

## 1. Inhalte eintragen

1. `daten.js` mit einem Texteditor öffnen (z. B. VS Code oder Notepad++).
2. Alles in `[[doppelten eckigen Klammern]]` durch echte Inhalte ersetzen. Die gelbe Leiste oben auf der Seite zählt, wie viele Platzhalter noch offen sind.
3. Die Bereiche in `daten.js`: `server` (Karte SERVER_STATUS.txt), `staffeln` (Archiv mit Geschichte, Welt-Download und `packs` pro Staffel), `presse` (Zeitungen/Sender und ihre Artikel – LIVE zeigt nur Artikel der laufenden Staffel; sobald eine Staffel auf „abgeschlossen“ steht, wandern ihre Artikel automatisch ins Presse-Archiv), `skins` (echte Skins, siehe Ordner `skins/`), `events` (Termine mit Datum, „Vorbei“/„Geplant“ erkennt die Seite selbst), `crew` und `teilnehmer` (erscheinen als Pixel-Figuren), `streamer`, `regeln`, `fragen`, `impressum`. Leere Listen `[]` blenden den Bereich aus.
4. Nordmark, Caldera, die Grenzmauer, das CNN und die UN-Idee stehen bei der Pilot-Staffel (Staffel 0). Die laufende Staffel 1 ist noch komplett Platzhalter.
5. Der erste Screenshot unter `bauten` einer Staffel wird automatisch zum Titelbild ihrer Archiv-Karte. Für echte Spielerköpfe kannst du bei `kopf` ein Bild eintragen, sonst wird ein Pixel-Gesicht aus dem Namen erzeugt.
6. `discord`: Trägst du in `config` einen Einladungslink ein, wird der grüne Knopf klickbar.
7. Wenn alles fertig ist: `entwurf: true` auf `entwurf: false` setzen.

Wichtig: Anführungszeichen und Kommas in `daten.js` nicht löschen. Wenn die Seite plötzlich leer ist, fehlt meistens ein Komma oder ein `"`.

## 2. Hochladen auf GitHub Pages

1. Neues **öffentliches** Repository mit dem Namen `revive` anlegen.
2. *Add file → Upload files* und den **Inhalt** dieses Ordners hineinziehen (nicht den Ordner selbst). Die Datei `.nojekyll` ist unsichtbar; falls sie fehlt, lege über *Add file → Create new file* eine leere Datei mit diesem Namen an.
3. *Settings → Pages → Branch: main / (root) → Save*.
4. Nach ein bis zwei Minuten läuft die Seite unter `https://DEINNAME.github.io/revive/`.
5. In `index.html` bei `og:image` `DEINNAME` durch deinen GitHub-Namen ersetzen, damit Discord das Vorschaubild zeigt.

## 3. Welt-Downloads (GitHub Releases)

GitHub nimmt im Repo keine Dateien über 100 MB an. Welten kommen deshalb in ein Release (bis 2 GB pro Datei):

1. Welt als ZIP packen, z. B. `revive-staffel-0.zip`.
2. Im Repo rechts auf *Releases → Create a new release*.
3. Tag: `staffel-0`, Titel: `Staffel 0 – Pilot`, ZIP unten in das Feld ziehen, *Publish release*.
4. Rechtsklick auf die ZIP-Datei im Release → *Link kopieren*.
5. In `daten.js` bei Staffel 0 unter `download` → `url` einfügen, dazu Größe und Minecraft-Version. Der Knopf „Welt herunterladen“ erscheint dann auf der Staffel-Karte im Archiv und auf der Staffel-Seite.

## 4. Neue Staffel anlegen

Den ganzen Block einer Staffel in `daten.js` kopieren (von `{` bis `},`), **oben** in die Liste einfügen und ausfüllen. Neue `id` vergeben, z. B. `"staffel-2"`. Bei der alten Staffel `status` auf `"abgeschlossen"` setzen.

## 5. Bevor du den Link teilst

- [ ] Keine Server-IP und keine echten Namen in `daten.js` (außer im Impressum)
- [ ] Nur Spieler, Skins und Kanäle, die zugestimmt haben
- [ ] Impressum und Datenschutz ausgefüllt und geprüft (die Texte sind Vorlagen, keine Rechtsberatung)
- [ ] `entwurf: false`
- [ ] Kein Minecraft-Logo verwendet

## Live-Serverstatus (optional)

Trägst du in `daten.js` bei `serverAdresse` eine Adresse ein, zeigt die Startseite den echten Status. Ohne Adresse gilt der Wert, den du bei `server.status` von Hand einträgst. Die Adresse ist dann aber im Quellcode für jeden lesbar. Da Revive auf Einladung läuft, ist sie standardmäßig leer.

## Artikel schreiben (Presse)

Jeder Artikel in `daten.js` unter `presse → artikel` hat `text` als Liste von Absätzen. Drei Abkürzungen:
- `"## Zwischentitel"` wird zur Zwischenüberschrift
- `"> „Zitat“"` wird als Zitat hervorgehoben
- `"- Punkt"` wird zur Aufzählung

Der erste Absatz erscheint als Vorschau, der Rest hinter „Ganzen Artikel lesen“. Bilder kommen nach `bilder/presse/` und werden bei `bilder: [...]` eingetragen. Der Kommentar hinter jedem Artikel schlägt passende Dateinamen vor. Das erste Bild ist das Titelbild, die weiteren erscheinen als Abb. 2, 3 … unter dem Text.
