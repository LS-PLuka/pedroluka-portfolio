import type { Metadata } from "next";

import { ContentList } from "@/components/content-list";
import { ArrowUpRightIcon } from "@/components/icons";
import { OptionalImage } from "@/components/optional-image";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { communityActivities } from "@/content/community-activities";
import { community } from "@/content/community";
import { contents } from "@/content/contents";
import { siteMedia } from "@/content/media";

export const metadata: Metadata = {
  title: "Comunidade",
  description: "AWS Student Builder Group da Fatec São Sebastião e a atuação de Pedro Luka como líder.",
};

export default function CommunityPage() {
  const communityContents = contents.filter((item) => item.tags.includes("Comunidade"));

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <PageIntro icon="users" title="Comunidade" description="AWS Student Builder Group na Fatec São Sebastião e minha atuação como líder." note={community.period} />

        <section className="content-section page-grid" aria-labelledby="group-title">
          <div className="section-rail"><SectionHeading id="group-title" icon="users" title="O grupo" description={community.institution} /></div>
          <div className={`community-profile${siteMedia.communityLogo ? " community-profile--with-logo" : ""}`}>
            <OptionalImage image={siteMedia.communityLogo} className="community-profile__logo" />
            <div>
              <p className="community-profile__role">{community.role}</p>
              <h3>{community.title}</h3>
              <p>{community.description}</p>
              <ul aria-label="Frentes de atuação">{community.fronts.map((front) => <li key={front}>{front}</li>)}</ul>
              <div className="link-pair">
                <a className="primary-link" href={community.linkedinUrl}>Acompanhar o grupo no LinkedIn <ArrowUpRightIcon /></a>
                <a className="text-link" href={community.credential.url}>{community.credential.label} <ArrowUpRightIcon /></a>
              </div>
              <p className="community-credential-note">A credencial registra a liderança no AWS Student Builder Group. Ela é diferente da conclusão do AWS re/Start e não é uma certificação profissional AWS.</p>
            </div>
          </div>
        </section>

        <section className="content-section page-grid" aria-labelledby="activities-title">
          <div className="section-rail"><SectionHeading id="activities-title" icon="compass" title="Atividades" description="Registros e materiais confirmados do grupo." /></div>
          <div className="section-body">
            {communityActivities.length > 0 ? (
              <div className="activity-list">
                {communityActivities.map((activity) => (
                  <article key={`${activity.date}-${activity.title}`}>
                    <div><span>{activity.status}</span><time>{activity.date}</time></div>
                    <h3>{activity.title}</h3><p>{activity.description}</p>
                    {activity.images ? (
                      <div className="activity-gallery">
                        {activity.images.map((image) => <OptionalImage image={image} key={image.src} />)}
                      </div>
                    ) : null}
                    {activity.materials ? (
                      <ul className="activity-materials" aria-label={`Materiais de ${activity.title}`}>
                        {activity.materials.map((material) => <li key={material.href}><a href={material.href}>{material.label}<ArrowUpRightIcon /></a></li>)}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-note"><p>A página do grupo já está disponível. Atividades e materiais serão adicionados quando houver registros confirmados para publicar.</p></div>
            )}
          </div>
        </section>

        {communityContents.length > 0 ? (
          <section className="content-section page-grid" aria-labelledby="community-content-title">
            <div className="section-rail"><SectionHeading id="community-content-title" icon="article" title="Conteúdos da comunidade" /></div>
            <div className="section-body"><ContentList entries={communityContents} /></div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
