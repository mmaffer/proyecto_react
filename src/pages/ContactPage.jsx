import ContactForm from "../components/contact/ContactForm.jsx";

function ContactPage() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="text-center mb-5">
              <h1 className="h2 fw-bold mb-3">Contacto</h1>
              <p className="text-muted mb-0">
                ¿Tienes alguna duda o sugerencia? Completa el formulario y nos
                pondremos en contacto contigo.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
