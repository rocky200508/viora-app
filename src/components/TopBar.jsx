import React from 'react'
import { Bell } from 'lucide-react'

export default function TopBar({ title }) {
  return (
    <header className="sticky top-0 z-10 bg-canvas/90 backdrop-blur-sm px-5 pt-5 pb-3 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
       <img src="/viora-logo.png" alt="Viora" className="w-8 h-8" />
        <h1 className="font-display font-bold text-xl text-indigo-ink">
          {title || 'Viora'}
        </h1>
      </div>
      <button className="relative w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-ink/60">
        <Bell size={17} />
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-bloom" />
      </button>
    </header>
  )
}
