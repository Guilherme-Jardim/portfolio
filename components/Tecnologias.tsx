import { tecnologias } from "@/data/perfil";
import Secao from "./Secao";

export default function Tecnologias() {
  return (
    <Secao id="tecnologias" numero="03" titulo="Tecnologias">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {tecnologias.map((g) => (
          <div key={g.grupo} className="bg-bg p-6">
            <h3 className="eyebrow">{g.grupo}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.itens.map((i) => (
                <li key={i} className="rounded-full border border-line px-3 py-1 text-sm font-medium">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Secao>
  );
}
