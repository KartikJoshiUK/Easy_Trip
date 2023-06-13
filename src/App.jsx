import { createContext, useState } from "react";
import RouterTourist from "./RouterTourist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404, Login, Signup } from "./Pages";
import UserType from "./Pages/UserType";
import GuideRestration from "./guider/GuideRestration";
import RouterGuide from "./RouterGuide";
export const GlobalContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({ type: "tourist" });
  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <BrowserRouter>
        <Routes>
          {user?.type === undefined ? (
            <>
              <Route exact path="/login" element={<UserType />} />
              <Route exact path="/signup" element={<UserType />} />
              <Route exact path="/" element={<UserType />} />
            </>
          ) : user.type === "tourist" ? (
            <>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/*" element={<RouterTourist />} />
            </>
          ) : (
            <>
              <Route exact path="/login" element={<GuideRestration />} />
              <Route exact path="/signup" element={<GuideRestration />} />
              <Route exact path="/*" element={<RouterGuide />} />
            </>
          )}
          <Route
            exact
            path="/*"
            element={
              <Error404
                message={"Url you entered is wrong"}
                link={"/"}
                linkText={"Go to Main Page"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
