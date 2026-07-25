import React from 'react'
import TopBar from '../components/TopBar.jsx'
import TrustRing from '../components/TrustRing.jsx'
import { Settings, ShieldCheck, LogOut } from 'lucide-react'

export default function Profile() {
  return (
    <div>
      <TopBar title="Profile" />

      <div className="px-5 flex flex-col items-center pt-2 pb-6">
        <TrustRing name="Rocky" score={81} size={92} />
        <h2 className="font-display font-bold text-xl text-indigo-ink mt-3">Rocky</h2>
        <p className="text-[12px] text-indigo-ink/45 mt-1 flex items-center gap-1">
          <ShieldCheck size={13} className="text-leaf" /> Trust score 81 · Deeply Trusted
        </p>
      </div>

      <div className="px-5 space-y-3 pb-28">
        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 text-left">
          <Settings size={18} className="text-indigo-ink/50" />
          <span className="text-[14px] text-indigo-ink/80 font-medium">Account settings</span>
        </button>
        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 text-left">
          <ShieldCheck size={18} className="text-indigo-ink/50" />
          <span className="text-[14px] text-indigo-ink/80 font-medium">Privacy & safety</span>
        </button>
        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 text-left text-bloom">
          <LogOut size={18} />
          <span className="text-[14px] font-medium">Sign out</span>
        </button>
      </div>
    </div>
  )
}
