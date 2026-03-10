import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="px-2">
      <div className="w-full bg-white border rounded-lg shadow-md p-4 hover:scale-105 duration-200">
        
        <img
         src={item.image}
         alt=""
          className="w-full h-40 object-cover rounded-md"
        />

        <h2 className="text-lg font-semibold mt-3">
          {item.name}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          {item.title}
        </p>

       <div className="sm:space-x-10 sm:flex md:space-x-36 mt-4">
        <div className="border border-black w-16 text-center bg-yellow-400 text-white ">${item.price}</div>
        <div className="border border-black w-20 text-center bg-yellow-400 text-white">Buy Now</div>
       </div>
    </div>
    </div>
  );
};

export default Cards;
