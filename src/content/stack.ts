import type { StackGroup } from "@/content/types";

export const stack: readonly StackGroup[] = [
  {
    title: "Backend",
    level: "Foco principal",
    items: ["Java", "Spring Boot", "Node.js", "Express"],
  },
  {
    title: "Segurança",
    level: "Foco principal",
    items: ["Spring Security", "JWT", "OAuth 2.0"],
  },
  {
    title: "Dados",
    level: "Foco principal",
    items: ["PostgreSQL", "MongoDB", "MySQL", "JPA", "Hibernate"],
  },
  {
    title: "Mensageria e integrações",
    level: "Foco principal",
    items: ["RabbitMQ", "APIs REST", "Webhooks"],
  },
  {
    title: "Testes",
    level: "Tecnologias complementares",
    items: ["JUnit", "Mockito", "Testcontainers", "Jest"],
  },
  {
    title: "Infraestrutura e entrega",
    level: "Tecnologias complementares",
    items: ["Docker", "GitHub Actions", "AWS", "Linux"],
  },
  {
    title: "Frontend",
    level: "Tecnologias complementares",
    items: ["TypeScript", "React", "Next.js", "React Native"],
  },
  {
    title: "Agora estudando",
    level: "Em aprofundamento",
    items: ["Go", "Integrações com inteligência artificial"],
  },
];
