import { Separator } from "@/components/ui/separator";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { CSSProperties } from "react";

export const Projects = () => {
    // Resolve assets respecting Vite base (GitHub Pages subpath)
    // Simple join instead of URL() to avoid runtime errors when BASE_URL is a relative path.
    const asset = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${p}`;

    const style : CSSProperties = {
    fontFamily: "Mulish, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "normal",
    fontStyle: "normal",
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-center pt-5 text-white">Software Projects</h1>
            <div className="py-10 max-w-[880px] px-5 mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch">
                <div className="box-border border-zinc-800 border w-full max-w-[800px] p-4 gap-4 flex flex-col">
                    <div  className="flex flex-col gap-2 md:flex-1">
                        <h1 className="text-2xl font-bold text-center text-white">SISTAQ</h1>
                        <Separator className="bg-zinc-800"/>
                        <p className="text-lg text-left leading-relaxed text-white" style={style}>As part of one of my long-term projects with React and TypeScript, I worked on this project where I had to update the old ERP of the company using a number of modern libraries and tools. This project envisions mostly improving the interface which will be used by the Engineering and Sales Department. The new version of the website also allows the users to fill in and change production data in the internal database of the company. </p>
                    </div>
                    <div className="flex justify-end mt-auto">
                        <Carousel
                              plugins={[
                                Autoplay({
                                  delay: 2000,
                                }),
                              ]}>
                            <CarouselContent>
                                <CarouselItem>
                                    <img
                                        src={asset("projects/1.png")}
                                        alt="Placeholder"
                                        className="w-full h-full object-cover"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src={asset("projects/2.png")}
                                        alt="Placeholder"
                                        className="w-full h-full object-cover"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src={asset("projects/3.png")}
                                        alt="Placeholder"
                                        className="w-full h-full object-cover"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
                <div className="box-border border-zinc-800 border w-full max-w-[800px] p-4 gap-4 flex flex-col">
                    <div className="flex flex-col gap-2 md:flex-1">
                        <h1 className="text-2xl font-bold text-center text-white">Cosmonaut Emporium</h1>
                        <Separator className="bg-zinc-800"/>
                        <p className="text-lg text-left leading-relaxed text-white" style={style}>The website was created and maintained with the intention that it helps the Star Citizen community purchase in game items off the game without much hustle. The purpose of the platform is to improve user enjoyment by providing them with a smooth intuitive interface from which they can search and buy what they want in readiness for their quests within the game.</p>
                    </div>
                    <div className="flex justify-end mt-auto">
                        <Carousel
                              plugins={[
                                Autoplay({
                                  delay: 2000,
                                }),
                              ]}>
                            <CarouselContent>
                            <CarouselItem>
                                    <img
                                        src={asset("projects/11.png")}
                                        alt="Placeholder"
                                        className="w-full h-full object-cover"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src={asset("projects/22.png")}
                                        alt="Placeholder"
                                        className="w-full h-full object-cover"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src={asset("projects/33.png")}
                                        alt="Placeholder"
                                        className="w-full h-full object-cover"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}