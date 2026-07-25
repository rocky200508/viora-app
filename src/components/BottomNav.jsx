import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Users, ShieldCheck, Sprout, UserRound } from 'lucide-react'

const tabs = [
  { to: '/', label: 'Feed', icon: Home },
  { to: '/circles', label: 'Circles', icon: Users },
  { to: '/trustrings', label: 'TrustRings', icon: ShieldCheck },
  { to: '/growth', label: 'Growth', icon: Sprout },
  { to: '/profile', label: 'Profile', icon: UserRound },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-indigo-ink/5 px-2 pb-safe">
      <div className="flex items-center justify-between px-2 py-2">
        {tabs.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-colors ${
                isActive ? 'text-violet' : 'text-indigo-ink/40'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={22} strokeWidth={isActive ? 2.4 : 2} />
                <span className="text-[10px] font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
