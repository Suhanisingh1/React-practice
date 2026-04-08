import React, { useState } from "react";

import Girl from "../../assets/girl.jpg";
import { category } from "../../../src/Category";
import Products from "../../components/Products";
import { dummy } from "../../dummydata";


const Home = () => {
  let [cate, setCate] = useState(dummy);
  function filterProducts(category) {
    const updatedata = dummy.filter((item) => item.category === category);
    setCate(updatedata);
  }
  return (
    <>
      
      <div className="w-full h-[500px] flex mt-4 ml-8 ">
        <div className="w-1/2  ">
          <img
            className=" w-full h-full object-cover object-[50%_5%] "
            src={Girl}
            alt=""
          />
        </div>
        <div className="w-1/2 h-{50%} mr-16 text-center  bg-blue-200 font-bold text-2xl ">
          <p className="mt-32 ">
            {" "}
            The <br />
            <div className="ml-9 text-4xl text-red-500">PartyWear</div>
            Haul
          </p>
          <button className="mt-16 text-5xl bg-purple-500 p-2 rounded-2xl">
            Min 50% off
          </button>
          <p className="ml-24 mt-8"> Extra upto 5% off</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-14 flex-wrap" onClick={()=>{
        filterProducts(item.name)
      }}>
        {category.map((item) => (
          <div className="w-[200px] h-[400px]  flex items-center justify-center flex-col">
            <img
              className="  w-full h-[200px] hover:border-green-600 hover:shadow-2xl hover:shadow-slate-700 hover:bg-blend-color-burn object-cover cursor-pointer p-5 border-black border-spacing-4 border-2 rounded-2xl  "
              src={item.img}
              alt=""
            />
            <span className="mt-3 text-lg">{item.name}</span>
          </div>
        ))}
        <div>
          <h1 className="items-center mb-8 flex justify-center font-bold text-3xl text-red-500 shadow-lg shadow-black p-2">
            TRANDING ITEMS
          </h1>
          <div className="w-full p-1 flex items-center justify-center gap-8 flex-wrap">
            {cate.map((item) => (
              <Products name={item.name} price={item.price} image={item.img} />
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
