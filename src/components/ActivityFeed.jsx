import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function ActivityFeed() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${API}/api/activity`).then(r=>r.json()).then(d=>setItems(d.items||[]))
  }, [])

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-white mb-6">Activity</h2>
      <div className="space-y-3">
        {items.map((a)=> (
          <div key={a._id} className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="text-blue-100 text-sm">
              <span className="font-medium text-white">{a.actor_email}</span> {a.action}
              {a.target && <span className="opacity-70"> → {a.target}</span>}
            </div>
            <span className="text-xs text-blue-200/70">{new Date(a.created_at || a.at || Date.now()).toLocaleString()}</span>
          </div>
        ))}
        {items.length===0 && <div className="text-blue-200">No activity yet.</div>}
      </div>
    </section>
  )
}
