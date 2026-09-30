import { FormEvent, useState } from 'react'

type Draft = {
  name: string
  email: string
  phone: string
  message: string
}

const EMPTY: Draft = { name: '', email: '', phone: '', message: '' }

export function Contact() {
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function update(field: keyof Draft, value: string) {
    setSent(false)
    setDraft((current) => ({ ...current, [field]: value }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const name = draft.name.trim()
    const email = draft.email.trim()
    const message = draft.message.trim()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!name || !validEmail || message.length < 4) {
      setError('Name, eine gültige E-Mail und eine Mitteilung sind nötig.')
      setSent(false)
      return
    }
    setError('')
    setSent(true)
    setDraft(EMPTY)
  }

  return (
    <div className="contact">
      <section className="panel contact__card">
        <p className="eyebrow">Schreiben</p>
        <h2>Kontaktformular</h2>
        <p className="lede">Nachricht an die Zunft zu den Drei Königen.</p>
        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input
              autoComplete="name"
              value={draft.name}
              onChange={(event) => update('name', event.target.value)}
            />
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
            Mitteilung
            <textarea
              rows={5}
              value={draft.message}
              onChange={(event) => update('message', event.target.value)}
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          {sent && (
            <p className="form-ok">
              Danke für die Nachricht. In dieser lokalen Vorschau wird sie nicht an die Zunft gesendet.
            </p>
          )}
          <button className="btn btn--solid" type="submit">
            Senden
          </button>
        </form>
      </section>

      <section className="panel contact__card">
        <p className="eyebrow">Angaben</p>
        <h2>Zunft zu den Drei Königen</h2>
        <dl className="contact__facts">
          <div>
            <dt>Adresse</dt>
            <dd>
              c/o Kongresshaus Zürich AG
              <br />
              Gotthardstrasse 5
              <br />
              8002 Zürich
            </dd>
          </div>
          <div>
            <dt>Zunfthaus</dt>
            <dd>Kongresshaus, Dreikönigsaal</dd>
          </div>
          <div>
            <dt>Telefon</dt>
            <dd>
              <a href="tel:+41442016774">044 201 67 74</a>
            </dd>
          </div>
          <div>
            <dt>E-Mail</dt>
            <dd>
              <a href="mailto:news@zunft-drei-koenige.ch">news@zunft-drei-koenige.ch</a>
            </dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>
              <a href="https://zunft-drei-koenige.ch/" target="_blank" rel="noreferrer">
                zunft-drei-koenige.ch
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <p className="contact__credit">
        Diese App wurde von der Firma DevUp Studio in Zürich erstellt, von einem Mitglied der Zunft zu den
        Drei Königen.
      </p>
    </div>
  )
}
