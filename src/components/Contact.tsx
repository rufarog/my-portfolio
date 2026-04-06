export default function Contact() {
  return (
    <footer id="contact" className="py-32 border-t border-zinc-900 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's build something <br/> <span className="text-zinc-500">secure together.</span></h2>
      
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        <a href="mailto:rufaro2410@gmail.com" className="text-zinc-400 hover:text-emerald-400 transition-colors font-mono text-sm">
          Email
        </a>
        <a href="https://github.com/rufarog/Cybersecurity-Labs-Projects" target="_blank" className="text-zinc-400 hover:text-emerald-400 transition-colors font-mono text-sm">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rufaro-gonyora-29b664213/" target="_blank" className="text-zinc-400 hover:text-emerald-400 transition-colors font-mono text-sm">
          LinkedIn
        </a>
      </div>
      
      <p className="mt-20 text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} — Built with React & TS
      </p>
    </footer>
  );
}