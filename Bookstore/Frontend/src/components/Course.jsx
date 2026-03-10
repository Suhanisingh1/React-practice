import React from "react";
import Cards from "../components/Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delight to have you{" "}
            <span className="text-pink-500">Here:</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            asperiores maxime ex nemo veniam neque. Deleniti placeat quia qui
            ipsa quaerat id nam eum, pariatur tempore ex. Nulla, quaerat
            doloremque.
          </p>
         <Link to="/" >
          <button className="bg-pink-400 text-white px-6 py-2 rounded-md hover:bg-pink-600 duration-300 mt-6">
            Back
          </button>
         </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 sm:w-96 md:w-auto">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
