import Banner from "../Containers/Banner";
import Navbar from "../Components/Navbar";
import Footer from "../Containers/Footer";
import { viewsData } from "../Constants/test_data";
import Views from "../Containers/Views";
import { useState } from "react";
import { createContext } from "react";
import Contact from "../Containers/Contact";
import Services from "../Containers/Services";

export const HomeContext = createContext();
const Home = () => {
  const [views, setViews] = useState(viewsData.states);
  return (
    <div>
      <Navbar />
      <HomeContext.Provider value={{ views, setViews }}>
        <Banner />
        <Views />
      </HomeContext.Provider>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
