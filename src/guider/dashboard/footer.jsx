import Typography from "antd/es/typography/Typography"


export const Footer = () => {
  return (
    <div className="h-[50px] flex justify-evenly items-center border-t-[1px]  border-solid border-[rgba(0,0,0,0.15)]">
        <Typography.Link>Contact no</Typography.Link>
        <Typography.Link>Privacy Policy</Typography.Link>
        <Typography.Link>Term of Use</Typography.Link>
    </div>
  )
}
