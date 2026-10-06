import { internalArticles } from "@/content/articles";
import type { ContentEntry, ExternalContent } from "@/content/types";

export { internalArticles } from "@/content/articles";

export const contentChannel = {
  handle: "@plkontech",
  url: "https://www.youtube.com/@plkontech",
  description:
    "Estou começando a publicar vídeos sobre o que aprendo e construo na área de tecnologia.",
} as const;

// Cadastre conteúdo externo real nesta lista. A página e os destaques se adaptam automaticamente.
export const externalContents: readonly ExternalContent[] = [];

export const contents: readonly ContentEntry[] = [
  ...internalArticles,
  ...externalContents,
];

export const featuredContents = contents.filter((item) => item.featured);
