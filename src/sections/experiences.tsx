import { useTranslation } from 'react-i18next';

type ExperienceItem = {
    role: string;
    company: string;
    dates: string;
    bullets: string[];
};

export const Experiences = () => {
    const { t } = useTranslation();
    const items = t('experiences.items', { returnObjects: true }) as ExperienceItem[];

    return (
        <div className="terminal-panel p-6 flex flex-col gap-5 h-full">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{t('sections.experiences')}</p>

            <div className="relative pl-5 border-l-2 border-primary/40 flex flex-col gap-8">
                {items.map((item, idx) => (
                    <div key={idx} className="relative flex flex-col gap-3">
                        {/* timeline dot */}
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-background" />

                        {/* role + date */}
                        <div className="flex flex-wrap items-start justify-between gap-2">
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-foreground leading-tight">{item.role}</h3>
                                <span className="text-xs text-primary/70">{item.company}</span>
                            </div>
                            <span className="text-xs text-foreground/60 border border-border/60 rounded px-2 py-0.5 whitespace-nowrap mt-0.5">
                                {item.dates}
                            </span>
                        </div>

                        {/* bullets */}
                        <ul className="flex flex-col gap-2">
                            {item.bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                                    <span className="text-primary/70 mt-0.5 select-none shrink-0">▸</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>

                        {/* divider between entries */}
                        {idx < items.length - 1 && (
                            <div className="border-t border-border/20 mt-1" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}