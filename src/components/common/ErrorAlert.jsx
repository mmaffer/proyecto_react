function ErrorAlert({ title = "Ups, algo salió mal", message, onRetry }) {
  return (
    <div className="alert alert-danger d-flex flex-column gap-2" role="alert">
      <div>
        <strong>{title}</strong>
        {message ? <div>{message}</div> : null}
      </div>
      {onRetry ? (
        <button type="button" className="btn btn-outline-light" onClick={onRetry}>
          Reintentar
        </button>
      ) : null}
    </div>
  );
}

export default ErrorAlert;
