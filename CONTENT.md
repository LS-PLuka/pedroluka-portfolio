# Manutenção do conteúdo

O portfólio usa arquivos TypeScript em `src/content/`. Não há CMS ou sincronização automática. Exemplos deste documento não são renderizados no site.

## Adicionar uma foto ou logo

1. Coloque o arquivo otimizado em `public/images/`.
2. Edite `src/content/media.ts` e preencha `portrait` ou `communityLogo` com `src`, `alt`, `width`, `height` e, se necessário, `caption`.
3. Use dimensões reais da imagem. O campo `alt` deve explicar o conteúdo e o contexto, sem começar com “imagem de”.

```ts
portrait: {
  src: "/images/pedro-evento.webp",
  alt: "Pedro durante uma atividade de tecnologia na Fatec São Sebastião",
  width: 1200,
  height: 1500,
  caption: "Nome da atividade, mês e ano.",
}
```

## Cadastrar conteúdo externo

Adicione um item em `externalContents`, no arquivo `src/content/contents.ts`. Use a URL original do LinkedIn, AWS Builder Center ou YouTube. Marque `featured: true` apenas para conteúdos que devem aparecer na inicial.

```ts
{
  id: "identificador-estavel",
  title: "Título real",
  summary: "Por que vale a leitura ou o vídeo.",
  date: "Out 2026",
  type: "Publicação",
  origin: "LinkedIn",
  tags: ["Java", "Backend"],
  featured: true,
  url: "https://...",
}
```

## Publicar artigo interno

Crie um arquivo em `src/content/articles/`, exporte um objeto do tipo `InternalArticle` e registre-o em `src/content/articles/index.ts`. O `slug` cria a URL `/conteudos/slug`. O corpo aceita parágrafos, títulos e listas, mantendo a solução sem dependências adicionais.

```ts
export const artigo: InternalArticle = {
  id: "contratos-de-eventos",
  slug: "contratos-de-eventos",
  title: "Título real",
  summary: "Resumo curto.",
  date: "Out 2026",
  type: "Artigo",
  origin: "Site",
  tags: ["RabbitMQ", "Arquitetura"],
  featured: false,
  body: [
    { type: "paragraph", text: "Abertura do artigo." },
    { type: "heading", text: "Uma decisão importante" },
    { type: "list", items: ["Primeiro ponto", "Segundo ponto"] },
  ],
};
```

## Adicionar vídeo

Cadastre o vídeo em `externalContents` com `type: "Vídeo"`, `origin: "YouTube"` e a URL real. A capa é opcional e usa o mesmo formato de imagem descrito acima. O site mostra um link, sem carregar player automaticamente.

## Registrar atividade da comunidade

Adicione um item em `src/content/community-activities.ts`. Use `status: "Planejada"` para atividades futuras e `status: "Realizada"` somente após a realização. Fotos e materiais são opcionais.

## Atualizar links, stack e credenciais

- Perfil, e-mail e canal: `src/content/profile.ts`.
- Página e descrição do grupo: `src/content/community.ts`.
- Tecnologias e nível de aprofundamento: `src/content/stack.ts`.
- Cursos e credenciais: `src/content/credentials.ts`.
- Bloco “Atualmente”: `src/content/currently.ts`.

Depois de qualquer alteração, execute `npm run lint` e `npm run build`.
