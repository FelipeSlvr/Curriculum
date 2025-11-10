import { Separator } from "@/components/ui/separator";
import { CSSProperties } from "react";

export const Education = () => {

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
                            <h1 className="text-2xl font-bold text-center text-white">Education</h1>
                            <h2 className="text-lg text-center text-white" style={style}>Bachelor Degree in Civil Engineering <br />La Salle</h2>
                            <p className="text-lg text-center text-white" style={style}> 2025 - est. 2030</p>
                            <Separator className="bg-zinc-800"/>
                            <h2 className="text-lg text-center text-white" style={style}>Associate Degree in IT Management <br />Uninter</h2>
                            <p className="text-lg text-center text-white" style={style}> 2020 - 2022</p>
                        </div>
                </div>
        </>
    );
}