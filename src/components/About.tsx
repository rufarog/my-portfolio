export default function About() {
  const skills = [
    { category: "Certifications", items: ["Microsoft AZ-900", "ISC2 Certified in Cybersecurity", "AWS Cloud Practitioner","Mircosoft SC-900", "Security+ (In Progress)", "AWS Certified Solutions Architect (In Progress)", "Cisco Certificate in Ethical Hacking (In Progress)" ] },
    { category: "Development", items: ["React", "TypeScript", "Python", "PHP", "Java", "SQL", "C#", "Bash Scripting"] },
    { category: "Infrastructure", items: ["AWS","Azure", "Windows","MacOS", "Linux (Fedora/Ubuntu/Kali)"] },
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-6">About Me</h2>
          <p className="text-zinc-400 leading-relaxed">
            I’m a recent Cybersecurity Analytics graduate student with a background in software development, with a strong interest in defensive security, risk analysis and cloud security.  
             I am currently seeking an entry-level opportunity in Cybersecurity such as a SOC Analyst, Cybersecurity Analyst, Risk Analyst, 
             or Identity and Access Management (IAM) role where I can apply my technical skills, continue learning, and contribute to improving organizational security.
          </p>
        </div>
        
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="text-zinc-100 font-bold mb-4 text-sm">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-zinc-500 text-sm flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-500 rounded-full" />
                    {item}
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