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
          "Atuação no desenvolvimento de softwares internos para substituir soluções de terceiros, com foco em reduzir custos operacionais e melhorar processos de negócio.",
        responsibilities: [
          "Desenvolvimento do Ideal Admissão, solução interna criada para substituir uma ferramenta terceirizada com custo aproximado de R$ 100 mil por ano.",
          "Desenvolvimento com Java e Spring Boot, incluindo arquitetura de microsserviços, mensageria com RabbitMQ e conteinerização com Docker.",
          "Autenticação e autorização com Spring Security, JWT e OAuth 2.0.",
          "Integração com APIs externas, webhooks e serviços de inteligência artificial.",
          "Pipelines de CI/CD com GitHub Actions e persistência de dados com PostgreSQL e MongoDB.",
          "Testes automatizados com JUnit, Mockito e Testcontainers, com uso de Claude Code como apoio ao fluxo de desenvolvimento.",
        ],
        focus: ["Java e Spring Boot", "Microsserviços e integrações", "Testes e CI/CD"],
        projectHref: "/projetos/ideal-admissao",
        projectLabel: "Ideal Admissão",
      },
      {
        title: "Aprendiz de Suporte e Infraestrutura de TI",
        period: "Dez 2025 — jun 2026",
        description:
          "Atuação em infraestrutura de TI corporativa, com foco em administração de sistemas, redes e suporte técnico interno.",
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
