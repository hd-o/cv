import { Separator } from "@/components/ui/separator"
import Image from "next/image"

interface Role {
  title: string
  dateRange: string
  duration: string
  location: string
  locationType: string
  description: string[]
}

interface ExperienceEntry {
  company: string
  logo: string
  totalDuration?: string
  roles: Role[]
}

const experiences: ExperienceEntry[] = [
  {
    company: "Revenue Vessel",
    logo: "/logos/revenue_vessel.jpeg",
    roles: [
      {
        title: "Founding Software Engineer",
        dateRange: "Sep 2024 – Feb 2026",
        duration: "1 year 6 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Owned end-to-end development and customer onboarding of a logistics industry-first CRM sync solution integrating HubSpot and Salesforce, with custom filters and property mapping directly from the product UI, reducing sales team setup time from days to minutes",
          "Engineered logistics data ingestion pipelines (with BullMQ, AWS S3, PostgreSQL, Snowflake), and location-based search powered by Google Maps Geocoding",
          "Led infrastructure and application hardening for SOC2 compliance; implemented AWS VPC network segmentation, Twingate connectors, Multi-Factor Authentication (Firebase Auth), and automated package vulnerability monitoring",
          "Established continuous integration and automated testing using GitHub Actions, Heroku, Jest, and Playwright, while embedding automated AI code-reviews (CodeRabbit and GitHub Copilot) to optimize team velocity",
          "Defined and rolled out agile delivery practices (scope/estimate/handoff) and drove adoption of retrospectives and team-health initiatives",
        ],
      },
    ],
  },
  {
    company: "Keep",
    logo: "/logos/keep.jpeg",
    roles: [
      {
        title: "Engineering Manager • Cards",
        dateRange: "Feb 2024 – Jul 2024",
        duration: "6 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Delivered virtual credit card integration supporting Tap to Pay via Apple and Google wallets, with multi-org card and credit management, including i2c authentication",
          "Supported development of infrastructure and partnership enablement for Mastercard physical credit cards, including international shipping and payment flows",
          "Led a 5-person Cards engineering team through 1:1s, performance management, mentoring, and pairing while owning roadmap scoping and execution with Product",
          "Introduced async-first engineering workflow that reduced interruptions, accelerated high-priority releases ahead of schedule, and improved team morale",
        ],
      },
    ],
  },
  {
    company: "Reelgood",
    logo: "/logos/reelgood.jpeg",
    totalDuration: "1 year 10 months",
    roles: [
      {
        title: "Lead Software Engineer • Web",
        dateRange: "Sep 2022 – Feb 2024",
        duration: "1 year 6 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Led the web engineering team through a period of triple-digit company YoY growth in 2023",
          "Drove Core Web Vitals and SEO improvements from ~40 to ~80 (Lighthouse and Search Console)",
          "Migrated codebase from JavaScript to TypeScript and introduced Cypress integration testing",
          "Owned technical direction for performance, and reliability on a high-traffic consumer web platform",
          "Shifted team from weekly to daily agile release cadence",
        ],
      },
      {
        title: "Senior Software Engineer • Web",
        dateRange: "May 2022 – Sep 2022",
        duration: "5 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Reduced web infrastructure costs by 25% and cut deployment duration from ~40 min to ~10 min, by migrating from Jenkins CI and AWS Elastic Beanstalk to GitHub Actions CI and AWS App Runner",
          "Built in-house high-throughput web analytics and telemetry pipeline with React and RxJS",
        ],
      },
    ],
  },
  {
    company: "Altruist",
    logo: "/logos/altruistcorp.jpeg",
    roles: [
      {
        title: "Software Engineer • Tools",
        dateRange: "Dec 2020 – Jul 2021",
        duration: "8 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Built back-office automation tools that compressed hour-long operational tasks into seconds and earned FINRA recognition for audit quality",
          "Developed dashboards and tooling with SQL and Retool that measurably improved ops efficiency",
          "Owned back-office encryption services, and end-to-end testing with BrowserStack and Cypress",
        ],
      },
    ],
  },
  {
    company: "Booking.com",
    logo: "/logos/bookingcom.jpeg",
    totalDuration: "1 year 6 months",
    roles: [
      {
        title: "Front-End Engineer • Tools",
        dateRange: "Dec 2018 – Mar 2019",
        duration: "4 months",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        description: [
          "Owned live chat UI for customer-service agents and supported codebase migration to Vue.js",
          "Implemented automated UI testing, improving reliability of internal agent-facing applications",
        ],
      },
      {
        title: "Front-End Developer • Chat",
        dateRange: "Aug 2018 – Nov 2018",
        duration: "4 months",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        description: [
          "Developed live chat and chatbot interfaces used by million+ users",
        ],
      },
      {
        title: "Front-End Developer • Support",
        dateRange: "Oct 2017 – Aug 2018",
        duration: "11 months",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        description: [
          "Developed self-service issue-resolution tools and FAQs that reduced customer-support load",
          "Ran A/B experiments, user research sessions, and developed web-based CS tooling",
        ],
      },
    ],
  },
  {
    company: "niluk.app",
    logo: "/logos/niluk.jpeg",
    roles: [
      {
        title: "Software Engineer • Mobile",
        dateRange: "Feb 2018 – Jan 2019",
        duration: "1 year",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        description: [
          "Built a mobile app prototype for event listing to support social networking in big cities",
          "Presented the product at Web Summit Lisbon 2018, secured funding from the City of Amsterdam, and collaborated on research projects with local universities",
          "Pitched technical progress and roadmap to mentors and investors",
        ],
      },
    ],
  },
  {
    company: "HeyJobs",
    logo: "/logos/heyjobs.jpeg",
    roles: [
      {
        title: "Front-End Engineer • Web",
        dateRange: "Jul 2016 – Apr 2017",
        duration: "10 months",
        location: "Berlin, Germany",
        locationType: "On-site",
        description: [
          "Developed web features for job-post distribution, simplified application, and CV PDF generation",
          "Conducted live user research sessions to inform product direction",
        ],
      },
    ],
  },
  {
    company: "Quantler",
    logo: "/logos/quantler.jpeg",
    roles: [
      {
        title: "Front-End Developer • Web",
        dateRange: "Aug 2015 – Jul 2016",
        duration: "1 year",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Developed the frontend of an algorithmic trading platform and marketplace for trading models",
          "Led migration from Angular to React and onboarded/trained new team members",
        ],
      },
    ],
  },
  {
    company: "Upwork",
    logo: "/logos/upwork.jpeg",
    roles: [
      {
        title: "Freelance Designer",
        dateRange: "Jun 2013 – Aug 2015",
        duration: "2 years 3 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Delivered web designs (Adobe Fireworks), full-stack web development (PHP + MySQL), and long-form presentation designs (PowerPoint) for local and international clients",
        ],
      },
    ],
  },
  {
    company: "Toledo Prudente Centro Universitário",
    logo: "/logos/faculdade_toledo_presidente_prudente.jpeg",
    roles: [
      {
        title: "Web Developer • Tools",
        dateRange: "Feb 2015 – Apr 2015",
        duration: "3 months",
        location: "Presidente Prudente, São Paulo, Brazil",
        locationType: "On-site",
        description: [
          "Developed full-stack features for college-wide event management system",
        ],
      },
    ],
  },
]

function RoleEntry({ role, showTimeline, isLast }: { role: Role; showTimeline: boolean; isLast: boolean }) {
  return (
    <div className="flex gap-4">
      {showTimeline && (
        <div className="flex flex-col items-center pt-2">
          <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          {!isLast && <div className="w-px flex-1 bg-border" />}
        </div>
      )}
      <div className={`flex-1 pb-6 ${showTimeline ? "" : ""}`}>
        <h4 className="text-body font-semibold text-foreground">{role.title}</h4>
        <p className="text-caption text-muted-foreground">
          {role.dateRange} • {role.duration}
        </p>
        <p className="text-caption text-muted-foreground">
          {role.location} • {role.locationType}
        </p>

        {role.description.length > 0 && (
          <ul className="mt-3 space-y-1">
            {role.description.map((bullet, i) => (
              <li key={i} className="text-caption leading-relaxed">
                {"• " + bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const hasMultipleRoles = entry.roles.length > 1

  return (
    <div className="flex gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
        <Image
          src={entry.logo}
          alt={`${entry.company} logo`}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-body font-semibold text-foreground">{entry.company}</h3>
          </div>
        </div>

        <div className="mt-1">
          {hasMultipleRoles ? (
            entry.roles.map((role, i) => (
              <RoleEntry key={i} role={role} showTimeline={true} isLast={i === entry.roles.length - 1} />
            ))
          ) : (
            entry.roles.map((role, i) => (
              <RoleEntry key={i} role={role} showTimeline={false} isLast={i === entry.roles.length - 1} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export function CVExperience() {
  return (
    <section className="pt-6">
      <h2 className="text-lg font-semibold text-foreground">Experience</h2>
      <div className="mt-4 flex flex-col gap-6">
        {experiences.map((entry, i) => (
          <div key={i}>
            <ExperienceCard entry={entry} />
            {i < experiences.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </section>
  )
}
