import { CVDetailCard } from "@/components/cv-detail-card"

const specializations = [
  {
    name: "IBM RAG and Agentic AI",
    logo: "/logos/ibm.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/PCUS0G5GLX83",
    description: "" //"Building retrieval-augmented generation (RAG) applications and agentic workflows, using vector databases, LLM tool calling, and LangChain frameworks.",
  },
  {
    name: "Google Project Management",
    logo: "/logos/google.jpeg",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/TPF5A2PT3WQF",
    description: "" //"Project lifecycle, initiation, planning, execution. Agile, Scrum, risk management, and stakeholder management.",
  },
  {
    name: "Google Cloud Infrastructure",
    logo: "/logos/google.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/W8DMITU7NTZ8",
    description: "" //"Google Cloud infrastructure compared with AWS, including hands-on labs for IAM, networking, compute, storage, containers, deployment, and monitoring.",
  },
]

export function CVSpecializations() {
  return (
    <section className="cv-specializations">
      <h2 className="text-title font-semibold text-foreground">Specializations</h2>
      <div className="mt-4 grid grid-cols-1 gap-5">
        {specializations.map((entry) => (
          <CVDetailCard key={entry.link} title={entry.name} description={entry.description} link={entry.link} linkLabel="See credential" logo={entry.logo} />
        ))}
      </div>
    </section>
  )
}
