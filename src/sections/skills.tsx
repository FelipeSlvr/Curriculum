import { Separator } from "@/components/ui/separator";
import { CSSProperties } from "react";
import { useTranslation } from 'react-i18next';

export const Skills = () => {
    const { t } = useTranslation();

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
                            <h1 className="text-2xl font-bold text-center text-white">{t('sections.skills')}</h1>
                            <h2 className="text-lg text-center text-white" style={style}>React - TS - SQL - Node - Express - Git</h2>
                            <Separator className="bg-zinc-800"/>
                            <h2 className="text-lg text-center text-white" style={style}>Power BI - English C1 - Agile Methods</h2>
                            <Separator className="bg-zinc-800"/>
                            <h2 className="text-lg text-center text-white" style={style}>Teamworker - Proactive - Quick to Learn</h2>
                        </div>
                </div>
        </>
    );
}