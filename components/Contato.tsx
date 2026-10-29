import { perfil } from "@/data/perfil";
import Secao from "./Secao";

const links = [
  ["LinkedIn", perfil.links.linkedin],
  ["GitHub", perfil.links.github],
] as const;

export default function Contato() {
  return (
    <Secao id="contato" numero="06" titulo="Contato">
      <p className="max-w-xl text-2xl leading-snug font-medium tracking-tight">
        Vamos conversar sobre sistemas, integrações ou uma vaga? Me chame por uma das redes.
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {links.map(([nome, url]) => (
          <li key={nome}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              {nome} <span aria-hidden="true">↗</span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
