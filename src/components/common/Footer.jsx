function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">
          Datos proporcionados por{" "}
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-underline text-light"
          >
            The Rick and Morty API
          </a>
        </p>
        <p className="mb-0 small">
          &copy; {currentYear} Rick &amp; Morty Explorer. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
