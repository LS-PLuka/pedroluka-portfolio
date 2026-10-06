import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { PageTransition } from "@/components/page-transition";
import { ProjectList } from "@/components/project-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos selecionados de Pedro Luka, com contexto, decisões técnicas e verificação.",
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <PageTransition><main id="conteudo">
        <PageIntro icon="folder" title="Meus projetos" description="Estudos de caso organizados pelo problema, pelas decisões técnicas e pela forma de verificação." note={`${projects.length} estudos de caso`} />
        <section className="directory-section page-grid" aria-label="Lista de projetos">
          <div className="directory-section__rail"><p>Selecionados</p></div>
          <ProjectList projects={projects} />
        </section>
      </main></PageTransition>
      <SiteFooter />
    </>
  );
}
