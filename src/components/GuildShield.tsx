import type { ReactNode } from 'react'

const SHIELD = 'M30 3 L54 12 V40 C54 56 30 69 30 69 C30 69 6 56 6 40 V12 Z'

function Frame({ id, fill, children }: { id: string; fill: string; children?: ReactNode }) {
  const clipId = `guild-${id}`
  return (
    <g>
      <clipPath id={clipId}>
        <path d={SHIELD} />
      </clipPath>
      <path d={SHIELD} fill={fill} />
      <g clipPath={`url(#${clipId})`}>{children}</g>
      <path d={SHIELD} fill="none" stroke="#1c1814" strokeWidth="1.4" />
    </g>
  )
}

export function GuildShield({ id, name }: { id: string; name: string }) {
  return (
    <svg className="guild-shield" viewBox="0 0 60 72" role="img" aria-label={`Wappen ${name}`}>
      {art(id)}
    </svg>
  )
}

function art(id: string) {
  switch (id) {
    case 'constaffel':
      return (
        <Frame id={id} fill="#1a447c">
          <polygon points="30,16 34,26 45,26 36,33 39,44 30,37 21,44 24,33 15,26 26,26" fill="#e4c98a" />
        </Frame>
      )
    case 'saffran':
      return (
        <Frame id={id} fill="#e4c98a">
          <circle cx="30" cy="34" r="10" fill="#9d2c2c" />
          <circle cx="30" cy="34" r="4" fill="#f3e6c4" />
          <path d="M30 18 V26 M30 42 V52 M16 34 H24 M36 34 H46" stroke="#9d2c2c" strokeWidth="2" />
        </Frame>
      )
    case 'meisen':
      return (
        <Frame id={id} fill="#f6f1e7">
          <circle cx="30" cy="32" r="10" fill="#1a447c" />
          <circle cx="30" cy="40" r="8" fill="#e4c98a" />
          <circle cx="33" cy="30" r="1.4" fill="#fff" />
        </Frame>
      )
    case 'schmiden':
      return (
        <Frame id={id} fill="#1c1814">
          <path d="M18 22 L42 50 M42 22 L18 50" stroke="#e4c98a" strokeWidth="4" strokeLinecap="round" />
          <rect x="16" y="18" width="10" height="6" rx="1" fill="#e4c98a" transform="rotate(-40 21 21)" />
        </Frame>
      )
    case 'weggen':
      return (
        <Frame id={id} fill="#f6f1e7">
          <ellipse cx="30" cy="36" rx="14" ry="8" fill="#c4a574" />
          <path d="M18 36 Q30 28 42 36" fill="none" stroke="#8a7040" strokeWidth="1.5" />
        </Frame>
      )
    case 'gerwe':
      return (
        <Frame id={id} fill="#9d2c2c">
          <path d={SHIELD} fill="#f6f1e7" />
          <path d="M30 8 L54 14 V40 C54 56 30 69 30 69 Z" fill="#9d2c2c" />
          <path d="M16 28 H26 L24 46 H18 Z" fill="#1c1814" />
          <path d="M38 24 V48" stroke="#f6f1e7" strokeWidth="3" />
          <path d={SHIELD} fill="none" stroke="#1c1814" strokeWidth="1.4" />
        </Frame>
      )
    case 'widder':
      return (
        <Frame id={id} fill="#1a447c">
          <path d="M22 40 Q18 24 26 22 Q30 34 30 40 Q30 34 34 22 Q42 24 38 40 Q34 48 30 48 Q26 48 22 40 Z" fill="#f6f1e7" />
        </Frame>
      )
    case 'zimmerleuten':
      return (
        <Frame id={id} fill="#9d2c2c">
          <path d="M18 48 L30 20 L42 48 Z" fill="none" stroke="#e4c98a" strokeWidth="2.4" />
          <path d="M24 40 H36" stroke="#e4c98a" strokeWidth="2" />
        </Frame>
      )
    case 'schneidern':
      return (
        <Frame id={id} fill="#1a447c">
          <path d="M22 24 L30 40 L22 52 M38 24 L30 40 L38 52" fill="none" stroke="#e4c98a" strokeWidth="2.2" />
          <circle cx="22" cy="22" r="3" fill="none" stroke="#e4c98a" strokeWidth="1.6" />
          <circle cx="38" cy="22" r="3" fill="none" stroke="#e4c98a" strokeWidth="1.6" />
        </Frame>
      )
    case 'schiffleuten':
      return (
        <Frame id={id} fill="#1a447c">
          <path d="M16 40 L30 22 L44 40 Z" fill="#e4c98a" />
          <path d="M14 44 H46 L42 50 H18 Z" fill="#f6f1e7" />
        </Frame>
      )
    case 'kaembel':
      return (
        <Frame id={id} fill="#f6f1e7">
          <path d="M18 42 Q24 28 34 32 Q42 22 46 28 Q40 34 40 42 Z" fill="#c4a574" />
          <circle cx="22" cy="40" r="3" fill="#8a7040" />
        </Frame>
      )
    case 'waag':
      return (
        <Frame id={id} fill="#1a447c">
          <path d="M30 20 V48 M18 28 H42" stroke="#e4c98a" strokeWidth="2" />
          <path d="M18 28 L12 40 H24 Z M42 28 L36 40 H48 Z" fill="#e4c98a" />
        </Frame>
      )
    case 'stadtzunft':
      return (
        <Frame id={id} fill="#f6f1e7">
          <path d="M8 16 L52 56 L52 16 L8 56 Z" fill="#1a447c" />
          <path d={SHIELD} fill="none" stroke="#1c1814" strokeWidth="1.4" />
        </Frame>
      )
    case 'riesbach':
      return (
        <Frame id={id} fill="#1a447c">
          <path d="M12 44 Q22 34 30 44 T48 44" fill="none" stroke="#e4c98a" strokeWidth="2.4" />
          <path d="M12 50 Q22 40 30 50 T48 50" fill="none" stroke="#f6f1e7" strokeWidth="2" />
        </Frame>
      )
    case 'drei-koenige':
      return (
        <Frame id={id} fill="#015CD9">
          <image href="/wappen.png?v=6" x="14" y="16" width="32" height="40" preserveAspectRatio="xMidYMid meet" />
        </Frame>
      )
    case 'fluntern':
      return (
        <Frame id={id} fill="#2f6b3a">
          <path d="M12 50 L30 22 L48 50 Z" fill="#e4c98a" />
          <rect x="27" y="28" width="6" height="10" fill="#1c1814" />
        </Frame>
      )
    case 'hottingen':
      return (
        <Frame id={id} fill="#9d2c2c">
          <path d="M30 18 V52 M16 34 H44" stroke="#f6f1e7" strokeWidth="4" />
        </Frame>
      )
    case 'wiedikon':
      return (
        <Frame id={id} fill="#f6f1e7">
          <circle cx="30" cy="36" r="12" fill="none" stroke="#1c1814" strokeWidth="3" />
          <circle cx="30" cy="36" r="4" fill="#1c1814" />
        </Frame>
      )
    case 'wollishofen':
      return (
        <Frame id={id} fill="#1a447c">
          <path d="M14 46 Q30 28 46 46" fill="#8eb4d4" />
          <circle cx="30" cy="26" r="5" fill="#e4c98a" />
        </Frame>
      )
    case 'hard':
      return (
        <Frame id={id} fill="#5c4030">
          <rect x="18" y="24" width="24" height="26" fill="#e4c98a" />
          <path d="M18 24 L30 16 L42 24" fill="#9d2c2c" />
        </Frame>
      )
    case 'oberstrass':
      return (
        <Frame id={id} fill="#f6f1e7">
          <path d="M20 48 Q30 16 40 48" fill="#2f6b3a" />
          <circle cx="30" cy="30" r="4" fill="#9d2c2c" />
        </Frame>
      )
    case 'niklaus':
      return (
        <Frame id={id} fill="#9d2c2c">
          <circle cx="30" cy="28" r="7" fill="#f6f1e7" />
          <path d="M20 50 Q30 34 40 50" fill="#e4c98a" />
        </Frame>
      )
    case 'hoengg':
      return (
        <Frame id={id} fill="#2f6b3a">
          <circle cx="24" cy="34" r="5" fill="#6b2d6b" />
          <circle cx="34" cy="30" r="5" fill="#6b2d6b" />
          <circle cx="36" cy="42" r="5" fill="#6b2d6b" />
        </Frame>
      )
    case 'letzi':
      return (
        <Frame id={id} fill="#f6f1e7">
          <path d="M16 50 V30 H22 V24 H28 V30 H34 V24 H40 V30 H46 V50 Z" fill="#1c1814" />
        </Frame>
      )
    case 'schwamendingen':
      return (
        <Frame id={id} fill="#e4c98a">
          <path d="M30 18 L34 30 H46 L36 38 L40 50 L30 42 L20 50 L24 38 L14 30 H26 Z" fill="#9d2c2c" />
        </Frame>
      )
    case 'witikon':
      return (
        <Frame id={id} fill="#1a447c">
          <path d="M16 48 L30 20 L44 48 Z" fill="#2f6b3a" />
          <circle cx="30" cy="34" r="4" fill="#f6f1e7" />
        </Frame>
      )
    default:
      return <Frame id={id} fill="#1a447c" />
  }
}
