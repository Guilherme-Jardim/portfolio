export type Projeto = {
  nome: string;
  descricao: string;
  linguagem: string;
  tags: string[];
  url: string;
};

const base = "https://github.com/Guilherme-Jardim";

export const projetos: Projeto[] = [
  {
    nome: "agente-triagem-local",
    descricao:
      "Triagem de risco para agentes de IA: política determinística que bloqueia, triador com modelo local que só pode restringir mais, auditoria e aprovação humana.",
    linguagem: "TypeScript",
    tags: ["Agentes", "Segurança", "Modelo local"],
    url: `${base}/agente-triagem-local`,
  },
  {
    nome: "mcp-ferramentas-dev",
    descricao:
      "Servidor MCP em TypeScript com ferramentas brasileiras: CPF/CNPJ, Pix (BR Code), linha digitável de boleto e parcelas, com testes de integração.",
    linguagem: "TypeScript",
    tags: ["MCP", "Pix", "Zod"],
    url: `${base}/mcp-ferramentas-dev`,
  },
  {
    nome: "llm-client-ts",
    descricao:
      "Cliente de LLM agnóstico de provedor: tool calling, saída estruturada com Zod, retry com backoff, streaming e orçamento de tokens, testado sem rede.",
    linguagem: "TypeScript",
    tags: ["LLM", "Tool calling", "Zod"],
    url: `${base}/llm-client-ts`,
  },
  {
    nome: "api-monitoramento-equipamentos",
    descricao:
      "API REST em NestJS, Prisma e JWT para cadastro de equipamentos de rede e recebimento de leituras (telemetria) com alertas por limite.",
    linguagem: "TypeScript",
    tags: ["NestJS", "Prisma", "JWT"],
    url: `${base}/api-monitoramento-equipamentos`,
  },
  {
    nome: "delphi-pix-boleto-cep",
    descricao:
      "Pix (BR Code), linha digitável de boleto e consulta de CEP (ViaCEP) em Delphi/Object Pascal, com testes offline.",
    linguagem: "Pascal",
    tags: ["Delphi", "Pix", "Boleto"],
    url: `${base}/delphi-pix-boleto-cep`,
  },
  {
    nome: "delphi-utilitarios-br",
    descricao:
      "Units Delphi/Object Pascal: validação e formatação de CPF/CNPJ e cálculo de parcelas, com testes.",
    linguagem: "Pascal",
    tags: ["Delphi", "CPF/CNPJ"],
    url: `${base}/delphi-utilitarios-br`,
  },
  {
    nome: "dev-toolbox",
    descricao:
      "Caixa de ferramentas para devs: guia em português de ferramentas do dia a dia e um receptor de webhooks local (Node + TypeScript).",
    linguagem: "TypeScript",
    tags: ["Node.js", "Webhooks"],
    url: `${base}/dev-toolbox`,
  },
  {
    nome: "CLEAN-DDD",
    descricao:
      "Estudo de DDD e Clean Architecture em TypeScript: fórum com agregados, eventos de domínio e testes com Vitest.",
    linguagem: "TypeScript",
    tags: ["DDD", "Clean Architecture", "Vitest"],
    url: `${base}/CLEAN-DDD`,
  },
  {
    nome: "API-SOLID",
    descricao: "API estilo Gympass em Node, Fastify e Prisma com SOLID, JWT e testes unitários e e2e.",
    linguagem: "TypeScript",
    tags: ["Fastify", "Prisma", "SOLID"],
    url: `${base}/API-SOLID`,
  },
  {
    nome: "NEST-CLEAN",
    descricao: "API de fórum em NestJS com Prisma, PostgreSQL, JWT e validação com Zod.",
    linguagem: "TypeScript",
    tags: ["NestJS", "PostgreSQL", "Zod"],
    url: `${base}/NEST-CLEAN`,
  },
];
