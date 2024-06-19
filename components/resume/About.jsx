import about from "../../data/resume/about.json";

export default function About() {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="h3">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
        {about.info.map(({ fieldName, fieldValue }, index) => (
          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-white/60">{fieldName}</span>
            <span className="text-xl">{fieldValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};