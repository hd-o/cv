import { Github, Linkedin, Mail } from "lucide-react"

export function CVHeader() {
  return (
    <header className="flex flex-col gap-3">
      <div>
        <h1 className="text-display font-bold tracking-tight text-foreground">
          Hadrian de Oliveira
        </h1>
        <p className="text-body text-muted-foreground">
          {"Senior Software Engineer"}
        </p>
        <p className="text-body text-muted-foreground">
          {"São Paulo, Brazil"}
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <a
          href="mailto:hadrian.dev@outlook.com"
          className="flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="w-6 shrink-0">
            <Mail className="h-4 w-4" />
          </span>
          <span className="break-all">hadrian.dev@outlook.com</span>
        </a>
        <a
          href="https://linkedin.com/in/hadrian-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="w-6 shrink-0">
            <Linkedin className="h-4 w-4" />
          </span>
          <span className="break-all">linkedin.com/in/hadrian-dev</span>
        </a>
        <a
          href="https://github.com/hd-o"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="w-6 shrink-0">
            <Github className="h-4 w-4" />
          </span>
          <span className="break-all">github.com/hd-o</span>
        </a>
      </div>
      <div className="space-y-2 pt-1">
        <dl
          aria-label="Languages"
          className="flex flex-col gap-1.5 text-caption leading-relaxed"
        >
          <div className="flex items-center gap-2">
            <dt className="w-6 shrink-0 font-medium text-foreground">EN</dt>
            <dd className="flex items-center gap-1 text-muted-foreground">
              <span className="w-12 shrink-0">Fluent</span>
              <span>5/5</span>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="w-6 shrink-0 font-medium text-foreground">PT</dt>
            <dd className="flex items-center gap-1 text-muted-foreground">
              <span className="w-12 shrink-0">Fluent</span>
              <span>5/5</span>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="w-6 shrink-0 font-medium text-foreground">ES</dt>
            <dd className="flex items-center gap-1 text-muted-foreground">
              <span className="w-12 shrink-0">Limited</span>
              <span>3/5</span>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  )
}
