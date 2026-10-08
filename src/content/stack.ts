import type { StackGroup } from "@/content/types";

export const featuredStack = ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ", "Docker", "AWS"] as const;

export const stack: readonly StackGroup[] = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Go"],
  },
  {
    title: "Banco de Dados",
    items: ["PostgreSQL", "MongoDB", "MySQL", "JPA", "Hibernate"],
  },
  {
    title: "APIs e segurança",
    items: ["APIs REST", "OpenAPI", "Swagger", "Spring Security", "JWT", "OAuth 2.0", "Webhooks"],
  },
  {
    title: "Mensageria",
    items: ["RabbitMQ"],
  },
  {
    title: "Testes",
    items: ["JUnit", "Mockito", "Testcontainers", "TDD"],
  },
  {
    title: "Cloud",
    items: ["AWS"],
  },
  {
    title: "Infraestrutura e entrega",
    items: ["Docker", "GitHub Actions", "CI/CD", "Linux", "Windows Server"],
  },
  {
    title: "IA aplicada",
    items: ["Claude Code", "Codex", "Integrações com IA"],
  },
  {
    title: "Frontend",
    items: ["TypeScript", "React", "Next.js", "React Native"],
  },
];
