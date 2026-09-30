import { useCallback, useState } from 'react'
import { Calendar } from './components/Calendar'
import { Contact } from './components/Contact'
import { Dashboard } from './components/Dashboard'
import { Login } from './components/Login'
import { Members } from './components/Members'
import { Shell, type Page } from './components/Shell'
import { Splash } from './components/Splash'
import { clearSession, readSession, writeSession, type Session } from './session'

type Screen = 'splash' | 'login' | 'app'

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash')
  const [session, setSession] = useState<Session | null>(() => readSession())
  const [page, setPage] = useState<Page>('dashboard')

  const openLogin = useCallback(() => {
    setScreen('login')
  }, [])

  const enterAsGuest = useCallback(() => {
    const guest: Session = { name: 'Gast', email: 'gast@lokal', guest: true }
    writeSession(guest)
    setSession(guest)
    setPage('dashboard')
    setScreen('app')
  }, [])

  if (screen === 'splash') {
    return <Splash onLogin={openLogin} onGuestLogin={enterAsGuest} />
  }

  if (screen === 'login' || !session) {
    return (
      <Login
        onBack={() => setScreen('splash')}
        onSuccess={(next) => {
          writeSession(next)
          setSession(next)
          setPage('dashboard')
          setScreen('app')
        }}
      />
    )
  }

  return (
    <Shell
      session={session}
      page={page}
      onPage={setPage}
      onLogout={() => {
        clearSession()
        setSession(null)
        setScreen('login')
      }}
    >
      {page === 'dashboard' && (
        <Dashboard
          session={session}
          onOpenCalendar={() => setPage('calendar')}
          onOpenMembers={() => setPage('members')}
        />
      )}
      {page === 'calendar' && <Calendar />}
      {page === 'contact' && <Contact />}
      {page === 'members' && (
        <Members
          session={session}
          onUpdateSession={(next) => {
            writeSession(next)
            setSession(next)
          }}
          onLogout={() => {
            clearSession()
            setSession(null)
            setScreen('login')
          }}
        />
      )}
    </Shell>
  )
}
