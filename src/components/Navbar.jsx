import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navLinkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-blue-200 hover:text-white hover:bg-white/10'}`

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/20 grid place-items-center text-white font-bold">i</div>
          <span className="text-white font-semibold tracking-tight group-hover:text-blue-200 transition-colors">Intel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/marketplace" className={navLinkClass}>Marketplace</NavLink>
          <NavLink to="/submit" className={navLinkClass}>Submit</NavLink>
          <NavLink to="/activity" className={navLinkClass}>Activity</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-medium transition-colors shadow-sm">Get Started</Link>
        </div>
      </div>
    </header>
  )
}
