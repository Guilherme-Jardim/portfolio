import ThemeToggle from "./ThemeToggle";

const itens = [
  ["sobre", "Sobre"],
  ["experiencia", "Experiência"],
  ["tecnologias", "Tecnologias"],
  ["projetos", "Projetos"],
  ["formacao", "Formação"],
  ["contato", "Contato"],
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#topo" className="font-mono text-sm font-medium tracking-tight">
          gj<span className="text-accent">/</span>dev
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-6 text-sm">
            {itens.map(([id, nome]) => (
              <li key={id}>
                <a href={`#${id}`} className="link-sublinhado py-1">
                  {nome}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
      <nav aria-label="Principal (celular)" className="border-t border-line md:hidden">
        <ul className="flex gap-5 overflow-x-auto px-5 py-2 text-sm whitespace-nowrap">
          {itens.map(([id, nome]) => (
            <li key={id}>
              <a href={`#${id}`} className="py-1">
                {nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
