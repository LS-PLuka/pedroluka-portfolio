import type { NavigationItem } from "@/content/types";

export const navigation = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Contato", href: "/#contato" },
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
