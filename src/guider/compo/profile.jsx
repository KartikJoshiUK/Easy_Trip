import { useFormik } from "formik";
import { Typography,Card,Form,Input, Upload,Row,Col} from "antd";


import {PlusOutlined}  from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";
const Profile = () => {
  
 

  return< >
   <Typography.Title level={3} className="ml-3 " >Your Profile</Typography.Title>
   <Card className="h-[80%] w-[50%] relative top-12">
  <Form layout="vertical">
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item name="name" label="Name" className="font-500">
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Photo" valuePropName="fileList" className="flex">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        
      >
    
      </Upload>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="language" label="Language" className="font-500">
          <Input />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item name="experience" label="Experience" className="font-500">
          <TextArea />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="url"
          label="URL"
          rules={[
            {
              required: true,
            },
            {
              type: 'url',
              warningOnly: true,
            },
            {
              type: 'string',
              min: 6,
            },
          ]}
        >
          <Input placeholder="Input placeholder" />
        </Form.Item>
     
      </Col>
    </Row>
    {/* Add more rows/columns for additional Form.Item components */}
    
    <Button type="primary" className="w-full "  style={{ backgroundColor: '#096dd9' }}>Update</Button>
       
  </Form>
</Card>

  </>
};

export default Profile;