import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Error404 } from "./Pages";
import { GlobalContext } from "./App";
import GuideRestration from "./guider/GuideRestration";
import Dashmain from "./guider/dashboard/dashmain";
import Review from "./guider/compo/review";
import Coustmer from "./guider/compo/coustmer";
const RouterGuide = () => {
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
      <Route exact path="/*" element={<Dashmain />} />
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

export default RouterGuide;
