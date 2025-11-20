import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function SubmitForm() {
  const [form, setForm] = useState({ title: '', details: '', submitter_email: '', category: 'research', attachment_url: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    const res = await fetch(`${API}/api/submissions`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    if (res.ok) {
      setStatus('Submitted successfully!')
      setForm({ title: '', details: '', submitter_email: '', category: 'research', attachment_url: '' })
    } else {
      setStatus('Something went wrong.')
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-white mb-6">Submit Intelligence</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={onChange} placeholder="Title" className="w-full px-3 py-2 rounded-lg bg-white/5 text-white border border-white/10" required />
        <textarea name="details" value={form.details} onChange={onChange} placeholder="Details" rows={6} className="w-full px-3 py-2 rounded-lg bg-white/5 text-white border border-white/10" required />
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="submitter_email" value={form.submitter_email} onChange={onChange} placeholder="Your email" className="w-full px-3 py-2 rounded-lg bg-white/5 text-white border border-white/10" required />
          <select name="category" value={form.category} onChange={onChange} className="w-full px-3 py-2 rounded-lg bg-white/5 text-white border border-white/10">
            <option value="research">Research</option>
            <option value="models">Models</option>
            <option value="datasets">Datasets</option>
          </select>
        </div>
        <input name="attachment_url" value={form.attachment_url} onChange={onChange} placeholder="Attachment URL (optional)" className="w-full px-3 py-2 rounded-lg bg-white/5 text-white border border-white/10" />
        <button className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">Submit</button>
        {status && <p className="text-blue-200 mt-2">{status}</p>}
      </form>
    </section>
  )
}
