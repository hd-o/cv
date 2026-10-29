import { CVDetailCard } from "@/components/cv-detail-card"

const projects = [
  {
    title: "World Cup Graph Agent",
    description: "Python chatbot agent using LangChain DeepAgents, with separate approvals for web search and Neo4j graph writes. Access controls, multi-turn evals, and tracing. AWS AgentCore and GCP Cloud Run deployments.",
    link: "https://github.com/hd-o/world-cup-graph-agent",
  },
]

export function CVProjects() {
  return (
    <section className="cv-projects">
      <h2 className="text-title font-semibold text-foreground">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <CVDetailCard key={project.link} title={project.title} description={project.description} link={project.link} linkLabel="View project" logo="/logos/github.png" logoAlt="GitHub logo" />
        ))}
      </div>
    </section>
  )
}
