import Image from "next/image";
import React from "react";

const avatar = {
  desc: "  I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.",
  desc: "  I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.",
};
const Skills = [
  { name: "HTML", progress: "w-[95%]" },
  { name: "CSS", progress: "w-[95%]" },
  { name: "JS", progress: "w-[85%]" },
  { name: "React", progress: "w-[80%]" },
  { name: "Next", progress: "w-[75%]" },
  { name: "Tailwind", progress: "w-[90%]" },
  { name: "Figma", progress: "w-[95%]" },
  { name: "AdobeXD", progress: "w-[95%]" },
  { name: "Photoshop", progress: "w-[85%]" },
  { name: "Framer", progress: "w-[80%]" },
];

const About = () => {
  return (
    <>
      <div id="About">
        <div className="w-full text-4xl text-center pb-5">About</div>
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 flex-col lg:grid-rows-3 md:grid-rows-4">
          <profile className="order-1 row-span-1">
            <div className=" p-2 relative flex justify-center items-center flex-col rounded-2xl bg-zinc-800 text-xl">
              <Image
                className="w-1/2 md:w-1/2 rounded-full"
                src={"/Divyang.png"}
                alt=""
                height={350}
                width={350}
              />
              <div className="text-2xl font-medium leading-1  pt-3">
                Divyang Prajapati
              </div>
              <div>Frontend Developer</div>
            </div>
          </profile>
          <profile className="order-2 md:order-3 lg:order-last">
            <div className=" p-2 flex justify-center items-center flex-col rounded-2xl bg-zinc-800 text-xl">
              <Image
                className="w-1/2 md:w-1/2 rounded-full"
                src={"/Divyang.png"}
                alt=""
                height={350}
                width={350}
              />
              <div className="text-2xl font-medium leading-1  pt-3">
                Khyati Shah
              </div>
              <div>ui/ux & Graphics Designer</div>
            </div>
          </profile>
          <skill id="EXP" className="flex md:order-4 flex-col gap-2 order-3 lg:order-3 row-span-3 ">
            <div className="text-3xl bg-zinc-800 w-full px-6 py-2 rounded-xl">
              Our Skils
            </div>
            <div className="bg-zinc-800 w-full px-6 pt-4 pb-6 rounded-xl">
              {Skills.map((e) => {
                return (
                  <div key={e.name}>
                    <div className="mt-2">{e.name}</div>
                    <div className="bg-zinc-500 w-full rounded-sm h-1 ">
                      <div
                        className={`h-1 bg-indigo-500 rounded-sm ${e.progress}`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </skill>
          <div className="flex flex-col gap-2 md:order-2 order-4 lg:order-4 lg:row-span-3 md:row-span-4 row-span-1">
            <div className="bg-zinc-800 rounded-xl py-2 px-6">
              <div className="text-3xl">What we do</div>{" "}
            </div>
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="text-3xl pb-2">Branding</div>{" "}
              <div>
                {` Unveil your brand's essence through a meticulous blend of
                imagery, messaging, and strategy. Crafting identities that
                resonate and endure.`}
              </div>
            </div>
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="text-3xl pb-2">Design</div>
              <div>
                Designing experiences that captivate users from the first click.
                Intuitive interfaces that lead to seamless interactions.
              </div>
            </div>
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="text-3xl pb-2">Development</div>
              <div>
                Translating visions into dynamic digital solutions. From
                responsive websites to interactive applications, driving
                innovation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
