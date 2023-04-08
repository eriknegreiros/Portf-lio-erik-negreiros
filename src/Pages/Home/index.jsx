import HeaderMenu from "../../Components/Header";
import Landing from "../../Components/LandingPage";
import Techs from "../../Components/Techs";
import Projects from "../../Components/Projects";
import Contact from "../../Components/Contact";

const HomePage = () => {
  return (
    <>
      <HeaderMenu />
      <Landing />
      <Techs />
      <Projects/>
      <Contact/>
    </>
  );
};

export default HomePage;
