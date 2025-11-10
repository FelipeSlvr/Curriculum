import { CSSProperties } from "react"

export const About = () => {

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
                        <h1 className="text-5xl font-bold text-white">Felipe Silveira</h1>
                        <h2 className="text-2xl font-bold text-white">Full-Stack Developer and Data Scientist</h2>
                        <p className="text-lg leading-relaxed text-white" style={style}>
                        Dynamic software developer with three years of professional experience and a strong foundation in coding since high school. Open to continuous learning and staying updated with the latest technologies and industry best practices. Willing to contribute innovative solutions and give development ideas in a collaborative team environment.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
