import { CSSProperties } from "react"
import { useTranslation } from 'react-i18next'

export const About = () => {
    const { t } = useTranslation();

    const style : CSSProperties = {
    fontFamily: "Mulish, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "normal",
    fontStyle: "normal",
    };

    return (
        <>
            <div id="about" className="py-10 max-w-[880px] px-5 ml-4 md:ml-[100px] lg:ml-[5px] flex flex-col gap-6 justify-center items-center">
                <div className="w-full max-w-[800px] p-4 gap-4 flex flex-col md:flex-row">
                    <div className="flex flex-col mt-4 gap-6 md:mt-0">
                        <h1 className="text-5xl font-bold text-white">{t('about.name')}</h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-white">{t('about.title')}</h2>
                        <p className="text-lg leading-relaxed text-white/90" style={style}>
                            {t('about.summary')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
