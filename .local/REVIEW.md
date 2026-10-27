# Technical CV review: Applied AI, FDE, and AI architecture

Reviewed **27 October 2026** for Hadrian de Oliveira.

## Executive assessment

Your CV establishes a credible senior software engineer and engineering
leader: you have owned customer integrations, delivered AWS improvements,
managed engineers, and built products in several business domains. The
strongest hiring evidence is concrete: CRM setup reduced from days to
minutes, infrastructure costs reduced by 25%, deployments reduced from about
40 to 10 minutes, and leadership of a five-person engineering team.

The current document does not yet make an equally strong case for senior
production AI delivery. Employment bullets primarily demonstrate software,
cloud, and product engineering. The World Cup Graph Agent is relevant AI
work, but the CV gives it little prominence or technical detail. Its linked
repository contains materially stronger architectural evidence than the CV
shows, while explicitly identifying it as a teaching project in development.
That distinction should remain visible. [Experience][experience]
and [project documentation][agent-readme].

My committee judgment is **credible senior engineering foundations, with
uneven evidence for the specific AI and customer responsibilities**. Better
presentation can materially improve screening. It cannot establish
production AI ownership, enterprise account leadership, or language
proficiency that has not actually been developed.

| Target | Assessment of the evidence currently presented |
| --- | --- |
| AWS Sr. AI Engineer, LATAM | Closest relative fit; clarify seniority scope. |
| OpenAI Applied AI Engineer, Startups | Plausible, with material conditions. |
| Google Cloud FDE, GenAI | Stretch; production AI evidence is insufficient. |
| AWS Senior FDE | Stretch at this senior delivery and operations scope. |
| OpenAI Applied AI Architect | Substantial stretch in account ownership. |

These are qualitative screening judgments, not interview probabilities or
claims about an employer's internal scoring. The AWS LATAM assessment is
provisional because its direct posting could not be opened; the exact job's
indexed official description was available.

The highest-value changes are to resolve factual inconsistencies, surface
specific AI and customer evidence, and create a concise submission PDF.
The browser-generated A4 and Letter versions both produced five pages in
this inspection. On mobile, Experience starts approximately 3,240 pixels
below the top. Those are meaningful obstacles to understanding your fit.

## Evidence, method, and limits

I read [competitive-technical-cv.md][research] first and used it as the
primary editorial reference. I then inspected the component source and the
running app at `http://localhost:3000/` with the installed `playwright-cli`.
The visual review included desktop at 1440 × 1000, mobile at 390 × 844,
screenshots, A4 and Letter PDF exports, and extracted PDF text.

I also inspected [Profile.pdf][profile] as supplemental information and read
the linked projects' README files plus the graph agent's evidence record.
The rendered CV remains the main assessment artifact. Supplemental details
are not silently treated as current, independently verified achievements.
Project code was not audited or executed, and private evaluation artifacts
were not inspected. Credential verification pages were not retrievable in
the research tool, so issue dates, expiry, and completion status remain
unverified.

All five target job descriptions informed the review:

- Both OpenAI descriptions were directly retrievable.
- Google's exact job ID was retrievable through an official URL with query
  parameters after the supplied URL failed in the research tool.
- AWS Senior FDE job 10579001 was retrievable on `www.amazon.jobs`.
- AWS LATAM job 10565973 returned 404 on direct retrieval. Its full indexed
  official description was available, including responsibilities and
  qualifications. This supports a provisional fit assessment, not a claim
  that applications are currently open.

### Where the primary reference needs qualification

The reference's emphasis on relevance, clear ownership, and supported
outcomes is sound. I would adjust several prescriptions:

- **Google's five years concern software development**, not five years of
  production AI development. Production AI delivery is a separate minimum
  qualification. Overstating that threshold would unfairly downgrade you.
  [Google posting][google-role].
- **Languages differ by posting.** OpenAI Startups names Spanish, English,
  and Portuguese; Google's target names English and Portuguese. Do not
  generalize Spanish into a requirement for all five roles. The retrieved
  Architect and AWS descriptions do not establish that universal rule.
  [OpenAI Startups][openai-startups] and [Google][google-role].
- **A concise skills section is useful.** It supports scanning when the
  experience and projects also show how those skills were used. The problem
  is an unsupported inventory, not the existence of a skills section.
- **Page count, date alignment, and bullet count are editorial choices.**
  Two readable pages are a sensible target for this history. Right-aligned
  dates, a fourth bullet, or a restrained logo are not independently strong
  reasons to reject a candidate.
- **Parsing risk is not automatic rejection.** Greenhouse documents problems
  with columns and complex formatting, but that does not establish how these
  employers configured their systems or how they will process this file.
  [Greenhouse's parsing documentation][greenhouse].

For corroboration, Google's dated 2021 resume guide recommends concise,
impact-focused documents and easy-to-find contact information. Harvard's
career guidance emphasizes specificity, results, relevance, and a readable
PDF. These are useful principles, not a secret hiring formula or evidence
of a universal scan-time cutoff. [Google resume guide][google-resume]
and [Harvard resume guidance][harvard].

## Role alignment and fit assessment

Across the roles, the recurring expectation is to connect engineering work
to customer value: understand a problem, make defensible technical choices,
help deliver a working system, and communicate its results. The balance
between writing code, operating AI systems, and owning customer strategy
varies substantially. The following assessments separate those demands.

### OpenAI — Applied AI Engineer, Startups

**Posting emphasis:** five or more years in software/ML engineering or an
equivalent role; startup and founding experience; Python and JavaScript;
OpenAI API prototypes; customer partnership, knowledge sharing, and product
feedback. Spanish, English, and Portuguese are named. The location is
São Paulo with three office days weekly. [Official posting][openai-startups].

**Your strongest alignment:** Revenue Vessel's founding-engineer role and
end-to-end CRM delivery are unusually relevant. Customer onboarding and the
setup-time improvement connect implementation to adoption. Niluk adds
product building, investor communication, and a funding outcome. The graph
agent gives you a concrete Python project to discuss.

**Screening concerns:** no direct OpenAI API implementation is identified.
OpenRouter usage does not itself demonstrate direct OpenAI API work.
Employment use of Copilot and CodeRabbit shows adoption of development tools,
not delivery of an AI product. The CV omits languages; the supplemental
profile lists Spanish as limited working proficiency. The posting does not
specify a formal proficiency level, so this is a material uncertainty,
not proof of automatic ineligibility.

**Committee view:** a plausible candidate worth exploring if language and
API evidence can be established. Lead with customer delivery and the best
AI project. A title change alone would not resolve those uncertainties.

### OpenAI — Applied AI Architect

**Posting emphasis:** technical ownership of a customer portfolio, including
executive discovery, account plans, adoption roadmaps, measurable outcomes,
and coordination of delivery specialists. It combines AI/cloud architecture
with customer strategy across the company's enterprise and developer
products. [Official posting][openai-architect].

**Your strongest alignment:** AWS infrastructure work, integration design,
security controls, roadmap ownership, and logistics/fintech exposure. The
Keep management role and Revenue Vessel onboarding suggest you can connect
technical decisions to stakeholders' needs.

**Screening concerns:** the CV does not establish ownership of named
enterprise accounts, relationships with customer executives, coordinated
implementation across multiple delivery teams, or sustained adoption after
launch. Internal engineering leadership is valuable, but it does not prove
these external account responsibilities. Niluk's investor pitches are useful
communication evidence without establishing enterprise advisory depth.

**Committee view:** a substantial scope stretch on the current record.
A strong graph-agent demonstration would improve technical credibility;
customer portfolio and adoption examples would change this assessment more.
If such work exists, describe the relationship, decisions, delivery
boundaries, and outcomes without renaming your actual job titles.

### Google Cloud — Forward Deployed Engineer, GenAI

**Minimum requirements:** five years of software development in Python or
similar languages; production AI delivery and cloud AI architecture;
structured/unstructured pipelines with vector databases and RAG; technical
discovery; fluent English/Portuguese; a relevant degree or equivalent
practical experience. Multi-agent implementations and LLM performance
measurement are preferred. An English resume is required.
[Exact official posting][google-role].

**Your strongest alignment:** integration engineering, data ingestion,
automated testing, and founding-engineer ownership. The graph agent is more
relevant than the small sidebar description suggests. Its documentation
covers separate approval decisions, conversation access, evaluation cases,
and a GCP deployment implementation.

**Screening concerns:** a graph-backed teaching application does not by itself
establish production enterprise AI delivery or vector retrieval experience.
Google Maps Geocoding and Firebase Auth are useful integrations, but do not
establish the missing cloud AI delivery scope. The supplemental repository
record describes a bounded GCP demonstration, not a maintained production
service. Technical discovery leadership is also insufficiently described.

**Committee view:** a stretch with a credible foundation. This is listed as
Mid, so it should not be evaluated as a principal research role. A missing
master's degree is not the main problem; demonstrated delivery scope is.
Surface actual relevant deployments if they exist, keeping demonstrations
and coursework clearly identified.

### AWS — Senior Forward Deployed Engineer

**Posting emphasis:** embedded enterprise delivery, production AI
architecture and operations, engineering standards, mentoring, and
30–50% travel. Basic qualifications include leading agentic/spec-driven
development at production scale and experience with evaluation, agent, RAG,
and prompting tools. Enterprise AI/ML deployment is separately preferred.
[Exact official posting][aws-fde].

**Your strongest alignment:** AWS migration outcomes at Reelgood, security
hardening and data pipelines at Revenue Vessel, testing practices, and
leadership of the five-person Cards team. Your startup ownership and
React/TypeScript background are relevant strengths.

**Screening concerns:** the CV does not explain a production AI operating
model: quality gates, observed failures, telemetry, incident ownership, or
customer handoff. Its AI coding-tool bullet is too thin to establish the
agentic/spec-driven development qualification. Project documentation of AWS
AgentCore deployment code does not establish a successful production launch.

**Committee view:** a stretch at the advertised senior delivery scope.
Your general engineering seniority is credible; the missing evidence concerns
AI delivery and operation under customer constraints. Add that evidence if
available. Do not turn CI, Copilot usage, or a teaching project into an
enterprise production claim.

### AWS — Sr. AI Engineer, AI Engineering LATAM

**Indexed posting emphasis:** this exact job is categorized as Solutions
Architect. It focuses on business-led architecture, technical tradeoffs,
customer advisory work, reusable designs, workshops, and collaboration across
customer-facing teams. The stated experience thresholds are 10+ years in
relevant IT development/implementation/consulting, 4+ in a technology domain,
and 2+ in application/infrastructure design, implementation, or consulting.
AWS operations and cloud transformation experience are preferred.
[Indexed official posting][aws-latam].

**Your strongest alignment:** the App Runner migration has both engineering
and cost outcomes; the CRM integration demonstrates business workflow
understanding; the security controls demonstrate practical infrastructure
work. This combination supports the architecture-oriented description more
directly than the other roles' production AI requirements.

**Screening concerns:** named customers, design tradeoffs, workshops, reusable
architectures, and external advisory scope remain underdeveloped. The
summary's 13+ years cannot alone establish the 10-year requirement: calendar
span, active experience, overlaps, and omitted periods need reconciliation.
The indexed qualifications do not impose the same explicit production-agent
requirements as the AWS FDE listing; do not import them solely from the title.

**Committee view:** the best relative match in this group. I would consider
an exploratory screen if the experience threshold is supported, then probe
architectural judgment and customer communication. Verify the posting's
current status before prioritizing an application.

## Strengths and weaknesses

### Strengths worth preserving and making easier to find

- **End-to-end ownership with customer value.** Revenue Vessel's CRM work
  connects development, integration, configuration, onboarding, and a usable
  outcome. This is stronger evidence than the summary's self-description.
  [Revenue Vessel, first bullet][rv].
- **Measured cloud engineering results.** The Reelgood migration links a
  specific technical change to cost and delivery improvements. Preserve the
  25% and approximately 40-to-10-minute results, along with their scope.
  [Reelgood, senior role][reelgood].
- **Practical security and integration experience.** VPC segmentation,
  Twingate, authentication controls, CRM mapping, and ingestion pipelines
  show work beyond a front-end-only profile. [Revenue Vessel][rv].
- **Credible leadership.** Keep supplies a team size and concrete management
  responsibilities. Reelgood shows progression from Senior to Lead and a
  release-cadence improvement. [Keep and Reelgood][keep].
- **Relevant domain and stakeholder range.** Logistics, payments, investment
  operations, travel, and consumer media provide business contexts for
  technical decisions. Niluk and early freelance work add external-facing
  communication. Do not substitute employer prestige for explaining your
  own contribution. [Employment history][experience].
- **A useful AI portfolio foundation.** The graph agent documents boundaries
  between model decisions, permissions, state, and verification. That is
  more compelling architectural material than a list of frameworks.
  Its teaching documentation also gives you an existing example of written
  technical communication. [Graph agent README][agent-readme].

### Distinguishing weaknesses from missing information

**Presentation weaknesses already established:** the AI project is buried;
contact details and languages are incomplete in the rendered CV; the opening
is generic; credential descriptions take too much space; print pagination
is poor. These can be improved without acquiring new experience.

**Claims needing clarification:** degree completion and dates, the 13+ years
summary, FINRA recognition, the 40-to-80 performance claim, and the meaning
of company growth. Their ambiguity is a credibility risk, not evidence of
intentional misrepresentation.

**Experience not established by the reviewed evidence:** sustained customer
AI production ownership, enterprise technical account planning, systematic
AI quality/cost measurement, and repeated customer discovery leadership.
Some may be omissions. If they have not occurred, they are real development
needs that wording cannot fix.

**Not primary weaknesses:** lack of publications, model-training research,
a PhD, or an exhaustive list of cloud certifications. These are applied and
customer engineering targets. Evaluate the actual requirements rather than
inventing a research-scientist benchmark.

## Content review

### Header, positioning, and first impression

The [header][header] says "Software Engineering and Management" and then
prioritizes a US LLC and B1/B2 visa. That leaves the reviewer to infer the
connection to these Brazil-based roles. A more useful opening identifies
software/cloud engineering, applied AI work, location, and a contact method.
The LLC/visa detail can be omitted from these versions unless relevant to a
specific application question. Do not replace it with an unverified
work-authorization assertion.

There is no email in the rendered CV. The supplemental profile contains
`hadrian.dev@outlook.com`; confirm it is current before adding it. It also
uses a different LinkedIn path, `linkedin.com/in/hadrian-dev`, while the CV
uses `linkedin.com/in/hadriandeoliveira`. Confirm the preferred working link;
neither was proven broken in this review. A phone number is optional for the
public site; a usable email is the higher priority. [Profile.pdf][profile].

The [summary and Values section][intro] use space on "Get-It-Done Type,"
"Business-First," discipline, and transparency. These describe intentions
that the experience already demonstrates more convincingly. Replace the
opening with a short evidence-led summary and remove the standalone Values
section. Preserve the values in examples of decisions and collaboration.

### Skills and depth of evidence

Rename "Keywords" to **Technical Skills**. Keep a compact, relevant list
supported by experience or projects. Favor recognizable technologies and
capabilities over KISS, SOLID, OOP, and generic labels such as AI or ML.
Consistent names such as LangChain and Next.js are a useful final cleanup,
but not a major hiring issue. [Current skills][intro].

Keep levels of evidence legible. For example, AWS App Runner and VPC work
are employment evidence; Python/Neo4j/DeepAgents are project evidence;
course descriptions of Bedrock, SageMaker, and vector databases are learning
evidence. Do not combine them into a claim of production expertise in every
listed service. The linked project now supplies more GCP evidence than a
bare keyword, but it still needs its demonstration scope stated.

Architectural depth is best shown through a decision, constraint, and
consequence. For a pipeline, that could be ingestion freshness, duplicate
handling, retries, or tenancy. For a migration, it could be the reason for
App Runner and the operating tradeoff. These are prompts for facts to gather,
not claims that those mechanisms were implemented.

### Recent employment

**Revenue Vessel:** retain the CRM result as the lead bullet. Remove
"industry-first" unless there is a defensible basis for that market-wide
claim. The pipeline bullet gives technologies but little scale or judgment.
The security bullet is specific and valuable; distinguish contributing to
SOC 2 readiness from a completed audit. CI and AI code review are worthwhile
engineering practice, but "optimize team velocity" lacks an observed result.
The agile/process bullet is the first candidate for compression when space
is needed. [Revenue Vessel][rv].

**Keep:** the five-person team and roadmap ownership should remain visible.
Clarify your personal implementation versus team delivery in the card
integration bullets. The short tenure is a question a recruiter may ask;
it is not evidence of poor performance. "Improved team morale" and "ahead
of schedule" need a concrete observation or should be shortened. One strong
leadership example is more useful than several management abstractions.
[Keep][keep].

**Reelgood:** bring the cost/deployment outcome forward within the company
entry, while retaining the correct role and dates. "Triple-digit company
YoY growth" does not identify the measure or your contribution. Do not
rewrite it as growth you personally caused. If it remains, specify whether
it means revenue, traffic, customers, or something else. [Reelgood][reelgood].

The "Core Web Vitals and SEO improvements from ~40 to ~80" statement needs
technical correction. Core Web Vitals are individual experience metrics,
not one combined 0–100 score. Identify the actual Lighthouse category,
pages, device, and test conditions, and describe SEO separately if it was
also measured. Do not retroactively invent a modern metric for older work.
[Original bullet][reelgood] and [Google's Web Vitals explanation][web-vitals].

**Altruist:** reducing hour-long tasks to seconds is valuable. Identify the
workflow and frequency if available. "Earned FINRA recognition for audit
quality" could mean formal recognition, examiner feedback, or feedback
reported internally; those are different claims. Confirm the exact event,
recipient, wording, and your contribution before using the stronger version.
"Measurably improved ops efficiency" is redundant without a measurement.
[Altruist][altruist].

### Earlier experience and career narrative

Booking.com's million-plus-user interfaces and experimentation are useful
scale and product evidence. They do not establish ownership of the chatbot's
model, inference system, or AI architecture. Keep that boundary accurate.
Consolidate its three related roles into one compact company entry with
accurate progression, rather than spending repeated space on location and
duration. [Booking.com][booking].

Keep a brief Niluk example for startup applications: prototype delivery,
external presentation, and funding are differentiating. Its dates overlap
Booking.com; identify concurrent or part-time work only if accurate. Older
HeyJobs, Quantler, Upwork, and Toledo entries can be compressed into an
Earlier Experience section while preserving employers, titles, and dates.
Do not remove the early timeline merely to make the document appear younger
or more uniformly AI-focused. [Earlier experience][earlier].

### AI projects and credentials

**World Cup Graph Agent deserves more space and a better position.** Its
existing description names a graph and tools, but misses the decisions that
make it interesting: separate research/write approvals, identity boundaries,
state handling, and evaluation scope. Put it above coursework and supply a
short architecture/result description plus the repository link.
[Current Projects section][projects] and [repository][agent-readme].

The repository's evidence record reports a private GCP demonstration on
22–23 October 2026, with selected conversation/access checks. It explicitly
states that public trace links are absent and that load, availability,
recovery, and production readiness were not established. It also identifies
a measured working-tree revision and uncommitted changes. This is useful
bounded evidence. It does not justify claims of enterprise scale, broad
answer accuracy, or equivalent live validation on both AWS and GCP.
I did not independently reproduce those checks.
[Evidence record][agent-evidence].

**Conciser is secondary for these applications.** The description explains
an educational concept but supplies little implementation, usage, or outcome
evidence. Its README also states the learning objective rather than a
measured improvement. Retain it if it demonstrates a relevant technical or
customer outcome; otherwise use that space for the stronger project.
Avoid claiming it improves prompting effectiveness without measurement.
[CV project description][projects] and [Conciser README][conciser].

**Certifications support the story but currently dominate the sidebar.**
Use the exact credential, issuer, verified date, and link. For the SAA-C03
entry, restore the **Associate** level rather than leaving "Solutions
Architect" unqualified. That is the credential level identified by AWS,
not a new qualification. [Current credentials][certifications]
and [AWS certification title][aws-cert].

Rename the mixed "Specializations" section to **Selected Training** or
**Professional Development**, unless each entry is an actual specialization
with that official title. A professional certificate, a course, a platform
certificate, and an AWS certification are not interchangeable credentials.
Confirm names against the awards. Compress course syllabi to one line each;
they do not demonstrate that you operated the systems they teach.
[Training entries][training].

### Education and chronology: resolve before submitting

The [rendered Education section][education] presents two Bachelor of Science
entries with same-year date ranges. The supplemental profile differs:

| Entry | Rendered CV | Supplemental Profile.pdf |
| --- | --- | --- |
| UNESP dates | 2014–2014 | 2014–2015 |
| Toledo dates | 2015–2015 | 2015–2016 |
| Toledo field | Information Technology | Computer and Information Systems |

Neither source establishes whether either degree was awarded. Confirm the
official qualification, attendance dates, and completion status. If these
were studies without graduation, say so clearly. Do not replace dates with
the profile's dates simply because they appear more plausible. The issue is
accurate representation, not an assumption that two degrees were impossible.
[Supplemental education][profile].

The employment history begins in June 2013, so the calendar span supports
"since 2013." It does not automatically establish 13 years of active software
engineering and management. There are overlaps and unrepresented periods,
including April 2019–November 2020, August 2021–April 2022, and time after
February 2026. Clarify relevant omitted work and concurrent roles before
using cumulative tenure as a qualification. Avoid double-counting overlap.
The earliest role also mixes design and development. [Dates][experience].

As of this review, the latest job ended about eight months ago. If the
current period includes independent AI work, date it accurately and label
it as such. A break is not inherently negative, and personal details need
not be disclosed. An honest project timeline can make current activity
clearer without inventing employment or changing an ended role to Present.

## Visual review of the rendered CV

### What works

The desktop view is clean and professional. The system font, restrained
palette, separators, company names, role titles, and chronological structure
are easy to recognize. Experience begins at the top of the right column;
Revenue Vessel's strongest result is immediately available. Logos are
secondary to readable text, rather than replacing it.

At the tested 390-pixel width, the page reflows without horizontal overflow.
The body remains readable. The main design problems are content priority
and print behavior, rather than a need for more visual decoration.

### Observations from the actual app

| Observation | Measured result |
| --- | --- |
| Desktop viewport | 1440 × 1000 pixels |
| Desktop document height | About 3,223 pixels |
| Rendered content | About 1,218 whitespace-separated words |
| Main body text | 13.6 px, with about 22.1 px line height |
| Name / section headings | 24 px / 18 px |
| Desktop Projects heading | About 2,362 pixels below the top |
| Mobile viewport | 390 × 844 pixels |
| Mobile Experience heading | About 3,240 pixels below the top |
| Mobile total height | About 7,821 pixels |
| A4 and Letter exports | Five pages each under tested settings |

These are observations of this build, not general CV benchmarks.

**Hierarchy:** the opening sidebar spends substantial space on Values,
Keywords, and credential explanations before presenting the most relevant
AI project. At desktop size, Projects begins more than two viewport heights
down. On mobile, the entire sidebar comes before Experience, pushing the
employment evidence almost four screen heights down. The source's ordering
explains that behavior. [Page composition][layout].

**Density:** the desktop experience column is readable, but several bullets
become multi-line paragraphs. Reducing repetition and course descriptions
will improve scanning more than tightening every line of spacing. The
current body size is not unusually tiny; do not shrink it to force the
existing content onto fewer pages. Make the strongest results easier to
pick out with limited emphasis.

**PDF pagination:** I exported through Playwright's Chromium PDF facility
at scale 1, using A4 and Letter, default zero margins, backgrounds enabled,
and no browser header/footer. The A4 version has four pages of text and a
fifth page containing only a small continuation of the sidebar background.
The Letter version places Education alone on page five. A4 page one ends
with Reelgood's company/title while the dates and bullets continue on page
two. The World Cup project first appears on page four.

Those are serious submission issues for a 1,218-word CV. Other print settings
may change the count; I am not claiming every export produces five pages.
The app currently has no dedicated print layout or page-break rules.
Create a deliberate submission format with readable margins, controlled
breaks, and a two-page target. [Layout][layout] and [styles][styles].

**Text extraction:** the exported PDF contains selectable text, which is a
positive. However, default `pdftotext` extraction interleaves the columns:
for example, the Keywords technology list is interrupted by Reelgood's
dates near the start of A4 page two. That supports a real reading-order
concern. It is not a test of OpenAI's, Google's, or Amazon's ATS, and it does
not prove rejection. A single-column submission PDF is the simplest way to
reduce this risk. [Vendor explanation of parsing risks][greenhouse].

**Minor polish:** the project emoji appeared as missing-glyph boxes in this
container's browser and PDF. That may reflect available fonts, but removing
those decorative characters would make exports more portable. Existing
links and issuer logos are otherwise understandable. This is much lower
priority than the five-page export and buried experience.

### Recommended information order

For the application PDF, use name/contact/languages, a brief summary,
selected experience, the strongest AI project, compact skills, and concise
credentials/education. Keep a project reference in the opening summary so
AI evidence is visible immediately, even if full project details are later.

For the website, retain the restrained visual style while moving experience
and the AI project ahead of long supporting sections on narrow screens.
A short sidebar can still work on desktop. The website and submission PDF
can have different layouts while sharing the same accurate facts.

## Prioritized recommendations

1. **Resolve factual and contact ambiguity before applying.** Highest
   credibility impact; mostly verification rather than rewriting. Confirm
   education dates/completion, current email and LinkedIn URL, language
   levels, cumulative experience, and credential names. Reconcile the CV
   with the supplemental profile. Remove or qualify unsupported recognition
   and superlatives. Success means every factual claim can be explained
   consistently without correcting the document during an interview.

2. **Make the AI evidence specific and appropriately scoped.** Highest
   potential effect on the AI engineering assessments. Expand the graph
   agent around implemented controls, evaluation design, and actual hosted
   evidence. Supply dates and a reproducible result summary tied to a code
   revision if you can. If customer production AI experience exists, give
   it priority over the demonstration. If it does not, retain the honest
   teaching-project label and build that experience rather than escalating
   the wording. More introductory certificates are unlikely to resolve this.

3. **Produce a readable two-page application PDF and fix mobile order.**
   High screening impact, with a bounded implementation effort. Remove
   Values, shorten the skills inventory and training descriptions, compress
   older roles, and control print breaks. Keep recent experience and AI
   relevance on page one. Verify A4 and Letter at normal reading size, with
   no empty final page, orphaned role heading, or mixed reading order.
   Do not achieve the page target by making the text materially smaller.

4. **Add one concrete external customer-delivery example.** High impact
   across these targets. Revenue Vessel is the most promising starting
   point. Establish what you discovered with the customer, the constraint
   you resolved, what you personally owned, and what happened after launch.
   Identify internal stakeholders separately from external customers. For
   the Architect application, additional portfolio/adoption evidence would
   be necessary; one onboarding example alone has narrower scope.

5. **Expose architectural judgment and tighten existing metrics.** High
   impact in technical screening. Add one meaningful tradeoff to the AWS
   migration or ingestion story. Define the scope of cost savings, what
   setup time measured, the actual performance score, and the basis of audit
   feedback. A defensible qualitative outcome is better than an invented
   percentage. Retain already strong metrics rather than manufacturing
   numbers for every bullet.

6. **Tailor emphasis using the same factual record.** Moderate-to-high
   impact. For OpenAI Startups, foreground founding ownership, customer
   delivery, and any verified direct API work. For the Architect version,
   foreground actual advisory/adoption work if available. For Google and AWS
   FDE, prioritize implementation, evaluations, integration, and operations.
   For AWS LATAM, prioritize the migration, architecture decisions, and
   customer communication. Preserve actual titles, dates, and project scope
   across every version.

7. **Finish with low-cost editorial cleanup.** Lower impact. Standardize
   product names and SOC 2 spelling, use complete credential titles, remove
   duplicate duration/location lines where appropriate, and remove decorative
   emoji from the submission version. Do not spend substantial effort
   debating logo shapes, date alignment, or synonyms for strong verbs.

## Suggested rewrites with before/after examples

The following are recommendations only; the CV source was not changed.
**Ready from existing text** means the rewrite adds no new accomplishment,
not that employment claims were independently audited. **Confirm first**
marks a factual question or additional evidence requirement. Bracketed
fields are templates and must never be submitted as completed claims.

### 1. Headline and summary

**Before:**

> Software Engineering and Management
>
> Full-Stack Engineer: Specializing in Software Architecture, and Project
> Management
>
> Get-It-Done Type: Focused on business growth, team work, and process
> automation

**After — supported positioning:**

> Lead Software Engineer | Cloud & Applied AI
>
> Software engineer and former engineering manager with founding-engineer
> experience in logistics and delivery experience in fintech and consumer
> products. Owned CRM integrations, data pipelines, and AWS infrastructure
> improvements; led a five-person engineering team. Built a Python graph-agent
> project using Neo4j, DeepAgents, and LangSmith.

This identifies the relevant experience without asserting that all past
work was AI engineering. Keep the original employment titles beneath it.
For an architecture-focused version, emphasize the integration, security,
and customer onboarding evidence rather than inventing an architect title
in the employment history. [Header][header], [summary][intro],
and [experience][experience].

### 2. Contact information and languages

**Before:**

> Based in Brazil. With US LLC and B1/B2 Visa

**After — confirm current details first:**

> Brazil | [confirmed email] | [verified LinkedIn URL] | github.com/hd-o
>
> Languages: Portuguese and English — native/bilingual;
> Spanish — limited working proficiency.

The language wording reflects the supplemental profile, not an assessment
performed here. Update it only to your actual current level. Add São Paulo
if it is your current location. Do not upgrade Spanish to fluent merely to
match a target role. [Header][header] and [supplemental profile][profile].

### 3. Revenue Vessel: customer integration

**Before:**

> Owned end-to-end development and customer onboarding of a logistics
> industry-first CRM sync solution integrating HubSpot and Salesforce, with
> custom filters and property mapping directly from the product UI, reducing
> sales team setup time from days to minutes

**After — ready from existing text:**

> Built and owned a logistics CRM sync solution integrating HubSpot and
> Salesforce, including customer onboarding and in-product filters and field
> mapping; reduced sales-team setup time from days to minutes.

This preserves the result and ownership while dropping an unsupported market
superlative. Strengthen it further only if you can define the setup task,
customer count, and measurement basis. [Original][rv].

### 4. Revenue Vessel: security scope

**Before:**

> Led infrastructure and application hardening for SOC2 compliance;
> implemented AWS VPC network segmentation, Twingate connectors, Multi-Factor
> Authentication (Firebase Auth), and automated package vulnerability
> monitoring

**After — ready from existing text:**

> Led infrastructure and application hardening in support of SOC 2 compliance,
> implementing AWS VPC segmentation, Twingate connectors, Firebase Auth MFA,
> and automated dependency-vulnerability monitoring.

This names the actual work without claiming a completed audit. If an audit
was completed, add its verified outcome and your contribution separately.
[Original][rv].

### 5. Revenue Vessel: AI-assisted engineering

**Before:**

> Established continuous integration and automated testing using GitHub
> Actions, Heroku, Jest, and Playwright, while embedding automated AI
> code-reviews (CodeRabbit and GitHub Copilot) to optimize team velocity

**After — ready from existing text:**

> Established CI and automated testing with GitHub Actions, Heroku, Jest,
> and Playwright; integrated CodeRabbit and GitHub Copilot into code review.

The concrete practice is worth retaining. Add a delivery or quality result
only if observed; do not turn tool adoption into a production AI-product
claim. [Original][rv].

### 6. Keep: leadership and ownership

**Before:**

> Led a 5-person Cards engineering team through 1:1s, performance management,
> mentoring, and pairing while owning roadmap scoping and execution with
> Product

**After — ready from existing text:**

> Led a five-person Cards engineering team, owning roadmap scope and delivery
> with Product and coaching engineers through pairing, mentoring, and
> performance management.

This is a strong existing bullet. An example of a difficult prioritization
decision or an engineer's increased ownership would deepen it if available.
[Original][keep].

### 7. Reelgood: preserve the best quantitative evidence

**Before:**

> Reduced web infrastructure costs by 25% and cut deployment duration from
> ~40 min to ~10 min, by migrating from Jenkins CI and AWS Elastic Beanstalk
> to GitHub Actions CI and AWS App Runner

**After — ready from existing text:**

> Migrated web deployments from Jenkins and AWS Elastic Beanstalk to GitHub
> Actions and AWS App Runner, reducing web infrastructure costs by 25% and
> deployment time from approximately 40 to 10 minutes.

Do not replace this with vague language about transformation. Clarify which
costs and deployment stages were measured if you have that information.
[Original][reelgood].

### 8. Reelgood: repair the performance metric

**Before:**

> Drove Core Web Vitals and SEO improvements from ~40 to ~80 (Lighthouse and
> Search Console)

**After — conditional template, not a completed claim:**

> Improved the Lighthouse [confirmed category] score from approximately 40
> to 80 on [pages and device profile] through [verified changes].

If the measure was not Lighthouse, name the actual measure instead. Add
Search Console or field-performance results separately when supported.
Do not equate doubling a score with doubling real-world performance.
[Original][reelgood].

### 9. Altruist: retain impact while resolving recognition

**Before:**

> Built back-office automation tools that compressed hour-long operational
> tasks into seconds and earned FINRA recognition for audit quality

**After — conservative version from existing text:**

> Built back-office automation tools that reduced hour-long operational tasks
> to seconds.

Add the workflow and frequency when known. Restore the audit-related outcome
only with precise attribution: formal recognition, examiner feedback, and
internal praise require different language. Do not imply a regulator award
without evidence. [Original][altruist].

### 10. World Cup Graph Agent: communicate the design

**Before:**

> Python AI chatbot that answers World Cup questions using a Neo4j graph,
> researches missing information through permission-controlled tools, and
> updates the knowledge graph. Uses LangChain DeepAgents, OpenRouter, and
> LangSmith for agentic AI orchestration, model inference, and evaluation.

**After — supported by CV and repository documentation:**

> Built a Python/Neo4j teaching chatbot with DeepAgents and OpenRouter,
> separating approval for external research from approval for graph writes.
> Implemented conversation-access controls and evaluation scenarios with
> LangSmith tracing; the repository includes AWS AgentCore and GCP Cloud Run
> deployment implementations.

Keep **teaching project** visible. Confirm your personal implementation scope
before adopting the expanded wording. A hosted-result bullet should name the
specific verified environment and checks, and should not imply that both
cloud implementations were validated in production. [Current text][projects],
[README][agent-readme], and [evidence record][agent-evidence].

### 11. Credentials: replace syllabus copy with identification

**Before:**

> AWS Certified Solutions Architect
>
> SAA-C03 validates knowledge of designing secure, resilient, high-performing
> cloud architectures and optimizing costs using the AWS Well-Architected
> Framework and services including EC2, S3, VPC, and IAM.

**After — title supported; verify date/status:**

> AWS Certified Solutions Architect – Associate | AWS | [verified issue date]
> [Existing credential link]

Use the same compact format for AWS Certified AI Practitioner. List selected
courses beneath a clearly named training heading, using their official
award titles. Keep the current credential URLs unless verification reveals
a reason to change them. [Current entries][certifications]
and [official credential name][aws-cert].

### 12. Education: make the qualification status explicit

**Before, for Toledo:**

> Bachelor of Science - BS • Information Technology
>
> 2015 – 2015

**After — choose only the factually correct form:**

- If awarded: **[Official degree and field] — Toledo Prudente Centro
  Universitário, [verified graduation year].**
- If not awarded: **Coursework in [official field] — Toledo Prudente Centro
  Universitário, [verified attendance dates]; degree not completed.**
- If transferred: describe the actual study/transfer history and list an
  awarded degree only where it was awarded.

Apply the same verification to UNESP. Neither the current CV nor the
supplemental profile resolves this question. [Education source][education]
and [Profile.pdf][profile].

## Questions and missing evidence

These questions are ordered by their likely effect on accuracy or the fit
assessment. They are not a request to generate impressive-sounding numbers.

1. **What are the exact education facts?** Which qualifications, if any,
   were awarded? What are the official fields and attendance/graduation
   dates? Why do the current CV and Profile.pdf differ?

2. **What is the complete relevant work timeline?** What, if anything, is
   omitted in the unrepresented periods? Was Niluk concurrent or part-time?
   What has occupied the period since February 2026, and when did the AI
   projects begin? How many years of relevant active experience can be
   supported without counting simultaneous work twice?

3. **Are the supplemental contact and language details current?** Confirm
   the email and preferred LinkedIn URL. Has Spanish progressed beyond
   limited working proficiency? Could you explain an architecture and lead
   a technical customer discussion in Spanish today? Do not infer a higher
   level from having worked internationally.

4. **Have you delivered a customer-facing AI system beyond the teaching
   project?** If yes, identify the problem, users, your code and architectural
   contribution, launch date, adoption, and operating responsibilities.
   Distinguish prototypes, internal pilots, and sustained production use.
   If there is none, that is useful information for choosing roles and
   identifying the next substantive experience to build.

5. **What direct OpenAI API work can you demonstrate?** Which application,
   integration, model/tool interaction, and result can you explain? Separate
   that from Copilot, ChatGPT use, and models accessed through OpenRouter.
   Existing work should be surfaced before undertaking a new portfolio task.

6. **What evaluation evidence is reproducible for the graph agent?** Which
   scenarios ran, on what revision and environment, with which results?
   What checks cover denied actions, permitted writes, ownership boundaries,
   and failure recovery? Can a suitable result summary and traces be shared
   without private data? Measure latency/cost only if useful to an actual
   design decision, and identify the small-sample limits.

7. **What external customer discovery and adoption did you own?** For the
   CRM integration, who described the need, how did you resolve ambiguity,
   and what changed after onboarding? How many customers used it, if known?
   Did you lead workshops, produce reusable guidance, or influence a product
   roadmap? For account-oriented work, what continued after implementation?

8. **Which architectural decisions best show your judgment?** Why App
   Runner for Reelgood? What alternatives and operating constraints mattered?
   How did the logistics pipelines address duplication, failures, data
   freshness, or scale, if those were part of your work? Describe one
   defensible tradeoff rather than listing every available cloud pattern.

9. **Can the strongest outcome claims be defined precisely?** What did the
   25% cost reduction cover? What did 40-to-10-minute deployment time include?
   Which setup tasks changed from days to minutes? What was the 40-to-80
   performance measure? What grew at Reelgood, and how did your work relate?
   What exactly was the FINRA feedback or recognition?

10. **What demonstrates senior influence beyond direct management?** Did
    mentoring increase engineers' ownership, reduce repeated incidents,
    improve design decisions, or create reusable practices? Are there
    specific stakeholder disagreements you resolved? Keep team outcomes and
    your contribution clearly connected.

11. **Which logistics and evidence can you confirm for each application?**
    Confirm willingness for the stated office/travel arrangements, current
    credential status, and which public project materials a reviewer can
    access. For the graph project, a concise architecture explanation and
    bounded reproducible results would be more valuable than additional
    broad claims about production readiness.

[research]: competitive-technical-cv.md
[profile]: Profile.pdf
[experience]: /workspaces/cv/components/cv-experience.tsx:20
[rv]: /workspaces/cv/components/cv-experience.tsx:22
[keep]: /workspaces/cv/components/cv-experience.tsx:42
[reelgood]: /workspaces/cv/components/cv-experience.tsx:61
[altruist]: /workspaces/cv/components/cv-experience.tsx:93
[booking]: /workspaces/cv/components/cv-experience.tsx:111
[earlier]: /workspaces/cv/components/cv-experience.tsx:150
[header]: /workspaces/cv/components/cv-header.tsx:3
[intro]: /workspaces/cv/components/cv-intro.tsx:6
[projects]: /workspaces/cv/components/cv-projects.tsx:3
[certifications]: /workspaces/cv/components/cv-certifications.tsx:3
[training]: /workspaces/cv/components/cv-specializations.tsx:3
[education]: /workspaces/cv/components/cv-education.tsx:11
[layout]: /workspaces/cv/app/page.tsx:10
[styles]: /workspaces/cv/app/globals.css:1
[openai-startups]:
  https://openai.com/careers/applied-ai-engineer-startups-sao-paulo/
[openai-architect]:
  https://openai.com/careers/applied-ai-architect-%28brazil%29-sao-paulo/
[google-role]:
  https://www.google.com/about/careers/applications/jobs/results/135227481845048006-forward-deployed-engineer-gen-ai-google-cloud-english-portuguese?hl=zh-MO&page=56
[aws-fde]:
  https://www.amazon.jobs/en/jobs/10579001/senior-forward-deployed-engineer-aws-forward-deployed-engineering
[aws-latam]:
  https://www.amazon.jobs/en/jobs/10565973/sr-ai-engineer-ai-engineering-latam
[google-resume]:
  https://services.google.com/fh/files/misc/resume-writing-tips-for-veterans-2021.pdf
[harvard]:
  https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/
[greenhouse]:
  https://support.greenhouse.io/hc/en-us/articles/200989175
[aws-cert]:
  https://aws.amazon.com/certification/certified-solutions-architect-associate/
[web-vitals]: https://web.dev/articles/vitals
[agent-readme]:
  https://github.com/hd-o/world-cup-graph-agent/blob/main/README.md
[agent-evidence]:
  https://github.com/hd-o/world-cup-graph-agent/blob/main/docs/EVIDENCE.md
[conciser]: https://github.com/hd-o/conciser/blob/main/README.md
