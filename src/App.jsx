import React from "react";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className=" font-sans bg-[#fafafa] min-h-screen">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
