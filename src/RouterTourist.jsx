import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Error404 } from "./Pages";
import Package from "./Pages/Package";
import Information from "./Pages/Information";
import { GlobalContext } from "./App";
const RouterTourist = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(GlobalContext);
  useEffect(() => {
    if (!loggedIn) navigate("/login");
  }, []);
  if (!loggedIn) {
    return <p>Pedirecting to login page</p>;
  }
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/package/:packageId"
        element={<Package key={"state"} packageType={"package"} />}
      />
      <Route
        exact
        path="/city/:packageId"
        element={<Package key={"city"} packageType={"city"} />}
      />
      <Route
        exact
        path="/:pageName/:pageId"
        element={<Information key={"Information"} />}
      />
      <Route
        exact
        path="*"
        element={
          <Error404
            message="Looks like you lost your way"
            link="/"
            linkText="Go to home"
          />
        }
      />
    </Routes>
  );
};

export default RouterTourist;
