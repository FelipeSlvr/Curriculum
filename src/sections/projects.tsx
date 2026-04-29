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
        {
            title: t('dashboards.items.workforce.title'),
            description: t('dashboards.items.workforce.description'),
            tags: ["Power BI", "DAX", "Workforce Analytics"],
            images: [
                { src: asset("bis/11.png"), alt: "Workforce Cost overview" },
                { src: asset("bis/22.png"), alt: "Workforce Deviation Analysis" },
            ],
        },
    ];

    return (
        <section id="projects" className="py-12 px-5 mx-4 md:mx-16 lg:mx-[100px] xl:mx-[120px] 2xl:mx-[200px]">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8 text-center">{t('sections.caseStudies')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {allProjects.map((p) => (
                    <div key={p.title} className="terminal-panel box-border w-full p-5 gap-4 flex flex-col">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-foreground">{p.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-0.5 border border-primary/30 rounded-sm bg-primary/5 text-foreground/90">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Separator className="bg-border/60" />
                            <p className="text-sm leading-relaxed text-foreground/90">{p.description}</p>
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
                                                className="w-full h-full object-cover rounded"
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