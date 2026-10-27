import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface Specialization {
  name: string
  issuer: string
  logo: string
  link: string
  inProgress?: boolean
}

const specializations: Specialization[] = [
  {
    name: "Project Management",
    issuer: "Google",
    logo: "/logos/google.jpeg",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/TPF5A2PT3WQF",
  },
  {
    name: "Site Reliability Engineering",
    issuer: "Google",
    logo: "/logos/google.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/KG8HECTHYF74",
  },
  {
    name: "Entrepreneurship Fundamentals",
    issuer: "The Wharton School",
    logo: "/logos/the_wharton_school.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/9CP3EH28UCJP",
  },
  // {
  //   name: "Accounting Fundamentals",
  //   issuer: "The Wharton School",
  //   logo: "/logos/the_wharton_school.jpeg",
  //   link: "https://www.coursera.org/specializations/finance-accounting",
  //   inProgress: true,
  // },
  // {
  //   name: "Conflict Management",
  //   issuer: "LinkedIn",
  //   logo: "/logos/linkedin.jpeg",
  //   link: "https://www.linkedin.com/learning/certificates/3eba18ecaaa5befda3549e71276b547c491a6e9d1a490ab4f52f6dabd04e035c",
  // },
  {
    name: "Prompt Engineering",
    issuer: "LinkedIn",
    logo: "/logos/linkedin.jpeg",
    link: "https://www.linkedin.com/learning/certificates/4201ebb80a555533df354c8bce69c82492c67b444f191d40e8bed4d33272b3cc",
  },
]

function SpecializationCard({ entry }: { entry: Specialization }) {
  return (
    <div className="flex items-start gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
        <Image
          src={entry.logo}
          alt={`${entry.name} logo`}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-body font-semibold text-foreground">{entry.name}</p>
        <p className="text-caption text-muted-foreground">{entry.issuer}</p>
        <a
          href={entry.link}
          target="_blank"
          className="inline-flex items-center gap-1 text-caption text-[#0077B5] hover:underline"
        >
          {entry.inProgress ? "In-Progress" : "See credential"}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}

export function CVSpecializations() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Specializations</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {specializations.map((entry, i) => (
          <SpecializationCard key={i} entry={entry} />
        ))}
      </div>
    </section>
  )
}
