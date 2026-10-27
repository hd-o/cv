import { Separator } from "@/components/ui/separator"
import Image from "next/image"

interface Role {
  title: string
  dateRange: string
  duration: string
  location: string
  locationType: string
  teamAchievements: string[]
  individualResponsibilities: string[]
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
        teamAchievements: [
          "CRM integration with HubSpot and Salesforce: First ever CRM sync solution with logistics industry-focused custom filters and property mapping, directly from our UI, turning what took sales teams days to setup into few minutes.",
          "Large dataset search with instant feedback: Search with < 1s feedback using logistics industry-focused filters, powered by weekly data ingestion and estimation pipelines, allowing significantly faster discovery for sales teams.",
          "SOC2 compliance: Implemented infrastructure changes to meet SOC2 requirements, including network segmentation, app multi-factor authentication, security audits, package vulnerability monitoring, and more.",
        ],
        individualResponsibilities: [
          "Developed CRM OAuth integrations with HubSpot and Salesforce",
          "Developed location based search with Google Maps Geocoding",
          "Developed data ingestion pipelines with BullMQ, S3, and Snowflake",
          "Implemented 2FA workflow (TOTP, and SMS) with Firebase Auth",
          "Added infrastructure for automated testing with Jest and Playwright",
          "Full-stack dev with NextJS, TypeScript, and PostgreSQL (AWS RDS)",
          "Configured CI pipelines with GitHub Actions and Heroku deploy",
          "Segmented networks with AWS VPCs, and Twingate Connectors",
          "Implemented AI code review with CodeRabbit and GitHub Copilot",
          "Implemented agile workflow (scope/estimate/handoff) with Linear",
          "Led adoption of retrospectives and team health initiatives"
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
        teamAchievements: [
          "Mastercard® Physical Credit Cards: Implemented infrastructure, and setup partnerships for deployment and management of physical credit cards with international shipping and payment features",
          "Tap to Pay with Apple and Google wallets: Implemented infrastructure for deployment of virtual credit cards, enabling payment through digital wallets, and customized org management of cards and credit",
          "Improved team performance with async agile workflow: Adopted an async-first engineering workflow, less interruptions, more flexibility, more focus, resulting in faster releases, ahead of schedule in high priority projects, and significantly improved team morale",
        ],
        individualResponsibilities: [
          "Managed 5 member Cards engineering team (1:1s, perf, mentoring, pairing)",
          "Scoped and planned project roadmap and execution with Product team",
          "Lead development of virtual credit card i2c (auth + security) integration",
          "Implemented async-first workflow with Linear, Notion, Slack automations",
          "Full-stack dev with NextJS, tRPC, MetaBase, Retool, SQL, AWS",
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
        teamAchievements: [
          "Triple-digit company YoY growth in 2023",
          "Improved SEO and CWV from ~40 to ~80",
          "Adopted agile releases, from weekly to daily",
        ],
        individualResponsibilities: [
          "Led and mentored web engineering team",
          "Migrated codebase from JS to TypeScript",
          "Added UI integration testing with Cypress",
          "CWV/SEO with Lighthouse/Search Console",
        ],
      },
      {
        title: "Senior Software Engineer • Web",
        dateRange: "May 2022 – Sep 2022",
        duration: "5 months",
        location: "São Paulo, Brazil",
        locationType: "Remote",
        teamAchievements: [
          "Lowered web infrastructure costs by 25%",
          "Deploy duration from ~40min to ~10min",
          "In-house high throughput web analytics",
        ],
        individualResponsibilities: [
          "Setup with Cloudflare and AWS App Runner",
          "DevOps with Docker, CI with GitHub Actions",
          "Code with React, TypeScript, and RxJS",
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
        teamAchievements: [
          "FINRA recognition for best audited tools",
          "Hour-long tasks into seconds with automation",
          "Improved ops efficiency with back-office tools",
        ],
        individualResponsibilities: [
          "Data dashboards with SQL and Retool",
          "Backend server with Node.js and TypeScript",
          "Testing with BrowserStack and Cypress",
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
        teamAchievements: [
          "Live chat UI for CS agents",
          "Code migration to Vue.js",
        ],
        individualResponsibilities: [
          "Chat interface development with Vue.js",
          "Automated testing with Nightwatch.JS",
        ],
      },
      {
        title: "Front-End Developer • Chat",
        dateRange: "Aug 2018 – Nov 2018",
        duration: "4 months",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        teamAchievements: ["Live chat accessible to million+ users"],
        individualResponsibilities: [
          "UI development with React and Redux",
        ],
      },
      {
        title: "Front-End Developer • Support",
        dateRange: "Oct 2017 – Aug 2018",
        duration: "11 months",
        location: "Amsterdam, Netherlands",
        locationType: "On-site",
        teamAchievements: [
          "User issue self-service resolution tools",
          "Reduced CS load with redesigned FAQs",
        ],
        individualResponsibilities: [
          "Research and deploy experiments (A/B)",
          "Participate in user testing sessions",
          "Develop web customer service tools",
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
        teamAchievements: [
          "Presented at Web Summit Lisbon 2018",
          "Received funding from the City of Amsterdam",
          "Research projects with universities in Amsterdam",
        ],
        individualResponsibilities: [
          "Present project to mentors and investors",
          "Mobile development with Cordova and React",
          "API development with MongoDB and Node.js",
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
        teamAchievements: [
          "Improved hiring through smart job post distribution",
          "Platform for easy job application, and CV design",
        ],
        individualResponsibilities: [
          "Web development with JavaScript and React",
          "Product research through live user sessions",
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
        teamAchievements: [
          "Released an online algorithmic trading platform",
          "Developed a marketplace for trading models",
        ],
        individualResponsibilities: [
          "Development with JavaScript and React",
          "App migration from Angular to React",
          "Training and onboarding team member",
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
        teamAchievements: [],
        individualResponsibilities: [
          "Web design with Adobe Fireworks",
          "Web development with PHP and MySQL",
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
        teamAchievements: ["College-wide event management system"],
        individualResponsibilities: ["Development with VB.net and Web Forms"],
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

        {(role.teamAchievements.length > 0 || role.individualResponsibilities.length > 0) && (
          <div className="mt-3 grid grid-cols-2 gap-4">
            {role.teamAchievements.length > 0 && (
              <div>
                <p className="text-caption font-bold text-foreground">Team Achievements</p>
                <ul className="mt-1 space-y-1">
                  {role.teamAchievements.map((achievement, i) => (
                    <li key={i} className="text-caption leading-relaxed">
                      {"• " + achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {role.individualResponsibilities.length > 0 && (
              <div>
                <p className="text-caption font-bold text-foreground">Individual Responsibilities</p>
                <ul className="mt-1 space-y-1">
                  {role.individualResponsibilities.map((resp, i) => (
                    <li key={i} className="text-caption leading-relaxed">
                      {"• " + resp}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
