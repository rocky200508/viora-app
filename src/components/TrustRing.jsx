import React from 'react'

/**
 * TrustRing — the signature visual element of Viora.
 * A ring of progress wraps every avatar in the app, echoing the
 * two interlocking arcs of the Viora logomark. The ring fills
 * proportionally to a person's trust score, so trust is always
 * visible at a glance, everywhere a person appears.
 */
export default function TrustRing({
  name,
  score = 0,
  size = 56,
  imgSrc,
  ring = true,
}) {
  const radius = (size - 6) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const initials = name
    ? name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()
    : '?'

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      {ring && (
        <svg width={size} height={size} className="absolute -rotate-90">
          <defs>
            <linearGradient id={`trustGrad-${size}-${score}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2FA8E0" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#EDEBF5"
            strokeWidth="3"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#trustGrad-${size}-${score})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.6s ease' }}
          />
        </svg>
      )}
      <div
        className="rounded-full bg-viora-gradient flex items-center justify-center text-white font-display font-semibold overflow-hidden"
        style={{ width: size - 12, height: size - 12, fontSize: size * 0.32 }}
      >
        {imgSrc ? (
          <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        ) : (
          initials
        )}
      </div>
    </div>
  )
}
