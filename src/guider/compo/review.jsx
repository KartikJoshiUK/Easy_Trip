
import {Avatar, Typography,Card,Rate} from "antd"
export const Review = () => {
  return (
    <div className="flex flex-col"> 
    <Typography.Title level={3}>Costumer-Rating</Typography.Title>
    <Card className="flex flex-col">
      <div className="flex flex-row">
      <Avatar className="relative bottom-[7px]">U</Avatar>
      <span className="font-[500] ml-2">Utkarsh</span>
      </div>
      <div>
      <Rate disabled defaultValue={2} />
      </div>
  <p>lorem40</p>
    </Card>
    </div>
  )
}
