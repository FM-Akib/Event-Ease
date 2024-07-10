import React from 'react';
import { MdOutlineChair } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { BsCarFrontFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BiSolidBuildingHouse } from "react-icons/bi";





const Capacity = ({ahall}) => {
    return (
       
  <section id="features" class="container mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20">

    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-1 text-center">

        <h2 class="font-semibold text-xl text-gray-700 leading-[1.1] sm:text-xl md:text-3xl">The capacity of this {ahall.type}</h2>

</div>

<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <MdOutlineChair  class="h-12 w-12 fill-current" />
            <div class="space-y-2">
                <h3 class="font-bold">Guest Capacity</h3>
                <p class="text-md text-muted-foreground font-semibold text-emerald-500">{ahall.guestCapacity}</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <MdTableBar class="h-12 w-12 fill-current" />
            <div class="space-y-2">
                <h3 class="font-bold">Table Batch</h3>
                <p class="text-md font-semibold text-emerald-500 ">{ahall.tableBatch}</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <HiHome class="h-12 w-12 fill-current" />
            <div class="space-y-2">
                <h3 class="font-bold">Areas</h3>
                <p class="text-md font-semibold text-emerald-500  text-muted-foreground">{ahall.areas} sq ft.</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <BsCarFrontFill class="h-12 w-12 fill-current" />
            <div class="space-y-2">
                <h3 class="font-bold">Parking</h3>
                <p class="text-md font-semibold text-emerald-500  text-muted-foreground">{ahall.parkingAreas}+</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <BiSolidBuildingHouse   class="h-12 w-12 fill-current" />
            <div class="space-y-2">
                <h3 class="font-bold">Floor</h3>
                <p class="text-md font-semibold text-emerald-500  text-muted-foreground">{ahall.floor}</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <HiBuildingOffice2  class="h-12 w-12 fill-current" />
            <div class="space-y-2">
                <h3 class="font-bold">Dedicated Building</h3>
                <p class="text-md font-semibold text-emerald-500  text-muted-foreground">{ahall.dedicatedBuilding}</p>
            </div>
        </div>
    </div>

</div>

  </section>  
      
    );
};

export default Capacity;