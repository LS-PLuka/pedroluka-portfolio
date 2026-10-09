import type { Metadata } from "next";

import { ContentList } from "@/components/content-list";
import { ArrowUpRightIcon } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contentChannel, contents } from "@/content/contents";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Artigos, vídeos e publicações de Pedro Luka sobre desenvolvimento de software e cloud.",
};

export default function ContentsPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <PageTransition><main id="conteudo">
        <PageIntro icon="article" title="Artigos e vídeos" description="Artigos, vídeos e publicações sobre tecnologia, projetos e estudos em andamento." note="Curadoria manual" />
        <section className="channel-hero page-grid" aria-labelledby="channel-title">
          <div className="channel-hero__handle"><p>{contentChannel.handle}</p><span>YouTube</span></div>
          <div className="channel-hero__content"><h2 id="channel-title">Vídeos sobre tecnologia, projetos e estudos.</h2><p>{contentChannel.description}</p><a className="primary-link" href={contentChannel.url} target="_blank" rel="noopener noreferrer">Visitar o canal <ArrowUpRightIcon /></a></div>
        </section>
        <section className="content-section page-grid" aria-labelledby="published-title">
          <div className="section-rail"><h2 className="standalone-section-title" id="published-title">Publicados</h2></div>
          <div className="section-body">
            {contents.length > 0 ? <ContentList entries={contents} /> : <div className="empty-note"><p>O canal é o primeiro espaço desta área. Artigos, vídeos selecionados e publicações externas aparecerão aqui conforme forem publicados.</p></div>}
          </div>
        </section>
      </main></PageTransition>
      <SiteFooter />
    </>
  );
}
