import React, { useState } from 'react';
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ path, title, year, overview }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayYear = new Date(year).getFullYear();

  if (!path) {
    return null; // Don't render the card if there's no path
  }
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal when clicking outside
  const handleClickOutside = (event) => {
    if (event.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className='w-40 group'>
      <div 
        className="relative border-2 border-transparent group-hover:border-gold transition-all duration-300"
        onClick={openModal} // Open modal on click
      >
        <img 
          alt={title} 
          src={IMG_CDN + path}
          className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-white font-medium text-sm line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-xs">{displayYear}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-overlay"
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div className="bg-black p-1 rounded-lg shadow-lg w-96 max-w-md transform transition-transform duration-300 scale-100">
            <img 
              alt={title} 
              src={IMG_CDN + path}
              className="w-full h-[40vh] rounded-lg mb-4"
            />
            <div className='flex justify-between p-1'>
            <h3 className="text-red-500 font-bold text-xl mb-2">{title}</h3>
            <p className="text-white text-xs mb-4 pr-2 text-lg font-semibold">Release Date: {year}</p>
            </div>
            <h4 className="text-yellow-600 font-semibold text-lg mb-1">Description</h4>
            <p className="text-white text-sm mb-4 italic">{overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;