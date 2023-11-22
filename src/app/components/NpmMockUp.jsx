import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { Ubuntu_Mono } from "next/font/google";

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });
const NpmMockUp = () => {
  return (
    <>
      <div
        style={ubuntu.style}
        className=" bg-zinc-600 opacity-20 p-5 rounded-2xl w-72"
      >
        <div className="flex gap-2 text-sm text-zinc-400">
          <span>
            <BsFillCircleFill />
          </span>
          <span>
            <BsFillCircleFill />
          </span>
          <span>
            <BsFillCircleFill />
          </span>
        </div>
        <div className="pt-5">
          <div className="flex">
            <span className="pr-5 text-zinc-400">$</span>
            <span>npm i package</span>
          </div>
          <div className="">
            <span className="pr-5 text-zinc-400"> {">"}</span>
            <span>installing...</span>
          </div>
          <div className="">
            <span className="pr-5 text-zinc-400"> {">"}</span>
            <span>Done!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NpmMockUp;
