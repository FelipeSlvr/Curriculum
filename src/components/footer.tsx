import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className="bg-background/35 backdrop-blur-md border-t border-border/60 p-3 mx-auto bottom-0" >
            <div className="container mx-auto flex justify-between items-center">
                <p className="p-4 text-md text-foreground">Copyright 2024 - 2026 Felipe Silveira. <span className="text-foreground/80">{t('footer.rights')}</span></p>
                <p className="p-4 text-md text-foreground"> {t('footer.builtWith')} <span className="underline underline-offset-2 font-bold">React, TailwindCSS + Shadcn</span>.</p>
            </div>
        </footer>
    );
}
    export default Footer;