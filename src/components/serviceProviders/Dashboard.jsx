import React from "react";
import { useNavigate } from "react-router-dom";
import { serviceProviders } from "../../utils/jsonData";
import Cards from "../commons/Cards";

function FreelanceServiceDashboard() {
  const navigate = useNavigate();

  const data = serviceProviders;
  const openTile = (title) => {
    navigate(`/${title}`);
  };

  return (
    <>
      <div className="flex flex-wrap ml-5 mt-5 gap-5">
        {data.map((val) => (
          <Cards
            key={val.title}
            navigate={val.navigate}
            image={val.image}
            openTile={openTile}
            header={val.title}
          />
        ))}
      </div>
    </>
  );
}

export default FreelanceServiceDashboard;
