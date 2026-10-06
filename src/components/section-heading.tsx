import { SectionIcon, type SectionIconName } from "@/components/icons";

type SectionHeadingProps = {
  id: string;
  icon: SectionIconName;
  title: string;
  description?: string;
};

export function SectionHeading({ id, icon, title, description }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span className="section-heading__marker" aria-hidden="true">
        <SectionIcon name={icon} />
      </span>
      <div>
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
