import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  link: string
  logo: string
}

const projects: Project[] = [
  {
    title: "👨‍💻 Coding Challenge",
    description: "Solutions & Experiments",
    link: "https://github.com/hd-o/coding-challenge",
    logo: "/logos/github.png",
  },
  {
    title: "📅 COT Perspective",
    description: "Pleasant COT Reports",
    link: "https://github.com/hd-o/cot-perspective",
    logo: "/logos/github.png",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex items-start gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
        <Image
          src={project.logo}
          alt={`${project.title} logo`}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-body font-semibold text-foreground">{project.title}</p>
        <p className="text-caption text-muted-foreground">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-caption text-[#0077B5] hover:underline"
        >
          View project
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}

export function CVProjects() {
  return (
    <section>
      <h2 className="text-title font-semibold text-foreground">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  )
}
