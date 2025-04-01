import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./Components/AboutMe";
import Testimonals from"./Components/Testimonals"
import Stats from "./Components/Stats";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <>
    <AboutMe/>
    <Stats/>
    <Contact/>
    <Testimonals/>
    </>
  );
}
