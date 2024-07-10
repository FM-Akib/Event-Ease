// app/ahall/[id]/page.js
import Capacity from '@/components/ui/Capacity';
import Facilities from '@/components/ui/Facilities';
import Gallery from '@/components/ui/Gallery';
import { notFound } from 'next/navigation';
import { IoLocationOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";


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
            <p>
              <span className="font-semibold text-gray-600">History:</span>  {ahall.history}
            </p>
        </div>
        <Capacity ahall={ahall}/>
        </div>
        


        <div className="col-span-3 ">
          <Facilities ahall={ahall}/>
          
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
