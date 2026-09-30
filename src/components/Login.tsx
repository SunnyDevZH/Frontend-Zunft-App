import { FormEvent, useState } from 'react'
import { CoatOfArms } from './CoatOfArms'
import { nameFromEmail, type Session } from '../session'

type LoginProps = {
  onSuccess: (session: Session) => void
  onBack: () => void
}

export function Login({ onSuccess, onBack }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function submit(event: FormEvent) {
    event.preventDefault()
    const trimmed = email.trim().toLowerCase()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
    if (!validEmail || password.length < 4) {
      setError('Bitte eine gültige E-Mail und ein Passwort mit mindestens 4 Zeichen eingeben.')
      return
    }
    onSuccess({ email: trimmed, name: nameFromEmail(trimmed), password })
  }

  return (
    <main className="login">
      <form className="login__card" onSubmit={submit}>
        <button className="text-btn login__back" type="button" onClick={onBack}>
          Zurück
        </button>
        <CoatOfArms className="login__arms" filled />
        <p className="eyebrow">Zunft zu den Drei Königen</p>
        <h1>Anmeldung</h1>
        <p className="lede">
          Melde dich an, um Übersicht, Zunftkalender und Mitgliederverzeichnis zu öffnen.
        </p>

        <label>
          E-Mail
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@zunft-drei-koenige.ch"
          />
        </label>
        <label>
          Passwort
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Passwort"
          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <button className="btn btn--solid" type="submit">
          Eintreten
        </button>
      </form>
    </main>
  )
}
