import { CVDetailCard } from "@/components/cv-detail-card"

const projects = [
  {
    title: "World Cup Graph Agent",
    description: "Built an open-source Python/Neo4j agent demo using LangChain DeepAgents, with separate approvals for external research and graph writes. Implemented access controls, evals, and tracing. Added AWS AgentCore and GCP Cloud Run deployments.",
    link: "https://github.com/hd-o/world-cup-graph-agent",
  },
  {
    title: "Conciser",
    description: "Research project investigating wether vocabulary training (expressing complex ideas in fewer words) can improve one's AI prompting precision and reduce writing time and iteration cycles. Designed a learning application around contextual vocabulary practice, active recall, and adaptive review.",
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
