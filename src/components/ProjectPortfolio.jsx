import { useEffect } from "react";
import Img2 from "../assets/img/img2.JPG";
import Change from "../assets/img/changeImg.jpg";
import Img4   from "../assets/img/Img4.JPEG";
import Img5   from "../assets/img/Img5.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectPortfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth easing for modern feel
      once: true, // Animation happens only once on scroll
    });
  }, []);

  const projects = [
    {
      title: "FemLeading: Empowering Young Women for Civic Engagement",
      description:
        "Successfully empowered over 50+ young women from diverse backgrounds to actively participate in civic and community leadership roles. Increased awareness and advocacy skills among participants, leading to the formation of new youth-led initiatives addressing gender equality and social issues in their communities.",
      quote:
        "“A group of diverse young women, known as change agents, have came together from various backgrounds to form a supportive network, ready to make an impact with their feminist leadership skills.”",
      image: Img2,
    },
    {
      title: "Capacity Development on Women and Gender: GEDSI Integration",
      description:
        "Enabled six key media organizations and CSOs to integrate GEDSI principles, improving gender-sensitive reporting standards and inclusive organizational policies. Conducted capacity-building that increased awareness and practical application of GEDSI concepts among media professionals and CSO staff.",
      image: Change,
    },
    {
      title: "Regional Advocacy through MASSA",
      description:
        "Amplified the voices of marginalized communities, especially women, at regional dialogues influencing policy discussions on human rights and democratic space. Contributed to building a resilient regional network of grassroots organizations that challenges restrictive governance and promotes people-led alternatives across Southeast Asia.",
      image: Img4,
    },
    {
      title: "Regional Advocacy through ASEAN Civil Society Conference / ASEAN People’s Forum (ACSC/APF)",
      description:
        "Advanced gender equality and diverse women’s empowerment as core themes within the largest regional civil society platform, ensuring inclusion of marginalized voices. Helped generate concrete recommendations to ASEAN leaders on inclusive policy-making, contributing to ongoing advocacy for the rights of “hidden” and marginalized communities.",
      image: Img5,
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4"  style={{textAlign : "center", fontFamily: '"Roboto Slab", sans-serif'}} data-aos="fade-down">Project Portfolio</h2>
        {projects.map((project, index) => (
          <div className="card mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img
                  src={project.image}
                  className="img-fluid rounded-start"
                  alt={project.title}
                  style={{ objectFit: "cover", width: "100%", height: "auto", maxHeight: "300px" }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 200 + 100}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" data-aos="fade-up" data-aos-delay={index * 200 + 200}>
                    {project.title}
                  </h5>
                  <p className="card-text" data-aos="fade-up" data-aos-delay={index * 200 + 300}>
                    {project.description}
                  </p>
                  {project.quote && (
                    <blockquote
                      className="blockquote"
                      data-aos="fade-up"
                      data-aos-delay={index * 200 + 400}
                    >
                      {project.quote}
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPortfolio;
