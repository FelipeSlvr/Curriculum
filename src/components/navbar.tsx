import { useState } from "react";
import { Link } from "react-scroll";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
    <nav className="terminal-panel terminal-chrome sticky top-3 z-50 mx-auto max-w-[1400px] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <a className="text-[1.7rem] font-semibold terminal-heading text-foreground">Portfolio</a>
                </div>
                <div className="hidden md:flex items-center gap-2 rounded-full border border-white/45 bg-white/25 px-2 py-1 backdrop-blur-xl">
                    <Link to="about" smooth={true} duration={500} className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/45">{t('navbar.about')}</Link>
                    <Link to="experience" smooth={true} duration={500} className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/45">{t('sections.experiences')}</Link>
                    <Link to="projects" smooth={true} duration={500} className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/45">{t('navbar.caseStudies')}</Link>
                    <div className="relative">
                        <Button
                          className="ml-2 rounded-full border border-white/50 bg-white/80 px-5 text-primary shadow-sm hover:bg-white"
                          onClick={() => setIsOpen(prev => !prev)}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                        >
                            {t('navbar.resume')} ▾
                        </Button>
                        <div className={(isOpen ? "" : "hidden ") + "absolute right-0 mt-2 min-w-[180px] rounded-3xl border border-white/45 bg-white/45 p-2 shadow-lg backdrop-blur-2xl z-[100]"}>
                            <button
                                className="block w-full rounded-2xl px-4 py-3 text-left text-foreground transition-colors hover:bg-white/55"
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
                            <Separator className="bg-border/60" />
                            <button
                                className="block w-full rounded-2xl px-4 py-3 text-left text-foreground transition-colors hover:bg-white/55"
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
                    <button onClick={() => setIsOpen(!isOpen)} className="rounded-2xl border border-white/45 bg-white/35 p-2 text-foreground backdrop-blur-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                
            </div>
                <div className={(isOpen ? "" : "hidden ") + "md:hidden z-[80] pt-3"}>
                <Link to="about" smooth={true} duration={500} className="block rounded-2xl px-4 py-3 text-base text-foreground">{t('navbar.about')}</Link>
                <Separator className="bg-border/60" />
                <Link to="experience" smooth={true} duration={500} className="block rounded-2xl px-4 py-3 text-base text-foreground">{t('sections.experiences')}</Link>
                <Separator className="bg-border/60" />
                <Link to="projects" smooth={true} duration={500} className="block rounded-2xl px-4 py-3 text-base text-foreground">{t('navbar.caseStudies')}</Link>
                <Separator className="bg-border/60" />
                <div className="px-1 py-2 z-1000">
                    <div className="rounded-[28px] border border-white/45 bg-white/30 backdrop-blur-2xl">
                        <div className="flex items-center justify-between p-3">
                            <span className="text-lg text-foreground">{t('navbar.resume')}</span>
                        </div>
                        <Separator className="bg-border/60" />
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
                            className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent/40"
                        >
                            {t('navbar.downloadEN')}
                        </button>
                        <Separator className="bg-border/60" />
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
                            className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent/40"
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