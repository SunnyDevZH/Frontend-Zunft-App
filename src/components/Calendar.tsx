import { useMemo, useState } from 'react'
import { events, formatLong, KIND_LABELS, MONTHS, todayKey, WEEKDAYS, type ZunftEvent } from '../data'

function monthCells(year: number, month: number) {
  const first = new Date(year, month, 1)
  const offset = (first.getDay() + 6) % 7
  const days = new Date(year, month + 1, 0).getDate()
  const cells: { key: string | null; day: number | null }[] = []
  for (let i = 0; i < offset; i += 1) cells.push({ key: null, day: null })
  for (let day = 1; day <= days; day += 1) {
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    cells.push({ key, day })
  }
  while (cells.length % 7 !== 0) cells.push({ key: null, day: null })
  return cells
}

export function Calendar() {
  const today = todayKey()
  const now = new Date()
  const [cursor, setCursor] = useState({ year: now.getFullYear(), month: now.getMonth() })
  const [selected, setSelected] = useState(today)
  const [rsvp, setRsvp] = useState<Record<string, boolean>>({})

  const byDate = useMemo(() => {
    const map = new Map<string, ZunftEvent[]>()
    for (const event of events) {
      const list = map.get(event.date) ?? []
      list.push(event)
      map.set(event.date, list)
    }
    return map
  }, [])

  const cells = monthCells(cursor.year, cursor.month)
  const selectedEvents = byDate.get(selected) ?? []

  function shift(delta: number) {
    setCursor((current) => {
      const date = new Date(current.year, current.month + delta, 1)
      return { year: date.getFullYear(), month: date.getMonth() }
    })
  }

  return (
    <div className="calendar-layout">
      <section className="panel calendar-panel">
        <header className="calendar-nav">
          <button type="button" onClick={() => shift(-1)} aria-label="Vorheriger Monat">
            ‹
          </button>
          <h2>
            {MONTHS[cursor.month]} {cursor.year}
          </h2>
          <button type="button" onClick={() => shift(1)} aria-label="Nächster Monat">
            ›
          </button>
        </header>
        <div className="weekdays">
          {WEEKDAYS.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="month-grid">
          {cells.map((cell, index) => {
            if (!cell.key || !cell.day) return <span key={`empty-${index}`} className="day day--empty" />
            const hasEvents = byDate.has(cell.key)
            const className = [
              'day',
              cell.key === today ? 'is-today' : '',
              cell.key === selected ? 'is-selected' : '',
              hasEvents ? 'has-event' : '',
            ]
              .filter(Boolean)
              .join(' ')
            return (
              <button key={cell.key} type="button" className={className} onClick={() => setSelected(cell.key!)}>
                {cell.day}
                {hasEvents && <i />}
              </button>
            )
          })}
        </div>
      </section>

      <aside className="panel day-panel">
        <p className="eyebrow">Gewählter Tag</p>
        <h2>{formatLong(selected)}</h2>
        {selectedEvents.length === 0 ? (
          <p className="muted">An diesem Tag steht kein Anlass an.</p>
        ) : (
          <ul className="event-list">
            {selectedEvents.map((event) => {
              const going = rsvp[event.id] === true
              return (
                <li key={event.id}>
                  <div>
                    <strong>{event.title}</strong>
                    <span>
                      {event.time} Uhr · {event.place}
                    </span>
                    <span>{event.description}</span>
                    <div className="rsvp-row">
                      {!going && <p className="rsvp-hint">Hier zusagen 👉</p>}
                      <button
                        type="button"
                        className={going ? 'rsvp is-in' : 'rsvp'}
                        aria-pressed={going}
                        onClick={() => setRsvp((current) => ({ ...current, [event.id]: !going }))}
                      >
                        {going ? 'Absagen' : 'Zusagen'}
                      </button>
                    </div>
                  </div>
                  <em className={`tag tag--${event.kind}`}>{KIND_LABELS[event.kind]}</em>
                </li>
              )
            })}
          </ul>
        )}
      </aside>
    </div>
  )
}
