import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GrStatusGood } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";


const HallPage = async() => {
    const res = await fetch('http://localhost:5000/halls',{
        cache: 'no-store',
    });
    const data = await res.json();
    return (
     <>

     
        <div class="py-12">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-4xl ">Find your event hall</h2>
            <p class="text-gray-600  lg:mx-auto lg:w-6/12">
            Virtual Tours of Community Centers
      </p>
    </div>

    <div class="lg:w-3/4 xl:w-3/4 lg:mx-auto">

    { 
            data.map((hall) => (
                <div key={hall._id} class="mb-5 group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white  border border-transparent hover:border-gray-100  shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                <div class="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                  <Image
                    src={hall.images[0]}
                    alt="art cover"
                    loading="lazy"
                    width={1000}
                    height={667}
                    class="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div class="sm:p-2 sm:pl-0 sm:w-4/6">
                  <span class="mt-4 mb-2  font-medium text-gray-400  flex items-center justify-between sm:mt-0"> 
                    <span class="flex items-center"> <IoLocationOutline class="mr-1" />{hall.location} </span> 
                    <span class="flex items-center"> <GrStatusGood class="mr-1" />{hall.type} </span>
                    </span>
                  <h3 class="text-2xl font-semibold text-gray-800 flex items-center justify-between">
                   {hall.hallName}  <span> <Link href="/"><button class="text-sm bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-md flex items-center "> View <FaCircleArrowRight class="ml-1" /></button></Link>  </span>
                  </h3>
                  <p class="my-6 text-gray-600 ">
                   {hall.description.length>300 ? hall.description.slice(0,200)+'...': hall.description}
                  </p>
      
                  <div class="flex gap-4 flex-wrap">
                    {
                        hall.facilities.map((afacility,i)=><span  key={i} class="px-3 py-1 rounded-full border border-gray-200 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white  ">
                            {afacility}
                          </span> )
                    }
                
                  </div>
                </div>
              </div>
            ))
        }



      
    </div>
  </div>
</div>
                                    

        </>
    );
};

export default HallPage;