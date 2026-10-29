export const perfil = {
  nome: "Guilherme Jardim",
  titulo: "Desenvolvedor Delphi, integrações e full-stack",
  local: "Caxias do Sul, RS",
  resumo:
    "Desenvolvedor com base sólida em Delphi e experiência em integrações com equipamentos, serviços C#/.NET e aplicações web com Next.js, NestJS e Python. Já liderei o setor de desenvolvimento, cuidando de arquitetura, código e estabilização de sistemas legados.",
  sobre: [
    "Comecei no suporte técnico, passei por testes de software e cheguei ao desenvolvimento full-stack em Delphi. Essa trilha me deu uma visão completa de como um sistema é usado, quebra e se conserta.",
    "Hoje trabalho na ponte entre sistemas legados e tecnologias novas: recuperar o que já existe, integrar com equipamentos e serviços externos e estruturar aplicações web com boas práticas como SOLID, Clean Architecture e DDD.",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/guilherme-jardim-482ba0315/",
    github: "https://github.com/Guilherme-Jardim",
  },
  idiomas: ["Português", "Inglês", "Espanhol"],
} as const;

export type Experiencia = {
  empresa: string;
  periodo: string;
  cargos: { cargo: string; periodo: string }[];
  destaques: string[];
};

export const experiencias: Experiencia[] = [
  {
    empresa: "Metah Equipamentos",
    periodo: "05/2025 – 08/2026",
    cargos: [
      {
        cargo: "Gerente de Desenvolvimento de Sistemas / Head de Desenvolvimento",
        periodo: "05/2025 – 08/2026",
      },
    ],
    destaques: [
      "Acessus Desk: recuperação e estabilização de sistema legado em Delphi.",
      "Integrações com equipamentos por rede e DLLs de fabricantes, ligadas a serviços C#/.NET.",
      "Metah CRM: arquitetura inicial com Next.js e NestJS.",
      "Acessus Web: aplicação com Next.js e Python.",
    ],
  },
  {
    empresa: "Windel Sistemas",
    periodo: "12/2022 – 08/2024",
    cargos: [
      { cargo: "Desenvolvedor Full-Stack (Delphi)", periodo: "12/2023 – 08/2024" },
      { cargo: "Testador de Software", periodo: "09/2023 – 12/2023" },
      { cargo: "Suporte Técnico", periodo: "12/2022 – 09/2023" },
    ],
    destaques: [
      "Windel Desk: novas funcionalidades, integrações bancárias e municipais e cashback.",
    ],
  },
  {
    empresa: "Wopus",
    periodo: "2022",
    cargos: [{ cargo: "Estagiário Front-End", periodo: "2022" }],
    destaques: [],
  },
];

export const tecnologias: { grupo: string; itens: string[] }[] = [
  { grupo: "Desktop e legado", itens: ["Delphi", "Object Pascal"] },
  { grupo: "Back-end", itens: ["NestJS", "Node.js", "Python", "C# / .NET (integração)"] },
  { grupo: "Front-end", itens: ["Next.js", "React", "TypeScript", "HTML", "CSS"] },
  { grupo: "Arquitetura", itens: ["SOLID", "Clean Architecture", "DDD"] },
];

export const formacao = {
  graduacao: [
    { curso: "Ciência da Computação", instituicao: "UniAmérica / Descomplica", periodo: "2024 – 2027" },
    { curso: "Ciência da Computação", instituicao: "UCS", periodo: "2022 – 2024" },
  ],
  cursos: [
    { nome: "Rocketseat", detalhe: "Node.js e React; C# e Python em andamento" },
    { nome: "Origamid", detalhe: "Front-end" },
  ],
} as const;
