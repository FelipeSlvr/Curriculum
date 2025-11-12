import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 p-3 mx-auto bottom-0" >
            <div className="container mx-auto flex justify-between items-center">
                <p className="p-4 text-lg text-white">Copyright 2024 - 2025 Felipe Silveira. <span className="text-white/80">{t('footer.rights')}</span></p>
                <p className="p-4 text-lg text-white"> {t('footer.builtWith')} <span className="underline underline-offset-2 font-bold">React, TailwindCSS + Shadcn</span>.</p>
            </div>
        </footer>
    );
}
    export default Footer;