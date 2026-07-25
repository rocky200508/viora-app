import React from 'react'
import TopBar from '../components/TopBar.jsx'
import { impactStats } from '../lib/mockData.js'
import { Flame, Users, ShieldCheck, HeartHandshake } from 'lucide-react'

const cards = [
  { label: 'Day streak', value: impactStats.streak, icon: Flame, color: 'text-bloom' },
  { label: 'Active circles', value: impactStats.circlesActive, icon: Users, color: 'text-sky' },
  { label: 'Avg. trust score', value: impactStats.trustAvg, icon: ShieldCheck, color: 'text-violet' },
  { label: 'Support given', value: impactStats.supportGiven, icon: HeartHandshake, color: 'text-leaf' },
]

export default function Growth() {
  return (
    <div>
      <TopBar title="Growth" />
      <div className="px-5 pb-4">
        <p className="text-sm text-indigo-ink/50">Your real-life impact, not your like count.</p>
      </div>

      <div className="px-5 grid grid-cols-2 gap-3 pb-6">
        {cards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl p-4 shadow-sm">
            <Icon size={20} className={color} />
            <p className="font-display font-bold text-2xl text-indigo-ink mt-2">{value}</p>
            <p className="text-[12px] text-indigo-ink/45">{label}</p>
          </div>
        ))}
      </div>

      <div className="px-5 pb-28">
        <div className="bg-viora-gradient rounded-2xl p-5 text-white">
          <p className="font-display font-semibold text-[15px] mb-1">This week's reflection</p>
          <p className="text-[13px] text-white/85 leading-relaxed">
            You showed up for 3 friends this week and shared honestly twice. That's how trust compounds — keep going.
          </p>
        </div>
      </div>
    </div>
  )
}
