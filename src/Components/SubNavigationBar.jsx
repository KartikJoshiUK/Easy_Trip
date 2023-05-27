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
          key={button.title}
          className={`rounded-t-md bg-white px-2 transition-all hover:bg-opacity-100 hover:pb-5 md:px-4  ${
            params.views === button.state
              ? "bg-opacity-100 pb-5 pt-1 md:pt-3"
              : "bg-opacity-50 py-1 md:py-3"
          } text-xs md:text-lg`}
          to={`/${button.state}`}
          onClick={() => {
            var scrollDiv = document.getElementById("views").offsetTop;
            if (scrollDiv)
              window.scrollTo({ top: scrollDiv, behavior: "smooth" });
          }}
        >
          {button.title.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default SubNavigationBar;
