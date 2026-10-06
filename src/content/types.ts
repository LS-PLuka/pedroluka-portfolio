export type NavigationItem = {
  label: string;
  href: `/${string}`;
};

export type MediaAsset = {
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Role = {
  title: string;
  period?: string;
  description: string;
  responsibilities?: readonly string[];
  focus?: readonly string[];
  projectHref?: `/projetos/${string}`;
  projectLabel?: string;
};

export type Experience = {
  company: string;
  location?: string;
  mode?: string;
  roles: readonly Role[];
};

export type Education = {
  course: string;
  institution: string;
  level: string;
  status: "Em andamento" | "Concluído";
  period?: string;
  description?: string;
};

export type Credential = {
  name: string;
  type: "Programa de formação" | "Curso" | "Certificação profissional";
  status: "Concluído" | "Em andamento";
  issuer?: string;
  period?: string;
  description?: string;
  verificationUrl?: `https://${string}`;
};

export type Recommendation = {
  author: string;
  relationship: string;
  period: string;
  excerpt: string;
  profileUrl: `https://${string}`;
};

export type StackGroup = {
  title: string;
  items: readonly string[];
};

export type CommunityActivity = {
  title: string;
  date: string;
  status: "Realizada" | "Planejada";
  description: string;
  images?: readonly MediaAsset[];
  materials?: readonly Material[];
};

export type ContentBase = {
  id: string;
  title: string;
  summary: string;
  date: string;
  type: "Artigo" | "Vídeo" | "Publicação";
  origin: "Site" | "YouTube" | "LinkedIn" | "AWS Builder Center";
  tags: readonly string[];
  image?: MediaAsset;
  featured: boolean;
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: readonly string[] };

export type InternalArticle = ContentBase & {
  type: "Artigo";
  origin: "Site";
  slug: string;
  body: readonly ArticleBlock[];
};

export type ExternalContent = ContentBase & {
  url: `https://${string}`;
};

export type ContentEntry = InternalArticle | ExternalContent;

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
