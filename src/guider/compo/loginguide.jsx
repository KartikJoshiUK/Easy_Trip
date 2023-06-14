
import { Card, Form, Input, Button } from 'antd';

const Loginguide = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96">
        <h2 className="text-3xl mb-4">Sign In</h2>
        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Please enter your email',
              },
              {
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Loginguide;