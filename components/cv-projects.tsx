import { CVDetailCard } from "@/components/cv-detail-card"

const projects = [
  {
    title: "⚽ World Cup Graph Agent",
    description: "A graph-backed conversational AI agent built in Python that answers World Cup questions using Neo4j, researches missing information through permission-controlled tools, and requires approval before updating the knowledge graph. Uses DeepAgents, LangGraph, OpenRouter, and LangSmith for agentic AI orchestration, model inference, and evaluation.",
    link: "https://github.com/hd-o/world-cup-graph-agent",
  },
  {
    title: "📝 Conciser",
    description: "A mobile-first learning application focused on semantic precision and information-dense vocabulary for prompt engineering. It combines contextual learning, active-recall exercises, and adaptive review to improve prompting vocabulary.",
    link: "https://github.com/hd-o/conciser",
  },
]

export function CVProjects() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <CVDetailCard key={project.link} title={project.title} description={project.description} link={project.link} linkLabel="View project" logo="/logos/github.png" logoAlt="GitHub logo" />
        ))}
      </div>
    </section>
  )
}
