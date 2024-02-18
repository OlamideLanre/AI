import { useState } from "react";
import "./App.css";
import NavBar from "../../AI-SIte/src/components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "../../AI-SIte/src/components/Footer";
import Home from "../../AI-SIte/src/pages/Home";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about">About</Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
