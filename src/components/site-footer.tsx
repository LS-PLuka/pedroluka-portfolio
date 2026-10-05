import Link from "next/link";

import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/">Pedro Luka</Link>
      <nav aria-label="Navegação do rodapé">
        <Link href="/projetos">Projetos</Link>
        <Link href="/sobre">Sobre</Link>
        <a href={`mailto:${profile.email}`}>E-mail</a>
      </nav>
      <p>{profile.location}</p>
    </footer>
  );
}
