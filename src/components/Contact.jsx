import { useEffect } from "react";
import ContactImg from "../assets/img/contact.JPG";
import { FaFacebook, FaTelegram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth easing for modern feel
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4" style={{fontFamily: '"Roboto Slab", sans-serif'}}>Contact Me</h2>
        <p className="lead" style={{marginLeft : "15px"}}><FaEnvelope />  ngorn.seavmey@gadc.org.kh</p>
        <p className="lead" style={{marginRight: "85px"}}> <FaWhatsapp /> +855 969698656</p>
        <div className="d-flex justify-content-center gap-4 my-4">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: "#333", fontSize: "2rem" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaFacebook />
          </a>
          <a
            href="https://t.me/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: "#333", fontSize: "2rem" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: "#333", fontSize: "2rem" }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+855969698656"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: "#333", fontSize: "2rem" }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:ngorn.seavmey@gadc.org.kh"
            className="social-icon"
            style={{ color: "#333", fontSize: "2rem" }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FaEnvelope />
          </a>
        </div>
        <img
          src={ContactImg}
          alt="Contact"
          className="img-fluid rounded"
          style={{ maxWidth: "400px" }}
          data-aos="zoom-in"
        />
      </div>
    </section>
  );
};

export default Contact;