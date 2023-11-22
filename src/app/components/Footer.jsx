import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-zinc-900">
        <div class="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            ProGrowth
          </a>
          {/* <p class="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and interactive elements built for better web.</p> */}
          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link href="#Home" class="mr-4  md:mr-6 ">
                Home
              </Link>
            </li>
            <li>
              <Link href="#About" class="mr-4  md:mr-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#Project" class="mr-4  md:mr-6 ">
                Project
              </Link>
            </li>
            <li>
              <Link href="#Contact" class="mr-4  md:mr-6">
                Contact
              </Link>
            </li>

          </ul>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2022{" "}
            <a href="#" class="">
              ProGrowth
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
