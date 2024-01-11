import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import News from "./Pages/News";
import Safe from "./security/safe";
import Fotter from "./Pages/Fotter";
const App = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/homepage">
            Admin
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/news">
                  News🗞️
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Data-upload📁
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Exam📄
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<Safe></Safe>}>
          <Route element={<Homepage />} path="/homepage"></Route>
          <Route element={<News />} path="/news"></Route>
        </Route>
      </Routes>
      <Fotter/>
    </>
    
  );
};

export default App;
