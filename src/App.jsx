import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Error404 } from "./Pages";
import { useState } from "react";
import GuideRestration from "./guider/GuideRestration";
import Dashmain from "./guider/dashboard/dashmain";

import Package from "./Pages/Package";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={loggedIn ? <Home /> : <Login login={setLoggedIn} />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/package" element={<Package />} />
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
        
      </Routes>
    </Router>
  );
}

export default App;
