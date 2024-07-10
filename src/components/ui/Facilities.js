import React from 'react';
// import { TbAirConditioning } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";

import { MdTableBar } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { BsCarFrontFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BiSolidBuildingHouse } from "react-icons/bi";
const Facilities = ({ahall}) => {
    return (
<section id="features" class="container mx-auto px-4 space-y-6  pt-5">

<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-1 text-center">

    <h2 class="font-semibold text-xl text-gray-700 leading-[1.1] sm:text-xl md:text-3xl">Facilities</h2>

</div>

<div class="mx-auto grid justify-center gap-4 grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

<div
    class=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
    <div class="flex  flex-col items-center justify-between rounded-md p-2">
        <TbAirConditioning   class="h-12 w-12 fill-current text-gray-600 " />
        <div class="space-y-1 mt-1 text-center ">
            <h3 class="font-semibold text-gray-500  ">AC</h3>
            <p class="text-md text-muted-foreground font-semibold ">{ahall.facilities.includes('AC')? <span class="text-emerald-500">Yes</span> : <span class="text-red-500">No</span>}</p>
        </div>
    </div>
</div>

<div
    class=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
    <div class="flex  flex-col items-center  justify-between rounded-md p-2">
        <MdTableBar class="h-12 w-12 fill-current text-gray-600" />
        <div class="space-y-1 mt-1 text-center  ">
            <h3 class="font-semibold text-gray-500 ">Catering</h3>
            <p class="text-md font-semibold  ">{ahall.facilities.includes('Catering')? <span class="text-emerald-500">Yes</span> : <span class="text-red-500">No</span>}</p>
        </div>
    </div>
</div>

<div
    class=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
    <div class="flex  flex-col items-center  justify-between rounded-md p-2">
        <HiHome class="h-12 w-12 fill-current text-gray-600" />
        <div class="space-y-1 mt-1 text-center ">
            <h3 class="font-semibold text-gray-500 ">CCTV</h3>
            <p class="text-md font-semibold   text-muted-foreground">{ahall.facilities.includes('CCTV')? <span class="text-emerald-500">Yes</span> : <span class="text-red-500">No</span>}</p>
        </div>
    </div>
</div>

<div
    class=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
    <div class="flex  flex-col items-center  justify-between rounded-md p-2">
        <BsCarFrontFill class="h-12 w-12 fill-current text-gray-600" />
        <div class="space-y-1 mt-1 text-center ">
            <h3 class="font-semibold text-gray-500 ">Cooking</h3>
            <p class="text-md font-semibold   text-muted-foreground">{ahall.facilities.includes('Cooking')? <span class="text-emerald-500">Yes</span> : <span class="text-red-500">No</span>}</p>
        </div>
    </div>
</div>

<div
    class=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
    <div class="flex  flex-col items-center  justify-between rounded-md p-2">
        <BiSolidBuildingHouse   class="h-12 w-12 fill-current text-gray-600" />
        <div class="space-y-1 mt-1 text-center ">
            <h3 class="font-semibold text-gray-500 ">Generator</h3>
            <p class="text-md font-semibold   text-muted-foreground">{ahall.facilities.includes('Electric Generator')? <span class="text-emerald-500">Yes</span> : <span class="text-red-500">No</span>}</p>
        </div>
    </div>
</div>

<div
    class=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
    <div class="flex  flex-col items-center  justify-between rounded-md p-2">
    <HiBuildingOffice2  class="h-12 w-12 fill-current text-gray-600" />
        <div class="space-y-1 mt-1 text-center ">
            <h3 class="font-semibold text-gray-500 ">Lift</h3>
            <p class="text-md font-semibold   text-muted-foreground">{ahall.facilities.includes('Lift')? <span class="text-emerald-500">Yes</span> : <span class="text-red-500">No</span>}</p>
        </div>
    </div>
</div>

</div>

</section>  

    );
};

export default Facilities;