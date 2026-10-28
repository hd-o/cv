import { Github, Linkedin, Mail, Languages } from "lucide-react"

export function CVHeader() {
  return (
    <header className="cv-header flex flex-col gap-3">
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
        <div
          className="flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="w-6 shrink-0">
            <Languages className="h-4 w-4" />
          </span>
          <span className="break-all">
            EN 5/5 • PT 5/5 • ES 3/5
          </span>
        </div>
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
    </header>
  )
}
