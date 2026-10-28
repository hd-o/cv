import { CVDetailCard } from "@/components/cv-detail-card"

const projects = [
  {
    title: "World Cup Graph Agent",
    description: "Built an open-source Python/Neo4j agent demo using LangChain DeepAgents, with separate approvals for external research and graph writes. Implemented access controls, multi-turn evals, and tracing. Added AWS AgentCore and GCP Cloud Run deployments.",
    link: "https://github.com/hd-o/world-cup-graph-agent",
  },
  {
    title: "Conciser",
    description: "Research project investigating how vocabulary training (expressing complex ideas in fewer words) can impact one's AI prompting precision, writing time, and iteration count. Designed a learning app for contextual vocabulary practice.",
    link: "https://github.com/hd-o/conciser",
  },
]

export function CVProjects() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <CVDetailCard key={project.link} title={project.title} description={project.description} link={project.link} linkLabel="View project" logo="/logos/github.png" logoAlt="GitHub logo" />
        ))}
      </div>
    </section>
  )
}
