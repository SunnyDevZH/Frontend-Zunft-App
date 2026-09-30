import type { ReactNode } from 'react'
import { CoatOfArms } from './CoatOfArms'
import type { Session } from '../session'

export type Page = 'dashboard' | 'calendar' | 'members' | 'contact'

const NAV: { id: Page; label: string }[] = [
  { id: 'dashboard', label: 'Übersicht' },
  { id: 'calendar', label: 'Kalender' },
  { id: 'members', label: 'Mitglieder' },
  { id: 'contact', label: 'Kontakt' },
]

type ShellProps = {
  session: Session
  page: Page
  onPage: (page: Page) => void
  onLogout: () => void
  children: ReactNode
}

export function Shell({ session, page, onPage, onLogout, children }: ShellProps) {
  const title = NAV.find((item) => item.id === page)?.label ?? 'Übersicht'

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <CoatOfArms className="brand__arms" />
          <div>
            <strong>Drei Könige</strong>
            <span>Zürich-Enge</span>
          </div>
        </div>
        <nav className="sidenav" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={page === item.id ? 'is-active' : ''}
              onClick={() => onPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="sidebar__foot">
          <span>{session.name}</span>
          <button type="button" onClick={onLogout}>
            Abmelden
          </button>
          <small>Lokale Vorschau · Beispieldaten</small>
        </div>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Zunft zu den Drei Königen</p>
            <h1>{title}</h1>
          </div>
          <div className="topbar__user">
            <span>{session.name}</span>
            <button type="button" onClick={onLogout}>
              Abmelden
            </button>
          </div>
        </header>
        <div className="content">{children}</div>
      </div>

      <nav className="tabbar" aria-label="Hauptnavigation">
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            className={page === item.id ? 'is-active' : ''}
            onClick={() => onPage(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
