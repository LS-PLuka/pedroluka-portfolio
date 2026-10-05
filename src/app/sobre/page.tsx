import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { OptionalImage } from "@/components/optional-image";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { credentials } from "@/content/credentials";
import { education } from "@/content/education";
import { experiences } from "@/content/experience";
import { siteMedia } from "@/content/media";
import { profile } from "@/content/profile";
import { recommendations } from "@/content/recommendations";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Experiência, formação e trajetória profissional de Pedro Luka.",
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <PageIntro marker="PL" title="Sobre" description={profile.bio} note={profile.currentRole} />

        {siteMedia.portrait ? (
          <section className="portrait-section page-grid" aria-label="Retrato">
            <div className="portrait-section__copy"><p>{profile.summary}</p></div>
            <OptionalImage image={siteMedia.portrait} className="portrait-section__image" />
          </section>
        ) : null}

        <section className="content-section page-grid" id="experiencia" aria-labelledby="experience-title">
          <div className="section-rail"><SectionHeading id="experience-title" marker="E" title="Experiência profissional" description="Responsabilidades e evolução por empresa." /></div>
          <div className="section-body">
            {experiences.map((experience) => (
              <article className="experience" key={experience.company}>
                <div className="experience__heading">
                  <h3>{experience.company}</h3>
                  {experience.location || experience.mode ? <p>{[experience.location, experience.mode].filter(Boolean).join(" · ")}</p> : null}
                </div>
                <ol className="role-list">
                  {experience.roles.map((role) => (
                    <li key={role.title}>
                      <div className="role-list__marker" aria-hidden="true" />
                      <div className="role-list__content">
                        <div className="entry-heading"><h4>{role.title}</h4>{role.period ? <p>{role.period}</p> : null}</div>
                        <p>{role.description}</p>
                        {role.responsibilities ? <ul className="role-list__responsibilities">{role.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                        {role.focus ? <ul className="role-list__focus" aria-label="Focos da atuação">{role.focus.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                        {role.projectHref && role.projectLabel ? <Link className="inline-project-link" href={role.projectHref}>Projeto relacionado: {role.projectLabel}<ArrowRightIcon /></Link> : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section page-grid" id="formacao" aria-labelledby="education-title">
          <div className="section-rail"><SectionHeading id="education-title" marker="F" title="Formação acadêmica" description="Formação técnica e graduação." /></div>
          <div className="section-body entry-list">
            {education.map((item) => (
              <article className="education-entry" key={item.course}>
                <div className="education-entry__meta"><p>{item.level}</p><span>{item.status}</span></div>
                <div><h3>{item.course}</h3><p>{item.institution}</p>{item.period ? <p className="entry-period">{item.period}</p> : null}{item.description ? <p className="entry-description">{item.description}</p> : null}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section page-grid" id="credenciais" aria-labelledby="credentials-title">
          <div className="section-rail"><SectionHeading id="credentials-title" marker="C" title="Cursos e certificações" description="Credenciais com o tipo identificado." /></div>
          <div className="section-body entry-list">
            {credentials.map((credential) => (
              <article className="credential-entry" key={credential.name}>
                <div><p className="credential-entry__type">{credential.type}</p><h3>{credential.name}</h3>{credential.issuer ? <p>{credential.issuer}</p> : null}{credential.description ? <p className="entry-description">{credential.description}</p> : null}</div>
                <div className="credential-entry__status"><span>{credential.status}</span>{credential.period ? <p>{credential.period}</p> : null}{credential.verificationUrl ? <a href={credential.verificationUrl}>Ver credencial</a> : null}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section page-grid" id="recomendacoes" aria-labelledby="recommendations-title">
          <div className="section-rail"><SectionHeading id="recommendations-title" marker="R" title="Recomendações" description="Trechos de recomendações recebidas no LinkedIn." /></div>
          <div className="section-body recommendation-list">
            {recommendations.map((recommendation) => (
              <figure className="recommendation" key={recommendation.author}>
                <blockquote><p>“{recommendation.excerpt}”</p></blockquote>
                <figcaption><a href={recommendation.profileUrl}>{recommendation.author}</a><span>{recommendation.relationship}</span><span>{recommendation.period}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
