import { experiencias } from "@/data/perfil";
import Secao from "./Secao";

export default function Experiencia() {
  return (
    <Secao id="experiencia" numero="02" titulo="Experiência">
      <ol className="relative ml-2 border-l border-line">
        {experiencias.map((e) => (
          <li key={e.empresa} className="relative pb-12 pl-8 last:pb-0">
            <span aria-hidden="true" className="absolute top-2 -left-[7px] h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="eyebrow">{e.periodo}</p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight">{e.empresa}</h3>
            <ul className="mt-3 space-y-1">
              {e.cargos.map((c) => (
                <li key={c.cargo} className="flex flex-wrap gap-x-3">
                  <span className="font-semibold">{c.cargo}</span>
                  <span className="font-mono text-sm text-muted">{c.periodo}</span>
                </li>
              ))}
            </ul>
            {e.destaques.length > 0 && (
              <ul className="mt-4 max-w-2xl space-y-2 text-muted">
                {e.destaques.map((d) => (
                  <li key={d} className="relative pl-5">
                    <span aria-hidden="true" className="absolute left-0 text-accent">
                      →
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Secao>
  );
}
