import { useState } from "react";
import Header from "./components/header";
import Blue from "./components/blue";
import Red from "./components/red";
import Home from "./components/home";
import Error from "./components/error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/red" element={<Red />}></Route>
        <Route path="/blue" element={<Blue />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );

  
}

export default App;
