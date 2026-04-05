export default function About() {
  const skills = [
    { category: "Certifications", items: ["Microsoft AZ-900", "ISC2 Certified in Cybersecurity", "AWS Cloud Practitioner"] },
    { category: "Development", items: ["React", "TypeScript", "Python", "PHP", "Java"] },
    { category: "Infrastructure", items: ["AWS", "Docker", "Linux (Fedora/Ubuntu)"] },
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-6">About Me</h2>
          <p className="text-zinc-400 leading-relaxed">
            I’m a Cybersecurity professional based in Canada with a passion for building secure, efficient systems. 
            I enjoy the intersection of clean front-end code and robust backend security.
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