import { perfil } from "@/data/perfil";
import { pdfPath } from "@/lib/site";

export default function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-28 md:pb-28">
      <p className="eyebrow">{perfil.local}</p>
      <h1
        id="hero-titulo"
        className="mt-5 text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] font-extrabold tracking-[-0.04em]"
      >
        {perfil.nome}
        <span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-xl text-muted md:text-2xl">
        {perfil.titulo}. Sistemas legados que voltam a funcionar, integrações que conversam e aplicações web bem estruturadas.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={pdfPath}
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
        >
          Baixar currículo (PDF)
          <span aria-hidden="true">↓</span>
        </a>
        <a
          href="#projetos"
          className="inline-flex items-center rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          Ver projetos
        </a>
      </div>
      <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-6">
        {[
          ["Delphi", "base principal"],
          ["C# / .NET", "integrações"],
          ["Next.js", "full-stack"],
        ].map(([t, d]) => (
          <div key={t}>
            <dt className="text-lg font-bold">{t}</dt>
            <dd className="text-sm text-muted">{d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
