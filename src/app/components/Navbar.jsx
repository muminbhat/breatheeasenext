"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hrefggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 transition-all duration-300 ease-in-out">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auhref p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="./logo.png"
            alt="Medical Equipments and Solutions"
            className="h-16 w-16 rounded-full"
          />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Breath Ease
          </span>
        </a>
        <div className="flex ">
          <buthrefn
            onClick={hrefggleMenu}
            data-collapse-hrefggle="navbar-search"
            type="buthrefn"
            className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="hs-collapse-open w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            ) : (
              <svg
                className="hs-collapse-open:block w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            )}
          </buthrefn>
          <div
          className={`items-between justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auhref md:order-1 transition-all duration-300 ease-in-out`}
          id="navbar-search"
        >

          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="font-md text-gray-600 hover:text-teal-600 text-lg"
                aria-current="page"
              >
                Home
              </Link>
            </li>
        
            <li>
              <Link
                href="/about"
                className="font-md text-lg text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-gray-500"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                href={"#appoint"}
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Appointment
              </Link>
            </li>
            <li>
          
            </li>
           
          </ul>
        </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
