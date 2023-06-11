import { Link } from "react-router-dom";
import "../../cssfiles/side.css";
import {DashboardOutlined,TeamOutlined,CommentOutlined,ShoppingCartOutlined} from "@ant-design/icons"
export const Sidebar = () => {
  return (
    <div className="containear ml-2 flex h-[50%] w-[200px]   border-[3px] border-black">
      <ul className="flex h-full w-full flex-col font-bold">
        <li className=" mt-4 flex h-full w-full items-center  hover:bg-blue-700 hover:text-white">
          <Link className="h-full w-full " to={"/guidedashboard/dash"}>
          <DashboardOutlined className="text-[23px] relative bottom-[5px]" /> Dashboard
          </Link>
        </li>

        <li className="mt-4 flex h-full w-full items-center p-1 hover:bg-blue-700 hover:text-white">
          <Link className="h-full w-full" to={"/guidedashboard/coustmer"}>
          <TeamOutlined className="text-[23px] relative bottom-[5px]"/>  CustomerDetail
          </Link>
        </li>  
        <li className="mt-4 flex h-full w-full items-center p-1 hover:bg-blue-700 hover:text-white">
          <Link className="h-full w-full" to={"/guidedashboard/order"}>
          <ShoppingCartOutlined className="text-[23px] relative bottom-[5px]"/>  Order
          </Link>
        </li>
        <li className="mt-4 flex h-full w-full items-center p-1 hover:bg-blue-700 hover:text-white">
          <Link className="h-full w-full" to={"/guidedashboard/review"}>
          <CommentOutlined  className="text-[23px] relative bottom-[5px]"/>  Review
          </Link>
        </li>
      
      </ul>
    </div>
  );
};
