import { Form, Input, Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
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
                        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
                            <Form.Item label="Email" name="email" rules={[
                                { required: true, message: "Vui lòng nhập email" },
                                { type: "email", message: "Email không hợp lệ" },
                            ]}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="Password" name="password" rules={[
                                { required: true, message: "Vui lòng nhập Mật khẩu" },
                                { min: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
                            ]}>
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>

            <Toaster />
        </>
    );
};

export default Login;