"use client"

import React, {useState} from "react";
import axios from 'axios';
import api from "../../api/backend"

const swal = require("sweetalert2");

const BookAppointment = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        comments: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [errorMessage, setErrorMessage] = useState(null); // Use errorMessage state for displaying errors
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await axios.post(
            `${api}api/appointment/post/`,
            formData
          );
          if (response.status === 201) {
            // Contact created successfully
            setLoading(false);
            setErrorMessage(null);
            console.log("Appointment created successfully");
            setSubmitted(true);
            swal.fire({
              title: "Appointment Request Received",
              icon: "success",
              toast: true,
              timer: 6000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.error("Error:", error.response.data);
            setErrorMessage("Failed to contact. Please try again.");
            setLoading(false);
            swal.fire({
              title: "Failed to Contact",
              icon: "error",
              toast: true,
              timer: 5000,
              position: "top-right",
              timerProgressBar: false,
              showCloseButton: true,
              showConfirmButton: false,
            });
          } else {
            console.error("Network Error:", error);
            setErrorMessage("Network error. Please try again later.");
            setLoading(false);
            swal.fire({
              title: "Please Try Again Later",
              icon: "error",
              toast: true,
              timer: 5000,
              position: "top-right",
              timerProgressBar: false,
              showCloseButton: true,
              showConfirmButton: false,
            });
          }
        }
      };
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
          We would love to talk about how we can help you.
        </p>
      </div>
      <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
        {/* Card */}
        {submitted ? (<div
  className="bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white"
  role="alert"
>
  <div className="flex">
    <div className="flex-shrink-0">
      <svg
        className="flex-shrink-0 size-4 mt-1"
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
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    </div>
    <div className="ms-3">
      <h3 className="font-semibold">
        Your request for an appointment has been received.
      </h3>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        We will get back to you soon!
      </div>
      <div className="mt-4">
        <div className="flex space-x-3">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
         >
          </button>
          
        </div>
      </div>
    </div>
  </div>
</div>
) : (
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
                    value={formData.first_name}
                    onChange={handleChange}
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
                    value={formData.last_name}
                    onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.phone_number}
                  onChange={handleChange}
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
                  value={formData.comments}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Details"
                  defaultValue={""}
                />
              </div>
              {/* Designed and Developed by Mumin Bhat. www.muminbhat.com */}
            </div>

            {/* End Grid */}
                {loading ? (
            <div className="mt-4 grid">

               
              <button
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                disabled
              >
            <span
    className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
    role="status"
    aria-label="loading"

  />
                Sending...
              </button>
            </div>
            ) : (

            <div className="mt-4 grid">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >

                Send inquiry
              </button>
            </div>
              )}
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We will get back to you as soon as possible.
              </p>
            </div>
          </form>
        </div>
        )}
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
            <div>
            <img src="./anothermain.png" className="w-[10rem] mt-2 rounded-md" alt="ananta"/>
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

  export default BookAppointment