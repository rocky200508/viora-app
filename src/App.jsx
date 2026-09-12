import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BottomNav from './components/BottomNav.jsx'
import Feed from './pages/Feed.jsx'
import Circles from './pages/Circles.jsx'
import TrustRings from './pages/TrustRings.jsx'
import Growth from './pages/Growth.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/login.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'

function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!user) {
    return <Login />
  }

  return (
    <div className="min-h-screen bg-canvas max-w-md mx-auto relative font-sans">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/circles" element={<Circles />} />
        <Route path="/trustrings" element={<TrustRings />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
} 