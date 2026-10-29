export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 text-sm text-muted">
        <p>© {new Date().getFullYear()} Guilherme Jardim · Caxias do Sul, RS</p>
        <p>
          <a href="https://github.com/Guilherme-Jardim/portfolio" className="link-sublinhado">
            Código-fonte (MIT)
          </a>
        </p>
      </div>
    </footer>
  );
}
