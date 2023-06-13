import {Routes,Route} from "react-router-dom";

import Coustmer from "../compo/coustmer";

import { Dash } from "../compo/dash";
import Profile from "../compo/profile";
import Review from "../compo/review";

export const Pagecontent = () => {
  return  <Routes>
  <Route exact path="/review" element={<Review/>} />
  <Route exact path="/coustmer" element={<Coustmer/>} />
  
  <Route exact path="/profile" element={<Profile />} />
  <Route
    exact
    path="/dash"
    element={<Dash/>}
  />
</Routes>
};
