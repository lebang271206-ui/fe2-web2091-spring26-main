import { Form, Input, Button, InputNumber, Select, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Add = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <>
            <nav className="bg-blue-600 text-white shadow">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="#" className="text-xl font-semibold">
                        <strong>WEB2091 App</strong>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="#" className="hover:text-gray-200">
                            Trang chủ
                        </Link>
                        <Link to="/list" className="hover:text-gray-200">
                            Danh sách
                        </Link>
                        <Link to="/add" className="hover:text-gray-200">
                            Thêm mới
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/login" className="hover:text-gray-200">
                            Đăng nhập
                        </Link>
                        <Link to="/register" className="hover:text-gray-200">
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
                <Layout>
                    <Header style={{ color: "white" }}>Header</Header>
                    <Content style={{ padding: 20 }}>
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="Giá" name="price" rules={[{ required: true }]}>
                                <InputNumber style={{ width: "100%" }} />
                            </Form.Item>

                            <Form.Item label="Danh mục" name="category">
                                <Select
                                    placeholder="Chọn danh mục"
                                    options={[
                                        { label: "Laptop", value: "laptop" },
                                        { label: "Điện thoại", value: "phone" },
                                        { label: "Tablet", value: "tablet" },
                                        { label: "Phụ kiện", value: "accessory" },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item label="Mô tả" name="description">
                                <Input.TextArea rows={4} />
                            </Form.Item>

                            <Button type="primary" htmlType="submit">
                                Thêm sản phẩm
                            </Button>
                        </Form>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>

            <Toaster />
        </>
    );
};

export default Add;