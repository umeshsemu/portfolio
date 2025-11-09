export function About() {
  const skills = [
    ["Frontend", ["React", "Next.js","Javascript", "Tailwind CSS"]],
    ["Backend", ["Node.js", "Express", "SQL", "MongoDB"]],
    ["Tools", ["Git", "VS Code", "Postman"]],
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          I’m a Bengaluru native and 2025 engineering graduate from Ramaiah Institute of Technology who enjoys solving
          problems with code. Experience contributing as a tech intern and delivering full stack web projects, most
          recently built with modern JavaScript frameworks has prepared me to adapt quickly to whatever tools a team
          needs. I’m motivated to keep learning and grow into a versatile software engineer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">{category[0]}</h3>
              <ul className="space-y-3">
                {(category[1] as string[]).map((skill, i) => (
                  <li key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
