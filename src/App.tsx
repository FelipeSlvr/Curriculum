import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Separator } from "./components/ui/separator";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Education } from "./sections/education";
import { Experiences } from "./sections/experiences";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";
import { Dashboards } from "./sections/dashboards";
import { CSSProperties } from "react";

const style: CSSProperties = {
  fontFamily: "Josefin Sans, sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: "normal",
  fontStyle: "normal",
};

function App() {

  return (
    <div style={style}>
      <Navbar />
      <div className="justify-center flex flex-col mb-3 items-center md:flex-row">
        <About />
        <Contact />
      </div>
      <Separator className="bg-zinc-800"/>
      <div className="py-10 px-5 mx-4 md:mx-16 lg:mx-[100px] xl:mx-[350px] flex flex-col md:flex-row gap-6 justify-center items-stretch">
        <Skills />
        <Experiences />
        <Education />
      </div>
      <Separator id="projects" className="bg-zinc-800"/>
      <Projects />
      <Separator className="bg-zinc-800"/>
      <Dashboards />
      <Footer />
    </div>
  )
}

export default App;