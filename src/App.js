import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Form from "./Components/Form";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";
import Navbar from "./Components/Navbar";
import React from "react";

export default function App2() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing hello="Hello World" />}>
            <Route path="form" element={<Form />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
