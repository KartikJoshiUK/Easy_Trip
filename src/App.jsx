import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Error404 } from "./Pages";
import { createContext, useState } from "react";
import GuideRestration from "./guider/GuideRestration";
import Dashmain from "./guider/dashboard/dashmain";

import Package from "./Pages/Package";
import Information from "./Pages/Information";
export const GlobalContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <Router>
        <Routes>
          <Route exact path="/" element={loggedIn ? <Home /> : <Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/package/:packageId"
            element={<Package key={"state"} packageType={"package"} />}
          />
          <Route
            exact
            path="/cities/:packageId"
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
          <Route exact path="/guide" element={<GuideRestration />} />
          <Route exact path="/guidedashboard/*" element={<Dashmain />} />
          <Route exact path="/guidedashboard/review" element={<Review />} />
          <Route exact path="/guidedashboard/order" element={<Order />} />
          <Route exact path="/guidedashboard/customer" element={<Coustmer />} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
