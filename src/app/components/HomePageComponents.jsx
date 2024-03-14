import Link from 'next/link';
import React from 'react'

const Hero = () => {
    return (
      <>
        {/* Hero */}
  
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center my-20">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white text-center sm:text-start">
          CHEST MEDICINE,{" "}
            <span className="text-blue-500">Respiratory Wellness with Dr. Tarun Sharma.</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400 text-center sm:text-start">
          ✅	Diagnosis and Treatment: Respiratory condition identification, intervention.
          <br/>
          ✅ Pulmonary Function: Lung capacity assessment, airflow optimization.
          <br />
          ✅ Preventive Care: Smoking cessation, vaccination, environmental education.


          </p>
          {/* Buttons */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex" >
            <a
              className="py-3 px-4 inline-flex transition-all duration-500 justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#appoint"
            >
              Appointment
              <svg
                className="flex-shrink-0 w-4 h-4 animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <a
              className="py-3 px-4 inline-flex justify-center transition-all duration-500 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/"
            >
              Contact
            </a>
          </div>
          {/* End Buttons */}
        </div>
        {/* End Col */}
        <div className="hidden md:block relative ms-4 ">
          <img className="w-full rounded-3xl shadow-lg shadow-blue-300" src="./drlogo.png" alt="hero" />
          {/* SVG*/}

          {/* End SVG*/}
        </div>
        {/* End Col */}
      </div>
        {/* End Grid */}
        {/* End Hero */}
      </>
    );
  };

  const About = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id='about'>
              <h1 className="text-2xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-white sm:mb-10 mb-5 text-center">
        About
      </h1>
            <img src="about-hero.png" className='w-full' alt="about" />
        </div>
    )
  }

  const Services = () => {
    return (
            
      <>
  {/* Team */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <h1 className="text-2xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-white sm:mb-10 mb-5 text-center">
        Services
      </h1>
    {/* End Title */}
    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border">
      <div className="text-center">
        <img
          className="rounded-xl sm:size-80 lg:size-96 object-contain mx-auto transition duration-300 ease-in-out hover:scale-110"
          src="serv-1.png"
          alt="Image Description"
        />
      
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-80 lg:size-96 object-contain mx-auto transition duration-300 ease-in-out hover:scale-110"
          src="serv-2.png"
          alt="Image Description"
        />
      
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-80 lg:size-96 object-contain mx-auto transition duration-300 ease-in-out hover:scale-110"
          src="serv-3.png"
          alt="Image Description"
        />
      
      </div>
      <div className="text-center">
        <img
          className="rounded-xl sm:size-80 lg:size-96 object-contain mx-auto transition duration-300 ease-in-out hover:scale-110"
          src="serv-4.png"
          alt="Image Description"
        />
                    {/* Designed and Developed by Mumin Bhat. www.muminbhat.com */}
      </div>
      <div className="text-center">
        <img
          className="rounded-xl sm:size-80 lg:size-96 object-contain mx-auto transition duration-300 ease-in-out hover:scale-110"
          src="serv-5.png"
          alt="Image Description"
        />
      
      </div>
      <div className="text-center">
        <img
          className="rounded-xl sm:size-80 object-contain lg:size-96 mx-auto transition duration-300 ease-in-out hover:scale-110"
          src="serv-6.png"
          alt="Image Description"
        />
      
      </div>
      <div className="text-center">
        <img
          className="rounded-xl sm:size-80 lg:size-96 object-contain mx-auto transition duration-300 ease-in-out hover:scale-110"
          src="serv-7.png"
          alt="Image Description"
        />
      
      </div>
       <div className="text-center">
        <img
          className="rounded-xl sm:size-80 lg:size-96 object-contain mx-auto transition duration-300 ease-in-out hover:scale-110"
          src="serv-8.png"
          alt="Image Description"
        />
      
      </div>
      
    </div>
    {/* End Grid */}
  </div>
  {/* End Team */}
</>
    )
  }

  



  export {Hero, About, Services}