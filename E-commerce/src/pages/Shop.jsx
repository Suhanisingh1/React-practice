import React, { useState } from "react";
import { category } from "../../src/Category";
import { dummy } from "../dummydata";
import Products from "../components/Products";

const Shop = () => {
  const [cate, setCate] = useState(dummy);

  // Filter function
  function filterProducts(catName) {
    if (catName === "All") {
      setCate(dummy);
    } else {
      const updatedData = dummy.filter(
        (item) => item.category === catName
      );
      setCate(updatedData);
    }
  }

  return (
    <>
      {/* Category Section */}
      <div className="w-full flex justify-center items-center gap-10 flex-wrap p-5">
        
        {/* All Button */}
        <div
          onClick={() => filterProducts("All")}
          className="w-[150px] h-[150px] flex items-center justify-center flex-col cursor-pointer border-2 rounded-xl hover:bg-gray-200"
        >
          <span className="text-lg font-semibold">All</span>
        </div>

        {/* Categories */}
        {category.map((item) => (
          <div
            key={item.name}
            onClick={() => filterProducts(item.name)}
            className="w-[150px] h-[150px] flex items-center justify-center flex-col cursor-pointer"
          >
            <img
              className="w-full h-[100px] object-cover p-2 border-2 rounded-xl hover:shadow-xl"
              src={item.img}
              alt={item.name}
            />
            <span className="mt-2 text-lg">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <div className="w-full p-5 flex items-center justify-center gap-8 flex-wrap">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Products
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.img}
            />
          ))
        ) : (
          <p className="text-xl text-gray-500">No Products Found</p>
        )}
      </div>
    </>
  );
};

export default Shop;