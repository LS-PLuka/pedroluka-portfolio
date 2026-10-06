import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/page-intro";
import { OptionalImage } from "@/components/optional-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/page-transition";
import { internalArticles } from "@/content/contents";

export const dynamicParams = false;

export function generateStaticParams() {
  return internalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = internalArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.summary };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = internalArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <PageTransition><main id="conteudo">
        <PageIntro icon="article" title={article.title} description={article.summary} note={`${article.date} · ${article.tags.join(", ")}`} />
        {article.image ? <div className="article-cover"><OptionalImage image={article.image} /></div> : null}
        <article className="article-body">
          {article.body.map((block, index) => {
            if (block.type === "heading") return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
            if (block.type === "list") return <ul key={`${block.type}-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            return <p key={`${block.type}-${index}`}>{block.text}</p>;
          })}
        </article>
      </main></PageTransition>
      <SiteFooter />
    </>
  );
}
