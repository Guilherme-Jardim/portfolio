# Portfólio — Guilherme Jardim

Portfólio e currículo web de Guilherme Jardim, desenvolvedor Delphi, integrações e full-stack em Caxias do Sul, RS.

Site: https://guilherme-jardim.github.io/portfolio/

## Stack

- Next.js 16 (App Router) com `output: 'export'` (site 100% estático)
- TypeScript estrito
- Tailwind CSS 4
- Vitest para testes
- GitHub Actions + GitHub Pages para build e deploy

Recursos: tema claro/escuro (respeita a preferência do sistema), layout responsivo, link de pular para o conteúdo, foco visível, `prefers-reduced-motion`, metadados, Open Graph, `sitemap.xml`, `robots.txt` e dados estruturados (JSON-LD).

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm test
npm run build      # gera a pasta out/
```

O `basePath` (`/portfolio`) só vale no build de produção; em desenvolvimento o site abre na raiz. Se renomear o repositório, ajuste `repo` em `next.config.ts` e `siteUrl` em `lib/site.ts`.

## Como editar o conteúdo

Todo o conteúdo está em `data/`:

- `data/perfil.ts`: resumo, experiência, tecnologias, formação, idiomas e links
- `data/projetos.ts`: cards da seção de projetos

Depois de editar, regenere o PDF do currículo (precisa de Python com `reportlab` e Node 22.6 ou superior):

```bash
pip install reportlab
npm run cv
```

O PDF fica em `public/curriculo-guilherme-jardim.pdf` e traz só LinkedIn e GitHub como contato. O projeto não contém telefone, e-mail nem endereço; um teste (`tests/dados.test.ts`) confere isso nos arquivos de texto.

## Deploy

Todo push na `main` roda `.github/workflows/deploy.yml`: instala, roda lint, typecheck, testes e build, e publica a pasta `out/` no GitHub Pages.

## O que foi testado

- `npm run lint`, `npm run typecheck` e `npm run build` sem erros
- 4 testes Vitest: lista de projetos e URLs, empresas da experiência, contatos permitidos e ausência de e-mail/telefone nos arquivos
- Conferência do HTML exportado (metadados, Open Graph, caminho do PDF com `basePath`) e da resposta do site publicado

Não foi feita auditoria manual completa de acessibilidade com leitor de tela.

## Licença

MIT. Veja `LICENSE`.
