import { useState } from "react";
import { Modal, Form, Input } from "antd";
const { TextArea } = Input;

const ContactForm = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = (values) => {
    console.log(values);

    setModalVisible(false);
  };

  return (
    <div>
      <li onClick={handleModalVisible}>ContactUs </li>
      <Modal
        title="Contact Form"
        // visible={modalVisible}
        onCancel={handleModalVisible}
        footer={null}
        bodyStyle={{ backgroundImage: ``, backgroundSize: "cover" }}
      >
        <Form onFinish={handleSubmit}>
          <Form.Item
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              name="email"
              className="opacity-50"
            />
          </Form.Item>
          <Form.Item
            label="Query"
            rules={[
              {
                required: true,
                message: "Please enter your query!",
              },
            ]}
          >
            <TextArea rows={4} name="message" placeholder="Enter your query" />
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ContactForm;
