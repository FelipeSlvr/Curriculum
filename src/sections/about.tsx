import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { Button } from '@/components/ui/button'

export const About = () => {
    const { t } = useTranslation();
    const bullets = t('about.bullets', { returnObjects: true }) as string[];

    return (
        <div id="about" className="w-full max-w-[640px] px-2">
            <div className="terminal-panel p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold text-foreground terminal-heading">{t('about.name')}</h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">{t('about.title')}</h2>
                    <p className="text-base leading-relaxed text-foreground/90">
                        {t('about.summary')}
                    </p>
                    <ul className="flex flex-col gap-2">
                        {bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                                <span className="text-primary mt-0.5 select-none shrink-0">▸</span>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
