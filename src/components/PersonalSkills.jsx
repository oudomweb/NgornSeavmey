const PersonalSkills = () => {
  const skills = [
    "Project monitoring & reporting",
    "Projection Management",
    "Problem Solving",
    "Policy advocacy",
    "Feminist facilitation",
    "Communication and Networking",
    "Strategic planning",
    "Civic engagement",
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Personal Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-3 col-sm-6 mb-3" key={index}>
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">{skill}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSkills;