import { Separator } from "@/components/ui/separator";
import {
        Carousel,
        CarouselContent,
        CarouselItem,
    } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from 'react-i18next';

export const Projects = () => {
    const { t } = useTranslation();
    const asset = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${p}`;

    type Project = {
        title: string;
        description: string;
        tags: string[];
        images: { src: string; alt: string }[];
    };

    const allProjects: Project[] = [
        {
            title: "SISTAQ",
            description: t('projects.items.sistaq.description'),
            tags: ["React", "TypeScript", "ERP", "UI/UX"],
            images: [
                { src: asset("projects/1.png"), alt: "SISTAQ ERP modern UI - dashboard view" },
                { src: asset("projects/2.png"), alt: "SISTAQ ERP forms and data entry" },
                { src: asset("projects/3.png"), alt: "SISTAQ ERP tables and filtering" },
            ],
        },
        {
            title: "Cosmonaut Emporium",
            description: t('projects.items.cosmonaut.description'),
            tags: ["React", "E‑commerce", "Webhook", "UI/UX"],
            images: [
                { src: asset("projects/11.png"), alt: "Cosmonaut Emporium home page" },
                { src: asset("projects/22.png"), alt: "Cosmonaut Emporium product listing" },
                { src: asset("projects/33.png"), alt: "Cosmonaut Emporium product detail" },
            ],
        },
        {
            title: t('dashboards.items.kpi.title'),
            description: t('dashboards.items.kpi.description'),
            tags: ["Power BI", "DAX", "Power Query", "Data Analysis"],
            images: [
                { src: asset("bis/1.png"), alt: "KPI Dashboard overview" },
                { src: asset("bis/2.png"), alt: "KPI Dashboard detail" },
            ],
        },
    ];

    return (
        <section id="projects" className="mx-auto max-w-[1400px] px-2 py-12 lg:px-4">
            <p className="mb-8 text-center text-xs uppercase tracking-[0.34em] text-accent">{t('sections.caseStudies')}</p>

            <div className="grid grid-cols-1 gap-6 items-stretch lg:grid-cols-3">
                {allProjects.map((p) => (
                    <div key={p.title} className="terminal-panel box-border flex w-full flex-col gap-5 overflow-hidden p-5 md:p-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold text-foreground">{p.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map(tag => (
                                    <span key={tag} className="border border-border bg-secondary px-3 py-1 text-xs text-foreground/90">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Separator className="bg-border" />
                            <p className="text-sm leading-7 text-foreground/84">{p.description}</p>
                        </div>
                        <div className="mt-auto">
                            <Carousel plugins={[Autoplay({ delay: 2500 })]}>
                                <CarouselContent>
                                    {p.images.map((img) => (
                                        <CarouselItem key={img.src}>
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                loading="lazy"
                                                className="aspect-[16/10] h-full w-full border border-border object-cover"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
