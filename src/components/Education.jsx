import { useEffect } from "react";
// import Exper from "../assets/img/exper.JPG";
import School from "../assets/img/school.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth easing for modern feel
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 style={{textAlign : "center"}} className="mb-4" data-aos="fade-down">
          Education
        </h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-body">
                <h5 className="card-title">BA of Arts in English for International Relations</h5>
                <h6 className="card-subtitle mb-2 text-muted">Norton University, 2019</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card" data-aos="fade-up" data-aos-delay="400">
              <div className="card-body">
                <h5 className="card-title">Intensive English for Academic Purposes</h5>
                <h6 className="card-subtitle mb-2 text-muted">Pannasastra University of Cambodia, 2017</h6>
                <p className="card-text">+ Special Premier English Laboratory + Computer Application</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border-2">
          <img
            src={School}
            alt="Education"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "500px", objectFit: "cover" }}
            data-aos="zoom-in"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;