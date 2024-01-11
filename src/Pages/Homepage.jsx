import React from "react";
import NewsSection from "./NewsSection";

import Clock from "react-clock";
import { useState,useEffect } from "react";
import 'react-clock/dist/Clock.css';
const Homepage = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h1>Welcome </h1>
      
      
      <div class="container">
        <div class="row">
          <div class="col-10"><NewsSection></NewsSection></div>
          <div class="col"><Clock value={value}>  </Clock></div> 
          
        </div>
      </div>
    </>
  );
};

export default Homepage;
