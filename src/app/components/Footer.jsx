import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
  {/* Grid */}
  <div className="text-center">
    <div>
      <a
        className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href="#"
        aria-label="Brand"
      >
        Dr. Tarun Sharma
      </a>
    </div>
    {/* End Col */}
    <div className="mt-3">
      <p className="text-gray-500">
      OPD Timings:

Monday to Saturday 8 pm to 10 pm
<br />
Sunday 10 am to 12 pm (by appointment only)
      </p>
      <p className="text-gray-500">
        © Dr. Tarun Sharma {year}. All rights reserved.
      </p>
    </div>

  </div>
  {/* End Grid */}
</footer>
  )
}

export default Footer