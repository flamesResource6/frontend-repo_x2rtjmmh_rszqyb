import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.3),transparent)]"/>
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-6xl font-semibold text-white tracking-tight">
              The Intelligence Marketplace
            </motion.h1>
            <p className="mt-5 text-lg text-blue-200/90 max-w-xl">
              Find, fund, and monetize high-signal research, models, and datasets. Submit intelligence, browse listings, and support top contributors.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link to="/marketplace" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors">Explore Marketplace</Link>
              <Link to="/submit" className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">Submit Intelligence</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent p-1">
              <div className="h-full w-full rounded-xl bg-slate-900/60 grid grid-cols-3 gap-3 p-3">
                {[...Array(9)].map((_,i)=> (
                  <div key={i} className="rounded-lg bg-white/5 border border-white/10" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-blue-100 text-sm">
              Live submissions and sales update in real time
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
