import { Github, Linkedin } from "lucide-react"

export function CVHeader() {
  return (
    <header className="flex flex-col gap-3">
      <div>
        <h1 className="text-display font-bold tracking-tight text-foreground">
          Hadrian de Oliveira
        </h1>
        <p className="text-body text-muted-foreground">
          {"Software Engineering and Management"}
        </p>
        <p className="text-body text-muted-foreground">
          {"Based in Brazil. With US LLC and B1/B2 Visa"}
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <a
          href="https://github.com/hd-o"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-4 w-4 shrink-0" />
          <span className="break-all">github.com/hd-o</span>
        </a>
        <a
          href="https://linkedin.com/in/hadriandeoliveira"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-4 w-4 shrink-0" />
          <span className="break-all">linkedin.com/in/hadriandeoliveira</span>
        </a>
      </div>
    </header>
  )
}
