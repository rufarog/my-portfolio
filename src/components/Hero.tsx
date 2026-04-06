export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-400">
          Available for new opportunities
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
        Rufaro Gonyora <br /> 
        <span className="text-zinc-500">Cybersecurity Portfolio</span>
      </h1>
      
      <p className="max-w-xl text-lg text-zinc-400 leading-relaxed mb-8">
        I'm a developer and analyst focused on building robust, scalable applications 
        and analyzing system vulnerabilities. Based in Ontario, Canada.
      </p>

      <div className="flex gap-4">
        <a 
    href="#projects" 
    className="px-6 py-3 bg-zinc-100 text-zinc-950 font-semibold rounded-lg hover:bg-white transition-all inline-block"
  >
    View Projects
  </a>
  <a 
    href="./Resume.pdf" 
    download="Rufaro_Gonyora_Resume.pdf"
    className="px-6 py-3 border border-zinc-800 font-semibold rounded-lg hover:bg-zinc-900 transition-all flex items-center gap-2"
  >
    <span>Download Resume</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  </a>
        <a 
    href="#contact" 
    className="px-6 py-3 border border-zinc-800 font-semibold rounded-lg hover:bg-zinc-900 transition-all inline-block"
  >
    Get in Touch
  </a>
      </div>
    </section>
  );
}