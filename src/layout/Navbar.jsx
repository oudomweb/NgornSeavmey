// import { useEffect } from 'react';

// const Navbar = () => {
//   const navLinks = [
//     { id: 'introduction', label: 'Introduction' },
//     { id: 'about', label: 'About Me' },
//     { id: 'skills', label: 'Personal Skills' },
//     { id: 'education', label: 'Education' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Project Portfolio' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   const handleNavClick = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     // import('bootstrap/dist/js/bootstrap.bundle.min.js');
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//       <div className="container">
//         <a className="navbar-brand" href="#">Seavmey Ngorn</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {navLinks.map((link) => (
//               <li className="nav-item" key={link.id}>
//                 <a
//                   className="nav-link"
//                   href={`#${link.id}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(link.id);
//                   }}
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect } from "react";

const Navbar = () => {
  const navLinks = [
    { id: "introduction", label: "Introduction" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Personal Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Project Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Dynamically load Bootstrap JS for toggle and dropdown functionality
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap JS loaded successfully");
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap JS:", err);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Seavmey Ngorn
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.slice(0, 3).map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className="nav-link"
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                {navLinks.slice(3).map((link) => (
                  <li key={link.id}>
                    <a
                      className="dropdown-item"
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.id);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;