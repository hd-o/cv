import Image from "next/image"

interface EducationEntry {
  institution: string
  logo: string
  degree: string
  field: string
  dateRange: string
}

const education: EducationEntry[] = [
  {
    institution: "Toledo Prudente Centro Universitário",
    logo: "/logos/faculdade_toledo_presidente_prudente.jpeg",
    degree: "Bachelor of Science - BS",
    field: "Information Technology",
    dateRange: "2015 – 2015",
  },
  {
    institution: "Universidade Estadual Paulista Júlio de Mesquita Filho",
    logo: "/logos/unesp.jpeg",
    degree: "Bachelor of Science - BS",
    field: "Computer Science",
    dateRange: "2014 – 2014",
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
          {entry.degree} • {entry.field}
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
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {education.map((entry, i) => (
          <EducationCard key={i} entry={entry} />
        ))}
      </div>
    </section>
  )
}
