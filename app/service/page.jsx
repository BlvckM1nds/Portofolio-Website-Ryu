"use client";

import { motion } from "framer-motion";

import services from "../../data/services.json";
import ExperienceCard from "../../components/service/ExperienceCard";

export default function Service() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.6, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <ExperienceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};