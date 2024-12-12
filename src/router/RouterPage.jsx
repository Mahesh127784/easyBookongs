import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventDashboard from "../components/eventsAndIndividuals/Dashboard";
import FreelanceServiceDashboard from "../components/serviceProviders/Dashboard";
import Dashboard from "../components/Dashboard";
import HomeOwnersDashBoard from "../components/homeNDresidents/Dashboard";
import SmallBsnsDashboard from "../components/smallLargeBusness/Dashboard";
import Others from "../components/others/Others";
import Plumbers from "../components/homeNDresidents/plumbers/Plumbers";
import Inprogress from "../components/commons/Inprogress";

function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/homeownersDashboard" element={<HomeOwnersDashBoard />} />
        <Route
          path="/serviceProviders"
          element={<FreelanceServiceDashboard />}
        />
        <Route path="/eventOrganize" element={<EventDashboard />} />
        <Route path="/smallbigbusness" element={<SmallBsnsDashboard />} />
        <Route path="/others" element={<Others />} />
        //home applience
        <Route path="/plumbers" element={<Plumbers />} />
        <Route path="/carpenters" element={<Plumbers />} />
        <Route path="/drivers" element={<Plumbers />} />
        <Route path="/cooks" element={<Plumbers />} />
        <Route path="/electricians" element={<Plumbers />} />
        <Route path="/painters " element={<Plumbers />} />
        <Route path="/cleaners" element={<Plumbers />} />
        <Route path="/securityPersonnels" element={<Plumbers />} />
        <Route path="/homeAppliences" element={<Plumbers />} />
        <Route path="/doctors" element={<Plumbers />} />
        <Route path="/beauticians" element={<Plumbers />} />
        <Route path="/inprogress" element={<Inprogress />} />
      </Routes>
    </Router>
  );
}

export default RouterPage;
