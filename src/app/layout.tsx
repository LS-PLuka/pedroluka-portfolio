import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

import { MotionObserver } from "@/components/motion-observer";

import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pedro Luka — Desenvolvimento de software",
    template: "%s | Pedro Luka",
  },
  description:
    "Portfólio de Pedro Luka, estagiário de desenvolvimento de software com foco em backend, Java, Spring Boot, integrações, microsserviços e cloud.",
  openGraph: {
    title: "Pedro Luka — Desenvolvimento de software",
    description: "Projetos, trajetória e decisões de engenharia em backend, integrações e cloud.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f6f5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={archivo.variable} data-scroll-behavior="smooth">
      <body><MotionObserver />{children}</body>
    </html>
  );
}
