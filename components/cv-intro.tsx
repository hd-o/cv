interface IntroSection {
  title: string
  points: string[]
}

const summary: IntroSection = {
  title: "Summary",
  points: [
    "Full-stack software engineer with founding-engineer and engineering-management experience, delivering products across logistics, fintech, and consumer platforms.",
    "Led integration projects, customer support and onboarding, improved cloud infrastructure, managed engineering teams, and presented at conferences.",
  ],
}

const technicalSkills: IntroSection = {
  title: "Relevant Skills",
  points: [
    "AI: Python, AWS Bedrock, GCP Gemini Enterprise, LangChain, LangGraph, LangSmith, Arize Phoenix",
    "Infra: AWS, Google Cloud, Cloudflare, Heroku, Docker, GitHub Actions",
    "Backend: TypeScript, Rust, Node.js, Neo4j, PostgreSQL, Snowflake, SQL",
    "Testing: Playwright, Jest, Pytest",
  ],
}

function IntroSectionContent({ title, points }: IntroSection) {
  return (
    <section className="cv-intro">
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
