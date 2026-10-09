import Link from "next/link";

import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import type { CaseStudy } from "@/content/types";

export function ProjectList({ projects }: { projects: readonly CaseStudy[] }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article className="project-preview" key={project.id}>
          <div className="project-preview__meta">
            <p>{project.context}</p>
            <p>{project.period}</p>
          </div>
          <div className="project-preview__main">
            <span className="project-preview__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{project.title}</h3>
            <p className="project-preview__purpose">{project.purpose}</p>
            <p className="project-preview__summary">{project.summary}</p>
            <ul className="project-preview__highlights" aria-label="Destaques do projeto">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="project-preview__links">
              <Link className="primary-link" href={project.href}>
                Conhecer o projeto
                <ArrowRightIcon />
              </Link>
              {project.repositoryUrl ? (
                <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <ArrowUpRightIcon />
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
