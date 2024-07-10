import React from 'react';
import { PiCheckCircleDuotone } from "react-icons/pi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";



const Pricing = ({hall}) => {
    return (

        <div class="xl:container m-auto px-6 py-20 ">
  
        <div class="mt-2 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
      
      
          <div class="group relative row-start-1 md:col-span-2 ">
            <div
              aria-hidden="true"
              class="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10  transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div class="relative space-y-8 p-8">
              <h3 class="text-center text-3xl font-semibold text-gray-700 ">Cost Chart</h3>
              <div class="overflow-hidden">
                <div class="-mr-20 flex items-end justify-center">
                  <div class="flex">
                    <span class="-ml-6 mt-2 text-3xl font-bold text-primary">*</span>
                    <span class="leading-0 text-8xl font-bold text-gray-800 ">{hall.price.discount}</span>
                  </div>
                  <div class="mb-2">
                    {/* <span class="block text-xl font-bold text-gray-500 ">.56</span> */}
                    <span class="block text-xl font-bold text-primary">% Discount</span>
                  </div>
                </div>
                <div class="text-center text-2xl font-medium">
                  <span class="text-gray-400 line-through">15%</span>
                  <span class="font-semibold text-gray-700 ">20%</span>
                </div>
                <span class="block text-center text-xs uppercase text-primary">For 24 hours</span>
                <span
                  class="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-yellow-900"
                  >Basic Prices (varies)</span
                >
              </div>
              <ul role="list" class="m-auto w-max space-y-4 pb-6 text-gray-600 ">
                <li class="space-x-2 flex items-center">
                  <span class="font-semibold text-primary"><PiCheckCircleDuotone class="text-emerald-500" /></span>
                  <span>Day with Ac - {hall.price.dayAc}৳</span>
                </li>
                <li class="space-x-2 flex items-center">
                  <span class="font-semibold text-primary"><PiCheckCircleDuotone class="text-emerald-500" /></span>
                  <span>Day without Ac - {hall.price.dayNonAc}৳</span>
                </li>
                <li class="space-x-2 flex items-center">
                  <span class="font-semibold text-primary"><PiCheckCircleDuotone class="text-emerald-500" /></span>
                  <span>Night with Ac - {hall.price.nigthAc}৳</span>
                </li>
                <li class="space-x-2 flex items-center">
                  <span class="font-semibold text-primary"><PiCheckCircleDuotone class="text-emerald-500" /></span>
                  <span>Night without Ac - {hall.price.nigthNonAc}৳</span>
                </li>
              </ul>
              <button class="relative flex h-11 bg-emerald-700 hover:bg-emerald-600 rounded-md w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-base font-semibold text-white flex items-center">Book Now <IoArrowForwardCircleOutline class="ml-1 text-xl" /></span>
              </button>
            </div>
          </div>
      
      
        </div>
      </div>
                                          
    );
};

export default Pricing;