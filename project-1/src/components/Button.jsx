import React from "react";

const Button = ({color, children }) => {
  return (
    <button className=" text-white m-3 w-20 rounded-lg">
      {children}
    </button>
  );
};

export default Button;
