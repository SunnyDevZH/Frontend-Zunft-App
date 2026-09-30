export type GuildLine = 'alt' | 'jung'

export type Guild = {
  id: string
  name: string
  line: GuildLine
  founded: string
  house: string
  address: string
  lat: number
  lng: number
  about: string
}

export const GUILD_COUNT = 26

export const guilds: Guild[] = [
  { id: 'constaffel', name: 'Gesellschaft zur Constaffel', line: 'alt', founded: '1336', house: 'Haus zum Rüden, Limmatquai', address: 'Limmatquai 42, 8001 Zürich', lat: 47.370857, lng: 8.543202, about: 'Gesellschaft der Ritter und Edelleute, die älteste der Zürcher Gesellschaften.' },
  { id: 'saffran', name: 'Zunft zur Saffran', line: 'alt', founded: '1336', house: 'Zunfthaus zur Saffran, Limmatquai', address: 'Limmatquai 54, 8001 Zürich', lat: 47.371513, lng: 8.543106, about: 'Zunft der Händler, vor allem für Textil, Eisenwaren, Lebensmittel und Gewürze.' },
  { id: 'meisen', name: 'Zunft zur Meisen', line: 'alt', founded: '1336', house: 'Zunfthaus zur Meisen, Münsterhof', address: 'Münsterhof 20, 8001 Zürich', lat: 47.369946, lng: 8.541693, about: 'Zunft der Weinhändler, Gastwirte, Sattler und Maler.' },
  { id: 'schmiden', name: 'Zunft zur Schmiden', line: 'alt', founded: '1336', house: 'Zunfthaus zur Schmiden, Marktgasse', address: 'Marktgasse 20, 8001 Zürich', lat: 47.372234, lng: 8.544005, about: 'Zunft der Schmiede, Schlosser, Uhrmacher, Spengler und verwandter Berufe.' },
  { id: 'weggen', name: 'Zunft zum Weggen', line: 'alt', founded: '1336', house: 'Restaurant Weisser Wind, Oberdorfstrasse', address: 'Oberdorfstrasse 20, 8001 Zürich', lat: 47.368952, lng: 8.545719, about: 'Zunft der Bäcker und Müller.' },
  { id: 'gerwe', name: 'Vereinigte Zünfte zur Gerwe und zur Schuhmachern', line: 'alt', founded: '1336', house: 'Hotel Savoy, Poststrasse', address: 'Poststrasse 12, 8001 Zürich', lat: 47.369731, lng: 8.539788, about: 'Zunft der Gerber und Schuhmacher. Die beiden Zünfte sind seit 1877 vereinigt.' },
  { id: 'widder', name: 'Zunft zum Widder', line: 'alt', founded: '1336', house: 'Widder Hotel, Rennweg', address: 'Rennweg 7, 8001 Zürich', lat: 47.37244, lng: 8.539856, about: 'Zunft der Metzger und Viehhändler.' },
  { id: 'zimmerleuten', name: 'Zunft zur Zimmerleuten', line: 'alt', founded: '1336', house: 'Zunfthaus zur Zimmerleuten, Limmatquai', address: 'Limmatquai 40, 8001 Zürich', lat: 47.370643, lng: 8.543252, about: 'Zunft der Zimmerleute, Maurer, Wagner, Steinmetze und Rebbauern.' },
  { id: 'schneidern', name: 'Zunft zur Schneidern', line: 'alt', founded: '1336', house: 'Zunfthaus zum Königstuhl, Stüssihofstatt', address: 'Stüssihofstatt 3, 8001 Zürich', lat: 47.372613, lng: 8.543246, about: 'Zunft der Schneider, Kürschner und Tuchausrüster.' },
  { id: 'schiffleuten', name: 'Zunft zur Schiffleuten', line: 'alt', founded: '1336', house: 'Hotel Storchen, Weinplatz', address: 'Weinplatz 2, 8001 Zürich', lat: 47.371266, lng: 8.541794, about: 'Zunft der Fischer und Schiffleute.' },
  { id: 'kaembel', name: 'Zunft zum Kämbel', line: 'alt', founded: '1336', house: 'Zunfthaus zur Haue, Limmatquai', address: 'Limmatquai 52, 8001 Zürich', lat: 47.371409, lng: 8.543204, about: 'Zunft der Kleinhändler, Gärtner, Öler und Salzleute.' },
  { id: 'waag', name: 'Zunft zur Waag', line: 'alt', founded: '1336', house: 'Zunfthaus zur Waag, Münsterhof', address: 'Münsterhof 8, 8001 Zürich', lat: 47.370262, lng: 8.540322, about: 'Zunft der Woll- und Leinenweber. Die beiden Zünfte wurden 1440 vereinigt.' },
  { id: 'stadtzunft', name: 'Stadtzunft', line: 'jung', founded: '1867', house: 'Hotel Marriott, Neumühlequai', address: 'Neumühlequai 42, 8001 Zürich', lat: 47.382415, lng: 8.540556, about: 'Zunft der Altstadt. Sie entstand, damit auch Bürger ohne alte Zunft am Sechseläuten teilnehmen konnten.' },
  { id: 'riesbach', name: 'Zunft Riesbach', line: 'jung', founded: '1887', house: 'Zunfthaus zum Grünen Glas, Untere Zäune', address: 'Untere Zäune 15, 8001 Zürich', lat: 47.371492, lng: 8.545709, about: 'Quartierzunft von Riesbach, gegründet noch vor der Eingemeindung.' },
  { id: 'drei-koenige', name: 'Zunft zu den Drei Königen', line: 'jung', founded: '1897', house: 'Kongresshaus, Dreikönigsaal', address: 'Claridenstrasse 5, 8002 Zürich', lat: 47.365937, lng: 8.538152, about: 'Quartierzunft der Enge. Sie führt das Gemeindewappen mit Kaspar, Melchior und Balthasar.' },
  { id: 'fluntern', name: 'Zunft Fluntern', line: 'jung', founded: '1895', house: 'Kunsthaus Zürich, Heimplatz', address: 'Heimplatz 1, 8001 Zürich', lat: 47.370224, lng: 8.54798, about: 'Quartierzunft von Fluntern.' },
  { id: 'hottingen', name: 'Zunft Hottingen', line: 'jung', founded: '1897', house: 'Zunfthaus am Neumarkt', address: 'Neumarkt 5, 8001 Zürich', lat: 47.372645, lng: 8.545755, about: 'Quartierzunft von Hottingen.' },
  { id: 'wiedikon', name: 'Zunft zu Wiedikon', line: 'jung', founded: '1897', house: 'Gasthof zum Falken, Wiedikon', address: 'Birmensdorferstrasse 150, 8003 Zürich', lat: 47.370186, lng: 8.51947, about: 'Quartierzunft von Wiedikon.' },
  { id: 'wollishofen', name: 'Zunft Wollishofen', line: 'jung', founded: '1900', house: 'Restaurant Belvoirpark', address: 'Seestrasse 125, 8002 Zürich', lat: 47.357737, lng: 8.533351, about: 'Quartierzunft von Wollishofen.' },
  { id: 'hard', name: 'Zunft Hard', line: 'jung', founded: '1922', house: 'Restaurant Werdguet, Aussersihl', address: 'Morgartenstrasse 30, 8004 Zürich', lat: 47.371599, lng: 8.527547, about: 'Quartierzunft von Aussersihl und Hard.' },
  { id: 'oberstrass', name: 'Zunft zu Oberstrass', line: 'jung', founded: '1925', house: 'Restaurant Linde, Oberstrass', address: 'Universitätstrasse 91, 8006 Zürich', lat: 47.383424, lng: 8.547949, about: 'Quartierzunft von Oberstrass.' },
  { id: 'niklaus', name: 'Zunft St. Niklaus', line: 'jung', founded: '1933', house: 'Restaurant Carlton, Bahnhofstrasse', address: 'Bahnhofstrasse 41, 8001 Zürich', lat: 47.371419, lng: 8.537907, about: 'Quartierzunft von Affoltern, Oerlikon und Seebach.' },
  { id: 'hoengg', name: 'Zunft Höngg', line: 'jung', founded: '1934', house: 'Restaurant Mühlehalde, Höngg', address: 'Limmattalstrasse 215, 8049 Zürich', lat: 47.402012, lng: 8.497123, about: 'Quartierzunft von Höngg.' },
  { id: 'letzi', name: 'Zunft zur Letzi', line: 'jung', founded: '1934', house: 'Bourbon at Turm, Obere Zäune', address: 'Obere Zäune 19, 8001 Zürich', lat: 47.371692, lng: 8.544664, about: 'Quartierzunft von Altstetten und Albisrieden.' },
  { id: 'schwamendingen', name: 'Zunft Schwamendingen', line: 'jung', founded: '1975', house: 'Gasthaus Hirschen, Schwamendingen', address: 'Winterthurerstrasse 519, 8051 Zürich', lat: 47.404065, lng: 8.571766, about: 'Quartierzunft von Schwamendingen.' },
  { id: 'witikon', name: 'Zunft Witikon', line: 'jung', founded: '1980', house: 'Hotel Schweizerhof, Bahnhofplatz', address: 'Bahnhofplatz 1, 8001 Zürich', lat: 47.376787, lng: 8.541265, about: 'Quartierzunft von Witikon, die jüngste der 26 Zünfte.' },
]
