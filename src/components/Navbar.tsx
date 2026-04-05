export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-mono font-bold tracking-tighter text-emerald-500">
          Rufaro Gonyora
        </span>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}