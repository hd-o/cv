import { CVHeader } from "@/components/cv-header"
import { CVIntro } from "@/components/cv-intro"
import { CVExperience } from "@/components/cv-experience"
import { CVSpecializations } from "@/components/cv-specializations"
import { CVProjects } from "@/components/cv-projects"
import { CVEducation } from "@/components/cv-education"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-background font-sans">
      <main className="w-full max-w-6xl px-6 py-10 sm:px-10 mb-7">
        <CVHeader />
        <Separator className="my-8" />
        <div className="flex flex-col gap-8">
          <CVIntro />
          <Separator />
          <CVExperience />
          <Separator />
          <CVSpecializations />
          <Separator />
          <CVProjects />
          <Separator />
          <CVEducation />
        </div>
      </main>
    </div>
  )
}
