const SESSION_KEY = 'zunft-session'

export type Session = {
  name: string
  email: string
  phone?: string
  quartier?: string
  amt?: string
  profession?: string
  linkedin?: string
  password?: string
  guest?: boolean
}

export function readSession(): Session | null {
  const raw = sessionStorage.getItem(SESSION_KEY)
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as Session
    if (!parsed.email || !parsed.name) return null
    return parsed
  } catch {
    return null
  }
}

export function writeSession(session: Session) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY)
}

export function nameFromEmail(email: string) {
  const local = email.split('@')[0] ?? 'Mitglied'
  const parts = local.split(/[.\-_]+/).filter(Boolean)
  if (parts.length === 0) return 'Zunftmitglied'
  return parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
}
