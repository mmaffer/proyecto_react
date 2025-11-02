import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">404</h1>
        <p className="lead text-muted mb-4">
          Lo sentimos, no encontramos la página que estás buscando.
        </p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
