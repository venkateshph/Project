import { React, useEffect, useState } from "react";

import supabase from "../security/pass";
import { Skeleton } from "antd";
import { motion } from "framer-motion";
const NewsSection = () => {
  const [created, setCreated] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const fecth = async () => {
    const { data: username_data, err } = await supabase
      .from("News")
      .select("*")
      .range(0, 10);
    setIsloading(false);
    setCreated(username_data);
  };
  useEffect(() => {
    
   fecth();
     supabase.channel("custom-filter-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Nes", filter: "News" },
        (payload) => {
          console.log("Change received!", payload);
          fecth();
        }
      )
      .subscribe();
      ;
  }, );

  return (
    <>
      {isloading ? (
        <Skeleton active style={{ width: "18rem" }} />
      ) : (
        <motion.div animate={{ y: 30, scale: 1 }}>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">News:</h5>
              <h6 class="card-subtitle mb-2 text-muted">Posted Latest👇</h6>
              <ul class="list-group list-group-flush">
                {created.map((data) => (
                  <li class="list-group-item" key={data.id}>
                    {data.News}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NewsSection;
