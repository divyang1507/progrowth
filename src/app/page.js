import Image from "next/image";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import Homepage from "./Homepage/Homepage";

export default function Home() {
  return (
    <>
      <div className="px-2">
        <div className="md:snap-center mb-48 h-full md:h-screen md:mb-0 ">
          <Homepage />
        </div>
        <div className="md:snap-center mb-48 md:mb-0">
          <About />
        </div>
        <div className="md:snap-center">
          <Project />
        </div>
        <div className="md:snap-center">
          <Contact />
        </div>
      </div>
    </>
  );
}
