import { useEffect } from "react";
import Mey from "../assets/img/IMG_7910.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth easing for modern feel
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <section id="introduction" className="py-5 bg-light">
      <div className="container text-center">
        <h1 className="display-4 mb-4" data-aos="fade-down">
          Portfolio
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="200">
          Seavmey Ngorn
        </h2>
        <p className="lead" data-aos="fade-up" data-aos-delay="300">
          ngorn.seavmey@gadc.org.kh
        </p>
        <img
          src={Mey}
          alt="Empowerment"
          className="img-fluid rounded my-4"
          style={{ maxWidth: "500px", width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
          data-aos="zoom-in"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default Introduction;