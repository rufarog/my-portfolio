interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  isComingSoon?: boolean;
}

export default function ProjectCard({ title, description, tags, link, isComingSoon }: ProjectProps) {
  return (
    <div className={`group relative p-8 rounded-2xl border transition-all duration-500 
      ${isComingSoon 
        ? 'border-sky-500/20 bg-sky-500/5' // Blue theme, standard cursor
        : 'border-zinc-900 bg-zinc-900/50 hover:border-zinc-700'
      }`}
    >
      {/* 1. THE SYSTEM PULSE (Cyber Blue) */}
      {isComingSoon && (
        <div className="absolute inset-0 rounded-2xl bg-sky-500/5 animate-pulse shadow-[0_0_25px_rgba(14,165,233,0.15)] pointer-events-none" />
      )}

      {/* 2. THE HOVER GLOW (Standard Projects) */}
      {!isComingSoon && (
        <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-emerald-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-xl font-bold transition-colors 
            ${isComingSoon ? 'text-zinc-400' : 'text-zinc-100 group-hover:text-emerald-400'}`}
          >
            {title}
          </h3>
          
          {/* Status Badge - Blue Edition */}
          {isComingSoon && (
            <span className="text-[9px] font-bold uppercase tracking-widest text-sky-400/80 px-2 py-0.5 rounded-full border border-sky-500/20 bg-sky-500/5">
              Coming Soon
            </span>
          )}
        </div>

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

        {/* 3. CONDITIONAL ACTION BUTTON */}
        {isComingSoon ? (
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-ping" />
            In Progress _
          </div>
        ) : (
          <a href={link} target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-100 hover:text-emerald-400 flex items-center gap-2 group/link">
            View Project <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </a>
        )}
      </div>
    </div>
  );
}