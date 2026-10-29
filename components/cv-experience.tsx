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
          "Owned development of HubSpot and Salesforce integrations, replacing manual spreadsheet imports with one-click syncing of contact and company data, reducing CRM data import from days to minutes.",
          "Onboarded customer IT and sales teams through OAuth setup, property mapping, and custom logistics filters; debugged issues live and shipped follow-up fixes in one-day feedback cycles.",
          "Implemented AWS KMS envelope encryption for OAuth tokens. Led SOC 2 readiness including AWS network separation, VPCs, Twingate VPN, Firebase MFA, and Heroku connectivity to AWS.",
          "Built data ingestion pipelines with BullMQ, AWS S3, and Snowflake.",
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
          "Led a five-person Cards team, owning roadmap delivery for Apple Pay and Google Wallet integrations, and supporting Mastercard physical-card rollout.",
          "Implemented web-based card PIN entry and issuer integration. Worked directly with issuer engineers to diagnose, test, and unblock delivery.",
          "Coached engineers. Managed performance review. Moved from sync to async daily stand-ups, and project status updates through Linear.",
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
          "Led web engineering, and shifted team from weekly to daily releases.",
          "Migrated codebase to TypeScript, and introduced Cypress E2E testing.",
        ],
      },
      {
        title: "Senior Software Engineer • Web",
        dateRange: "May 2022 – Sep 2022",
        duration: "5 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        description: [
          "Migrated web deployments from Jenkins and AWS Elastic Beanstalk to GitHub Actions and AWS App Runner, reducing web infrastructure costs by 25% and deployment time from ~40 to ~10 minutes.",
          "Automated per-PR preview environments with GitHub Actions and App Runner, creating services when needed and deleting them when PRs closed, without requiring a Next.js migration.",
          "Built in-house web analytics and telemetry pipelines with RxJS.",
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
          "Led development of Retool dashboards and internal operations tools, isolated encryption server, and Cypress E2E tests; Replaced spreadsheet-and-email workflows and reduced hour-long tasks to seconds.",
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
          "Built live-chat and chatbot interfaces used by million+ users.",
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
          "Built Chrome extension for ML team to manage experiment settings.",
          "Ran customer-service A/B experiments and user research sessions."
        ],
      },
    ],
  },
  {
    company: "niluk.app",
    logo: "/logos/niluk.jpeg",
    roles: [
      {
        title: "Founding Software Engineer",
        dateRange: "Feb 2018 – Jan 2019",
        duration: "1 year",
        location: "Amsterdam, Netherlands",
        locationType: "On-site (part-time)",
        description: [
          "Built an event mobile app with React, Node.js, and MongoDB.",
          "Presented conference attendees at a Web Summit Lisbon 2018 booth.",
          "Pitched to investors, receiving funding from the City of Amsterdam.",
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
          "Built job-post distribution web app with React.",
          "Built web-based CV PDF-generation."
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
          "Built frontend of an algorithmic trading platform.",
          "Led React migration, and trained team members."
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
          "Web design and PHP/MySQL web development.",
          "Enterprise PowerPoint presentation design."
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
          "Built features for ASP.NET event-management system.",
        ],
      },
    ],
  },
]

function RoleEntry({ role }: { role: Role }) {
  return (
    <div className="cv-role flex gap-4">
      <div className="cv-role-content flex-1 pb-6">
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
  return (
    <div className="cv-experience-card flex gap-3">
      <div className="cv-logo relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
        <Image
          src={entry.logo}
          alt={`${entry.company} logo`}
          fill
          loading="eager"
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="cv-company-heading flex items-start justify-between">
          <div>
            <h3 className="text-body font-semibold text-foreground">{entry.company}</h3>
          </div>
        </div>

        <div className="mt-1">
          {entry.roles.map((role, i) => (
            <RoleEntry key={i} role={role} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function CVExperience() {
  return (
    <section className="cv-experience">
      <h2 className="text-lg font-semibold text-foreground">Experience</h2>
      <div className="cv-experience-list mt-4 flex flex-col gap-6">
        {experiences.map((entry, i) => (
          <div key={i} className="cv-experience-entry">
            <ExperienceCard entry={entry} />
            {i < experiences.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </section>
  )
}
