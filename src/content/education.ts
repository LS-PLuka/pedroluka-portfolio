import type { Education } from "@/content/types";

export const education: readonly Education[] = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Fatec São Sebastião",
    level: "Graduação tecnológica",
    status: "Em andamento",
    period: "Fev 2026 — dez 2028 (previsão)",
    description:
      "Graduação voltada ao desenvolvimento de software e aos fundamentos da computação, com estudos em programação, engenharia de software, bancos de dados e sistemas.",
  },
  {
    course: "Informática para Internet",
    institution: "Instituto Federal de São Paulo — IFSP",
    level: "Curso técnico",
    status: "Concluído",
    period: "Jul 2024 — dez 2025",
    description:
      "Formação técnica em desenvolvimento web, com projetos utilizando React, Next.js, React Native, Node.js, Express e MySQL, além de testes com Jest, Docker e ambientes Linux.",
  },
];
