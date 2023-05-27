import Banner from "../Containers/Banner";
import { AnimatePresence } from "framer-motion";
import { viewsData } from "../Constants/test_data";
import Views from "../Containers/Views";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const HomeContext = createContext();
const Home = () => {
  const params = useParams();
  const [views, setViews] = useState(viewsData.states);
  useEffect(() => {
    if (params.views === undefined) setViews(viewsData.states);
    else setViews(viewsData[params.views]);
  }, [params]);
  return (
    <div>
      <HomeContext.Provider value={{ views }}>
        <Banner />
        <AnimatePresence>
          <Views />
        </AnimatePresence>
      </HomeContext.Provider>
    </div>
  );
};

export default Home;
