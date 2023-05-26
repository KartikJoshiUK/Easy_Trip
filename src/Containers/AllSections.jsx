import StatesSection from "./StatesSection";
import Attractions from "./Attractions";
import Food from "./Food";
import Culture from "./Culture";
import Adventure from "./Adventure";
import Error404 from "../Pages/Error404";
import { useParams } from "react-router-dom";
const AllSections = () => {
  const { sectionName } = useParams();
  switch (sectionName) {
    case "states":
      return <StatesSection />;
    case "attractions":
      return <Attractions />;
    case "culture":
      return <Culture />;
    case "food":
      return <Food />;
    case "adventure":
      return <Adventure />;
    default:
      return (
        <Error404 message="Something went wrong" link="/" linkText="Go Back" />
      );
  }
};

export default AllSections;
