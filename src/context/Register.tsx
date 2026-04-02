// pages/Register.tsx
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStore";


const Register = () => {
  const { setAuth } = useAuthStore();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post("http://localhost:3000/register", form);
      return res.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      alert("Đăng ký + đăng nhập thành công");
    },
    onError: () => {
      alert("Đăng ký thất bại");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate();
      }}
    >
      <input
        placeholder="username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;