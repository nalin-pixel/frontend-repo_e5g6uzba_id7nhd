import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function FlavorCard({ flavor, anim }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 transition duration-200">
      <div className="aspect-video w-full overflow-hidden rounded-xl mb-3">
        <img src={flavor.image + '?auto=format&fit=crop&w=800&q=60'} alt={flavor.name} className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition" />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-semibold text-lg">{flavor.name}</h3>
          <p className="text-white/70 text-sm line-clamp-2">{flavor.description}</p>
        </div>
        <div className="text-right">
          <div className="text-emerald-300 font-bold">${flavor.price.toFixed(2)}</div>
          <div className="text-xs text-white/60">per scoop</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {flavor.tags?.map(t => (
          <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80">{t}</span>
        ))}
      </div>
    </div>
  )
}

function FlavorGrid() {
  const [flavors, setFlavors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/flavors`)
        const data = await res.json()
        if (Array.isArray(data) && data.length === 0) {
          // seed if empty
          await fetch(`${API_BASE}/api/flavors/seed`, { method: 'POST' })
          const res2 = await fetch(`${API_BASE}/api/flavors`)
          const data2 = await res2.json()
          setFlavors(data2)
        } else {
          setFlavors(data)
        }
      } catch (e) {
        setError('Could not load flavors')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="text-white/80">Loading flavors...</div>
  if (error) return <div className="text-red-300">{error}</div>

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {flavors.map(f => (
        <FlavorCard key={f._id} flavor={f} />
      ))}
    </section>
  )
}

export default FlavorGrid