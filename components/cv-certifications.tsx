import { ExternalLink } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    name: "AWS Certified Solutions Architect (SAA-C03)",
    link: "https://www.credly.com/badges/c286eb67-85e3-4faa-b076-db4e8e695936/public_url",
  },
  {
    name: "AWS Certified AI Practitioner (AIF-C01)",
    link: "https://www.credly.com/badges/15f3b9e5-49ea-411b-9423-9a5921b1ad45/public_url",
  },
]

export function CVCertifications() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Certifications</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certifications.map((entry) => (
          <div key={entry.link} className="flex items-start gap-3">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
              <Image src="/logos/aws.jpeg" alt="AWS logo" fill className="object-contain" />
            </div>
            <div>
              <p className="text-body font-semibold text-foreground">{entry.name}</p>
              <p className="text-caption text-muted-foreground">Amazon Web Services (AWS)</p>
              <a
                href={entry.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-caption text-[#0077B5] hover:underline"
              >
                See credential
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
