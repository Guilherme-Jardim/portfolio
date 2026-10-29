import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Experiencia from "@/components/Experiencia";
import Tecnologias from "@/components/Tecnologias";
import Projetos from "@/components/Projetos";
import Formacao from "@/components/Formacao";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { perfil } from "@/data/perfil";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: perfil.nome,
  jobTitle: perfil.titulo,
  address: { "@type": "PostalAddress", addressLocality: "Caxias do Sul", addressRegion: "RS", addressCountry: "BR" },
  sameAs: [perfil.links.linkedin, perfil.links.github],
};

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Experiencia />
        <Tecnologias />
        <Projetos />
        <Formacao />
        <Contato />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
