export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-200/80">
        <div className="text-sm">© {new Date().getFullYear()} Intel Replica — All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="/marketplace" className="hover:text-white">Marketplace</a>
          <a href="/submit" className="hover:text-white">Submit</a>
          <a href="/activity" className="hover:text-white">Activity</a>
        </div>
      </div>
    </footer>
  )
}
