export type Projeto = {
  nome: string;
  descricao: string;
  linguagem: string;
  tags: string[];
  url: string;
  funcionalidades: string[];
  tecnologias: string[];
  telas: { arquivo: string; legenda: string }[];
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
    funcionalidades: [
      "Política determinística que sempre pode bloquear: destrutivo, produção, banco, segredos e injeção; quando bloqueia, o triador nem é consultado.",
      "Triador por regras (local, sem rede) ou por modelo local via HTTP, que só aceita 127.0.0.1.",
      "A triagem só pode restringir: risco acima do limiar, falha, timeout ou resposta inválida levam à aprovação humana.",
      "Conteúdo externo (web, e-mail, arquivos) é marcado e delimitado como não confiável.",
      "Aprovação humana pelo terminal, com versão simulada para testes.",
      "Trilha de auditoria em JSONL com redação de segredos.",
      "Servidor falso que imita o modelo local, para demo e testes sem dependências externas.",
    ],
    tecnologias: ["TypeScript", "Node.js 20+", "Vitest", "ESLint"],
    telas: [
      { arquivo: "demo.png", legenda: "Saída real de npm run demo: dez ações propostas, com a decisão e o motivo de cada uma (executada, bloqueada ou negada pelo humano)." },
      { arquivo: "testes.png", legenda: "Saída real de vitest run: 2 arquivos e 105 testes passando." },
    ],
  },
  {
    nome: "mcp-ferramentas-dev",
    descricao:
      "Servidor MCP em TypeScript com ferramentas brasileiras: CPF/CNPJ, Pix (BR Code), linha digitável de boleto e parcelas, com testes de integração.",
    linguagem: "TypeScript",
    tags: ["MCP", "Pix", "Zod"],
    url: `${base}/mcp-ferramentas-dev`,
    funcionalidades: [
      "Servidor MCP pelo transporte stdio, pronto para registrar em clientes MCP.",
      "validar_documento: valida CPF e CNPJ pelos dígitos verificadores e devolve o número formatado.",
      "gerar_pix e validar_pix: BR Code estático com CRC16 e conferência de campos e CRC.",
      "validar_boleto: confere a linha digitável de 47 (bancário) ou 48 dígitos (arrecadação).",
      "calcular_parcelas: tabela Price com juros compostos e totais; faixas salariais configuráveis por arquivo JSON.",
      "Entrada validada com Zod, saída com structuredContent e erros de execução com isError.",
    ],
    tecnologias: ["TypeScript", "Model Context Protocol", "Zod", "Node.js", "Vitest"],
    telas: [
      { arquivo: "chamadas.png", legenda: "Saída real do servidor: mensagens JSON-RPC enviadas por stdin (initialize, tools/list e duas chamadas de ferramenta). Linhas longas cortadas na imagem." },
      { arquivo: "testes.png", legenda: "Saída real de vitest run: 5 arquivos e 83 testes, incluindo integração com o servidor." },
    ],
  },
  {
    nome: "llm-client-ts",
    descricao:
      "Cliente de LLM agnóstico de provedor: tool calling, saída estruturada com Zod, retry com backoff, streaming e orçamento de tokens, testado sem rede.",
    linguagem: "TypeScript",
    tags: ["LLM", "Tool calling", "Zod"],
    url: `${base}/llm-client-ts`,
    funcionalidades: [
      "Interface LlmProvider pequena: troca o adaptador sem mexer na lógica.",
      "Provedor falso e determinístico (MockProvider) para testar e fazer demo sem rede e sem chave.",
      "Tool calling com schema Zod e limite de passos (maxSteps); erro de ferramenta volta ao modelo.",
      "Saída estruturada validada com Zod, com reparo automático em até maxRepairs tentativas.",
      "Timeout por tentativa, cancelamento com AbortController e retry com backoff exponencial e jitter.",
      "Streaming, registro de uso e orçamento de tokens e de custo por execução.",
    ],
    tecnologias: ["TypeScript", "Zod", "tsup", "Vitest", "Node.js 20+"],
    telas: [
      { arquivo: "exemplos.png", legenda: "Saída real dos três exemplos do repositório (basico, ferramentas e estruturado), rodando com o provedor falso." },
      { arquivo: "testes.png", legenda: "Saída real de vitest run: 5 arquivos e 70 testes, sem rede." },
    ],
  },
  {
    nome: "api-monitoramento-equipamentos",
    descricao:
      "API REST em NestJS, Prisma e JWT para cadastro de equipamentos de rede e recebimento de leituras (telemetria) com alertas por limite.",
    linguagem: "TypeScript",
    tags: ["NestJS", "Prisma", "JWT"],
    url: `${base}/api-monitoramento-equipamentos`,
    funcionalidades: [
      "Cadastro de equipamentos de rede (câmeras, controladores de acesso, sensores, switches, gateways) com paginação e filtros.",
      "Recebimento de leituras de telemetria, com consulta por período e agregação por hora.",
      "Alertas gerados quando a leitura passa do limite mínimo ou máximo, com listagem e reconhecimento.",
      "Autenticação JWT com senha em scrypt e papéis ADMIN e OPERADOR.",
      "Validação de entrada com class-validator e documentação Swagger em /docs.",
      "Prisma com SQLite em dev e testes e schema pronto para PostgreSQL; Dockerfile e docker-compose.",
    ],
    tecnologias: ["NestJS", "TypeScript", "Prisma", "JWT", "Swagger", "Jest", "Docker"],
    telas: [
      { arquivo: "testes-unitarios.png", legenda: "Saída real de jest: 9 suítes e 39 testes unitários. Trecho do meio omitido na imagem." },
      { arquivo: "testes-e2e.png", legenda: "Saída real dos testes e2e (supertest): 19 cenários cobrindo autenticação, equipamentos, leituras e alertas." },
    ],
  },
  {
    nome: "delphi-pix-boleto-cep",
    descricao:
      "Pix (BR Code), linha digitável de boleto e consulta de CEP (ViaCEP) em Delphi/Object Pascal, com testes offline.",
    linguagem: "Pascal",
    tags: ["Delphi", "Pix", "Boleto"],
    url: `${base}/delphi-pix-boleto-cep`,
    funcionalidades: [
      "Pix: gera o payload do QR Code estático (BR Code/EMV) com CRC16-CCITT e valida payloads existentes.",
      "Boleto: valida e decodifica a linha digitável de 47 e 48 dígitos (módulos 10 e 11), com vencimento pelo fator e valor.",
      "CEP: consulta por interface ICepProvider, com implementação ViaCEP sobre camada HTTP injetável.",
      "Provider falso de CEP para testes; nenhum teste faz chamada de rede.",
      "Object Pascal puro, sem dependências externas, compatível com Delphi e Free Pascal.",
    ],
    tecnologias: ["Delphi", "Object Pascal", "Free Pascal", "ViaCEP"],
    telas: [
      { arquivo: "testes.png", legenda: "Saída real do compilador Free Pascal 3.2.2 (modo Delphi) e do executável de testes: 79 testes, 0 falhas. Início da listagem omitido na imagem." },
    ],
  },
  {
    nome: "delphi-utilitarios-br",
    descricao:
      "Units Delphi/Object Pascal: validação e formatação de CPF/CNPJ e cálculo de parcelas, com testes.",
    linguagem: "Pascal",
    tags: ["Delphi", "CPF/CNPJ"],
    url: `${base}/delphi-utilitarios-br`,
    funcionalidades: [
      "CpfValido e CnpjValido, com ou sem máscara e rejeitando sequências repetidas.",
      "FormatarCpf, FormatarCnpj e SomenteDigitos.",
      "DividirEmParcelas: o resto dos centavos vai para a primeira parcela, então a soma fecha no valor original.",
      "ParcelaPrice: parcela fixa com juros compostos.",
      "Programa de console com 16 verificações, sem framework de teste.",
    ],
    tecnologias: ["Delphi", "Object Pascal", "Free Pascal", "SysUtils", "Math"],
    telas: [
      { arquivo: "testes.png", legenda: "Saída real do compilador Free Pascal 3.2.2 (modo Delphi) e do programa de testes: 16 de 16 passaram. Ainda não executado no compilador da Embarcadero." },
    ],
  },
  {
    nome: "dev-toolbox",
    descricao:
      "Caixa de ferramentas para devs: guia em português de ferramentas do dia a dia e um receptor de webhooks local (Node + TypeScript).",
    linguagem: "TypeScript",
    tags: ["Node.js", "Webhooks"],
    url: `${base}/dev-toolbox`,
    funcionalidades: [
      "Guia curto, em português, de ferramentas do dia a dia: busca de código, webhooks, HTTP e JSON, ambiente e utilidades.",
      "webhook-inspector: recebe qualquer método em /h/:id e guarda método, headers, query, corpo, IP e horário.",
      "Painel que atualiza ao vivo por SSE.",
      "Copia a requisição como curl e encaminha para outra URL.",
      "Limita o tamanho do corpo e a quantidade guardada por endpoint.",
      "Fastify com SQLite e Dockerfile.",
    ],
    tecnologias: ["Node.js", "TypeScript", "Fastify", "SQLite", "SSE", "Vitest", "Docker"],
    telas: [
      { arquivo: "webhook.png", legenda: "Saída real: o servidor rodando, um endpoint criado, um webhook enviado com curl e a requisição guardada. Linhas longas quebradas na imagem." },
      { arquivo: "testes.png", legenda: "Saída real de vitest run: 2 arquivos e 42 testes." },
    ],
  },
  {
    nome: "CLEAN-DDD",
    descricao:
      "Estudo de DDD e Clean Architecture em TypeScript: fórum com agregados, eventos de domínio e testes com Vitest.",
    linguagem: "TypeScript",
    tags: ["DDD", "Clean Architecture", "Vitest"],
    url: `${base}/CLEAN-DDD`,
    funcionalidades: [
      "Fórum de perguntas e respostas modelado só no domínio, sem framework nem banco.",
      "Base compartilhada: Entity, AggregateRoot, WatchedList, Either, eventos de domínio e erros.",
      "Casos de uso de perguntas, respostas, comentários e anexos, incluindo escolher a melhor resposta.",
      "Value object Slug.",
      "Subdomínio de notificações com subscribers que reagem aos eventos do fórum.",
      "Repositórios em memória e factories para os testes.",
    ],
    tecnologias: ["TypeScript", "DDD", "Clean Architecture", "Vitest", "Faker"],
    telas: [
      { arquivo: "testes.png", legenda: "Saída real de vitest run em modo detalhado: 27 arquivos e 45 testes passando. Trecho do meio omitido na imagem." },
    ],
  },
  {
    nome: "API-SOLID",
    descricao: "API estilo Gympass em Node, Fastify e Prisma com SOLID, JWT e testes unitários e e2e.",
    linguagem: "TypeScript",
    tags: ["Fastify", "Prisma", "SOLID"],
    url: `${base}/API-SOLID`,
    funcionalidades: [
      "Cadastro e autenticação de usuários, com e-mail único.",
      "Perfil do usuário logado, número de check-ins e histórico.",
      "Check-in em academia, bloqueado se estiver a mais de 100 m ou já houver check-in no dia.",
      "Validação de check-in em até 20 minutos após criado.",
      "Cadastro de academias, busca por nome e busca de academias próximas (até 10 km).",
      "JWT com refresh token; repositórios em memória e com Prisma.",
    ],
    tecnologias: ["Node.js", "Fastify", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
    telas: [
      { arquivo: "testes.png", legenda: "Saída real de vitest run nos casos de uso (testes unitários, sem banco): 10 arquivos e 22 testes. Os testes e2e exigem o Postgres do docker compose e não foram executados." },
    ],
  },
  {
    nome: "NEST-CLEAN",
    descricao: "API de fórum em NestJS com Prisma, PostgreSQL, JWT e validação com Zod.",
    linguagem: "TypeScript",
    tags: ["NestJS", "PostgreSQL", "Zod"],
    url: `${base}/NEST-CLEAN`,
    funcionalidades: [
      "Criar conta e autenticar.",
      "Criar pergunta e listar perguntas recentes.",
      "Autenticação JWT com chaves RSA (RS256).",
      "Validação de entrada com Zod, em pipe próprio.",
      "Validação das variáveis de ambiente na inicialização (src/env.ts).",
      "Prisma como ORM sobre PostgreSQL.",
    ],
    tecnologias: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Zod", "JWT"],
    telas: [
      { arquivo: "env.png", legenda: "Este projeto ainda não tem testes e precisa de PostgreSQL. A imagem é a saída real de node dist/main sem o .env: a validação com Zod recusa a inicialização." },
      { arquivo: "estrutura.png", legenda: "Saída real: nest build concluído sem erros e a estrutura de pastas do código." },
    ],
  },
];
