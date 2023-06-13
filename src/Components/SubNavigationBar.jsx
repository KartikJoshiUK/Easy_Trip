import { useContext } from "react";
import { viewsData } from "../Constants/test_data";
import { HomeContext } from "../Pages/Home";
const buttons = Object.keys(viewsData).map((keyName) => {
  return {
    title: viewsData[keyName].buttonText,
    state: viewsData[keyName].key,
  };
});
const SubNavigationBar = () => {
  const { views, setViews } = useContext(HomeContext);
  return (
    <div className="flex items-end justify-center gap-1 md:gap-4">
      {buttons.map((button) => (
        <button
          key={button.title}
          className={`rounded-t-md bg-white px-2 transition-all hover:bg-opacity-100 hover:pb-5 md:px-4  ${
            views?.key === button.state
              ? "bg-opacity-100 pb-5 pt-1 md:pt-3"
              : "bg-opacity-50 py-1 md:py-3"
          } text-xs md:text-lg`}
          onClick={() => {
            setViews(viewsData[button.state]);
            var scrollDiv = document.getElementById("views").offsetTop;
            if (scrollDiv)
              window.scrollTo({ top: scrollDiv, behavior: "smooth" });
          }}
        >
          {button.title.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default SubNavigationBar;
