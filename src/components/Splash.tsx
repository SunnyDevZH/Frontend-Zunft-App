import { CoatOfArms } from './CoatOfArms'

type SplashProps = {
  onLogin: () => void
  onGuestLogin: () => void
}

export function Splash({ onLogin, onGuestLogin }: SplashProps) {
  return (
    <main className="splash">
      <div className="splash__glow" />
      <div className="splash__content">
        <CoatOfArms seal className="splash__seal" />
        <p className="eyebrow splash__eyebrow">Zürich-Enge</p>
        <h1>
          Zunft zu den
          <span>Drei Königen</span>
        </h1>
        <p className="splash__since">Gegründet 1897</p>
        <div className="splash__actions">
          <button className="btn btn--line" type="button" onClick={onLogin}>
            Login
          </button>
          <button className="btn btn--line" type="button" onClick={onGuestLogin}>
            Gästelogin
          </button>
        </div>
      </div>
    </main>
  )
}
