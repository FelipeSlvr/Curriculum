import { useState } from "react";
import { Link } from "react-scroll";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
    <nav className="terminal-panel sticky top-3 z-50 mx-auto max-w-[1400px] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <a className="text-[1.7rem] font-semibold terminal-heading text-primary">Portfolio</a>
                </div>
                <div className="hidden md:flex items-center gap-2 border border-border bg-secondary px-2 py-1">
                    <Link to="about" smooth={true} duration={500} className="px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer">{t('navbar.about')}</Link>
                    <Link to="experience" smooth={true} duration={500} className="px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer">{t('sections.experiences')}</Link>
                    <Link to="projects" smooth={true} duration={500} className="px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer">{t('navbar.caseStudies')}</Link>
                    <div className="relative">
                        <Button
                          className="ml-2 border border-primary bg-transparent text-primary shadow-none hover:bg-primary hover:text-background"
                          onClick={() => setIsOpen(prev => !prev)}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                        >
                            {t('navbar.resume')} ▾
                        </Button>
                        <div className={(isOpen ? "" : "hidden ") + "absolute right-0 mt-2 min-w-[180px] border border-border bg-card p-2 z-[100]"}>
                            <button
                                className="block w-full px-4 py-3 text-left text-foreground transition-colors hover:text-primary"
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
                            <Separator className="bg-border" />
                            <button
                                className="block w-full px-4 py-3 text-left text-foreground transition-colors hover:text-primary"
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
                    <button onClick={() => setIsOpen(!isOpen)} className="border border-border bg-secondary p-2 text-foreground">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

            </div>
                <div className={(isOpen ? "" : "hidden ") + "md:hidden z-[80] pt-3"}>
                <Link to="about" smooth={true} duration={500} className="block px-4 py-3 text-base text-foreground hover:text-primary cursor-pointer">{t('navbar.about')}</Link>
                <Separator className="bg-border" />
                <Link to="experience" smooth={true} duration={500} className="block px-4 py-3 text-base text-foreground hover:text-primary cursor-pointer">{t('sections.experiences')}</Link>
                <Separator className="bg-border" />
                <Link to="projects" smooth={true} duration={500} className="block px-4 py-3 text-base text-foreground hover:text-primary cursor-pointer">{t('navbar.caseStudies')}</Link>
                <Separator className="bg-border" />
                <div className="px-1 py-2 z-1000">
                    <div className="border border-border bg-secondary">
                        <div className="flex items-center justify-between p-3">
                            <span className="text-lg text-foreground">{t('navbar.resume')}</span>
                        </div>
                        <Separator className="bg-border" />
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
                            className="block w-full text-left px-4 py-2 text-foreground hover:text-primary"
                        >
                            {t('navbar.downloadEN')}
                        </button>
                        <Separator className="bg-border" />
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
                            className="block w-full text-left px-4 py-2 text-foreground hover:text-primary"
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
