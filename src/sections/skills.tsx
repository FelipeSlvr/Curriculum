import { useTranslation } from 'react-i18next';

const categories = [
    {
        label: "Frontend",
        items: ["React", "TypeScript", "HTML / CSS", "Tailwind CSS"],
    },
    {
        label: "Backend & Data",
        items: ["Node.js", "Express", "SQL", "Power BI", "Google Cloud APIs"],
    },
    {
        label: "Tools & Practices",
        items: ["Git", "REST APIs", "n8n", "Agile / Scrum", "English C1"],
    },
];

export const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className="terminal-panel p-6 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{t('sections.skills')}</p>
            <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                    <div key={cat.label} className="flex flex-col gap-2">
                        <p className="text-xs text-primary/80 uppercase tracking-wider">{cat.label}</p>
                        <div className="flex flex-wrap gap-2">
                            {cat.items.map(item => (
                                <span
                                    key={item}
                                    className="text-sm px-2 py-0.5 border border-primary/30 rounded-sm bg-primary/5 text-foreground whitespace-nowrap"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}