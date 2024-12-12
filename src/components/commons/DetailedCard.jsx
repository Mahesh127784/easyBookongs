import React from "react";

function DetailedCard({ name, navigate, image, location, openTile }) {
  return (
    <div
      onClick={() => openTile(navigate)}
      className={`w-[800px] h-52 p-2 cursor-pointer border rounded-lg shadow-md bg-white transform transition duration-1000 hover:bg-gray-300 hover:scale-105 shadow-xl `}
    >
      <div className="px-4 flex py-2">
        {image && <img className="h-40 w-40" src={image} alt="Example" />}
        <div className="">
          <div className="text-lg ml-20 font-bold text-3xl text-gray-800">
            {name}
          </div>
          {location && (
            <div className="text-lg font-semibold text-gray-700">
              {location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailedCard;
