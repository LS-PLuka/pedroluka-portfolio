<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio implementation brief

## Working agreement

- Build the portfolio in phases. Validate the visual direction and the home page before expanding the remaining routes.
- Pedro makes the commits. Do not commit, push, deploy, or configure an external service unless he explicitly asks.
- Inspect the current project before changing it and preserve unrelated user work.
- Use the installed `frontend-design`, `vercel-react-best-practices`, and `web-design-guidelines` skills for visual design, React/Next.js implementation, and final UI review respectively.
- Keep statements factual. Never invent seniority, ownership, metrics, certifications, production status, events, photos, interfaces, or outcomes.
- Ask Pedro only when missing information would materially alter content or an important decision. Resolve routine implementation choices from this brief.

## Product goal and audience

This is Pedro Luka's personal portfolio. It should connect his current work, selected projects, education, community activity, and technical content with a clear point of view and strong visual quality.

Pedro is:

- a software development intern at Ideal Grupo;
- trained in Internet Informatics at IFSP;
- an ADS student at Fatec São Sebastião;
- an AWS Student Builder Group Leader at Fatec;
- a graduate of AWS re/Start who is beginning to publish technology content;
- focused on backend development with Java, Spring Boot, integrations, microservices, and cloud, with a long-term direction in Software Engineering.

Primary audiences are Brazilian recruiters, technical leaders evaluating Pedro's contributions and reasoning, and people arriving through his content or community work. Make his current intern role and professional direction explicit.

## Technical baseline

- Next.js App Router, TypeScript, Tailwind CSS, ESLint, source files under `src/`, and the `@/*` alias.
- Frontend only. Content is maintained through files and Git history; do not add a CMS, database, authentication, or custom backend.
- Prefer Server Components and static content. Add Client Components only for interactions that genuinely require browser state or APIs.
- Keep portfolio data centralized and typed so projects, experience, links, and publications do not need to be edited across multiple components.
- Use semantic HTML, unique route metadata, optimized images with reserved dimensions, and route-specific URLs for case studies.
- Avoid unnecessary dependencies and abstractions. Create reusable components only where repetition or a shared content pattern is real.
- Hosting is undecided. Vercel is only an initial candidate.

## Content architecture

The home page should present, approximately in this order:

1. Pedro's name, current role, focus, and direct paths to projects, CV, and contact.
2. A stack overview grouped by context and depth.
3. Selected projects.
4. A personal and professional summary linking to the About page.
5. Community activity.
6. Selected content, the channel, and a manually maintained "Currently" block.
7. Relevant contact and profile links.

Do not place a long biography before the projects. Start with two selected projects. Do not create empty routes to make the navigation appear complete. Evaluate whether a separate projects index is useful only after the home page exists.

Implemented route structure:

- `/` for presentation and selected highlights;
- `/projetos` for the project directory;
- `/projetos/ideal-admissao` and `/projetos/antifraud-system` for case studies;
- `/sobre` for experience, education, credentials, and recommendations;
- `/conteudos` for the channel and registered articles, videos, and external publications;
- `/conteudos/[slug]` for statically generated internal articles;
- `/comunidade` for the AWS Student Builder Group and its confirmed activities.

Do not duplicate complete text across routes. Home uses summaries and links to the deeper page. Content remains file-based and typed under `src/content/`; maintenance instructions and non-public examples live in `CONTENT.md`.

Professional experience, academic education, credentials, and community are separate content categories and separate home-page sections. Group the infrastructure-to-development progression at Ideal Grupo under the same company, with roles and confirmed periods kept distinct. On mobile, do not require horizontal timeline scrolling.

Confirmed profile and timeline data:

- Hero direction: "Desenvolvimento de software com foco em backend." Pedro's current title is "Estagiário de Desenvolvimento de Software".
- Ideal Grupo is in São Sebastião, SP, with on-site work. The development internship runs from June 2026 to the present; the Support and IT Infrastructure Apprentice role ran from December 2025 to June 2026.
- Technology in Systems Analysis and Development at Fatec São Sebastião runs from February 2026 to December 2028 (expected) and is in progress.
- The Internet Informatics technical course at IFSP ran from July 2024 to December 2025 and is complete.
- AWS re/Start is a completed training program from AWS / Espro, concluded in September 2026. It is not an AWS professional certification.
- AWS Student Builder Group leadership at Fatec São Sebastião runs from September 2026 to the present. Meetings, workshops, study groups, and practical projects are fronts of activity, not claims about completed events.

Store typed content by category under `src/content/`: profile/navigation, projects, experience, education, credentials, community, and their shared types. Optional fields must not render when the information is unconfirmed.

The initial project routes are:

- `/projetos/ideal-admissao`;
- `/projetos/antifraud-system`.

Home-page project links lead to these case studies. Public repositories are complementary links. Case studies include context, confirmed contribution, operation, decisions, technologies tied to their use, verification, and available materials.

Connect content only through real relationships: an experience can point to its project, a project to a related article, and an activity to its materials. Tie technologies to their concrete use instead of presenting generic logo grids, skill bars, or percentages.

## Visual direction

- Use a personal editorial direction with an engineering-notebook treatment on technical pages.
- Prioritize typography, clear hierarchy, generous spacing, and a recognizable composition over decorative effects.
- Keep transitions simple and discreet, and respect `prefers-reduced-motion`.
- Do not equate backend work with terminal, neon, animated code, or a hacker aesthetic.
- Avoid repetitive SaaS-style card grids and generic technology-logo displays.
- Use photos only when Pedro supplies them, next to the context they document, with captions where useful.
- Never fabricate project screenshots or reproduce private internal interfaces. Use faithful diagrams and explanations for systems without publishable screens.
- Pages should work carefully on mobile and desktop. Essential content must never depend on hover or animation.
- Color and type tokens must be proposed and validated before they are consolidated.

## Selected projects

### Ideal Admissão

Working title: "Ideal Admissão — Digitalização do processo admissional da Ideal Grupo". Confirmed period: July to September 2026.

It is a full-stack system for the end-to-end employee admission process. Explain the flow progressively rather than opening with a complete component diagram:

- HR uses a panel authenticated through Active Directory.
- A candidate accesses a public portal through an expiring UUID token.
- The form is divided into independent steps according to the admission profile; each step has its own status.
- HR can reject a step for correction while preserving approved work.
- LGPD acceptance gates entry, and a browser draft allows the candidate to resume.
- Documents are validated with AI during upload.
- After approval, data is sent to Protheus through ExecAuto to create the employee.
- The system then generates one admission-kit PDF, sends it to Autentique through GraphQL, the candidate signs it, and the company countersigns automatically.

Reported architecture and technology:

- Java 21, Spring Boot, PostgreSQL, and a domain-organized monolith;
- Next.js, TypeScript, a custom design system, and a mobile-first candidate portal;
- append-only Flyway migrations and Hibernate `ddl-auto: validate`;
- MinIO for documents and kits;
- Claude Vision through Anthropic's official Java SDK;
- Thymeleaf, openhtmltopdf, and PDFBox for PDF generation and composition;
- Autentique GraphQL API;
- ADVPL REST endpoints and ExecAuto in Protheus;
- a local cache of 22 ERP tables for panel selects;
- LDAP for HR, local password for the administrator, and SMTP notifications on flow transitions.

Good areas for deeper explanation are independent step review, continuity of completion, HR/candidate access differences, the ERP-to-PDF-to-signature order, and domain organization.

The system was developed to replace a third-party tool costing approximately R$ 100,000 per year. Treat this value only as problem context, not as confirmed savings. Pedro's exact individual contribution and the current deployment state are not yet confirmed. Do not claim exclusive authorship, production use, savings, or time reduction until confirmed. Private repositories must not be linked or exposed.

### Antifraud System

Confirmed period: June to September 2026. Treat it as one project made of three microservices plus a central orchestration repository:

- `https://github.com/LS-PLuka/antifraud-system`
- `https://github.com/LS-PLuka/servico-transacao`
- `https://github.com/LS-PLuka/motor-risco`
- `https://github.com/LS-PLuka/servico-auditoria`

Before writing its case study, read every current README and ADR. Current repository documentation takes precedence over older descriptions.

Documented responsibilities to verify against the repositories:

- `servico-transacao` receives and validates transactions through REST;
- `motor-risco` applies cumulative rules and determines the classification;
- `servico-auditoria` persists decisions;
- the documented internal flow uses RabbitMQ asynchronously, without HTTP calls between services.

Prioritize event contracts, deterministic analysis, and audit idempotency. Also verify separate responsibilities and databases, the five cumulative rules, event-based reference time, tests (unit, Testcontainers integration, and contracts), Docker Compose, GitHub Actions, and ADR consequences.

The old LinkedIn description mentions a score from 0 to 100, while earlier documentation indicated a maximum of 155. Verify the current contract. Do not imply that the classification blocks a real banking operation or that a decision automatically updates the original transaction unless the code proves it. Clearly distinguish documentation review from code execution or audit.

A future local frontend rule demonstration is optional. If built, it must match verified rules, be labeled as a demonstration, and not depend on the backend.

## Case-study standard

Each case study should answer:

1. What problem existed and for whom?
2. What did Pedro contribute?
3. How does the solution work?
4. Which decisions required reasoning?
5. How was behavior verified?
6. What verifiable delivery or outcome exists?

Reveal information progressively: summary, operation, and technical depth. Use a small number of diagrams, each answering one question. Do not invent metrics; a concrete deliverable is a valid outcome.

## Links and media

- Confirmed public profiles: GitHub `https://github.com/LS-PLuka` and LinkedIn `https://www.linkedin.com/in/pedroluka-dev/`.
- Confirmed contact email: `dev.pedroluka@gmail.com`.
- Confirmed channel: `https://www.youtube.com/@plkontech` (`@plkontech`).
- Confirmed AWS Student Builder Group page: `https://www.linkedin.com/company/aws-sbg-fatec-saosebastiao/about/`.
- Confirmed AWS re/Start credential: `https://www.credly.com/badges/19dc3cbf-8b21-4b17-a785-950c99bd978f/linked_in_profile`.
- Surface CV, GitHub, LinkedIn, email, and AWS Builder Center only when their real URLs or files are available.
- Make the CV easy to find and label it as PDF.
- Curate GitHub repositories manually. Start LinkedIn and Builder Center as direct links rather than automated feeds.
- Distinguish completion of AWS re/Start from an AWS professional certification.
- Do not treat commit counts or stars as the main evidence of ability.
- If a CV, photo, link, or publication is missing, keep the data structure ready without rendering broken or invented content.
- Optional images use typed records with source path, alt text, width, height, and an optional caption. Store local assets under `public/images/`. Never render placeholders for absent personal or community media.
- Videos begin as links with optional cover images. Do not embed heavy players on page load.
- LinkedIn and AWS Builder Center content is curated manually; never add automatic feeds without a new explicit requirement.

## Recommendations

Recommendations are discreet editorial content, not a carousel. Identify them as excerpts received on LinkedIn and link only to the authors' profiles:

- Luiz Reche, AWS re/Start instructor, September 2026: `https://www.linkedin.com/in/luizreche/`.
- Denny Paulista Azevedo Filho, Development Web professor, February 2026: `https://www.linkedin.com/in/denny-azevedo/`.

Keep recommendation excerpts verbatim in `src/content/recommendations.ts`.

## Quality bar and verification

- Use semantic HTML, visible keyboard focus, sufficient contrast, comfortable touch targets, and accessible names.
- Never require controlled scrolling, hover, or motion to access essential content.
- Respect reduced-motion preferences and reserve image dimensions to prevent layout shifts.
- Give each route a descriptive title and sharing metadata.
- Review in a real browser at representative mobile and desktop sizes.
- Run the available lint, type, and production-build checks in proportion to the change.
- During the final UI audit, fetch and apply the current Web Interface Guidelines as required by the installed skill.
- Report separately what was verified and what remains pending.

## Implementation phases

1. Inspect the project, skills, and version-specific Next.js documentation; record the decisions here.
2. Define the content model and propose concrete color, type, layout, and interaction tokens.
3. Implement one home-page version to validate composition, typography, and hierarchy.
4. Build the case studies and trajectory after visual approval.
5. Add community and content only as real material becomes available.
6. Perform browser, responsive, accessibility, and technical reviews.
