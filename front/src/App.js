import "./App.css";
import { Main, About, Partner, Shop, Contact, Forum } from "./pages";
import { Header, Loading } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const [C_color, setC_color] = useState("#7aaaff");
  return (
    <div className="App">
      <Header setC_color={setC_color} />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Forum color={C_color} />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
