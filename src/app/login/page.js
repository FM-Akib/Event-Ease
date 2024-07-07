import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
const page = () => {
    return (

        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

      <div className="bg-[url('https://i.ibb.co/c6MmyWF/abby-savage.jpg')] bg-cover bg-center h-screen w-full">
        
        <div class="m-auto xl:container  px-12 sm:px-0 mx-auto ">
        <div class="mx-auto h-full sm:w-3/12">
          <div class="m-auto  py-12">
          
          <div class="mt-12 rounded-3xl border bg-gray-50/85 -mx-6 sm:-mx-10 p-8 sm:p-10 ">
            <h3 class="text-2xl font-semibold text-gray-700 ">Login to your account</h3>
            <div class="mt-12 flex flex-wrap ">
              <button
                class="w-full h-11  rounded-xl border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 "
              >
                <div class="w-full mx-auto flex items-center justify-center space-x-4">
                  {/* <img src="images/google.svg" class="w-5" alt="" /> */}
                  <span class=" w-max text-sm font-semibold tracking-wide text-cyan-700 flex items-center justify-center"
                    ><FcGoogle className='mr-1 text-2xl' /> Sign in with Google </span>
                </div>
              </button>
             
            </div>
      
            <form action="" class="mt-10 space-y-8 ">
              <div>
                <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input id="" type="email" placeholder="Your email or user name" class="w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition"/>
                </div>
              </div>
      
              <div class="flex flex-col items-end">
                <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input id="" type="Your password" placeholder="Your answer" class="w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition"/>
                </div>
                {/* <button type="reset" class="-mr-3 w-max p-3">
                  <span class="text-sm tracking-wide text-sky-600 ">Forgot password ?</span>
                </button> */}
              </div>
      
              <div>
                <button
                  class="w-full rounded-xl bg-sky-500  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                >
                  <span class="text-base font-semibold text-white ">Login</span>
                </button>
                <Link href="/signup">
                <button href="#" type="reset" class="-ml-3 w-max p-3">
                  <span class="text-sm tracking-wide text-sky-600 ">Create new account? Signup</span>
                </button>
                </Link>
              </div>
            </form>
          </div>
           
          </div>
        </div>
      </div>

      </div>
      </div>                                  
    );
};

export default page;