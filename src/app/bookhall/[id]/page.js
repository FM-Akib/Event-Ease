// BookHallPage.jsx

import BookHall from "@/components/ui/BookHall";

const fetchHallData = async (id) => {
  const res = await fetch(`http://localhost:5000/halls/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const BookHallPage = async ({ params }) => {
  const ahall = await fetchHallData(params.id);

  return <BookHall hall={ahall} />;
};

export default BookHallPage;
