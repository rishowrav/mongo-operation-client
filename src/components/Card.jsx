import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col p-4 space-y-1 rounded-md dark:bg-gray-50 border">
      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-indigo-600 dark:text-gray-50">
        1
      </div>
      <h5 className="text-lg font-semibold ">Nostrum, corrupti blanditiis.</h5>
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex provident
        numquam modi quos eaque voluptatibus praesentium.
      </p>
      <p className="text-lg">Price: $45.00</p>
    </div>
  );
};

export default Card;
