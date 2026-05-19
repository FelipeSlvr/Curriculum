import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return (
            <div className="terminal-panel relative overflow-hidden flex flex-col justify-between gap-2 px-5 py-4 text-sm text-foreground/80 md:flex-row md:items-center">
                <p>Copyright 2024 - 2026 Felipe Silveira. <span className="text-foreground/65">{t('footer.rights')}</span></p>
                <p>{t('footer.builtWith')} <span className="font-semibold text-foreground">React and TailwindCSS</span>.</p>
            </div>
    );
}
    export default Footer;