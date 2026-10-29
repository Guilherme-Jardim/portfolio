import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const siteUrl = "https://guilherme-jardim.github.io/portfolio";
const descricao =
  "Portfólio de Guilherme Jardim, desenvolvedor Delphi, integrações e full-stack em Caxias do Sul, RS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl + "/"),
  title: {
    default: "Guilherme Jardim | Desenvolvedor Delphi e full-stack",
    template: "%s | Guilherme Jardim",
  },
  description: descricao,
  authors: [{ name: "Guilherme Jardim", url: "https://github.com/Guilherme-Jardim" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl + "/",
    siteName: "Guilherme Jardim",
    title: "Guilherme Jardim | Desenvolvedor Delphi e full-stack",
    description: descricao,
    images: [{ url: "og.png", width: 1200, height: 630, alt: "Guilherme Jardim, desenvolvedor" }],
  },
  twitter: { card: "summary_large_image", images: ["og.png"] },
  icons: { icon: "icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1013" },
  ],
};

// Aplica o tema salvo antes da pintura, evitando piscar.
const temaInicial = `try{var t=localStorage.getItem('tema');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
