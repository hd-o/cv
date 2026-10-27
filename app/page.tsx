import { CVHeader } from "@/components/cv-header"
import { CVIntro } from "@/components/cv-intro"
import { CVExperience } from "@/components/cv-experience"
import { CVCertifications } from "@/components/cv-certifications"
import { CVSpecializations } from "@/components/cv-specializations"
import { CVProjects } from "@/components/cv-projects"
import { CVEducation } from "@/components/cv-education"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-background font-sans">
      <main className="w-full max-w-6xl px-6 sm:px-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="bg-gray-50 px-6 pt-10 pb-20">
            <CVHeader />
            <Separator className="my-6" />
            <CVIntro />
            <Separator className="my-6" />
            <div className="flex flex-col gap-6">
              <CVCertifications />
              <Separator />
              <CVSpecializations />
              <Separator />
              <CVProjects />
              <Separator />
              <CVEducation />
            </div>
          </div>
          <div className="pt-10 pb-20">
            <CVExperience />
          </div>
        </div>
      </main>
    </div>
  )
}
