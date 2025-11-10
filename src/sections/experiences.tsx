import { Separator } from "@/components/ui/separator";
import { CSSProperties } from "react";

export const Experiences = () => {

    const style : CSSProperties = {
        fontFamily: "Mulish, sans-serif",
        fontOpticalSizing: "auto",
        fontWeight: "normal",
        fontStyle: "normal",
    };

    return (
        <>
                <div className="box-border border-zinc-800 border w-full max-w-[800px] p-4 gap-4 flex flex-col">
                        <div className="flex flex-col items-center mt-4 gap-6 md:mt-0">
                            <h1 className="text-2xl font-bold text-center text-white">Experiences</h1>
                            <h2 className="text-white text-lg text-center text-white" style={style}>Developer at Estaq</h2>
                            <p className="text-white text-lg text-center text-white" style={style}>Since 2021</p>
                            <Separator className="bg-zinc-800"/>
                            <p className="text-lg text-center leading-relaxed text-white" style={style}>I'm the main developer responsible for maintaining the company's ERP by developing new modules using React and fixing backend errors on their API server.</p>
                        </div>
                </div>
        </>
    );
}