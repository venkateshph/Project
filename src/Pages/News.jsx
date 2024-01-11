import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import NewsSection from "./NewsSection";
import { motion } from "framer-motion";
import supabase from "../security/pass";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const News = () => {
  const [title, SetTile] = useState("");
  const [content, SetContent] = useState(null);
  const [yes, setYes] = useState(false);

  async function upload() {
    setYes(true);
    const { data, error } = await supabase
      .from("News")
      .insert({ Title: title, News: content });
      
    setYes(false);
    alert("sucess full uploaded")
    console.log(error);
  }
  const onFinish = (values) => {
    console.log("Success:", values);
    SetTile(values.Title);
    SetContent(values.Content);
    setYes(true);
    upload();
    
  };

  
  return (
    <>
      <motion.div animate={{ y: 30 }} transition={{ delay: 0.2 }}>
        <div class="d-flex">
          <div class="p-3 flex-sm-fill ">
            <div className="card" style={{ width: "30rem" }}>
              <div className="card-body">
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  <marquee direction="right">Content Section : ⬇️</marquee>
                </h6>
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
                    label="Title📄"
                    name="Title"
                    rules={[
                      {
                        required: true,
                        message: "Title",
                      },
                    ]}
                  >
                    <Input onChange={(e) => SetTile(e.target.value)} />
                  </Form.Item>

                  <Form.Item
                    label="Content✍️"
                    name="Content"
                    rules={[
                      {
                        required: true,
                        message: "Content✍️",
                      },
                    ]}
                  >
                    <Input onChange={(e) => SetContent(e.target.value)} />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    {yes ? (
                      <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <Button type="primary" htmlType="submit"  id="liveToastBtn">
                        Upload
                      </Button>
                    )}
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>

          <div className="p-2">
            <marquee direction="right">Lasted you posted: 🗞️</marquee>
            <NewsSection />
          </div>
        </div>
      </motion.div>
      
    </>
  );
};
export default News;
