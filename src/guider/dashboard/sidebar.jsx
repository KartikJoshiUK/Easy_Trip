import { Link } from "react-router-dom";
import "../../cssfiles/side.css";

export const Sidebar = () => {
  return (
    <div className="containear ml-2 mt-4 flex h-[50%] w-[200px] pt-2 shadow-lg shadow-cyan-500/50">
      <ul className="flex h-full w-full flex-col p-2 font-bold">
        <li className=" mt-4 flex h-full w-full items-center p-1 hover:bg-blue-700 hover:text-white">
          <Link className="h-full w-full" to={"/guidedashboard/p1"}>
            Dashboard
          </Link>
        </li>

        <li className="mt-4 flex h-full w-full items-center p-1 hover:bg-blue-700 hover:text-white">
          <Link className="h-full w-full" to={"/guidedashboard/p2"}>
            CustomerDetail
          </Link>
        </li>
        <li className="mt-4 flex h-full w-full items-center p-1 hover:bg-blue-700 hover:text-white">
          <Link className="h-full w-full" to={"/guidedashboard/p3"}>
            Review
          </Link>
        </li>
        <li className="mt-4 flex h-full w-full items-center p-1 hover:bg-blue-700 hover:text-white">
          <Link className="h-full w-full" to={"/guidedashboard/order"}>
            Order
          </Link>
        </li>
      </ul>
    </div>
  );
};
