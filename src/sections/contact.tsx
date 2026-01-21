import { Github, Linkedin } from 'react-bootstrap-icons';
import Email from '../components/actions/email';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    return (
            <div id="contact" className="terminal-panel w-full max-w-[300px] h-full max-h-[300px] p-4 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center mb-6 text-foreground terminal-heading">{t('sections.contact')}</h1>
                <div className="flex gap-9 text-foreground">
                    <Email />
                    <a href='https://br.linkedin.com/in/felipe-silveira-b9526b1b9'>
                        <Linkedin size={35} className="text-foreground" />
                    </a>
                    <a href='https://github.com/FelipeSlvr'>
                        <Github size={35} className="text-foreground" />
                    </a>
                </div>
            </div>
    );
}