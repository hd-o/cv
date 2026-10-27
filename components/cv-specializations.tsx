import { CVDetailCard } from "@/components/cv-detail-card"

const specializations = [
  {
    name: "Project Management",
    issuer: "Google",
    logo: "/logos/google.jpeg",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/TPF5A2PT3WQF",
    description: "The project management lifecycle, including initiation, project planning, execution, Agile and Scrum methodologies, risk management, and stakeholder management and communication.",
  },
  {
    name: "Site Reliability Engineering",
    issuer: "Google",
    logo: "/logos/google.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/KG8HECTHYF74",
    description: "Site reliability engineering (SRE), including measuring and managing service reliability through Service Level Indicators (SLIs), Service Level Objectives (SLOs), and error budgets, including reliability targets and monitoring strategies.",
  },
  {
    name: "RAG and Agentic AI",
    issuer: "IBM",
    logo: "/logos/ibm.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/PCUS0G5GLX83",
    description: "Building retrieval-augmented generation (RAG) applications and agentic RAG workflows, using vector databases for information retrieval, LLM tool calling, and frameworks such as LangChain and LangGraph.",
  },
  {
    name: "Prompt Engineering",
    issuer: "LinkedIn",
    logo: "/logos/linkedin.jpeg",
    link: "https://www.linkedin.com/learning/certificates/4201ebb80a555533df354c8bce69c82492c67b444f191d40e8bed4d33272b3cc",
    description: "Prompt engineering and developing LLM applications using LangChain, including prompt templates, few-shot prompting, model interactions, and techniques for structuring and orchestrating prompts.",
  },
]

export function CVSpecializations() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Specializations</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {specializations.map((entry) => (
          <CVDetailCard key={entry.link} title={entry.name} issuer={entry.issuer} description={entry.description} link={entry.link} linkLabel="See credential" logo={entry.logo} logoAlt={`${entry.issuer} logo`} />
        ))}
      </div>
    </section>
  )
}
