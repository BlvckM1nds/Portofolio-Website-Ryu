"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import projects from "../../data/work/projects";

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <p className="text-xl text-accent">{project.stack.join(", ")}</p>
            </div>
          </div>
          <div className="w-full xl:w-1/2">slider</div>
        </div>
      </div>
    </motion.section>
  );
};