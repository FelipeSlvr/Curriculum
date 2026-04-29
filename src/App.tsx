import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Separator } from "./components/ui/separator";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Education } from "./sections/education";
import { Experiences } from "./sections/experiences";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";

function App() {

  return (
    <div className="terminal-root min-h-screen">
      <Navbar />

      {/* Hero — fills the viewport */}
      <section className="min-h-[calc(100svh-4rem)] flex flex-col md:flex-row justify-center items-center gap-6 px-5 py-12 relative">
        <About />
        <Contact />
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce pointer-events-none select-none">
          <span className="text-[10px] uppercase tracking-widest">scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      <Separator className="bg-border/60" />

      {/* Experience / Skills / Education */}
      <section id="experience" className="py-10 px-5 mx-4 md:mx-16 lg:mx-[100px] xl:mx-[120px] 2xl:mx-[200px]">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-[58%]">
            <Experiences />
          </div>
          <div className="w-full lg:w-[42%] flex flex-col gap-6">
            <Skills />
            <Education />
          </div>
        </div>
      </section>

      <Separator className="bg-border/60" />

      {/* Case Studies — projects + BI dashboards unified */}
      <Projects />

      <Footer />
    </div>
  )
}

export default App;