'use client';
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"
const Nav = () => {
  const menu = ["Home","About","Project","Contact"]
  return (
    <>
      <div
        className=" bg-zinc-900 h-[5rem] p-2 flex justify-between items-center z-50 sticky top-0"
        id="Home"
      >
        <motion.div
          initial={{ opacity: 0, x:-10 }}
          animate={{ opacity: 1, x:0}}
          transition={{ duration: 0.2 }}
         
          className="text-2xl"
        >
          ProGrowth
        </motion.div>
        <ul className="lg:flex lg:justify-between  lg:gap-10 items-center flex:col hidden">
        {menu.map((e)=>{
          return  (
            <motion.li initial={{ opacity: 0, x:10 }}
          animate={{ opacity: 1, x:0}}
          transition={{ duration: 0.2 }} key={e} className="hover:text-indigo-500">
            <Link href={`#${e}`}>{e}</Link>
          </motion.li>
          )
        })}
        
        </ul>
        {/* <ul className="lg:flex lg:justify-between  lg:gap-10 items-center flex:col hidden">
          <li className="hover:text-indigo-500">
            <Link href={"#home"}>Home</Link>
          </li>
          <li className="hover:text-indigo-500">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="hover:text-indigo-500">
            <Link href={"#project"}>Project</Link>
          </li>
          <li className="hover:text-indigo-500">
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Nav;
