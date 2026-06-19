import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const contactCardData = [
  {
    icon: faLocationDot,
    title: "Address",
    text: "New York, NY 535022",
  },
  {
    icon: faPhone,
    title: "Call Us",
    text: "+1 5589 55488 55",
  },
  {
    icon: faEnvelope,
    title: "Email Us",
    text: "info@example.com",
  },
];

const Contact = () => {
  return (
    <section className="bg-slate-50 pb-16">
      <div className="h-[360px] w-full overflow-hidden">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96778.43262902627!2d-73.998241!3d40.710839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1725563061883!5m2!1sen!2sus"
          className="h-full w-full border-0 grayscale-[20%]"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto mt-10 px-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <ContactCard data={contactCardData} />
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;