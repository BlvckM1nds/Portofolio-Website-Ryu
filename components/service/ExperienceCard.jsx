import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

export default function ExperienceCard({ service: { num, href, title, description } }) {
  return (
    <div className="flex-1 flex flex-col justify-center gap-6 group">
      <div className="w-full flex justify-between items-center">
        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">{num}</div>
        <Link
          href={href}
          className="w-[70px] aspect-square rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex items-center justify-center hover:-rotate-45"
          target="_blank"
        >
          <BsArrowDownRight className="text-primary text-3xl" />
        </Link>
      </div>
      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">
        {title}
      </h2>
      <p className="text-white/60">{description}</p>
      <hr className="border-white/20 w-full" />
    </div>
  );
};