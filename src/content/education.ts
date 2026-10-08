import type { Education } from "@/content/types";

export const education: readonly Education[] = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Fatec São Sebastião",
    level: "Graduação tecnológica",
    status: "Em andamento",
    period: "Fev 2026 — dez 2028 (previsão)",
    description:
      "Formação focada em desenvolvimento de software, arquitetura de sistemas e fundamentos da computação, com estudos em engenharia de software, aplicações backend, bancos de dados, APIs REST, programação orientada a objetos, Linux e projetos integradores em equipe.",
  },
  {
    course: "Informática para Internet",
    institution: "Instituto Federal de São Paulo — IFSP",
    level: "Curso técnico",
    status: "Concluído",
    period: "Jul 2024 — dez 2025",
    description:
      "Formação técnica com foco em desenvolvimento de software, aplicações web e fundamentos de programação, com projetos em React, Next.js, React Native, Node.js, Express e MySQL, além de testes com Jest, Docker, Linux e metodologias ágeis.",
  },
];
