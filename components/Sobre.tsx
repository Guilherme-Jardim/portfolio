import { perfil } from "@/data/perfil";
import Secao from "./Secao";

export default function Sobre() {
  return (
    <Secao id="sobre" numero="01" titulo="Sobre">
      <p className="max-w-2xl text-2xl leading-snug font-medium tracking-tight">{perfil.resumo}</p>
      <div className="mt-8 max-w-2xl space-y-4 text-muted">
        {perfil.sobre.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mt-8 font-mono text-sm">
        <span className="text-muted">Idiomas:</span> {perfil.idiomas.join(" · ")}
      </p>
    </Secao>
  );
}
