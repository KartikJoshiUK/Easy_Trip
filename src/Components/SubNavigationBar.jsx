import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const buttons = [
  { title: "States", state: "states" },
  { title: "Attractions", state: "attractions" },
  { title: "Culture", state: "culture" },
  { title: "Food", state: "food" },
  { title: "Adventure", state: "adventure" },
];
const SubNavigationBar = () => {
  const params = useParams();
  return (
    <div className="flex items-end justify-center gap-1 md:gap-4">
      {buttons.map((button) => (
        <Link
          className={`rounded-t-md bg-white bg-opacity-50 px-2 py-1 transition-all hover:bg-opacity-100 hover:pb-5 md:px-4 md:py-3 ${
            params.sectionName === button.state ? "bg-opacity-100 pb-5" : ""
          } text-xs md:text-lg`}
          to={`/${button.state}`}
        >
          {button.title.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default SubNavigationBar;
