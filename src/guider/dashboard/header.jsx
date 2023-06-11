import { Typography,Space,Badge} from "antd"
import { motion } from "framer-motion"
import {MailOutlined} from "@ant-design/icons";
import Menupro from "../compo/Menu";

export const Header = () => {
  return (
    <div className="h-[50px] flex box-border border-b-[1px] justify-between items-center pl-[10px] pt-[20px] pr-[20px] pb-[20px] 
     border-solid border-[rgba(0,0,0,0.15)]">
         <motion.h2
         
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ type: "spring", stiffness: 100 }}
          className="font-bold text-[25px]">
            EasyTrip
            </motion.h2>
         
            <Typography.Title className="mt-[10px]">Jatin Dashboard</Typography.Title>
            <Space>
                <Badge dot>
            <MailOutlined  className="text-[25px]"/>
            </Badge>
          <Menupro/>
                </Space>

    </div>
  )
}
