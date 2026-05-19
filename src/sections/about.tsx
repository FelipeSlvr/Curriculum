import { useTranslation } from 'react-i18next'

export const About = () => {
    const { t } = useTranslation();
    const bullets = t('about.bullets', { returnObjects: true }) as string[];

    return (
        <div id="about" className="w-full px-2">
            <div className="terminal-panel p-6 md:p-7 lg:p-8">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-5xl font-semibold text-primary terminal-heading md:text-6xl">{t('about.name')}</h1>
                        <h2 className="text-xl font-semibold text-foreground/85 md:text-2xl">{t('about.title')}</h2>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                        {bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-6 text-foreground/90">
                                <span className="mt-[0.1rem] shrink-0 text-primary">•</span>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
