import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const ProjectCard = () => {
  return (
    <>  <div className="flex">
    <div className="">
      <Image
        className="rounded-t-2xl"
        src={"/Desktop - 1.png"}
        width={500}
        height={500}
        alt="project"
      />
      <div className=" flex item-center justify-between text-3xl bg-zinc-800 rounded-b-2xl py-5 px-5">
        <div>Project</div>
        <div className="flex items-center -rotate-45">
          <FaArrowRight />
        </div>
      </div>
    </div>
  </div></>
  )
}

export default ProjectCard