import Link from "next/link";

import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { community } from "@/content/community";
import { credentials } from "@/content/credentials";
import { education } from "@/content/education";
import { experiences } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />

      <main id="conteudo">
        <section className="hero page-grid" id="inicio" aria-labelledby="hero-title">
          <aside className="hero__context" aria-label="Contexto atual">
            <p>{profile.currentRole}</p>
            <p>{profile.location}</p>
            <span className="status-note">
              <span aria-hidden="true" />
              Em formação contínua
            </span>
          </aside>
          <div className="hero__content">
            <p className="hero__name">{profile.name}</p>
            <h1 id="hero-title">{profile.headline}</h1>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions" aria-label="Atalhos">
              <a className="primary-link" href="#projetos">
                Conhecer os projetos
              </a>
              <a className="text-link" href="#contato">
                Entrar em contato
              </a>
            </div>
          </div>
        </section>

        <section className="content-section page-grid" id="projetos" aria-labelledby="projects-title">
          <div className="section-rail">
            <SectionHeading
              id="projects-title"
              marker="P"
              title="Projetos"
              description="Do contexto ao raciocínio técnico."
            />
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-preview" key={project.id}>
                <div className="project-preview__meta">
                  <p>{project.context}</p>
                  <p>{project.period}</p>
                </div>
                <div className="project-preview__main">
                  <span className="project-preview__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{project.title}</h3>
                  <p className="project-preview__purpose">{project.purpose}</p>
                  <p className="project-preview__summary">{project.summary}</p>
                  <ul className="project-preview__highlights" aria-label="Destaques do projeto">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="project-preview__links">
                    <Link className="primary-link" href={project.href}>
                      Conhecer o projeto
                      <ArrowRightIcon />
                    </Link>
                    {project.repositoryUrl ? (
                      <a className="text-link" href={project.repositoryUrl}>
                        GitHub
                        <ArrowUpRightIcon />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="content-section page-grid"
          id="experiencia"
          aria-labelledby="experience-title"
        >
          <div className="section-rail">
            <SectionHeading
              id="experience-title"
              marker="E"
              title="Experiência profissional"
              description="Responsabilidades e evolução por empresa."
            />
          </div>
          <div className="section-body">
            {experiences.map((experience) => (
              <article className="experience" key={experience.company}>
                <h3>{experience.company}</h3>
                <ol className="role-list">
                  {experience.roles.map((role) => (
                    <li key={role.title}>
                      <div className="role-list__marker" aria-hidden="true" />
                      <div className="role-list__content">
                        <div className="entry-heading">
                          <h4>{role.title}</h4>
                          {role.period ? <p>{role.period}</p> : null}
                        </div>
                        <p>{role.description}</p>
                        {role.projectHref && role.projectLabel ? (
                          <Link className="inline-project-link" href={role.projectHref}>
                            Projeto relacionado: {role.projectLabel}
                            <ArrowRightIcon />
                          </Link>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section page-grid" id="formacao" aria-labelledby="education-title">
          <div className="section-rail">
            <SectionHeading
              id="education-title"
              marker="F"
              title="Formação acadêmica"
              description="Formação técnica e graduação."
            />
          </div>
          <div className="section-body entry-list">
            {education.map((item) => (
              <article className="education-entry" key={item.course}>
                <div className="education-entry__meta">
                  <p>{item.level}</p>
                  <span>{item.status}</span>
                </div>
                <div>
                  <h3>{item.course}</h3>
                  <p>{item.institution}</p>
                  {item.period ? <p className="entry-period">{item.period}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section page-grid" id="cursos" aria-labelledby="credentials-title">
          <div className="section-rail">
            <SectionHeading
              id="credentials-title"
              marker="C"
              title="Cursos e certificações"
              description="Credenciais com o tipo identificado."
            />
          </div>
          <div className="section-body entry-list">
            {credentials.map((credential) => (
              <article className="credential-entry" key={credential.name}>
                <div>
                  <p className="credential-entry__type">{credential.type}</p>
                  <h3>{credential.name}</h3>
                  {credential.issuer ? <p>{credential.issuer}</p> : null}
                </div>
                <div className="credential-entry__status">
                  <span>{credential.status}</span>
                  {credential.period ? <p>{credential.period}</p> : null}
                  {credential.verificationUrl ? (
                    <a href={credential.verificationUrl}>Verificar credencial</a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section page-grid" id="comunidade" aria-labelledby="community-title">
          <div className="section-rail">
            <SectionHeading
              id="community-title"
              marker="+"
              title="Comunidade"
              description="Aprendizado compartilhado em contexto real."
            />
          </div>
          <div className="community-copy">
            <div className="community-copy__role">
              <p>{community.role}</p>
              <span>{community.institution}</span>
            </div>
            <div>
              <p className="community-copy__lead">{community.title}</p>
              <p>{community.description}</p>
            </div>
          </div>
        </section>

        <section className="contact-section page-grid" id="contato" aria-labelledby="contact-title">
          <div className="contact-section__lead">
            <SectionHeading id="contact-title" marker="@" title="Contato" />
          </div>
          <div className="contact-section__body">
            <p>
              Meu trabalho está no encontro entre regras de negócio, integrações e decisões que
              precisam continuar claras quando o sistema cresce.
            </p>
            <a className="contact-link" href={profile.github}>
              <span>GitHub</span>
              <strong>@LS-PLuka</strong>
              <ArrowUpRightIcon />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
