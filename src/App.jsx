import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Error404 } from "./Pages";
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={loggedIn ? <Home /> : <Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
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
    </Router>
  );
}

export default App;
