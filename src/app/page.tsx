import Link from "next/link";

import { ContactSection } from "@/components/contact-section";
import { ContentList } from "@/components/content-list";
import { ArrowRightIcon, ArrowUpRightIcon, SocialIcon } from "@/components/icons";
import { OptionalImage } from "@/components/optional-image";
import { PageTransition } from "@/components/page-transition";
import { ProjectList } from "@/components/project-list";
import { RecommendationList } from "@/components/recommendation-list";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { community } from "@/content/community";
import { contentChannel, featuredContents } from "@/content/contents";
import { currently } from "@/content/currently";
import { siteMedia } from "@/content/media";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { recommendations } from "@/content/recommendations";
import { featuredStack } from "@/content/stack";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />

      <PageTransition><main id="conteudo">
        <section className={`hero page-grid${siteMedia.portrait ? " hero--with-portrait" : ""}`} id="inicio" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="hero__intro" data-hero-step>Olá, eu sou</p>
            <h1 id="hero-title" data-hero-step>{profile.name}</h1>
            <p className="hero__profession" data-hero-step>{profile.headline}</p>
            <div className="hero__details" data-hero-step>
              <p>{profile.currentContext}</p>
              <p>{profile.summary}</p>
              <p className="hero__location">{profile.location}</p>
            </div>
            <div className="hero__actions" aria-label="Atalhos e perfis" data-hero-step>
              <Link className="primary-link" href="/projetos">Ver meus projetos</Link>
              <Link className="text-link" href="/sobre">Sobre mim</Link>
              <ul className="hero__socials" aria-label="Perfis profissionais">
                <li><a href={profile.github} aria-label="GitHub de Pedro Luka"><SocialIcon name="github" /></a></li>
                <li><a href={profile.linkedin} aria-label="LinkedIn de Pedro Luka"><SocialIcon name="linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <OptionalImage image={siteMedia.portrait} className="hero__portrait" />
        </section>

        <section className="content-section page-grid" id="stack" aria-labelledby="stack-title">
          <div className="section-rail">
            <SectionHeading id="stack-title" icon="code" title="Tecnologias que utilizo" description="Tecnologias centrais na minha atuação." />
          </div>
          <div className="section-body stack-summary">
            <p className="stack-summary__intro">Meu foco é backend com Java e Spring Boot, integrações e cloud.</p>
            <ul aria-label="Tecnologias em destaque">
              {featuredStack.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link className="text-link" href="/sobre#stack-completa">Ver stack completa <ArrowRightIcon /></Link>
          </div>
        </section>

        <section className="content-section page-grid" id="projetos" aria-labelledby="projects-title">
          <div className="section-rail">
            <SectionHeading id="projects-title" icon="folder" title="Meus projetos" description="Estudos de caso com contexto, decisões e verificação." />
          </div>
          <ProjectList projects={projects} />
        </section>

        <section className="content-section page-grid" id="sobre" aria-labelledby="about-title">
          <div className="section-rail">
            <SectionHeading id="about-title" icon="person" title="Sobre mim" description="Atuação profissional, formação e estudos atuais." />
          </div>
          <div className={`section-body about-preview${siteMedia.portrait ? " about-preview--with-image" : ""}`}>
            <OptionalImage image={siteMedia.portrait} className="about-preview__image" />
            <div className="about-preview__copy">
              <div className="about-preview__text">
                {profile.homeAbout.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <Link className="text-link" href="/sobre">Mais sobre mim <ArrowRightIcon /></Link>
            </div>
          </div>
        </section>

        <section className="content-section page-grid" id="recomendacoes" aria-labelledby="home-recommendations-title">
          <div className="section-rail">
            <SectionHeading id="home-recommendations-title" icon="quote" title="Recomendações" description="Trechos de recomendações recebidas no LinkedIn." />
          </div>
          <div className="section-body">
            <RecommendationList recommendations={recommendations} />
          </div>
        </section>

        <section className="content-section page-grid" id="comunidade" aria-labelledby="community-title">
          <div className="section-rail">
            <SectionHeading id="community-title" icon="users" title="Comunidade" description="AWS Student Builder Group na Fatec São Sebastião." />
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
                <a className="text-link" href={community.credential.url}>{community.credential.label} <ArrowUpRightIcon /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section page-grid" id="conteudos" aria-labelledby="contents-title">
          <div className="section-rail">
            <SectionHeading id="contents-title" icon="article" title="Artigos e vídeos" description="Conteúdo sobre tecnologia e estudos em andamento." />
          </div>
          <div className="section-body content-preview">
            <div className="channel-block">
              <p className="channel-block__handle">{contentChannel.handle}</p>
              <h3>Conteúdo sobre backend, cloud e estudos em andamento.</h3>
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
            <SectionHeading id="currently-title" icon="compass" title="Atualmente" description="Um resumo do que estou estudando e publicando." />
          </div>
          <dl className="section-body currently-list">
            {currently.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.text}</dd></div>)}
          </dl>
        </section>

        <ContactSection />
      </main></PageTransition>
      <SiteFooter />
    </>
  );
}
