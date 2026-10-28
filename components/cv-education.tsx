import Image from "next/image"

interface EducationEntry {
  institution: string
  logo: string
  field: string
  status: string
  dateRange: string
}

const education: EducationEntry[] = [
  {
    institution: "Toledo Prudente Centro Universitário",
    logo: "/logos/faculdade_toledo_presidente_prudente.jpeg",
    field: "B.Sc. Information Systems",
    status: "Dropout",
    dateRange: "2015–2016",
  },
  {
    institution: "Universidade Estadual Paulista Júlio de Mesquita Filho (Unesp)",
    logo: "/logos/unesp.jpeg",
    field: "B.Sc. Computer Science",
    status: "Dropout",
    dateRange: "2014–2015",
  },
]

function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <div className="flex items-start gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
        <Image
          src={entry.logo}
          alt={`${entry.institution} logo`}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-body font-semibold text-foreground">
          {entry.institution}
        </p>
        <p className="text-caption text-muted-foreground">
          {entry.field} · {entry.status}
        </p>
        <p className="text-caption text-muted-foreground">{entry.dateRange}</p>
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
