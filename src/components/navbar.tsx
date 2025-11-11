import { useState } from "react";
import { Link } from "react-scroll";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const currentLng = i18n.language || 'en';

    return (
    <nav className="bg-zinc-950 bg-opacity-40 backdrop-blur p-3 mx-auto top-0 border-b sticky border-zinc-800 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-3xl text-white font-bold" >PORTFOLIO</a>
                <div className="hidden md:flex items-center gap-2">
                    <Link to="about" smooth={true} duration={500} className="p-4 text-lg hover:underline underline-offset-4 text-white">{t('navbar.about')}</Link>
                    <span className="p-4 text-zinc-800">|</span>
                    <Link to="projects" smooth={true} duration={500} className="p-4 text-lg hover:underline underline-offset-4 text-white">{t('navbar.caseStudies')}</Link>
                    <span className="p-4 text-zinc-800">|</span>
                    <Link to="dashboards" smooth={true} duration={500} className="p-4 text-lg hover:underline underline-offset-4 text-white">{t('navbar.dashboards')}</Link>
                    <span className="p-4 text-zinc-800">|</span>
                    <div className="flex items-center gap-2">
                        <button
                            className={`px-2 py-1 text-sm rounded ${currentLng === 'en' ? 'bg-white text-zinc-900' : 'text-white hover:underline'}`}
                            onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('lang','en'); }}
                        >
                            EN
                        </button>
                        <span className="text-zinc-700">/</span>
                        <button
                            className={`px-2 py-1 text-sm rounded ${currentLng === 'pt' ? 'bg-white text-zinc-900' : 'text-white hover:underline'}`}
                            onClick={() => { i18n.changeLanguage('pt'); localStorage.setItem('lang','pt'); }}
                        >
                            PT
                        </button>
                    </div>
                    <div className="relative">
                        <Button
                          className="ml-2 bg-white text-zinc-900 hover:bg-white/90"
                          onClick={() => setIsOpen(prev => !prev)}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                        >
                            {t('navbar.resume')} ▾
                        </Button>
                        <div className={(isOpen ? "" : "hidden ") + "absolute right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded shadow-lg min-w-[180px] z-[100]"}>
                            <button
                                className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800"
                                onClick={async () => {
                                    const [{ pdf }, { default: ResumePDF }] = await Promise.all([
                                        import("@react-pdf/renderer"),
                                        import("./ResumePDF"),
                                    ]);
                                    const blob = await pdf(<ResumePDF />).toBlob();
                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = 'Felipe_Silveira_Resume_EN.pdf';
                                    document.body.appendChild(a);
                                    a.click();
                                    a.remove();
                                    URL.revokeObjectURL(url);
                                }}
                            >
                                {t('navbar.downloadEN')}
                            </button>
                            <Separator className="bg-zinc-800" />
                            <button
                                className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800"
                                onClick={async () => {
                                    const [{ pdf }, { default: ResumePDF_PT }] = await Promise.all([
                                        import("@react-pdf/renderer"),
                                        import("./ResumePDF_PT"),
                                    ]);
                                    const blob = await pdf(<ResumePDF_PT />).toBlob();
                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = 'Felipe_Silveira_Curriculo_PT.pdf';
                                    document.body.appendChild(a);
                                    a.click();
                                    a.remove();
                                    URL.revokeObjectURL(url);
                                }}
                            >
                                {t('navbar.downloadPT')}
                            </button>
                        </div>
                    </div>

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
                <div className={(isOpen ? "" : "hidden ") + "md:hidden z-[80]"}>
                <Link to="about" smooth={true} duration={500} className="block p-4 text-lg text-white">{t('navbar.about')}</Link>
                <Separator className="bg-zinc-800" />
                <Link to="projects" smooth={true} duration={500} className="block p-4 text-lg text-white">{t('navbar.projects')}</Link>
                <Separator className="bg-zinc-800" />
                <div className="px-4 py-2 z-1000">
                    <div className="border border-zinc-700 rounded">
                        <div className="flex items-center justify-between p-3">
                            <span className="text-lg text-white">{t('navbar.resume')}</span>
                            <div className="flex items-center gap-2">
                                <button
                                    className={`px-2 py-1 text-sm rounded ${currentLng === 'en' ? 'bg-white text-zinc-900' : 'text-white hover:underline'}`}
                                    onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('lang','en'); }}
                                >EN</button>
                                <span className="text-zinc-700">/</span>
                                <button
                                    className={`px-2 py-1 text-sm rounded ${currentLng === 'pt' ? 'bg-white text-zinc-900' : 'text-white hover:underline'}`}
                                    onClick={() => { i18n.changeLanguage('pt'); localStorage.setItem('lang','pt'); }}
                                >PT</button>
                            </div>
                        </div>
                        <Separator className="bg-zinc-800" />
                        <button
                            onClick={async () => {
                                const [{ pdf }, { default: ResumePDF }] = await Promise.all([
                                    import("@react-pdf/renderer"),
                                    import("./ResumePDF"),
                                ]);
                                const blob = await pdf(<ResumePDF />).toBlob();
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = 'Felipe_Silveira_Resume_EN.pdf';
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                                URL.revokeObjectURL(url);
                                setIsOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800"
                        >
                            {t('navbar.downloadEN')}
                        </button>
                        <Separator className="bg-zinc-800" />
                        <button
                            onClick={async () => {
                                const [{ pdf }, { default: ResumePDF_PT }] = await Promise.all([
                                    import("@react-pdf/renderer"),
                                    import("./ResumePDF_PT"),
                                ]);
                                const blob = await pdf(<ResumePDF_PT />).toBlob();
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = 'Felipe_Silveira_Curriculo_PT.pdf';
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                                URL.revokeObjectURL(url);
                                setIsOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800"
                        >
                            {t('navbar.downloadPT')}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
    export default Navbar;