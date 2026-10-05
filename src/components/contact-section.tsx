import { ArrowUpRightIcon } from "@/components/icons";
import { CopyEmail } from "@/components/copy-email";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section className="contact-section page-grid" id="contato" aria-labelledby="contact-title">
      <div className="contact-section__lead">
        <SectionHeading id="contact-title" marker="@" title="Contato" />
      </div>
      <div className="contact-section__body">
        <p>
          Meu trabalho está no encontro entre regras de negócio, integrações e decisões que
          precisam continuar claras quando o sistema cresce.
        </p>
        <div className="contact-list">
          <div className="contact-row">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <span>E-mail</span>
              <strong>{profile.email}</strong>
              <ArrowUpRightIcon />
            </a>
            <CopyEmail email={profile.email} />
          </div>
          <a className="contact-link" href={profile.github}>
            <span>GitHub</span>
            <strong>@LS-PLuka</strong>
            <ArrowUpRightIcon />
          </a>
          <a className="contact-link" href={profile.linkedin}>
            <span>LinkedIn</span>
            <strong>pedroluka-dev</strong>
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
