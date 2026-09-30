export type MemberGroup =
  | 'zunftmeister'
  | 'vorsteherschaft'
  | 'zuenfter'
  | 'anwaerter'
  | 'geselle'
  | 'schankbursche'
  | 'bewerber'

export type Member = {
  id: string
  firstName: string
  lastName: string
  role: string
  group: MemberGroup
  since: number
  quartier: string
  email: string
}

export type EventKind = 'fest' | 'umzug' | 'sitzung' | 'intern'

export type ZunftEvent = {
  id: string
  title: string
  date: string
  time: string
  place: string
  description: string
  kind: EventKind
}

export const GROUP_LABELS: Record<MemberGroup, string> = {
  zunftmeister: 'Zunftmeister',
  vorsteherschaft: 'Vorsteherschaft',
  zuenfter: 'Zünfter',
  anwaerter: 'Anwärter',
  geselle: 'Geselle',
  schankbursche: 'Schankbursche',
  bewerber: 'Bewerber',
}

export const GROUP_ORDER: MemberGroup[] = [
  'zunftmeister',
  'vorsteherschaft',
  'zuenfter',
  'anwaerter',
  'geselle',
  'schankbursche',
  'bewerber',
]

export const KIND_LABELS: Record<EventKind, string> = {
  fest: 'Fest',
  umzug: 'Umzug',
  sitzung: 'Sitzung',
  intern: 'Intern',
}

export const members: Member[] = [
  { id: 'm1', firstName: 'Andreas', lastName: 'Keller', role: 'Zunftmeister', group: 'zunftmeister', since: 2008, quartier: 'Enge', email: 'andreas.keller@zunft-drei-koenige.ch' },
  { id: 'm2', firstName: 'Peter', lastName: 'Huber', role: 'Altzunftmeister', group: 'vorsteherschaft', since: 1994, quartier: 'Enge', email: 'peter.huber@zunft-drei-koenige.ch' },
  { id: 'm3', firstName: 'Martin', lastName: 'Schmid', role: 'Statthalter', group: 'vorsteherschaft', since: 2001, quartier: 'Wollishofen', email: 'martin.schmid@zunft-drei-koenige.ch' },
  { id: 'm4', firstName: 'Lukas', lastName: 'Meier', role: 'Säckelmeister', group: 'vorsteherschaft', since: 2012, quartier: 'Enge', email: 'lukas.meier@zunft-drei-koenige.ch' },
  { id: 'm5', firstName: 'Stefan', lastName: 'Baumann', role: 'Schreiber', group: 'vorsteherschaft', since: 2015, quartier: 'Wiedikon', email: 'stefan.baumann@zunft-drei-koenige.ch' },
  { id: 'm6', firstName: 'Thomas', lastName: 'Frei', role: 'Beisitzer', group: 'vorsteherschaft', since: 2006, quartier: 'Enge', email: 'thomas.frei@zunft-drei-koenige.ch' },
  { id: 'm7', firstName: 'Daniel', lastName: 'Weber', role: 'Beisitzer', group: 'vorsteherschaft', since: 2010, quartier: 'Leimbach', email: 'daniel.weber@zunft-drei-koenige.ch' },
  { id: 'm8', firstName: 'Christian', lastName: 'Brunner', role: 'Fähnrich', group: 'vorsteherschaft', since: 2014, quartier: 'Enge', email: 'christian.brunner@zunft-drei-koenige.ch' },
  { id: 'm9', firstName: 'Reto', lastName: 'Hofmann', role: 'Kaspar', group: 'zuenfter', since: 2011, quartier: 'Enge', email: 'reto.hofmann@zunft-drei-koenige.ch' },
  { id: 'm10', firstName: 'Simon', lastName: 'Graf', role: 'Melchior', group: 'zuenfter', since: 2009, quartier: 'Enge', email: 'simon.graf@zunft-drei-koenige.ch' },
  { id: 'm11', firstName: 'Markus', lastName: 'Steiner', role: 'Balthasar', group: 'zuenfter', since: 2013, quartier: 'Wollishofen', email: 'markus.steiner@zunft-drei-koenige.ch' },
  { id: 'm12', firstName: 'Noah', lastName: 'Widmer', role: 'Page', group: 'zuenfter', since: 2022, quartier: 'Enge', email: 'noah.widmer@zunft-drei-koenige.ch' },
  { id: 'm13', firstName: 'Levin', lastName: 'Bachmann', role: 'Page', group: 'zuenfter', since: 2023, quartier: 'Enge', email: 'levin.bachmann@zunft-drei-koenige.ch' },
  { id: 'm14', firstName: 'Elia', lastName: 'Roth', role: 'Page', group: 'zuenfter', since: 2024, quartier: 'Wiedikon', email: 'elia.roth@zunft-drei-koenige.ch' },
  { id: 'm15', firstName: 'Jonas', lastName: 'Zimmermann', role: 'Tambourmajor', group: 'zuenfter', since: 2007, quartier: 'Enge', email: 'jonas.zimmermann@zunft-drei-koenige.ch' },
  { id: 'm16', firstName: 'Fabian', lastName: 'Gerber', role: 'Pfeifer', group: 'zuenfter', since: 2016, quartier: 'Enge', email: 'fabian.gerber@zunft-drei-koenige.ch' },
  { id: 'm17', firstName: 'Pascal', lastName: 'Hofer', role: 'Trommler', group: 'zuenfter', since: 2018, quartier: 'Wollishofen', email: 'pascal.hofer@zunft-drei-koenige.ch' },
  { id: 'm18', firstName: 'Nico', lastName: 'Vogel', role: 'Trommler', group: 'zuenfter', since: 2019, quartier: 'Enge', email: 'nico.vogel@zunft-drei-koenige.ch' },
  { id: 'm19', firstName: 'Beat', lastName: 'Schneider', role: 'Zünfter', group: 'zuenfter', since: 1998, quartier: 'Enge', email: 'beat.schneider@zunft-drei-koenige.ch' },
  { id: 'm20', firstName: 'Hans', lastName: 'Fischer', role: 'Zünfter', group: 'zuenfter', since: 1989, quartier: 'Enge', email: 'hans.fischer@zunft-drei-koenige.ch' },
  { id: 'm21', firstName: 'Rolf', lastName: 'Meyer', role: 'Zünfter', group: 'zuenfter', since: 2003, quartier: 'Wiedikon', email: 'rolf.meyer@zunft-drei-koenige.ch' },
  { id: 'm22', firstName: 'Urs', lastName: 'Brunner', role: 'Zünfter', group: 'zuenfter', since: 1996, quartier: 'Leimbach', email: 'urs.brunner@zunft-drei-koenige.ch' },
  { id: 'm23', firstName: 'Kurt', lastName: 'Wagner', role: 'Zünfter', group: 'zuenfter', since: 2000, quartier: 'Enge', email: 'kurt.wagner@zunft-drei-koenige.ch' },
  { id: 'm24', firstName: 'Michael', lastName: 'Hess', role: 'Zünfter', group: 'zuenfter', since: 2011, quartier: 'Wollishofen', email: 'michael.hess@zunft-drei-koenige.ch' },
  { id: 'm25', firstName: 'Patrick', lastName: 'Kunz', role: 'Zünfter', group: 'zuenfter', since: 2017, quartier: 'Enge', email: 'patrick.kunz@zunft-drei-koenige.ch' },
  { id: 'm26', firstName: 'Oliver', lastName: 'Sutter', role: 'Zünfter', group: 'zuenfter', since: 2005, quartier: 'Enge', email: 'oliver.sutter@zunft-drei-koenige.ch' },
  { id: 'm27', firstName: 'David', lastName: 'Maurer', role: 'Zünfter', group: 'zuenfter', since: 2014, quartier: 'Altstetten', email: 'david.maurer@zunft-drei-koenige.ch' },
  { id: 'm33', firstName: 'Ernst', lastName: 'Wirth', role: 'Ehrenmitglied', group: 'zuenfter', since: 1978, quartier: 'Enge', email: 'ernst.wirth@zunft-drei-koenige.ch' },
  { id: 'm34', firstName: 'Walter', lastName: 'Baumgartner', role: 'Ehrenmitglied', group: 'zuenfter', since: 1982, quartier: 'Enge', email: 'walter.baumgartner@zunft-drei-koenige.ch' },
  { id: 'm35', firstName: 'Fritz', lastName: 'Hofstetter', role: 'Ehrenzunftmeister', group: 'zuenfter', since: 1974, quartier: 'Wollishofen', email: 'fritz.hofstetter@zunft-drei-koenige.ch' },
  { id: 'm36', firstName: 'Adrian', lastName: 'Müller', role: 'Anwärter', group: 'anwaerter', since: 2024, quartier: 'Enge', email: 'adrian.mueller@zunft-drei-koenige.ch' },
  { id: 'm37', firstName: 'Marco', lastName: 'Staub', role: 'Anwärter', group: 'anwaerter', since: 2025, quartier: 'Wiedikon', email: 'marco.staub@zunft-drei-koenige.ch' },
  { id: 'm28', firstName: 'Philipp', lastName: 'Lang', role: 'Geselle', group: 'geselle', since: 2021, quartier: 'Enge', email: 'philipp.lang@zunft-drei-koenige.ch' },
  { id: 'm29', firstName: 'Tim', lastName: 'Koch', role: 'Geselle', group: 'geselle', since: 2022, quartier: 'Wollishofen', email: 'tim.koch@zunft-drei-koenige.ch' },
  { id: 'm30', firstName: 'Lars', lastName: 'Meier', role: 'Geselle', group: 'geselle', since: 2023, quartier: 'Enge', email: 'lars.meier@zunft-drei-koenige.ch' },
  { id: 'm31', firstName: 'Jan', lastName: 'Frei', role: 'Geselle', group: 'geselle', since: 2024, quartier: 'Wiedikon', email: 'jan.frei@zunft-drei-koenige.ch' },
  { id: 'm32', firstName: 'Samuel', lastName: 'Hartmann', role: 'Geselle', group: 'geselle', since: 2025, quartier: 'Enge', email: 'samuel.hartmann@zunft-drei-koenige.ch' },
  { id: 'm38', firstName: 'Leon', lastName: 'Imhof', role: 'Schankbursche', group: 'schankbursche', since: 2024, quartier: 'Enge', email: 'leon.imhof@zunft-drei-koenige.ch' },
  { id: 'm39', firstName: 'Nils', lastName: 'Egger', role: 'Schankbursche', group: 'schankbursche', since: 2025, quartier: 'Wollishofen', email: 'nils.egger@zunft-drei-koenige.ch' },
  { id: 'm40', firstName: 'Fabio', lastName: 'Ritter', role: 'Bewerber', group: 'bewerber', since: 2026, quartier: 'Enge', email: 'fabio.ritter@zunft-drei-koenige.ch' },
  { id: 'm41', firstName: 'Joel', lastName: 'Ammann', role: 'Bewerber', group: 'bewerber', since: 2026, quartier: 'Wiedikon', email: 'joel.ammann@zunft-drei-koenige.ch' },
]

export const events: ZunftEvent[] = [
  {
    id: 'e1',
    title: 'Dreikönigstag',
    date: '2026-01-06',
    time: '11:00',
    place: 'Altersheim Enge',
    description: 'Kaspar, Melchior und Balthasar überbringen die Glückwünsche zum Dreikönigstag.',
    kind: 'fest',
  },
  {
    id: 'e2',
    title: 'Zunftessen',
    date: '2026-01-17',
    time: '18:30',
    place: 'Zunftlokal, Zürich-Enge',
    description: 'Gemeinsames Nachtessen der Zunft nach dem Dreikönigstag.',
    kind: 'fest',
  },
  {
    id: 'e3',
    title: 'Vorstandssitzung',
    date: '2026-03-12',
    time: '19:00',
    place: 'Zunftlokal, Zürich-Enge',
    description: 'Sitzung der Vorsteherschaft zur Vorbereitung der Generalversammlung.',
    kind: 'sitzung',
  },
  {
    id: 'e4',
    title: 'Generalversammlung',
    date: '2026-03-28',
    time: '17:00',
    place: 'Zunftlokal, Zürich-Enge',
    description: 'Jahresrechnung, Wahlen und Ausblick auf das Zunftjahr.',
    kind: 'sitzung',
  },
  {
    id: 'e5',
    title: 'Sechseläuten',
    date: '2026-04-20',
    time: '14:00',
    place: 'Aufstellung Bürkliplatz',
    description: 'Umzug der Zunft mit den Drei Königen, Pagen, Banner und Zunftmusik.',
    kind: 'umzug',
  },
  {
    id: 'e6',
    title: 'Sommerhöck',
    date: '2026-06-13',
    time: '16:00',
    place: 'Quartier Enge',
    description: 'Lockeres Treffen der Zunftbrüder und Gesellen im Sommer.',
    kind: 'intern',
  },
  {
    id: 'e7',
    title: 'Familienausflug',
    date: '2026-09-26',
    time: '10:00',
    place: 'Bahnhof Enge',
    description: 'Ausflug mit Familien. Treffpunkt beim Bahnhof Enge.',
    kind: 'fest',
  },
  {
    id: 'e8',
    title: 'Herbstversammlung',
    date: '2026-10-17',
    time: '17:30',
    place: 'Zunftlokal, Zürich-Enge',
    description: 'Rückblick auf das Zunftjahr und Planung von Klausabend und Dreikönig.',
    kind: 'sitzung',
  },
  {
    id: 'e9',
    title: 'Martinifeier',
    date: '2026-11-14',
    time: '18:00',
    place: 'Zunftlokal, Zürich-Enge',
    description: 'Abendessen zum Martinstag mit der Zunftmusik.',
    kind: 'fest',
  },
  {
    id: 'e10',
    title: 'Klausabend',
    date: '2026-12-05',
    time: '18:30',
    place: 'Zunftlokal, Zürich-Enge',
    description: 'Jahresausklang der Zunft vor den Feiertagen.',
    kind: 'fest',
  },
  {
    id: 'e11',
    title: 'Weihnachtskonzert',
    date: '2026-12-12',
    time: '19:00',
    place: 'Kirche Enge',
    description: 'Konzert der Zunftmusik zum Abschluss des Jahres.',
    kind: 'intern',
  },
  {
    id: 'e12',
    title: 'Dreikönigstag',
    date: '2027-01-06',
    time: '11:00',
    place: 'Altersheim Enge',
    description: 'Besuch der Drei Könige zum Auftakt des neuen Zunftjahres.',
    kind: 'fest',
  },
]

export const MONTHS = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
]

export const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

export function todayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function formatLong(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  const weekday = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][date.getDay()]
  return `${weekday}, ${d}. ${MONTHS[m - 1]} ${y}`
}

export function memberName(member: Member) {
  return `${member.firstName} ${member.lastName}`
}

export type NewsPhoto = {
  src: string
  caption: string
}

export type NewsItem = {
  id: string
  date: string
  title: string
  text: string
  body: string
  place: string
  photos: NewsPhoto[]
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d}. ${MONTHS[m - 1]} ${y}`
}

export const news: NewsItem[] = [
  {
    id: 'n1',
    date: '2025-09-13',
    title: 'Zwei Tage, drei Mal Welterbe und ein Alphorn-Trio',
    text: 'Ausflug mit Treffpunkt am Tessinerplatz: drei Welterbestätten und ein Alphorn-Trio.',
    body: 'Am Tessinerplatz traf sich die Zunft zur zweitägigen Fahrt. Auf dem Programm standen drei Welterbestätten, und den Abschluss bildete ein Alphorn-Trio. Mit dabei waren Brüder, Gesellen und Gäste aus der Enge.',
    place: 'Tessinerplatz',
    photos: [
      { src: '/news/welterbe.svg', caption: 'Unterwegs zu den Welterbestätten' },
      { src: '/news/alphorn.svg', caption: 'Alphorn-Trio zum Abschluss' },
    ],
  },
  {
    id: 'n2',
    date: '2025-07-02',
    title: 'Sommerstamm mit Tiefgang',
    text: 'Die Zunft traf sich in Uitikon Waldegg zum Sommerstamm im kühlen Untergrund.',
    body: 'Am 2. Juli 2025 traf sich die Zunft in Uitikon Waldegg zum Sommerstamm. Statt in der Sommerhitze sass man im kühlen Untergrund beisammen, mit Stamm, Gespräch und einem gemeinsamen Imbiss.',
    place: 'Uitikon Waldegg',
    photos: [
      { src: '/news/stamm.svg', caption: 'Sommerstamm im Untergrund' },
      { src: '/news/tafel.svg', caption: 'Gemeinsame Tafel' },
    ],
  },
  {
    id: 'n3',
    date: '2025-06-21',
    title: 'Neptunfahrt ausgebucht',
    text: 'Der Segeltörn auf dem Zürichsee ab Hafen Enge war vollständig ausgebucht.',
    body: 'Die Neptunfahrt ab Hafen Enge war restlos ausgebucht. Bei gutem Wetter ging es auf den Zürichsee, in Erinnerung an das Kriegsschiff «Neptun» der Zürcher Schiffskompagnie.',
    place: 'Hafen Enge',
    photos: [
      { src: '/news/neptun.svg', caption: 'Ablegen am Hafen Enge' },
      { src: '/news/see.svg', caption: 'Auf dem Zürichsee' },
    ],
  },
  {
    id: 'n4',
    date: '2025-04-28',
    title: 'Bildung, Kultur und auch Wein',
    text: 'So war das Nachsechseläuten angelegt: Bildung, Kultur und Wein.',
    body: 'Das Nachsechseläuten verband einen kurzen Bildungsteil mit Kultur und einem Glas Wein. Die Zunft blieb nach dem Umzug beisammen und liess den Tag in der Enge ausklingen.',
    place: 'Zürich-Enge',
    photos: [
      { src: '/news/sechselauten.svg', caption: 'Nach dem Sechseläuten' },
      { src: '/news/wein.svg', caption: 'Ausklang bei einem Glas Wein' },
    ],
  },
]

export type HistoryMark = {
  year: string
  text: string
}

export const history: HistoryMark[] = [
  {
    year: '1897',
    text: 'Am 6. Februar gründet sich die Zunft im Hotel Rigi, nachdem die Enge Stadtquartier geworden ist. Sie trägt den Namen der Kapelle «Wacht zu den Drei Königen». Erster Zunftmeister wird Elias Hasler. Noch im selben Jahr folgt die Aufnahme in die Zürcher Zünfte und am 26. April der erste Umzug am Sechseläuten. Das Wappen ist das Gemeindewappen der Enge mit Kaspar, Melchior und Balthasar.',
  },
  {
    year: '1937',
    text: 'Zum vierzigjährigen Bestehen tritt eine eigene Kostümgruppe an: Uniformen der Zürcher Schiffskompagnie von 1805, mit dem Kriegsschiff «Neptun».',
  },
  {
    year: '1968',
    text: 'Seither tragen die Zünfter die Tracht hablicher Engemer Bürger aus der Zeit des zweiten Rokoko. Die jüngeren Mitglieder bleiben bei der Schiffsuniform.',
  },
]

export function upcomingEvents(from = todayKey()) {
  return events
    .filter((event) => event.date >= from)
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
}
