export type NavigationItem = {
  label: string;
  href: `/${string}`;
};

export type Role = {
  title: string;
  period?: string;
  description: string;
  projectHref?: `/projetos/${string}`;
  projectLabel?: string;
};

export type Experience = {
  company: string;
  roles: readonly Role[];
};

export type Education = {
  course: string;
  institution: string;
  level: string;
  status: "Em andamento" | "Concluído";
  period?: string;
};

export type Credential = {
  name: string;
  type: "Programa de formação" | "Curso" | "Certificação profissional";
  status: "Concluído" | "Em andamento";
  issuer?: string;
  period?: string;
  verificationUrl?: `https://${string}`;
};

export type TechnologyUse = {
  technology: string;
  use: string;
};

export type Material = {
  label: string;
  href: `https://${string}`;
};

export type CaseStudy = {
  id: "ideal-admissao" | "antifraud-system";
  title: string;
  longTitle: string;
  context: string;
  period: string;
  purpose: string;
  summary: string;
  highlights: readonly string[];
  href: `/projetos/${string}`;
  repositoryUrl?: `https://${string}`;
  problem: readonly string[];
  contribution?: readonly string[];
  flow: readonly { title: string; description: string }[];
  decisions: readonly { title: string; description: string }[];
  technologies: readonly TechnologyUse[];
  verification: readonly string[];
  materials: readonly Material[];
  evidenceNote: string;
};
