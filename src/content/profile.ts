import type { NavigationItem } from "@/content/types";

export const navigation = [
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Comunidade", href: "/comunidade" },
] as const satisfies readonly NavigationItem[];

export const profile = {
  name: "Pedro Luka",
  currentRole: "Estagiário de Desenvolvimento de Software",
  location: "São Sebastião, SP",
  headline: "Desenvolvimento de software com foco em backend.",
  summary:
    "Atuo com Java e Spring Boot no desenvolvimento de sistemas internos e integrações na Ideal Grupo. Também lidero o AWS Student Builder Group na Fatec São Sebastião e compartilho minha jornada de aprendizado em tecnologia.",
  bio:
    "Sou Técnico em Informática para Internet pelo IFSP e estudante de Análise e Desenvolvimento de Sistemas na Fatec São Sebastião. Além do trabalho, desenvolvo projetos pessoais e aprofundo meus conhecimentos em cloud, Go e integrações com inteligência artificial.",
  email: "dev.pedroluka@gmail.com",
  github: "https://github.com/LS-PLuka",
  linkedin: "https://www.linkedin.com/in/pedroluka-dev/",
  youtube: "https://www.youtube.com/@plkontech",
  awsBuilderCenter: null as `https://${string}` | null,
} as const;
