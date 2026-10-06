import type { StackGroup } from "@/content/types";

export const featuredStack = ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ", "Docker", "AWS"] as const;

export const stack: readonly StackGroup[] = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Express"],
  },
  {
    title: "Dados",
    items: ["PostgreSQL", "MongoDB", "MySQL", "JPA", "Hibernate"],
  },
  {
    title: "Segurança e integrações",
    items: ["Spring Security", "JWT", "OAuth 2.0", "RabbitMQ", "APIs REST", "Webhooks"],
  },
  {
    title: "Testes",
    items: ["JUnit", "Mockito", "Testcontainers", "Jest"],
  },
  {
    title: "Infraestrutura e entrega",
    items: ["Docker", "GitHub Actions", "AWS", "Linux"],
  },
  {
    title: "Frontend",
    items: ["TypeScript", "React", "Next.js", "React Native"],
  },
];

export const currentStudies = ["Go", "Integrações com inteligência artificial"] as const;
