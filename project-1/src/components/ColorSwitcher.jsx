import React from "react";
import Button from "./Button";

const colorSwitcher = () => {
  const colors = ["pink", "blue", "red", "orange", "seagreen"];
  return (
    <div>
      <h1 className="text-lg text-black flex">Color switcher 🎨</h1>
      {colors.map((item) => {
        return <Button key={item} color={"item"}>{item}</Button>;
      })}
    </div>
  );
};

export default colorSwitcher;
