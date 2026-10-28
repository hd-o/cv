import { CVDetailCard } from "@/components/cv-detail-card"

const specializations = [
  {
    name: "Google Project Management",
    issuer: "Google",
    logo: "/logos/google.jpeg",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/TPF5A2PT3WQF",
    description: "Project lifecycle, including initiation, project planning, execution. Agile, Scrum, risk management, and stakeholder management.",
  },
  {
    name: "IBM RAG and Agentic AI",
    issuer: "IBM",
    logo: "/logos/ibm.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/PCUS0G5GLX83",
    description: "Building retrieval-augmented generation (RAG) applications and agentic workflows, using vector databases for information retrieval, LLM tool calling, and frameworks such as LangChain and LangGraph.",
  },
]

export function CVSpecializations() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Specializations</h2>
      <div className="mt-4 grid grid-cols-1 gap-5">
        {specializations.map((entry) => (
          <CVDetailCard key={entry.link} title={entry.name} issuer={entry.issuer} description={entry.description} link={entry.link} linkLabel="See credential" logo={entry.logo} logoAlt={`${entry.issuer} logo`} />
        ))}
      </div>
    </section>
  )
}
