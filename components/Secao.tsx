export default function Secao({
  id,
  numero,
  titulo,
  children,
}: {
  id: string;
  numero: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[14rem_1fr]">
        <div className="reveal">
          <p className="eyebrow">{numero}</p>
          <h2 id={`${id}-titulo`} className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {titulo}
          </h2>
        </div>
        <div className="reveal min-w-0">{children}</div>
      </div>
    </section>
  );
}
