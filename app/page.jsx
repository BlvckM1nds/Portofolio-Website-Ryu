import { FiDownload } from "react-icons/fi";

import { Button } from "../components/ui/button";
import Socials from "../components/home/Socials";
import Photo from "../components/home/Photo";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m<br /><span className="text-accent">Ryu Alvano</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-secondary/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur quaerat id sapiente saepe facilis quisquam possimus cum? Aspernatur provident harum rem velit expedita veritatis?
            </p>

            {/* Buttons and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 aspect-square border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
