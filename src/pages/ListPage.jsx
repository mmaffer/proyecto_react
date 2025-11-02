import { useEffect, useState } from "react";
import { getCharacters } from "../services/entityService.js";
import LoadingSpinner from "../components/common/LoadingSpinner.jsx";
import ErrorAlert from "../components/common/ErrorAlert.jsx";

function ListPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const { items } = await getCharacters({ page: 1, pageSize: 50 });
        if (!isMounted) return;
        setCharacters(items);
      } catch (err) {
        if (!isMounted) return;
        setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCharacters();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <LoadingSpinner message="Cargando personajes..." />;
  if (error) return <ErrorAlert message={error.message} />;

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="h3 fw-bold mb-4">Todos los personajes</h2>
        <div className="row g-4">
          {characters.map((character) => (
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

export default ListPage;
