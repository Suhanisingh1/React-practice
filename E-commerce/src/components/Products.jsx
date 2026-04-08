import React from "react";
// import { dummy } from "../dummydata";
// import Home from "../pages/home/Home";
import headphone from '../../src/assets/headphone.webp'
const Products = ({name,image,price,id}) => {
  
  return (
    <>
   
    <div className="w-80 mb-4 h-96 bg-white shadow-2xl rounded-xl p-3 flex items-center justify-between flex-col">
      <img className="object-cover w-[300px] h-[250px] " src={image} alt="" />
      <div className="flex items-start flex-col justify-start gap-3 font-semibold">
        <span >{name}</span>
        <span> {price}</span>
        <button className="pl-3 pr-5 border-none rounded-lg font-bold bg-black text-white">Add+</button>
      </div>
    </div>
      {/* <div>
        <div  className="  shadow-2xl w-full flex justify-center items-center gap-14 flex-wrap  hover:border-green-500">
          {dummy.map((item) => (
            <div className="w-[300px] h-[350px] flex items-start justify-center flex-col   hover:border-green-600 hover:shadow-2xl hover:shadow-slate-700 hover:bg-blend-color-burn object-cover cursor-pointer p-5 border-black border-spacing-4 border-2 rounded-2xl">
              <img
                className="  w-full h-[200px]  object-cover cursor-pointer p-5  rounded-2xl  "
                src={item.img}
                alt=""
              />
              <span className="mt-3 text-lg">{item.name}</span>
              <p className="">{item.category}</p>
              <p>{item.price}</p>
              <button className="bg-black text-white p-1 w-16 rounded-lg">
                Add
              </button>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Products;
