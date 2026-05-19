import { Github, Linkedin } from 'react-bootstrap-icons';
import Email from '../components/actions/email';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    return (
        <div id="contact" className="terminal-panel w-full max-w-none p-5 md:p-6 lg:sticky lg:top-28 flex flex-col gap-6 self-stretch">
            <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-accent">{t('sections.contact')}</span>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <a
                    href="mailto:felipeslvr@icloud.com"
                    className="flex items-center gap-3 border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                    <Email asIcon />
                    <span className="text-sm">felipeslvr@icloud.com</span>
                </a>
                <a
                    href="https://br.linkedin.com/in/felipe-silveira-b9526b1b9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                    <Linkedin size={24} className="shrink-0" />
                    <span className="text-sm">linkedin.com/in/felipe-silveira</span>
                </a>
                <a
                    href="https://github.com/FelipeSlvr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                    <Github size={24} className="shrink-0" />
                    <span className="text-sm">github.com/FelipeSlvr</span>
                </a>
            </div>
        </div>
    );
}
