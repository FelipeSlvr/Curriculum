import { Separator } from "@/components/ui/separator";

export const Expertise = () => {
    return (
        <div className="w-full max-w-[950px] gap-4 flex flex-row">
            <Separator className="bg-border/60" orientation="vertical" />
            <div className="terminal-panel p-4 gap-4 md:flex-col flex-grow">
                <h1 className="text-foreground text-2xl mb-2 font-bold text-center terminal-heading">Professional Summary</h1>
                <p className="text-foreground text-xl text-left leading-relaxed">
                    Dynamic software developer with three years of professional experience and a strong foundation in coding since high school. Open to continuous learning and staying updated with the latest technologies and industry best practices. Willing to contribute innovative solutions and give development ideas in a collaborative team environment.
                </p>
            </div>
            <Separator className="bg-border/60" orientation="vertical" />
        </div>
    );
}