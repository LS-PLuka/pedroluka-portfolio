import Link from "next/link";

import { ContactSection } from "@/components/contact-section";
import { ContentList } from "@/components/content-list";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { OptionalImage } from "@/components/optional-image";
import { ProjectList } from "@/components/project-list";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { community } from "@/content/community";
import { contentChannel, featuredContents } from "@/content/contents";
import { currently } from "@/content/currently";
import { siteMedia } from "@/content/media";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { stack } from "@/content/stack";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />

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
              <Link className="primary-link" href="/projetos">Conhecer os projetos</Link>
              <a className="text-link" href="#contato">Entrar em contato</a>
            </div>
          </div>
        </section>

        <section className="content-section page-grid" id="stack" aria-labelledby="stack-title">
          <div className="section-rail">
            <SectionHeading id="stack-title" marker="S" title="Stack" description="Tecnologias organizadas pelo papel que ocupam na minha prática." />
          </div>
          <div className="section-body stack-grid">
            {stack.map((group) => (
              <article className={`stack-group stack-group--${group.level === "Foco principal" ? "primary" : group.level === "Em aprofundamento" ? "learning" : "supporting"}`} key={group.title}>
                <div><p>{group.level}</p><h3>{group.title}</h3></div>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section page-grid" id="projetos" aria-labelledby="projects-title">
          <div className="section-rail">
            <SectionHeading id="projects-title" marker="P" title="Projetos selecionados" description="Do contexto ao raciocínio técnico." />
          </div>
          <ProjectList projects={projects} />
        </section>

        <section className="content-section page-grid" id="sobre" aria-labelledby="about-title">
          <div className="section-rail">
            <SectionHeading id="about-title" marker="PL" title="Sobre" description="Trabalho, formação e o que estou construindo agora." />
          </div>
          <div className={`section-body about-preview${siteMedia.portrait ? " about-preview--with-image" : ""}`}>
            <OptionalImage image={siteMedia.portrait} className="about-preview__image" />
            <div className="about-preview__copy">
              <p>{profile.bio}</p>
              <Link className="text-link" href="/sobre">Conhecer minha trajetória <ArrowRightIcon /></Link>
            </div>
          </div>
        </section>

        <section className="content-section page-grid" id="comunidade" aria-labelledby="community-title">
          <div className="section-rail">
            <SectionHeading id="community-title" marker="+" title="Comunidade" description="Aprendizado compartilhado em contexto real." />
          </div>
          <div className={`community-feature${siteMedia.communityLogo ? " community-feature--with-image" : ""}`}>
            <OptionalImage image={siteMedia.communityLogo} className="community-feature__logo" />
            <div className="community-feature__meta">
              <p>{community.role}</p><span>{community.institution}</span><span>{community.period}</span>
            </div>
            <div className="community-feature__copy">
              <p className="community-feature__lead">{community.title}</p>
              <p>{community.description}</p>
              <ul aria-label="Frentes de atuação">{community.fronts.map((front) => <li key={front}>{front}</li>)}</ul>
              <div className="link-pair">
                <Link className="primary-link" href="/comunidade">Conhecer a comunidade <ArrowRightIcon /></Link>
                <a className="text-link" href={community.linkedinUrl}>Página do grupo no LinkedIn <ArrowUpRightIcon /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section page-grid" id="conteudos" aria-labelledby="contents-title">
          <div className="section-rail">
            <SectionHeading id="contents-title" marker="C" title="Conteúdos" description="Notas, artigos e vídeos sobre o que aprendo construindo." />
          </div>
          <div className="section-body content-preview">
            <div className="channel-block">
              <p className="channel-block__handle">{contentChannel.handle}</p>
              <h3>Aprendizado também vira conteúdo.</h3>
              <p>{contentChannel.description}</p>
              <div className="link-pair">
                <a className="primary-link" href={contentChannel.url}>Visitar o canal <ArrowUpRightIcon /></a>
                <Link className="text-link" href="/conteudos">Ver todos os conteúdos <ArrowRightIcon /></Link>
              </div>
            </div>
            <ContentList entries={featuredContents} />
          </div>
        </section>

        <section className="content-section page-grid" id="atualmente" aria-labelledby="currently-title">
          <div className="section-rail">
            <SectionHeading id="currently-title" marker="→" title="Atualmente" description="Um recorte manual do que está em movimento." />
          </div>
          <dl className="section-body currently-list">
            {currently.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.text}</dd></div>)}
          </dl>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
