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

function App() {

  return (
    <div className="terminal-root min-h-screen">
      <Navbar />
      <div className="justify-center flex flex-col mb-3 items-center md:flex-row">
        <About />
        <Contact />
      </div>
      <Separator className="bg-border/60" />
      <div className="py-10 px-5 mx-4 md:mx-16 lg:mx-[100px] xl:mx-[120px] 2xl:mx-[200px] flex flex-col md:flex-row gap-6 justify-center items-stretch">
        <Skills />
        <Experiences />
        <Education />
      </div>
      <Separator id="projects" className="bg-border/60" />
      <Projects />
      <Separator className="bg-border/60" />
      <Dashboards />
      <Footer />
    </div>
  )
}

export default App;