import React from "react";
import books from "../../public/books.jpeg"; 

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:m-32">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold ">
            {" "}
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500"> new everyday!!!</span>
          </h1>

          <p className="text-xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quasi aliquid nulla id distinctio suscipit ratione. Officia
            repudiandae saepe sunt. Aliquam cum quod, adipisci rem fugit non
            officia blanditiis. Itaque.
          </p>
          </div>
          
         <div className="mt-12">
            <label className="border-2 border-black p-1 "> 
        <input type="email" placeholder="📩 Enter your Email" 
        className="w-96 outline-none"/>
      </label>
         </div>
         <button className="bg-amber-400 p-1 border-2 border-black mt-8 w-20 rounded-lg font-semibold text-white">Click</button>
      </div>
        <div className=" order-1 w-full md:w-1/2 mt-14">
        <img src={books} className="w-90 h-110" alt=""/>
        </div>
      </div>
    </>
  );
};

export default Banner;
