import type { NavigationItem } from "@/content/types";

export const navigation = [
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Comunidade", href: "/comunidade" },
] as const satisfies readonly NavigationItem[];

export const profile = {
  name: "Pedro Luka",
  currentRole: "Estagiário de Desenvolvimento de Software na Ideal Grupo.",
  location: "São Sebastião, SP",
  headline: "Engenheiro de software com foco em backend",
  summary:
    "Desenvolvo sistemas internos e integrações com Java e Spring Boot. Também lidero o AWS Student Builder Group na Fatec São Sebastião.",
  homeAbout: [
    "Atualmente, trabalho na Ideal Grupo desenvolvendo softwares internos que substituem ferramentas de terceiros e apoiam processos de negócio.",
    "Sou Técnico em Informática para Internet pelo IFSP, estudante de ADS na Fatec São Sebastião e concluí o AWS re/Start. Também desenvolvo projetos pessoais e estou começando a compartilhar conteúdo de tecnologia.",
  ],
  about: [
    "Atualmente, atuo na Ideal Grupo utilizando principalmente Java e Spring Boot no desenvolvimento de softwares internos que substituem ferramentas de terceiros. Trabalho com integrações entre sistemas, mensageria, Docker e testes automatizados.",
    "Na área de cloud, concluí o AWS re/Start e lidero o AWS Student Builder Group na Fatec São Sebastião, incentivando o aprendizado prático e a colaboração entre estudantes.",
    "Sou Técnico em Informática para Internet pelo IFSP e curso Análise e Desenvolvimento de Sistemas na Fatec São Sebastião. Fora do trabalho, mantenho projetos pessoais e estudos em Go e integrações com inteligência artificial.",
  ],
  email: "dev.pedroluka@gmail.com",
  github: "https://github.com/LS-PLuka",
  linkedin: "https://www.linkedin.com/in/pedroluka-dev/",
  youtube: "https://www.youtube.com/@plkontech",
  awsBuilderCenter: null as `https://${string}` | null,
} as const;
