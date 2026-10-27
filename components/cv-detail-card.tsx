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
    <div className="flex items-start gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
        <Image src={logo} alt={logoAlt} fill className="object-contain" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="text-body font-semibold text-foreground">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-caption text-[#0077B5] hover:underline"
          >
            {linkLabel}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        {issuer && <p className="text-caption text-muted-foreground">{issuer}</p>}
        <p className="mt-1 text-caption leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
