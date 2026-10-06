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
