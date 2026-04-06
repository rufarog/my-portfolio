import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import About from "./components/About" 
import Contact from "./components/Contact"
import Reveal from "./components/Reveal"

// 1. Define your projects with the isComingSoon flag
const projects = [
  {
    title: "Vulnerable Web App Exploitation Writeup",
    description: "Exploiting a web application vulnerabilities to gain remote access to a server and escalate privileges to read a restricted file",
    tags: ["Netcat", "SQL Injection", "Reverse Shell", "Privilege Escalation"],
    link: "https://github.com/rufarog/Cybersecurity-Labs-Projects/tree/main/Vulnerable-Web-App-Ecploitation",
    isComingSoon: false // This is finished
  },
  {
    title: "Cloud Infrastructure Setup",
    description: "Automated deployment of secure AWS environments using Terraform and CloudFormation.",
    tags: ["AWS", "Terraform", "Docker"],
    link: "#",
    isComingSoon: true // This will show the pulse/glow
  },
  {
    title: "React Security Dashboard",
    description: "A real-time monitoring interface for tracking system logs and login attempts.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    isComingSoon: true // This will show the pulse/glow
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
                {/* 2. Pass the isComingSoon prop here */}
                <ProjectCard 
                  title={p.title} 
                  description={p.description} 
                  tags={p.tags} 
                  link={p.link} 
                  isComingSoon={p.isComingSoon} 
                />
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