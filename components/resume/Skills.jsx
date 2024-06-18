import { ScrollArea } from "../ui/scroll-area";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { skills } from "../../data/resume/skills";

export default function Skills() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="h3">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills.description}
        </p>
      </div>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 xl:gap-[30px]">
          {skills.items.map(({ name, icon }, index) => (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full aspect-square bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{icon}</div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};