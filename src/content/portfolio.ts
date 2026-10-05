type NavigationItem = {
  label: string;
  href: `#${string}`;
};

type Project = {
  id: "ideal-admissao" | "antifraud-system";
  title: string;
  context: string;
  period: string;
  summary: string;
  highlights: readonly string[];
  footnote: string;
  href?: `https://${string}`;
};

type TrajectoryItem = {
  meta: string;
  title: string;
  description: string;
};

export const navigation = [
  { label: "Projetos", href: "#projetos" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
] as const satisfies readonly NavigationItem[];

export const profile = {
  name: "Pedro Luka",
  currentRole: "Estagiário de desenvolvimento de software na Ideal Grupo",
  location: "São Sebastião, SP",
  headline: "Backend, integrações e sistemas que sustentam processos reais.",
  summary:
    "Meu foco está em Java, Spring Boot, microsserviços e cloud. Quero entender o problema por inteiro, tomar decisões explicáveis e crescer em Engenharia de Software.",
  github: "https://github.com/LS-PLuka",
} as const;

export const projects = [
  {
    id: "ideal-admissao",
    title: "Ideal Admissão",
    context: "Experiência profissional · Processo admissional",
    period: "Jul — set 2026",
    summary:
      "Sistema fullstack que conduz a admissão desde o preenchimento do candidato até a criação no ERP, geração do kit e assinatura digital.",
    highlights: [
      "Revisão independente por etapa",
      "Continuidade do preenchimento",
      "Integração ordenada com o Protheus",
    ],
    footnote:
      "Projeto privado da Ideal Grupo. A contribuição individual será detalhada após confirmação.",
    href: undefined,
  },
  {
    id: "antifraud-system",
    title: "Antifraud System",
    context: "Projeto público · Arquitetura orientada a eventos",
    period: "Jun — set 2026",
    summary:
      "Três microsserviços colaboram de forma assíncrona para receber transações, aplicar regras cumulativas e persistir as decisões de análise.",
    highlights: [
      "Contratos de eventos explícitos",
      "Análise temporal determinística",
      "Idempotência na auditoria",
    ],
    footnote:
      "Projeto de estudo. A classificação demonstra decisões arquiteturais e não bloqueia operações bancárias reais.",
    href: "https://github.com/LS-PLuka/antifraud-system",
  },
] as const satisfies readonly Project[];

export const trajectory = [
  {
    meta: "Atuação atual",
    title: "Ideal Grupo",
    description:
      "Uma trajetória que começou em infraestrutura e avançou para o desenvolvimento de software, aproximando contexto operacional, regras de negócio e implementação.",
  },
  {
    meta: "Graduação",
    title: "Fatec São Sebastião",
    description:
      "Estudante de Análise e Desenvolvimento de Sistemas e líder do AWS Student Builder Group na instituição.",
  },
  {
    meta: "Formação técnica",
    title: "IFSP",
    description:
      "Formado no curso técnico de Informática para Internet, base da minha entrada no desenvolvimento web.",
  },
] as const satisfies readonly TrajectoryItem[];

export const community = {
  title: "Aprender também é criar espaço para outras pessoas aprenderem.",
  description:
    "Na Fatec, lidero o AWS Student Builder Group. Também concluí o programa AWS re/Start e estou começando a transformar estudos e experiências em conteúdo de tecnologia.",
} as const;
