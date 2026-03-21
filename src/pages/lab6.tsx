import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Layout, message } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import axios from "axios";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function EditStory() {

  const nav = useNavigate();
  const [form] = Form.useForm();

  const { data } = useQuery({
    queryKey: ["story", 1],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories/1");
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      await axios.put(`http://localhost:3000/stories/${values.id}`, values);
    },
    onSuccess: () => {
      message.success("Cập nhật thành công!");
      nav("/");
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>
        </div>
      </nav>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Chỉnh sửa truyện
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* FORM */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              disabled={isPending} 
            >
              {/* Bài 1: Validate */}
              <Form.Item
                label="Tên truyện"
                name="title"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Tác giả"
                name="author"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Link ảnh" name="image">
                <Input />
              </Form.Item>

              <Form.Item label="Lượt xem" name="views">
                <Input type="number" />
              </Form.Item>

              <Form.Item name="id" hidden>
                <Input />
              </Form.Item>
            </Form>
          </div>

          {/* ACTION */}
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col gap-4">
            
            {/* Bài 2: Loading */}
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => form.submit()}
              loading={isPending} 
              className="h-12 text-lg"
            >
              Lưu thay đổi
            </Button>

            <Link to="/list">
              <Button className="w-full h-12">
                Quay lại danh sách
              </Button>
            </Link>

            {/* PREVIEW */}
            {form.getFieldValue("image") && (
              <img
                src={form.getFieldValue("image")}
                className="rounded-lg shadow"
              />
            )}
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
}