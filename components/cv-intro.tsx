interface IntroSection {
  title: string
  points: string[]
}

const summary: IntroSection = {
  title: "Summary",
  points: [
    "Software engineer with founding-engineer and engineering-management experience, delivering products across logistics, fintech, and consumer platforms.",
    "Led CRM integrations and customer onboarding, improved AWS infrastructure, and managed a five-person engineering team.",
    "Built an open-source Python/Neo4j agent with approval controls and evaluation workflows.",
  ],
}

const technicalSkills: IntroSection = {
  title: "Technical Skills",
  points: [
    "Languages: TypeScript, JavaScript, Python, SQL.",
    "Software & cloud: Node.js, React, Next.js, AWS, Docker, PostgreSQL, Snowflake, GitHub Actions, automated testing.",
    "AI projects: LangChain/DeepAgents, LangGraph, Neo4j, LangSmith, OpenRouter, GCP Cloud Run.",
  ],
}

function IntroSectionContent({ title, points }: IntroSection) {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground mb-3">{title}</h2>
      <ul className="space-y-2">
        {points.map((point) => (
          <li key={point} className="text-caption leading-relaxed flex items-start">
            <span className="mr-2 text-foreground/50">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function CVSummary() {
  return <IntroSectionContent {...summary} />
}

export function CVTechnicalSkills() {
  return <IntroSectionContent {...technicalSkills} />
}
