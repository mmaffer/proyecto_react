import { useMemo, useState } from "react";

const validateField = {
  name: (value) => {
    if (!value || value.trim().length === 0) {
      return "El nombre es requerido.";
    }
    if (value.trim().length < 3) {
      return "El nombre debe tener al menos 3 caracteres.";
    }
    return null;
  },
  email: (value) => {
    if (!value || value.trim().length === 0) {
      return "El correo es requerido.";
    }
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(value.trim())) {
      return "Ingrese un correo electrónico válido.";
    }
    return null;
  },
  subject: (value) => {
    if (!value || value.trim().length === 0) {
      return "El asunto es requerido.";
    }
    return null;
  },
  message: (value) => {
    if (!value || value.trim().length === 0) {
      return "El mensaje es requerido.";
    }
    if (value.trim().length < 10) {
      return "El mensaje debe tener al menos 10 caracteres.";
    }
    return null;
  },
};

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [values, setValues] = useState(defaultValues);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);

  const errors = useMemo(() => {
    return Object.keys(values).reduce((acc, field) => {
      const validator = validateField[field];
      acc[field] = validator ? validator(values[field]) : null;
      return acc;
    }, {});
  }, [values]);

  const isValid = useMemo(
    () => Object.values(errors).every((error) => !error),
    [errors],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (!isValid) {
      setStatus({
        type: "error",
        message: "Revisa los campos marcados antes de enviar.",
      });
      return;
    }

    setStatus({
      type: "success",
      message: "¡Gracias por tu mensaje! Te responderemos a la brevedad.",
    });
    setValues(defaultValues);
    setTouched({});
  };

  const getInputClassName = (field) => {
    if (!touched[field]) return "form-control";
    return errors[field] ? "form-control is-invalid" : "form-control is-valid";
  };

  return (
    <form className="card border-0 shadow-sm" onSubmit={handleSubmit} noValidate>
      <div className="card-body p-4 p-lg-5">
        <h2 className="h4 fw-bold mb-4">Envíanos un mensaje</h2>

        <div className="row gy-4">
          <div className="col-12 col-md-6">
            <label htmlFor="contact-name" className="form-label fw-semibold">
              Nombre *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className={getInputClassName("name")}
              placeholder="Ingresa tu nombre"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              minLength={3}
            />
            {touched.name && errors.name ? (
              <div className="invalid-feedback">{errors.name}</div>
            ) : null}
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="contact-email" className="form-label fw-semibold">
              Correo electrónico *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className={getInputClassName("email")}
              placeholder="ejemplo@correo.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.email && errors.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : null}
          </div>

          <div className="col-12">
            <label htmlFor="contact-subject" className="form-label fw-semibold">
              Asunto *
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              className={getInputClassName("subject")}
              placeholder="¿Sobre qué quieres hablar?"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.subject && errors.subject ? (
              <div className="invalid-feedback">{errors.subject}</div>
            ) : null}
          </div>

          <div className="col-12">
            <label htmlFor="contact-message" className="form-label fw-semibold">
              Mensaje *
            </label>
            <textarea
              id="contact-message"
              name="message"
              className={getInputClassName("message")}
              rows={5}
              placeholder="Cuéntanos en detalle en qué podemos ayudarte"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              minLength={10}
            />
            {touched.message && errors.message ? (
              <div className="invalid-feedback">{errors.message}</div>
            ) : null}
          </div>
        </div>

        <div className="d-flex flex-column align-items-start gap-3 mt-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Enviar mensaje
          </button>
          {status ? (
            <div
              className={`alert ${
                status.type === "success"
                  ? "alert-success"
                  : "alert-danger"
              } mb-0`}
              role="alert"
            >
              {status.message}
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
