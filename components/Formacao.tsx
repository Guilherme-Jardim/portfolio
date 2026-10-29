import { formacao } from "@/data/perfil";
import Secao from "./Secao";

export default function Formacao() {
  return (
    <Secao id="formacao" numero="05" titulo="Formação">
      <ul className="divide-y divide-line border-y border-line">
        {formacao.graduacao.map((g) => (
          <li key={g.instituicao} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
            <span>
              <span className="font-semibold">{g.curso}</span> <span className="text-muted">· {g.instituicao}</span>
            </span>
            <span className="font-mono text-sm text-muted">{g.periodo}</span>
          </li>
        ))}
      </ul>
      <h3 className="eyebrow mt-10">Cursos</h3>
      <ul className="mt-3 space-y-2">
        {formacao.cursos.map((c) => (
          <li key={c.nome}>
            <span className="font-semibold">{c.nome}</span> <span className="text-muted">· {c.detalhe}</span>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
