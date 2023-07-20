import React, { useState } from "react";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className=" font-sans bg-[#fafafa] dark:bg-[#202C37] min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
