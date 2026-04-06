export default function About() {
  const skills = [
    { 
      category: "Certifications", 
      items: [
        "Microsoft AZ-900", 
        "ISC2 Certified in Cybersecurity", 
        "AWS Cloud Practitioner",
        "Microsoft SC-900", // Fixed typo here
        "Security+ (In Progress)", 
        "AWS Certified Solutions Architect (In Progress)", 
        "Cisco Certificate in Ethical Hacking (In Progress)" 
      ] 
    },
    { 
      category: "Development", 
      items: ["Python", "PHP", "TypeScript", "React", "Java", "SQL", "C#", "Bash Scripting"] 
    },
    { 
      category: "Infrastructure", 
      items: ["AWS", "Azure", "Windows", "MacOS", "Linux (Fedora/Ubuntu/Kali)"] 
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-900">
      <div className="flex flex-col gap-16">
        
        {/* 1. Full-Width About Me Section */}
        <div className="max-w-3xl">
          <h2 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-6">
            About Me
          </h2>
          <p className="text-zinc-100 text-lg md:text-xl leading-relaxed font-medium">
            I’m a recent Cybersecurity Analytics graduate student with a background in software development, 
            focusing on defensive security, risk analysis, and cloud security.
          </p>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            I am currently seeking an entry-level opportunity in Cybersecurity—such as a SOC Analyst, 
            Cybersecurity Analyst, or IAM role—where I can apply my technical skills, continue learning, 
            and contribute to improving organizational security.
          </p>
        </div>

        {/* 2. Skills & Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill) => (
            <div key={skill.category} className="group">
              <h3 className="text-zinc-100 font-bold mb-6 text-sm uppercase tracking-wider border-b border-zinc-900 pb-2 group-hover:border-emerald-500/50 transition-colors">
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="text-zinc-500 text-sm flex items-start gap-3">
                    {/* The bullet point */}
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                    <span className="group-hover:text-zinc-300 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}