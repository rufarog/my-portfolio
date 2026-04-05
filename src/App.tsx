import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import About from "./components/About"     // New Import
import Contact from "./components/Contact" // New Import
import Reveal from "./components/Reveal"

// 1. Define your projects in a simple list
const projects = [
  {
    title: "Vulnerability Scanner",
    description: "An automated tool for identifying common network vulnerabilities and generating security reports.",
    tags: ["Python", "Nmap", "Bash"],
    link: "#"
  },
  {
    title: "Cloud Infrastructure Setup",
    description: "Automated deployment of secure AWS environments using Terraform and CloudFormation.",
    tags: ["AWS", "Terraform", "Docker"],
    link: "#"
  },
  {
    title: "React Security Dashboard",
    description: "A real-time monitoring interface for tracking system logs and login attempts.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6">
        <Reveal>
          <Hero />
        </Reveal>
        
        <Reveal>
          <About />
        </Reveal>
        
        <section id="projects" className="py-20 border-t border-zinc-900">
          <Reveal>
            <h2 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-10">
              Selected Projects
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={i}>
                <ProjectCard title={p.title} description={p.description} tags={p.tags} link={p.link} />
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </div>
  )
}

export default App