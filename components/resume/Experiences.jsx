import { ScrollArea } from "../ui/scroll-area";
import experiences from "../../data/resume/experiences.json";

export default function Experiences() {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="h3">
        {experiences.title}
      </h3>
      <p className="max-w-[600px] text-secondary/60 mx-auto xl:mx-0">
        {experiences.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experiences.items.map(({ company, position, duration }, index) => (
            <li key={index} className="bg-[#EEEEEE] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
              <span className="text-accent">{duration}</span>
              <h4 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {position}
              </h4>
              <div className="flex items-center gap-3">
                <span className="w-[6px] aspect-square bg-accent rounded-full"></span>
                <p className="text-secondary/60 leading-normal">{company}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};