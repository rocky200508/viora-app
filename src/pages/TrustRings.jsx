import React from 'react'
import TopBar from '../components/TopBar.jsx'
import TrustRing from '../components/TrustRing.jsx'
import { people } from '../lib/mockData.js'

function trustLabel(score) {
  if (score >= 85) return 'Deeply Trusted'
  if (score >= 70) return 'Trusted'
  if (score >= 50) return 'Building Trust'
  return 'New Connection'
}

export default function TrustRings() {
  const sorted = [...people].sort((a, b) => b.score - a.score)

  return (
    <div>
      <TopBar title="TrustRings" />
      <div className="px-5 pb-4">
        <p className="text-sm text-indigo-ink/50">
          Trust is earned through real sharing, not just time added. Your ring fills as you show up.
        </p>
      </div>

      <div className="px-5 pb-28 space-y-3">
        {sorted.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4">
            <TrustRing name={p.name} score={p.score} size={54} />
            <div className="flex-1">
              <p className="font-display font-semibold text-indigo-ink text-[15px]">{p.name}</p>
              <p className="text-[12px] text-indigo-ink/45">{p.category}</p>
            </div>
            <div className="text-right">
              <p className="font-display font-bold text-violet text-lg leading-none">{p.score}</p>
              <p className="text-[10px] text-indigo-ink/40 mt-1">{trustLabel(p.score)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
