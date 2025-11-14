import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FilmDetail from "./pages/FilmDetail";
import Wishlist from "./components/Wishlist";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:category/:id" element={<FilmDetail />} />
    <Route path="/wishlist" element={<Wishlist />} />
  </Routes>
);

export default App;
