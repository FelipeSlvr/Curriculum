import { useState } from "react";
import { Link } from "react-scroll";
import { Separator } from "./ui/separator";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-zinc-950 bg-opacity-40 backdrop-blur p-3 mx-auto top-0 overflow-hidden border-b sticky border-zinc-800 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-3xl text-white font-bold" >PORTFOLIO</a>
                <div className="hidden md:block">
                    <Link to="about" smooth={true} duration={500} className="p-4 text-lg hover:underline underline-offset-4 text-white">About</Link>
                    <span className="p-4 text-zinc-800">|</span>
                    <Link to="projects" smooth={true} duration={500} className="p-4 text-lg hover:underline underline-offset-4 text-white">Software Projects</Link>
                    <span className="p-4 text-zinc-800">|</span>
                    <Link to="dashboards" smooth={true} duration={500} className="p-4 text-lg hover:underline underline-offset-4 text-white">BI Dashboards</Link>
                </div>
                
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="border border-white p-2">
                        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                
            </div>
            <div className={(isOpen ? "" : "hidden ") + "md:hidden z-50"}>
                <Link to="about" smooth={true} duration={500} className="block p-4 text-lg text-white">About</Link>
                <Separator className="bg-zinc-800" />
                <Link to="projects" smooth={true} duration={500} className="block p-4 text-lg text-white">Projects</Link>
            </div>
        </nav>
    );
}
    export default Navbar;