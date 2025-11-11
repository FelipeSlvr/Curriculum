import { Separator } from "@/components/ui/separator";
import {
        Carousel,
        CarouselContent,
        CarouselItem,
    } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { CSSProperties, useState } from "react";
import { useTranslation } from 'react-i18next';

export const Projects = () => {
    const { t } = useTranslation();
    // Resolve assets respecting Vite base (GitHub Pages subpath)
    // Simple join instead of URL() to avoid runtime errors when BASE_URL is a relative path.
    const asset = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${p}`;

    const style : CSSProperties = {
    fontFamily: "Mulish, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "normal",
    fontStyle: "normal",
    };

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
                { src: "projects/1.png", alt: "SISTAQ ERP modern UI - dashboard view" },
                { src: "projects/2.png", alt: "SISTAQ ERP forms and data entry" },
                { src: "projects/3.png", alt: "SISTAQ ERP tables and filtering" },
            ],
        },
        {
            title: "Cosmonaut Emporium",
            description: t('projects.items.cosmonaut.description'),
            tags: ["React", "E‑commerce", "Webhook", "UI/UX"],
            images: [
                { src: "projects/11.png", alt: "Cosmonaut Emporium home page" },
                { src: "projects/22.png", alt: "Cosmonaut Emporium product listing" },
                { src: "projects/33.png", alt: "Cosmonaut Emporium product detail" },
            ],
        },
    ];

    const s = new Set<string>();
    allProjects.forEach(p => p.tags.forEach(t => s.add(t)));

    const [activeTag] = useState<string>("All");
    const filtered = activeTag === "All"
        ? allProjects
        : allProjects.filter(p => p.tags.includes(activeTag));

    return (
        <>
            <h1 className="text-2xl font-bold text-center pt-5 text-white">{t('sections.caseStudies')}</h1>

            <div className="py-8 max-w-[980px] px-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {filtered.map((p) => (
                    <div key={p.title} className="box-border border-zinc-800 border w-full p-4 gap-4 flex flex-col">
                        <div className="flex flex-col gap-2 md:flex-1">
                            <h2 className="text-2xl font-bold text-center text-white">{p.title}</h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {p.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 border border-zinc-700 rounded-full text-white/90">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Separator className="bg-zinc-800"/>
                            <p className="text-lg text-left leading-relaxed text-white" style={style}>{p.description}</p>
                        </div>
                        <div className="flex justify-end mt-auto">
                            <Carousel
                                plugins={[
                                    Autoplay({ delay: 2000 }),
                                ]}
                            >
                                <CarouselContent>
                                    {p.images.map((img) => (
                                        <CarouselItem key={img.src}>
                                            <img
                                                src={asset(img.src)}
                                                alt={img.alt}
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}