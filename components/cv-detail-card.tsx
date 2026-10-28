import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface CVDetailCardProps {
  title: string
  issuer?: string
  description: string
  link: string
  linkLabel: string
  logo: string
  logoAlt: string
}

export function CVDetailCard({ title, issuer, description, link, linkLabel, logo, logoAlt }: CVDetailCardProps) {
  return (
    <div className="cv-detail-card flex items-start gap-3">
      <div className="cv-logo relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
        <Image src={logo} alt={logoAlt} fill loading="eager" className="object-contain" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-body font-semibold text-foreground">{title}</h3>
        {issuer && <p className="text-caption text-muted-foreground">{issuer}</p>}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-caption text-[#0077B5] hover:underline"
        >
          {linkLabel}
          <ExternalLink className="h-3 w-3" />
        </a>
        <p className="mt-1 text-caption leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
