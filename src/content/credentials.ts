import type { Credential } from "@/content/types";

export const credentials: readonly Credential[] = [
  {
    name: "AWS re/Start",
    type: "Programa de formação",
    status: "Concluído",
    issuer: "AWS / Espro",
    issuerLinks: [
      { label: "AWS re/Start", href: "https://aws.amazon.com/training/restart/" },
      { label: "Espro", href: "https://www.espro.org.br/" },
    ],
    period: "Set 2026",
    description:
      "Programa de formação concluído após 12 semanas de estudos e laboratórios em computação em nuvem, serviços AWS, Linux, redes, bancos de dados e segurança.",
    verificationUrl:
      "https://www.credly.com/badges/19dc3cbf-8b21-4b17-a785-950c99bd978f/linked_in_profile",
  },
  {
    name: "Testes de Integração em Java",
    type: "Curso",
    status: "Concluído",
    issuer: "Alura",
    issuerLinks: [{ label: "Alura", href: "https://www.alura.com.br/" }],
    period: "Set 2026",
    description: "Formação prática em testes de integração para aplicações Java.",
    verificationUrl:
      "https://cursos.alura.com.br/certificate/fefef77e-dbb6-4e60-9ac2-ef645009be64",
  },
  {
    name: "Aprofunde em Java com arquitetura de Microsserviços, Spring e RabbitMQ",
    type: "Curso",
    status: "Concluído",
    issuer: "Alura",
    issuerLinks: [{ label: "Alura", href: "https://www.alura.com.br/" }],
    period: "Jun 2026",
    description:
      "Formação em arquitetura de microsserviços com Java, Spring e comunicação assíncrona com RabbitMQ.",
    verificationUrl:
      "https://cursos.alura.com.br/degree/certificate/9da82be6-03a5-40de-9bd1-89b359935223",
  },
  {
    name: "Java com Spring Security",
    type: "Curso",
    status: "Concluído",
    issuer: "Alura",
    issuerLinks: [{ label: "Alura", href: "https://www.alura.com.br/" }],
    period: "Jun 2026",
    description:
      "Formação em autenticação e autorização de aplicações Java com Spring Security.",
    verificationUrl:
      "https://cursos.alura.com.br/degree/certificate/70cd4b88-6aed-4083-a664-eaf1eec5bbc8",
  },
  {
    name: "IA para Devs: Produtividade no fluxo de desenvolvimento de software",
    type: "Curso",
    status: "Concluído",
    issuer: "Alura",
    issuerLinks: [{ label: "Alura", href: "https://www.alura.com.br/" }],
    period: "Mar 2026",
    description:
      "Formação sobre uso de inteligência artificial como apoio ao fluxo de desenvolvimento de software.",
    verificationUrl:
      "https://cursos.alura.com.br/degree/certificate/3c6d8368-cb69-4997-81e7-608d44e6bfcc",
  },
];
