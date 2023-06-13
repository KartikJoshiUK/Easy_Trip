import Banner from "../Containers/Banner";
import Navbar from "../Components/Navbar";
import { viewsData } from "../Constants/test_data";
import Views from "../Containers/Views";
import { useState } from "react";
import { createContext } from "react";
import Contact from "../Containers/Contact";
import Footer from "../Containers/Footer";
import Services from "../Containers/Services";
import Chat from "../Components/chat";

export const HomeContext = createContext();
const Home = () => {
  const [views, setViews] = useState(viewsData.states);
  return (
    <div>
      <HomeContext.Provider value={{ views, setViews }}>
        <Banner />
        <Views />
      </HomeContext.Provider>
      <Services />
      <Chat />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
