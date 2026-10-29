import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface EducationEntry {
  institution: string
  link: string
  logo: string
  field: string
  status: string
  dateRange: string
}

const education: EducationEntry[] = [
  {
    institution: "Toledo Prudente",
    link: "https://www.linkedin.com/school/faculdade-toledo-presidente-prudente/",
    logo: "/logos/faculdade_toledo_presidente_prudente.jpeg",
    field: "B.Sc. Information Systems",
    status: "Dropout",
    dateRange: "2015–2016",
  },
  {
    institution: "Universidade Estadual Paulista",
    link: "https://www.linkedin.com/school/unesp---universidade-estadual-paulista-j-lio-de-mesquita-filho-/",
    logo: "/logos/unesp.jpeg",
    field: "B.Sc. Computer Science",
    status: "Dropout",
    dateRange: "2014–2015",
  },
]

function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <div className="cv-education-card flex items-start gap-3">
      <div className="cv-logo relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
        <Image
          src={entry.logo}
          alt={`${entry.institution} logo`}
          fill
          loading="eager"
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-body font-semibold text-foreground">
          <a href={entry.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {entry.institution}
            <ExternalLink aria-hidden="true" className="ml-1 inline-block h-3 w-3 align-[-0.125em] opacity-50" />
          </a>
        </p>
        <p className="text-caption text-muted-foreground">
          {entry.field}
        </p>
        <p className="text-caption text-muted-foreground">
          {entry.dateRange} · {entry.status}
        </p>
      </div>
    </div>
  )
}

export function CVEducation() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Education</h2>
      <div className="mt-4 grid grid-cols-1 gap-5">
        {education.map((entry, i) => (
          <EducationCard key={i} entry={entry} />
        ))}
      </div>
    </section>
  )
}
