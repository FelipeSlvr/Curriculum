import { Separator } from "@/components/ui/separator";
import { CSSProperties } from "react";
import { useTranslation } from 'react-i18next';

export const Experiences = () => {
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
                                    <h1 className="text-2xl font-bold text-white text-center">{t('sections.experiences')}</h1>
                                <div className="flex flex-col text-center">
                                    <h2 className="text-lg font-semibold text-white" style={style}>{t('experiences.role')}</h2>
                                    <p className="text-sm text-white/70" style={style}>{t('experiences.dates')}</p>
                                </div>
                            <Separator className="bg-zinc-800"/>
                            <p className="text-lg text-center leading-relaxed text-white" style={style}>
                                {t('experiences.description')}
                            </p>
                        </div>
                </div>
        </>
    );
}