import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import ThemeToggle from "@/components/ThemeToggle";
import { projetos } from "@/data/projetos";
import { basePath, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projetos.map((p) => ({ nome: p.nome }));
}

type Props = { params: Promise<{ nome: string }> };

function achar(nome: string) {
  return projetos.find((p) => p.nome === nome);
}

// Lê largura e altura do PNG (cabeçalho IHDR) para reservar o espaço da imagem.
function dimensoes(nome: string, arquivo: string) {
  const buf = readFileSync(join(process.cwd(), "public", "projetos", nome, arquivo));
  return { largura: buf.readUInt32BE(16), altura: buf.readUInt32BE(20) };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nome } = await params;
  const p = achar(nome);
  if (!p) return {};
  return {
    title: p.nome,
    description: p.descricao,
    alternates: { canonical: `/projetos/${p.nome}/` },
    openGraph: { url: `${siteUrl}/projetos/${p.nome}/`, title: p.nome, description: p.descricao },
  };
}

export default async function ProjetoPagina({ params }: Props) {
  const { nome } = await params;
  const p = achar(nome);
  if (!p) notFound();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Ir para o conteúdo
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link href="/" className="font-mono text-sm font-medium tracking-tight">
            gj<span className="text-accent">/</span>dev
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <main id="conteudo" className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <Link href="/#projetos" className="link-sublinhado inline-block py-1 font-mono text-sm">
          ← Voltar aos projetos
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_18rem]">
          <article className="min-w-0">
            <p className="eyebrow">{p.linguagem}</p>
            <h1 className="mt-2 font-mono text-3xl font-medium break-words md:text-4xl">{p.nome}</h1>
            <p className="mt-5 max-w-3xl text-lg text-muted">{p.descricao}</p>

            <section aria-labelledby="funcionalidades" className="mt-12">
              <h2 id="funcionalidades" className="text-2xl font-bold tracking-tight">
                Funcionalidades
              </h2>
              <ul className="mt-4 space-y-3">
                {p.funcionalidades.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true" className="mt-0.5 text-accent">
                      ▸
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="tecnologias" className="mt-12">
              <h2 id="tecnologias" className="text-2xl font-bold tracking-tight">
                Tecnologias
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tecnologias.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-elev px-3 py-1 font-mono text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="telas" className="mt-12">
              <h2 id="telas" className="text-2xl font-bold tracking-tight">
                Telas
              </h2>
              <div className="mt-4 space-y-8">
                {p.telas.map((t, i) => {
                  const { largura, altura } = dimensoes(p.nome, t.arquivo);
                  return (
                    <figure key={t.arquivo}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${basePath}/projetos/${p.nome}/${t.arquivo}`}
                        alt={`${p.nome}, tela ${i + 1}: ${t.legenda}`}
                        width={largura}
                        height={altura}
                        loading="lazy"
                        className="h-auto w-full rounded-xl border border-line"
                      />
                      <figcaption className="mt-2 text-sm text-muted">{t.legenda}</figcaption>
                    </figure>
                  );
                })}
              </div>
            </section>
          </article>

          <aside aria-label="Repositório" className="lg:sticky lg:top-24 lg:self-start">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-5 text-center text-lg font-bold text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              Ver no GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only">(abre o repositório em nova aba)</span>
            </a>
            <p className="mt-3 text-sm text-muted">Código-fonte, README e histórico de commits.</p>
          </aside>
        </div>
      </main>
    </>
  );
}
