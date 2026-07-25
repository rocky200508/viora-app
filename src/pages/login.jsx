import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { signUp, signIn, resetPassword } = useAuth()
  const [mode, setMode] = useState('login') // 'login' | 'signup' | 'forgot'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    if (mode === 'signup') {
      const { error } = await signUp(email, password, username)
      if (error) setError(error.message)
    } else if (mode === 'login') {
      const { error } = await signIn(email, password)
      if (error) setError(error.message)
    } else if (mode === 'forgot') {
      const { error } = await resetPassword(email)
      if (error) setError(error.message)
      else setMessage('Password reset link sent! Check your email.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h1 className="text-2xl font-display font-semibold text-indigo-ink mb-1">Viora</h1>
      <p className="text-sm text-indigo-ink/50 mb-8">Connect. Trust. Grow Together.</p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-3">
        {mode === 'signup' && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 text-sm"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 text-sm"
          required
        />
        {mode !== 'forgot' && (
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 text-sm"
            required
          />
        )}

        {mode === 'login' && (
          <button
            type="button"
            onClick={() => { setMode('forgot'); setError(''); setMessage('') }}
            className="text-xs text-indigo-ink/50 block"
          >
            Forgot Password?
          </button>
        )}

        {error && <p className="text-red-500 text-xs">{error}</p>}
        {message && <p className="text-green-600 text-xs">{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-ink text-white rounded-xl py-3 text-sm font-semibold"
        >
          {loading ? 'Please wait...' : mode === 'signup' ? 'Sign Up' : mode === 'forgot' ? 'Send Reset Link' : 'Log In'}
        </button>
      </form>

      {mode !== 'forgot' ? (
        <button
          onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setError(''); setMessage('') }}
          className="text-xs text-indigo-ink/60 mt-5"
        >
          {mode === 'signup' ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
        </button>
      ) : (
        <button
          onClick={() => { setMode('login'); setError(''); setMessage('') }}
          className="text-xs text-indigo-ink/60 mt-5"
        >
          Back to Log In
        </button>
      )}
    </div>
  )
}