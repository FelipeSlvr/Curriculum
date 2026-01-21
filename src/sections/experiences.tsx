import { Separator } from "@/components/ui/separator";
import { useTranslation } from 'react-i18next';

export const Experiences = () => {
    const { t } = useTranslation();

    const role = t('experiences.role').replace(/-/g, "\u2011");
    const dates = t('experiences.dates').replace(/\s*-\s*/g, " \u2013 ");

    return (
        <>
                <div className="terminal-panel box-border w-full md:flex-1 md:basis-0 min-w-0 p-4 gap-4 flex flex-col">
                        <div className="flex flex-col items-center mt-4 gap-6 md:mt-0">
                                    <h1 className="text-2xl font-bold text-foreground text-center terminal-heading">{t('sections.experiences')}</h1>
                                <div className="flex flex-col text-center">
                                    <h2 className="text-lg font-semibold text-foreground">{role}</h2>
                                    <p className="text-sm text-foreground/70 whitespace-nowrap">{dates}</p>
                                </div>
                            <Separator className="bg-border/60" />
                            <p className="text-lg text-center leading-relaxed text-foreground">
                                {t('experiences.description')}
                            </p>
                        </div>
                </div>
        </>
    );
}