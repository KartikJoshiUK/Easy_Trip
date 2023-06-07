import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { Pagecontent } from "./pagecontent";
import { Header } from "./header";
import { Route, Routes } from "react-router-dom";

const Dashmain = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/p1" element={<Pagecontent data={"X"} />} />
          <Route exact path="/p2" element={<Pagecontent data={"Y"} />} />
          <Route exact path="/p3" element={<Pagecontent data={"Z"} />} />
          <Route
            exact
            path="/"
            element={<div className="text-7xl">HELLO</div>}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default Dashmain;
