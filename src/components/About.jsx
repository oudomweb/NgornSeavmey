import AboutImg from "../assets/img/about.JPG";
const AboutMe = () => {
  return (
    <section id="about" className="py-5">
      <div className="container ">
        <h2 style={{color: "red", textAlign : "center", marginBottom : "10px", fontFamily: '"Roboto Slab", sans-serif'}}>About Me</h2>
        <div className="row ">
          <div className="col-md-6" style={{textAlign : "center"}}>
            <p>
              I am a passionate gender and development practitioner with over five years of experience working in Cambodia’s civil society sector. My work centers on empowering women, LGBTQI+ individuals, and youth through feminist advocacy, capacity strengthening, and inclusive civic engagement. As a Program Officer at GADC, I lead initiatives that transform power structures and promote human rights across diverse communities.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={AboutImg}
              alt="Advocacy"    
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
