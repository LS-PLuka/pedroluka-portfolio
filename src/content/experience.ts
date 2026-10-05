import type { Experience } from "@/content/types";

export const experiences: readonly Experience[] = [
  {
    company: "Ideal Grupo",
    location: "São Sebastião, SP",
    mode: "Presencial",
    roles: [
      {
        title: "Estagiário de Desenvolvimento de Software",
        period: "Jun 2026 — atual",
        description:
          "Desenvolvimento de softwares internos para substituir soluções de terceiros e melhorar processos de negócio, utilizando principalmente Java e Spring Boot.",
        responsibilities: [
          "Desenvolvimento do Ideal Admissão, que digitaliza o processo admissional e foi desenvolvido para substituir uma ferramenta terceirizada.",
          "Integrações entre sistemas, APIs externas, webhooks e serviços de inteligência artificial.",
          "Desenvolvimento backend, autenticação, mensageria e persistência de dados.",
          "Testes automatizados e automação de integração e entrega com GitHub Actions.",
        ],
        focus: ["Java e Spring Boot", "Integrações", "Testes e CI/CD"],
        projectHref: "/projetos/ideal-admissao",
        projectLabel: "Ideal Admissão",
      },
      {
        title: "Aprendiz de Suporte e Infraestrutura de TI",
        period: "Dez 2025 — jun 2026",
        description:
          "Suporte ao ambiente corporativo de TI, com administração de acessos, apoio à infraestrutura e atendimento aos usuários internos.",
        responsibilities: [
          "Administração de usuários, grupos e permissões no Active Directory.",
          "Suporte a Windows Server e domínios corporativos.",
          "Gerenciamento de contas de e-mail e acessos internos.",
          "Suporte técnico a usuários e manutenção de recursos de rede.",
        ],
      },
    ],
  },
];
