import { Separator } from "@/components/ui/separator";
import { useTranslation } from 'react-i18next';

export const Education = () => {
    const { t } = useTranslation();

    const dsDates = t('education.dsDates').replace(/\s*-\s*/g, " \u2013 ");
    const itDates = t('education.itDates').replace(/\s*-\s*/g, " \u2013 ");

    return (
        <>
                <div className="terminal-panel box-border w-full md:flex-1 md:basis-0 min-w-0 p-4 gap-4 flex flex-col">
                        <div className="flex flex-col items-center mt-4 gap-6 md:mt-0">
                <h1 className="text-2xl font-bold text-center text-foreground terminal-heading">{t('sections.education')}</h1>
                <h2 className="text-lg text-center text-foreground">{t('education.dsDegree')}</h2>
                            <p className="text-sm text-foreground/70">
                                <span>{t('education.dsUniversity')} • </span>
                                <span className="whitespace-nowrap">{dsDates}</span>
                            </p>
                <Separator className="bg-border/60" />
                    <h2 className="text-lg text-center text-foreground">{t('education.itDegree')}</h2>
                                    <p className="text-sm text-foreground/70">
                                        <span>{t('education.itUniversity')} • </span>
                                        <span className="whitespace-nowrap">{itDates}</span>
                                    </p>
                        </div>
                </div>
        </>
    );
}