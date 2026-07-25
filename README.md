# Viora — App Prototype

Connect. Trust. Grow Together.

## Setup in VS Code

1. Unzip this folder and open it in VS Code (`File > Open Folder`)
2. Open the integrated terminal (`` Ctrl+` `` / `` Cmd+` ``)
3. Install dependencies:
   ```
   npm install
   ```
4. Run the dev server:
   ```
   npm run dev
   ```
5. Open the printed local URL (usually `http://localhost:5173`)

## What's included

- **Feed** — friend TrustRings strip + post cards from your circles
- **Circles** — TrustRing-style categorized circles (Close Friends, Family, Growth Circle, Old Friends)
- **TrustRings** — full trust network ranked by score, with the signature ring visual
- **Growth** — impact tracking (streaks, trust average, support given)
- **Profile** — your own TrustRing + settings

## Structure

```
src/
  components/
    TrustRing.jsx    ← the signature visual (ring fills with trust score)
    TopBar.jsx
    BottomNav.jsx
  pages/
    Feed.jsx
    Circles.jsx
    TrustRings.jsx
    Growth.jsx
    Profile.jsx
  data/
    mockData.js       ← swap this for real API calls later
```

## Next steps to make it real

- Replace `mockData.js` with API calls (Supabase/Firebase work well for a fast MVP backend)
- Add auth (Clerk, Supabase Auth, or Firebase Auth)
- Add a compose/post-creation screen
- Wire trust score calculation logic (currently static in mock data)
