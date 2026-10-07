import { useId } from 'react'

type CoatOfArmsProps = {
  className?: string
  seal?: boolean
  filled?: boolean
}

const SHIELD = 'M160 78 L232 98 V168 C232 210 160 258 160 258 C160 258 88 210 88 168 V98 Z'

function ShieldArt({
  clipId,
  fillShield = false,
}: {
  clipId: string
  fillShield?: boolean
}) {
  const frame = fillShield
    ? { x: 92, y: 90, width: 136, height: 146, stroke: 2 }
    : { x: 106, y: 102, width: 108, height: 120, stroke: 5 }

  return (
    <g>
      <clipPath id={clipId}>
        <path d={SHIELD} />
      </clipPath>
      <path d={SHIELD} fill="#0266BC" />
      <image
        href={fillShield ? '/wappen.jpg?v=5' : '/wappen.png?v=10'}
        x={frame.x}
        y={frame.y}
        width={frame.width}
        height={frame.height}
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid meet"
      />
      <path d={SHIELD} fill="none" stroke="#e4c98a" strokeWidth={frame.stroke} strokeLinejoin="round" />
    </g>
  )
}

export function CoatOfArms({ className, seal = false, filled = false }: CoatOfArmsProps) {
  const uid = useId().replace(/:/g, '')
  const clipId = `shield-${uid}`
  const ringId = `ring-${uid}`

  if (!seal) {
    if (filled) {
      return (
        <svg
          className={className}
          viewBox="0 0 953 1024"
          overflow="visible"
          role="img"
          aria-label="Wappen der Zunft zu den Drei Königen"
        >
          <image href="/wappen.jpg?v=5" width="953" height="1024" preserveAspectRatio="xMidYMid meet" />
        </svg>
      )
    }

    return (
      <svg
        className={className}
        viewBox="80 70 160 196"
        overflow="visible"
        role="img"
        aria-label="Wappen der Zunft zu den Drei Königen"
      >
        <ShieldArt clipId={clipId} />
      </svg>
    )
  }

  return (
    <svg className={className} viewBox="0 0 320 320" role="img" aria-label="Wappen der Zunft zu den Drei Königen">
      <defs>
        <path
          id={ringId}
          d="M160 38 A122 122 0 1 1 160 282 A122 122 0 1 1 160 38 A122 122 0 1 1 160 282 A122 122 0 1 1 160 38"
        />
      </defs>
      <circle cx="160" cy="160" r="154" fill="none" stroke="#e4c98a" strokeWidth="2.5" />
      <circle cx="160" cy="160" r="144" fill="none" stroke="#f3e6c4" strokeWidth="1" opacity="0.55" />
      <text fill="#f3e6c4" fontSize="13" letterSpacing="3.2" fontFamily="Outfit, sans-serif">
        <textPath href={`#${ringId}`} startOffset="532">
          ZUNFT ZU DEN DREI KÖNIGEN · ZÜRICH-ENGE · 1897
        </textPath>
      </text>
      <ShieldArt clipId={clipId} fillShield />
    </svg>
  )
}
