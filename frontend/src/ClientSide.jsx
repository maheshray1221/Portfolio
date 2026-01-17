import { PortfolioProvider } from "./context/portfolio_context.jsx";
import About from "./User-Pages/About.jsx";
import Skill from "./User-Pages/Skill.jsx";
import Project from "./User-Pages/Project.jsx";
import Experience from "./User-Pages/Experience.jsx";
import Contact from "./User-Pages/Contact.jsx";
import Footer from "./User-Pages/Footer.jsx";
import Header from "./User-Pages/Header.jsx";
import Home from "./User-Pages/Home.jsx";
export default function ClientSide() {
  return (
    <>
      {/* <PortfolioProvider> */}

      <div className="w-full min-h-screen overflow-x-hidden  bg-[#121f28]">
        <Header />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skill">
          <Skill />
        </div>
        <div id="project">
          <Project />
        </div>
        {/* <div id='experience'>
                    <Experience />
                </div> */}
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
      {/* </PortfolioProvider> */}
    </>
  );
}
