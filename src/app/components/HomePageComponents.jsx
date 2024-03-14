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
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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

  const BookAppointment = () => {
    return (
<>
<>
  {/* Appointment */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id='appoint'>
    <div className="max-w-2xl lg:max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Book Appointment
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          We'd love to talk about how we can help you.
        </p>
      </div>
      <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
        {/* Card */}
        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Fill in the form
          </h2>
          <form>
            <div className="grid gap-4">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="hs-firstname-contacts-1"
                    className="py-3 px-4 block border w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="hs-lastname-contacts-1"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {/* End Grid */}
              <div>
                <label htmlFor="hs-email-contacts-1" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="hs-email-contacts-1"
                  autoComplete="email"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="hs-phone-number-1" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  id="hs-phone-number-1"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="hs-about-contacts-1" className="sr-only">
                  Details
                </label>
                <textarea
                  id="hs-about-contacts-1"
                  name="comments"
                  rows={4}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Details"
                  defaultValue={""}
                />
              </div>
              {/* Designed and Developed by Mumin Bhat. www.muminbhat.com */}
            </div>
            {/* End Grid */}
            <div className="mt-4 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Send inquiry
              </button>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We'll get back to you as soon as possible.
              </p>
            </div>
          </form>
        </div>
        {/* End Card */}
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {/* Icon Block */}
          <div className="flex gap-x-7 py-6">
            <svg
              className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200"
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
              <circle cx={12} cy={12} r={10} />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                Phone & WhatsApp
              </h3>
              <p className="mt-1 text-sm text-gray-500">
              9650328664
              </p>
             
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-7 py-6">
            <svg
              className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200"
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
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                Email
              </h3>
              <p className="mt-1 text-sm text-gray-500">
              pulmonologist.dr.tarunsharma@gmail.com
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className=" flex gap-x-7 py-6">
            <svg
              className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200"
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
              <path d="m7 11 2-2-2-2" />
              <path d="M11 13h4" />
              <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                Website
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                www.drtarunsharma.com
              </p>
             
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className=" flex gap-x-7 py-6">
            <svg
              className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200"
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
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                Full Address
              </h3>
              <p className="mt-1 text-sm text-gray-500">
              Ananta Care, Shop No 8, plot no 11, pocket-H main market, Sarita Vihar, New Delhi - 110076.
              </p>
              <a
                className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                tarunsharma.com
              </a>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
    </div>
  </div>
  {/* End Appointment */}
</>

</>

    )
  }



  export {Hero, About, Services, BookAppointment}