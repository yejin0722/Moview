import "./App.css";
import { Routes, Route } from "react-router-dom";
/* layouts */
import AppLayout from "./layouts/AppLayout";
/* pages */
import HomePage from "./pages/homepage/HomePage";
import MoviePage from "./pages/moviepage/MoviePage";
import MovieDetailPage from "./pages/moviedetailpage/MovieDetailPage";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./layouts/Footer";
/* css */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        {/* 기존 movies 경로 유지 */}
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
        {/* 새로운 movie 경로 추가 */}
        <Route path="movie/:id" element={<MovieDetailPage />} />
        <Route path="login" element={<Login />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
