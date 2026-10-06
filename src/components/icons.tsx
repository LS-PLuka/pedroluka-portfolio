export function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" width="18" height="18" fill="none">
      <g>
        <path d="M3 9h11M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none">
      <g>
        <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export type SectionIconName =
  | "article"
  | "badge"
  | "briefcase"
  | "code"
  | "compass"
  | "folder"
  | "graduation-cap"
  | "mail"
  | "person"
  | "quote"
  | "users";

const sectionIconPaths: Record<SectionIconName, React.ReactNode> = {
  article: <><path d="M5 3.5h6l3 3V16.5H5z" /><path d="M11 3.5v3h3M7.5 10h4M7.5 13h4" /></>,
  badge: <><path d="M10 2.75 12 4l2.35.2.2 2.35 1.25 2L14.55 10 14 12.25 11.65 12 10 13.25 8.35 12 6 12.25 5.45 10 3.2 8.55l1.25-2 .2-2.35L7 4z" /><path d="m7.5 12-.75 5L10 15.5l3.25 1.5-.75-5" /></>,
  briefcase: <><rect x="3" y="6" width="14" height="10" rx="1.5" /><path d="M7 6V4.5h6V6M3 10.5h14M8.5 10.5v1h3v-1" /></>,
  code: <><path d="m7.5 5-4 5 4 5M12.5 5l4 5-4 5M11 3.5 9 16.5" /></>,
  compass: <><circle cx="10" cy="10" r="7" /><path d="m12.5 7.5-1.4 3.6-3.6 1.4 1.4-3.6z" /></>,
  folder: <path d="M2.75 5.5h5l1.5 1.75h8v8.5H2.75z" />,
  "graduation-cap": <><path d="m2.5 7.5 7.5-4 7.5 4-7.5 4z" /><path d="M5.5 9v4c2.5 2 6.5 2 9 0V9M17.5 7.5v5" /></>,
  mail: <><rect x="2.75" y="4.5" width="14.5" height="11" rx="1.5" /><path d="m3.5 6 6.5 5 6.5-5" /></>,
  person: <><circle cx="10" cy="6.25" r="3" /><path d="M4 17c.5-3.5 2.5-5.25 6-5.25S15.5 13.5 16 17" /></>,
  quote: <><path d="M4 7.5h4v4H5.5c0 1.5-.5 2.5-1.5 3M12 7.5h4v4h-2.5c0 1.5-.5 2.5-1.5 3" /></>,
  users: <><circle cx="7.5" cy="7" r="2.5" /><path d="M2.5 16c.4-3 2-4.5 5-4.5s4.6 1.5 5 4M12.5 5.25a2.5 2.5 0 0 1 0 4.75M13.5 11.75c2.25.25 3.5 1.65 3.75 4.25" /></>,
};

export function SectionIcon({ name }: { name: SectionIconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        {sectionIconPaths[name]}
      </g>
    </svg>
  );
}

export function SocialIcon({ name }: { name: "github" | "linkedin" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none">
      {name === "github" ? (
        <path
          d="M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.45v-1.78c-2.58.56-3.12-1.1-3.12-1.1-.42-1.07-1.03-1.35-1.03-1.35-.84-.58.06-.57.06-.57.94.07 1.43.96 1.43.96.83 1.42 2.18 1.01 2.71.77.08-.6.33-1.01.59-1.25-2.06-.23-4.22-1.03-4.22-4.57 0-1.01.36-1.84.96-2.49-.1-.23-.42-1.18.09-2.45 0 0 .78-.25 2.54.95A8.86 8.86 0 0 1 12 7.16a8.8 8.8 0 0 1 2.32.31c1.76-1.2 2.54-.95 2.54-.95.51 1.27.19 2.22.09 2.45.6.65.96 1.48.96 2.49 0 3.55-2.17 4.33-4.23 4.56.34.29.63.85.63 1.72v2.59c0 .25.17.53.64.44A9.25 9.25 0 0 0 12 2.75Z"
          fill="currentColor"
        />
      ) : (
        <g fill="currentColor">
          <path d="M5.25 8.5h3v10h-3zM6.75 4.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10.25 8.5h2.88v1.37h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.6v5.6h-3v-4.96c0-1.19-.02-2.71-1.65-2.71-1.66 0-1.91 1.29-1.91 2.62v5.05h-3z" />
        </g>
      )}
    </svg>
  );
}
