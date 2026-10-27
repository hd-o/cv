interface IntroSection {
  title: string
  points: string[]
}

const introSections: IntroSection[] = [
  {
    title: "Summary",
    points: [
      "Full-Stack Engineer: Specializing in Software Architecture, and Project Management",
      "Get-It-Done Type: Focused on business growth, team work, and process automation",
      "Experience: 13+ years of software engineering and management at companies across 5 countries",
    ],
  },
  {
    title: "Values",
    points: [
      "Business-First: Prioritize business objectives, and gradual long-term technical progress",
      "Discipline: Organized, gradual and consistent improvement of work performance",
      "Transparency: Honest and proactive communication with peers and stakeholders",
    ],
  },
  {
    title: "Keywords",
    points: [
      "Techniques: Agile, AI, Automated Testing, CI/CD, DDD, DevOps, Functional, KISS, ML, OOP, Product Research, SOC2, SEO, SOLID",
      "Technologies: AWS, Docker, GCP, GitHub Actions, Go, Langchain, NextJS, Node.js, PostgreSQL, Python, React, Retool, SQL, TypeScript",
    ],
  },
]

export function CVIntro() {
  return (
    <section className="grid grid-cols-1 gap-6">
      {introSections.map((section, i) => (
        <div key={i}>
          <h2 className="text-title font-semibold text-foreground mb-3">{section.title}</h2>
          <ul className="space-y-2">
            {section.points.map((point, j) => (
              <li key={j} className="text-caption leading-relaxed flex items-start">
                <span className="mr-2 text-foreground/50">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
