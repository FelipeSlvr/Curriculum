import { Separator } from "@/components/ui/separator";
import { CSSProperties } from "react";
import { useTranslation } from 'react-i18next';

export const Education = () => {
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
                            <h1 className="text-2xl font-bold text-center text-white">{t('sections.education')}</h1>
                            <h2 className="text-lg text-center text-white" style={style}>{t('education.dsDegree')}</h2>
                            <p className="text-sm text-white/70" style={style}>{t('education.dsUniversity')} • {t('education.dsDates')}</p>
                            <Separator className="bg-zinc-800"/>
                                    <h2 className="text-lg text-center text-white" style={style}>{t('education.itDegree')}</h2>
                                    <p className="text-sm text-white/70" style={style}>{t('education.itUniversity')} • {t('education.itDates')}</p>
                        </div>
                </div>
        </>
    );
}