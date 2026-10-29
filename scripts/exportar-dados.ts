// Exporta os dados de data/ para JSON, para o gerador de PDF em Python.
import { writeFileSync } from "node:fs";
import { perfil, experiencias, tecnologias, formacao } from "../data/perfil.ts";
import { projetos } from "../data/projetos.ts";

writeFileSync(
  new URL("./cv.json", import.meta.url),
  JSON.stringify({ perfil, experiencias, tecnologias, formacao, projetos }, null, 2),
);
