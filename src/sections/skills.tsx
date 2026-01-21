import { Separator } from "@/components/ui/separator";
import { useTranslation } from 'react-i18next';

export const Skills = () => {
    const { t } = useTranslation();

    const Separated = ({ items }: { items: string[] }) => (
        <div className="flex flex-wrap justify-center leading-relaxed">
            {items.map((item, idx) => (
                <span key={item} className="whitespace-nowrap">
                    {item}
                    {idx < items.length - 1 ? (
                        <span className="mx-2 text-muted-foreground">-</span>
                    ) : null}
                </span>
            ))}
        </div>
    );

    return (
        <>
                <div className="terminal-panel box-border w-full md:flex-1 md:basis-0 min-w-0 p-4 gap-4 flex flex-col">
                        <div className="flex flex-col items-center mt-4 gap-6 md:mt-0">
                            <h1 className="text-2xl font-bold text-center text-foreground terminal-heading">{t('sections.skills')}</h1>
                            <h2 className="text-lg text-center text-foreground">
                                <Separated items={["React", "TS", "SQL", "Node", "Express", "Git"]} />
                            </h2>
                            <Separator className="bg-border/60" />
                            <h2 className="text-lg text-center text-foreground">
                                <Separated items={["Power BI", "English C1", "Agile Methods"]} />
                            </h2>
                            <Separator className="bg-border/60" />
                            <h2 className="text-lg text-center text-foreground">
                                <Separated items={["Teamworker", "Proactive", "Quick to Learn"]} />
                            </h2>
                        </div>
                </div>
        </>
    );
}