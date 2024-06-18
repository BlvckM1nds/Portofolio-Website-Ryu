import { ScrollArea } from "../ui/scroll-area";
import educations from "../../data/resume/educations";

export default function Educations() {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="h3">
        {educations.title}
      </h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {educations.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {educations.items.map(({ institution, degree, duration }, index) => (
            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
              <span className="text-accent">{duration}</span>
              <h4 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {degree}
              </h4>
              <div className="flex items-center gap-3">
                <span className="w-[6px] aspect-square bg-accent rounded-full"></span>
                <p className="text-white/60 leading-normal">{institution}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};