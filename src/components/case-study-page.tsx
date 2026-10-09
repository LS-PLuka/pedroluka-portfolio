import Link from "next/link";

import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/page-transition";
import type { CaseStudy } from "@/content/types";

type CaseStudyPageProps = {
  project: CaseStudy;
  otherProject: Pick<CaseStudy, "title" | "href">;
};

function CaseSection({
  id,
  title,
  marker,
  children,
}: {
  id: string;
  title: string;
  marker: string;
  children: React.ReactNode;
}) {
  return (
    <section className="case-section page-grid" id={id} aria-labelledby={`${id}-title`}>
      <header className="case-section__heading">
        <span aria-hidden="true">{marker}</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </header>
      <div className="case-section__content">{children}</div>
    </section>
  );
}

export function CaseStudyPage({ project, otherProject }: CaseStudyPageProps) {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />

      <PageTransition><main id="conteudo">
        <header className="case-hero page-grid">
          <div className="case-hero__rail">
            <Link className="back-link" href="/projetos">
              Voltar aos projetos
            </Link>
            <dl>
              <div>
                <dt>Contexto</dt>
                <dd>{project.context}</dd>
              </div>
              <div>
                <dt>Período</dt>
                <dd>{project.period}</dd>
              </div>
            </dl>
          </div>
          <div className="case-hero__content">
            <p>Estudo de caso</p>
            <h1>{project.longTitle}</h1>
            <p className="case-hero__purpose">{project.purpose}</p>
            <p className="case-hero__summary">{project.summary}</p>
          </div>
        </header>

        <nav className="case-index" aria-label="Nesta página">
          <div className="case-index__inner">
            <p>Nesta página</p>
            <ol>
              <li><a href="#contexto">Contexto</a></li>
              {project.contribution ? <li><a href="#contribuicao">Contribuição</a></li> : null}
              <li><a href="#funcionamento">Funcionamento</a></li>
              <li><a href="#decisoes">Decisões</a></li>
              <li><a href="#tecnologias">Tecnologias</a></li>
              <li><a href="#verificacao">Verificação</a></li>
            </ol>
          </div>
        </nav>

        <CaseSection id="contexto" marker="01" title="Contexto e problema">
          <div className="prose-block">
            {project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </CaseSection>

        {project.contribution ? (
          <CaseSection id="contribuicao" marker="02" title="Minha contribuição">
            <div className="prose-block">
              {project.contribution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </CaseSection>
        ) : null}

        <CaseSection id="funcionamento" marker={project.contribution ? "03" : "02"} title="Como funciona">
          <ol className={`case-flow case-flow--${project.id}`}>
            {project.flow.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection id="decisoes" marker={project.contribution ? "04" : "03"} title="Decisões técnicas">
          <div className="decision-list">
            {project.decisions.map((decision) => (
              <article key={decision.title}>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </article>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="tecnologias" marker={project.contribution ? "05" : "04"} title="Tecnologias em uso">
          <dl className="technology-list">
            {project.technologies.map((item) => (
              <div key={item.technology}>
                <dt>{item.technology}</dt>
                <dd>{item.use}</dd>
              </div>
            ))}
          </dl>
        </CaseSection>

        <CaseSection id="verificacao" marker={project.contribution ? "06" : "05"} title="Verificação e entrega">
          <ul className="evidence-list">
            {project.verification.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="evidence-note">{project.evidenceNote}</p>
        </CaseSection>

        <CaseSection id="materiais" marker={project.contribution ? "07" : "06"} title="Materiais disponíveis">
          {project.materials.length > 0 ? (
            <ul className="material-list">
              {project.materials.map((material) => (
                <li key={material.href}>
                  <a href={material.href} target="_blank" rel="noopener noreferrer">{material.label}<ArrowUpRightIcon /></a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="private-materials">
              Os repositórios são privados e o projeto não possui telas publicáveis. O estudo usa apenas o fluxo e a arquitetura que podem ser divulgados.
            </p>
          )}
        </CaseSection>

        <nav className="next-project page-grid" aria-label="Navegação entre projetos">
          <Link href="/projetos">Todos os projetos</Link>
          <Link href={otherProject.href}>
            Próximo projeto: {otherProject.title}
            <ArrowRightIcon />
          </Link>
        </nav>
      </main></PageTransition>

      <SiteFooter />
    </>
  );
}
