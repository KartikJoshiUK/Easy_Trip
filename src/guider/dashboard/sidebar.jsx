import { Link } from "react-router-dom";
import "../../cssfiles/side.css";
import {DashboardOutlined,TeamOutlined,CommentOutlined} from "@ant-design/icons"
export const Sidebar = () => {
  return (
    <div className="container ml-2 mt-3 flex h-[38%] w-[200px] bg-gradient-to-b from-purple-400 to-indigo-500 rounded-lg shadow-lg">
    <ul className="flex flex-col h-full w-full font-bold">
      <li className="mt-4 flex h-full w-full items-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
        <Link className="h-full w-full flex items-center gap-2 p-2" to="/dash">
          <DashboardOutlined className="text-white text-[23px] relative bottom-[5px]" />
          <span className="text-white">Dashboard</span>
        </Link>
      </li>
  
      <li className="mt-4 flex h-full w-full items-center p-2 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
        <Link className="h-full w-full flex items-center gap-2" to="/coustmer">
          <TeamOutlined className="text-white text-[23px] relative bottom-[5px]" />
          <span className="text-white">Customer Detail</span>
        </Link>
      </li>
  
      <li className="mt-4 flex h-full w-full items-center p-2 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
        <Link className="h-full w-full flex items-center gap-2" to="/review">
          <CommentOutlined className="text-white text-[23px] relative bottom-[5px]" />
          <span className="text-white">Review</span>
        </Link>
      </li>
    </ul>
  </div>
  );
};
