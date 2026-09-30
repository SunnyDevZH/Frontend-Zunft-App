import { useEffect, useRef, useState } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { KIND_LABELS, history, members, news, upcomingEvents, formatDate, formatLong, type NewsItem } from '../data'
import { guilds, type Guild } from '../guilds'
import { GuildShield } from './GuildShield'
import { ParadeMap } from './ParadeMap'
import { MAP_STYLE } from './mapStyle'
import type { Session } from '../session'

type DashboardProps = {
  session: Session
  onOpenCalendar: () => void
  onOpenMembers: () => void
}

export function Dashboard({ session, onOpenCalendar, onOpenMembers }: DashboardProps) {
  const openEvents = upcomingEvents()
  const next = openEvents.slice(0, 3)
  const featured = next[0]
  const [openNewsId, setOpenNewsId] = useState<string | null>(null)
  const [openGuildId, setOpenGuildId] = useState<string | null>(null)
  const openNews = news.find((item) => item.id === openNewsId) ?? null
  const openGuild = guilds.find((guild) => guild.id === openGuildId) ?? null

  return (
    <div className="dashboard">
      <section className="stat-row" aria-label="Kennzahlen">
        <button type="button" onClick={onOpenMembers}>
          <strong>{members.length}</strong>
          <span>Mitglieder</span>
        </button>
        <button type="button" onClick={onOpenCalendar}>
          <strong>{openEvents.length}</strong>
          <span>Offene Anlässe</span>
        </button>
      </section>

      <section className="hero-card">
        <div>
          <p className="eyebrow">Grüezi</p>
          <h2>{session.name}</h2>
          <p>
            Die Zunft zu den Drei Königen wurde 1897 bei der Eingemeindung der Enge gegründet.
            Sie führt das alte Gemeindewappen mit Kaspar, Melchior und Balthasar.
          </p>
        </div>
        {featured && (
          <article className="hero-card__next">
            <p className="eyebrow">Nächster Anlass</p>
            <h3>{featured.title}</h3>
            <p>{formatLong(featured.date)}</p>
            <p>
              {featured.time} Uhr · {featured.place}
            </p>
            <button className="btn btn--solid" type="button" onClick={onOpenCalendar}>
              Zum Kalender
            </button>
          </article>
        )}
      </section>

      <section className="split">
        <div className="panel">
          <header className="panel__head">
            <h2>Nächste Termine</h2>
            <button type="button" className="text-btn" onClick={onOpenCalendar}>
              Ganzer Kalender
            </button>
          </header>
          <ul className="event-list">
            {next.map((event) => (
              <li key={event.id}>
                <div>
                  <strong>{event.title}</strong>
                  <span>
                    {formatLong(event.date)} · {event.time} Uhr
                  </span>
                  <span>{event.place}</span>
                </div>
                <em className={`tag tag--${event.kind}`}>{KIND_LABELS[event.kind]}</em>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <header className="panel__head">
            <h2>Zunft News</h2>
          </header>
          <ul className="news-list">
            {news.map((item) => (
              <li key={item.id}>
                <button type="button" onClick={() => setOpenNewsId(item.id)}>
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {openNews && <NewsOverlay item={openNews} onClose={() => setOpenNewsId(null)} />}

      <section className="panel">
        <header className="panel__head">
          <h2>Zunftgeschichte</h2>
        </header>
        <p className="lead">
          Die Zunft der Enge zählt zu den Zünften der jüngeren Linie. Freundschaft, gemeinsame Anlässe
          und die Verbundenheit mit Zürich tragen sie seit der Gründung.
        </p>
        <ul className="history">
          {history.map((mark) => (
            <li key={mark.year}>
              <details>
                <summary>{mark.year}</summary>
                <p>{mark.text}</p>
              </details>
            </li>
          ))}
        </ul>
        <button className="btn btn--ghost" type="button" onClick={onOpenMembers}>
          Mitglieder ansehen
        </button>
      </section>

      <section className="panel">
        <header className="panel__head">
          <h2>Sächsilüüte</h2>
        </header>
        <p className="lead">
          Am dritten Montag im April zieht die Zunft mit den anderen Zürcher Zünften zum Feuer.
        </p>
        <ParadeMap />
        <p className="parade-note">
          Um 15 Uhr beginnt der Umzug bei der Pestalozzianlage. Die Bahnhofstrasse hinunter zum Bürkliplatz,
          die Fraumünsterstrasse hoch, links in die Poststrasse und wieder die Bahnhofstrasse hoch bis zur
          Uraniastrasse. Rechts über die Rudolf-Brun-Brücke und das Limmatquai hinunter bis zum Bellevue.
          Der Böögg brennt um 18 Uhr.
        </p>
      </section>

      <section className="panel">
        <header className="panel__head">
          <h2>Die Zünfte</h2>
        </header>
        <p className="lead">
          Insgesamt {guilds.length} Zünfte. Zwölf der älteren Linie wurden 1336 gegründet, vierzehn der
          jüngeren Linie seit 1867. Jede hat ein Zunfthaus oder eine Zunftstube.
        </p>
        <ul className="guild-list">
          {guilds.slice(0, 5).map((guild) => (
            <GuildItem key={guild.id} guild={guild} onOpen={() => setOpenGuildId(guild.id)} />
          ))}
        </ul>
        <details className="guilds__more">
          <summary>Weitere Zünfte</summary>
          <ul className="guild-list">
            {guilds.slice(5).map((guild) => (
              <GuildItem key={guild.id} guild={guild} onOpen={() => setOpenGuildId(guild.id)} />
            ))}
          </ul>
        </details>
        {openGuild && <GuildOverlay guild={openGuild} onClose={() => setOpenGuildId(null)} />}
      </section>
    </div>
  )
}

function GuildItem({ guild, onOpen }: { guild: Guild; onOpen: () => void }) {
  return (
    <li className={guild.id === 'drei-koenige' ? 'is-own' : ''}>
      <button type="button" onClick={onOpen}>
        <GuildShield id={guild.id} name={guild.name} />
        <span>
          <strong>{guild.name}</strong>
          <em>Seit {guild.founded}</em>
        </span>
      </button>
    </li>
  )
}

function GuildMap({ guild }: { guild: Guild }) {
  const frame = useRef<HTMLDivElement>(null)
  const href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${guild.lat},${guild.lng}`)}`

  useEffect(() => {
    const node = frame.current
    if (!node) return

    const map = new maplibregl.Map({
      container: node,
      style: MAP_STYLE,
      center: [guild.lng, guild.lat],
      zoom: 16.4,
      interactive: false,
      attributionControl: false,
      maplibreLogo: false,
    })

    const pin = document.createElement('div')
    pin.className = 'map-pin'
    new maplibregl.Marker({ element: pin }).setLngLat([guild.lng, guild.lat]).addTo(map)

    const observer = new ResizeObserver(() => map.resize())
    observer.observe(node)
    return () => {
      observer.disconnect()
      map.remove()
    }
  }, [guild.lat, guild.lng])

  return (
    <div className="guild-map">
      <div className="guild-map__frame" ref={frame} role="img" aria-label={`Karte ${guild.address}`} />
      <div className="guild-map__bar">
        <span>© OpenFreeMap · OpenStreetMap</span>
        <a href={href} target="_blank" rel="noreferrer">
          In Karten öffnen
        </a>
      </div>
    </div>
  )
}

function GuildOverlay({ guild, onClose }: { guild: Guild; onClose: () => void }) {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="overlay" role="presentation" onClick={onClose}>
      <div
        className="overlay__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guild-overlay-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="overlay__head">
          <p className="eyebrow">{guild.line === 'alt' ? 'Ältere Linie' : 'Jüngere Linie'}</p>
          <button className="text-btn" type="button" onClick={onClose}>
            Schliessen
          </button>
        </div>
        <GuildShield id={guild.id} name={guild.name} />
        <h2 id="guild-overlay-title">{guild.name}</h2>
        <p className="role">Seit {guild.founded}</p>
        <dl>
          <div>
            <dt>Zunfthaus</dt>
            <dd>{guild.house}</dd>
          </div>
          <div>
            <dt>Adresse</dt>
            <dd>{guild.address}</dd>
          </div>
        </dl>
        <p>{guild.about}</p>
        <GuildMap guild={guild} />
      </div>
    </div>
  )
}

function NewsOverlay({ item, onClose }: { item: NewsItem; onClose: () => void }) {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="overlay" role="presentation" onClick={onClose}>
      <div
        className="overlay__card overlay__card--news"
        role="dialog"
        aria-modal="true"
        aria-labelledby="news-overlay-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="overlay__head">
          <p className="eyebrow">Zunft News</p>
          <button className="text-btn" type="button" onClick={onClose}>
            Schliessen
          </button>
        </div>
        <time dateTime={item.date}>{formatDate(item.date)}</time>
        <h2 id="news-overlay-title">{item.title}</h2>
        <p className="role">{item.place}</p>
        <p>{item.body}</p>
        <div className="news-photos">
          {item.photos.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.caption} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
