import { Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import AllCategoriesPage from "./pages/AllCategoriesPage/AllCategoriesPage";
import AllPage from "./pages/AllPage/AllPage";
import Categories from "./pages/categories page/Categories";
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
        <Route index element={<HomePage type="movie" />} />
        <Route path="/tv_categories" element={<Categories type="tv" />} />
        <Route path="/movie_categories" element={<Categories type="movie" />} />
        <Route path="/movie" element={<AllPage type="movie" />} />
        <Route path="/tv" element={<AllPage type="tv" />} />

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
