import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Layout, Popconfirm, Table } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export function StoryList() {
  const { data, isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });
  const qc = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (id: number) =>
      await axios.delete(`http://localhost:3000/stories/${id}`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["stories"] });
    },
  });
  const columns = [
    {
      title: "Ten truyen",
      dataIndex: "title",
    },
    {
      title: "Tac gia",
      dataIndex: "author",
    },
    {
      title: "Hinh anh",
      dataIndex: "image",
      render: (src: string) => <Image src={src} height={100} />,
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Popconfirm
          title="Delete the story"
          description="Are you sure to delete this story?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => mutate(record.id)}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return <>
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
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Layout>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>
           <Table columns={columns} dataSource={data} loading={isLoading} pagination={{ pageSize: 5 }} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <Toaster />
    </>
}