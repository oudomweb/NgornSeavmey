// import './App.css'
import AboutMe from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Introduction from './components/Introduction'
import PersonalSkills from './components/PersonalSkills'
import ProjectPortfolio from './components/ProjectPortfolio'
import ThankYou from './components/Thank_Slider'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
//   useEffect(() => {
//   AOS.init({ duration: 8000 });
// }, []);

  return (
       <div>
      <Navbar />
      <Introduction />
      <AboutMe />
      <PersonalSkills />
      <Education />
      <Experience />
      <ProjectPortfolio />
      <Contact />
      <ThankYou />
      <Footer />
    </div>
  )
}

export default App
