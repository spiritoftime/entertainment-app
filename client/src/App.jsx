import { Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import AllPage from "./pages/AllPage/AllPage";
import HomePage from "./pages/HomePage/HomePage";
import IndividualPage from "./pages/Individual Page/IndividualPage";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/register page/Register";
import Layout from "./shared components/Layout";

function App() {
  const { filmId, filmType, category } = useParams();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/trending/:filmId"
          element={<IndividualPage genre="movie" />}
        />
        <Route path="/top/:filmId" element={<IndividualPage genre="movie" />} />
        <Route
          path="/upcoming/:filmId"
          element={<IndividualPage genre="movie" />}
        />
        <Route
          path="/now_playing/:filmId"
          element={<IndividualPage genre="movie" />}
        />
        <Route
          path="/popular/:filmId"
          element={<IndividualPage genre="movie" />}
        />
        <Route path="/:category/:filmType/week" element={<AllPage />} />
      </Route>
    </Routes>
  );
}

export default App;
