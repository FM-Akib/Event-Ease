"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { RxCrossCircled } from "react-icons/rx";


const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
        <Image
          src={images[0]}
          alt="Large image"
          width={600}
          height={400}
          className="cursor-pointer"
          onClick={() => openModal(images[0])}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.slice(1).map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            width={100}
            height={100}
            className="cursor-pointer"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-4 rounded-md">
            <button
              className="absolute top-2 right-2 bg-white p-1 rounded-full text-black"
              onClick={closeModal}
            >
             <RxCrossCircled className='text-xl' />
            </button>
            <Image
              src={selectedImage}
              alt="Selected image"
              width={500}
              height={300}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
