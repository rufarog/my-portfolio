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
    title: "Sales and Quote Managment Software",
    description: "A Collaboratory Capstone project that implemented a Inventory and Managment System for a client.",
    tags: ["C#", "ASP.NET Core", "MVC"],
    link: "https://github.com/AmalShaiju/OASIS",
    isComingSoon: false // This will show the pulse/glow
  }
  ,
  {
    title: "Metasploit Web App Exploitation",
    description: "A lab using Metasploit to identify vulnerabilities to perform exploits.",
    tags: ["Metasploit"],
    link: "#",
    isComingSoon: false // This will show the pulse/glow
  }, {
    title: "Active Directory Lab Setup",
    description: "Active Directory setup for ACME.com using Virtual Machines.",
    tags: ["Active directory", "SQL Database", "Windows Server"],
    link: "#",
    isComingSoon: true // This will show the pulse/glow
  },
  //  {
  //   title: "CTF Steganography Challenge Writeup",
  //   description: "A Steganography CTF challenge writeup from CyberSci 2025.",
  //   tags: ["Steganography", "Password Cracking", "CTF Challenge"],
  //   link: "#",
  //   isComingSoon: false // This will show the pulse/glow
  // }
  // ,
   
   {
    title: "Research Project",
    description: "Contributing to research assessing third-party application vulnerabilities within electric vehicles.",
    tags: ["Electric Vehicles", "USB", "Third-Party Apps"],
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