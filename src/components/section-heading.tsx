type SectionHeadingProps = {
  id: string;
  marker: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, marker, title, description }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span className="section-heading__marker" aria-hidden="true">
        {marker}
      </span>
      <div>
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
