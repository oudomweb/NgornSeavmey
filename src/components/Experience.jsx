import ExperImg from "../assets/img/exper.JPG";

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Work Experience</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Advocacy and Networking Program Officer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gender and Development for Cambodia (GADC)</h6>
                <p className="card-text">06/2020 - Present</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Professional Intern</h5>
                <h6 className="card-subtitle mb-2 text-muted">Transparency International Cambodia</h6>
                <p className="card-text">03/2019 - 04/2020</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Local Committee Vice President</h5>
                <h6 className="card-subtitle mb-2 text-muted">AIESEC Cambodia</h6>
                <p className="card-text">02/2019 - 01/2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img
            src={ExperImg}
            alt="Work Experience"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;