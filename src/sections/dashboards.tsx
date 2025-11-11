import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CSSProperties } from "react";
import { useTranslation } from 'react-i18next';

export const Dashboards = () => {
  const { t } = useTranslation();
  // Helper to resolve assets correctly under GitHub Pages base (e.g., /Curriculum/)
  // Simple join instead of URL() to avoid runtime errors when BASE_URL is a relative path.
  const asset = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${p}`;
  const style: CSSProperties = {
    fontFamily: "Mulish, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  /** Caixa reutilizável (titulo + desc à esquerda, carrossel à direita) */
  const Box = ({ id, titleKey, descriptionKey, images }: { id?: string; titleKey: string; descriptionKey: string; images: string[] }) => (
    <div
      id={id}
      className="
        box-border
        w-full
        border border-zinc-800 
        p-4 gap-4
        flex flex-col md:flex-row md:items-start
      "
    >
      {/* BLOCO ESQUERDO – Título + Descrição */}
      <div className="flex flex-col gap-2 md:flex-1">
        <h2 className="text-2xl font-bold text-center md:text-left text-white">
          {t(titleKey)}
        </h2>
        <Separator className="bg-zinc-800" />
        <p
          className="text-lg text-left leading-relaxed text-white"
          style={style}
        >
          {t(descriptionKey)}
        </p>
      </div>

      {/* BLOCO DIREITO – Carrossel */}
      <div className="w-full md:w-1/2 md:ml-auto md:self-center ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((src) => (
              <CarouselItem key={src}>
                <img
                  src={src}
                  alt="Dashboard screenshot"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="text-2xl font-bold text-center pt-5 text-white">
        {t('navbar.dashboards')}
      </h1>

      {/* CONTÊINER PRINCIPAL:
          Sempre empilha verticalmente (flex-col).
          Gap garante espaçamento entre as caixas. */}
      <div className="py-10 max-w-[880px] px-5 mx-auto flex flex-col gap-6">
        <Box
          id="dashboards"
          titleKey="dashboards.items.kpi.title"
          descriptionKey="dashboards.items.kpi.description"
          images={[asset("bis/1.png"), asset("bis/2.png")]}
        />
        <Box
          titleKey="dashboards.items.workforce.title"
          descriptionKey="dashboards.items.workforce.description"
          images={[asset("bis/11.png"), asset("bis/22.png")]}
        />
      </div>
    </>
  );
};