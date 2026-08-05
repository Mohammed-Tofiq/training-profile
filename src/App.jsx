import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginFile from "./components/LoginFile";
import Signinfile from "./components/Signinfile";
import Home from "./components/Home";
import Practice from "./components/Practice";
import { Fragment } from "react";

function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

function App() {
  console.log("app component rendering");

  return (
    <>
      <br />
      <Routes>
        <Route path="/" element={<LoginFile />} />
        <Route path="/signin" element={<Signinfile />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>

    </>
  );
}

export default App;
