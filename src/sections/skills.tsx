import { useTranslation } from 'react-i18next';

const categories = [
    {
        label: "Frontend & Mobile",
        items: ["React", "React Native", "TypeScript", "HTML / CSS", "Tailwind CSS"],
    },
    {
        label: "Backend & Data",
        items: ["Node.js", "Express", "SQL", "Power BI", "Google Cloud APIs"],
    },
    {
        label: "Tools & Practices",
        items: ["Git", "REST APIs", "Render", "n8n", "Agile / Scrum", "English C1"],
    },
];

export const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className="terminal-panel p-6 flex flex-col gap-5">
            <p className="text-xs text-accent uppercase tracking-[0.3em]">{t('sections.skills')}</p>
            <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                    <div key={cat.label} className="flex flex-col gap-2">
                        <p className="text-xs text-primary/80 uppercase tracking-[0.22em]">{cat.label}</p>
                        <div className="flex flex-wrap gap-2">
                            {cat.items.map(item => (
                                <span
                                    key={item}
                                    className="whitespace-nowrap border border-border bg-secondary px-3 py-1 text-sm text-foreground"
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
