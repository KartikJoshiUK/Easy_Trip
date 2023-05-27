import Banner from "../Containers/Banner";
import { AnimatePresence } from "framer-motion";
import { viewsData } from "../Constants/test_data";
import Views from "../Containers/Views";
import { useParams } from "react-router-dom";
const Home = () => {
  const params = useParams();
  return (
    <div>
      <Banner />
      <AnimatePresence>
        <Views
          data={
            params.views === undefined
              ? viewsData.states
              : viewsData[params.views]
          }
        />
      </AnimatePresence>
    </div>
  );
};

export default Home;
