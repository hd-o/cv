import { CVDetailCard } from "@/components/cv-detail-card"

const projects = [
  {
    title: "World Cup Graph Agent",
    description: "Python multi-agent chatbot (LangChain DeepAgents, Neo4j) for graph-grounded World Cup Q&A and HITL approval-gated enrichment; Pytest LangSmith evals combining deterministic checks of answer grounding, approval enforcement, graph mutations, and conversation isolation with LLM-judged answer quality; Deployments to AWS AgentCore and GCP Cloud Run.",
    link: "https://github.com/hd-o/world-cup-graph-agent",
  },
]

export function CVProjects() {
  return (
    <section className="cv-projects">
      <h2 className="text-title font-semibold text-foreground">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <CVDetailCard key={project.link} title={project.title} description={project.description} link={project.link} linkLabel="View project" logo="/logos/github.png" />
        ))}
      </div>
    </section>
  )
}
