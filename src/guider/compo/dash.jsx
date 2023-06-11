import { Card, Space, Statistic,Table,Tag } from 'antd'
import Typography from 'antd/es/typography/Typography'

import {ShoppingCartOutlined,LikeOutlined,DollarOutlined} from "@ant-design/icons"
import {data} from '../dataa'

export const Dash = () => {
     const column=[{
        title:"OrderNo",
        dataIndex:"OrderNo"
    },{
        title:"State",
        dataIndex:"state"
    },
    {
        title:"Place",
        dataIndex:"place"
    }
    ,
    {
        title:"Status",
        dataIndex:"status",
        render: (tag) => {
         var color=tag==="Upcoming"?"red":"green"
         return <Tag color={color}>{tag}</Tag>

        }
         
    },
    {
        title:"Money",
        dataIndex:"Money"
    }
    ]
  return (
    <div className="ml-[40px] mt-1"> 
    <Typography.Title level={4}>Dashboard</Typography.Title>
    <Space direction='horizontal'>
    <Card>
    <Space direction='horizontal'>
    <ShoppingCartOutlined className="text-[30px]"/>
    <Statistic title="Orders"  value={123}/>
    </Space>
    {/* <Button onClick={()=>sethlo(prev=>prev+1)}>click</Button> */}
</Card>
<Card>
    <Space direction='horizontal'>
    <DollarOutlined  className="text-[30px]"/>
    <Statistic title="Revenue"  value={123}/>
    </Space>
    {/* <Button onClick={()=>sethlo(prev=>prev+1)}>click</Button> */}
</Card>
       <Card>
        <Space>
            <LikeOutlined className="text-[30px]"/>
       <Statistic title="Feedback" value="1223" />
       </Space>
       </Card>
    </Space>
    <Table columns={column} dataSource={data} className="mt-3"/>
    </div>
  )
}

