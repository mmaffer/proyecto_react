import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold mb-3">
              Explora el multiverso de Rick &amp; Morty
            </h1>
            <p className="lead mb-4">
              Descubre personajes, filtra por sus características y guarda tus
              favoritos. Toda la información proviene de la API oficial.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/lista" className="btn btn-primary btn-lg">
                Ver personajes
              </Link>
              <Link to="/contacto" className="btn btn-outline-light btn-lg">
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="Rick Sanchez"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
