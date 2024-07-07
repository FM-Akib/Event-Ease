"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../app/globals.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import img1 from '../../assets/Hero1.png';
import img2 from '../../assets/Hero2.png';
import img3 from '../../assets/Hero3.png';
import img4 from '../../assets/Hero4.png';
import img5 from '../../assets/Hero5.png';

const Hero = () => {
    return (
        <>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>   
        <div class=" flow-root ">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src={img1} width="2432" height="542" alt="hero image" class="rounded-md object-fill shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>   
        <div class=" flow-root ">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src={img2} width="2432" height="542" alt="hero image" class="rounded-md object-fill shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>   
        <div class=" flow-root ">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src={img3} width="2432" height="542" alt="hero image" class="rounded-md object-fill shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>   
        <div class=" flow-root ">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src={img4} width="2432" height="542" alt="hero image" class="rounded-md object-fill shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>   
        <div class=" flow-root ">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src={img5} width="2432" height="542" alt="hero image" class="rounded-md object-fill shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
        </div>  
        </SwiperSlide>
        


      </Swiper>   
        </>
    );
};

export default Hero;