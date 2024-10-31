import ContactForm from "../../ContactForm/ContactForm";

export default function Contact() {
  return (
    <section className="py-8">
      <div className="container">
        <div>
          <h2 className="hidden md:block">
            Get In Touch
          </h2>
        </div>
        <div className="mt-5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
