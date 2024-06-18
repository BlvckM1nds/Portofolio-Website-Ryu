"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import stats from "../../data/home/stats";

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
          }}
          className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none"
        >
          {stats.map(({ num, text }, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={`${text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};