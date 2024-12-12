import React from "react";

const Cards = ({ navigate, data, image, openTile, header }) => {
  return (
    <div
      onClick={() => openTile(navigate)}
      className={`w-80 h-52 p-2 cursor-pointer border rounded-lg shadow-md bg-white transform transition duration-1000 hover:bg-gray-300 hover:scale-105 shadow-xl `}
    >
      <div className="px-4 py-2">
        <div className="text-lg font-semibold text-gray-800">{header}</div>
        {image && <img className="h-32 w-52" src={image} alt="Example" />}
        {data && (
          <div className="text-lg font-semibold text-gray-700">{data}</div>
        )}
        {data && (
          <div className="text-lg font-semibold text-gray-700">{data}</div>
        )}
      </div>
    </div>
  );
};

export default Cards;
