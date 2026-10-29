import { projetos } from "@/data/projetos";
import Secao from "./Secao";

export default function Projetos() {
  return (
    <Secao id="projetos" numero="04" titulo="Projetos">
      <ul className="grid gap-5 sm:grid-cols-2">
        {projetos.map((p) => (
          <li key={p.nome}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-projeto group flex h-full flex-col rounded-2xl border border-line bg-elev p-6 hover:border-accent"
            >
              <span className="eyebrow">{p.linguagem}</span>
              <span className="mt-2 flex items-start justify-between gap-3 font-mono text-lg font-medium break-all">
                {p.nome}
                <span aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </span>
              <span className="mt-3 flex-1 text-muted">{p.descricao}</span>
              <span className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-bg px-2.5 py-0.5 font-mono text-xs text-muted">
                    {t}
                  </span>
                ))}
              </span>
              <span className="sr-only">(abre o repositório no GitHub em nova aba)</span>
            </a>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
