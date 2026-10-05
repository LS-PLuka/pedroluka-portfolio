import type { ReactNode } from "react";

import {
  community,
  navigation,
  profile,
  projects,
  trajectory,
} from "@/content/portfolio";

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SectionHeading({ id, marker, children }: { id: string; marker: string; children: ReactNode }) {
  return (
    <div className="section-heading">
      <span className="section-heading__marker" aria-hidden="true">{marker}</span>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

function ProjectDiagram({ projectId }: { projectId: string }) {
  if (projectId === "ideal-admissao") {
    return (
      <div className="flow-diagram" role="img" aria-label="Resumo do fluxo do Ideal Admissão">
        <div className="diagram-node"><span>Candidato</span><strong>Etapas e documentos</strong></div>
        <span className="diagram-connector" aria-hidden="true" />
        <div className="diagram-node"><span>RH</span><strong>Revisão independente</strong></div>
        <span className="diagram-connector" aria-hidden="true" />
        <div className="diagram-node"><span>Entrega</span><strong>ERP, kit e assinatura</strong></div>
      </div>
    );
  }

  return (
    <div className="event-diagram" role="img" aria-label="Resumo do fluxo assíncrono do Antifraud System">
      <div className="diagram-node"><span>Entrada</span><strong>Transação</strong></div>
      <div className="event-channel"><span>RabbitMQ</span></div>
      <div className="diagram-node"><span>Análise</span><strong>Motor de risco</strong></div>
      <div className="event-channel"><span>RabbitMQ</span></div>
      <div className="diagram-node"><span>Registro</span><strong>Auditoria</strong></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="wordmark" href="#inicio" aria-label="Pedro Luka, início">PL</a>
          <nav aria-label="Navegação principal">
            <ul className="site-nav">
              {navigation.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero page-grid" id="inicio" aria-labelledby="hero-title">
          <aside className="hero__context" aria-label="Contexto atual">
            <p>{profile.currentRole}</p>
            <p>{profile.location}</p>
            <span className="status-note"><span aria-hidden="true" />Em formação contínua</span>
          </aside>
          <div className="hero__content">
            <p className="hero__name">{profile.name}</p>
            <h1 id="hero-title">{profile.headline}</h1>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions" aria-label="Atalhos">
              <a className="primary-link" href="#projetos">Conhecer os projetos</a>
              <a className="text-link" href="#contato">Entrar em contato</a>
            </div>
          </div>
        </section>

        <section className="projects-section page-grid" aria-labelledby="projects-title">
          <div className="section-rail"><SectionHeading id="projects-title" marker="P">Projetos selecionados</SectionHeading></div>
          <div className="project-list" id="projetos">
            {projects.map((project, index) => (
              <article className="project" key={project.id}>
                <header className="project__header">
                  <div><p className="project__context">{project.context}</p><h3>{project.title}</h3></div>
                  <p className="project__period">{project.period}</p>
                </header>
                <div className="project__body">
                  <p className="project__summary">{project.summary}</p>
                  <ul className="project__decisions" aria-label="Aspectos em destaque">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
                <ProjectDiagram projectId={project.id} />
                <footer className="project__footer">
                  <p>{project.footnote}</p>
                  {project.href ? (
                    <a className="text-link" href={project.href}>Ver repositório central <ArrowUpRightIcon /></a>
                  ) : <span>Estudo de caso em preparação</span>}
                </footer>
                <span className="project__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="trajectory-section page-grid" id="trajetoria" aria-labelledby="trajectory-title">
          <div className="section-rail"><SectionHeading id="trajectory-title" marker="T">Trajetória em movimento</SectionHeading></div>
          <div className="trajectory-list">
            {trajectory.map((item) => (
              <article className="trajectory-item" key={item.title}>
                <p className="trajectory-item__meta">{item.meta}</p>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="community-section page-grid" aria-labelledby="community-title">
          <div className="section-rail"><SectionHeading id="community-title" marker="C">Comunidade e aprendizado</SectionHeading></div>
          <div className="community-copy"><p className="community-copy__lead">{community.title}</p><p>{community.description}</p></div>
        </section>

        <section className="contact-section page-grid" id="contato" aria-labelledby="contact-title">
          <div className="contact-section__lead"><SectionHeading id="contact-title" marker="@">Vamos conversar</SectionHeading></div>
          <div className="contact-section__body">
            <p>Meu trabalho está no encontro entre regras de negócio, integrações e decisões que precisam continuar claras quando o sistema cresce.</p>
            <a className="contact-link" href={profile.github}><span>GitHub</span><strong>@LS-PLuka</strong><ArrowUpRightIcon /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer"><p>Pedro Luka</p><p>São Sebastião, SP</p></footer>
    </>
  );
}
