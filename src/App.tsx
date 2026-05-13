import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Education } from "./sections/education";
import { Experiences } from "./sections/experiences";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";

function App() {

  return (
    <div className="terminal-root min-h-screen px-3 pb-8 pt-3 sm:px-5 lg:px-6">
      <Navbar />

      <section className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1400px] flex-col justify-center gap-8 px-2 py-8 lg:px-4 lg:py-10">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.72fr)] xl:gap-8">
          <About />
          <Contact />
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce pointer-events-none select-none">
          <span className="text-[10px] uppercase tracking-[0.35em]">scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1400px] px-2 pb-10 pt-4 lg:px-4 lg:pt-6">
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

      <Projects />

      <div className="mx-auto mt-10 max-w-[1400px] px-2 lg:px-4">
        <Footer />
      </div>
    </div>
  )
}

export default App;