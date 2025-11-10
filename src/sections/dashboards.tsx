import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CSSProperties } from "react";

export const Dashboards = () => {
  const style: CSSProperties = {
    fontFamily: "Mulish, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  /** Caixa reutilizável (titulo + desc à esquerda, carrossel à direita) */
  const Box = ({
    title,
    description,
    images,
  }: {
    title: string;
    description: string;
    images: string[];
  }) => (
    <div
      id="dashboards"
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
          {title}
        </h2>
        <Separator className="bg-zinc-800" />
        <p
          className="text-lg text-left leading-relaxed text-white"
          style={style}
        >
          {description}
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
        BI Dashboards
      </h1>

      {/* CONTÊINER PRINCIPAL:
          Sempre empilha verticalmente (flex-col).
          Gap garante espaçamento entre as caixas. */}
      <div className="py-10 max-w-[880px] px-5 mx-auto flex flex-col gap-6">
        <Box
          title="Key Performance Indicators"
          description="Using Power Query for data ingestion, DAX for dynamic measures, and custom visuals for KPI tracking, I built two core modules—Maintenance Indicators and Supplies Indicators—to give Engineering, Operations and Finance teams real-time visibility into cost drivers. Users can slice by year/month, drill into personnel, overhead and inventory expense details, and compare actuals against targets at a glance."
          images={["/bis/1.png", "/bis/2.png"]}
        />

        <Box
          title="Workforce Cost"
          description="As part of our ongoing Power BI modernization, I built a dedicated “Maintenance – Personnel” page that lets Operations and Finance drill into every element of headcount cost. To complement the raw numbers, I then designed a Deviation Analysis page where actual monthly and cumulative personnel spend are plotted against dynamic target lines."
          images={["/bis/11.png", "/bis/22.png"]}
        />
      </div>
    </>
  );
};