import { CVDetailCard } from "@/components/cv-detail-card"

const projects = [
  {
    title: "Voice Freight Broker Agent",
    description: "Browser-based freight brokerage simulation with live voice calls and transcripts powered by OpenAI GPT Live and Cloudflare Workers, including coordinated calls and async post-call analysis.",
    link: "https://github.com/hd-o/voice-freight-broker",
  },
  {
    title: "World Cup Graph Agent",
    description: "LangChain Python AI chatbot for World Cup Q&A and HITL gated enrichment; Evals checking answer grounding, approval enforcement, mutations, and isolation, with LLM-judged analysis; Deployments to AWS AgentCore and GCP Cloud Run.",
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
