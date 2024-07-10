// app/ahall/[id]/page.js
import Facilities from '@/components/ui/Facilities';
import Gallery from '@/components/ui/Gallery';
import { notFound } from 'next/navigation';

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
        <h1 className="text-2xl text-center font-semibold text-gray-800">{ahall.hallName}</h1>
        <Gallery images={ahall.images} />
        </div>


        <div className="col-span-3 bg-yellow-200 ">
          <Facilities/>
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
