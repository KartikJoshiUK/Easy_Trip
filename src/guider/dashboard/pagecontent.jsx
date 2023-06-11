import {Routes,Route} from "react-router-dom"
import { Review } from "../compo/review";
import Coustmer from "../compo/coustmer";
import { Order } from "../compo/order";
import { Dash } from "../compo/dash";
import Profile from "../compo/profile";

export const Pagecontent = () => {
  return  <Routes>
  <Route exact path="/review" element={<Review/>} />
  <Route exact path="/coustmer" element={<Coustmer/>} />
  <Route exact path="/order" element={<Order />} />
  <Route exact path="/profile" element={<Profile />} />
  <Route
    exact
    path="/dash"
    element={<Dash/>}
  />
</Routes>
};
