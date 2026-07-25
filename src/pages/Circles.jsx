import React from 'react'
import TopBar from '../components/TopBar.jsx'
import { circles } from '../lib/mockData.js'
import { Plus, ChevronRight } from 'lucide-react'

export default function Circles() {
  return (
    <div>
      <TopBar title="Circles" />
      <div className="px-5 pb-3">
        <p className="text-sm text-indigo-ink/50">Different people, different depths of sharing.</p>
      </div>

      <div className="px-5 space-y-3 pb-28">
        {circles.map((c) => (
          <button
            key={c.id}
            className="w-full text-left bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4"
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-display font-bold text-lg shrink-0`}>
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-indigo-ink text-[15px]">{c.name}</p>
              <p className="text-[12px] text-indigo-ink/45 truncate">{c.description}</p>
              <p className="text-[11px] text-indigo-ink/35 mt-0.5">{c.members} members</p>
            </div>
            <ChevronRight size={18} className="text-indigo-ink/25 shrink-0" />
          </button>
        ))}

        <button className="w-full border-2 border-dashed border-violet/30 rounded-2xl p-4 flex items-center justify-center gap-2 text-violet font-medium text-sm">
          <Plus size={16} /> Create a new circle
        </button>
      </div>
    </div>
  )
}
