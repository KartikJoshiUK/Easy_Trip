import "../../cssfiles/side.css"
import {Card} from "antd"

export const Sidebar = () => {
  return <Card   className="containear h-[50%] mt-4 shadow-lg shadow-cyan-500/50 ml-2 pt-2 flex w-[200px]">
  <ul className="flex flex-col font-bold h-full ">
    <li className="h-[30px] mt-4  w-[150px]">Dashboard</li>
 
    <li className="h-[30px] mt-4 w-[150px]">CustomerDetail</li>
    <li className="h-[30px] mt-4 w-[150px]">Review</li>
  </ul>
  </Card>
}
