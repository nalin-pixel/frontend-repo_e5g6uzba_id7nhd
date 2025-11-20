import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Navbar() {
  const [anim, setAnim] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/animation`).then(r => r.json()).then(setAnim).catch(() => {})
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-400 via-fuchsia-400 to-cyan-400" />
          <span className="text-white font-bold text-lg">Scoops</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a className="hover:text-white" href="#flavors">Flavors</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <button className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">Order</button>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </header>
  )
}

export default Navbar