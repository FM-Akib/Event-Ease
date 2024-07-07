import Image from 'next/image';
import React from 'react';

const page = () => {
    return (

        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

      <div className="bg-[url('https://i.ibb.co/c6MmyWF/abby-savage.jpg')] bg-cover bg-center h-screen w-full">
        
        <div class="m-auto xl:container  px-12 sm:px-0 mx-auto ">
        <div class="mx-auto h-full sm:w-max">
          <div class="m-auto  py-12">
            <div class="space-y-4">
              {/* <a href=""> */}
                {/* <Image src="https://i.ibb.co/8xvPxSF/Event-Ease.png" class="w-40 " width={144} height={68} alt="logo" /> */}
                {/* <img src="images/logo.svg" class="w-40 hidden dark:block" alt="tailus logo" /> */}
              {/* </a> */}
            </div>
          <div class="mt-12 rounded-3xl border bg-gray-50 -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 class="text-2xl font-semibold text-gray-700 ">Login to your account</h3>
            <div class="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
              <button
                class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 "
              >
                <div class="w-max mx-auto flex items-center justify-center space-x-4">
                  {/* <img src="images/google.svg" class="w-5" alt="" /> */}
                  <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 "
                    >With Google</span
                  >
                </div>
              </button>
              <button
                class="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 "
              >
                <div class="w-max mx-auto flex items-center justify-center space-x-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                  <span class="block w-max text-sm font-semibold tracking-wide text-white"
                    >With Github</span
                  >
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
                <button type="reset" class="-mr-3 w-max p-3">
                  <span class="text-sm tracking-wide text-sky-600 ">Forgot password ?</span>
                </button>
              </div>
      
              <div>
                <button
                  class="w-full rounded-full bg-sky-500  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                >
                  <span class="text-base font-semibold text-white ">Login</span>
                </button>
                <button href="#" type="reset" class="-ml-3 w-max p-3">
                  <span class="text-sm tracking-wide text-sky-600 ">Create new account</span>
                </button>
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