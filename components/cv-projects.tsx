import { CVDetailCard } from "@/components/cv-detail-card"

const projects = [
  {
    title: "World Cup Graph Agent",
    description: "Built an open-source Python/Neo4j demonstration agent using DeepAgents and OpenRouter, with separate approvals for external research and graph writes. Implemented conversation-access controls, evaluation scenarios, and LangSmith tracing. Added AWS AgentCore and GCP Cloud Run deployment implementations and ran selected authentication, conversation-isolation, and approval-rejection checks on GCP.",
    link: "https://github.com/hd-o/world-cup-graph-agent",
  },
  {
    title: "Conciser",
    description: "Research and product design project investigating whether vocabulary training and semantic compression—expressing complex ideas in fewer words—can improve AI prompting precision and reduce writing time and revision cycles. Designed a learning application around contextual vocabulary practice, active recall, and adaptive review.",
    link: "https://github.com/hd-o/conciser",
  },
]

export function CVProjects() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Projects</h2>
      <p className="mt-3 text-caption leading-relaxed text-muted-foreground">
        Independent projects and professional development · February 2026–Present
      </p>
      <div className="mt-4 grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <CVDetailCard key={project.link} title={project.title} description={project.description} link={project.link} linkLabel="View project" logo="/logos/github.png" logoAlt="GitHub logo" />
        ))}
      </div>
    </section>
  )
}
