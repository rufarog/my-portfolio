interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
  return (
    <div className="group relative p-8 rounded-2xl border border-zinc-900 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
      {/* Glow effect on hover */}
      <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-emerald-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-zinc-950 text-zinc-500 border border-zinc-800 rounded">
              {tag}
            </span>
          ))}
        </div>

        <a href={link} target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-100 hover:text-emerald-400 flex items-center gap-2">
          View Project <span>→</span>
        </a>
      </div>
    </div>
  );
}