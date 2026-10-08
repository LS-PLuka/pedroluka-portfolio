import type { CaseStudy } from "@/content/types";

export const projects: readonly CaseStudy[] = [
  {
    id: "ideal-admissao",
    title: "Ideal Admissão",
    longTitle: "Ideal Admissão — Digitalização do processo admissional da Ideal Grupo",
    context: "Experiência profissional",
    period: "Jul — set 2026",
    purpose:
      "Conduzir a admissão de colaboradores do preenchimento inicial até a assinatura do kit admissional.",
    summary:
      "Sistema fullstack que reúne preenchimento de dados, revisão do RH, integração com Protheus e assinatura eletrônica em um único fluxo de admissão.",
    highlights: [
      "Revisão independente por etapa",
      "Continuidade do preenchimento",
      "Integração com ERP e assinatura",
    ],
    href: "/projetos/ideal-admissao",
    problem: [
      "O processo admissional reúne dados pessoais, documentos, validações do RH, cadastro no ERP e assinaturas. A solução foi desenvolvida para substituir uma ferramenta terceirizada com custo aproximado de R$ 100 mil por ano e concentrar esse fluxo em um sistema interno.",
      "O sistema organiza essa jornada sem tratar a admissão como um formulário único: cada etapa possui estado próprio e pode voltar para correção sem desfazer o que já foi aprovado.",
    ],
    contribution: [
      "Atuei no desenvolvimento do sistema de ponta a ponta, trabalhando no backend com Java e Spring Boot, no frontend com Next.js e TypeScript e nas integrações com Protheus, Claude Vision e Autentique.",
      "Também trabalhei na investigação de falhas de integração com o sistema legado e em funcionalidades incorporadas durante o desenvolvimento, como acompanhamento de status e download dos documentos em arquivo ZIP.",
    ],
    flow: [
      {
        title: "Entrada consentida",
        description:
          "O candidato aceita o termo LGPD e acessa o portal público por um token UUID com validade.",
      },
      {
        title: "Preenchimento por etapas",
        description:
          "As etapas variam conforme o perfil da admissão, salvam rascunho no navegador e recebem documentos com validação por IA.",
      },
      {
        title: "Revisão do RH",
        description:
          "O painel autenticado por Active Directory aprova ou devolve cada etapa isoladamente para ajuste.",
      },
      {
        title: "Criação no ERP",
        description:
          "Depois da aprovação, os dados seguem para o Protheus por endpoints ADVPL e ExecAuto.",
      },
      {
        title: "Kit e assinatura",
        description:
          "O sistema gera um PDF único, envia ao Autentique, coleta a assinatura do candidato e realiza a contra-assinatura da empresa.",
      },
    ],
    decisions: [
      {
        title: "Etapas com estados independentes",
        description:
          "A revisão acontece na unidade em que o problema surgiu. Uma correção documental não invalida dados e etapas já aprovados.",
      },
      {
        title: "Continuidade sem conta para o candidato",
        description:
          "O token limita o acesso ao processo e o rascunho local permite retomar o preenchimento sem introduzir autenticação tradicional no portal público.",
      },
      {
        title: "Sequência de integrações explícita",
        description:
          "A criação no Protheus antecede a geração do kit, que antecede o envio para assinatura. A ordem protege as dependências entre os documentos e o cadastro corporativo.",
      },
      {
        title: "Monolito organizado por domínio",
        description:
          "A aplicação mantém implantação simples, mas separa o código pelos domínios do processo em vez de concentrar tudo em camadas genéricas.",
      },
    ],
    technologies: [
      { technology: "Java 21 e Spring Boot", use: "Regras do fluxo, APIs e integrações do sistema." },
      { technology: "PostgreSQL", use: "Persistência dos dados e estados do processo admissional." },
      { technology: "Next.js e TypeScript", use: "Painel do RH e portal mobile-first do candidato." },
      { technology: "MinIO", use: "Armazenamento de documentos enviados e kits gerados." },
      { technology: "Claude Vision", use: "Validação assistida dos documentos durante o upload." },
      { technology: "Thymeleaf, openhtmltopdf e PDFBox", use: "Geração e composição do kit em um único PDF." },
      { technology: "Protheus, ADVPL e ExecAuto", use: "Criação do funcionário no ERP após a aprovação." },
      { technology: "Autentique GraphQL", use: "Envio do kit e coordenação das assinaturas." },
    ],
    verification: [
      "O fluxo principal foi concluído e validado da entrada do candidato até a integração com o ERP e o envio do kit para assinatura.",
      "Migrations append-only com Flyway e validação do schema pelo Hibernate.",
      "Repositórios privados e ausência de telas publicáveis limitam a verificação pública à arquitetura e ao fluxo que podem ser divulgados.",
    ],
    materials: [],
    evidenceNote:
      "Estudo construído a partir do detalhamento técnico e do relato fornecido por Pedro. A validação do fluxo principal não equivale a afirmar implantação em produção, métricas ou autoria exclusiva.",
  },
  {
    id: "antifraud-system",
    title: "Antifraud System",
    longTitle: "Antifraud System — Decisões distribuídas com contratos explícitos",
    context: "Projeto de estudo",
    period: "Jun — set 2026",
    purpose:
      "Explorar como serviços independentes podem receber, analisar e registrar decisões de risco sem chamadas HTTP internas.",
    summary:
      "Três microsserviços colaboram por eventos RabbitMQ, com bancos separados, regras cumulativas e uma trilha de auditoria idempotente.",
    highlights: [
      "Contratos de eventos explícitos",
      "Análise temporal determinística",
      "Idempotência na auditoria",
    ],
    href: "/projetos/antifraud-system",
    repositoryUrl: "https://github.com/LS-PLuka/antifraud-system",
    problem: [
      "O projeto investiga como separar a entrada de transações, a análise de regras e o histórico das decisões sem fazer um serviço depender da disponibilidade HTTP ou do banco de outro.",
      "Ele é uma demonstração arquitetural: as classificações representam o resultado das regras implementadas e não bloqueiam uma operação bancária real.",
    ],
    contribution: [
      "Organizei o projeto em um repositório central de orquestração e três repositórios de microsserviços, cada um com responsabilidade e ciclo de build próprios.",
      "Documentei contratos, decisões e consequências nos READMEs e ADRs, além dos caminhos de teste unitário, integração e contrato.",
    ],
    flow: [
      {
        title: "Receber e registrar",
        description:
          "O servico-transacao valida a requisição, persiste a transação como PENDENTE no PostgreSQL e publica o evento.",
      },
      {
        title: "Analisar",
        description:
          "O motor-risco consome o evento, executa cinco regras cumulativas e publica score, classificação e regras disparadas.",
      },
      {
        title: "Auditar",
        description:
          "O servico-auditoria registra o resultado no MongoDB e disponibiliza uma API REST somente leitura.",
      },
    ],
    decisions: [
      {
        title: "O evento carrega o contexto da análise",
        description:
          "Valor, país, data da transação e criação da conta viajam no contrato. O motor não consulta o PostgreSQL do produtor.",
      },
      {
        title: "O tempo vem do evento",
        description:
          "A idade da conta é calculada entre contaCriadaEm e dataHora. Reprocessar o mesmo evento no futuro produz a mesma análise.",
      },
      {
        title: "As regras acumulam sinais",
        description:
          "A Chain of Responsibility sempre percorre as cinco regras. O score atual pode chegar a 155, e a classificação ocorre somente no final.",
      },
      {
        title: "A auditoria trata redelivery",
        description:
          "A existência prévia é verificada por transacaoId e um índice único no MongoDB funciona como garantia final contra duplicidades concorrentes.",
      },
      {
        title: "Dual write assumido nesta versão",
        description:
          "Persistência e publicação acontecem no mesmo método transacional. A documentação reconhece a janela residual e registra Outbox Pattern como evolução adequada.",
      },
    ],
    technologies: [
      { technology: "Java 21 e Spring Boot", use: "Base dos três microsserviços e das fronteiras de responsabilidade." },
      { technology: "RabbitMQ e Spring AMQP", use: "Dois contratos assíncronos entre entrada, análise e auditoria." },
      { technology: "PostgreSQL 16", use: "Usuários e transações estruturadas no servico-transacao." },
      { technology: "MongoDB 7", use: "Documentos autocontidos do histórico no servico-auditoria." },
      { technology: "JUnit, Mockito e Testcontainers", use: "Regras isoladas e integrações reais com broker e bancos." },
      { technology: "Docker Compose", use: "Orquestração local do sistema completo." },
      { technology: "GitHub Actions", use: "Execução de mvn verify nos três microsserviços." },
    ],
    verification: [
      "Os READMEs descrevem testes unitários de regras, segurança, idempotência e limites exatos.",
      "Testes de integração documentados usam Testcontainers com RabbitMQ, PostgreSQL ou MongoDB conforme o serviço.",
      "O repositório central registra o fluxo completo como validado ponta a ponta por Docker Compose e oferece um roteiro manual pelos dois Swagger.",
      "Nesta revisão do portfólio, foram lidos os quatro READMEs e os cinco ADRs; os serviços não foram executados nem o código foi auditado linha a linha.",
    ],
    materials: [
      { label: "Orquestração e ADRs", href: "https://github.com/LS-PLuka/antifraud-system" },
      { label: "Serviço de transação", href: "https://github.com/LS-PLuka/servico-transacao" },
      { label: "Motor de risco", href: "https://github.com/LS-PLuka/motor-risco" },
      { label: "Serviço de auditoria", href: "https://github.com/LS-PLuka/servico-auditoria" },
    ],
    evidenceNote:
      "Conteúdo técnico baseado na documentação pública atual dos quatro repositórios e nos ADRs do projeto central.",
  },
];

export const idealAdmission = projects[0];
export const antifraudSystem = projects[1];
