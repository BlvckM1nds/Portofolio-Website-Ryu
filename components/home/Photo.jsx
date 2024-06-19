"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import fotoRyu from "../../public/assets/ryu-alvano.png";

export default function Photo() {
  return (
    <figure className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.6, duration: 0.4, ease: "easeIn" }
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" }
          }}
          className="w-[298px] xl:w-[502px] aspect-square mix-blend-darken absolute"
        >
          <Image
            src={fotoRyu}
            priority
            quality={100}
            fill
            alt="Ryu Alvano"
            className="object-contain rounded-full"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] aspect-square"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#CA2424"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </figure>
  );
};