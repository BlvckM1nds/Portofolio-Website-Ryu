"use client";

import { motion } from "framer-motion";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../components/ui/select";

import { info } from "../../data/info";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl">
              <h3 className="h3 text-accent">Let&apos;s work together!</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor iste sed recusandae eum, ratione quisquam!</p>
              {/* Input */}
              <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
                <Input type="fullName" placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
                <Input type="domicile" placeholder="Domicile" />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Data Analytics</SelectItem>
                    <SelectItem value="gst">Graphic Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here ..."
              />
              {/* Submit Button */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map(({ icon, title, description }, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] xl:w-[72px] aspect-square bg-[#27272C] text-accent flex items-center justify-center rounded-md">
                    <div className="text-[28px]">{icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{title}</p>
                    <h3 className="text-xl">{description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};