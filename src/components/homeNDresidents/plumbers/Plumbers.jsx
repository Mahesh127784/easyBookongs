import React from "react";
import { plumbersData } from "../../../utils/jsonData";
import DetailedCard from "../../commons/DetailedCard";
import { useNavigate } from "react-router-dom";

function Plumbers() {
  const navigate = useNavigate();

  const data = plumbersData;
  const openTile = (title) => {
    navigate(`/${title}`);
  };
  return (
    <>
      <div className="flex flex-wrap ml-5 mt-5 gap-5">
        {data.map((val) => (
          <DetailedCard
            key={val.name}
            name={val.name}
            navigate={val.navigate}
            image={val.image}
            openTile={openTile}
            location={val.location}
          />
        ))}
      </div>
    </>
  );
}

export default Plumbers;
