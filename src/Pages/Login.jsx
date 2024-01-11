import React, { useEffect, useState } from "react";
//import "../App.css";
import { Button, Typography, Form, Input } from "antd";
import { Link } from "react-router-dom";
import supabase from "../security/pass";
const { Title } = Typography;

const onFinishFailed = (errorInfo) => {
  alert("Enter username or password");
};

const Login = () => {
  const [login, setLogin] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setLogin(JSON.parse(window.localStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", login);
  }, [login]);
  async function Check(username, password) {
    setloading(true);
    let { data: username_data, err } = await supabase.from("Data").select("*");
    setloading(false);
    if (
      username_data[0].Username == username &&
      password == username_data[0].Password
    ) {
      setLogin(true);
      console.log("correct");
    } else {
      alert("Password or Username mismatch");
    }
  }
  const onFinish = (values) => {
    Check(values.username, values.password);
  };
  return (
    <>
      <div class="postion-relative">
        <div class="position-absolute top-50 start-50 translate-middle">
          <Title level={3} class="text-center">
            Login
          </Title>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              {login ? (
                <Link to="/homepage">GO👉</Link>
              ) : (
                <Button type="default" className="testing" htmlType="submit">
                  Submit👆
                </Button>
              )}

              {loading ? (
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="sr-only"></span>
                </div>
              ) : (
                console.log("error")
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
