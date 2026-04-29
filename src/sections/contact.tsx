import { Github, Linkedin } from 'react-bootstrap-icons';
import Email from '../components/actions/email';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    return (
        <div id="contact" className="terminal-panel w-full max-w-[300px] p-4 flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold text-center text-foreground terminal-heading">{t('sections.contact')}</h1>
            <div className="flex flex-col gap-4 w-full">
                <a
                    href="mailto:felipeslvr@icloud.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                    <Email asIcon />
                    <span className="text-sm">felipeslvr@icloud.com</span>
                </a>
                <a
                    href="https://br.linkedin.com/in/felipe-silveira-b9526b1b9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                    <Linkedin size={24} className="shrink-0" />
                    <span className="text-sm">linkedin.com/in/felipe-silveira</span>
                </a>
                <a
                    href="https://github.com/FelipeSlvr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                    <Github size={24} className="shrink-0" />
                    <span className="text-sm">github.com/FelipeSlvr</span>
                </a>
            </div>
        </div>
    );
}