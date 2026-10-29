import { describe, expect, it } from "vitest";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { experiencias, perfil } from "../data/perfil";
import { projetos } from "../data/projetos";

describe("dados do portfólio", () => {
  it("lista os dez repositórios esperados com URL do GitHub", () => {
    expect(projetos.map((p) => p.nome).sort()).toEqual(
      [
        "API-SOLID",
        "CLEAN-DDD",
        "NEST-CLEAN",
        "agente-triagem-local",
        "api-monitoramento-equipamentos",
        "delphi-pix-boleto-cep",
        "delphi-utilitarios-br",
        "dev-toolbox",
        "llm-client-ts",
        "mcp-ferramentas-dev",
      ].sort(),
    );
    for (const p of projetos) {
      expect(p.url).toBe(`https://github.com/Guilherme-Jardim/${p.nome}`);
      expect(p.descricao.length).toBeGreaterThan(20);
    }
  });

  it("cada projeto tem funcionalidades, tecnologias e telas com arquivo existente", () => {
    for (const p of projetos) {
      expect(p.funcionalidades.length, p.nome).toBeGreaterThanOrEqual(4);
      expect(p.funcionalidades.length, p.nome).toBeLessThanOrEqual(8);
      expect(p.tecnologias.length, p.nome).toBeGreaterThan(0);
      expect(p.telas.length, p.nome).toBeGreaterThanOrEqual(1);
      for (const t of p.telas) {
        const f = join(__dirname, "..", "public", "projetos", p.nome, t.arquivo);
        expect(existsSync(f), f).toBe(true);
        expect(statSync(f).size, f).toBeLessThan(300 * 1024);
        expect(t.legenda.length, f).toBeGreaterThan(10);
      }
    }
  });

  it("tem as três empresas da experiência", () => {
    expect(experiencias.map((e) => e.empresa)).toEqual(["Metah Equipamentos", "Windel Sistemas", "Wopus"]);
  });

  it("contato só tem LinkedIn e GitHub", () => {
    expect(Object.keys(perfil.links).sort()).toEqual(["github", "linkedin"]);
  });
});

describe("privacidade", () => {
  const raiz = join(__dirname, "..");
  const ignorar = new Set(["node_modules", ".next", "out", ".git", "package-lock.json"]);
  function arquivos(dir: string): string[] {
    return readdirSync(dir).flatMap((n) => {
      if (ignorar.has(n)) return [];
      const c = join(dir, n);
      return statSync(c).isDirectory() ? arquivos(c) : [c];
    });
  }

  it("nenhum arquivo de texto contém e-mail ou telefone", () => {
    const email = /[\w.+-]+@(?!users\.noreply\.github\.com)[\w-]+\.[a-z]{2,}/i;
    const fone = /\(?\d{2}\)?\s?9?\s?\d{4}-\d{4}/;
    for (const f of arquivos(raiz)) {
      if (/\.(png|pdf|ico|woff2?)$/.test(f) || f.endsWith("dados.test.ts")) continue;
      const txt = readFileSync(f, "utf8");
      expect(txt, f).not.toMatch(email);
      expect(txt, f).not.toMatch(fone);
    }
  });
});
