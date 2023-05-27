import Banner from "../Containers/Banner";
import AllSections from "../Containers/AllSections";
import { Navbar } from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
            
      <Banner />
      <AllSections />
    </div>
  );
};

export default Home;
