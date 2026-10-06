import { SectionIcon, type SectionIconName } from "@/components/icons";

type PageIntroProps = {
  icon: SectionIconName;
  title: string;
  description: string | readonly string[];
  note?: string;
};

export function PageIntro({ icon, title, description, note }: PageIntroProps) {
  return (
    <header className="page-intro page-grid">
      <div className="page-intro__rail">
        <span aria-hidden="true"><SectionIcon name={icon} /></span>
        {note ? <p>{note}</p> : null}
      </div>
      <div className="page-intro__content">
        <h1>{title}</h1>
        <div className="page-intro__description">
          {(Array.isArray(description) ? description : [description]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </header>
  );
}
