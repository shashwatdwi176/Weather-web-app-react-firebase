import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Weathercard from "./component/weather/weathercard";
import AddEdit from "./component/pages/AddEdit";
import View from "./component/pages/View";
import About from "./component/pages/About";
import LoginPage from "./component/pages/LoginPage";
import Header from "./component/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <ToastContainer position = "top-center"/>
        <Routes>
          <Route path="/home" element={<Weathercard />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about/:id" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
