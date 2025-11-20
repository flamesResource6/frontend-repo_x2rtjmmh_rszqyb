import { Sparkles, Shield, Globe2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Curated quality',
      desc: 'High-signal research, models, and datasets screened for usefulness.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Creator-first',
      desc: 'Clear revenue share and transparent activity so creators can thrive.'
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: 'Global access',
      desc: 'Discover intelligence from a worldwide network of contributors.'
    }
  ]

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:from-white/10 transition-colors">
              <div className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white p-2 mb-3">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
