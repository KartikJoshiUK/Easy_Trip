import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Error404 } from "./Pages";
import { useState } from "react";
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
        <Route exact path="/guidedashboard" element={<Dashmain/>} />
        <Route exact path="/guidedashboard/review" element={<Review/>} />
           <Route exact path="/guidedashboard/order" element={<Order/>} />
           <Route exact path="/guidedashboard/customer" element={<Coustmer/>} />
      </Routes>
    </Router>
  );
}

export default App;
