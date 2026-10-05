type PageIntroProps = {
  marker: string;
  title: string;
  description: string;
  note?: string;
};

export function PageIntro({ marker, title, description, note }: PageIntroProps) {
  return (
    <header className="page-intro page-grid">
      <div className="page-intro__rail">
        <span aria-hidden="true">{marker}</span>
        {note ? <p>{note}</p> : null}
      </div>
      <div className="page-intro__content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
