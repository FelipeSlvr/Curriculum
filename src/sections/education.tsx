import { useTranslation } from 'react-i18next';

export const Education = () => {
    const { t } = useTranslation();

    const dsDates = t('education.dsDates').replace(/\s*-\s*/g, " \u2013 ");
    const itDates = t('education.itDates').replace(/\s*-\s*/g, " \u2013 ");

    const entries = [
        {
            degree: t('education.dsDegree'),
            university: t('education.dsUniversity'),
            dates: dsDates,
        },
        {
            degree: t('education.itDegree'),
            university: t('education.itUniversity'),
            dates: itDates,
        },
    ];

    return (
        <div className="terminal-panel p-6 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.3em]">{t('sections.education')}</p>

            <div className="relative pl-5 border-l-2 border-primary/40 flex flex-col gap-6">
                {entries.map((entry) => (
                    <div key={entry.degree} className="relative flex flex-col gap-1 rounded-[24px] border border-white/35 bg-white/20 p-4 backdrop-blur-xl">
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/60 ring-2 ring-background" />
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-sm font-semibold text-foreground leading-snug">{entry.degree}</h3>
                            <span className="whitespace-nowrap rounded-full border border-white/55 bg-white/35 px-3 py-1 text-xs text-foreground/60">
                                {entry.dates}
                            </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{entry.university}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}