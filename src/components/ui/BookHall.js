// BookHall.jsx
"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { BiSend } from "react-icons/bi";

const BookHall = ({ hall }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="px-20 py-10">
      <div className="w-8/12 mx-auto mt-3 flex flex-col border rounded-lg bg-white p-8">
        <section className="w-full max-w-5xl mx-auto px-5 lg:px-0">
          <div className="bg-gray-800 p-6 md:p-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center relative">
            <svg className="absolute right-0 top-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" width="227" height="223" viewBox="0 0 227 223" fill="none">
              <path opacity="0.21" d="M163.766 -28.3772C163.766 -31.8935 161.662 -35.0699 158.422 -36.4473C155.181 -37.8247 151.429 -37.1368 148.891 -34.6996L117.649 -4.71041C71.1338 39.9411 31.8296 91.5182 1.13522 148.185C0.412538 149.459 0 150.932 0 152.501C0 157.345 3.9335 161.271 8.78571 161.271H84.5186V287.378C84.5186 290.852 86.5716 293.998 89.754 295.401C92.9365 296.805 96.6487 296.201 99.2207 293.862L113.199 281.15C162.13 236.652 203.656 184.662 236.217 127.133L244.863 111.856C246.4 109.141 246.377 105.814 244.802 103.121C243.228 100.427 240.339 98.7703 237.214 98.7703H163.766V-28.3772Z" fill="#F2F9FB" fill-opacity="0.4" />
            </svg>
            <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white text-center">Booking <span className=" font-semibold text-yellow-200">{hall.hallName}</span></h3>
          </div>
        </section>
        <p className="my-5 leading-relaxed text-gray-600">Fill the form, {hall.hallName} will get in touch with you shortly over the Phone.</p>
      
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            <div className="mb-4 flex-1">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" {...register('name')} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-4 flex-1">
              <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" {...register('email')} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 flex-1">
              <label htmlFor="contact" className="text-sm leading-7 text-gray-600">Contact Number</label>
              <input type="text" id="contact" name="contact" placeholder="Your contact number" {...register('contact')} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
              {errors.contact && <span>This field is required</span>}
            </div>
            <div className="mb-4 flex-1">
              <label htmlFor="options" className="text-sm leading-7 text-gray-600">Booking Type</label>
              <select id="options" name="options" {...register('options')} className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                <option value="" disabled selected>Select an option</option>
                <option value="Day with AC">Day with AC</option>
                <option value="Day without AC">Day without AC</option>
                <option value="Night with AC">Night with AC</option>
                <option value="Night without AC">Night without AC</option>
              </select>
              {errors.options && <span>This field is required</span>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
            <textarea id="message" name="message" placeholder="Message us about your requirement" {...register('message')} className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <button type="submit" className="rounded border-0 bg-[#1F2937] py-2 px-6 text-lg text-white hover:bg-[#303d48] focus:outline-none flex justify-center items-center">Send<BiSend className='ml-1' />
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
      </div>
    </div>
  );
};

export default BookHall;
