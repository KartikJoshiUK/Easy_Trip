import { Typography,Tag,Table } from "antd";
import {data1} from '../dataa'
const Coustmer = () => {
  const column=[
{
    title:"CustomerNo",
    dataIndex:"CustomerNo"
},
{
  title:"CustomerId",
  dataIndex:"CustomerId"
},
{
    title:"Name",
    dataIndex:"name"
},
{
    title:"E-mail",
    dataIndex:"email"
}
,
{
   title:"PhoneNumber",
   dataIndex:"phoneno"
},
{
    title:"Date",
    dataIndex:"Date",
    render: (tag) => {
      var color="red"
      return <Tag color={color}>{tag}</Tag>

     }
    
     
},
{
    title:"State",
    dataIndex:"state"
},
{
    title:"CheckIn",
    dataIndex:"CheckIn"
},
{
title:"DropIn",
dataIndex:"DropIN"
}]
  return <div className="ml-[20px]">
    <Typography.Title level={4} className="ml-[30%]">Coustmers-Details</Typography.Title>
    <Table columns={column} dataSource={data1} className="mt-3"/>
    </div>
};
export default Coustmer;
