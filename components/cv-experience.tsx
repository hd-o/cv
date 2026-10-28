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
          "Led development of HubSpot and Salesforce integrations for a logistics data platform, replacing manual spreadsheet imports with one-click and list-based syncing of contact, company, and logistics data; reduced CRM data preparation and import from days to minutes.",
          "Onboarded customer IT and sales teams through OAuth setup, property mapping, and custom logistics filters; debugged issues live and shipped follow-up fixes in one- to two-day feedback cycles.",
          "Implemented AWS KMS envelope encryption for customer OAuth tokens and extracted shared OAuth components; led SOC 2 readiness work across AWS network separation, Twingate, Firebase MFA, and Heroku Private Spaces connectivity to AWS.",
          "Built logistics data ingestion pipelines with BullMQ, AWS S3, PostgreSQL, and Snowflake.",
          "Shipped CRM features through spec-driven AI-assisted development, using product requirements, implementation plans, stacked PRs, and human review; established automated testing with GitHub Actions, Jest, and Playwright, and managed CodeRabbit PR reviews.",
        ],
      },
    ],
  },
  {
    company: "Keep",
    logo: "/logos/keep.jpeg",
    roles: [
      {
        title: "Tech Lead → Engineering Manager • Cards",
        dateRange: "Feb 2024 – Jul 2024",
        duration: "6 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Led a five-person Cards team, owning roadmap delivery with Product for Apple Pay and Google Wallet integrations and supporting the Mastercard physical-card rollout.",
          "Implemented web-based card PIN entry and the i2c verification integration; worked directly with i2c engineers to diagnose issues, test fixes, and unblock delivery.",
          "Coached engineers through pairing and mentoring; replaced daily stand-ups with asynchronous Slack updates and project status reporting in Linear.",
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
          "Led web engineering and shifted the team from weekly to daily releases, supported by faster deployment and recovery cycles.",
          "Migrated the codebase from JavaScript to TypeScript and introduced Cypress integration testing.",
        ],
      },
      {
        title: "Senior Software Engineer • Web",
        dateRange: "May 2022 – Sep 2022",
        duration: "5 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Migrated web deployments from Jenkins and AWS Elastic Beanstalk to GitHub Actions and AWS App Runner, reducing web infrastructure costs by 25% and deployment time from approximately 40 to 10 minutes.",
          "Automated per-PR preview environments with GitHub Actions and App Runner, creating services when needed and deleting them when PRs closed, without requiring a Next.js migration.",
          "Built an in-house web analytics and telemetry pipeline with React and RxJS.",
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
          "Led development of Retool dashboards and internal operations tools, working with backend engineers on supporting APIs and data; replaced spreadsheet-and-email workflows and reduced hour-long tasks to seconds.",
          "Owned back-office encryption services and end-to-end testing with BrowserStack and Cypress.",
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
          "Owned live-chat interfaces for customer-service staff.",
          "Supported the Vue.js migration, and added automated UI tests."
        ],
      },
      {
        title: "Front-End Developer • Chat",
        dateRange: "Aug 2018 – Nov 2018",
        duration: "4 months",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        description: [
          "Built live-chat and chatbot interfaces used by more than one million users.",
        ],
      },
      {
        title: "Front-End Developer • Support",
        dateRange: "Oct 2017 – Aug 2018",
        duration: "11 months",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        description: [
          "Developed self-service support tools used by millions of users.",
          "Ran A/B experiments and user research sessions to improve customer-service tools."
        ],
      },
    ],
  },
  {
    company: "niluk.app",
    logo: "/logos/niluk.jpeg",
    roles: [
      {
        title: "Software Engineer • Mobile (part-time)",
        dateRange: "Feb 2018 – Jan 2019",
        duration: "1 year",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        description: [
          "Built a mobile event-discovery prototype and presented it at Web Summit Lisbon 2018;",
          "Presented to mentors and investors, receiving funding from the City of Amsterdam.",
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
          "Built job-post distribution, application, and CV PDF-generation features, informed by live user research.",
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
          "Built frontend of an algorithmic trading platform; Led React migration, and trained team members.",
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
          "Delivered web design and PHP/MySQL development for local and international clients.",
        ],
      },
    ],
  },
  {
    company: "Toledo Prudente Centro Universitário",
    logo: "/logos/faculdade_toledo_presidente_prudente.jpeg",
    roles: [
      {
        title: "Web Development Intern • Tools",
        dateRange: "Feb 2015 – Apr 2015",
        duration: "3 months",
        location: "Presidente Prudente, São Paulo, Brazil",
        locationType: "On-site",
        description: [
          "Built full-stack features for a college-wide ASP.NET event-management system.",
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
    <section>
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
