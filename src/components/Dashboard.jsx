import React from "react";
import Cards from "./commons/Cards";
import { useNavigate } from "react-router-dom";
import { homeDashboardData } from "../utils/jsonData.js";

function Dashboard() {
  const navigate = useNavigate();
  const data = homeDashboardData;

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

export default Dashboard;
