import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import IndividualPage from "./pages/Individual Page/IndividualPage";
import Layout from "./shared components/Layout";
let allMovies = [];
function App() {
  const { filmId } = useParams();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/trending/:filmId" element={<IndividualPage />} />
        <Route path="/top/:filmId" element={<IndividualPage />} />
        <Route path="/upcoming/:filmId" element={<IndividualPage />} />
        <Route path="/nowPlaying/:filmId" element={<IndividualPage />} />
        <Route path="/popular/:filmId" element={<IndividualPage />} />
      </Route>
    </Routes>
  );
}

export default App;
