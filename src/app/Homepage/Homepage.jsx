"use client";
import Image from "next/image";
import React from "react";
import { BiMouse, BiCircle } from "react-icons/bi";

import { motion } from "framer-motion";
import NpmMockUp from "../components/NpmMockUp";
import Contact from "../Contact/Contact";
const Homepage = () => {
  return (
    <div className="">
      <div className="lg:flex md:flex-row lg:flex-row md:flex flex flex-col-reverse justify-center items-center">
        <left className="flex-col flex md:text-left lg:text-left text-center">
          <div
            className=" lg:text-7xl md:text-6xl text-4xl leading-[1.1] font-extrabold bg-clip-text text-transparent
          bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-50% to-pink-500 to-60%"
          >
            ProGrowth
          </div>
          <div className="  md:text-xl  leading-[1.2] font-normal text-neutral-300">
            Crafting the digital future, one pixel at a time.
          </div>
          <div className=" md:text-base leading-[1.3] font-normal text-neutral-500 pt-2">
            <div>UX/UI Designer, Graphics Designer &</div>
            <div>Frontend Web Developer</div>
          </div>
          <button
            className="rounded-lg bg-indigo-500 px-4 py-2 mt-10 hover:bg-indigo-400 "
           
          >
            Contact us!
          </button>

          <div className="order-5 text-3xl flex gap-2 items-center pt-5 md:pt-10 justify-center lg:justify-normal md:justify-normal">
            <div className="font-light text-xs text-neutral-600">
              Scoll Down{" "}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            >
              {" "}
              <BiMouse className="text-neutral-400" />
            </motion.div>
          </div>
        </left>
        <right className="flex justify-center">
          <img
            src={"https://vitejs.dev/logo-with-shadow.png"}
            alt=""
            className="lg:w-3/4 md:w-full"
          />

          <div className="absolute hidden md:block md:left-1/2 md:top-3/4 -z-10">
            <NpmMockUp />
          </div>
        </right>
      </div>
    </div>
  );
};

export default Homepage;
