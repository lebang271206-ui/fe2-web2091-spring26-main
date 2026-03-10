import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Button, Table, Modal } from "antd";
import { useState } from "react";

const { Header, Sider, Footer, Content } = Layout;

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },
];

function Lab1() {
  const [users, setUsers] = useState([
    { key: 1, name: "John", email: "john@gmail.com", role: "Admin" },
    { key: 2, name: "Anna", email: "anna@gmail.com", role: "User" },
  ]);

  const [open, setOpen] = useState(false);


  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    const newUser = {
      key: users.length + 1,
      ...values,
    };

    setUsers([...users, newUser]);
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">

        <Layout>
          <Sider style={{ background: "#001529", color: "white" }}>
            Sidebar
          </Sider>

          <Layout>
            <Header style={{ color: "white" }}>Header</Header>

            <Content style={{ padding: 20 }}>

              {/* ADD USER BUTTON */}
              <Button
                type="primary"
                onClick={showModal}
                style={{ marginBottom: 20 }}
              >
                Add User
              </Button>

              {/* TABLE */}
              <Table columns={columns} dataSource={users} />

            </Content>

            <Footer>Footer</Footer>
          </Layout>
        </Layout>

        {/* MODAL */}
        <Modal
          title="Add User"
          open={open}
          footer={null}
          onCancel={handleCancel}
        >
          <Form onFinish={onFinish} layout="vertical">

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Nhập tên" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Nhập email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Nhập role" }]}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Add User
            </Button>

          </Form>
        </Modal>

      </div>

      <Toaster />
    </>
  );
}

export default Lab1;