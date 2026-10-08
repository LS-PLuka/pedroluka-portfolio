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
  currentContext:
    "Atualmente, sou estagiário de Desenvolvimento de Software na Ideal Grupo.",
  location: "São Sebastião, SP",
  headline: "Engenheiro de software com foco em backend.",
  summary:
    "Atuo com Java e Spring Boot na Ideal Grupo e lidero o AWS Student Builder Group na Fatec São Sebastião.",
  homeAbout: [
    "Na Ideal Grupo, participo do desenvolvimento de softwares internos voltados à substituição de ferramentas de terceiros e à melhoria de processos de negócio.",
    "Sou Técnico em Informática para Internet pelo IFSP, estudante de ADS na Fatec São Sebastião e concluí o AWS re/Start. Também lidero o AWS Student Builder Group da Fatec e mantenho estudos em Go e integrações com inteligência artificial.",
  ],
  about: [
    "Sou engenheiro de software com foco em backend. Atualmente, atuo na Ideal Grupo utilizando principalmente Java e Spring Boot no desenvolvimento de softwares internos criados para substituir ferramentas de terceiros e otimizar processos de negócio.",
    "No dia a dia, trabalho com integrações entre sistemas, arquitetura de microsserviços, mensageria com RabbitMQ, conteinerização com Docker e testes automatizados.",
    "Na área de cloud, concluí o AWS re/Start e lidero o AWS Student Builder Group na Fatec São Sebastião, promovendo aprendizado prático e colaboração entre estudantes.",
    "Sou Técnico em Informática para Internet pelo IFSP e curso Análise e Desenvolvimento de Sistemas na Fatec São Sebastião. Também mantenho projetos pessoais e estudos em Go e integrações com inteligência artificial.",
  ],
  email: "dev.pedroluka@gmail.com",
  github: "https://github.com/LS-PLuka",
  linkedin: "https://www.linkedin.com/in/pedroluka-dev/",
  youtube: "https://www.youtube.com/@plkontech",
  awsBuilderCenter: null as `https://${string}` | null,
} as const;
