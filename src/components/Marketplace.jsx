import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Marketplace() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/api/listings`)
      .then(r => r.json())
      .then(d => setItems(d.items || []))
      .finally(()=> setLoading(false))
  }, [])

  const filtered = items

  const onSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (category) params.set('category', category)
    const res = await fetch(`${API}/api/listings?${params.toString()}`)
    const d = await res.json()
    setItems(d.items || [])
    setLoading(false)
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Marketplace</h2>
        <form onSubmit={onSearch} className="flex items-center gap-2 w-full sm:w-auto">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" className="w-full sm:w-72 px-3 py-2 rounded-lg bg-white/5 text-white placeholder:text-blue-200/60 border border-white/10" />
          <select value={category} onChange={e=>setCategory(e.target.value)} className="px-3 py-2 rounded-lg bg-white/5 text-white border border-white/10">
            <option value="">All</option>
            <option value="models">Models</option>
            <option value="research">Research</option>
            <option value="datasets">Datasets</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Search</button>
        </form>
      </div>

      {loading ? (
        <div className="text-blue-200">Loading…</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article key={item._id} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
              <div className="aspect-video rounded-lg bg-white/10 mb-3" style={{backgroundImage: item.cover_image?`url(${item.cover_image})`:undefined, backgroundSize:'cover', backgroundPosition:'center'}} />
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-sm text-blue-200/80 line-clamp-2 mt-1">{item.description}</p>
              <div className="flex items-center justify-between mt-3 text-sm text-blue-200">
                <span>${'{'}item.price_usd{'}'}</span>
                <span className="px-2 py-1 rounded bg-white/10">{item.category}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
