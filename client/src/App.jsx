import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./shared components/Layout";
let allMovies = [];
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default App;
