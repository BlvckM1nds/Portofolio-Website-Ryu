"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { motion } from "framer-motion";

import Experiences from "../../components/resume/Experiences";
import Educations from "../../components/resume/Educations";
import Skills from "../../components/resume/Skills";
import About from "../../components/resume/About";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <Experiences />
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <Educations />
            </TabsContent>
            {/* Skill */}
            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <About />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};