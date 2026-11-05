/* =====================================================================
   REVIVE – Inhalte der Website
   ---------------------------------------------------------------------
   Hier pflegst du ALLES, was auf der Seite steht. Am HTML musst du
   nichts ändern.

   • Text in [[doppelten eckigen Klammern]] ist ein Platzhalter. Solange
     "entwurf: true" ist, wird er gelb markiert und unten gezählt.
   • Vor dem Veröffentlichen: entwurf auf false setzen.
   • Bilder in "bilder/", Logos in "logos/" – nur den Dateinamen
     eintragen, z. B. "bilder/nordmark.webp" (ohne "/" am Anfang!).
   ===================================================================== */

window.REVIVE = {

  config: {
    entwurf: true,
    // Discord-Einladung (optional). Leer = Knopf zeigt nur "Nur auf Einladung".
    discord: "",
    // Live-Status (optional). ACHTUNG: Die Adresse steht dann im Quellcode.
    serverAdresse: "",
    // Dein GitHub-Repo, z. B. "deinname/revive" – dann öffnet „Event erstellen“ direkt die Datei zum Einfügen.
    githubRepo: ""
  },

  projekt: {
    untertitel: "Minecraft Project",
    kurz: "Das deutsche Minecraft-Rollenspiel-Projekt: eine kleine, private Community, in der Staaten gegründet, Grenzen gezogen und Geschichten geschrieben werden.",
    fussText: "Story-getriebenes Survival-Rollenspiel. Jede Staffel eine neue Welt.",
    spruch: "// craft. survive. revive."
  },

  // Die Karte SERVER_STATUS.txt oben auf der Startseite
  server: {
    status: "online",                 // "online", "offline" oder "pause"
    version: "26.3",
    edition: "Java Edition",
    modus: "Survival + Rollenspiel",
    slots: "bis 40",                // GESCHÄTZT – eure Zielgröße, echte Zahl eintragen
    region: "Deutschland",          // GESCHÄTZT – prüfen
    hinweis: "Privater Server – Zugang nur per Einladung."
  },

  /* ------------------------------------------------------------------
     STAFFELN – neueste zuerst. Neue Staffel: Block kopieren, oben einfügen.
     ------------------------------------------------------------------ */
  staffeln: [
    {
      id: "staffel-1",
      nummer: 1,
      titel: "Erstes Licht",
      status: "laufend",               // "laufend" oder "abgeschlossen"
      zeitraum: "seit September 2026", // GESCHÄTZT – Start der Staffel prüfen
      farbe: "#10B981",
      logo: "",                         // z. B. "logos/staffel-1.webp"
      einleitung: "Nach der Testphase im Sommer startet Revive mit einer neuen Welt, neuen Staaten und neuen Geschichten.",
      // Noch leer, weil es noch nichts zu erzählen gibt. Format wie bei Staffel 0 unten.
      staaten: [],
      ereignisse: [],
      bauten: [],
      download: null,                   // laufende Staffel: Welt kommt nach Staffelende
      packs: []                         // z. B. { titel: "Resource Pack", version: "v1.0", groesse: "86 MB", url: "https://…" }
    },
    {
      id: "staffel-0",
      nummer: 0,
      titel: "Pilot",
      status: "abgeschlossen",
      zeitraum: "Juli bis August 2026",
      farbe: "#3B82F6",
      logo: "",
      einleitung: "Die Pilot-Staffel war eine Testphase von Juli bis August. Hier wurde Revive zum ersten Mal ausprobiert: Staaten wurden gegründet, Grenzen gezogen und der erste Nachrichtensender ging auf Sendung.",
      staaten: [
        { name: "Republik Caldera", text: "Republik mit der Hauptzentrale Caldera, dem Rückgrat der gemeinsamen Infrastruktur. Außenministerin: Selene Varr. Auf der politischen Karte in Dunkelblau." },
        { name: "Fürstentum Antiochia", text: "Von Kreuzfahrern aus dem Westen gegründet, mit Stützpunkt im Nordosten des Kontinents. Auf der Insel vor der Küste soll die Stadt Neu-Antiochia entstehen. Auf der Karte in Rot." },
        { name: "Nordmark", text: "Staat im Norden, dessen Grenzen schon standen, bevor er am 21. Juli offiziell seinen Namen bekam. Bekannt für die rund 387 Blöcke lange Grenzmauer zu Caldera." },
        { name: "Frostlingen", text: "Wenig bekannte Nation außerhalb der ersten Karten, Hellblau markiert. Verwickelt in den Heavy-Core-Konflikt mit Caldera und betreibt ein eigenes „Finanzamt“." },
        { name: "Die Gebiete von Schelly", text: "Territorium auf der ersten politischen Karte, in Orange markiert." }
      ],
      ereignisse: [
        { wann: "03.07.2026", titel: "Eröffnung von Revive", text: "Das CNN meldet sich mit einer Sonderausgabe: Ein geheimnisvoller Hüter an der Küste erwartet die ersten Siedler. Am selben Tag wird die erste Karte des Landes mit seinem großen Binnenmeer veröffentlicht." },
        { wann: "04.07.2026", titel: "Antiochia betritt das Land", text: "Das Fürstentum Antiochia errichtet seinen Stützpunkt im Nordosten. Auf einer Insel vor der Küste soll Neu-Antiochia entstehen." },
        { wann: "12.07.2026", titel: "Die erste politische Karte", text: "Antiochia, Caldera, die Gebiete von Schelly und Frostlingen sind die ersten bekannten Staaten des Kontinents." },
        { wann: "14.07.2026", titel: "Der Heavy-Core-Konflikt", text: "Ein Bürger Frostlingens soll einen Heavy Core gestohlen haben. Caldera beschlagnahmt ein Lunge-III-Buch und 26 Diamanten, Frostlingens Flagge wird verbrannt. Es folgen vorsichtige Friedensgespräche." },
        { wann: "19.07.2026", titel: "Schilder-Sabotage in der Hauptzentrale", text: "Frostlingen überzieht die Hauptzentrale Caldera mit Schildern: „Lucius, bezahl deine Steuern!!!“ Caldera spricht von Erpressung." },
        { wann: "21.07.2026", titel: "Nordmark bekommt seinen Namen", text: "Der Staat im Norden wird offiziell Nordmark. Gleichzeitig wächst entlang der Grenze zu Caldera die längste Mauer des Kontinents." },
        { wann: "Sommer 2026", titel: "Idee einer UN von Revive", text: "Unter den Staaten kommt die Idee einer gemeinsamen UN von Revive auf." }
      ],
      bauten: [
        { name: "Grenzmauer von Nordmark", text: "Rund 387 Blöcke lang, das längste zusammenhängende Bauwerk des Kontinents.", bild: "" },
        { name: "Hauptzentrale Caldera", text: "Zentrales Bauwerk und Rückgrat der Infrastruktur, Schauplatz der Schilder-Sabotage.", bild: "" },
        { name: "Der Markt in den Wolken", text: "Eine Mobfarm hunderte Blöcke über dem Meer, auf der ein Wandernder Händler mit zwei Lamas Stellung bezog.", bild: "" }
      ],
      download: { url: "[[Link zum GitHub-Release]]", groesse: "[[z. B. 850 MB]]", version: "1.21.x" },   // GESCHÄTZT – Größe und Link folgen vom PC
      packs: []
    }
  ],

  // Modpack, Resource Pack usw. (leer lassen [], wenn es keine gibt)
  /* ------------------------------------------------------------------
     PRESSE – Zeitungen und Sender auf dem Server und ihre Artikel.
     Der neueste Artikel steht oben (erste Stelle) und läuft als LIVE-Banner.
     staffel: zu welcher Staffel der Artikel gehört (id von oben)
     ------------------------------------------------------------------ */
  presse: {
    medien: [
      { id: "cnn", name: "Continental News Network", kurz: "CNN", farbe: "#B91C1C", text: "Berichterstattung aus den Ländern von Revive, mit Reporter L. Arnus und Kartograf A. Cartwright." },
      { id: "kreuzkurier", name: "Kreuzkurier", kurz: "Kreuzkurier", farbe: "#B45309", text: "Die zweite Zeitung auf Revive, mit Reporter K. Matsch." },
      { id: "caldera", name: "Staat Caldera", kurz: "Caldera", farbe: "#1E40AF", text: "Öffentliche Bekanntmachungen der Republik Caldera." }
    ],
    artikel: [
      { medium: "cnn", staffel: "staffel-0", datum: "21.07.2026", titel: "Neuer Staat erhält offiziell den Namen Nordmark", autor: "L. Arnus", rubrik: "Berichterstattung auf den Wegen von Nordmark", bilder: [],
        text: [
          "Die politische Landkarte des Kontinents hat Zuwachs erhalten. Nach mehreren Tagen des Bestehens wurde der bislang namenlose Staat im Norden nun offiziell unter dem Namen Nordmark ausgerufen.",
          "Bemerkenswert ist dabei, dass die Grenzen des Territoriums bereits seit einiger Zeit bestanden. Siedlungen wurden errichtet, Gebiete beansprucht und Verwaltungsstrukturen aufgebaut, lange bevor ein offizieller Name für das Land festgelegt wurde. Erst nach Beratungen der Staatsführung fiel die Entscheidung auf den Namen Nordmark.",
          "Beobachter sehen darin einen ungewöhnlichen, aber nicht einzigartigen Vorgang. Der anerkannte Kartograf und Topograf A. Cartwright erklärte hierzu:",
          "> „Normalerweise entsteht zunächst ein Name und anschließend ein Staat. In Nordmark verlief die Entwicklung genau andersherum. Die Grenzen waren bereits Realität, bevor das Land einen offiziellen Namen erhielt.“",
          "## Die längste Mauer des Kontinents",
          "Zusätzlich sorgt derzeit ein weiteres Bauprojekt für Aufmerksamkeit. Entlang der Grenze zu Caldera entsteht die bislang längste bekannte Konstruktion der Welt von Revive.",
          "Die sogenannte Grenzmauer von Nordmark stellt bereits jetzt das längste zusammenhängende Bauwerk des Kontinents dar. Arbeiter und Baumeister sind weiterhin mit der Fertigstellung beschäftigt.",
          "Die Verantwortlichen betonen, dass die Mauer in erster Linie der Grenzmarkierung und Verwaltung des Territoriums dienen soll. Dennoch wird das Bauwerk von vielen Bewohnern bereits als Symbol für die wachsende Bedeutung Nordmarks angesehen.",
          "Mit der offiziellen Namensgebung und dem Bau der gewaltigen Grenzanlage etabliert sich Nordmark zunehmend als feste Größe auf der politischen Karte von Revive. Welche Rolle der junge Staat künftig im Verhältnis zu seinen Nachbarn spielen wird, bleibt abzuwarten."
        ] },
      { medium: "caldera", staffel: "staffel-0", datum: "19.07.2026", titel: "Eilmeldung: Sabotage und Steuer-Wahnsinn in der Hauptzentrale Caldera!", untertitel: "Staat Frostlingen sorgt mit fragwürdigen Forderungen und Sachbeschädigung für Unruhe in der Region.", autor: "Staat Caldera", rubrik: "Öffentliche Bekanntmachung des Staates Caldera", bilder: ["bilder/presse/2026-07-19-eilmeldung-sabotage-und-steuer-wahnsinn-1.webp", "bilder/presse/2026-07-19-eilmeldung-sabotage-und-steuer-wahnsinn-2.webp"],   // Bilder: "bilder/presse/2026-07-19-eilmeldung-sabotage-und-steuer-wahnsinn-1.webp", "bilder/presse/2026-07-19-eilmeldung-sabotage-und-steuer-wahnsinn-2.webp"
        text: [
          "Die diplomatische Lage auf unserem Server ist eskaliert. Unsere Hauptzentrale Caldera, das Rückgrat unserer Infrastruktur, wurde in den letzten Stunden Ziel einer großangelegten Sabotage-Aktion, die weit über bloße Provokation hinausgeht.",
          "## Plakat-Flut statt Diplomatie",
          "Was als einfacher Grenzkonflikt begann, hat nun eine neue Ebene der Absurdität erreicht. Der benachbarte Staat Frostlingen hat unsere Hauptzentrale Caldera mit einer regelrechten Flut aus Eichenholzschildern überzogen. Die immer gleichen Forderungen prangen in den Gängen und verunstalten das zentrale Bauwerk massiv: „Lucius, bezahl deine Steuern!!!“",
          "## Ein illegaler Erpressungsversuch",
          "Die Forderungen des „Finanzamt-Frostlingen“ entbehren jeglicher rechtlicher Grundlage. Es gibt auf unserem Server keine Steuerpflicht gegenüber einem fremden Staat. Experten sind sich einig: Hierbei handelt es sich um einen reinen Erpressungsversuch, um Lucius und unsere Gemeinschaft unter Druck zu setzen.",
          "> „Das ist keine Politik, das ist reine Sabotage gegen Caldera“, kommentiert ein Anwohner frustriert.",
          "Die vollgestellten Gänge behindern nicht nur den freien Durchgang, sondern sind ein direkter Angriff auf die zentrale Infrastruktur, die wir alle gemeinsam nutzen.",
          "## Aufruf an die Bürgerschaft",
          "Wir fordern den Staat Frostlingen dazu auf, diese illegale Kampagne in der Hauptzentrale Caldera sofort zu beenden und die Schilder zu entfernen. Solche Taten haben auf unserem Server keinen Platz. Wir lassen uns nicht einschüchtern und fordern ein sofortiges Ende der diplomatischen Aggression!",
          "Bleiben Sie wachsam und melden Sie weitere Sabotageakte bitte direkt an die Administration."
        ] },
      { medium: "cnn", staffel: "staffel-0", datum: "14.07.2026", titel: "Spannungen zwischen Caldera und Frostlingen erreichen neuen Höhepunkt", autor: "L. Arnus", rubrik: "Berichterstattung aus den Ländern von Revive", bilder: ["bilder/presse/2026-07-14-spannungen-zwischen-caldera-und-frostlin-1.webp", "bilder/presse/2026-07-14-spannungen-zwischen-caldera-und-frostlin-2.webp", "bilder/presse/2026-07-14-spannungen-zwischen-caldera-und-frostlin-3.webp"],   // Bilder: "bilder/presse/2026-07-14-spannungen-zwischen-caldera-und-frostlin-1.webp", "bilder/presse/2026-07-14-spannungen-zwischen-caldera-und-frostlin-2.webp", "bilder/presse/2026-07-14-spannungen-zwischen-caldera-und-frostlin-3.webp"
        text: [
          "Die Beziehungen zwischen den Nationen Caldera und Frostlingen stehen weiterhin unter Spannung. Auslöser der jüngsten Ereignisse soll der Diebstahl eines wertvollen Heavy Cores (Abb. 3) durch einen Bürger Frostlingens gewesen sein.",
          "Nach Angaben aus Caldera reagierten die dortigen Behörden umgehend. Im Zuge der Ermittlungen wurden ein verzaubertes Buch mit „Lunge III“ sowie 26 Diamanten beschlagnahmt (Abb. 2). Die eingezogenen Gegenstände gelten nach Angaben beider Seiten als Teil der laufenden Verhandlungen zur Beilegung des Konflikts.",
          "## Flagge öffentlich verbrannt",
          "Für zusätzliche Aufmerksamkeit sorgte jedoch ein weiterer Vorfall: Frostlingens Flagge wurde öffentlich verbrannt (Abb. 1). Augenzeugen berichten von einer demonstrativen Aktion, die von einigen Bewohnern als Zeichen der Entschlossenheit verstanden wurde, während andere vor einer weiteren Eskalation warnen.",
          "## Vorsichtige Friedensgespräche",
          "Trotz der angespannten Lage wurden inzwischen erste Gespräche zwischen Vertretern beider Nationen aufgenommen. Beobachter sprechen von vorsichtigen Friedensverhandlungen, deren Ausgang derzeit noch ungewiss ist. Die Außenministerin Calderas, Selene Varr, äußerte sich ebenfalls zu den Entwicklungen:",
          "> „Diplomatie beginnt dort, wo Provokation endet. Wenn beide Seiten bereit sind, Verantwortung zu übernehmen, kann aus diesem Vorfall noch ein stabiler Frieden entstehen.“",
          "Derzeit halten beide Seiten an ihren Positionen fest. Zwar scheinen die Verhandlungen nicht vollständig ins Stocken geraten zu sein, doch von einer endgültigen Einigung kann noch keine Rede sein.",
          "Eines ist jedoch bereits klar: Der Konflikt um den Heavy Core hat sich zu einer der ersten großen diplomatischen Auseinandersetzungen in der Geschichte von Revive entwickelt."
        ] },
      { medium: "cnn", staffel: "staffel-0", datum: "12.07.2026", titel: "Erste politische Kartierung des Kontinents veröffentlicht", autor: "L. Arnus, mit A. Cartwright", rubrik: "Berichterstattung aus den Ländern von Revive · Kartografische Beratung: A. Cartwright", bilder: ["bilder/presse/2026-07-12-erste-politische-kartierung-des-kontinen-1.webp"],   // Bilder: "bilder/presse/2026-07-12-erste-politische-kartierung-des-kontinen-1.webp"
        text: [
          "Mit der Ankunft der ersten Siedler zeichnen sich die ersten territorialen Ansprüche auf dem Kontinent ab. Die Karten zeigen die bekannten Nationen und ihre Lage.",
          "## Bekannte Staaten und Territorien",
          "- Fürstentum Antiochia: Rot",
          "- Republik Caldera: Dunkelblau",
          "- Die Gebiete von Schelly: Orange",
          "- Frostlingen: Hellblau",
          "Frostlingen liegt außerhalb der bislang veröffentlichten Karten. Über diese Region ist derzeit wenig bekannt.",
          "Nach Einschätzung von A. Cartwright befindet sich die politische Entwicklung des Kontinents noch in ihrer frühesten Phase:",
          "> „Die heutigen Grenzen sind nur der Anfang einer viel größeren Geschichte. In den kommenden Wochen werden Straßen entstehen, Städte gegründet und neue Regionen erschlossen werden.“",
          "Trotz der ersten Grenzziehungen bleiben große Teile des Kontinents unbeansprucht. Besonders entlang der Küsten und Flusssysteme erwarten Beobachter weitere Gründungen.",
          "Noch sind die Karten einfach. Noch sind die Grenzen jung. Doch bereits jetzt beginnt sich die Geschichte von Revive zu erzählen. Welche Bündnisse geschlossen, welche Handelsrouten eröffnet und welche Konflikte eines Tages ausgetragen werden, wird erst die Zukunft zeigen."
        ] },
      { medium: "cnn", staffel: "staffel-0", datum: "10.07.2026", titel: "Wandernder Händler eröffnet vermutlich höchstgelegenen Markt der Welt", autor: "L. Arnus", rubrik: "Berichterstattung aus den Wolken von Revive", bilder: ["bilder/presse/2026-07-10-wandernder-haendler-eroeffnet-vermutlich-1.webp", "bilder/presse/2026-07-10-wandernder-haendler-eroeffnet-vermutlich-2.webp"],   // Bilder: "bilder/presse/2026-07-10-wandernder-haendler-eroeffnet-vermutlich-1.webp", "bilder/presse/2026-07-10-wandernder-haendler-eroeffnet-vermutlich-2.webp"
        text: [
          "Für Verwunderung sorgte heute die Sichtung eines Wandernden Händlers, der gemeinsam mit seinen beiden Lamas auf einer Mobfarm mehrere hundert Blöcke über dem Meeresspiegel auftauchte.",
          "Augenzeugen berichten, dass der Händler scheinbar ohne Vorwarnung auf der Plattform erschien und sich dort niederließ, als wäre dies der selbstverständlichste Handelsplatz der Welt.",
          "Wie genau der Händler diesen Ort erreichte, bleibt unklar. Experten schließen einen normalen Landweg aus. Auch die Möglichkeit, dass die Lamas den Aufstieg aus eigener Kraft bewältigt haben, wird als äußerst unwahrscheinlich eingestuft. Dennoch schien der Händler selbst keinerlei Zweifel an seiner Standortwahl zu haben.",
          "> „Vielleicht hat er die Wegbeschreibung falsch verstanden“, vermutete ein Beobachter.",
          "Andere Anwohner vertreten die Theorie, dass der Händler eigentlich nach einer Küstenstadt gesucht habe und stattdessen versehentlich auf einer schwebenden Plattform gelandet sei. Besonders bemerkenswert ist, dass die beiden Lamas während des gesamten Vorfalls bemerkenswert gelassen wirkten und keinerlei Anzeichen von Höhenangst zeigten.",
          "Die Handelskammer von Revive prüft inzwischen, ob die Plattform offiziell als höchstgelegener Marktplatz der bekannten Welt anerkannt werden kann.",
          "Der Händler selbst lehnte eine Stellungnahme ab und bot stattdessen Korallenblöcke, Samen und einen Kaktus zum Verkauf an."
        ] },
      { medium: "cnn", staffel: "staffel-0", datum: "06.07.2026", titel: "Seltener Diamantenfund sorgt für Aufsehen", autor: "L. Arnus", rubrik: "Berichterstattung aus den Höhlen von Revive", bilder: ["bilder/presse/2026-07-06-seltener-diamantenfund-sorgt-fuer-aufseh-1.webp"],   // Bilder: "bilder/presse/2026-07-06-seltener-diamantenfund-sorgt-fuer-aufseh-1.webp"
        text: [
          "Nur kurze Zeit nach den ersten Erkundungen wurde ein bemerkenswerter Fund gemeldet.",
          "In den Tiefen des Landes entdeckten Bergleute eine ungewöhnlich reiche Diamantenader mit gleich vier zusammenhängenden Erzblöcken. Der Fund gilt als eines der ersten größeren Diamantenvorkommen, die bislang dokumentiert wurden.",
          "Experten weisen darauf hin, dass solche Entdeckungen oft den Beginn größerer Bergbauprojekte markieren und für junge Siedlungen von erheblicher Bedeutung sein können. Diamanten gehören zu den wertvollsten Ressourcen der bekannten Welt und werden für Werkzeuge, Ausrüstung und zukünftige Bauvorhaben benötigt.",
          "Der genaue Standort des Vorkommens wurde aus Sicherheitsgründen nicht veröffentlicht.",
          "Ob dieser Fund der Beginn eines neuen Bergbaubooms ist oder lediglich ein glücklicher Zufall bleibt, wird sich in den kommenden Tagen zeigen. Fest steht jedoch: Die Schätze von Revive beginnen langsam, ihre Geheimnisse preiszugeben."
        ] },
      { medium: "kreuzkurier", staffel: "staffel-0", datum: "04.07.2026", titel: "Fürstentum Antiochia tut erste Schritte auf dem heiligen Land", autor: "K. Matsch", rubrik: "Deus vult!", bilder: ["bilder/presse/2026-07-04-fuerstentum-antiochia-tut-erste-schritte-1.webp"],   // Bilder: "bilder/presse/2026-07-04-fuerstentum-antiochia-tut-erste-schritte-1.webp"
        text: [
          "Die mutigen Kreuzfahrer aus der westlichen Welt, die ihre Mission angehen, die neuen Länder von jeglichem Unglauben zu befreien, markierten ihren zentralen Stützpunkt im Nordosten des Kontinents.",
          "Auf der Insel nahe der Küste soll eine neue Weltmacht entstehen: die Stadt Neu-Antiochia."
        ] },
      { medium: "cnn", staffel: "staffel-0", datum: "03.07.2026", titel: "Erste Kartierung des Landes abgeschlossen", autor: "L. Arnus, mit A. Cartwright", rubrik: "Berichterstattung aus den Grenzlanden von Revive · Kartografische Beratung: A. Cartwright", bilder: ["bilder/presse/2026-07-03-erste-kartierung-des-landes-abgeschlosse-1.webp"],
        text: [
          "Kurz vor der Ankunft der ersten Siedler wurde die bislang umfassendste Kartierung des neuen Landes abgeschlossen.",
          "Die Karte zeigt eine vielfältige und vielversprechende Region. Im Osten erstrecken sich dichte Wälder, durchzogen von Flüssen und Küstengebieten. Im Westen liegen weitläufige Wüstenlandschaften, während im Südwesten raue Badlands die Küste prägen. Zwischen diesen Regionen befindet sich ein gewaltiges Binnenmeer, das den Mittelpunkt der bekannten Welt bildet.",
          "## Die Insel im Herzen des Sees",
          "Besonderes Augenmerk richtet sich auf eine einsame Insel im Herzen des Sees. Nach aktuellen Planungen soll sie als Ankunftsort für alle neuen Bewohner dienen und den Ausgangspunkt ihrer Reise markieren.",
          "Nach Einschätzung der Kartografen bieten die Küsten rund um das Binnenmeer ideale Bedingungen für die ersten Siedlungen. Zahlreiche natürliche Buchten, Flussmündungen und freie Landflächen könnten schon bald Heimat neuer Dörfer, Städte und Gemeinschaften werden.",
          "Die Verwaltung von Revive möchte die zukünftigen Bewohner außerdem dazu ermutigen, sich möglichst in derselben Region niederzulassen. Zwar ist die Welt groß genug für viele unterschiedliche Reiche, doch eine Besiedlung in relativer Nähe fördert Begegnungen, Handel, gemeinsame Projekte und sorgt dafür, dass das Land lebendig bleibt.",
          "Welche Namen ihre Regionen künftig tragen werden, welche Städte entstehen und welche Geschichten dort geschrieben werden, ist noch vollkommen offen.",
          "Die Karte ist gezeichnet. Die Küsten warten auf ihre ersten Siedler. Und schon bald wird aus unberührtem Land eine lebendige Welt werden."
        ] },
      { medium: "cnn", staffel: "staffel-0", datum: "03.07.2026", titel: "Sonderausgabe zur Eröffnung von Revive", autor: "L. Arnus", rubrik: "Berichterstattung aus den Grenzlanden von Revive", bilder: [],
        text: [
          "Lange Zeit lag das neue Land verlassen da. Die Wälder waren still. Die Berge unberührt. Keine Städte, keine Reiche und keine Geschichten prägten die Landschaft. Doch das wird sich schon bald ändern.",
          "Aus verschiedenen Richtungen werden Abenteurer erwartet – manche mit Erinnerungen an vergangene Zeiten, andere auf der Suche nach einem völlig neuen Anfang. Was sie in diesem Land erschaffen werden, weiß noch niemand.",
          "## Der Hüter an der Küste",
          "Während einer Erkundung der Küste trafen wir auf den einzigen bekannten Bewohner dieser Welt: einen geheimnisvollen Hüter, der seit langer Zeit auf die Ankunft der ersten Siedler wartet. Auf die Frage, warum er hier geblieben sei, antwortete er lediglich:",
          "> „Jede große Geschichte beginnt mit einem ersten Schritt.“",
          "Mehr wollte er nicht sagen.",
          "Fest steht jedoch, dass dieser erste Schritt nicht mehr weit entfernt ist. Schon bald werden die ersten Lager errichtet, die ersten Wege beschritten und die ersten Kapitel dieser neuen Welt geschrieben werden.",
          "Die Landschaft wartet. Der Hüter wartet. Und die Geschichte von Revive steht kurz davor zu beginnen."
        ] }
    ]
  },

  /* ------------------------------------------------------------------
     SKINS – Skin-Dateien (PNG von NameMC o. ä.) in den Ordner "skins/" legen
     und hier eintragen. Ohne Eintrag zeigt die Seite ein Pixel-Gesicht.
     ------------------------------------------------------------------ */
  skins: {
    "LuciusLucarnus": "skins/luciuslucarnus.png",
    "Lord_Simple": "skins/lord_simple.png"
  },

  /* ------------------------------------------------------------------
     EVENTS – datum als "JJJJ-MM-TT", Uhrzeit als "18:00".
     "Vorbei" oder "Geplant" erkennt die Seite automatisch am Datum.
     mit: Spielernamen, die dabei sind (optional)
     ------------------------------------------------------------------ */
  // Beispiel: { datum: "2026-11-20", von: "19:00", bis: "20:30", titel: "…", text: "…", mit: ["LuciusLucarnus"] }
  // Neue Events am einfachsten über den Knopf „Event erstellen“ auf der Events-Seite.
  events: [],

  /* ------------------------------------------------------------------
     CREW & TEILNEHMER – nur Spielernamen, keine echten Namen.
     rolle: "owner", "admin", "moderator", "builder" oder "spieler" – extra: zweites Abzeichen, z. B. "Hoster"
     kopf: optional eigenes Bild, z. B. "bilder/koepfe/name.png"
     (sonst wird automatisch ein Pixel-Gesicht erzeugt)
     ------------------------------------------------------------------ */
  crew: [
    { name: "LuciusLucarnus", rolle: "owner", text: "Gründer von Revive. Plant die Geschichte und baut die Welt mit.", kopf: "" },
    { name: "Lord_Simple", rolle: "admin", extra: "Hoster", text: "Mitgründer von Revive. Hostet den Server und kümmert sich als Admin um alles Technische.", kopf: "" }
  ],
  // Spielernamen der aktuellen Staffel, z. B. ["Spieler1", "Spieler2"] – leer = Bereich ausgeblendet
  teilnehmer: [],

  // Streamer & Creator (nur mit Zustimmung). live: true nur von Hand setzen.
  streamer: [
    { name: "LuciusLucarnus", plattform: "YouTube", handle: "@LuciusLucarnus", text: "Gaming-Kanal des Gründers.", url: "https://www.youtube.com/@LuciusLucarnus", live: false }   // GESCHÄTZT – Handle prüfen
  ],

  // Aus den Dokumenten „Revive – Serverregeln“ und „Revive – Staats-/RP-Regeln“
  regeln: [
    { titel: "Serverregeln", kapitel: [
        { titel: "1. Verhalten & Community", text: [
          "Revive ist ein gemeinschaftliches Vanilla-SMP mit optionalem Roleplay. Die Regeln sollen ein faires und langfristig funktionierendes Miteinander ermöglichen, ohne unnötig vorzuschreiben, wie Spieler zu spielen haben.",
          "Behandle andere Spieler respektvoll. Absichtliches, wiederholtes Provozieren, Belästigen oder gezieltes Fertigmachen eines Spielers ist verboten. Persönliche Streitigkeiten außerhalb von Minecraft dürfen nicht als Grundlage für Aktionen gegen andere Spieler verwendet werden.",
          "Nicht alles, was technisch erlaubt ist, muss auch gemacht werden. Das bewusste Ausnutzen einer Regel-Lücke, um anderen Spielern zu schaden oder sich einen unfairen Vorteil zu verschaffen, ist verboten.",
          "AFK-Spieler dürfen nicht absichtlich getötet, ausgeraubt oder in gefährliche Situationen gebracht werden."
        ] },
        { titel: "2. Cheats & Exploits", text: [
          "Mods, Resource Packs, Clients oder externe Programme, die einen unfairen spielerischen Vorteil gegenüber Vanilla Minecraft verschaffen, sind verboten.",
          "Insbesondere verboten sind X-Ray, ESP, Kill Aura, Fly Hacks, Speed Hacks, illegale Combat-Mods, Bots, unfairer Baritone-Einsatz und vergleichbare Cheats.",
          "Kosmetische und technische Mods ohne unfairen Vorteil sind grundsätzlich erlaubt. Fullbright und rein visuelle Verbesserungen sind erlaubt. Minimap-Mods sind nur ohne Spieler-, Mob-, Höhlen- oder Erz-Radar erlaubt.",
          "Das absichtliche Ausnutzen von Bugs oder nicht ausdrücklich erlaubten Duplication-Glitches ist verboten.",
          "Ausdrücklich erlaubt sind TNT-Duper, Carpet-Duper und Gravity-Block-Duper. Bei neuen technischen Mechaniken entscheidet die Administration."
        ] },
        { titel: "3. Eigentum & Griefing", text: [
          "Absichtliches Zerstören, Beschädigen oder Verändern fremder Gebäude, Farmen, Maschinen, Landschaften oder Einrichtungen ist außerhalb ausdrücklich erlaubter Konflikte verboten.",
          "Dazu zählen insbesondere Lava- und Wasser-Griefing, Feuer, TNT-Zerstörung, mutwilliges Abbauen und sonstige Massenzerstörung.",
          "Das Stehlen aus fremden Kisten, Shulkern, Fässern, Shops oder anderen Lagerstätten ist verboten.",
          "Ungeclaimtes Gebiet bedeutet nicht automatisch, dass dort alles erlaubt ist. Offensichtlich von einem Spieler genutzte Gebäude, Farmen und Einrichtungen sind zu respektieren.",
          "Streiche sind erlaubt, solange sie keinen dauerhaften oder erheblichen Schaden verursachen.",
          "Zerstörung oder Plünderung im Rahmen eines ausdrücklich erlaubten Krieges oder RP-Konflikts kann nach den Staats-/RP-Regeln erlaubt sein."
        ] },
        { titel: "4. PvP & Konflikte", text: [
          "Unprovoziertes Töten anderer Spieler ist verboten. PvP ist bei vereinbarten Kämpfen, Events, erlaubten RP-Konflikten und angemessener Selbstverteidigung erlaubt.",
          "Wer einen Spieler angreift, muss damit rechnen, dass dieser sich entsprechend verteidigt. Wiederholtes Töten desselben Spielers ohne nachvollziehbaren Grund ist verboten.",
          "Spawn, Shopping District und ausdrücklich ausgewiesene Schutzbereiche sind PvP-frei.",
          "Combat Logging während eines laufenden PvP-Kampfes ist verboten. Das Töten eines AFK-Spielers bleibt auch bei einem bestehenden Konflikt verboten.",
          "Regeln für organisierte Kriege befinden sich im Dokument „Revive – Staats-/RP-Regeln\"."
        ] },
        { titel: "5. Länder & Gebiete", text: [
          "Die Gründung eines eigenen Staates ist freiwillig. Spieler können stattdessen gemeinsam in Dörfern, Städten, Gemeinschaften oder anderen Gruppen leben.",
          "Gebiete werden durch Schilder, Banner oder eine vom Server festgelegte Methode gekennzeichnet. Claims müssen angemessen groß sein und tatsächlich genutzt werden.",
          "Das absichtliche Reservieren riesiger Flächen, Claimblocking oder das gezielte Einschließen fremder Gebiete ist verboten.",
          "Spieler sollen sich grundsätzlich in räumlicher Nähe zueinander ansiedeln. Große, voneinander vollständig isolierte Gebiete sind nicht das Ziel von Revive.",
          "## Inaktivitätsregelung für Claims",
          "Wenn der Gründer oder die Mehrheit der Einwohner eines Staates/Claims für mehr als 3 Wochen ohne Abmeldung inaktiv ist, kann der Claim nach Vorankündigung durch die Administration freigegeben oder aufgelöst werden, um die Weltkarte für aktive Spieler nutzbar zu halten.",
          "Dörfer und Distrikte können sich jederzeit bilden und eigene lokale Strukturen besitzen, solange sie nicht gegen die Serverregeln verstoßen. Offensichtlich missbräuchliche oder ungenutzte Claims können nach Ankündigung durch die Administration entfernt werden."
        ] },
        { titel: "6. Siedlungsnähe & Gemeinschaft", text: [
          "Um das Roleplay, den Handel und die Interaktion lebendig zu halten, bitten wir alle Spieler dringend, sich in räumlicher Nähe zueinander anzusiedeln. Das Alleinbauen an extrem abgelegenen Orten (Tausende Blöcke entfernt) ist nicht im Sinne von Revive. Wir möchten eine zusammenhängende, lebendige Welt erschaffen!"
        ] },
        { titel: "7. Roleplay & Politik", text: [
          "Roleplay ist freiwillig. Spieler müssen nicht am Roleplay teilnehmen.",
          "Zwischen IC (In Character) und OOC (Out of Character) ist klar zu unterscheiden. Ein Konflikt zwischen Charakteren oder Staaten darf nicht automatisch als persönlicher Konflikt zwischen den Spielern behandelt werden.",
          "Persönliche Streitigkeiten dürfen nicht als Roleplay getarnt werden.",
          "Die Spieler können eigene politische Strukturen, Organisationen, Gemeinschaften und Staaten entwickeln. Die Administration schreibt keine bestimmte politische Ordnung vor.",
          "Eine grundlegende Hintergrundgeschichte kann zu Beginn einer Season vorgegeben werden."
        ] },
        { titel: "8. Wirtschaft & Shopping District", text: [
          "Der Shopping District dient dem freien Handel zwischen Spielern. Jeder Spieler kann grundsätzlich jedes Item anbieten.",
          "Shop-Grundstücke müssen tatsächlich bebaut und genutzt werden. Dauerhaft herumstehende Kisten ohne erkennbare Shopgestaltung sollen vermieden werden.",
          "Es gilt die vom Server festgelegte gemeinsame Währung. Der Markt bestimmt die Preise.",
          "Diebstahl aus Shops ist verboten. Absichtlicher Betrug bei einem vereinbarten Handel ist verboten. Unterschiedliche Preise, schlechte Deals und wirtschaftliche Verluste sind dagegen Teil des freien Marktes.",
          "Der Shopping District ist PvP- und Griefing-frei."
        ] },
        { titel: "9. Technik & Farmen", text: [
          "Automatische Farmen und Redstone-Anlagen sind grundsätzlich erlaubt.",
          "Farmen und Maschinen dürfen den Server nicht absichtlich oder dauerhaft erheblich belasten. Extrem große Mengen an Entities, Hoppern, Redstone-Komponenten, Chunkloadern oder vergleichbaren Systemen können eingeschränkt werden.",
          "Die Administration kann technische Anlagen vorübergehend deaktivieren, wenn sie erhebliche Serverprobleme verursachen."
        ] },
        { titel: "10. Events & Dimensionen", text: [
          "Jeder Spieler darf grundsätzlich eigene Events veranstalten. Events dürfen andere Spieler nicht zur Teilnahme zwingen.",
          "Nether und End werden zu Beginn der Season nicht sofort freigeschaltet. Das Betreten der jeweiligen Dimension vor der offiziellen Freigabe ist verboten. Die Freischaltung kann Teil eines Events sein.",
          "Die Administration kann Serverevents wie Bauwettbewerbe, PvP-Turniere, Schatzsuchen, politische Events oder besondere Serverereignisse veranstalten."
        ] },
        { titel: "11. Administration & Strafen", text: [
          "Aktuelle Administration: (Owner) Lucius, Lord_Simple",
          "Bei technischen Problemen kann sich an die Administration gewandt werden. Die Administration kann bei unklaren Situationen Entscheidungen im Sinne der Servergemeinschaft treffen und Regeln bei Bedarf ergänzen oder präzisieren. Änderungen werden im Discord bekanntgegeben.",
          "Mögliche Maßnahmen bei Regelverstößen sind Verwarnung, Entfernung betroffener Items oder Bauwerke, Rücksetzung verursachter Schäden, 24 Stunden Time-Out, eine Woche Time-Out, längerer Time-Out, Ausschluss von der Season oder dauerhafter Ausschluss.",
          "Die Strafe richtet sich nach Art, Schwere und Häufigkeit des Verstoßes. Schwere Verstöße können unabhängig von vorherigen Verwarnungen direkt zu einem längeren Time-Out oder Ausschluss führen.",
          "Bei Streams und Aufnahmen ist angemessenes Verhalten einzuhalten. Stream-Sniping und das Ausnutzen von Streaminformationen für einen unfairen Vorteil sind verboten.",
          "Der Revive-Discord darf nicht ohne Absprache mit der Administration an außenstehende Personen weitergegeben werden.",
          "Mit dem Spielen auf Revive werden diese Regeln akzeptiert."
        ] }
    ] },
    { titel: "Staats- & RP-Regeln", kapitel: [
        { titel: "Grundprinzip", text: [
          "Das Staats- und politische Roleplay auf Revive ist freiwillig. Staaten sind eine mögliche Organisationsform, aber keine Voraussetzung für die Teilnahme.",
          "Spieler können sich zu Dörfern, Städten, Gemeinschaften, Unternehmen, Bündnissen oder Staaten zusammenschließen. Politische Strukturen sollen sich möglichst organisch aus dem Spiel entwickeln."
        ] },
        { titel: "1. Staatsgründung", text: [
          "Ein Staat kann von einer Gruppe von Spielern gegründet werden. Die Gründung sollte im Discord bekanntgegeben werden.",
          "Ein Staat sollte mindestens einen Namen, ein Gebiet, eine Flagge und eine grundlegende Organisationsform besitzen.",
          "Staaten dürfen keine realen Staaten täuschend imitieren. Namen und Flaggen müssen eindeutig fiktiv sein.",
          "Eine einzelne Person kann grundsätzlich einen Staat gründen, sofern die Administration keinen Missbrauch erkennt. Sehr kleine Staaten sollten jedoch nicht dazu genutzt werden, große Gebiete zu blockieren."
        ] },
        { titel: "2. Grenzen & Gebiete", text: [
          "Staatsgrenzen müssen im Spiel eindeutig erkennbar oder im Discord dokumentiert sein.",
          "Grenzen dürfen nicht absichtlich so gelegt werden, dass fremde Spieler eingeschlossen oder in ihrer Entwicklung blockiert werden.",
          "Grenzstreitigkeiten werden zunächst zwischen den beteiligten Parteien geklärt. Kann keine Einigung erzielt werden, kann die Administration vermitteln.",
          "Ein Staat besitzt keine automatischen Sonderrechte außerhalb seines tatsächlichen Gebiets."
        ] },
        { titel: "3. Staatsformen & interne Ordnung", text: [
          "Jeder Staat kann seine eigene Staatsform wählen, beispielsweise Republik, Monarchie, Diktatur, Demokratie oder eine frei erfundene Form.",
          "Staaten dürfen eigene interne Regeln, Ämter, Parteien und Institutionen schaffen.",
          "Interne Regeln eines Staates dürfen nicht gegen die allgemeinen Serverregeln verstoßen."
        ] },
        { titel: "4. Diplomatie & Bündnisse", text: [
          "Staaten können diplomatische Beziehungen aufnehmen, Bündnisse schließen und Verträge abschließen.",
          "Mögliche Vereinbarungen sind beispielsweise:",
          "- Bündnisverträge",
          "- Handelsabkommen",
          "- Nichtangriffspakte",
          "- Grenzabkommen",
          "- Verteidigungsbündnisse",
          "- gegenseitige Hilfsvereinbarungen",
          "Verträge können im Discord veröffentlicht und von den beteiligten Parteien dokumentiert werden."
        ] },
        { titel: "5. Krieg", text: [
          "Ein Krieg muss vor Beginn eindeutig angekündigt werden. Die beteiligten Parteien und der Grund des Konflikts müssen im Discord bekanntgegeben werden.",
          "Die Administration kann eine Vorbereitungszeit festlegen.",
          "Während eines erlaubten Krieges können PvP, militärische Angriffe und bestimmte Formen der Zerstörung erlaubt sein.",
          "Spawn, Shopping District, öffentliche Projekte und ausdrücklich geschützte oder neutrale Gebiete dürfen auch während eines Krieges nicht angegriffen werden.",
          "Krieg ist kein Freibrief für wahllose Zerstörung. Angriffe müssen einen nachvollziehbaren Bezug zum Konflikt besitzen. Das vollständige Auslöschen einer Base oder das gezielte Unmöglichmachen des weiteren Spielens ist nicht automatisch erlaubt.",
          "Angriffe dürfen nicht gegen Gruppen gerichtet werden, deren Mitglieder nachweislich noch in einer geschützten Aufbauphase (z. B. erst wenige Tage auf dem Server) sind.",
          "Die Administration kann einen Konflikt beenden oder zusätzliche Regeln festlegen, wenn er außer Kontrolle gerät."
        ] },
        { titel: "6. Besetzung & Eroberung", text: [
          "Gebiete können im Rahmen eines erlaubten Konflikts besetzt oder erobert werden, sofern dies vorher als Teil des Konflikts festgelegt wurde.",
          "Eine Besetzung darf nicht dazu verwendet werden, einen Spieler dauerhaft vom Spielen auszuschließen.",
          "Private Kisten und persönliche Unterkünfte von Spielern, die nicht der führenden Fraktion/Führungsebene angehören, sind von Plünderungen bei Besetzungen ausgenommen.",
          "Besetzte Gebiete müssen im RP erkennbar dokumentiert werden."
        ] },
        { titel: "7. Kapitulation & Friedensverträge", text: [
          "Kriegsparteien können jederzeit eine Kapitulation oder einen Friedensvertrag vereinbaren.",
          "Mögliche Bestandteile sind Gebietsübertragungen, Reparationszahlungen, Handelsabkommen, Nichtangriffspakte oder andere RP-Vereinbarungen.",
          "Ein Friedensvertrag sollte im Discord dokumentiert werden.",
          "Erzwungene Verträge dürfen nicht dazu führen, dass einem Spieler sein gesamtes Eigentum entzogen oder das weitere Spielen unmöglich gemacht wird."
        ] },
        { titel: "8. Unabhängigkeit & Staatsgründung", text: [
          "Spieler oder Gemeinschaften können sich im RP von einem bestehenden Staat unabhängig erklären.",
          "Eine Unabhängigkeitserklärung allein verändert keine Serverrechte oder Claims. Die tatsächliche Anerkennung kann durch Verhandlungen, einen Vertrag oder einen Konflikt entstehen.",
          "Auch eine friedliche Unabhängigkeit ist möglich."
        ] },
        { titel: "9. Wahlen & politische Institutionen", text: [
          "Staaten können eigene Wahlen und politische Institutionen veranstalten.",
          "Wahlen können vollständig im RP stattfinden. Die Administration greift nur ein, wenn allgemeine Serverregeln verletzt werden.",
          "Spieler dürfen Parteien, Parlamente, Gerichte, Ministerien oder andere Institutionen gründen."
        ] },
        { titel: "10. Gerichte & Gerichtsprozesse", text: [
          "Spieler können im RP Gerichte einrichten und Gerichtsprozesse durchführen.",
          "Mögliche Rollen sind Richter, Staatsanwalt, Verteidiger, Angeklagter, Zeugen und Geschworene.",
          "RP-Gerichte dürfen politische oder spielinterne Streitigkeiten behandeln.",
          "Sämtliche Urteile, Strafzahlungen oder Auflagen aus RP-Prozessen gelten rein im Spiel (In-Character). Sie dürfen niemals als Vorwand für OOC-Belästigung, persönliches Ausgrenzen oder Ausbeutung genutzt werden.",
          "Ein RP-Gericht kann jedoch keine echte Serverstrafe, keinen Admin-Ban und keine Moderationsentscheidung aufheben oder ersetzen. Verstöße gegen die offiziellen Serverregeln werden ausschließlich durch die Administration behandelt."
        ] },
        { titel: "11. Internationale Organisationen & UN von Revive", text: [
          "Spieler können internationale Organisationen gründen.",
          "Die UN von Revive kann als zentrale internationale Organisation für Diplomatie, Verhandlungen, Konferenzen und internationale RP-Ereignisse dienen.",
          "Die UN besitzt keine automatischen Moderationsrechte. Entscheidungen der UN gelten nur dann außerhalb des Roleplays, wenn die Administration dies ausdrücklich festlegt.",
          "Die Versammlungshalle von Revive kann als neutraler Ort für internationale Sitzungen, Gerichtsprozesse, Verhandlungen und andere offizielle RP-Ereignisse dienen."
        ] },
        { titel: "12. Handelsabkommen & Wirtschaft", text: [
          "Staaten können Handelsabkommen und wirtschaftliche Vereinbarungen schließen.",
          "Dazu gehören beispielsweise Zölle, Lieferverträge, gemeinsame Projekte, Handelsrouten oder Rohstoffabkommen.",
          "Die allgemeinen Regeln des Shopping Districts und die Serverregeln bleiben unabhängig davon bestehen."
        ] },
        { titel: "13. Neutrale Gebiete", text: [
          "Bestimmte Orte können im RP als neutral erklärt werden.",
          "Die Versammlungshalle, der Spawn, der Shopping District und andere von der Administration bestimmte Bereiche können als neutrale Zonen gelten.",
          "In neutralen Gebieten dürfen keine bewaffneten Konflikte ausgetragen werden."
        ] },
        { titel: "14. IC/OOC-Trennung", text: [
          "Politisches Roleplay darf niemals als Vorwand für persönliche Angriffe, Belästigung oder Regelverstöße dienen.",
          "Ein Spieler ist nicht automatisch der politische Gegner seines Charakters.",
          "Wer einen RP-Konflikt beendet oder nicht weiterführen möchte, darf dies OOC mitteilen. Daraus darf kein Nachteil außerhalb des Roleplays entstehen."
        ] },
        { titel: "15. Entwicklung der Welt", text: [
          "Das politische System von Revive ist nicht fest vorgegeben.",
          "Es ist ausdrücklich erwünscht, dass sich im Laufe der Season neue Städte, Dörfer, Staaten, Unternehmen, Bündnisse, Parteien und internationale Organisationen entwickeln.",
          "Die Spieler gestalten die politische Geschichte von Revive selbst."
        ] }
    ] }
  ],

  fragen: [
    { frage: "Wie kann ich auf Revive mitspielen?", antwort: "Revive läuft nur auf Einladung. Es gibt keine Bewerbung – wir sprechen Spieler und Creator selbst an." },
    { frage: "Welche Minecraft-Version wird benötigt?", antwort: "Minecraft Java Edition 26.3." },
    { frage: "Muss ich Rollenspiel-Erfahrung haben?", antwort: "Nein. Wichtiger ist Lust auf Geschichten, Zusammenspiel und gemeinsames Bauen." },
    { frage: "Wann startet eine neue Staffel?", antwort: "Ungefähr einmal im Jahr. Jede Staffel bringt eine neue Welt und ein neues Logo mit." },   // GESCHÄTZT
    { frage: "Kann ich alte Welten herunterladen?", antwort: "Ja. Abgeschlossene Staffeln findest du im Archiv." }
  ],

  impressum: {
    name: "Lukas Enbrecht",
    anschrift: "[[Straße Hausnummer]]",
    ort: "[[PLZ Ort]]",
    email: "[[E-Mail-Adresse]]"
  }
};
