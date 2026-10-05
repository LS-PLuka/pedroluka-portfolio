import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import type { ContentEntry } from "@/content/types";

export function ContentList({ entries }: { entries: readonly ContentEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <div className="content-list">
      {entries.map((entry) => {
        const isInternal = "slug" in entry;
        const href = isInternal ? `/conteudos/${entry.slug}` : entry.url;

        return (
          <article className="content-card" key={entry.id}>
            {entry.image ? (
              <Image
                src={entry.image.src}
                alt={entry.image.alt}
                width={entry.image.width}
                height={entry.image.height}
                sizes="(max-width: 52rem) 100vw, 33vw"
              />
            ) : null}
            <div className="content-card__meta">
              <span>{entry.type}</span>
              <span>{entry.origin}</span>
              <time>{entry.date}</time>
            </div>
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>
            <ul aria-label="Assuntos">
              {entry.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            {isInternal ? (
              <Link className="text-link" href={href}>
                Ler artigo <ArrowRightIcon />
              </Link>
            ) : (
              <a className="text-link" href={href}>
                Ver na plataforma original <ArrowUpRightIcon />
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}
