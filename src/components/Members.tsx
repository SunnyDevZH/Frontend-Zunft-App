import { FormEvent, useEffect, useMemo, useState } from 'react'
import {
  GROUP_LABELS,
  GROUP_ORDER,
  memberName,
  members,
  type Member,
  type MemberGroup,
} from '../data'
import type { Session } from '../session'

type MembersProps = {
  session: Session
  onUpdateSession: (session: Session) => void
  onLogout: () => void
}

type AccountDraft = {
  name: string
  email: string
  phone: string
  quartier: string
  amt: string
  profession: string
  linkedin: string
}

function draftFromSession(session: Session): AccountDraft {
  return {
    name: session.name,
    email: session.email,
    phone: session.phone ?? '',
    quartier: session.quartier ?? '',
    amt: session.amt ?? '',
    profession: session.profession ?? '',
    linkedin: session.linkedin ?? '',
  }
}

export function Members({ session, onUpdateSession, onLogout }: MembersProps) {
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState<MemberGroup | 'alle'>('alle')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return members.filter((member) => {
      if (group !== 'alle' && member.group !== group) return false
      if (!needle) return true
      const haystack = `${member.firstName} ${member.lastName} ${member.role} ${member.quartier}`.toLowerCase()
      return haystack.includes(needle)
    })
  }, [query, group])

  const active = members.find((member) => member.id === activeId) ?? null

  useEffect(() => {
    if (!active && !settingsOpen) return
    function onKey(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setActiveId(null)
      setSettingsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, settingsOpen])

  return (
    <div className="members">
      <div className="members__toolbar">
        <div className="members__actions">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setActiveId(null)
              setSettingsOpen(true)
            }}
          >
            Kontoeinstellungen
          </button>
        </div>
        <label className="search">
          <span className="sr-only">Mitglied suchen</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name, Amt oder Quartier suchen"
          />
        </label>
        <div className="chips" role="tablist" aria-label="Gruppen">
          <button type="button" className={group === 'alle' ? 'is-active' : ''} onClick={() => setGroup('alle')}>
            Alle · {members.length}
          </button>
          {GROUP_ORDER.map((key) => (
            <button
              key={key}
              type="button"
              className={group === key ? 'is-active' : ''}
              onClick={() => setGroup(key)}
            >
              {GROUP_LABELS[key]}
            </button>
          ))}
        </div>
        <p className="muted">Beispielverzeichnis für die Vorschau. Die echten Einträge folgen mit der Anbindung.</p>
      </div>

      <div className="members__layout">
        {filtered.length === 0 && <p className="panel empty">Keine Mitglieder gefunden.</p>}
        {GROUP_ORDER.map((key) => {
          const list = filtered.filter((member) => member.group === key)
          if (list.length === 0) return null
          return (
            <section key={key} className="member-section">
              <header>
                <h2>{GROUP_LABELS[key]}</h2>
                <span>{list.length}</span>
              </header>
              <ul className="member-grid">
                {list.map((member) => (
                  <li key={member.id}>
                    <button
                      type="button"
                      className={activeId === member.id ? 'member-card is-active' : 'member-card'}
                      onClick={() => {
                        setSettingsOpen(false)
                        setActiveId(member.id)
                      }}
                    >
                      <span className="avatar" aria-hidden="true">
                        {member.firstName[0]}
                        {member.lastName[0]}
                      </span>
                      <span>
                        <strong>{memberName(member)}</strong>
                        <em>{member.role}</em>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>

      {active && <MemberOverlay member={active} onClose={() => setActiveId(null)} />}
      {settingsOpen && (
        <AccountOverlay
          session={session}
          onClose={() => setSettingsOpen(false)}
          onSave={onUpdateSession}
          onLogout={onLogout}
        />
      )}
    </div>
  )
}

function MemberOverlay({ member, onClose }: { member: Member; onClose: () => void }) {
  return (
    <div className="overlay" role="presentation" onClick={onClose}>
      <div
        className="overlay__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="member-overlay-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="overlay__head">
          <p className="eyebrow">Mitglied</p>
          <button className="text-btn" type="button" onClick={onClose}>
            Schliessen
          </button>
        </div>
        <span className="avatar avatar--lg" aria-hidden="true">
          {member.firstName[0]}
          {member.lastName[0]}
        </span>
        <h2 id="member-overlay-title">{memberName(member)}</h2>
        <p className="role">{member.role}</p>
        <dl>
          <div>
            <dt>Gruppe</dt>
            <dd>{GROUP_LABELS[member.group]}</dd>
          </div>
          <div>
            <dt>In der Zunft seit</dt>
            <dd>{member.since}</dd>
          </div>
          <div>
            <dt>Quartier</dt>
            <dd>{member.quartier}</dd>
          </div>
          <div>
            <dt>E-Mail</dt>
            <dd>{member.email}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

function AccountOverlay({
  session,
  onClose,
  onSave,
  onLogout,
}: {
  session: Session
  onClose: () => void
  onSave: (session: Session) => void
  onLogout: () => void
}) {
  const [draft, setDraft] = useState<AccountDraft>(() => draftFromSession(session))
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)
  const [passwordOpen, setPasswordOpen] = useState(false)
  const [passwordSaved, setPasswordSaved] = useState(false)

  function update(field: keyof AccountDraft, value: string) {
    setSaved(false)
    setDraft((current) => ({ ...current, [field]: value }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const name = draft.name.trim()
    const email = draft.email.trim().toLowerCase()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!name || !validEmail) {
      setError('Name und eine gültige E-Mail sind nötig.')
      setSaved(false)
      return
    }
    onSave({
      ...session,
      name,
      email,
      phone: draft.phone.trim(),
      quartier: draft.quartier.trim(),
      amt: draft.amt.trim(),
      profession: draft.profession.trim(),
      linkedin: draft.linkedin.trim(),
    })
    setError('')
    setSaved(true)
  }

  return (
    <>
    <div className="overlay" role="presentation" onClick={onClose}>
      <form
        className="overlay__card account-form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-overlay-title"
        onClick={(event) => event.stopPropagation()}
        onSubmit={submit}
      >
        <div className="overlay__head">
          <div>
            <p className="eyebrow">Eigenes Konto</p>
            <h2 id="account-overlay-title">Kontoeinstellungen</h2>
          </div>
          <button className="text-btn" type="button" onClick={onClose}>
            Schliessen
          </button>
        </div>
        <div className="account-form__grid">
          <label>
            Name
            <input value={draft.name} onChange={(event) => update('name', event.target.value)} />
          </label>
          <label>
            E-Mail
            <input
              type="email"
              autoComplete="email"
              value={draft.email}
              onChange={(event) => update('email', event.target.value)}
            />
          </label>
          <label>
            Telefon
            <input
              type="tel"
              autoComplete="tel"
              value={draft.phone}
              onChange={(event) => update('phone', event.target.value)}
              placeholder="079 000 00 00"
            />
          </label>
          <label>
            Quartier
            <input
              value={draft.quartier}
              onChange={(event) => update('quartier', event.target.value)}
              placeholder="Enge"
            />
          </label>
          <label>
            Amt
            <input
              value={draft.amt}
              onChange={(event) => update('amt', event.target.value)}
              placeholder="z. B. Zunftmeister"
            />
          </label>
          <label>
            Beruf
            <input
              autoComplete="organization-title"
              value={draft.profession}
              onChange={(event) => update('profession', event.target.value)}
              placeholder="z. B. Architekt"
            />
          </label>
          <label>
            LinkedIn
            <input
              type="url"
              inputMode="url"
              autoComplete="url"
              value={draft.linkedin}
              onChange={(event) => update('linkedin', event.target.value)}
              placeholder="https://www.linkedin.com/in/…"
            />
          </label>
        </div>
        <button
          className="btn btn--ghost"
          type="button"
          onClick={() => {
            setPasswordSaved(false)
            setPasswordOpen(true)
          }}
        >
          Neues Passwort
        </button>
        {error && <p className="form-error">{error}</p>}
        {saved && <p className="form-ok">Konto gespeichert.</p>}
        {passwordSaved && <p className="form-ok">Passwort geändert.</p>}
        <div className="account-form__actions">
          <button className="btn btn--solid" type="submit">
            Speichern
          </button>
          <button className="btn btn--danger" type="button" onClick={onLogout}>
            Abmelden
          </button>
        </div>
      </form>
    </div>
    {passwordOpen && (
      <PasswordOverlay
        currentPassword={session.password ?? ''}
        onClose={() => setPasswordOpen(false)}
        onSave={(password) => {
          onSave({ ...session, password })
          setPasswordSaved(true)
          setPasswordOpen(false)
        }}
      />
    )}
    </>
  )
}

function PasswordOverlay({
  currentPassword,
  onClose,
  onSave,
}: {
  currentPassword: string
  onClose: () => void
  onSave: (password: string) => void
}) {
  const [oldPassword, setOldPassword] = useState('')
  const [nextPassword, setNextPassword] = useState('')
  const [nextPasswordAgain, setNextPasswordAgain] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      event.stopPropagation()
      onClose()
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose])

  function submit(event: FormEvent) {
    event.preventDefault()
    if (oldPassword !== currentPassword) {
      setError('Das alte Passwort stimmt nicht.')
      return
    }
    if (nextPassword.length < 4) {
      setError('Das neue Passwort muss mindestens 4 Zeichen haben.')
      return
    }
    if (nextPassword !== nextPasswordAgain) {
      setError('Das neue Passwort muss zweimal gleich sein.')
      return
    }
    onSave(nextPassword)
  }

  return (
    <div className="overlay overlay--front" role="presentation" onClick={onClose}>
      <form
        className="overlay__card account-form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="password-overlay-title"
        onClick={(event) => event.stopPropagation()}
        onSubmit={submit}
      >
        <div className="overlay__head">
          <div>
            <p className="eyebrow">Eigenes Konto</p>
            <h2 id="password-overlay-title">Neues Passwort</h2>
          </div>
          <button className="text-btn" type="button" onClick={onClose}>
            Schliessen
          </button>
        </div>
        <div className="account-form__grid">
          <label>
            Altes Passwort
            <input
              type="password"
              autoComplete="current-password"
              value={oldPassword}
              onChange={(event) => setOldPassword(event.target.value)}
            />
          </label>
          <label>
            Neues Passwort
            <input
              type="password"
              autoComplete="new-password"
              value={nextPassword}
              onChange={(event) => setNextPassword(event.target.value)}
            />
          </label>
          <label>
            Neues Passwort wiederholen
            <input
              type="password"
              autoComplete="new-password"
              value={nextPasswordAgain}
              onChange={(event) => setNextPasswordAgain(event.target.value)}
            />
          </label>
        </div>
        {error && <p className="form-error">{error}</p>}
        <div className="account-form__actions">
          <button className="btn btn--solid" type="submit">
            Speichern
          </button>
          <button className="btn btn--ghost" type="button" onClick={onClose}>
            Abbrechen
          </button>
        </div>
      </form>
    </div>
  )
}
