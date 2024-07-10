// app/ahall/[id]/page.js
import Capacity from '@/components/ui/Capacity';
import Facilities from '@/components/ui/Facilities';
import Gallery from '@/components/ui/Gallery';
import { notFound } from 'next/navigation';
import { IoLocationOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { PiShieldStarLight } from "react-icons/pi";
import Pricing from '@/components/ui/Pricing';

const fetchHallData = async (id) => {
  const res = await fetch(`http://localhost:5000/halls/${id}`, {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const AHall = async ({ params }) => {
  try {
    const ahall = await fetchHallData(params.id);

    if (!ahall) {
      return notFound();
    }


    const getYouTubeVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
      };
    
      const videoId = getYouTubeVideoId(ahall.video);

    return (
      <div className="px-20 py-10">

        <div className="grid grid-cols-10 w-full ">
        
        <div className="col-span-7 ">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-semibold text-gray-800 flex items-center justify-center"><RiCommunityLine  className='mr-1'/>{ahall.hallName}</h1>
        <p className="text-gray-600 flex items-center justify-center bg-slate-100 mt-1 px-2 rounded-md"><IoLocationOutline className='mr-1'/>{ahall.location}</p>
        </div>

        <Gallery images={ahall.images} />
        <div className="mt-2 text-gray-700">
            <p>
            {ahall.description}
            </p>
            <hr className="my-1 md:my-2" />
            <p>
              <span className="font-semibold text-gray-600">History:</span>  {ahall.history}
            </p>
        </div>
        <Capacity ahall={ahall}/>

        <div className="my-4 flex flex-col justify-center">
            <p className="mb-2 flex items-center justify-start font-semibold text-gray-600"> <PiShieldStarLight className="mr-1" />Virtual tour of our {ahall.type}.</p>
        {videoId ? (
          <iframe
            width="820"
            height="440"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        ) : (
          <p>Invalid YouTube URL</p>
        )}
      </div>

        </div>
        




      {/* sidebar */}

        <div className="col-span-3 ">
          <Facilities ahall={ahall}/>
          <Pricing hall={ahall}/>
        </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching hall data:', error);
    return notFound();
  }
};

export default AHall;
