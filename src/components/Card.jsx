import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col p-4 space-y-1 rounded-md dark:bg-gray-50 border">
      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-indigo-600 dark:text-gray-50">
        {data?.product_id}
      </div>
      <h5 className="text-lg font-semibold ">{data?.title}</h5>
      <p className="text-sm">{data?.description}</p>
      <p className="text-lg">
        Price: <b> ${data?.price}</b>
      </p>
    </div>
  );
};

export default Card;
