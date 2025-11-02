import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../services/entityService.js";
import LoadingSpinner from "../common/LoadingSpinner.jsx";
import ErrorAlert from "../common/ErrorAlert.jsx";

function PopularSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchPopular = async () => {
      setLoading(true);
      setError(null);
      try {
        const { items: characters } = await getCharacters({
          page: 1,
          pageSize: 20,
        });
        if (!isMounted) return;
        setItems(characters.slice(0, 6));
      } catch (err) {
        if (!isMounted) return;
        setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPopular();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-5">
        <div className="container">
          <LoadingSpinner message="Cargando personajes destacados..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-5">
        <div className="container">
          <ErrorAlert message={error.message} />
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <h2 className="h3 fw-bold mb-2">Personajes destacados</h2>
            <p className="text-muted mb-0">
              Una selección inicial para que empieces a explorar.
            </p>
          </div>
          <Link to="/lista" className="btn btn-primary">
            Ver listado completo
          </Link>
        </div>
        <div className="row g-4">
          {items.map((character) => (
            <div className="col-12 col-sm-6 col-lg-4" key={character.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={character.image}
                  className="card-img-top"
                  alt={character.name}
                />
                <div className="card-body">
                  <h3 className="h5 card-title">{character.name}</h3>
                  <p className="card-text text-muted mb-1">
                    Estado: <strong>{character.status}</strong>
                  </p>
                  <p className="card-text text-muted mb-1">
                    Especie: <strong>{character.species}</strong>
                  </p>
                  <p className="card-text text-muted mb-0">
                    Origen: <strong>{character.originName}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularSection;
